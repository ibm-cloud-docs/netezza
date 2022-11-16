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

# Creating time travel objects
{: #temporaltables_tt}

## Creating temporal tables
{: #creatingtemporaltables_tt}

To create a temporal table, as an *Admin* or a user with the *MANAGE SYSTEM* privilege, set [**DATA_VERSION_RETENTION_TIME**](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt) to a nonzero value.

```sql
CREATE TABLE <TABLE NAME> (<rows>) DATA_VERSION_RETENTION_TIME <NUMBER OF DAYS>;
```
{: codeblock}

Example:

```sql
CREATE TABLE PRODUCT (prodid int, proddesc char(100)) DATA_VERSION_RETENTION_TIME 30;
```
{: codeblock}

When you insert a row into the table, the row receives a virtual insert timestamp that is equal to the commit time of the inserting transaction.

When you delete a row from the table, the row receives a virtual delete timestamp that is equal to the commit time of the deleting (or truncating) transaction.

See also [the CREATE TABLE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-table-2).

### Temporal tables
{: #temporal_tt}

{{site.data.keyword.netezza_short}} temporal tables provide a built-in support to access data from any point in time, not only the current moment. Only system-managed temporal tables are supported, which means that the history of your data in the table is maintained and managed automatically.

You can use a system-period temporal table to store current versions of your data. The database transparently stores your updated and deleted data rows. System-period tables are system-managed.

Temporal tables might have the following rows:

| Row type     | Description |
| -----------  | ----------- |
| Current      | Current rows are not marked for deletion.  |
| Historical   | Historical rows are marked for deletion.   |
{: caption}

Temporal tables have the [**DATA_VERSION_RETENTION_TIME** option](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt) specified to a nonzero value.

## Creating temporal databases
{: #createdb_tt}

To create a temporal database, as an *Admin* or a user with the *MANAGE SYSTEM* privilege, set [**DATA_VERSION_RETENTION_TIME**](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt) to a nonzero value.

```sql
CREATE DATABASE <DATABASE NAME> DATA_VERSION_RETENTION_TIME <NUMBER OF DAYS>;
```
{: codeblock}

Example:

```sql
CREATE SCHEMA DB1 DATA_VERSION_RETENTION_TIME 30;
```
{: codeblock}

See also [the CREATE DATABASE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-database-2).

## Creating temporal schemas
{: #createschemas_tt}

To create a temporal schema, as an *Admin* or a user with the *MANAGE SYSTEM* privilege, set [**DATA_VERSION_RETENTION_TIME**](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt) to a nonzero value.

```sql
CREATE SCHEMA <SCHEMA NAME> DATA_VERSION_RETENTION_TIME <NUMBER OF DAYS>;
```
{: codeblock}

Example:

```sql
CREATE SCHEMA SCHEMA1 DATA_VERSION_RETENTION_TIME 30;
```
{: codeblock}

See also [the CREATE SCHEMA](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-schema-2) command.
