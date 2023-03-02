---
copyright:
  years:  2023
lastupdated: "2023-03-02"

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

# Creating and altering time travel objects
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
{: caption}

Temporal tables have the [**DATA_VERSION_RETENTION_TIME** option](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt) specified to a nonzero value.

### Creating temporal tables
{: #creatingtemporal_tt}

To create a temporal table, as an *Admin* or a user with the *MANAGE SYSTEM* privilege, set [**DATA_VERSION_RETENTION_TIME**](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt)to a nonzero value.

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

### Altering tables
{: #altertables_tt}

#### Altering temporal tables to nontemporal
{: #droppingtemporal_tt}

To alter a temporal table to a nontemporal, as an *Admin* or a user with the *MANAGE SYSTEM* privilege, set [**DATA_VERSION_RETENTION_TIME**](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt) to 0.

```sql
ALTER TABLE <TABLE NAME> DATA_VERSION_RETENTION_TIME 0;
```
{: codeblock}

Example:

```sql
ALTER TABLE PRODUCT DATA_VERSION_RETENTION_TIME 0;
```
{: codeblock}

When you set [**DATA_VERSION_RETENTION_TIME**](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt) to 0, you cannot run time travel queries and you do not have access to historical rows for that table anymore.
You can reclaim some or all of the current historical rows in the table (with GROOM TABLE) without warning.

If you convert the table to a temporal again, the table is not accessible to time travel queries anymore and you cannot run time travel queries.

See also [the ALTER TABLE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-table-2).

#### Altering nontemporal tables to temporal
{: #convertingtemporal_tt}

To alter a nontemporal table to temporal, as an *Admin* or a user with the *MANAGE SYSTEM* privilege, set [**DATA_VERSION_RETENTION_TIME**](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt) to a nonzero value.

```sql
ALTER TABLE <TABLE NAME> DATA_VERSION_RETENTION_TIME <NUMBER OF DAYS>;
```
{: codeblock}

Example:

```sql
ALTER TABLE PRODUCT DATA_VERSION_RETENTION_TIME 30;
```
{: codeblock}

If you first disabled your temporal table and then converted the same table to a temporal table, you cannot run time travel queries and you do not have access to historical rows for that table anymore.
{: important}

As with the CREATE TABLE command, a row that is inserted into the table receives a virtual insert timestamp that is equal to the commit time of the inserting transaction. A row that is deleted from the table receives a virtual delete timestamp that is equal to the commit time of the deleting (or truncating) transaction. The table’s retention lower bound and retention start time are equal to or just before the commit time of this ALTER TABLE’s transaction.

Unlike the CREATE TABLE command, which does not have any existing rows, existing visible rows in the table are treated as if they were inserted by this ALTER TABLE transaction. For example, the existing visible rows receive virtual insert timestamps that are equal to the retention start time.
With these timestamps, the rows are potentially visible to time travel queries.

See also [the ALTER TABLE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-table-2).

## Creating databases
{: #createdb_tt}

## Altering databases
{: #alterdb_tt}

## Creating schemas
{: #createschemas_tt}

## Altering schemas
{: #alteringschemas_tt}
