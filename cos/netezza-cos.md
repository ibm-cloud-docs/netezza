---

copyright:
  years: 2025
lastupdated: "2025-05-16"

keywords: netezza cos

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:tip: .tip}
{:important: .important}
{:note: .note}
{:codeblock: .codeblock}
{:screen: .screen}
{:caption: .caption}

# Netezza Cloud Object Storage (COS) User Guide Specification
{: #netezzacldstrge}

## Objective
{: #objectve}

To enhance the competitiveness of the Netezza cloud offering, we provide a cost-effective storage option using Cloud Object Storage (COS) for NzSaaS and BYOC(/CVPC) platforms. COS serves as persistent storage for user data at a lower cost compared to managed block volumes like EBS.

- **Host Catalog** (`/nz/data` partition) remains on block storage.
- Available for both new and existing customers.
- Existing customers can add COS bucket configuration during upgrades supporting COS.
- Each Netezza instance uses one exclusive COS bucket with read/write access by NPS only.
- Hybrid storage model: Customers choose storage type (block or object) at table level or set default at database level.
- Tables stored in COS retain all current features and functionality.

## Functional specifications
{: #funcspec}

### System Provisioning
{: #sysprov}

- New deployments automatically provision a COS bucket during system update.

### Access Management
{: #accessmng}

- SPUs have access to the COS bucket via host or config-map credentials.
- On platforms with IAM or similar, SPUs are configured accordingly.
- Bucket changes (e.g., endpoint updates) supported without downtime.
- Multiple authentication methods supported: IAM roles, profile credentials, bucket policies.

### SQL Interface Enhancements
{: #sqlinte}

Customers can specify storage types through SQL commands:

```sql
CREATE TABLE T1 (c1 INT) WITH STORAGE_TYPE AS OBJECT;
CREATE DATABASE db1 WITH STORAGE_TYPE AS BLOCK;
ALTER DATABASE db2 WITH STORAGE_TYPE AS OBJECT;
```

Notes:
- Storage type is fixed once data is inserted into a table.
- To change storage type, use CTAS (Create Table As Select).

### Command Line Interface Updates
{: #cmdinterface}

`nzds` command will show:
- Block storage: total capacity and usage percentage per dataslice.
- Object storage: used size only.


## Caching strategy
{: #cachingstrgy}

### Read cache
{: #readcache}

Due to higher latency of object storage:

- A write-through caching layer stores frequently accessed data locally on SPU ephemeral storage for faster reads.

   - Write-through means writes complete after persisting to object store first.

Benefits:
   - Reduces network bandwidth usage and associated costs on AWS/Azure by serving requests from cache when possible.

Configuration:
   - Partition ephemeral SPU local disk between block cache, nzlocal, and object store cache with configurable ratios (default provided).
   - IO layer supports reading from and populating this cache.

*Note:* Read cache implementation planned post-MVP release. Future consideration includes an in-memory caching tier for hot data subsets.

### Write cache *(Not part of MVP)*
{: #wrtecache}

Object Store has high latency unsuitable for OLTP workloads involving small writes. Planned enhancements include:

- Partial write-back caching within transactions that modify the same page multiple times before commit to reduce overheads.

## Performance goals
{: #perf_goals}

Aim to achieve parity between object store cached reads and block store performance. DML operations may lag initially but will improve with future write-cache support.


## Design specifications
{: #designspec}

### IO layer enhancements
{: #layrenh}

Two IO implementations exist today:

| Platform | IO Implementation |
|----------|-------------------|
| CP4D     | Kernel modules (`nzds`) interacting with FPGA/emulator |
| Concerto | Userspace `diskDrv` daemon |

For hybrid model:

- Introduce `ObjectStoreIOMgr`, a userspace daemon managing object store IO per dataslice alongside existing `diskDrv`.

Responsibilities:
   - Handle IO requests from NPS jobs targeting either block or object store based on table metadata.
   - Manage multiple streams concurrently with WLM priorities & Short Query Bias support.
   - Support S3 API initially; Azure Blob planned next.
   - Provide additional APIs like delete/list objects specific to object stores.
   - Handle runtime errors gracefully; manage concurrency limits; support larger objects up to 1MB size.

Configuration parameters specific to COS are loaded at startup (`nzstart`) requiring restart upon changes.

### Data Placement Manager (DPM)
{: #dataplacemgr}

The DPM manages metadata such as mdLog, zone maps, grooming tasks etc., currently designed exclusively for block devices divided into Core partition (metadata) and Part_A partition (user data).

Planned changes include:

| Feature                         | Description                                                                                  |
|---------------------------------|----------------------------------------------------------------------------------------------|
| Separate DPM instances           | Independent handling of metadata/storage management for block vs. object stores              |
| Object Naming                   | Use path format: `S3Bucket/InstanceId/UUID/dsId/tableId/ObjectSerial`                         |
| Deleting Objects               | Implement asynchronous deletion of obsolete objects generated by truncate/drop/groom actions |
| Metadata Log Changes            | Remove fixed core partition size limit; allow appending records; handle larger objects       |
| ExtMap Adjustments             | Move from per-slice sequence IDs to per-table sequence IDs                                   |
| Modify Truncate/Drop/Groom      | Adapt these operations for hybrid model without loss of functionality                        |

*Note:* Some advanced features like TxID-based naming, per-table zone maps/DPM loading deferred beyond MVP due to complexity.

## Other Considerations
{: #othercons}

### Upgrade/Downgrade compatibility
{: #upgrdcomp}

Support adding COS buckets during upgrades seamlessly. Downgrading after enabling COS is disabled due to incompatibility risks related to new metadata formats.

### Snapshot support limitations
{: #snapshotsprtlim}

Cloud providers do not natively snapshot Object Stores like EBS volumes. Investigations ongoing around TxID-based naming schemes enabling point-in-time snapshots via metadata versioning.

### Bucket types and capabilities
{: #bktcap}

MVP targets standard AWS S3 Standard buckets. Future research planned into leveraging specialized buckets offering append capabilities or other optimizations.

### Configurable object sizes
{: #configobjsales}

Page sizes configurable at system initialization among `[128KB,256KB,512KB,1MB]`. Larger pages improve throughput but may reduce zone map filtering efficiency depending on record width distribution.

## Features deferred beyond MVP release
{: #featuremvprel}

These features require further research or resource allocation before inclusion:

| Feature                              | Reason / Notes                                         |
|------------------------------------|-------------------------------------------------------|
| In-memory caching tier              | Potential performance boost                            |
| Full write-back persistent cache   | NVMe ephemeral disks insufficient                      |
| Groom operation migrating tables   | Complexity in live migration                           |
| Per-table Zone Maps & ExtMaps       | Memory optimization benefits                           |
| Dynamic scan list submission        | Reduce large scan list compilation latency            |
| TxID-based multi-versioned naming   | Enables efficient rollback/snapshot                    |

---

# Summary Table of Supported Commands Examples
{: #summrycommand}

```sql
-- Create table using Object Storage
CREATE TABLE sales_data (
    id INT,
    amount DECIMAL(10,2)
) WITH STORAGE_TYPE AS OBJECT;

-- Create database defaulting tables on Block Storage
CREATE DATABASE analytics_db WITH STORAGE_TYPE AS BLOCK;

-- Change default database-level storage type
ALTER DATABASE analytics_db SET STORAGE_TYPE = 'OBJECT';
```

*Storage type cannot be changed directly on populated tables.*

# Glossary
{: #glossary}

**SPU:** Slice Processing Unit — compute node processing dataslices
**NPS:** Netezza Processing Server — core engine managing queries/storage
**COS:** Cloud Object Storage — scalable persistent cloud file/object service
**DPM:** Data Placement Manager — component managing physical layout & metadata
**mdLog:** Metadata log storing snapshots & updates about stored pages

This specification provides guidelines necessary for users configuring hybrid cloud deployments utilizing both traditional block volumes alongside cost-efficient cloud native object stores while maintaining full feature compatibility across workloads.
