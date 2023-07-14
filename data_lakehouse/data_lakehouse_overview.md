---

copyright:
  years:  2023
lastupdated: "2023-07-14"

keywords: netezza data lakehouse, metastore, netezza with watsonx.data
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
{: #overview_watsonx.data}

With {{site.data.keyword.netezza_full}} and {{site.data.keyword.lakehouse_short}} you can connect to the Hive Metastore (HMS) which is a data lake metastore server and query from Apache Iceberg tables that live on your data lake S3 object store.

In technology preview:

- You must use Apache Iceberg tables with the `parquet` file format.
- Your queries are limited to **SELECT** operations.
- Iceberg tables cannot be read if they were altered and underwent Iceberg schema evolution.
- The following datatypes are not supported:
  - `timestamptz`
  - `uuid`
  - `struct`
  - `list`
  - `map`

Use cases for {{site.data.keyword.lakehouse_short}} include:

- [Integrating {{site.data.keyword.netezza_short}} with {{site.data.keyword.lakehouse_short}}](/docs/netezza?topic=netezza-integratenps_watsonx.data).
- [Running queries against data that is stored in {{site.data.keyword.lakehouse_short}}](/docs/netezza?topic=netezza-querying_datalakehouse).
- [Ingesting data from {{site.data.keyword.lakehouse_short}} into {{site.data.keyword.netezza_short}}](/docs/netezza?topic=netezza-ingest_datalakehouse).
- [Querying both local and remote data from {{site.data.keyword.lakehouse_short}}](/docs/netezza?topic=netezza-merging_datalakehouse).
