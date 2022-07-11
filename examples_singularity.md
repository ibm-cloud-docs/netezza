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

# Querying data from a data lake without ingesting
{:querying_singularity}

1. Ensure that **ENABLE_EXTERNAL_DATASOURCE** is set to `1`.

```
SET ENABLE_EXTERNAL_DATASOURCE = 1;
```

**COMMENT: Is there a command to verify this or do you have to run the SET command every time?**

2. Create an external data source.

   For more information, see [CREATE EXTERNAL DATASOURCE command](https://www.ibm.com/docs/en/netezza?topic=).

```
CREAT1E EXTERNAL DATASOURCE NYCTAXIS3 
ON AWSS3 
USING (
   ACCESSKEYID '.....' 
   SECRETACCESSKEY  '...' 
   BUCKET 'myfancybucket' 
   REGION 'US-EAST-1'
);
```

3. Create an external table.

   Ensure that you have the necessary privileges as described in [Privileges for creating external tables](https://www.ibm.com/docs/en/netezza?topic=et-create-external-table-command-2).

```
CREATE EXTERNAL TABLE nyc_taxi 
ON NYCTAXIS3 
USING ( 
   DATAOBJECT ('/example.parquet') 
   format 'PARQUET' 
);
```

4. Access your data.

```
SYSTEM.ADMIN(ADMIN)=> select *from table(scan_data_source('s3://myfancybucketexample/example.parquet', awskeyid=AWSKEYID secretaccesskey=SECRETACCESSKEY'));
```

See [Accessing data](/docs/netezza?topic=netezza-accessing_singularity).

4. Get a subset of columns from the file.

```
SYSTEM.ADMIN(ADMIN)=> select *from table(scan_data_source('s3://myfancybucketexample/example.parquet', NULL, 2, 'squares', 'num'));
```

Example:

```
squares | num
---------+-----
       1 |   1
       4 |   2
       9 |   3
      16 |   4
      25 |   5
      36 |   6
      49 |   7
      64 |   8
      81 |   9
     100 |  10
     121 |  11
     144 |  12
     169 |  13
     196 |  14
     225 |  15
     256 |  16
     289 |  17
     324 |  18
     361 |  19
     400 |  20
     441 |  21
     484 |  22
     529 |  23
     576 |  24
     625 |  25
     676 |  26
(26 rows)
```

For other examples, see [Query examples](/docs/netezza?topic=netezza-queries-singularity).
