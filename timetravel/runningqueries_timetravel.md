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
- AS OF RETENTION_START_TIMESTAMP
- BEFORE <TIMESTAMP EXPRESSION>
- BETWEEN <TIMESTAMP EXPRESSION 1> AND <TIMESTAMP EXPRESSION 2>
- BETWEEN RETENTION_START_TIMESTAMP AND <TIMESTAMP EXPRESSION 2>
- FROM <TIMESTAMP EXPRESSION 1> TO <TIMESTAMP EXPRESSION 2>
- FROM RETENTION_START_TIMESTAMP TO <TIMESTAMP EXPRESSION 2>

The timestamp expression must be a literal value or a constant. For example, it might be **CURRENT_TIMESTAMP - <INTERVAL CONSTANT>**.
It cannot be an expression that uses table columns. Such an expression would have different values for different table rows.

**RETENTION_START_TIMESTAMP**  represents the beginning timestamp for historical data or retention start timestamp.
It is applicable in the **AS OF** clause and start timestamp expression value in the **FROM-TO** and **BETWEEN-AND** clauses.

At any given time, a temporal table’s data version retention start timestamp equals the larger of the following:

- Current date/time (timestamp, in microsecond granularity) minus the data version retention time interval.
- The table’s data version retention lower bound, which is is the date/time that the table’s retention time interval was last set by the CREATE TABLE or ALTER TABLE statements.
