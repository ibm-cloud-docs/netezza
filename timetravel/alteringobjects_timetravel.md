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

# Altering objects
{: #alteringobjects_tt}

## Altering tables
{: #altertables_tt}

### Altering temporal tables to nontemporal
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

When you set [**DATA_VERSION_RETENTION_TIME**](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt) to 0, you cannot run temporal queries and you do not have access to historical rows for that table anymore.
You can reclaim some or all of the current historical rows in the table (with GROOM TABLE) without warning.

If you convert the table to a temporal again, the table is not accessible to temporal queries anymore and you cannot run time travel queries.

See also [the ALTER TABLE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-table-2).

### Altering nontemporal tables to temporal
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

If you first disabled your temporal table and then converted the same table to a temporal table, you cannot run temporal queries and you do not have access to historical rows for that table anymore.
{: important}

As with the CREATE TABLE command, a row that is inserted into the table receives a virtual insert timestamp that is equal to the commit time of the inserting transaction. A row that is deleted from the table receives a virtual delete timestamp that is equal to the commit time of the deleting (or truncating) transaction. The table’s retention lower bound and retention start time are equal to or just before the commit time of this ALTER TABLE’s transaction.

Unlike the CREATE TABLE command, which does not have any existing rows, existing visible rows in the table are treated as if they were inserted by this ALTER TABLE transaction. For example, the existing visible rows receive virtual insert timestamps that are equal to the retention start time.
With these timestamps, the rows are potentially visible to temporal queries.

See also [the ALTER TABLE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-table-2).

## Altering databases
{: #alterdb_tt}

### Altering temporal databases to nontemporal
{: #alterdbtemporal_tt}

To alter a temporal database to a nontemporal, as an *Admin* or a user with the *MANAGE SYSTEM* privilege, set [**DATA_VERSION_RETENTION_TIME**](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt) to 0.

```sql
ALTER DATABASE <DATABASE NAME> DATA_VERSION_RETENTION_TIME 0;
```
{: codeblock}

Example:

```sql
ALTER DATABASE DB1 DATA_VERSION_RETENTION_TIME 0;
```
{: codeblock}

When you set [**DATA_VERSION_RETENTION_TIME**](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt) to 0, you cannot run temporal queries and you do not have access to historical rows for that database anymore.
You can reclaim some or all of the current historical rows in the database (with GROOM TABLE) without warning.

If you convert the database to a temporal again, the database is not accessible to temporal queries anymore and you cannot run time travel queries.

See also [the ALTER DATABASE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-database-2).

### Altering nontemporal databases to temporal
{: #alterdbtemporalnon_tt}

To alter a nontemporal database to temporal, as an *Admin* or a user with the *MANAGE SYSTEM* privilege, set [**DATA_VERSION_RETENTION_TIME**](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt) to a nonzero value.

```sql
ALTER DATABASE <DATABASE NAME> DATA_VERSION_RETENTION_TIME <NUMBER OF DAYS>;
```
{: codeblock}

Example:

```sql
ALTER DATABASE DB1 DATA_VERSION_RETENTION_TIME 30;
```
{: codeblock}

If you first disabled your temporal database and then converted the same database to a temporal database, you cannot run temporal queries and you do not have access to historical rows for that database anymore.
{: important}

## Altering schemas
{: #alteringschemas_tt}

### Altering temporal schemas to nontemporal
{: #alterschematemporal_tt}

To alter a temporal schema to a nontemporal, as an *Admin* or a user with the *MANAGE SYSTEM* privilege, set [**DATA_VERSION_RETENTION_TIME**](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt) to 0.

```sql
ALTER SCHEMA <SCHEMA NAME> DATA_VERSION_RETENTION_TIME 0;
```
{: codeblock}

Example:

```sql
ALTER SCHEMA SCHEMA DATA_VERSION_RETENTION_TIME 0;
```
{: codeblock}

When you set [**DATA_VERSION_RETENTION_TIME**](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt) to 0, you cannot run temporal queries and you do not have access to historical rows for that schema anymore.
You can reclaim some or all of the current historical rows in the schema (with GROOM TABLE) without warning.

If you convert the schema to a temporal again, the database is not accessible to temporal queries anymore and you cannot run time travel queries.

See also [the ALTER DATABASE command](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-database-2).

### Altering nontemporal schemas to temporal
{: #alterschematemporalnon_tt}

To alter a nontemporal schema to temporal, as an *Admin* or a user with the *MANAGE SYSTEM* privilege, set [**DATA_VERSION_RETENTION_TIME**](/docs/netezza?topic=netezza-dataretentioninterval_tt#dataretentionintervaldef_tt) to a nonzero value.

```sql
ALTER SCHEMA <SCHEMA NAME> DATA_VERSION_RETENTION_TIME <NUMBER OF DAYS>;
```
{: codeblock}

Example:

```sql
ALTER SCHEMA DB1 DATA_VERSION_RETENTION_TIME 30;
```
{: codeblock}

If you first disabled your temporal schema and then converted the same schema to a temporal schema, you cannot run temporal queries and you do not have access to historical rows for that schema anymore.
{: important}
