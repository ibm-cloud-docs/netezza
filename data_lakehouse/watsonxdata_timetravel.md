---

copyright:
  years: 2023
lastupdated: "2023-07-21"

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

By using {{site.data.keyword.lakehouse_short}} time travel, you can access historical data (data that was changed or deleted) at past points in time or within a past period of time.
