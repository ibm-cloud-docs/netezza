---
copyright:
  years:  2022
lastupdated: "2022-11-03"

keywords: time travel, Netezza time travel, temporal tables, Netezza Performance Server time travel, retention interval, retention time interval, enabling time travel, disabling time travel

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
{:note: .note}

# {{site.data.keyword.netezza_short}} time travel
{: #timetravel}

Maintaining a time-based data support infrastructure might be expensive and complex. With the {{site.data.keyword.netezza_short}} time travel feature, you can store, retrieve, and analyze historical data without using additional application logic in your data (tables, schemas, and databases).

- Introducing time travel
    - Common tasks
    - Business uses

- Enabling and disabling time travel
    - Enabling time travel
    - Disabling time travel

- Temporal tables
    - Data version retention interval (**DATA_VERSION_RETENTION_TIME**)
    - Creating temporal tables
    - Disabling temporal tables
    - Converting nontemporal tables to temporal


- Setting the retention interval for system level


- Querying historical data

- Setting time periods for queries

- Running queries
