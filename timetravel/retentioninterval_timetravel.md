---

copyright:
  years:  2022
lastupdated: "2022-11-16"

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

# Setting and viewing **DATA_VERSION_RETENTION_TIME** systemwide
{: #dataretentioninterval_tt}

## Setting the retention interval on system level
{: #settingretentioninterval_tt}

To set **DATA_VERSION_RETENTION_TIME** to a specific value for the whole system, run the command as an *Admin* or a user with the *MANAGE SYSTEM* privilege.

Before you set DATA_VERSION_RETENTION_TIME for all tables in a schema or database, consider the cost of storage for temporal tables, which could be significant. See [Showing space usage](/docs/netezza?topic=netezza-showingspaceusage_tt).
{: important}

```sql
SET SYSTEM DEFAULT DATA_VERSION_RETENTION_TIME TO <NUMBER OF DAYS>
```
{: codeblock}

Example:

```sql
SET SYSTEM DEFAULT DATA_VERSION_RETENTION_TIME TO 30
```
{: codeblock}

The value of the property at the system level determines the default value inherited by a subsequent CREATE DATABASE statement that does not explicitly specify this property.

To set **DATA_VERSION_RETENTION_TIME** for a specific object, you can run the **ALTER** or **CREATE** command as an *Admin* or a user with the *MANAGE SYSTEM* privilege.

## Viewing the retention interval for the whole system
{: #viewingsystemretention_tt}

To view **DATA_VERSION_RETENTION_TIME** for the whole system, run the command as an *Admin* or a user with the *MANAGE SYSTEM* privilege.

```sql
SHOW SYSTEM DEFAULT DATA_VERSION_RETENTION_TIME
```

If you did not set the retention time previously, the default is 0.
