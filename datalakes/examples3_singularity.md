---

copyright:
  years:  2023
lastupdated: "2023-03-02"

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
{:tip: .tip}

# Ingesting data from data lakes
{: #ingest_singularity}

If you plan on regularly querying your data, load it into {{site.data.keyword.netezza_short}} first to get the best performance benefits.

## Before you begin
{: #prereqs3}

In the examples, the publicly available [*New York taxi trip* record data](https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page) for yellow taxis in January 2022 is used. To follow this example, make sure that the data is in an accessible S3 bucket.

## 1. Create an external data source.
{: #create_ds3}

External datasources allow an administrator to grant access to S3 without providing the keys directly to a user.

a) Set **ENABLE_EXTERNAL_DATASOURCE**.

   ```sql
   set ENABLE_EXTERNAL_DATASOURCE = 1;
   ```
   {: codeblock}

b) Create an external data source.

   ```sql
   create EXTERNAL DATASOURCE 'DATA SOURCE' on 'REMOTE SOURCE'
   using (
    ACCESSKEYID 'ACCESS KEY ID' SECRETACCESSKEY 'SECRET ACCESS KEY' BUCKET 'BUCKET' REGION 'REGION'
   );
   ```
   {: codeblock}

   Example:

   ```sql
   create EXTERNAL DATASOURCE EXAMPLEDATALAKE on AWSS3 
   using (
    ACCESSKEYID 'XXXX' SECRETACCESSKEY 'XXXX' BUCKET 'exampledatalakebucket' REGION 'US-EAST-1'
   );
   ```
   {: codeblock}

   For more information, see [CREATE EXTERNAL DATASOURCE command](https://www.ibm.com/docs/en/netezza?topic=tables-create-external-datasource-command).

## 2. Create an external table for the data from a data lake.
{: #create_table3}

After you created an external data source, you can create an external table that accesses the yellow taxi data from January 2022.

Ensure that you have the necessary privileges as described in [Privileges for creating external tables](https://www.ibm.com/docs/en/netezza?topic=et-create-external-table-command-2).

```sql
create EXTERNAL table 'TABLE NAME' on 'DATA SOURCE'
using ( 
  DATAOBJECT ('DATA OBJECT') FORMAT 'PARQUET' 
);
```
{: codeblock}

Example:

```sql
create EXTERNAL table YELLOW_TAXI_JANUARY_2022 on EXAMPLEDATASOURCE
using ( 
  DATAOBJECT ('/yellow_tripdata_2022-01.parquet') FORMAT 'PARQUET' 
);
```
{: codeblock}

## 3. Load the data into {{site.data.keyword.netezza_short}}.
{: #create_cts}

To load data from the data lake into a {{site.data.keyword.netezza_short}} table, run **CREATE TABLE AS SELECT** from the external table that you want to load.

```sql
create table 'TABLE NAME LOADED' as
select
    * 
from
     'TABLE';
```
{: codeblock}

Example:

```sql
create table YELLOW_TAXI_JANUARY_2022_LOADED as
select
    * 
from
        YELLOW_TAXI_JANUARY_2022;

INSERT 0 2463931
```
{: codeblock}

## 4. Query the loaded data.
{: #query_loaded}

Now, you can query the loaded data by using the improved read/write performance, zonemaps, etc.

- To identify the passenger count, run:

   ```sql
   select
      sum("passenger_count")
   from YELLOW_TAXI_JANUARY_2022_LOADED;
   ```
   {: codeblock} 

   Output:

   ```sql
   SUM
   -------
   3324167
   (1 row)
   ```
   {: codeblock}


    You do not have to load whole tables into {{site.data.keyword.netezza_short}}. *parquet* is a columnar format so the {{site.data.keyword.netezza_short}} engine can load a subset of columns without having to transfer the entire table over the internet. This way, if you work with large tables, you can significantly reduce ingress traffic and achieve faster load times. The query engine always uses only the columns from a *parquet* table that are needed.
    {: tip}
