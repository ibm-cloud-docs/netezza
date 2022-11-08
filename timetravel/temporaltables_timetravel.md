---
copyright:
  years:  2022
lastupdated: "2022-11-07"

keywords: time travel, Netezza time travel,

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

# Temporal tables
{: #temporaltables_tt}

## Temporal tables
{: #temporal_tt}

{{site.data.keyword.netezza_short}} temporal tables provide a built-in support to access data from any point in time, not only the current moment. Only system-managed temporal tables are supported, which means that the history of your data in the table is maintained and managed automatically.

You can use a system-period temporal table to store current versions of your data. The database transparently stores your updated and deleted data rows. System-period tables are system-managed.

Temporal tables might have the following rows:

| Row type     | Description |
| -----------  | ----------- |
| Current      | Current rows are not marked for deletion.  |
| Historical   | Historical rows are marked for deletion.   |


You can [create a temporal table] or [convert a nontemporal table to a temporal] by setting **DATA_VERSION_RETENTION_TIME** to a nonzero value.

To [drop a temporal table], you must set **DATA_VERSION_RETENTION_TIME** to 0.

## Creating temporal tables
{: #creatingtemporal_tt}

To create a temporal table, as an *Admin* or a user with the *MANAGE SYSTEM* privilege, run the command.

```sql
CREATE TABLE <TABLE NAME> (<rows>) DATA_VERSION_RETENTION_TIME <NUMBER OF DAYS>;
```
{: codeblock}

Example:

```sql
CREATE TABLE PRODUCT (prodid int, proddesc char(100)) DATA_VERSION_RETENTION_TIME 30;
```
{: codeblock}

See also [the CREATE TABLE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-table-2).

## Disabling temporal tables
{: #droppingtemporal_tt}

To disable a temporal table, as an *Admin* or a user with the *MANAGE SYSTEM* privilege, run the command.

```sql
ALTER TABLE <TABLE NAME> DATA_VERSION_RETENTION_TIME 0;
```
{: codeblock}

Example:

```sql
ALTER TABLE PRODUCT DATA_VERSION_RETENTION_TIME 0;
```
{: codeblock}

When you set **DATA_VERSION_RETENTION_TIME** to 0, you cannot run temporal queries and you do not have access to historical rows for that table anymore.
You can reclaim some or all of the current historical rows in the table (with GROOM TABLE) without warning.

If you convert the table to a temporal again, the table is not accessible to temporal queries anymore.

See also [the ALTER TABLE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-table-2).

## Altering nontemporal tables to temporal
{: #convertingtemporal_tt}

To alter a nontemporal table to temporal, as an *Admin* or a user with the *MANAGE SYSTEM* privilege, run the command.

```sql
ALTER TABLE <TABLE NAME> DATA_VERSION_RETENTION_TIME <NUMBER OF DAYS>;
```
{: codeblock}

Example:

```sql
ALTER TABLE PRODUCT DATA_VERSION_RETENTION_TIME 30;
```
{: codeblock}

If you first disabled your temporal table and then converted the same table to a temporal table, you cannot run temporal queries and you do not have access to historical rows for that table anymore.
{: important}

See also [the ALTER TABLE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-table-2).
