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

With {{site.data.keyword.netezza_full}}, you can use external tables to access and query **parquet** files that are stored outside of your database in data lakes.

{{site.data.keyword.netezza_short}} supports the following external data sources:

- AWS S3
- Azure Blob Storage

External data sources use connection strings to specify how you can access an external system. Each connection string describes where your data is placed and how to authenticate to your data source. Each external data source has a definition (schema), but the actual data exists inside the {{site.data.keyword.netezza_short}} database.

Use cases for external data source include:

- X
- X

**COMMET: NEED HIGH-LEVEL EXAMPLES, like loading and cleaning your data in one pass and writing the cleaned result into Netezza? Joining tables with frequently changing data from an external data source. By querying the external data source directly, you don't need to reload the data into NPS storage every time it changes.**
