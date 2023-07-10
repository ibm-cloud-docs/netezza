---

copyright:
  years:  2023
lastupdated: "2023-05-30"

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

# Managing the default retention time interval for the system and viewing retention time intervals
{: #dataretentioninterval_tt}

Before you set retention time interval for all tables in a schema or database, consider the cost of storage for temporal tables, which could be significant. See [Managing time travel space usage](docs/netezza?topic=netezza-managing_tt).
{: important}

## Setting the retention time interval for the system
{: #settingretentioninterval_tt}

To set the default **DATA_VERSION_RETENTION_TIME** to a specific value for the system, run the **SET SYSTEM DEFAULT** command.

Before you set **DATA_VERSION_RETENTION_TIME** for all tables in a schema or database, consider the cost of storage for temporal tables, which could be significant. See [Managing time travel space usage](/docs/netezza?topic=netezza-managing_tt).
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

## Viewing the retention time interval with the command-line
{: #viewing_cmd_tt}

### Viewing the default retention time interval for the system with the command-line
{: #viewingsystemretention_tt}

To view **DATA_VERSION_RETENTION_TIME** for the system, run the **SHOW SYSTEM DEFAULT** command.

```sql
SHOW SYSTEM DEFAULT DATA_VERSION_RETENTION_TIME
```

If you did not set the retention time previously, the default is 0.

### Viewing the retention time interval for tables, schemas, and databases with the command-line
{: #viewingtsd_cmd_tt}

To view **DATA_VERSION_RETENTION_TIME** for a specific object, run one of these commands. The commands display **DATA_VERSION_RETENTION_TIME** only if it is a nonzero value.

```sql
\d <table_name>
```

```sql
SHOW SCHEMA <schema_name>
```

```sql
\l+ <all databases, with detail>
```

Retention time interval and retention lower bound for an object are available in the `dataverretntime` and `dataverretnlowerbound` columns of the following system views:

- `_v_table`
- `_v_schema`
- `_v_database`

## Viewing the retention time interval with the web console
{: #viewing_wc_tt}

### Viewing the default retention time interval for the system with the web console
{: #viwewin_rt_system_tt}

1. Log in to the web console as described in [Getting started with the web console](/docs/netezza?topic=netezza-getstarted-console).
1. Go to **Databases**.
   The retention time interval for the system is displayed in the **Retention time interval** section at the top of the page.

### Viewing the retention time interval for tables, schemas, and databases with the web console
{: #viewing_rt_wc_tt}

1. Log in to the web console as described in [Getting started with the web console](/docs/netezza?topic=netezza-getstarted-console).
1. View the retention time interval:

  - For a table:  

    1. Go to **Databases**.
    1. Select the database and schema in which the table that you want to view the retention interval is located.
    1. Ensure that you are in the DB Objects > Tables tab.
    1. Identify the table for which you want to view the retention interval.
    
       The retention interval is displayed in the **Retention time interval (days)** column. 

  - For a schema:
    
    1. Go to **Databases**.
    1. Select the database in which the schema that you want to view the retention interval is located.
    1. Identify the schema for which you want to view the retention interval.
    
       The retention interval is displayed in the **Retention time interval (days)** column. 

    - For a database:
    
    1. Go to **Databases**.
    1. Identify the database for which you want to view the retention interval.
    
       The retention interval is displayed in the **Retention time interval (days)** column. 

