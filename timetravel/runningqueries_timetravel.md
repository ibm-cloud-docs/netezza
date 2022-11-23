---

copyright:
  years:  2022
lastupdated: "2022-11-18"

keywords: netezza time travel, data retention interval, setting the retention interval, changing the retention interval

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

# Time travel query syntax and timestamps
{: #runningqueries_tt}

## Query syntax
{: #querysyntax_tt}

A **SELECT** query with one or more temporal clauses is a time travel query. Time travel queries might appear as **sub-SELECTs** in the **INSERT**, **UPDATE**, **DELETE**, **MERGE**, or **CREATE TABLE AS SELECT (CTAS)** statements.

Also, time travel queries might appear in a view definition (**CREATE VIEW** or **REPLACE VIEW**) or a stored procedure definition (**CREATE PROCEDURE** or **REPLACE PROCEDURE**). In either case, timestamp expressions in the syntax (for example, `CURRENT_TIMESTAMP - INTERVAL ‘1 day’`) are not evaluated at view or procedure definition time, but at the time a user or application queries the view or calls the procedure.

Any base table reference (the table name, with or without database and schema name, and with or without an alias) in a **SELECT** or **sub-SELECT** might have an optional temporal clause, which consists of the keywords **FOR SYSTEM_TIME** followed by one of the following values:

- `AS OF { <TIMESTAMP EXPRESSION> | RETENTION_START_TIMESTAMP }`
- `BEFORE <TIMESTAMP EXPRESSION>`
- `BETWEEN { <TIMESTAMP EXPRESSION 1> | RETENTION_START_TIMESTAMP } AND <TIMESTAMP EXPRESSION 2>`
- `FROM { <TIMESTAMP EXPRESSION 1> | RETENTION_START_TIMESTAMP } TO <TIMESTAMP EXPRESSION 2>`

Each `TIMESTAMP EXPRESSION` must be one of the following:

- A literal timestamp value. For example, `‘2022-10-31 20:00:00’`.
- A query parameter or host variable whose value is a timestamp.
- A built-in function that returns or implicitly converts to a timestamp. For example, `CURRENT_DATE`, `CURRENT_TIMESTAMP` or (equivalently) `NOW()`, or `CURRENT_TIMESTAMP(subsecond-digits)` or (equivalently) `NOW(subsecond-digits)`.
- An expression that evaluates to a single timestamp for all rows in the table. For example, `CURRENT_TIMESTAMP - INTERVAL ‘1 day’`. The expression cannot refer to table columns or to a non-deterministic function (for example, `RANDOM()`) or be a **sub-SELECT**.
- The special identifier **RETENTION_START_TIMESTAMP**, on the particular cases of **AS OF**, **BETWEEN**, and **FROM** (but not **BEFORE**, **AND**, or **TO**). This refers to the retention start timestamp. LINK For example, the oldest possible row insert timestamp or delete timestamp that is available for time travel queries.

### AS OF
{: #asof_tt}

You can use the **AS OF** subclause when you want to retrieve the state of your data as it was at any specific time in the past.

|Syntax           | Description  |
| -----------     | -----------  |
| AS OF <expr1>  | Includes all the rows that were valid (see LINK) at the timestamp that expr1 evaluates to. Whose insert timestamp is less than or equal to expr1 and whose delete timestamp is NULL or is greater than expr1. If expr1 is less than the table’s retention start timestamp, an error is returned if expr1 is less than the table’s retention start timestamp.|
{: caption}

### BEFORE
{: #before_tt}

You can use the **BEFORE** subclause when you want to to retrieve the state of your data as it was just before any specific time in the past.

| Syntax      | Description |
| ----------- | ----------- |
| BEFORE <expr1> | Includes all the rows that were valid just before the timestamp that expr1 evaluates to. Whose insert timestamp is strictly less than expr1 and whose delete timestamp is NULL or is greater than expr1. If expr1 is less than or equal to the table’s retention start timestamp, sn error is returned. |
{: caption}

### FROM...TO and BETWEEN...AND
{: #fromtobetweenand_tt}

You can use the **FROM...TO** and **BETWEEN...AND** subclauses for data audit or trend analysis. Use it, when you need to get all historical transformation, for some or all rows, over a period of time.

| Syntax      | Description |
| ----------- | ----------- |
| FROM <expr1> TO <expr2> | Includes all the rows that were valid at any time from expr1 to expr2 (exclusive), whose insert timestamp is strictly less than expr2 and whose delete timestamp is NULL or is greater than expr1. If expr1 or expr2 is less than or equal to the table’s retention start timestamp, sn error is returned. If expr1 is greater than or equal to expr2, the query produces no rows.|
| BETWEEN <expr1> AND <expr2> | Includes all the rows that were valid at any time between expr1 and expr2 (inclusive), whose insert timestamp is less than or equal to expr2 and whose delete timestamp is NULL or is greater than expr1. If expr1 or expr2 is less than the table’s retention start timestamp, an error is returned. If expr1 is greater than expr2, the query produces no rows.|
{: caption}

## Timestamps in time travel queries
{: #concepts_tt}

### Retention time interval and retention time period
{: #timeperiod_tt}

A table’s retention time interval defines the number of days past their delete timestamps that historical (deleted) rows are available for time travel queries. At any given time, the retention time period ends at the current timestamp (date and time) and extends back the given number of days. This is a sliding time window that advances as the current system time advances.

### Retention lower bound
{: #retentionlowerbound_tt}

For the most part, a table’s retention lower bound is the date and time when the table was defined to be a temporal table. This could have been when you ran the **CREATE TABLE** command, or the last time you altered the table’s **DATA_VERSION_RETENTION_TIME** from zero to non-zero.

### Retention start timestamp
{: #starttimestamp_tt}

At the time of defining a table to be temporal (when the retention lower bound is defined), there are no historical rows available over the retention time period. To capture the notion of how far back historical rows are actually available (visible to time travel queries), a table’s retention start timestamp is defined. The retention start timestamp is the larger of the following values:

- The beginning of the retention time period (the current date/time minus the retention interval).
- The retention lower bound.

A table’s retention start timestamp comes into play in the following operations:

- Time travel queries (**SELECT** and **sub-SELECT**)

    If you attempt to run queries for historical rows that are older than the retention start timestamp, an error is returned.

    If you want to query historical data as far back as possible, you can use the **RETENTION_START_TIMESTAMP** keyword in time travel queries. If you do this, you can avoid having to try to compute the right timestamp on your own. By extension, you eliminate the risk of running into an error if the value turns out to be too old (older than the retention start timestamp).

- **GROOM TABLE**
    Historical rows that were deleted before the retention start timestamp are no longer needed for time travel queries and can be reclaimed.

### Row timestamps and validity
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
