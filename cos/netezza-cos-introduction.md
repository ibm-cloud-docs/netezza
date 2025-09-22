---

copyright:
  years: 2025
lastupdated: "2025-09-19"

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

# Introduction to Object Storage
{: #netezzacosobjstrge}

Netezza now supports a hybrid storage architecture, enabling users to choose between block storage and object storage at the time of table creation. This enhancement provides flexibility in managing data based on performance and cost considerations. Currently, native object storage is supported only on AWS public cloud in Bring Your Own Cloud (BYOC) and SaaS (beta) deployments, with planned support for additional platforms in the future.

## How to use object storage
{: #htuos}

### Enable object storage in settings
{: #eosis}

- Navigate to `Settings`.
- Enable `Object Storage`.

Default storage remains Block even after enabling Object Storage.
{: note}

### Create a database with object storage
{: #cadwos}

- Go to the `Database` page.
- Click **Create Database**.
- Set `Storage Type = Object`.

### Create a table with object storage
{: #catwos}

- Go to the **Tables** page.
- Click Create Table.
- Choose `Storage Type = Object`.
- You can select **default** only if the database was created with object storage.

Existing tables will remain on Block Storage. To change the system-wide default to object storage, contact support.
{: note}

Additional reference, see [Creating databases](/docs/netezza?topic=netezza-databases), [Creating tables](/docs/netezza?topic=netezza-create-tables#creating-tables) and [SQL syntax for storage type specification](/docs/netezza?topic=netezza-netezzacossql).

## What is Hybrid Storage?
{: #hybri_strge}

In the hybrid storage model, each data slice features two distinct storage partitions:

**Block Storage Partition:** Traditional, high-performance storage for latency-sensitive workloads.

**Object Storage Partition:** Scalable storage for large datasets, bulk data ingestion, and infrequently accessed data.

### How it Works
{: #hybri_strge_works}

When creating a table, users can specify whether to use block or object storage. This choice determines which storage partition the table's data will reside in. Netezza overcomes object storage latency limitations through higher I/O parallelism and caching.

## Netezza architecture supporting Cloud Object Storage
{: #netezza_arch}

The Netezza architecture consists of three distinct storage layers:

**Block storage:** Each SPU is attached to block storage, ensuring continuity and compatibility with existing database structures.

**Object storage:** Each SPU is attached to object storage, allowing tables to be stored optionally on object storage.

**Local SSD caching:** Both block and object storage leverage local SSD caching to provide a similar experience.
