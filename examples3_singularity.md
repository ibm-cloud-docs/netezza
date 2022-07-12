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

# Ingesting data from data lakes by using external tables
{: #ingest_singularity}

**COMMENT: NEED EXAMPLES**

1. Ensure that **ENABLE_EXTERNAL_DATASOURCE** is set to `1`.

   ```
   SET ENABLE_EXTERNAL_DATASOURCE = 1;
   ```
   {: codeblock}

1. Create an external data source.

   For more information, see [CREATE EXTERNAL DATASOURCE command](https://www.ibm.com/docs/en/netezza?topic=).

   ```
   CREAT1E EXTERNAL DATASOURCE 'DATASOURCE'
   ON AWSS3 
   USING (
      ACCESSKEYID 'ACCESS KEY ID' 
      SECRETACCESSKEY  'SECRET ACCESS KEY' 
      BUCKET 'BUCKET' 
      REGION 'REGION'
   );
   ```
   {: codeblock}

   Example:

   ```
   CREAT1E EXTERNAL DATASOURCE NYCTAXIS3
   ON AWSS3 
   USING (
      ACCESSKEYID '.....' 
      SECRETACCESSKEY  '...' 
      BUCKET '...' 
      REGION '...'
   );
   ```
   {: codeblock}

1. Create an external table.

   Ensure that you have the necessary privileges as described in [Privileges for creating external tables](https://www.ibm.com/docs/en/netezza?topic=et-create-external-table-command-2).

   ```
   CREATE EXTERNAL TABLE 'TABLE' 
   ON 'DATASOURCE' 
   USING ( 
      DATAOBJECT ('/example.parquet')
      format 'PARQUET' 
   );
   ```
   {: codeblock}

   Example:

   ```
   CREATE EXTERNAL TABLE nyc_taxi 
   ON NYCTAXIS3 
   USING ( 
      DATAOBJECT ('/example.parquet') 
      format 'PARQUET' 
   );
   ```
   {: codeblock}

1. **COMMENT: ???**
