---

copyright:
  years: 2026
lastupdated: "2026-07-21"

keywords: Netezza Nexus, Netezza Lakehouse, Iceberg REST catalog, open lakehouse, federated catalog, OIDC authentication, zero-copy analytics, Apache Iceberg, AWS Glue, external engine

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
{:table: .aria-labeledby="caption"}
{:caption: .caption}

# IBM Netezza Nexus
{: #netezza-nexus}

IBM Netezza Nexus is an open lakehouse catalog that enables secure, governed, multi-engine access to data stored in Apache Iceberg tables—without copying or moving data.
{: shortdesc}

Nexus is currently releasing for private tech preview with incremental functionality. Do not use it for production deployments.
{: important}

## Overview
{: #nexus-overview}

Nexus allows organizations to manage and govern their data lakes while seamlessly federating with external catalogs. Built on the open **Apache Iceberg REST Catalog specification**, Nexus avoids vendor lock-in by embracing open standards. Any compatible engine can access the same data directly, enabling **zero-copy analytics** and eliminating unnecessary data duplication. Nexus supports both local and federated **OIDC-based authentication**, making it easy to integrate with existing enterprise identity systems. Natively integrated into the **Netezza engine**, Nexus delivers modern lakehouse capabilities directly where data lives—simplifying architecture, reducing complexity, and accelerating data lake modernization with open, future-proof technology.

## Benefits
{: #nexus-benefits}

Nexus delivers the following key benefits:

**No vendor lock-in**
:   Nexus is built on open Apache Iceberg standards, giving you the freedom to use the engines and platforms you choose—today and in the future—without being tied to proprietary catalogs or formats.

**Zero-copy, multi-engine access**
:   Multiple analytics and processing engines can access the same data directly, without copying or moving it. This reduces cost, removes duplication, and keeps data consistently up to date.

**Built for governance at scale**
:   Nexus centralizes metadata and policy enforcement for open data lakes, making it easier to manage access, governance, and compliance across teams and tools.

**Seamless federation**
:   Works with existing external catalogs, so you can integrate Nexus into your current data lake environments without disrupting existing investments.

**Enterprise-ready security**
:   Supports both local and federated OIDC-based authentication, enabling integration with enterprise identity providers and consistent access control across engines.

**Native to Netezza**
:   Nexus is embedded directly into the Netezza engine, bringing modern lakehouse capabilities right to where analytics already run—simplifying architecture and accelerating modernization.

## Before you begin
{: #nexus-prereqs}

Before you use Nexus, ensure the following requirements are met:

- You must have administrator privileges to create databases.
- For cloud deployments, ensure that your object storage (AWS S3) is configured.
- Verify that your Netezza Performance Server instance is version 11.3.1.3 or later.
- For external catalog integration, ensure that proper authentication credentials are available (for example, an ARN for AWS Glue).
- Nexus also supports OIDC authentication, for example with Azure AD.

## Enabling Netezza Nexus
{: #nexus-enable}

Use the following steps to enable Netezza Nexus and create a connection from the web console.

1. Prepare object storage. Ensure that you have access to object storage to hold Iceberg table data. Supported options include AWS S3.

2. If you want to use OIDC authentication, choose **External authentication** after step 6 and enable the OIDC authentication details.

3. Navigate to the IBM Netezza web console.

4. Go to the **Administration** tab.

5. Click **Create lakehouse connection**.

6. Provide the storage details: connection name, S3 bucket name, region, access key, and secret key.

7. Choose **Internal authentication** if you want to use local authentication for Nexus, then click **Create connection**.

   After a few minutes, the connection is created and is visible on the page. For local or internal authentication, the client ID and client secret are displayed under the connection name.

If you want to use OIDC authentication, choose **External authentication** in step 6 and provide the OIDC details before you click **Create connection**.
{: tip}

## How to use Netezza Nexus
{: #nexus-howto}

Ensure that the data is in an accessible S3 bucket and that the table is loaded into Netezza Nexus as an Apache Iceberg table before you run the following steps.
{: note}

### Step 1: Create a database
{: #nexus-create-db-step}

External datasources allow an administrator to grant access to S3 or Azure storage without providing the keys directly to a user.

```sql
CREATE DATABASE mylake
WITH metastoreuri 'https://NetezzaNexusDNS'
     catalogtype 'rest'
ON awss3 USING (
  ACCESSKEYID     'your-access-key'
  SECRETACCESSKEY 'your-secret-key'
  BUCKET          'example-bucket'
  REGION          'us-east-1'
);
```
{: codeblock}

A successful command returns the number of tables that are available in the new database. For example:

```
NOTICE: 589 tables from the datalake are available in MYLAKE
```

Only a single datasource can be assigned to a database. If you require another datasource, you must create another lakehouse database.
{: important}

For more details on datasource options and authentication options for Azure, see [CREATE EXTERNAL DATASOURCE](https://www.ibm.com/docs/netezza?topic=tables-create-external-datasource-command){: external}.

### Step 2: Connect to the database
{: #nexus-connect}

```sql
\c mylake
```
{: codeblock}

### Step 3: List the available schemas
{: #nexus-list-schemas}

```sql
SHOW SCHEMA;
```
{: codeblock}

By default, you are connected to a reserved schema called `NETEZZA_SCHEMA`. The following is an example output:

```
 DATABASE |         SCHEMA          | OWNER
----------+-------------------------+-------
 MYLAKE   | DEFAULT                 | ADMIN
 MYLAKE   | DEFINITION_SCHEMA       | ADMIN
 MYLAKE   | DEMO                    | ADMIN
 MYLAKE   | INFORMATION_SCHEMA      | ADMIN
 MYLAKE   | NETEZZA_SCHEMA          | ADMIN
 MYLAKE   | TAXIDATA                | ADMIN
 MYLAKE   | TEST                    | ADMIN
(7 rows)
```

### Step 4: Set the schema
{: #nexus-set-schema}

```sql
SET SCHEMA taxidata;
```
{: codeblock}

You can also query data by using the full path: `SELECT * FROM mydb.myschema.mytable`.

### Step 5: List the available tables
{: #nexus-list-tables}

```sql
SHOW TABLE;
```
{: codeblock}

Example output:

```
 DATABASE | SCHEMA   | TABLE                    | TYPE           | OWNER
----------+----------+--------------------------+----------------+-------
 MYLAKE   | TAXIDATA | YELLOW_TAXI_JANUARY_2022 | DATALAKE TABLE | ADMIN
 MYLAKE   | TAXIDATA | YELLOW_TAXI_JANUARY_2021 | DATALAKE TABLE | ADMIN
(2 rows)
```

### Step 6: Query a table
{: #nexus-query-table}

```sql
SELECT * FROM YELLOW_TAXI_JANUARY_2021 LIMIT 1;
```
{: codeblock}

To identify the total number of passengers that traveled by taxi in New York in January 2022, run:

```sql
SELECT SUM(PASSENGER_COUNT) FROM YELLOW_TAXI_JANUARY_2022;
```
{: codeblock}

Example output:

```
   SUM
---------
 3324167
(1 row)
```

To identify the vendor that had the most passengers between 1:00 AM and 6:00 AM, run:

```sql
SELECT VENDORID, SUM(PASSENGER_COUNT) AS "passengers"
FROM YELLOW_TAXI_JANUARY_2022
WHERE TPEP_PICKUP_DATETIME::time > '1:00am'
  AND TPEP_PICKUP_DATETIME::time < '6:00am'
GROUP BY VENDORID;
```
{: codeblock}

Example output:

```
 VENDORID | passengers
----------+------------
        2 |     122251
        1 |      40807
        6 |
        5 |
(4 rows)
```

## Connecting external engines to Nexus
{: #nexus-external-engines}

Nexus supports integration with multiple external query engines, enabling you to use different processing frameworks while maintaining a unified catalog management experience.

External query engines connect to Nexus by using the **Iceberg REST Catalog API**. Because Nexus implements the Iceberg REST Catalog specification, any engine that supports an Iceberg REST catalog can use Nexus as its catalog service.

Nexus stores catalog metadata (namespaces, tables, snapshots, and permissions), while the data files remain in object storage such as Amazon S3.

### Connection flow
{: #nexus-connection-flow}

When a query engine executes a query, the following steps occur:

1. The engine sends REST requests to Nexus.
2. Nexus authenticates the client (OAuth2/OIDC, bearer token, and similar mechanisms).
3. Nexus authorizes the requested operation.
4. Nexus returns Iceberg table metadata.
5. The engine reads the Parquet files directly from object storage.
6. Query results are returned to the user.

## AWS BYOC: IAM cross-tenant access grant not required
{: #nexus-byoc-iam-note}

If you are enabling Nexus on **AWS BYOC (Bring Your Own Cloud)**, you do not need to execute the steps to grant cross-tenant IAM access. The IAM role block that is shown in the console during Nexus connection setup is not required on BYOC deployments. You can proceed to create the connection without adding the displayed roles.
{: note}
