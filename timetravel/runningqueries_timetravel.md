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

# Time travel query syntax
{: #runningqueries_tt}

A **SELECT** query with one or more temporal clauses is a time travel query. Time travel queries might appear as **sub-SELECTs** in the **INSERT**, **UPDATE**, **DELETE**, **MERGE**, or **CREATE TABLE AS SELECT (CTAS)** statements.

Also, time travel queries might appear in a view definition (**CREATE VIEW** or **REPLACE VIEW**) or a stored procedure definition (**CREATE PROCEDURE** or **REPLACE PROCEDURE**). In either case, timestamp expressions in the syntax (for example, CURRENT_TIMESTAMP - INTERVAL ‘1 day’) are not evaluated at view or procedure definition time, but at the time a user or application queries the view or calls the procedure.

Any base table reference (the table name, with or without database and schema name, and with or without an alias) in a **SELECT** or **sub-SELECT** might have an optional temporal clause, which consists of the keywords **FOR SYSTEM_TIME** followed by one of the following values:

- `AS OF { <TIMESTAMP EXPRESSION> | RETENTION_START_TIMESTAMP }`
- `BEFORE <TIMESTAMP EXPRESSION>`
- `BETWEEN { <TIMESTAMP EXPRESSION 1> | RETENTION_START_TIMESTAMP } AND <TIMESTAMP EXPRESSION 2>`
- `FROM { <TIMESTAMP EXPRESSION 1> | RETENTION_START_TIMESTAMP } TO <TIMESTAMP EXPRESSION 2>`

Each `TIMESTAMP EXPRESSION` must be one of the following:

- A literal timestamp value. For example `‘2022-10-31 20:00:00’`.
- A query parameter or host variable whose value is a timestamp.
- A built-in function that returns or implicitly converts to a timestamp. For example, `CURRENT_DATE`, `CURRENT_TIMESTAMP` or (equivalently) `NOW()`, or `CURRENT_TIMESTAMP(subsecond-digits)` or (equivalently) `NOW(subsecond-digits)`.
- An expression that evaluates to a single timestamp for all rows in the table. For example, `CURRENT_TIMESTAMP - INTERVAL ‘1 day’`. The expression cannot refer to table columns or to a non-deterministic function (for example, `RANDOM()`) or be a **sub-SELECT**.
- The special identifier **RETENTION_START_TIMESTAMP**, on the particular cases of **AS OF**, **BETWEEN**, and **FROM** (but not **BEFORE**, **AND**, or **TO**). This refers to the retention start timestamp. LINK For example, the oldest possible row insert timestamp or delete timestamp that is available for time travel queries.

## AS OF
{: asof_tt}

You can use the **AS OF** subclause when you want to retrieve the state of your data as it was at any specific time in the past.

You can use the **AS OF** subclause with the following values, which allows it to be a dynamically specified time condition.

- Constant literals
- Constant expression
- Host variables or parameter markers.

The **AS OF** value cannot be a subquery.

|Syntax           | Description  |
| -----------     | -----------  |
| AS OF <expr1>  | Includes all the rows that were valid (see LINK) at the timestamp that expr1 evaluates to. Whose insert timestamp is less than or equal to expr1 and whose delete timestamp is NULL or is greater than expr1. If expr1 is less than the table’s retention start timestamp, an error is returned if expr1 is less than the table’s retention start timestamp.|
{: caption}

## BEFORE
{: #before_tt}

You can use the **BEFORE** subclause when you want to to retrieve the state of your data as it was just before any specific time in the past.

You can use the BEFORE subclause with the following values, which allows it to be a dynamically specified time condition.

- Constant literals
- Constant expression
- Host variables or parameter markers.

The BEFORE value cannot be a subquery.

| Syntax      | Description |
| ----------- | ----------- |
| BEFORE <expr1> | Includes all the rows that were valid just before the timestamp that expr1 evaluates to. Whose insert timestamp is strictly less than expr1 and whose delete timestamp is NULL or is greater than expr1. If expr1 is less than or equal to the table’s retention start timestamp, sn error is returned. |
{: caption}

## FROM...TO and BETWEEN...AND
{: #fromtobetweenand_tt}

You can use the **FROM...TO** and **BETWEEN...AND** subclauses for data audit or trend analysis. Use it, when you need to get all historical transformation, for some or all rows, over a period of time.

The **FROM...TO** and **BETWEEN...AND** subclauses cannot be a subquery.

| Syntax      | Description |
| ----------- | ----------- |
| FROM <expr1> TO <expr2> | Includes all the rows that were valid at any time from expr1 to expr2 (exclusive), whose insert timestamp is strictly less than expr2 and whose delete timestamp is NULL or is greater than expr1. If expr1 or expr2 is less than or equal to the table’s retention start timestamp, sn error is returned. If expr1 is greater than or equal to expr2, the query produces no rows.|
| BETWEEN <expr1> AND <expr2> | Includes all the rows that were valid at any time between expr1 and expr2 (inclusive), whose insert timestamp is less than or equal to expr2 and whose delete timestamp is NULL or is greater than expr1. If expr1 or expr2 is less than the table’s retention start timestamp, an error is returned. If expr1 is greater than expr2, the query produces no rows.|
{: caption}
