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
{:codeblock: .codeblock}
{:tip: .tip}
{:note: .note}

# Querying data from data lakes
{: #querying_singularity}

## Before you begin
{: #prereqs1}

In the examples, the publicly available [*New York taxi trip* record data](https://www.nyc.gov:443/site/tlc/about/tlc-trip-record-data.page) {: external} for yellow taxis in January 2022 is used. To follow this example, make sure that the data is in an accessible S3 bucket.

To access S3 files, you need to have an AWS account with proper permissions to provide your access key ID and secret access key.
{: note}

## AWS S3 example
{: #aws_s3_example}

### 1. Create an external data source.
{: #create_ds1}

External datasources allow an administrator to grant access to S3 without providing the keys directly to a user.

Data source creation:

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
   create EXTERNAL DATASOURCE AWS_TAXI_DATASET on AWSS3 
   using (
        ACCESSKEYID '...' SECRETACCESSKEY '...' BUCKET 'nyc-tlc' REGION 'us-east-1'
   );
   ```
   {: codeblock}

   For more information, see [CREATE EXTERNAL DATASOURCE command](https://www.ibm.com/docs/en/netezza?topic=tables-create-external-datasource-command){: external}.

### 2. Create an external table.
{: #create_table1}

After you created an external data source, you can create an external table that accesses the yellow taxi data from January 2022.

Ensure that you have the necessary privileges as described in [Privileges for creating external tables](https://www.ibm.com/docs/en/netezza?topic=et-create-external-table-command-2).

```sql
create EXTERNAL TABLE 'TABLE NAME' on 'DATA SOURCE'
using ( 
    DATAOBJECT ('DATA OBJECT') FORMAT 'PARQUET' 
);
```
{: codeblock}

The `DATAOBJECT` argument must reference a single file in the `parquet` format. If you want to query from multiple `parquet` files, you must create more external tables.

Example:

```sql

create EXTERNAL TABLE YELLOW_TAXI_JANUARY_2022 on AWS_TAXI_DATASET 
using ( 
    DATAOBJECT ('/trip data/yellow_tripdata_2022-01.parquet') FORMAT 'PARQUET' 
);
```
{: codeblock}


### 3. Query your data.
{: #query1}

You can query external parquet format tables like any other {{site.data.keyword.netezza_short}} table without having to load the data into the database.

The *parquet* column names are case-insensitive unless it introduces a collision in column names.
{: note}

- To identify the total number of passengers that traveled by taxis in New York in January 2022, run:

   ```sql
   select sum(passenger_count) from YELLOW_TAXI_JANUARY_2022;
   ```
   {: codeblock}

   Output:

   ```sql
   SUM
   -----
   3324167
   (1 row)
   ```
   {: codeblock}

- To identify the vendor that had the most passengers between 1:00 AM and 6:00 AM, run:

    ```sql
    select
        VendorID,
        sum("passenger_count") as passengers
    from
        YELLOW_TAXI_JANUARY_2022
    where
        tpep_pickup_datetime::time > '1:00am'
        and tpep_pickup_datetime::time < '6:00am'
    group by
        VendorID
    order by
        passengers desc;
    ```
    {: codeblock}

    Output:

    ```sql
    VendorID| passengers
    --------|----------
    2       | 122251
    1       | 40807
    6       |
    5       |
    (4 rows)
    ```
    {: codeblock}


   You do not have to load whole tables into {{site.data.keyword.netezza_short}}. *parquet* is a columnar format so the {{site.data.keyword.netezza_short}} engine can query a subset of columns without having to transfer the entire table over the internet. This way, if you work with large tables, you can significantly reduce ingress traffic and achieve faster load times. The query engine always uses only the columns from a *parquet* table that are needed.
   {: tip}


## Azure BLOB example
{: #azure_blob_example}

Set **ENABLE_AZURE_DATALAKE_SUPPORT**.

   ```sql
   set ENABLE_AZURE_DATALAKE_SUPPORT = true;
   ```
   {: codeblock}

### 1. Create an external data source.
{: #create_ds1_azure}

 ```sql
   create EXTERNAL DATASOURCE 'DATA SOURCE' on 'REMOTE SOURCE'
   using (
        ACCOUNT 'ACCOUNT NAME' ACCOUNTKEY 'SECRET ACCESS KEY' CONTAINER 'CONTAINER NAME'
   );
   ```
   {: codeblock}

ACCOUNTKEY might be omitted for anonymous access.

   ```sql
   create EXTERNAL DATASOURCE AZURE_TAXI_DATASET on AZUREBLOB 
   using (
        ACCOUNT 'azureopendatastorage' CONTAINER 'nyctlc'
   );
   ```
   {: codeblock}

For more information, see [CREATE EXTERNAL DATASOURCE command](/docs/netezza?topic=tables-create-external-datasource-command).

### 2. Create an external table.
{: #create_table1_azure}

After you created an external data source, you can create an external table that accesses the green taxi data from January 2018.

Ensure that you have the necessary privileges as described in [Privileges for creating external tables](https://www.ibm.com/docs/en/netezza?topic=et-create-external-table-command-2).

Example:

```sql
create EXTERNAL table GREEN_TAXI_JANUARY_2018 on AZURE_TAXI_DATASET
using (
    DATAOBJECT ('/green/puYear=2018/puMonth=1/part-00036-tid-4753095944193949832-fee7e113-666d-4114-9fcb-bcd3046479f3-2606-1.c000.snappy.parquet') FORMAT 'PARQUET'
);
```
{: codeblock}

### 3. Query your data.
{: #query1_azure}

You can query external parquet format tables like any other {{site.data.keyword.netezza_short}} table without having to load the data into the database.

The *parquet* column names are case-insensitive unless it introduces a collision in column names.
{: note}

- To identify the total number of passengers that traveled by taxis in New York in January 2018, run:

   ```sql
   select sum(passengercount) from GREEN_TAXI_JANUARY_2018;
   ```
   {: codeblock}

   Output:

   ```sql
   SUM
   -----
   1081283
   (1 row)
   ```
   {: codeblock}

- To identify the vendor that had the most passengers between 1:00 AM and 6:00 AM, run:

    ```sql
    select
        VendorID,
        sum(passengercount) as passengers
    from
        GREEN_TAXI_JANUARY_2018
    where
        lpeppickupdatetime::time > '1:00am'
        and lpeppickupdatetime::time < '6:00am'
    group by
        VendorID
    order by
        passengers desc;
    ```
    {: codeblock}

    Output:

    ```sql
    VendorID| passengers
    --------|----------
    2       | 122251
    1       | 40807
    6       |
    5       |
    (4 rows)
    ```
    {: codeblock}
