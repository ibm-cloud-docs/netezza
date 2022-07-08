---

copyright:
  years:  2022
lastupdated: "2022-07-07"

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

# Querying  data from data lakes
{: #singularity}

With {{site.data.keyword.netezza_full}}, you can use external tables to access and query **parquet** files that are stored outside of your database in data lakes.

{{site.data.keyword.netezza_short}} supports the following external data sources:

- AWS S3
- Azure Blob Storage

External data sources use connection strings to specify how you can access an external system. Each connection string describes where your data is placed and how to authenticate to your data source. Each external data source has a definition (schema), but the actual data exists inside the {{site.data.keyword.netezza_short}} database.

Use cases for external data source include:

- X
- X

**COMMET: NEED HIGH-LEVEL EXAMPLES, like loading and cleaning your data in one pass and writing the cleaned result into Netezza? Joining tables with frequently changing data from an external data source. By querying the external data source directly, you don't need to reload the data into NPS storage every time it changes.**

To query external data, you must do the following:

1. Ensure that **ENABLE_EXTERNAL_DATASOURCE** is set to `1`.

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

## Querying external tables

**COMMENT: Can we use the examples from: https://github.ibm.com/Voldemort/nzparquet/blob/master/EXAMPLES.md?? Especially how to get data from a private vs public bucket. How to save changed data? Optimisation seems to be the main selling point, why not showcase this better, for example by providing examples how to filter, display select columns, see how the file is structured?**
