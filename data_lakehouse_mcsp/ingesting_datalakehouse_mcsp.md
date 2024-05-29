---

copyright:
  years:  2023
lastupdated: "2023-07-21"

keywords: data lakehouse, netezza data lakehouse, querying data, ingesting data with nps and watsonx.data
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
{:tip: .tip}
{:note: .note}

# Ingesting data from {{site.data.keyword.lakehouse_short}}
{: #ingest_watsonx.data_mcsp}

Learn how to ingest data into your local {{site.data.keyword.netezza_short}} table.

## Before you begin
{: #prereqsdlh2_mcsp}

In the examples, the publicly available [*New York taxi trip* record data](https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page) for yellow taxis in January 2022 is used. To follow this example, make sure that the data is in an accessible S3 bucket and the table was loaded into {{site.data.keyword.lakehouse_short}} into an Apache Iceberg table in the Hive Metastore server (HMS).

## 1. Connect to {{site.data.keyword.netezza_short}} database.
{: #connect_dlh_mcsp}

```sql
MYLAKE.TAXIDATA(ADMIN)=> \c localdb
```
{: codeblock}

You are now connected to **localdb** database.

## 2. Run a CTAS query with a cross database **select** on the data lake database.schema.table.
{: #runctas_dlh_mcsp}

Example:

```sql
LOCALDB.ADMIN(ADMIN)=> CREATE TABLE YELLOW_TAXI_JANUARY_2022_LOADED AS SELECT * FROM MYLAKE.TAXIDATA.YELLOW_TAXI_JANUARY_2022;
INSERT 0 2463931
```
{: codeblock}
