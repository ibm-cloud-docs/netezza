---

copyright:
  years:  2022
lastupdated: "2022-11-07"

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

# Running queries
{: #runningqueries_tt}


## SELECT queries and subqueries syntax
{: #selectqueries_tt}

Any base table reference (the table name, with or without database and schema name, and with or without an alias) in a SELECT or sub-SELECT might have an optional temporal clause, which consists of the keywords **FOR SYSTEM_TIME** and one of the following values:

- AS OF <TIMESTAMP EXPRESSION>
- AS OF <RETENTION START TIMESTAMP>
- BEFORE <TIMESTAMP EXPRESSION>
- BETWEEN <TIMESTAMP EXPRESSION 1> AND <TIMESTAMP EXPRESSION 2>
- BETWEEN RETENTION START TIMESTAMP AND <TIMESTAMP EXPRESSION 2>
- FROM <TIMESTAMP EXPRESSION 1> TO <TIMESTAMP EXPRESSION 2>
- FROM <RETENTION START TIMESTAMP 1> TO <TIMESTAMP EXPRESSION 2>

The timestamp expression must be a literal value or a constant. For example, it might be **CURRENT_TIMESTAMP - <INTERVAL CONSTANT>**.
It cannot be an expression that uses table columns. Such an expression would have different values for different table rows.

**RETENTION_START_TIMESTAMP**  represents the beginning timestamp for historical data or retention start timestamp.
It is applicable in the **AS OF** clause and start timestamp expression value in the **FROM-TO** and **BETWEEN-AND** clauses.

At any given time, a temporal table’s data version retention start timestamp equals the larger of the following:

- Current date/time (timestamp, in microsecond granularity) minus the data version retention time interval.
- The table’s data version retention lower bound, which is is the date/time that the table’s retention time interval was last set by the CREATE TABLE or ALTER TABLE statements.

## AS OF
{: asof_tt}

You can use the **AS OF** subclause when you want to reconstruct the state of your data as it was at any specific time in the past.

You can use the **AS OF** subclause with the following values, which allows it to be a dynamically specified time condition.

- Constant literals
- Constant expression
- Host variables or parameter markers.

The **AS OF** value cannot be a subquery.


**AS OF <value1>**

Includes all the rows where the begin value for the period is less than or equal to *value1* and the end value for the period is greater than *value1*. This enables you to query your data as of a certain point in time.

## BEFORE
{: #before_tt}

You can use the **BEFORE** subclause when you want to to reconstruct the  of your data as it was at any specific time in the past.

You can use the **BEFORE** subclause with the following values, which allows it to be a dynamically specified time condition.

- Constant literals
- Constant expression
- Host variables or parameter markers.

The **BEFORE** value cannot be a subquery.


**BEFORE <value1>**

Includes all the rows where the begin value for the period is less than *value1* and the end value for the period is greater than *value1*. This enables you to query your data as of a certain point in time.

## FROM...TO and BETWEEN...AND

You can use the **FROM...TO** and **BETWEEN...AND** subclauses for data audit; when you need to get all historical transformation for a specific rows in the table.

You can use the **FROM...TO** and **BETWEEN...AND** subclauses with the following values, which allows them to be a dynamically specified time condition.

- Constant literals
- Constant expression
- Host variables or parameter markers.

The **FROM...TO** and **BETWEEN...AND** subclauses cannot be a subquery.


**FROM <value1> TO <value2<**

Includes all the rows where the value of the begin column for the specified period in the row is less than *value2*. The value of the end column for the specified period in the row is greater than *value1*. If *value1* is greater than or equal to *value2*, the query produces no rows.

**BETWEEN <value1> AND <value2>**

Includes all the rows where any time period overlaps any point in time between *value1* and *value2*. A row is returned if the begin value for the period is less than or equal to *value2* and the end value for the period is greater than *value1*.
