---

copyright:
  years:  2022
lastupdated: "2022-11-07"

keywords: netezza time travel, enabling time travel on netezza, disabling time travel on netezza, enabling time travel, disabling time travel, time travel

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
{:codeblock: .codeblock}

# Setting up time travel
{: #enablingdisabling_tt}

To start running time travel queries (temporal queries) on {{site.data.keyword.netezza_short}}, create a temporal table, schema, or database by setting [**DATA_VERSION_RETENTION_TIME**](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt) to a non zero value. You can also set **DATA_VERSION_RETENTION_TIME** to a nonzero value for an existing table, schema, or database.

See:

- [Creating temporal tables](/docs/netezza?topic=netezza-temporaltables_tt#creatingtemporal_tt)
- [Altering tables](/docs/netezza?topic=netezza-temporaltables_tt#altertables_tt)
- [Creating temporal schemas]
- [Altering schemas]
- [Creating temporal databases]
- [Altering databases]

Also, you can [set **DATA_VERSION_RETENTION_TIME** systemwide](/docs/netezza?topic=netezza-dataretentioninterval_tt#settingretentioninterval_tt).

Before you set **DATA_VERSION_RETENTION_TIME** for all tables in a schema or database, consider the cost of storage for temporal tables, which could be significant. See 
{: important}
