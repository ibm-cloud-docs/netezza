---

copyright:
  years:  2023
lastupdated: "2023-05-10"

keywords: data lakehouse, netezza data lakehouse, querying data, ingesting data
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

# Ingesting data from data lakehouse
{: #ingest_datalakehouse}

Learn how to ingest data into your local {{site.data.keyword.netezza_short}} table.

## 1. Connect to {{site.data.keyword.netezza_short}} database.
{: #connect_dlh}

   ```sql
MYLAKE.TAXIDATA(ADMIN)=> \c system
   ```
   {: codeblock}

You are now connected to database system.

## 2. Run a CTAS query with a cross database select on the datalake database.schema.table.
{: #runctas_dlh}

```sql
SYSTEM.ADMIN(ADMIN)=> CREATE TABLE YELLOW_TAXI_JANUARY_2022_LOADED AS SELECT * FROM MYLAKE.TAXIDATA.YELLOW_TAXI_JANUARY_2022;
INSERT 0 2463931
```
{: codeblock}
