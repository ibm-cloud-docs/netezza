---

copyright:
  years: 2026
lastupdated: "2026-06-18"

keywords: Netezza REST catalog, Iceberg REST catalog, REST catalog, lakehouse catalog, default catalog

subcollection: netezza

---

{:shortdesc: .shortdesc}
{:screen: .screen}
{:codeblock: .codeblock}
{:pre: .pre}
{:tip: .tip}
{:note: .note}
{:important: .important}
{:external: target="_blank" .external}

# Using Iceberg REST Catalog
{: #iceberg-rest-catalog}

IBM Netezza Performance Server provides built-in REST catalog support for managing Apache Iceberg tables. The REST catalog eliminates the need for external catalog services and provides a unified interface for managing Iceberg tables across different deployment environments.
{: shortdesc}

## Overview
{: #rest-catalog-overview}

The REST catalog provides a standardized way to manage Iceberg tables in your data lakehouse environment. With REST catalog support, you can:

- Use the default built-in REST catalog that comes with Netezza Performance Server
- Connect to external REST catalog services
- Manage Iceberg tables without depending on third-party catalog services like AWS Glue

The default REST catalog uses a JDBC backend with PostgreSQL, providing a ready-to-use solution for managing your Iceberg tables.

## Benefits
{: #rest-catalog-benefits}

- **Simplified setup**: The default REST catalog is automatically configured during deployment
- **Reduced dependencies**: No need to set up and maintain external catalog services
- **Cost savings**: Eliminates subscription costs for third-party catalog services
- **Unified experience**: Consistent catalog management across AWS, Azure, and on-premises deployments
- **Improved maintainability**: Single interface for all catalog operations

## Before you begin
{: #rest-catalog-prereqs}

- You must have administrator privileges to create databases
- For cloud deployments, ensure your object storage (AWS S3 or IBM Cloud Object Storage) is configured
- Verify that your Netezza Performance Server instance is version 11.3.0.5 or later

## Using the default REST catalog
{: #rest-catalog-default}

The default REST catalog is automatically available in your Netezza Performance Server deployment. You can use it to create and manage Iceberg tables without any additional configuration.

### Creating a database with the default REST catalog
{: #rest-catalog-create-db}

To create a database that uses the default REST catalog:

```sql
CREATE DATABASE mylake WITH metastoreuri 'default' catalogtype 'rest';
```
{: codeblock}

Example with AWS S3:

```sql
CREATE DATABASE mylake
WITH metastoreuri 'default'
catalogtype 'rest'
ON awss3 USING (
  ACCESSKEYID 'your-access-key'
  SECRETACCESSKEY 'your-secret-key'
  BUCKET 'your-bucket-name'
  REGION 'us-east-1'
);
```
{: codeblock}

Example with IBM Cloud Object Storage:

```sql
CREATE DATABASE mylake
WITH metastoreuri 'default'
catalogtype 'rest'
ON ibmcos USING (
  ACCESSKEYID 'your-access-key'
  SECRETACCESSKEY 'your-secret-key'
  BUCKET 'your-bucket-name'
  ENDPOINT 'your-cos-endpoint'
);
```
{: codeblock}

## Connecting to an external REST catalog
{: #rest-catalog-external}

If you have an existing REST catalog service, you can connect to it by specifying the catalog URI.

### Creating a database with an external REST catalog
{: #rest-catalog-external-db}

To connect to an external REST catalog, provide the full URI including the host and port:

```sql
CREATE DATABASE mylake
WITH metastoreuri 'http://your-rest-catalog-host:8181'
catalogtype 'rest'
ON awss3 USING (
  ACCESSKEYID 'your-access-key'
  SECRETACCESSKEY 'your-secret-key'
  BUCKET 'your-bucket-name'
  REGION 'us-east-1'
);
```
{: codeblock}

Replace `your-rest-catalog-host` with the hostname or IP address of your REST catalog server.
{: tip}

## Working with REST catalog databases
{: #rest-catalog-operations}

Once you've created a database with a REST catalog, you can perform standard operations on Iceberg tables.

### Connecting to the database
{: #rest-catalog-connect}

```sql
\c mylake
```
{: codeblock}

### Listing schemas
{: #rest-catalog-schemas}

```sql
SHOW SCHEMA;
```
{: codeblock}

### Creating Iceberg tables
{: #rest-catalog-create-table}

```sql
CREATE TABLE taxidata.trips (
  trip_id BIGINT,
  pickup_datetime TIMESTAMP,
  dropoff_datetime TIMESTAMP,
  passenger_count INTEGER,
  trip_distance DOUBLE
);
```
{: codeblock}

### Querying Iceberg tables
{: #rest-catalog-query}

```sql
SELECT * FROM taxidata.trips WHERE trip_distance > 10.0;
```
{: codeblock}

## Monitoring and logging
{: #rest-catalog-monitoring}

The REST catalog service maintains logs that can help with troubleshooting:

- **nzicebergrest.log**: Contains REST catalog server startup and operational logs
- **pg.log**: PostgreSQL database logs for the default catalog backend

These logs are available in the standard Netezza log directory and can be accessed by administrators for diagnostic purposes.

## Backup and restore considerations
{: #rest-catalog-backup}

When performing backup and restore operations:

- The REST catalog metadata is included in system snapshots
- Ensure your backup strategy includes the catalog storage to maintain consistency
- For disaster recovery, both the Netezza data and catalog metadata should be backed up

## Limitations
{: #rest-catalog-limitations}

- The default REST catalog uses PostgreSQL as the backend storage
- Custom access control lists (ACLs) for REST catalogs are not yet supported
- The catalog manager ConfigMap has a size limit of 1 MiB

## Related information
{: #rest-catalog-related}

- [Managing Iceberg tables with IBM Netezza REST catalog](/docs/netezza?topic=netezza-netezza_manage_iceberg)
- [Data lakehouse overview](/docs/netezza?topic=netezza-data_lakehouse_overview)
- [Querying data from watsonx.data](/docs/netezza?topic=netezza-querying_watsonx.data)
- [Supported SQL commands](/docs/netezza?topic=netezza-sqlcommands_watsonx.data)
