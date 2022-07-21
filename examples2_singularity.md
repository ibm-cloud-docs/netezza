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

# Merging and querying data
{: #merging_singularity}

You might keep only the most recent data locally in a database and use data lakes as your long term storage. With {{site.data.keyword.netezza_short}}, you can seamlessly query both local and remote data without having to load the remote data into a database first.

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


## 1. Create an external data source.
{: #create_ds2}

External datasources allow an administrator to grant access to S3 without providing the keys directly to a user.

For more information, see [CREATE EXTERNAL DATASOURCE command](https://www.ibm.com/docs/en/netezza?topic=).

a) Set **ENABLE_EXTERNAL_DATASOURCE**.

   ```
   SET ENABLE_EXTERNAL_DATASOURCE = 1;
   ```
   {: codeblock}

b) Create an external data source.

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

## 2. Identify the data from {{site.data.keyword.netezza_short}} to merge and compare.
{: #ensure_2022}

In this example, data that was loaded into {{site.data.keyword.netezza_short}} (`YELLOW_TAXI_JANUARY_2022`) is compared with data from a data like (`YELLOW_TAXI_JANUARY_2021`).

To follow this example, ensure that `YELLOW_TAXI_JANUARY_2022` is in your {{site.data.keyword.netezza_short}} database.

a) Create an external table for the data that you want to load (`YELLOW_TAXI_JANUARY_2022`).

   Ensure that you have the necessary privileges as described in [Privileges for creating external tables](https://www.ibm.com/docs/en/netezza?topic=et-create-external-table-command-2).

   ```
   CREATE EXTERNAL TABLE 'TABLE NAME'
   ON 'DATA SOURCE'
   USING ( 
     DATAOBJECT ('DATA OBJECT')
     FORMAT 'PARQUET' 
   );
   ```
   {: codeblock}

   Example:

   ```
   CREATE EXTERNAL TABLE YELLOW_TAXI_JANUARY_2022 
   ON EXAMPLEDATASOURCE
   USING ( 
     DATAOBJECT ('/yellow_tripdata_2022-01.parquet')
     FORMAT 'PARQUET' 
   );
   ```
   {: codeblock}

b) Load the data (`YELLOW_TAXI_JANUARY_2022`) into {{site.data.keyword.netezza_short}}.

   ```
   CREATE TABLE 'TABLE NAME LOADED'
   AS
       SELECT
           * 
       FROM
           TABLE;
   INSERT 0 2463931
   ```
   {: codeblock}

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
   {: codeblock}

## 3. Create an external table for the data from a data lake.
{: #create_table2}

Create an external table that accesses the yellow taxi data from January 2021.

Ensure that you have the necessary privileges as described in [Privileges for creating external tables](https://www.ibm.com/docs/en/netezza?topic=et-create-external-table-command-2).

```
CREATE EXTERNAL TABLE 'TABLE NAME'
ON 'DATA SOURCE'
USING ( 
  DATAOBJECT ('DATA OBJECT')
  FORMAT 'PARQUET' 
);
```
{: codeblock}

Example:

```
CREATE EXTERNAL TABLE YELLOW_TAXI_JANUARY_2021
ON EXAMPLEDATABASE 
USING ( 
  DATAOBJECT ('/yellow_tripdata_2021-01.parquet')
  FORMAT 'PARQUET' 
);
```
{: codeblock}

## 4. Query the remote and loaded data.
{: #query_remote_loaded}

Now, you can query both the local 2022 data that was loaded and the 2021 data from a data lake all in the same query.

- To identify which year had the most passengers, run:

   ```
   SELECT (SELECT Sum("passenger_count")
     FROM   yellow_taxi_january_2022_loaded) AS "passengers 2022",
     (SELECT Sum("passenger_count")
     FROM   yellow_taxi_january_2021)        AS "passengers 2021";
   ```
   {: codeblock}

   Output:

   ```   
   passengers 2022  | passengers 2021
   -----------------+-----------------
         3324167    |     1794615
   (1 row)
   ```
   {: codeblock}

- To compare how many passengers travelled between 1:00 AM and 6:00 PM in 2021 and 2022, run:

   ```
   SELECT(SELECT Sum("passenger_count")
     FROM   yellow_taxi_january_2022_loaded
     WHERE  "tpep_pickup_datetime" :: time > '1:00am'
       AND "tpep_pickup_datetime" :: time < '6:00am') AS
   "overnight passengers 2022",
   (SELECT Sum("passenger_count")
      FROM   yellow_taxi_january_2021
      WHERE  "tpep_pickup_datetime" :: time > '1:00am'
        AND "tpep_pickup_datetime" :: time < '6:00am') AS
   "overnight passengers 2021"; 
   ```
   {: codeblock}

   Output:

   ```
   overnight passengers 2022  | overnight passengers 2021
   ---------------------------+---------------------------
   163058                     | 33469
   (1 row)
   ```
   {: codeblock}
