---

copyright:
  years:  2022
lastupdated: "2022-11-17"

keywords: netezza time travel, enabling time travel on netezza, disabling time travel on netezza, enabling time travel, disabling time travel, time travel

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

# Data version retention interval (**DATA_VERSION_RETENTION_TIME**)
{: #dataretentionintervaldef_tt}

## Retention time interval and retention time period
{: #timeperiod_tt}

A table’s retention time interval defines the number of days past their delete timestamps (see below) that historical (deleted) rows are available for time travel queries. At any given time, the retention time period ends at the current timestamp (i.e., date and time) and extends back the given number of days; this is a sliding time “window” that advances as the current system time advances.


Data version retention time interval (retention time interval, retention interval) specifies the maximum number of days that historical data in a temporal table is preserved for and visible to time travel queries.

The default retention interval value at all levels is 0. The maximum is 99 days.

For example, if you modify an object, {{site.data.keyword.netezza_short}} preserves the state of the data before the modification so that you can do time travel operations.

{{site.data.keyword.netezza_short}} retains the historical data based on the retention time interval that is associated with a table. When the retention interval ends, your historical data is no longer available for querying and you cannot restore objects.

To reclaim older historical rows, you can run the **GROOM TABLE** command, or use the **AutoMaint** feature if the rows are not needed to support incremental backup.

A table with a 0 retention interval is not a temporal table (time travel table) and does not support time travel queries. If you set a retention interval of 0 days for an object, time travel is disabled for the object.

## Retention interval start timestamp
{: #tableretentiontimestamp_tt}

At any specified time, a table retention interval start timestamp equals the larger of the following values:

- The current date/time, (timestamp with a microsecond granularity) minus the retention interval.

- The table’s data version retention lower bound, which is is the date/time that the table’s retention time interval was last set with the CREATE TABLE or ALTER TABLE statements.

## Delete timestamp
{: #deletetimestamp_tt}

The delete timestampof a historical row is the date/time that the transaction deleting the row committed. Not the time of execution of the particular DELETE, UPDATE, or TRUNCATE statement that deleted the row.

- If a temporal table is truncated, the existing table rows are available to time travel queries and are treated as having been deleted as of the time the truncating transaction committed.
- If the deleting (or truncating) transaction committed before the retention start timestamp, a deleted row is treated as having been deleted at the retention start timestamp. This generally applies only to existing deleted rows at the time of altering a nontemporal table to a temporal table; such rows are not visible to time travel queries against the table.
- A historical row might be visible to a time travel query against the table if its delete timestampvfalls within the table’s retention period. As long as this condition is true, the historical row cannot be removed (with GROOM TABLE) from the table.
- The delete timestamp of a current (not deleted) row is `NULL`.
- You can select the insert timestamp by using the **_SYS_END** virtual column of a temporal table.

## Insert timestamp
{: #inserttimestamp_tt}

The insert timestamp of a current or historical row is the date/time that the transaction inserting the row committed. Not the time of execution of the particular INSERT or UPDATE statement that inserted the row.

- If the inserting transaction committed  before  the  retention  start timestamp, a row is treated as having been inserted at the retention start timestamp. This generally applies only to existing rows at the time of altering a non-temporal table to a temporal table.
- You can select the insert timestamp by using the **_SYS_START** virtual column of a temporal table.

## Validity period
{: #validity_tt}

The validity period of a historical row is the time period that starts with the row’s insert timestamp and ends just before its delete timestamp. The row is no longer valid as of the delete timestamp.

The validity period of a current row starts with the row’s insert timestamp and is unbounded; has no end.