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

{{site.data.keyword.netezza_short}} temporal tables provide a built-in support to access data from any point in time, not only the current moment. {{site.data.keyword.netezza_short}} supports only system-managed temporal tables, which means that the history of your data in the table is maintained and managed automatically.

You can use a system-period temporal table to store current versions of your data. The database transparently stores your updated and deleted data rows. System-period tables are system-managed.

Temporal tables might have the following rows:

| Row type     | Description |
| -----------  | ----------- |
| Current      | Current rows are not marked for deletion.  |
| Historical   | Historical rows are marked for deletion.   |


You can [create a temporal table] or [convert a nontemporal table to a temporal] by setting **DATA_VERSION_RETENTION_TIME** to a nonzero value.

To [drop a temporal table], you must set **DATA_VERSION_RETENTION_TIME** to 0.

### Data version retention interval (**DATA_VERSION_RETENTION_TIME**)
{: #dataretentioninterval_tt}

Data version retention time interval (retention time interval, retention interval) specifies the maximum number of days that historical data in a temporal table is preserved for and visible to time travel queries.

The default retention interval value at all levels is 0. The maximum is 99 days.

For example, if you modify an object, {{site.data.keyword.netezza_short}} preserves the state of the data before the modification so that you can do time travel operations.

To set **DATA_VERSION_RETENTION_TIME**, see [Setting the retention interval](https://cloud.ibm.com/docs/netezza?topic=netezza-retentioninterval_tt#settingretentioninterval_tt).

{{site.data.keyword.netezza_short}} retains the historical data based on the retention time interval that is associated with a table. When the retention interval ends, your historical data is no longer available for querying and you cannot restore objects.

To reclaim older historical rows, you can run the **GROOM TABLE** command, or use the **AutoMaint** feature if the rows are not needed to support incremental backup.


A table with a 0 retention interval is not a temporal table (time travel table) and does not support time travel queries. If you set a retention interval of 0 days for an object, time travel is disabled for the object.

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

## Creating temporal tables
{: #creatingtemporal_tt}

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

## Converting nontemporal tables to temporal
{: #convertingtemporal_tt}

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
