opyright:
  years:  2022
lastupdated: "2022-11-07"

keywords: singularity, parquet, data lake, netezza singularity, parquet files
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

# Before you begin
{: #prereqs_singularity}

To query external data, you must do the following:

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
