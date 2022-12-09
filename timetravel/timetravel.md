---
copyright:
  years:  2022
lastupdated: "2022-12-09"

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

- [Introducing time travel](/docs/netezza?topic=netezza-introducing_tt)
    - [Common tasks](/docs/netezza?topic=netezza-introducing_tt#commontasks_tt)
    - [Business uses](https://test.cloud.ibm.com/docs/netezza?topic=netezza-introducing_tt#uses_tt)

- [Setting up time travel](/docs/netezza?topic=netezza-enablingdisabling_tt)

- [Creating time travel objects](/docs/netezza?topic=netezza-temporaltables_tt)
    - [Creating temporal tables](/docs/netezza?topic=netezza-temporaltables_tt#creatingtemporaltables_tt)
    - Creating temporal databases
    - Creating temporal schemas

- Altering time travel objects
    - [Altering tables](/docs/netezza?topic=netezza-alteringobjects_tt#alterdb_tt)
    - [Altering databases](/docs/netezza?topic=netezza-alteringobjects_tt#alterdb_tt)
    - [Altering schemas](/docs/netezza?topic=netezza-alteringobjects_tt#alteringschemas_tt)

- Setting **DATA_VERSION_RETENTION_TIME** for the system and viewing **DATA_VERSION_RETENTION_TIME**
    - [Data version retention interval](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt)
    - [Setting the retention interval](/docs/netezza?topic=netezza-dataretentioninterval_tt#settingretentioninterval_tt)
    - [Viewing the retention interval](/docs/netezza?topic=netezza-dataretentioninterval_tt#viewretentioninterval_tt)

- [Running queries syntax](/docs/netezza?topic=netezza-runningqueries_tt)

- [Querying historical data](/docs/netezza?topic=netezza-queryingdata_tt)
   - [Querying data for a specific time with the AS OF subclause](/docs/netezza?topic=netezza-queryingdata_tt#queryasof_tt)
   - [Querying data for a specific time with the BEFORE subclause](/docs/netezza?topic=netezza-queryingdata_tt#querybefore_tt)
   - [Querying data for all rows over a time period with the FROM...TO subclause](/docs/netezza?topic=netezza-queryingdata_tt#fromto_tt)
   - [Querying data for all rows over a time period with the BETWEEN...AND subclause](/docs/netezza?topic=netezza-queryingdata_tt#betweenand_tt)
   - [Identifying details for a specific date and time](/docs/netezza?topic=netezza-queryingdata_tt#detailsdatetime_tt)
   - [Identifying changes that happened on a specific date](/docs/netezza?topic=netezza-queryingdata_tt#changesdate_tt)

- SQL commands
