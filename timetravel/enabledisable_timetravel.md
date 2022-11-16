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

To start running time travel queries (temporal queries) on {{site.data.keyword.netezza_short}}, create a temporal table, database, or schema (time travel objects) by setting [**DATA_VERSION_RETENTION_TIME**](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt) to a nonzero value.

You can set **DATA_VERSION_RETENTION_TIME** by running the **CREATE** or **ALTER** command.

Also, you can [set **DATA_VERSION_RETENTION_TIME** systemwide](/docs/netezza?topic=netezza-dataretentioninterval_tt#settingretentioninterval_tt).

Temporal tables usually have current rows and historical rows. Current rows are not marked for deletion. Historical rows are marked for deletion (by the **DELETE**, **UDPATE** or **TRUNCATE** statements) and are visible to time travel queries up to the specified retention time interval past their delete timestamps.

A table with a **DATA_VERSION_RETENTION_TIME** value of zero is nontemporal. Only its current (not deleted) rows are visible to queries.

Some historical rows might be preserved for incremental backup purposes, but the rows are not accessible to time travel queries.

You can alter **DATA_VERSION_RETENTION_TIME** of an existing temporal table to zero. The table becomes a nontemporal table and it no longer supports access to historical data with time travel queries.

See:

- [Creating temporal tables](/docs/netezza?topic=netezza-temporaltables_tt#creatingtemporal_tt)
- [Creating temporal databases](/docs/netezza?topic=netezza-temporaltables_tt#createdb_tt)
- [Creating temporal schemas](/docs/netezza?topic=netezza-temporaltables_tt#createschemas_tt)
- [Altering tables](/docs/netezza?topic=netezza-alteringobjects_tt#altertables_tt)
- [Altering databases](/docs/netezza?topic=netezza-alteringobjects_tt#alterdb_tt)
- [Altering schemas](/docs/netezza?topic=netezza-alteringobjects_tt#alteringschemas_tt)

Before you set **DATA_VERSION_RETENTION_TIME** for all tables in a schema or database, consider the cost of storage for temporal tables, which could be significant. See [Showing space usage](/docs/netezza?topic=netezza-showingspaceusage_tt).
{: important}

## Limitations
{: #limitations_tt}

The following types of tables cannot be temporal tables:

- Temporary tables.
- External tables.
- Versioned tables that were altered by adding and/or dropping columns.
- Row-secure tables.

This limitation affects the following commands:

- **CREATE TABLE ROW SECURITY**, **CREATE EXTERNAL TABLE**, **CREATE TEMPORARY TABLE**
    If **DATA_VERSION_RETENTION_TIME** is specified to a nonzero value, the commands fail.

- **ALTER TABLE DATA_VERSION_RETENTION_TIME**
    If the table is a temporary, row-secure, versioned, or an external table and DATA_VERSION_RETENTION_TIME is specified with a nonzero value, the command fails.

- **ALTER TABLE ADD COLUMN**, **ALTER TABLE DROP COLUMN**
    If the table has a nonzero **DATA_VERSION_RETENTION_TIME** specified, the command fails.

The **GROOM TABLE VERSIONS** command turns a versioned table into nonversioned. When this happens, you can specify a nonzero **DATA_VERSION_RETENTION_TIME** with the **ALTER TABLE** command.



**WHAT TO DO NEXT**
You can start running time travel queries now. For more information, see the following links:

- [Running queries syntax](/docs/netezza?topic=netezza-runningqueries_tt).
- [Querying historical data](/docs/netezza?topic=netezza-queryingdata_tt).
