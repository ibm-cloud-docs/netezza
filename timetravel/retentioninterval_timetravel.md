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

# Data version retention interval (**DATA_VERSION_RETENTION_TIME**)
{: #retentioninterval_tt}

If you have the *MANAGE SYSTEM* privilege, or are an *Admin* user, you can set or change the retention interval property (**DATA_VERSION_RETENTION_TIME**) on a table, schema, database, and system level.


## Setting the retention interval (**DATA_VERSION_RETENTION_TIME**)
{: #settingretentioninterval_tt}

You can set **DATA_VERSION_RETENTION_TIME** on a whole system, database, or schema to have the same value on the tables within that system, database, or schema.

To set **DATA_VERSION_RETENTION_TIME** to a specific value, run the command as an *Admin* or a user with the *MANAGE SYSTEM* privilege.
You can set the retention interval to any value from 0 to 99 days. When the retention interval ends, your historical data is no longer available for querying and you cannot restore objects. If you set a retention interval of 0 days for an object, time travel is disabled for the object.


```sql
SET SYSTEM DEFAULT DATA_VERSION_RETENTION_TIME TO <NUMBER OF DAYS>
```
{: codeblock}

The value of the property at the system level determines the default value inherited by a subsequent CREATE DATABASE statement that does not explicitly specify this property.

## Viewing the retention time of a table, schema, database, or the system default
{: #viewretentioninterval_tt}

```sql
SHOW SYSTEM DEFAULT DATA_VERSION_RETENTION_TIME
```

If you did not set the retention time, the default is 0.
