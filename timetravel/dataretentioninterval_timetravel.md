---

copyright:
  years:  2022
lastupdated: "2022-11-21"

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

# Time travel concepts
{: concepts_tt}

## Retention time interval and retention time period
{: #timeperiod_tt}

A table’s retention time interval defines the number of days past their delete timestamps that historical (deleted) rows are available for time travel queries. At any given time, the retention time period ends at the current timestamp (date and time) and extends back the given number of days. This is a sliding time window that advances as the current system time advances.

## Retention lower bound
{: #retentionlowerbound_tt}

For the most part, a table’s retention lower bound is the date and time when the table was defined to be a temporal table. This could have been when you run the **CREATE TABLE** command, or the last time you altered the table’s **DATA_VERSION_RETENTION_TIME** from zero to non-zero.

## Retention start timestamp
{: #starttimestamp_tt}

At the time of defining a table to be temporal (when the retention lower bound is defined), there are no historical rows available over the retention time period. To capture the notion of how far back historical rows are actually available (visible to time travel queries), a table’s retention start timestamp is defined. The retention start timestamp is the larger of the following values:

- The beginning of the retention time period (the current date/time minus the retention interval).
- The retention lower bound.

A table’s retention start timestamp comes into play in the following operations:

- Time travel queries (**SELECT** and **sub-SELECT**)

    If you attempts to run queries for historical rows that are older than the retention start timestamp, an error is retured.

    If you want to query historical data as far back as possible, you can use the **RETENTION_START_TIMESTAMP** keyword in time travel queries. If you do this, you can avoid having to try to compute the right timestamp on your own. By extension, you reduce the risk of running into an error if the value turns out to be too old (older than the retention start timestamp).

- **GROOM TABLE**
    Historical rows that were deleted before the retention start timestamp are no longer needed for time travel queries and can be reclaimed.

## Row timestamps and validity
{: #rowvalidity_tt}

The insert timestamp of a current or historical row is the date/time that the transaction inserting the row committed. It is not the time when a particular **INSERT**, **UPDATE**, or **MERGE** statement that inserted the row was run.

If the inserting transaction for a row committed before the retention start timestamp, the row is treated as having been inserted at the retention start timestamp. This generally applies only to existing rows at the time of altering a nontemporal table to a temporal table.

An inserted row whose transaction has not yet committed does not have an insert timestamp. Such a row will never be visible to a time travel query.

In a time travel query, you can select the insert timestamp by using the **_SYS_START** virtual column of a temporal table.

The delete timestamp of a historical row is the date/time that the transaction deleting the row committed. It is not the time when a particular **DELETE**, **UPDATE**, **MERGE**, or **TRUNCATE** statement that deleted the row was run.

If a temporal table is truncated, the existing table rows are available to time travel queries and are treated as having been deleted as of the time the truncating transaction committed.

If the deleting (or truncating) transaction committed before the retention start timestamp, a deleted row is treated as having been deleted at the retention start timestamp. This generally applies only to existing deleted rows at the time of altering a nontemporal table to a temporal table; such rows are not visible to time travel queries against the table.

A historical row might be visible to a temporal query against the table if its delete timestamp falls within the table’s retention period. If this condition is true, the historical row cannot be removed (with **GROOM TABLE**) from the table.

The delete timestamp of a current row (not deleted, or marked for deletion but not committed) is NULL.

In a time travel query, you can select the delete timestamp by using the **_SYS_END** virtual column of a temporal table.

A historical row is considered valid from its insert timestamp up to just before the delete timestamp. A current row is considered valid from its insert timestamp forward. Time travel queries use timestamps or timestamp expressions to only return rows (current or historical) that are valid at a point in time or at any point within a time period.
