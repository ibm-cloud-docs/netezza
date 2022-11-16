---

copyright:
  years:  2022
lastupdated: "2022-11-10"

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

# Managing time travel
{: #managing_tt}

Historical rows in temporal tables take up space on your {{site.data.keyword.netezza_short}} disks over and above that if it is necessary for current rows. The amount of this extra space depends on the following factors:

- The number of days in the retention time interval.
- The rate of change (rows or bytes deleted and updated) of data in the table.
    The size of the current data in and of itself is not a factor if the rate of change is measured in absolute, not relative, terms. For example, 40% of a larger table means more rows or bytes than 40% of a smaller table.

A longer retention time interval might be better for a slowly changing dimension table, but not for a table where the number of rows or bytes that are deleted or updated per day is large.

For historical rows that are no longer visible to time travel queries, you can reclaim the space that is taken by these rows with the **GROOM TABLE RECORDS ALL** command. In some cases, not all rows can be reclaimed. For example, if the rows are also needed to support incremental backup. You can also schedule automatic grooming with AutoMaint.

If you altered the **DATA_VERSION_RETENTION_TIME** for a temporal table and the table had historical rows that had been retained based on the earlier retention time interval (before you changed the retention time), you can groom the table to reclaim space.

You can estimate the space that might be reclaimed by running the **SHOW TEMPORAL HISTOGRAM** command. The command shows the space that is used by deleted rows per day or per range of days.

## Showing space usage
{: #showingspaceusage_tt}

Before you set **DATA_VERSION_RETENTION_TIME** for all tables in a schema or database, consider the cost of storage for temporal tables, which could be significant. See [Showing space usage](/docs/netezza?topic=netezza-showingspaceusage_tt).

To check space usage, as an *Admin* or a user with the *MANAGE SYSTEM* privilege, run the command.

```sql
SHOW TEMPORAL HISTOGRAM <TEMPORAL TABLE> [DAYSPERROW <number of days>]
```
{: codeblock}

Example:

```sql
show temporal histogram flight;
        BASE_TIMESTAMP      | STARTDAYSAGO | ENDDAYSAGO | DELETEDROWS | MBYTESUSED | USAGEPERCENT
----------------------------+--------------+------------+-------------+------------+--------------
 2022-11-08 15:35:59.442782 |            1 |          0 |         503 |    144.230 |        19.23
 2022-11-08 15:35:59.442782 |            2 |          1 |           0 |          0 |            0
 2022-11-08 15:35:59.442782 |            3 |          2 |         451 |    110.294 |        14.71
 2022-11-08 15:35:59.442782 |            4 |          3 |         913 |    218.529 |        29.14
 2022-11-08 15:35:59.442782 |            5 |          4 |           0 |          0 |            0
 2022-11-08 15:35:59.442782 |            6 |          5 |         389 |     88.235 |        11.76
```
{: codeblock}

NOTE: The virtual **_SYS_START** and **_SYS_END** columns do not take up additional space in the (current or historical) rows of table. They are derived from other hidden fields that are already present in the on-disk rows.
{: note}

See also [the SHOW TEMPORAL HISTOGRAM command](https://www.ibm.com/docs/en/netezza?topic=reference-show-temporal-histogram).
