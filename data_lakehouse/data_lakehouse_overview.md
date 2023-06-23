---

copyright:
  years:  2023
lastupdated: "2023-06-23"

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

With {{site.data.keyword.netezza_full}} data lakehouse you can connect to the Hive Metastore (HMS) which is a datalake metastore server and query from Apache Iceberg tables that live on your data lake S3 object store.

In technology preview:

- You must use Apache Iceberg tables with the `parquet` file format.
- Your queries are limited to **SELECT** operations.
- Iceberg tables cannot be read if they were altered and underwent Iceberg schema evolution.
- The following datatypes are supported:
  - `boolean`
  - `int`
  - `long`
  - `float`
  - `double`
  - `decimal`
  - `date`
  - `timestamp`
  - `string`
- The following datatypes are not supported:
  - `timestamptz`
  - `uuid`
  - `struct`
  - `list`
  - `map`

Use cases for data lakehouse include:

- [Running queries against data that is stored in a data lakehouse](/docs/netezza?topic=netezza-querying_datalakehouse).
- [Ingesting data from data lakehouse into {{site.data.keyword.netezza_short}}](/docs/netezza?topic=netezza-ingest_datalakehouse).
- [Querying both local and remote data from data lakehouse](/docs/netezza?topic=netezza-merging_datalakehouse).
