---
copyright:
  years:  2022
lastupdated: "2022-11-17"

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

# Altering time travel objects
{: #alteringobjects_tt}

## Altering tables
{: #altertables_tt}

### Altering temporal tables to nontemporal
{: #droppingtemporal_tt}

To alter a temporal table to a nontemporal, set **DATA_VERSION_RETENTION_TIME** to 0.

For detailed syntax and the necessary privileges, see [the ALTER TABLE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-table-2).

```sql
ALTER TABLE <TABLE NAME> DATA_VERSION_RETENTION_TIME 0;
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
ALTER TABLE <TABLE NAME> DATA_VERSION_RETENTION_TIME <NUMBER OF DAYS>;
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

## Altering schemas
{: #alteringschemas_tt}

### Altering temporal schemas to nontemporal
{: #alterschematemporal_tt}

To alter a temporal schema to a nontemporal, set **DATA_VERSION_RETENTION_TIME** to 0.

For detailed syntax, the necessary privileges, and the **CASCADE** option, see [the ALTER DATABASE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-database-2).

```sql
ALTER SCHEMA <SCHEMA NAME> DATA_VERSION_RETENTION_TIME 0;
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
ALTER SCHEMA <SCHEMA NAME> DATA_VERSION_RETENTION_TIME <NUMBER OF DAYS>;
```
{: codeblock}

Example:

```sql
ALTER SCHEMA DB1 DATA_VERSION_RETENTION_TIME 30;
```
{: codeblock}

## Altering databases
{: #alterdb_tt}

### Altering temporal databases to nontemporal
{: #alterdbtemporal_tt}

To alter a temporal database to a nontemporal, set **DATA_VERSION_RETENTION_TIME** to 0.

For detailed syntax and the necessary privileges, see [the ALTER DATABASE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-database-2).

```sql
ALTER DATABASE <DATABASE NAME> DATA_VERSION_RETENTION_TIME 0;
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
ALTER DATABASE <DATABASE NAME> DATA_VERSION_RETENTION_TIME <NUMBER OF DAYS>;
```
{: codeblock}

Example:

```sql
ALTER DATABASE DB1 DATA_VERSION_RETENTION_TIME 30;
```
{: codeblock}
