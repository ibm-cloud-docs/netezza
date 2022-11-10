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

# Showing space usage
{: #showingspaceusage_tt}

Before you set **DATA_VERSION_RETENTION_TIME** for all tables in a schema or database, consider the cost of storage for temporal tables, which could be significant. See [Showing space usage](/docs/netezza?topic=netezza-showingspaceusage_tt).

To check space usage, as an *Admin* or a user with the *MANAGE SYSTEM* privilege, run the command.

```sql
SHOW TEMPORAL HISTOGRAM <TEMPORAL TABLE> [DAYSPERROW <number of days>]
```
{: codeblock}

Example:

```sql
SHOW TEMPORAL HISTOGRAM PRODUCT
| BASE_TIMESTAMP            | STARTDAYSAGO | ENDDAYSAGO | DELETEDROWS |  MBYTESUSED      | USAGEPERCENT   |
|2022-11-07 16:40:47.363187 |            1 |          0 |           0 |                0 |        0       |
|2022-11-07 16:40:47.363187 |            2 |          1 |           5 | 0.14423076923077 | 38.461538461538|
|2022-11-07 16:40:47.363187 |            3 |          2 |           4 | 0.11029411764706 | 29.411764705882|
```
{: codeblock}

See also [the SHOW TEMPORAL HISTOGRAM command](https://www.ibm.com/docs/en/netezza?topic=reference-show-temporal-histogram).
