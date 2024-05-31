---

copyright:
  years: 2024
lastupdated: "2024-05-31"

keywords: netezza data lakehouse, data lake, querying data, connecting to a metastore, netezza watsonx.data
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
{:tip: .tip}
{:note: .note}

# Time travel for {{site.data.keyword.lakehouse_short}}
{: #timetravel_watsonx.data}

Time-related data is core to most application databases. With the {{site.data.keyword.lakehouse_short}} time travel feature that is available starting from version 11.2.3, you can retrieve and analyze historical data without having to develop additional application logic such as history tables. This powerful tool comes in handy when you want to track the history of data changes or reconstruct your data.

By using {{site.data.keyword.lakehouse_short}} time travel, you can access historical data (data that was changed) at past points in time.

# Querying data for a specific time with `AS OF`
{: #querying_data_tt_asof}

```sql
SELECT product_id, product_name FROM product for SYSTEM_TIME AS OF "2023-10-23 10:00:00"
```
{: codeblock}

Following constraints will be enforced:
   - Only AS OF/BEFORE  subclause of system_time will be supported for {{site.data.keyword.lakehouse_short}} table of Iceberg type format.
   - As of <timestamp value> can only be of timestamp type or promotable to timestamp value.
   - As of <timestamp value> can be an expression but it eventually needs to be evaluated to a constant value.
   - As of <timetamp value> cannot refer attributes or subqueries.
   - As of <timestamp value> can not be before the time associated with the very first available snapshot id of the table.  

# Querying data for a specific time with `BEFORE`
{: #querying_data_tt_before}

```sql
SELECT product_id, product_name, product_price FROM product FOR SYSTEM_TIME BEFORE '2023-12-01 12:00:00'
```
{: codeblock}

The BEFORE subclause expect timestamp value and it returns the state of the table in terms of data before the given timestamp.
{: note}

# Querying data for a specific snapshot with `SYSTEM_VERSION`
{: #querying_data_tt_system_version}

```sql
SELECT product_id, product_name, product_price FROM product FOR SYSTEM_VERSION AS OF 1887396386633333444
```
{: codeblock}

With SYSTEM_VERSION AS OF subclause, one can provide the snapshot id to request the state of the table based on the given snapshot id. This time travel query using SYSTEM_VERSION clause is only allowed on watsonx.data tables of Iceberg format.
{: note}

### SHOW SNAPSHOTS FOR <table-name>

```sql
SHOW SNAPSHOTS FOR PRODUCT:

     SNAPSHOT_ID     |   SNAPSHOT_TIMESTAMP

---------------------+-------------------------

 9200563116884920042 | 2023-11-22 14:07:11.568

  772896300100219109 | 2023-11-22 14:07:23.075

 6627427340973491406 | 2023-11-22 14:07:30.401

 5580047607422801480 | 2023-11-22 14:07:36.699

 9177117635666586877 | 2023-12-01 12:07:53.511
(5 rows)
```
{: codeblock}

This show snapshots statement will list out all the snaphosts associated with a given watsonx.data table. This Information can be useful for doing Time Travel queries using the AS OF timestamp or AS OF snapshot id. Also this show command is only allowed on watsonx.data tables of Iceberg format.
{: note}

## Reference

See [Time travel and historical data](/docs/netezza?topic=netezza-introducing_tt).