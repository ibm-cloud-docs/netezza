---
copyright:
  years:  2022
lastupdated: "2023-01-19"

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

# Getting started with {{site.data.keyword.netezza_short}} time travel
{: #introducing_tt}

Time-related data is core to most application databases. With the {{site.data.keyword.netezza_short}} time travel feature that is available starting from version 11.2.2.5, you can retrieve and analyze historical data without having to develop additional application logic such as history tables. This powerful tool comes in handy when you want to track the history of data changes or reconstruct your data.

By using {{site.data.keyword.netezza_short}} time travel, you can access historical data (data that was changed or deleted) at past points in time or within a past period of time.

[Create or alter objects](/docs/netezza?topic=netezza-enablingdisabling_tt) to start running time travel queries.

**Business use cases and examples**

- Conducting data audits  
    You can examine and audit past data because time travel provides an audit trail of data insertions, deletions, and changes to attributes over the course of business activity.  
    For example:

    - Identify the price of an item before the holiday discount season.
    - Identify the price of stock that was used in a valuation or initial public offering three months ago.
    - Identify the financials according to due diligence at the time of a company merger.

- Analyzing and calculating trends  
    You can examine how data changes over time, identify differences in the data between two points in time, or analyze trends.  
    For example:

    - Identify the number of cars that are rented out week over week.
    - Identify the purchaser that makes the most changes to the quantity after an order is entered.
    - Identify the suppliers that routinely offer a steeper discount than first indicated.

- Rebuilding or reconstructing data  
    For example:

    - Restore a table to a point in the past (for which the historical data is still available).
    - Restore selected rows that were incorrectly deleted or updated.
