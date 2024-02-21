---

copyright:
  years:  2023
lastupdated: "2023-12-22"

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
{:note: .note}

# Creating and altering objects for time travel
{: #enablingdisabling_tt}

## Overview
{: #introtott}

To run time travel queries on {{site.data.keyword.netezza_short}}, create a time travel table, schema, or database (time travel objects) by setting **DATA_VERSION_RETENTION_TIME** (retention time interval) to a nonzero value. To set **DATA_VERSION_RETENTION_TIME**, use the **CREATE** or **ALTER** command for these object types or use the web console. You can select between 1 day and up to 99 days, or zero to alter a temporal object to nontemporal.

Before you set the retention time intervals for all tables in a schema or database, consider the cost of storage for temporal tables, which could be significant. See [Managing time travel space usage](/docs/netezza?topic=netezza-managing_tt).
{: important}

Also, you can [set a default **DATA_VERSION_RETENTION_TIME** for the system](/docs/netezza?topic=netezza-dataretentioninterval_tt#settingretentioninterval_tt).

Temporal tables usually have current rows and historical rows. Current rows are not marked for deletion. Historical rows are marked for deletion (by the **DELETE**, **UPDATE**, **MERGE**, or **TRUNCATE** statements) and are visible to time travel queries up to the specified retention time interval past their delete timestamps.

A table with a **DATA_VERSION_RETENTION_TIME** value of zero is nontemporal. Only its current (not deleted) rows are visible to queries. Some historical rows might be preserved for incremental backup purposes, but the rows are not accessible to time travel queries.

If you alter **DATA_VERSION_RETENTION_TIME** of an existing temporal table to zero, the table becomes a nontemporal table. It no longer supports access to historical data with time travel queries.

## Limitations
{: #limitations_tt}

Changes to retention time intervals for tables, schemas, and databases are not replicated from primary to replica nodes. They are not historical (deleted) table rows either.  

Retention time intervals of tables, schemas, and databases are automatically backed up by the `nzbackup` command and restored by the `nzrestore` command. The insert and delete timestamps of table rows are not backed up and restored. Restored rows get fresh insert timestamps in the target database or system, and rows that were deleted by incremental restore get fresh delete timestamps in the target database or system. There is no expectation or guarantee that the number of historical versions of a row on the target will match that on the source database. For example, a specific row might get updated multiple times, or get updated and then deleted, between backup increments on the source. This actions result in a single delete of that row on the target.

If you try to expand your {{site.data.keyword.netezza_short}} system with additional SPU enclosures, the procedure results in the loss of historical (deleted) rows. All current rows are redistributed with fresh insert timestamps.

The following types of tables cannot be temporal tables:

- Temporary tables
- External tables
- Versioned tables that were altered by adding and/or dropping columns
- Row-secure tables.

This limitation affects the following commands:

- [**CREATE TABLE ROW SECURITY**](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-table-2), [**CREATE EXTERNAL TABLE**](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-external-table-2), **CREATE TEMPORARY TABLE**  
    If **DATA_VERSION_RETENTION_TIME** is specified to a nonzero value, the commands fail.

- [**ALTER TABLE DATA_VERSION_RETENTION_TIME**](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-table-2)  
    If the table is a temporary, row-secure, versioned, or an external table and **DATA_VERSION_RETENTION_TIME** is specified with a nonzero value, the command fails.

- [**ALTER TABLE ADD COLUMN**](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-table-2), [**ALTER TABLE DROP COLUMN**](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-table-2)  
    If the table has a nonzero **DATA_VERSION_RETENTION_TIME** specified, the command fails.

The [**GROOM TABLE VERSIONS**](https://www.ibm.com/docs/en/netezza?topic=npsscr-groom-table-2) command turns a versioned table into nonversioned. When this happens, you can specify a nonzero **DATA_VERSION_RETENTION_TIME** with the **ALTER TABLE** command.

### Exceptions related to DATA_VERSION_RETENTION_TIME for {{site.data.keyword.lakehouse_short}}
There are exceptions for {{site.data.keyword.lakehouse_short}} related to **DATA_VERSION_RETENTION_TIME**. The following table covers the behavior of the **DATA_VERSION_RETENTION_TIME** property for databases, schemas, and tables for {{site.data.keyword.lakehouse_short}}.

|Behavior|Exception|
|----|-----|
|CREATE DATABASE with **DATA_VERSION_RETENTION_TIME** for {{site.data.keyword.lakehouse_short}}|Not allowed|
|ALTER DATABASE with **DATA_VERSION_RETENTION_TIME** for {{site.data.keyword.lakehouse_short}}|Not allowed|
|CREATE SCHEMA with **DATA_VERSION_RETENTION_TIME** for {{site.data.keyword.lakehouse_short}}|Not allowed|
|ALTER SCHEMA with **DATA_VERSION_RETENTION_TIME** for {{site.data.keyword.lakehouse_short}}|Not allowed except for NETEZZA_SCHEMA|
|CREATE TABLE with **DATA_VERSION_RETENTION_TIME** (temporal) table|Allowed under NETEZZA_SCHEMA only|
|ALTER TABLE with **DATA_VERSION_RETENTION_TIME** (temporal) table|Allowed under NETEZZA_SCHEMA only|

If SYSTEM DEFAULT **DATA_VERSION_RETENTION_TIME** is nonzero , CREATE DATABASE will not inherit the property from SYSTEM DEFAULT. CREATE SCHEMA including NETEZZA_SCHEMA will not inherit DB property. There will be no impact or changes needed for time travel related automaint task for {{site.data.keyword.lakehouse_short}}.
{: note}



## Creating time travel objects with the command-line
{: #temporaltables_tt}

### Creating temporal tables with the command-line
{: #creatingtemporaltables_tt}

To create a temporal table, set **DATA_VERSION_RETENTION_TIME** to a nonzero value.

For detailed syntax and privileges, see [the CREATE TABLE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-table-2).

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

### Creating temporal schemas with the command-line
{: #createschemas_tt}

To create a temporal schema, set **DATA_VERSION_RETENTION_TIME** to a nonzero value.

For detailed syntax and privileges, see [the CREATE SCHEMA](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-schema-2) command.

```sql
CREATE SCHEMA <schema_name> DATA_VERSION_RETENTION_TIME <number-of-days>;
```
{: codeblock}

Example:

```sql
CREATE SCHEMA SCHEMA1 DATA_VERSION_RETENTION_TIME 30;
```
{: codeblock}

### Creating temporal databases with the command-line
{: #createdb_tt}

To create a temporal database, set **DATA_VERSION_RETENTION_TIME** to a nonzero value.

For detailed syntax and privileges, see [the CREATE DATABASE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-database-2).

```sql
CREATE DATABASE <db_name> DATA_VERSION_RETENTION_TIME <number-of-days>;
```
{: codeblock}

Example:

```sql
CREATE DATABASE DB1 DATA_VERSION_RETENTION_TIME 30;
```
{: codeblock}

## Creating time travel objects with the web console
{: #temporaltables_wc_tt}

### Creating temporal tables with the web console
{: #creatingtemporaltables_wc_tt}

1. Log in to the web console as described in [Getting started with the web console](/docs/netezza?topic=netezza-getstarted-console).
1. Create a temporal table as described in [Creating tables](/docs/netezza?topic=netezza-create-tables#creating-tables).

You must set **retention time interval** to a nonzero value.

Databases, schemas, and table names containing a dot character (".") do not show in the time travel statistics and graphs when you set the **retention time interval** to a nonzero value. When you do not set the **retention time interval**, all special characters are supported.
{: note}

When you insert a row into the table, the row receives a virtual insert timestamp that is equal to the commit time of the inserting transaction.

When you delete a row from the table, the row receives a virtual delete timestamp that is equal to the commit time of the deleting (or truncating) transaction.

### Creating temporal schemas with the web console
{: #createschemas_wc_tt}

To create a temporal schema, set **retention time interval** to a nonzero value.

1. Log in to the web console as described in [Getting started with the web console](/docs/netezza?topic=netezza-getstarted-console).
1. Create a temporal schema as described in [Creating schemas](/docs/netezza?topic=netezza-create-schemas).

### Creating temporal databases with the command-line
{: #createdb_wc_tt}

To create a temporal database, set **retention time interval** to a nonzero value.

1. Log in to the web console as described in [Getting started with the web console](/docs/netezza?topic=netezza-getstarted-console).
1. Create a temporal database as described in [Creating databases](/docs/netezza?topic=netezza-create-db).

## Altering time travel objects with the command-line
{: #alteringobjects_tt}

### Altering temporal tables to nontemporal with the command-line
{: #droppingtemporal_tt}

To alter a temporal table to nontemporal, set **DATA_VERSION_RETENTION_TIME** to 0.

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

### Altering nontemporal tables to temporal with the command-line
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

If you first disabled your temporal table and then converted the same table to a temporal table, you do not have access to the prior historical rows for that table. Historical data is collected when rows are deleted or updated after the table is converted to temporal.
{: important}

As with the **CREATE TABLE** command, a row that is inserted into the table receives a virtual insert timestamp that is equal to the commit time of the inserting transaction. A row that is deleted from the table receives a virtual delete timestamp that is equal to the commit time of the deleting (or truncating) transaction. The table’s retention lower bound and retention start time are equal to or just before the commit time of this **ALTER TABLE** transaction.

Unlike the **CREATE TABLE** command, which does not have any existing rows, existing visible rows in the table are treated as if they were inserted by this **ALTER TABLE** transaction. The existing visible rows receive virtual insert timestamps that are equal to the retention start time. With these timestamps, the rows are potentially visible to time travel queries.

### Altering temporal schemas to nontemporal with the command-line
{: #alterschematemporal_tt}

To alter a temporal schema to nontemporal, set **DATA_VERSION_RETENTION_TIME** to 0.

For detailed syntax, the necessary privileges, and the **CASCADE** option, see [the ALTER SCHEMA command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-schema-2).

```sql
ALTER SCHEMA <schema_name> DATA_VERSION_RETENTION_TIME 0 NOCASCADE;
```
{: codeblock}

Example:

```sql
ALTER SCHEMA SCHEMA DATA_VERSION_RETENTION_TIME 0 NOCASCADE;
```
{: codeblock}

### Altering nontemporal schemas to temporal with the command-line
{: #alterschematemporalnon_tt}

To alter a nontemporal schema to temporal, set **DATA_VERSION_RETENTION_TIME** to a nonzero value.

For detailed syntax, the necessary privileges, and the **CASCADE** option, see [the ALTER SCHEMA command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-schema-2).

```sql
ALTER SCHEMA <schema_name> DATA_VERSION_RETENTION_TIME <number-of-days> NOCASCADE;
```
{: codeblock}

Example:

```sql
ALTER SCHEMA DB1 DATA_VERSION_RETENTION_TIME 30 NOCASCADE;
```
{: codeblock}

### Altering temporal databases to nontemporal with the command-line
{: #alterdbtemporal_tt}

To alter a temporal database to nontemporal, set **DATA_VERSION_RETENTION_TIME** to 0.

For detailed syntax and the necessary privileges, see [the ALTER DATABASE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-database-2).

```sql
ALTER DATABASE <db_name> DATA_VERSION_RETENTION_TIME 0 NOCASCADE;
```
{: codeblock}

Example:

```sql
ALTER DATABASE DB1 DATA_VERSION_RETENTION_TIME 0 NOCASCADE;
```
{: codeblock}

### Altering nontemporal databases to temporal with the command-line
{: #alterdbtemporalnon_tt}

To alter a nontemporal database to temporal, set **DATA_VERSION_RETENTION_TIME** to a nonzero value.

For detailed syntax and the necessary privileges, see [the ALTER DATABASE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-database-2).

```sql
ALTER DATABASE <db_name> DATA_VERSION_RETENTION_TIME <number-of-days> NOCASCADE;
```
{: codeblock}

Example:

```sql
ALTER DATABASE DB1 DATA_VERSION_RETENTION_TIME 30 NOCASCADE;
```
{: codeblock}

## Altering time travel objects with the web console
{: #alteringobjects_wc_tt}

### Altering temporal tables to nontemporal with the web console
{: #droppingtemporal_tt}

To alter a temporal table to nontemporal, set **retention time interval** to 0.

1. Log in to the web console as described in [Getting started with the web console](/docs/netezza?topic=netezza-getstarted-console).
1. Alter your table as described in [Updating retention time interval for tables](/docs/netezza?topic=netezza-create-tables#updating_retention_db).

When you set **retention time interval** to 0, you cannot run time travel queries and you do not have access to historical rows for that table anymore. You can reclaim some or all of the now inaccessible historical rows in the table with **GROOM TABLE**.

### Altering nontemporal tables to temporal with the web console
{: #convertingtemporal_wc_tt}

To alter a nontemporal table to temporal, set **retention time interval** to a nonzero value.

1. Log in to the web console as described in [Getting started with the web console](/docs/netezza?topic=netezza-getstarted-console).
1. Alter your table as described in [Updating retention time interval for tables](/docs/netezza?topic=netezza-create-tables#updating_retention_db).

If you first disabled your temporal table and then converted the same table to a temporal table, you do not have access to the prior historical rows for that table. Historical data is collected when rows are deleted or updated after the table is converted to temporal.
{: important}

Similarly to when you create a table, a row that is inserted into the table receives a virtual insert timestamp that is equal to the commit time of the inserting transaction. A row that is deleted from the table receives a virtual delete timestamp that is equal to the commit time of the deleting (or truncating) transaction. The table’s retention lower bound and retention start time are equal to or just before the commit time of this altering transaction.

Unlike when you create a table, existing visible rows in the table are treated as if they were inserted by this altering transaction. The existing visible rows receive virtual insert timestamps that are equal to the retention start time. With these timestamps, the rows are potentially visible to time travel queries.

### Altering temporal schemas to nontemporal with the web console
{: #alterschematemporal_wc_tt}

To alter a temporal schema to nontemporal, set **retention time interval** to 0.

1. Log in to the web console as described in [Getting started with the web console](/docs/netezza?topic=netezza-getstarted-console).
1. Alter your table as described in [Updating retention time interval for schemas](/docs/netezza?topic=netezza-create-schemas#updating_rt_sch).

### Altering nontemporal schemas to temporal with the web console
{: #alterschematemporalnon_wc_tt}

To alter a nontemporal schema to temporal, set **retention time interval** to a nonzero value.

1. Log in to the web console as described in [Getting started with the web console](/docs/netezza?topic=netezza-getstarted-console).
1. Alter your table as described in [Updating retention time interval for schemas](/docs/netezza?topic=netezza-create-schemas#updating_rt_sch).

### Altering temporal databases to nontemporal with the web console
{: #alterdbtemporal_wc_tt}

To alter a temporal database to nontemporal, set **retention time interval** to 0.

1. Log in to the web console as described in [Getting started with the web console](/docs/netezza?topic=netezza-getstarted-console).
1. Alter your table as described in [Updating retention time interval for databases](/docs/netezza?topic=netezza-databases#updating_retention_db).

### Altering nontemporal databases to temporal with the web console
{: #alterdbtemporalnon_wc_tt}

To alter a nontemporal database to temporal, set **retention time interval** to a nonzero value.

1. Log in to the web console as described in [Getting started with the web console](/docs/netezza?topic=netezza-getstarted-console).
1. Alter your table as described in [Updating retention time interval for databases](/docs/netezza?topic=netezza-databases#updating_retention_db).

## What to do next
{: #next_tt}

After you created time travel objects, you can start running time travel queries. For more information, see the following links:

- [Running queries syntax](/docs/netezza?topic=netezza-runningqueries_tt)
- [Querying historical data](/docs/netezza?topic=netezza-queryingdata_tt)
