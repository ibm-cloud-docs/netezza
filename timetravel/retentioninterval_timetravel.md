---

copyright:
  years:  2022
lastupdated: "2022-11-17"

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

# Setting retention time interval for the system and viewing retention time intervals
{: #dataretentioninterval_tt}

## Setting the retention time interval for the system
{: #settingretentioninterval_tt}

To set **DATA_VERSION_RETENTION_TIME** to a specific value for the whole system, run the **SET SYSTEM DEFAULT** command.

Before you set **DATA_VERSION_RETENTION_TIME** for all tables in a schema or database, consider the cost of storage for temporal tables, which could be significant. See [Showing space usage](/docs/netezza?topic=netezza-showingspaceusage_tt).
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

To set **DATA_VERSION_RETENTION_TIME** for a specific object, you can run the **ALTER** or **CREATE** command.

## Viewing the retention time interval for the whole system
{: #viewingsystemretention_tt}

To view **DATA_VERSION_RETENTION_TIME** for the system, run the **SHOW SYSTEM DEFAULT** command.

```sql
SHOW SYSTEM DEFAULT DATA_VERSION_RETENTION_TIME
```

If you did not set the retention time previously, the default is 0.

## Viewing the retention intervals for tables, schemas, and databases
{: #viewingtsd_tt}

To view **DATA_VERSION_RETENTION_TIME** for a specific objectm run one of these commands. The commands display **DATA_VERSION_RETENTION_TIME** only if it is a nonzero value.

```sql
\d <table_name>
```

```sql
SHOW SCHEMA (schema_name)
```

```sql
\l+ (all databases, with detail)
```

Retention time interval and retention lower bound for an object are available in the `dataverretntime` and `dataverretnlowerbound` columns of the following system views:

- `_v_table`
- `_v_schema`
- `_v_database`
