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

## Identifying details for a specific date and time
{: #detailsdatetime_tt}

```sql
SELECT <TABLE_NAME> FROM <ITEM> FOR SYSTEM_TIME AS OF <'DATE AND TIME'> ;
```
{: codeblock}


Example:

```sql
SELECT policy_id, coverage FROM policy_info FOR SYSTEM_TIME AS OF '2020-02-28-09.10.00' ;
```
{: codeblock}

In the example, you are identifying details about an insurance policy from `2020-02-28-09.10.00`.

## Identifying changes that happened on a specific date
{: #changesdate_tt}

To identify changes that were introduced to an item between specific dates, you can run one of the following commands:


```sql
SELECT <TABLE_NAME> FROM <ITEM> FOR SYSTEM_TIME AS OF <'DATE'> ;
```
{: codeblock}

Example:

```sql
SELECT policy_id, coverage, _sys_start, _sys_end FROM policy_info FOR SYSTEM_TIME FROM '2019-01-01-00.00.00' TO '2020-01-01-00.00.00' where policy_id = 'C567' ;
```
{: codeblock}

or

```sql
SELECT <TABLE_NAME> FROM <ITEM> FOR SYSTEM_TIME BETWEEN 'DATE' AND 'DATE' ;
```
{: codeblock}

Example:

```sql
SELECT policy_id, coverage FROM policy_info FOR SYSTEM_TIME BETWEEN '2019-01-01-00.00.00' AND '2020-01-01-00.00.00' ;
```
{: codeblock}

In the examples, you are identifying policy changes that happened between `2019-01-01-00.00.00` and `2020-01-01-00.00.00`.

## Querying for a specific time with AS OF
{: #queryasof_tt}

```sql
SELECT *, _SYS_START, _SYS_END FROM <ITEM> FOR SYSTEM_TIME AS OF <"RETENTION_START_TIMESTAMP">
```
{: codeblock}

If you want to see the row begin and row end values, you must specify the **_sys_start** and **_sys_end** columns.

Example:

```sql
SELECT *, _SYS_START, _SYS_END FROM PRODUCT FOR SYSTEM_TIME AS OF “2020-10-23 16:30:00”
1001, “Jacket”, 102.00, 2020-10-23 16:00:00, NULL
1002, “Gloves”,  20.50, 2020-10-23 16:05:00, NULL
1003, “Hat”,     18.99, 2020-10-23 16:10:00, NULL
1004, “Shoes”,  125.25, 2020-10-23 16:15:00, 2020-10-23 17:00:00.000000
```
{: codeblock}

The price for `Shoes` has been modified after the specified **AS OF** value.
The system returns the previous valid row.

See also [the **AS OF** subclause](https://cloud.ibm.com/docs/netezza?topic=netezza-runningqueries_tt).

## Querying for a specific time with BEFORE
{: querybefore_tt}

```sql
SELECT *, _SYS_START, _SYS_END FROM <ITEM> FOR SYSTEM_TIME BEFORE <“RETENTION_START_TIMESTAMP”>
```
{: codeblock}

If you want to see the row begin and row end values, you must specify the **_sys_start** and **_sys_end** columns.

Example:

```sql
SELECT *, _SYS_START, _SYS_END FROM PRODUCT FOR SYSTEM_TIME BEFORE “2020-10-23 17:00:00”
1001, “Jacket”, 102.00, 2020-10-23 16:00:00, NULL
1002, “Gloves”,  20.50, 2020-10-23 16:05:00, NULL
1003, “Hat”,     18.99, 2020-10-23 16:10:00, NULL
1004, “Shoes”,  125.25, 2020-10-23 16:15:00, 2020-10-23 17:00:00.000000
```
{:codeblock}

The price for `Shoes` has been modified after or at the **BEFORE** value.
The system returns the previous valid row.

See also [the **BEFORE** subclause](https://cloud.ibm.com/docs/netezza?topic=netezza-runningqueries_tt).

## Querying for all rows over a time period
{: #queryall_tt}

### With the FROM...TO subclause
{: #fromto_tt}

```sql
SELECT *, _SYS_START, _SYS_ENDFROM <ITEM> FOR SYSTEM_TIME FROM “<RETENTION_START_TIMESTMAP>” TO “<value2>” WHERE PRODUCTID = <ID>;
```
{: codeblock}

If you want to see the row begin and row end values, you must specify the **_sys_start** and **_sys_end** columns.

Example:

```sql
SELECT *, _SYS_START, _SYS_ENDFROM PRODUCT FOR SYSTEM_TIME FROM “2020-10-23 16:00:00” TO “2020-10-23 17:10:00” WHERE PRODUCTID = 1004;
1004, “Shoes”, 125.25, 2020-10-23 16:15:00, 2020-10-2317:00:00.0000001004, “Shoes”, 100, 2020-10-23
17:00:000000, NULL
```
{: codeblock}

This query searches for all the changes that happened for **PRODUCTID 1004** during a specified period of time.

See also [the **FROM...TO** subclause](https://cloud.ibm.com/docs/netezza?topic=netezza-runningqueries_tt).


### With the BETWEEN...AND subclause
{: #betweenand_tt}

```sql
SELECT *, _SYS_START, _SYS_ENDFROM <ITEM> FOR SYSTEM_TIME BETWEEN “<RETENTION_START_TIMETAMP>” AND “<value2>”;
```
{: codeblock}

If you want to see the row begin and row end values, you must specify the **_sys_start** and **_sys_end** columns.

Example:

```sql
SELECT *, _SYS_START, _SYS_ENDFROM PRODUCT FOR SYSTEM_TIME BETWEEN“2020-10-23 16:00:00” AND“2020-10-23 17:10:00”;
1001, “Jacket”, 102.00, 2020-10-23 16:00:00, NULL
1002, “Gloves”,  20.50, 2020-10-23 16:05:00, NULL
1003, “Hat”,     18.99, 2020-10-23 16:10:00, NULL
1004, “Shoes”,  125.25, 2020-10-23 16:15:00, 2020-10-23
17:00:00.000000
1004, “Shoes”, 100, 2020-10-23 17:00:000000, NULL
```
{: codeblock}

This query searches for all the changes that happened to the product table during a certain period of time.

See also [the **BETWEEN...AND** subclause](https://cloud.ibm.com/docs/netezza?topic=netezza-runningqueries_tt).
