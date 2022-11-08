---
copyright:
  years:  2022
lastupdated: "2022-11-03"

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

# Conecpts and commands
{: #conceptscommands_tt}

## Time travel SQL commands
{: #sqlcommands_tt}

A **DATA_VERSION_RETENTION_TIME** subcommand is added to the following commands:

- [SET SYSTEM DEFAULT](https://www.ibm.com/docs/en/netezza?topic=npsscr-set-system-default-2)
- [SHOW SYSTEM DEFAULT](https://www.ibm.com/docs/en/netezza?topic=npsscr-show-system-default-2)
- [CREATE DATABASE](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-database-2)
- [ALTER DATABASE](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-database-2)
- [CREATE SCHEMA](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-schema-2)
- [ALTER SCHEMA](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-schema-2)
- [CREATE TABLE](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-table-2)
- [ALTER TABLE](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-table-2)

See also:

- [SHOW TEMPORAL HISTOGRAM](https://www.ibm.com/docs/en/netezza?topic=reference-show-temporal-histogram)

## Data version retention interval (**DATA_VERSION_RETENTION_TIME**)
{: #dataretentioninterval_tt}

Data version retention time interval (retention time interval, retention interval) specifies the maximum number of days that historical data in a temporal table is preserved and visible to time travel queries.

For example, if you modify an object, {{site.data.keyword.netezza_short}} preserves the state of the data before the modification so that you can do time travel operations.

The default retention interval value at all levels is 0. The maximum is 92 days. When the retention interval ends, your historical data is no longer available for querying and you cannot restore objects.

A table with a 0 retention interval is not a temporal table (time travel table) and does not support time travel queries.

If you set a retention interval of 0 days for an object, time travel is disabled for the object.

{{site.data.keyword.netezza_short}} retains the historical data based on the retention time interval that is associated with a table. This retention period is the time period (in days) over which you can query the historical data.

Older historical rows are reclaimed when you run the **GROOM TABLE** command, or use the **AutoMaint** groom feature if the rows are not needed to support incremental backup.

To set **DATA_VERSION_RETENTION_TIME**, see [Setting the retention interval] ADD LINK

## Temporal tables
{: #temporaltables_tt}

A temporal table is a table that has a specified, nonzero retention interval, and supports time travel queries.

Temporal tables provide a built-in support to access the data that is stored in a table at any point in time rather than current data (current moment in time). The history of your data in the table is maintained and managed automatically.

The retention interval of a temporal table is the period of time that starts at the retention start timestamp and has no defined end.

Tables with retention interval set to zero are not temporal.

{{site.data.keyword.netezza_short}} supports only system-managed temporal tables.

Temporal tables might have the following rows:

**Curent rows**
Current rows are not marked for deletion.

**Historical rows**
Historical rows are marked for deletion.

### Retention interval start timestamp
{: #tableretentiontimestamp_tt}

At any specified time, a table retention interval start timestamp equals the larger of the following values:

- The current date/time, (timestamp with a microsecond granularity) minus the retention interval.

- The table’s data version retention lower bound, which is is the date/time that the table’s retention time interval was last set with the CREATE TABLE or ALTER TABLE statements.

### Delete timestamp
{: #deletetimestamp_tt}

The delete timestampof a historical row is the date/time that the transaction deleting the row committed. Not the time of execution of the particular DELETE, UPDATE, or TRUNCATE statement that deleted the row.

- If a temporal table is truncated, the existing table rows are available to time travel queries and are treated as having been deleted as of the time the truncating transaction committed.
- If the deleting (or truncating) transaction committed before the retention start timestamp, a deleted row is treated as having been deleted at the retention start timestamp. This generally applies only to existing deleted rows at the time of altering a nontemporal table to a temporal table; such rows are not visible to time travel queries against the table.
- A historical row might be visible to a temporal query against the table if its delete timestampvfalls within the table’s retention period. As long as this condition is true, the historical row cannot be removed (with GROOM TABLE) from the table.
- The delete timestamp of a current (not deleted) row is `NULL`.
- You can select the insert timestamp by using the **_SYS_END** virtual column of a temporal table.

### Insert timestamp
{: #inserttimestamp_tt}

The insert timestamp of a current or historical row is the date/time that the transaction inserting the row committed. Not the time of execution of the particular INSERT or UPDATE statement that inserted the row.

- If the inserting transaction committed  before  the  retention  start timestamp, a row is treated as having been inserted at the retention start timestamp. This generally applies only to existing rows at the time of altering a non-temporal table to a temporal table.
- You can select the insert timestamp by using the **_SYS_START** virtual column of a temporal table.

### Validity period
{: #validity_tt}

The validity periodof a historical row is the time period that starts with the row’s insert timestamp and ends just before its delete timestamp. The row is no longer valid as of the delete timestamp.

The validity period of a current row starts with the row’s insert timestamp and is unbounded; has no end.

### Temporal queries
{: #temporalqueries_tt}

A temporal query is a query where one or more referenced tables have a temporal clause.

A temporal clause can specify one of the following items:

- A point in time, which must lie within the table’s retention period.
- A period of time, where the entire period must lie within the table’s retention period.

A temporal query might request (SELECT) the values of the `insert` timestamp and/or `delete` timestamp of the rows that match the query.

### System-managed temporal tables
{: #systemmanaged_tt}

A system-managed temporal table is a table that maintains historical versions of its rows.

You can use a system-period temporal table to store current versions of your data. The database transparently stores your updated and deleted data rows. System-period tables are system-managed.
