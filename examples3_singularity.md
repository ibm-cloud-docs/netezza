---

copyright:
  years:  2022
lastupdated: "2022-11-07"

keywords: singularity, parquet, data lake, netezza singularity, parquet files, querying data
subcollection: netezza

---

{:new_window: target="_blank"}
{:shortdesc: .shortdesc}
{:screen: .screen}
{:pre: .pre}
{:table: .aria-labeledby="caption"}
{:codeblock: .codeblock}
{:tip: .tip}
{:download: .download}
{:important: .important}
{:caption: .caption}

# Ingesting data from data lakes
{: #ingest_singularity}

If you plan on regularly querying your data, load it into {{site.data.keyword.netezza_short}} first to get the best performance benefits.

## Before you begin
{: #prereqs3}

In the examples, the publicly available [*New York taxi trip* record data](https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page) for yellow taxis in January 2021 and 2022 is used. To follow this example, download the data and upload it to an accessible S3 bucket.

- For January 2021:

  ```
  aws s3 cp ~/Downloads/yellow_tripdata_2021-01.parquet s3://exampledatalakebucket/yellow_tripdata_2021-01.parquet
  ```
  {: codeblock}

- For January 2022,

  ```
  aws s3 cp ~/Downloads/yellow_tripdata_2022-01.parquet s3://exampledatalakebucket/yellow_tripdata_2022-01.parquet
  ```
  {: codeblock}

## Set **ENABLE_EXTERNAL_DATASOURCE**
{: #enable3}

Ensure that **ENABLE_EXTERNAL_DATASOURCE** is set to `1`.

```
SET ENABLE_EXTERNAL_DATASOURCE = 1;
```
{: codeblock}

## Create an external data source
{: #create_ds3}

External datasources allow an administrator to grant access to S3 without providing the keys directly to a user.

For more information, see [CREATE EXTERNAL DATASOURCE command](https://www.ibm.com/docs/en/netezza?topic=).

```
CREATE EXTERNAL DATASOURCE 'DATA SOURCE'
ON 'REMOTE SOURCE'
USING (
  ACCESSKEYID 'ACCESS KEY ID'
  SECRETACCESSKEY 'SECRET ACCESS KEY'
  BUCKET 'BUCKET'
  REGION 'REGION'
);
```
{: codeblock}

Example:

```
CREATE EXTERNAL DATASOURCE EXAMPLEDATALAKE 
ON AWSS3 
USING (
  ACCESSKEYID 'XXXX'
  SECRETACCESSKEY 'XXXX'
  BUCKET 'exampledatalakebucket'
  REGION 'US-EAST-1'
);
```
{: codeblock}

## Create an external table
{: #create_table3}

When you have an external data source, you can create an external table that accesses the yellow taxi data from January 2022.

Ensure that you have the necessary privileges as described in [Privileges for creating external tables](https://www.ibm.com/docs/en/netezza?topic=et-create-external-table-command-2).

```
CREATE EXTERNAL TABLE 'TABLE'
USING ( 
  DATAOBJECT ('DATA OBJECT')
  FORMAT 'PARQUET' 
);
```
{: codeblock}

Example:

```
CREATE EXTERNAL TABLE YELLOW_TAXI_JANUARY_2022 
USING ( 
  DATAOBJECT ('/yellow_tripdata_2022-01.parquet')
  FORMAT 'PARQUET' 
);
```
{: codeblock}

## Create an external table as select
{: #create_cts}

To load data from the data lake into a native {{site.data.keyword.netezza_short}} table, do a simple CTAS opration (create table as select) from the external table.

```
CREATE TABLE TABLE_LOADED 
AS
    SELECT
        * 
    FROM
        TABLE;
INSERT 0 2463931
```

Example:

```
CREATE TABLE YELLOW_TAXI_JANUARY_2022_LOADED 
AS
    SELECT
        * 
    FROM
        YELLOW_TAXI_JANUARY_2022;
INSERT 0 2463931
```

## Query data by using improved read/write performance, zonemaps, etc.
{: #query3}

Example:

```
SELECT Sum("passenger_count")
FROM   yellow_taxi_january_2022_loaded; 


   SUM   
---------
 3324167
(1 row)
```

**TIP:** You do not have to load a whole table into {{site.data.keyword.netezza_short}}. *parquet* is a columnar format so the {{site.data.keyword.netezza_short}} engine can load a subset of columns without having to transfer the entire table over the internet. This way, if you work with large tables, you can significantly reduce ingress traffic and achieve faster load times.

The query engine always uses only the columns from a *parquet* table that are needed.
