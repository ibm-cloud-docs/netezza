---

copyright:
  years:  2023
lastupdated: "2023-04-17"

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

With {{site.data.keyword.netezza_full}} data lakehouse you can query unstructured data by connecting to the Hive Metastore server to discover Iceberg tables and schemas that exist in your object store. **draft comment: does this wording seem accurate?**

## Data lakehouse limitations
{: #datalakehouse_limitations}

Schema evolution is not supported for beta. ALTER and DELETE on the tables are not supported for beta.

Supported data types:
- `boolean`
- `int`
- `long`
- `float`
- `double`
- `decimal`
- `date`
- `timestamp`
- `string`

Unsupported data types:
- `time`
- `timestamptz`
- `uuid`

Use cases for data lakehouse include: **draft comment: are these the uses cases we want to cover? If so, we'd need input for ingesting and querying local and remote.**

- [Running queries against data that is stored in a data lakehouse]().
- [Ingesting data from data lakehouse into {{site.data.keyword.netezza_short}}]().
- [Querying both local and remote data within data lakehouse]().
