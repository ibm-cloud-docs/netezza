---

copyright:
  years:  2022
lastupdated: "2022-11-22"

keywords: netezza time travel, enabling time travel on netezza, creating tables, creating schemas, creating databases, altering schemas, altering databases, altering tables, time travel objects, retention time interval, create tables, create schemas, create databases, alter schemas, alter databases, alter tables,

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

# Creating and altering objects for time travel
{: #enablingdisabling_tt}

## Overview
{: #introtott}

To run time travel queries on {{site.data.keyword.netezza_short}}, create a time travel table, database, or schema (time travel objects) by setting [**DATA_VERSION_RETENTION_TIME**](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt) (retention time interval) to a nonzero value. You can select between 1 day and up to of 99 days.

To set **DATA_VERSION_RETENTION_TIME**, you can run the **CREATE** or **ALTER** command for these object types.

Before you set the retention time intervals for all tables in a schema or database, consider the cost of storage for temporal tables, which could be significant. See [Showing space usage](/docs/netezza?topic=netezza-showingspaceusage_tt).
{: important}

Also, you can [set **DATA_VERSION_RETENTION_TIME** for the system](/docs/netezza?topic=netezza-dataretentioninterval_tt#settingretentioninterval_tt).

Temporal tables usually have current rows and historical rows. Current rows are not marked for deletion. Historical rows are marked for deletion (by the **DELETE**, **UDPATE** or **TRUNCATE** statements) and are visible to time travel queries up to the specified retention time interval past their delete timestamps.

A table with a **DATA_VERSION_RETENTION_TIME** value of zero is nontemporal. Only its current (not deleted) rows are visible to queries. Some historical rows might be preserved for incremental backup purposes, but the rows are not accessible to time travel queries.

If you alter **DATA_VERSION_RETENTION_TIME** of an existing temporal table to zero, the table becomes a nontemporal table. It no longer supports access to historical data with time travel queries.

## Limitations
{: #limitations_tt}

The following types of tables cannot be temporal tables:

- Temporary tables.
- External tables.
- Versioned tables that were altered by adding and/or dropping columns.
- Row-secure tables.

Also, consider the following points:

- Changes to retention time intervals for tables, schemas, and databases are not replicated.
- Retention time intervals of tables, schemas, and databases are automatically backed up by the `nzbackup` command and restored by the `nzrestore` command. The insert and delete timestamps of table rows are not. Restored rows get fresh insert timestamps in the target database or system, and rows that were deleted by incremental restore get fresh delete timestamps in the target database or system".

This limitations affect the following commands:

- **CREATE TABLE ROW SECURITY**, **CREATE EXTERNAL TABLE**, **CREATE TEMPORARY TABLE**

    If **DATA_VERSION_RETENTION_TIME** is specified to a nonzero value, the commands fail.

- **ALTER TABLE DATA_VERSION_RETENTION_TIME**

    If the table is a temporary, row-secure, versioned, or an external table and DATA_VERSION_RETENTION_TIME is specified with a nonzero value, the command fails.

- **ALTER TABLE ADD COLUMN**, **ALTER TABLE DROP COLUMN**

    If the table has a nonzero **DATA_VERSION_RETENTION_TIME** specified, the command fails.

The **GROOM TABLE VERSIONS** command turns a versioned table into nonversioned. When this happens, you can specify a nonzero **DATA_VERSION_RETENTION_TIME** with the **ALTER TABLE** command.

## Creating time travel objects
{: #temporaltables_tt}

### Creating temporal tables
{: #creatingtemporaltables_tt}

To create a temporal table, set **DATA_VERSION_RETENTION_TIME** to a nonzero value.

See [the CREATE TABLE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-table-2).

```sql
CREATE TABLE <tablename> ( <col>[, <col>… ] ) DATA_VERSION_RETENTION_TIME <number-of-days>;
```
{: codeblock}

Example:

```sql
CREATE TABLE PRODUCT (prodid int, proddesc char(100)) DATA_VERSION_RETENTION_TIME 30;
```
{: codeblock}

When you insert a row into the table, the row receives a virtual insert timestamp that is equal to the commit time of the inserting transaction.

When you delete a row from the table, the row receives a virtual delete timestamp that is equal to the commit time of the deleting (or truncating) transaction.

### Creating temporal schemas
{: #createschemas_tt}

To create a temporal schema, set **DATA_VERSION_RETENTION_TIME** to a nonzero value.

See [the CREATE SCHEMA](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-schema-2) command.

```sql
CREATE SCHEMA <schema_name> DATA_VERSION_RETENTION_TIME <number-of-days>;
```
{: codeblock}

Example:

```sql
CREATE SCHEMA SCHEMA1 DATA_VERSION_RETENTION_TIME 30;
```
{: codeblock}

### Creating temporal databases
{: #createdb_tt}

To create a temporal database, set **DATA_VERSION_RETENTION_TIME** to a nonzero value.

See [the CREATE DATABASE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-database-2).

```sql
CREATE DATABASE <db_name> DATA_VERSION_RETENTION_TIME <number-of-days>;
```
{: codeblock}

Example:

```sql
CREATE DATABASE DB1 DATA_VERSION_RETENTION_TIME 30;
```
{: codeblock}

## Altering time travel objects
{: #alteringobjects_tt}

### Altering temporal tables to nontemporal
{: #droppingtemporal_tt}

To alter a temporal table to a nontemporal, set **DATA_VERSION_RETENTION_TIME** to 0.

For detailed syntax and the necessary privileges, see [the ALTER TABLE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-table-2).

```sql
ALTER TABLE <table> DATA_VERSION_RETENTION_TIME 0;
```
{: codeblock}

Example:

```sql
ALTER TABLE PRODUCT DATA_VERSION_RETENTION_TIME 0;
```
{: codeblock}

When you set **DATA_VERSION_RETENTION_TIME** to 0, you cannot run time travel queries and you do not have access to historical rows for that table anymore. You can reclaim some or all of the now inaccessible historical rows in the table with **GROOM TABLE**.

If you convert the table to a temporal again, the table is not accessible to time travel queries anymore and you cannot run time travel queries.

### Altering nontemporal tables to temporal
{: #convertingtemporal_tt}

To alter a nontemporal table to temporal, set **DATA_VERSION_RETENTION_TIME**] to a nonzero value.

For detailed syntax and the necessary privileges, see [the ALTER TABLE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-table-2).

```sql
ALTER TABLE <table> DATA_VERSION_RETENTION_TIME <number-of-days>;
```
{: codeblock}

Example:

```sql
ALTER TABLE PRODUCT DATA_VERSION_RETENTION_TIME 30;
```
{: codeblock}

If you first disabled your temporal table and then converted the same table to a temporal table, you do not have access to the historical rows for that table. Historical data is collected when rows are deleted or updated after the table is converted to temporal.
{: important}

As with the **CREATE TABLE** command, a row that is inserted into the table receives a virtual insert timestamp that is equal to the commit time of the inserting transaction. A row that is deleted from the table receives a virtual delete timestamp that is equal to the commit time of the deleting (or truncating) transaction. The table’s retention lower bound and retention start time are equal to or just before the commit time of this **ALTER TABLE** transaction.

Unlike the **CREATE TABLE** command, which does not have any existing rows, existing visible rows in the table are treated as if they were inserted by this **ALTER TABLE** transaction. The existing visible rows receive virtual insert timestamps that are equal to the retention start time. With these timestamps, the rows are potentially visible to time travel queries.

### Altering temporal schemas to nontemporal
{: #alterschematemporal_tt}

To alter a temporal schema to a nontemporal, set **DATA_VERSION_RETENTION_TIME** to 0.

For detailed syntax, the necessary privileges, and the **CASCADE** option, see [the ALTER DATABASE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-database-2).

```sql
ALTER SCHEMA <schema_name> DATA_VERSION_RETENTION_TIME 0;
```
{: codeblock}

Example:

```sql
ALTER SCHEMA SCHEMA DATA_VERSION_RETENTION_TIME 0;
```
{: codeblock}

### Altering nontemporal schemas to temporal
{: #alterschematemporalnon_tt}

To alter a nontemporal schema to temporal, set **DATA_VERSION_RETENTION_TIME** to a nonzero value.

For detailed syntax, the necessary privileges, and the **CASCADE** option, see [the ALTER DATABASE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-database-2).

```sql
ALTER SCHEMA <schema_name> DATA_VERSION_RETENTION_TIME <number-of-days>;
```
{: codeblock}

Example:

```sql
ALTER SCHEMA DB1 DATA_VERSION_RETENTION_TIME 30;
```
{: codeblock}

### Altering temporal databases to nontemporal
{: #alterdbtemporal_tt}

To alter a temporal database to a nontemporal, set **DATA_VERSION_RETENTION_TIME** to 0.

For detailed syntax and the necessary privileges, see [the ALTER DATABASE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-database-2).

```sql
ALTER DATABASE <db_name> DATA_VERSION_RETENTION_TIME 0;
```
{: codeblock}

Example:

```sql
ALTER DATABASE DB1 DATA_VERSION_RETENTION_TIME 0;
```
{: codeblock}

### Altering nontemporal databases to temporal
{: #alterdbtemporalnon_tt}

To alter a nontemporal database to temporal, set **DATA_VERSION_RETENTION_TIME** to a nonzero value.

For detailed syntax and the necessary privileges, see [the ALTER DATABASE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-database-2).

```sql
ALTER DATABASE <db_name> DATA_VERSION_RETENTION_TIME <number-of-days>;
```
{: codeblock}

Example:

```sql
ALTER DATABASE DB1 DATA_VERSION_RETENTION_TIME 30;
```
{: codeblock}

## What to do next
{: #next_tt}

After you created time travel objects, you can start running time travel queries. For more information, see the following links:

- [Running queries syntax](/docs/netezza?topic=netezza-runningqueries_tt)
- [Querying historical data](/docs/netezza?topic=netezza-queryingdata_tt)
