---
copyright:
  years:  2022
lastupdated: "2023-02-14"

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

## Creating temporal schemas
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

## Creating temporal databases
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

## What to do next
{: #next_tt}

After you created time travel objects, you can start running time travel queries now. For more information, see the following links:

- [Running queries syntax](/docs/netezza?topic=netezza-runningqueries_tt)
- [Querying historical data](/docs/netezza?topic=netezza-queryingdata_tt)
