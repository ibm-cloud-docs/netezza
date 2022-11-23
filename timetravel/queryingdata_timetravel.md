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

# Querying historical data
{: #queryingdata_tt}

The following table definition is used for the example queries.

```sql
CREATE TABLE PRODUCT (PRODUCTID INTEGER, DESC VARCHAR (100), PRICE DECIMAL) DATA_VERSION_RETENTION_TIME 30
```
{: codeblock}

The following rows are inserted at different times. The commit times of the inserts (the insert timestamps or **_SYS_START** values) are indicated in comments.

```sql
INSERT INTO PRODUCT VALUES(1001, 'Jacket', 102.00); - 2020-10-23 16:00:00
INSERT INTO PRODUCT VALUES(1002, 'Gloves', 20.50);  - 2020-10-23 16:05:00
INSERT INTO PRODUCT VALUES(1003, 'Hat', 18.99);     - 2020-10-23 16:10:00
INSERT INTO PRODUCT VALUES(1004, 'Shoes', 125.25);  - 2020-10-23 16:15:00
```
{: codeblock}

## Showing data with the insert and delete timestamps
{: #showingdata_tt}

This **SELECT** command shows the table data with the associated insert and delete timestamp values at that instant when the query was issued. The **_SYS_START** and **_SYS_END** timestamps are available only in time travel queries, hence the use of **AS OF NOW()**.

```sql
SELECT *, _SYS_START, _SYS_END FROM <table_name> FOR SYSTEM_TIME AS OF NOW();
```
{: codeblock}

Example:

```sql
SELECT *, _SYS_START, _SYS_END FROM PRODUCT FOR SYSTEM_TIME AS OF NOW();
PRODUCTID | DESCRIPTION | PRICE   |     _SYS_START      | _SYS_END  
      1001 | Jacket      | 102.00 | 2020-10-23 16:00:00 |
      1002 | Gloves      |  20.50 | 2020-10-23 16:05:00 |
      1003 | Hat         |  18.99 | 2020-10-23 16:10:00 |
      1004 | Shoes       | 125.25 | 2020-10-23 16:15:00 |
(4 rows)
```
{: codeblock}

## Querying data for a specific time with AS OF
{: #queryasof_tt}

```sql
SELECT *, _SYS_START, _SYS_END FROM <table_name> FOR SYSTEM_TIME AS OF <TIMESTAMP EXPRESSION>;
```
{: codeblock}

Example:

```sql
SELECT *, _SYS_START, _SYS_END FROM PRODUCT FOR SYSTEM_TIME AS OF '2020-10-23 16:30:00';
PRODUCTID  | DESCRIPTION | PRICE  |     _SYS_START      |      _SYS_END       
      1001 | Jacket      | 102.00 | 2020-10-23 16:00:00 |
      1002 | Gloves      |  20.50 | 2020-10-23 16:05:00 |
      1003 | Hat         |  18.99 | 2020-10-23 16:10:00 |
      1004 | Shoes       | 125.25 | 2020-10-23 16:15:00 | 2020-10-23 17:00:00
(4 rows)
```
{: codeblock}

In this example, the price for `Shoes` has been modified after the specified **AS OF** timestamp. The system returns the previous valid row.

See also [the **AS OF** subclause](https://cloud.ibm.com/docs/netezza?topic=netezza-runningqueries_tt).

## Querying data for a specific time with BEFORE
{: #querybefore_tt}

```sql
SELECT *, _SYS_START, _SYS_END FROM <table_name> FOR SYSTEM_TIME BEFORE <TIMESTAMP EXPRESSION>;
```
{: codeblock}

Example:

```sql
SELECT *, _SYS_START, _SYS_END FROM PRODUCT FOR SYSTEM_TIME BEFORE '2020-10-23 17:00:00';
PRODUCTID  | DESCRIPTION | PRICE  |     _SYS_START      |      _SYS_END       
      1001 | Jacket      | 102.00 | 2020-10-23 16:00:00 |
      1002 | Gloves      |  20.50 | 2020-10-23 16:05:00 |
      1003 | Hat         |  18.99 | 2020-10-23 16:10:00 |
      1004 | Shoes       | 125.25 | 2020-10-23 16:15:00 | 2020-10-23 17:00:00
(4 rows)
```
{: codeblock}

In this example, the price for `Shoes` has been modified after or at the **BEFORE** timestamp. The system returns the previous valid row.

See also [the **BEFORE** subclause](https://cloud.ibm.com/docs/netezza?topic=netezza-runningqueries_tt).

## Querying data for all rows over a time period
{: #queryall_tt}

### With the FROM...TO subclause
{: #fromto_tt}

```sql
SELECT *, _SYS_START, _SYS_END FROM <table_name> FOR SYSTEM_TIME FROM <TIMESTAMP EXPRESSION 1> TO “<TIMESTAMP EXPRESSION 2>” WHERE <condition>;
```
{: codeblock}

If you want to query historical data as far back as possible, you can use the **RETENTION_START_TIMESTAMP** keyword in your time travel queries. If you do this, you can avoid having to try to compute the right timestamp on your own. By extension, you reduce the risk of running into an error if the value turns out to be too old (older than the retention start timestamp).
{: tip}

Example:

```sql
SELECT *, _SYS_START, _SYS_END FROM PRODUCT FOR SYSTEM_TIME FROM RETENTION_START_TIMESTAMP TO '2020-10-23 17:10:00' WHERE PRODUCTID = 1004;
PRODUCTID  | DESCRIPTION | PRICE  |     _SYS_START      |      _SYS_END       
      1004 | Shoes       | 125.25 | 2020-10-23 16:15:00 | 2020-10-23 17:00:00
      1004 | Shoes       | 100.00 | 2020-10-23 17:00:00 |
(2 rows)
```
{: codeblock}

In this example, the query searched for all the changes that happened for **PRODUCTID 1004** during a specified period of time, not including the **TO** timestamp.

See also [the **FROM...TO** subclause](https://cloud.ibm.com/docs/netezza?topic=netezza-runningqueries_tt).

### With the BETWEEN...AND subclause
{: #betweenand_tt}

```sql
SELECT *, _SYS_START, _SYS_END FROM <table_name> FOR SYSTEM_TIME BETWEEN <TIMESTAMP EXPRESSION 1> AND <TIMESTAMP EXPRESSION 2>;
```
{: codeblock}

Example:

```sql
SELECT *, _SYS_START, _SYS_END FROM PRODUCT FOR SYSTEM_TIME BETWEEN '2020-10-23 16:00:00' AND '2020-10-23 17:10:00';
PRODUCTID  | DESCRIPTION | PRICE  |     _SYS_START      |      _SYS_END       
      1001 | Jacket      | 102.00 | 2020-10-23 16:00:00 |
      1002 | Gloves      |  20.50 | 2020-10-23 16:05:00 |
      1003 | Hat         |  18.99 | 2020-10-23 16:10:00 |
      1004 | Shoes       | 125.25 | 2020-10-23 16:15:00 | 2020-10-23 17:00:00
      1004 | Shoes       | 100.00 | 2020-10-23 17:00:00 |
(5 rows)
```
{: codeblock}

In this example, the query searched for all the changes that happened to the product table during a certain period of time, up to and including the **AND** timestamp.

See also [the **BETWEEN...AND** subclause](https://cloud.ibm.com/docs/netezza?topic=netezza-runningqueries_tt).

## Recovering tables
{: #recovering_tt}

```sql
BEGIN;
RENAME TABLE <table_name> TO <new_table_name>;
CREATE TABLE <TABLE NAME> AS
  SELECT * FROM <new_table_name> FOR SYSTEM_TIME AS OF <RETENTION_START_TIMESTAMP>;
DROP TABLE <new_table_name>; -- or, keep it for diagnostics
COMMIT;
```
{: codeblock}

Example:

```sql
BEGIN;
RENAME TABLE PRODUCT TO PRODUCT_BAK;
CREATE TABLE PRODUCT AS
  SELECT * FROM FLIGHT_BAK FOR SYSTEM_TIME AS OF '2022-11-01 11:30:00';
DROP TABLE FLIGHT_BAK; -- or, keep it for diagnostics
COMMIT;
```
{: codeblock}

In this example, you suspected that changes were made to the **PRODUCT** table, and you wanted to revert them.

## Restoring updated rows
{: #restoringupdated_tt}

```sql
UPDATE <table> SET <col> = <expression> [,<expression>...]
  FROM (<fromlist> WHERE <condition> FOR SYSTEM_TIME BEFORE <RETENTION_START_TIMESTAMP>) AS P;
```
{: codeblock}

Example:

```sql
UPDATE PRODUCT SET PRICE=P.PRICE
  FROM (SELECT PRICE FROM PRODUCT WHERE PRODUCTID=’1002’ FOR SYSTEM_TIME BEFORE ‘2022-11-01 09:22:41’) AS P;
```
{: codeblock}

In this example, a product’s price was incorrectly updated and needed to be restored.

See also the [**SELECT (to retrieve rows) command**](https://www.ibm.com/docs/en/netezza?topic=npsscr-select-retrieve-rows-2).

## Restoring deleted rows
{: #restoredeleted_tt}

```sql
INSERT INTO <table>
  SELECT * FROM <table>
  WHERE <confition> FOR SYSTEM_TIME BEFORE <RETENTION_START_TIMESTAMP>’;
```
{: codeblock}

Example:

```sql
INSERT INTO PRODUCT
  SELECT * FROM PRODUCT
  WHERE PRODUCTID=’1004’ FOR SYSTEM_TIME BEFORE ‘2022-11-01 12:45:07’;
```
{: codeblock}

In this example, a product was incorrectly deleted and needed to be restored.

See also the [**INSERT** command](https://www.ibm.com/docs/en/netezza?topic=npsscr-insert-2).
