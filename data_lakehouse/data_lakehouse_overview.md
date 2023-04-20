---

copyright:
  years:  2023
lastupdated: "2023-04-20"

keywords: netezza data lakehouse, metastore
subcollection: netezza

---

{:new_window: target="_blank"}
{:shortdesc: .shortdesc}
{:screen: .screen}
{:pre: .pre}
{:table: .aria-labeledby="caption"}
{:codeblock: .codeblock}
{:note: .note}
{:download: .download}
{:important: .important}
{:caption: .caption}

# Overview
{: #overview_datalakehouse}

With {{site.data.keyword.netezza_full}} data lakehouse you can connect to a datalake metastore server (Hive Metastore) and query from Iceberg tables that live on your data lake S3 object store.

## Data lakehouse limitations
{: #datalakehouse_limitations}

For beta, the following functionalities and data types are not supported:

- reading Iceberg tables that were previously deleted from or altered
- UPDATE
- schema evolution
- `time`
- `timestamptz`
- `uuid`


For beta, the following functionalities and data types are supported:

- Iceberg tables with the `parquet` file format
- `readonly` SELECT
- `boolean`
- `int`
- `long`
- `float`
- `double`
- `decimal`
- `date`
- `timestamp`
- `string`

Use cases for data lakehouse include: **draft comment: are these the uses cases we want to cover? If so, we'd need input for ingesting and querying local and remote. Mike confirmed these are valid for now.**

- [Running queries against data that is stored in a data lakehouse]().
- [Ingesting data from data lakehouse into {{site.data.keyword.netezza_short}}]().
- [Querying both local and remote data within data lakehouse]().
