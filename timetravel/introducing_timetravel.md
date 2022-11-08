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

With time travel, you can do the following tasks, and more:

- [Create system-managed temporal tables by specifying a data version retention time interval.]((https://cloud.ibm.com/docs/netezza?topic=netezza-retentioninterval_tt#settingretentioninterval)
- [Create schemas]((https://www.ibm.com/docs/en/netezza?topic=npsscr-create-schema-2) or [alter schemas](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-schema-2) with a retention time, which is to be inherited by tables that are created after a create or delete operation.
- [Create databases](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-database-2) or [alter databases](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-database-2) with a retention time, which is to be inherited by schemas that are created after a create or delete operation.
- [Set or disable a default retention time at the system level, which is inherited by databases that are created after the system level default is set.](https://cloud.ibm.com/docs/netezza?topic=netezza-retentioninterval_tt#settingretentioninterval)
- [View the retention time of a table, schema, database, or the system default.](https://cloud.ibm.com/docs/netezza?topic=netezza-retentioninterval_tt)
- [Query past data in a temporal table as of a point in time or period of time.](https://cloud.ibm.com/docs/netezza?topic=netezza-queryingdata_tt)
- [Convert an existing table to a system-managed temporal table, convert an existing temporal table to a nontemporal table, or modify a temporal table’s retention time.](https://cloud.ibm.com/docs/netezza?topic=netezza-retentioninterval_tt)
- [Specify, modify, or disable the retention time of an existing schema or database by cascading the retention time to existing tables (and schemas).](https://cloud.ibm.com/docs/netezza?topic=netezza-retentioninterval_tt)
- Create or replace a view whose definition is a temporal query.
- Backup and restore database, schema, and table retention times.
- Use temporal queries in stored procedures.
- Restore a dropped table, schema, or database within its retention period.
- Replicate database, schema, or table retention times.

For example, you can identify one of the following values, and many more:

- The price of an item during any specific current or historical period of time.
- The prices of stock that was used in a valuation or initial public offering three years ago.
- The financials according to due diligence at the time of a company merger.
- The number of cars that are rented out week over week.
- The purchaser that makes the most changes to quantity after an order is entered.
- The supplier that routinely offers a steeper discount than first indicated.

## Bussiness use for time travel
{: #uses_tt}

**Conducting data audits**

You can do data forensics because time travel provides an audit trail.

**Changing dimensions**

With data warehouse systems, you can use time travel for attributes that change overtime through the normal course of business.
For example, personal information, medical records or credit information of the customer.

**Analyzing and calculating trends**

You can establish how data changes over time with the ongoing business activity,
and calculate trends in the way that data changes over time.

**Rebuilding or reconstructing data**

You can retrieve previous version of your data from the history table and insert
the old data back into the table. You can reconstruct the state of the data as of any time in the past.

**Identifying differences**

You can identify differences in between two points in time of interest.
