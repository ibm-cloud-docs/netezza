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

Example:

```sql
SELECT policy_id, coverage FROM policy_info FOR SYSTEM_TIME BETWEEN '2019-01-01-00.00.00' AND '2020-01-01-00.00.00' ;
```
{: codeblock}

In the examples, you are identifying policy changes that happened between `2019-01-01-00.00.00` and `2020-01-01-00.00.00`.
