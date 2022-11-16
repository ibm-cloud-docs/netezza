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

To start running time travel queries (temporal queries) on {{site.data.keyword.netezza_short}}, create a temporal table, database, or schema by setting [**DATA_VERSION_RETENTION_TIME**](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt) to a nonzero value. You can also set **DATA_VERSION_RETENTION_TIME** to a nonzero value for an existing table, database, or schema.

See:

- [Creating temporal tables](/docs/netezza?topic=netezza-temporaltables_tt#creatingtemporal_tt)
- [Creating temporal databases](/docs/netezza?topic=netezza-temporaltables_tt#createdb_tt)
- [Creating temporal schemas](/docs/netezza?topic=netezza-temporaltables_tt#createschemas_tt)
- [Altering tables](/docs/netezza?topic=netezza-alteringobjects_tt#altertables_tt)
- [Altering databases](/docs/netezza?topic=netezza-alteringobjects_tt#alterdb_tt)
- [Altering schemas](/docs/netezza?topic=netezza-alteringobjects_tt#alteringschemas_tt)

Also, you can [set **DATA_VERSION_RETENTION_TIME** systemwide](/docs/netezza?topic=netezza-dataretentioninterval_tt#settingretentioninterval_tt).

Before you set **DATA_VERSION_RETENTION_TIME** for all tables in a schema or database, consider the cost of storage for temporal tables, which could be significant. See [Showing space usage](/docs/netezza?topic=netezza-showingspaceusage_tt).
{: important}
