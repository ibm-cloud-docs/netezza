---

copyright:
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

# Overview
{: #overview_singularity}

Data lakes are an essential tool for storing structured and unstructured data on the cloud. With {{site.data.keyword.netezza_full}}, you can use external tables to access **parquet** files that are stored outside of your database in data lakes (on AWS S3). Also, you can analyze this data by using the robust and massively parallel execution  {{site.data.keyword.netezza_full}} engine.


External data sources use connection strings to specify how you can access an external system. Each connection string describes where your data is placed and how to authenticate to your data source. Each external data source has a definition (schema), but the actual data exists inside the {{site.data.keyword.netezza_short}} database.

Use cases for external data source include:

- [Running queries against *parquet* data that is stored in a data lake](/docs/netezza?topic=netezza-querying-data-from-data-lakes).
- [Ingesting data into {{site.data.keyword.netezza_short}}](/docs/netezza?topic=netezza-ingest_singularity).
- [Querying both local and remote data that exist in the same data lake](/docs/netezza?topic=netezza-merging_singularity).
