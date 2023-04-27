---

copyright:
  years: 2023
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

# Merging and querying data
{: #merging_singularity}

You might keep only the most recent data locally in a database and use data lakes as your long term storage. With {{site.data.keyword.netezza_short}}, you can seamlessly query both local and remote data without having to load the remote data into a database first.

## Before you begin
{: #prereqs3}

In the examples, the publicly available [*New York taxi trip* record data](https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page) for yellow taxis in January 2021 and 2022 is used. To follow this example, make sure that the data is in an accessible S3 bucket.

## 1. Create an external data source.
{: #create_ds2}

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

## 2. Identify the data from {{site.data.keyword.netezza_short}} to merge and compare.
{: #ensure_2022}

In this example, data that was loaded into {{site.data.keyword.netezza_short}} (`YELLOW_TAXI_JANUARY_2022`) is compared with data from a data like (`YELLOW_TAXI_JANUARY_2021`).

To follow this example, ensure that `YELLOW_TAXI_JANUARY_2022` is in your {{site.data.keyword.netezza_short}} database.

a) Create an external table for the data that you want to load (`YELLOW_TAXI_JANUARY_2022`).

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

b) Load the data (`YELLOW_TAXI_JANUARY_2022`) into {{site.data.keyword.netezza_short}}.

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
   create TABLE YELLOW_TAXI_JANUARY_2022_LOADED as
   select
       * 
   from
       YELLOW_TAXI_JANUARY_2022;

   INSERT 0 2463931
   ```
   {: codeblock}

## 3. Create an external table for the data from a data lake.
{: #create_table2}

Create an external table that accesses the yellow taxi data from January 2021.

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
create EXTERNAL table YELLOW_TAXI_JANUARY_2021 on EXAMPLEDATABASE 
using ( 
  DATAOBJECT ('/yellow_tripdata_2021-01.parquet') FORMAT 'PARQUET' 
);
```
{: codeblock}

## 4. Query the remote and loaded data.
{: #query_remote_loaded}

Now, you can query both the local 2022 data that was loaded and the 2021 data from a data lake all in the same query.

You can access data from one *parquet* file at a time.

The *parquet* column names are case sensitive. You must use double quotation marks ("") when you are querying specific columns.
{: note}

- To identify which year had the most passengers, run:

   ```sql
   select
    (
        select
            sum("passenger_count")
        from
            YELLOW_TAXI_JANUARY_2022_LOADED) as "passengers 2022",
    (
        select
            sum("passenger_count")
        from
            YELLOW_TAXI_JANUARY_2021) as "passengers 2021";
    ```
   {: codeblock}

   Output:

   ```sql   
   passengers 2022  | passengers 2021
   -----------------+-----------------
         3324167    |     1794615
   (1 row)
   ```
   {: codeblock}

- To compare how many passengers travelled between 1:00 AM and 6:00 PM in 2021 and 2022, run:

   ```sql
   select
    (
        select
            sum("passenger_count")
        from
            YELLOW_TAXI_JANUARY_2022_LOADED
        where
            "tpep_pickup_datetime"::time > '1:00am'
            and "tpep_pickup_datetime"::time < '6:00am') as "overnight passengers 2022",
    (
        select
            sum("passenger_count")
        from
            YELLOW_TAXI_JANUARY_2021
        where
            "tpep_pickup_datetime"::time > '1:00am'
            and "tpep_pickup_datetime"::time < '6:00am') as "overnight passengers 2021"; 
   ```
   {: codeblock}

   Output:

   ```sql
   overnight passengers 2022  | overnight passengers 2021
   ---------------------------+---------------------------
   163058                     | 33469
   (1 row)
   ```
   {: codeblock}
