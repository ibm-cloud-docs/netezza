---
copyright:
  years:  2022
lastupdated: "2022-11-03"

keywords: time travel, Netezza time travel,

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
{:note: .note}

# Introducing {{site.data.keyword.netezza_short}} time travel
{: #introducing_tt}

This powerful tool comes in handy when you want to track the history of data changes or reconstruct your data.

By using {{site.data.keyword.netezza_short}} time travel, you can access historical data at any point within a specified time. For example, data that was changed or deleted.

## Common tasks
{: #commontasks_tt}

- [Create tables, databases, and schemas for time travel purposes](/docs/netezza?topic=netezza-temporaltables_tt)
- [Alter existing tables, databases, or schemas for time travel purposes]
- [Alter existing temporal tables, databases, or schemas to nontemporal ones]
- [Alter the retention time of temporal objects]
- [Set retention time systemwide](/docs/netezza?topic=netezza-dataretentioninterval_tt#settingretentioninterval_tt)
- [View the retention time of a table, schema, database, or the system default.](/docs/netezza?topic=netezza-dataretentioninterval_tt#viewretentioninterval_tt)
- Restore a dropped table, schema, or database within its retention period.
- Backup and restore database, schema, and table retention times.
- [Query data for a specific time with the AS OF subclause](/docs/netezza?topic=netezza-queryingdata_tt#queryasof_tt)
- [Query data for a specific time with the BEFORE subclause](/docs/netezza?topic=netezza-queryingdata_tt#querybefore_tt)
- [Query data for all rows over a time period with the FROM...TO subclause](/docs/netezza?topic=netezza-queryingdata_tt#fromto_tt)
- [Query data for all rows over a time period with the BETWEEN...AND subclause](/docs/netezza?topic=netezza-queryingdata_tt#betweenand_tt)
- [Identify details for a specific date and time](/docs/netezza?topic=netezza-queryingdata_tt#detailsdatetime_tt)
- [Identify changes that happened on a specific date](/docs/netezza?topic=netezza-queryingdata_tt#changesdate_tt)
- Create or replace a view whose definition is a temporal query.
- Use temporal queries in stored procedures.

For example, you can identify one of the following values, and many more:

- The price of an item during any specific current or historical period of time.
- The prices of stock that was used in a valuation or initial public offering three years ago.
- The financials according to due diligence at the time of a company merger.
- The number of cars that are rented out week over week.
- The purchaser that makes the most changes to quantity after an order is entered.
- The supplier that routinely offers a steeper discount than first indicated.

## Bussiness use for time travel
{: #uses_tt}

- Conducting data audits

    You can do data forensics because time travel provides an audit trail.

- Changing dimensions**

    With data warehouse systems, you can use time travel for attributes that change overtime through the normal course of business.
    For example, personal information, medical records or credit information of the customer.

- Analyzing and calculating trends**

    You can establish how data changes over time with the ongoing business activity, and calculate trends in the way that data changes over time.

- Rebuilding or reconstructing data**

    You can retrieve previous version of your data from the history table and insert the old data back into the table. You can reconstruct the state of the data as of any time in the past.

- Identifying differences**

    You can identify differences in between two points in time of interest.
