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
{:codeblock: .codeblock}
{:tip: .tip}
{:note: .note}

# Querying data from data lakes
{: #querying_singularity}

## Before you begin
{: #prereqs1}

In the examples, the publicly available [*New York taxi trip* record data](https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page) for yellow taxis in January 2022 is used. To follow this example, download the data and upload it to an accessible S3 bucket.

```
aws s3 cp ~/Downloads/yellow_tripdata_2022-01.parquet s3://exampledatalakebucket/yellow_tripdata_2022-01.parquet
```
{: codeblock}

## 1. Create an external data source.
{: #create_ds1}

External datasources allow an administrator to grant access to S3 without providing the keys directly to a user.

a) Set **ENABLE_EXTERNAL_DATASOURCE**.

   ```json
   set ENABLE_EXTERNAL_DATASOURCE = 1;
   ```
   {: codeblock}

b) Create an external data source.

   ```json
   create EXTERNAL DATASOURCE 'DATA SOURCE' on 'REMOTE SOURCE'
   using (
       ACCESSKEYID 'ACCESS KEY ID' SECRETACCESSKEY 'SECRET ACCESS KEY' BUCKET 'BUCKET' REGION 'REGION'
   );
   ```
   {: codeblock}

   Example:

   ```json
   create EXTERNAL DATASOURCE EXAMPLEDATALAKE on AWSS3 
   using (
       ACCESSKEYID 'XXXX' SECRETACCESSKEY 'XXXX' BUCKET 'exampledatalakebucket' REGION 'US-EAST-1'
   );
   ```
   {: codeblock}

   For more information, see [CREATE EXTERNAL DATASOURCE command](https://www.ibm.com/docs/en/netezza?topic=tables-create-external-datasource-command).

## 2. Create an external table.
{: #create_table1}

After you created an external data source, you can create an external table that accesses the yellow taxi data from January 2022.

Ensure that you have the necessary privileges as described in [Privileges for creating external tables](https://www.ibm.com/docs/en/netezza?topic=et-create-external-table-command-2).

```json
create EXTERNAL TABLE 'TABLE NAME' on 'DATA SOURCE'
using ( 
    DATAOBJECT ('DATA OBJECT') FORMAT 'PARQUET' 
);
```
{: codeblock}

Example:

```json
create EXTERNAL TABLE YELLOW_TAXI_JANUARY_2022 on EXAMPLEDATALAKE 
using ( 
    DATAOBJECT ('/yellow_tripdata_2022-01.parquet') FORMAT 'PARQUET' 
);
```
{: codeblock}

## 3. Query your data.
{: #query1}

You can query external *parquet* format tables like you would any other {{site.data.keyword.netezza_short}} table, but you do not need to load the data into the database.

The *parquet* column names are case sensitive. You must use double quotation marks ("") when you are querying specific columns.
{: note}

- To identify the total number of passengers that travelled by taxis in New York in January 2022, run:

   ```
   select
       sum("passenger_count") 
   from YELLOW_TAXI_JANUARY_2022;
   ```
   {: codeblock}

   Output:

   ```
   SUM
   -----
   3324167
   (1 row)
   ```
   {: codeblock}

- To identify the vendor that had the most passengers between 1:00 AM and 6:00 AM, run:

   ```json
   select
       "VendorID",
        sum("passenger_count") as "passengers"
   from
       YELLOW_TAXI_JANUARY_2022
   where
       "tpep_pickup_datetime"::time > '1:00am'
       and "tpep_pickup_datetime"::time < '6:00am' 
   group by 
       "VendorID"
   order by
       "passengers" desc;
   ```
   {: codeblock}


    Output: 

    ```json
    VendorID  | passengers
    ----------+------------
    2         |     122251
    1         |      40807
    6         |
    5         |
    (4 rows)
    ```
    {: codeblock}


   You do not have to load whole tables into {{site.data.keyword.netezza_short}}. *parquet* is a columnar format so the {{site.data.keyword.netezza_short}} engine can query a subset of columns without having to transfer the entire table over the internet. This way, if you work with large tables, you can significantly reduce ingress traffic and achieve faster load times. The query engine always uses only the columns from a *parquet* table that are needed.
   {: tip}
