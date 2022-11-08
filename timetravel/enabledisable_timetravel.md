---

copyright:
  years:  2022
lastupdated: "2022-11-07"

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

# Enabling and disabling time travel
{: #enablingdisabling_tt}

## Enabling time travel
{: #enabling_tt}

By default, time travel is enabled on your system.

To start running temporal queries, you must [create a temporal table] or [alter a nontemporal table to temporal] by setting data version retention interval (**DATA_VERSION_RETENTION_TIME**) to a nonzero value.

## Disabling time travel
{: #disabling_tt}

To disable time travel for an object, as an *Admin* or a user with the *MANAGE SYSTEM* privilege, set [**DATA_VERSION_RETENTION_TIME**](https://cloud.ibm.com/docs/netezza?topic=netezza-retentioninterval_tt#settingretentioninterval) to 0 days.


```sql
SET SYSTEM DEFAULT DATA_VERSION_RETENTION_TIME TO 0
```
{: codeblock}
