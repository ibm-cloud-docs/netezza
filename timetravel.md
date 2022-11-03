---
copyright:
  years:  2022
lastupdated: "2022-06-20"

keywords: time travel, Netezza time travel, temporal tables, Netezza Performance Server time travel, retention interval, retention time interval, enabling time travel, disabling time travel

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

# {{site.data.keyword.netezza_short}} time travel
{: #timetravel}

Maintaining a time-based data support infrastructure might be expensive and complex.
With the technology preview of {{site.data.keyword.netezza_short}} time travel,
you can store, retrieve, and analyze historical data without using additional application logic in your data (tables, schemas, and databases).

- Introducing time travel
    - Uses for time travel
    - Time travel SQL commands
    - Data version retention interval (DATA_VERSION_RETENTION_TIME)
    - Temporal tables

- Enabling and disabling time travel
    - Enabling time travel
    - Disabling time travel

- Setting the retention interval

- Changing the retention interval

- Querying historical data

- Setting time periods for queries

- Running queries


## Introducing time travel
{: #intrott}

This powerful tool comes in handy when you want to track the history of data changes or
reconstruct your data.

By using {{site.data.keyword.netezza_short}} time travel, you can access historical data (for example, data that was changed or deleted) at any point within a specified time.

With time travel, you can do the following tasks, and more:

- Create a system-managed temporal table by specifying a data version retention time interval.
- Create or alter a schema with a retention time, which is to be inherited by tables that are created after a create or delete operation.
- Create or alter a database with a retention time, which is to be inherited by schemas that are created after a create or delete operation.
- Set or disable a default retention time at the system level, which is inherited by databases that are created after the system level default is set.
- View the retention time of a table, schema, database, or the system default.
- Query past data in a temporal table as of a point in time.
- Query past data in a temporal table over a range or period of time.
- Create or replace a view whose definition is a temporal query.


For example, you can identify one of the following values, and many more:

- The price of an item during any specific current or historical period of time.
- The prices of stock that was used in a valuation or initial public offering three years ago.
- The financials according to due diligence at the time of a company merger.
- The number of cars that are rented out week over week.
- The purchaser that makes the most changes to quantity after an order is entered.
- The supplier that routinely offers a steeper discount than first indicated.


### Business uses for time travel
{: #businessusett}

**Conducting data audits**

You can do data forensics because time travel provides an audit trail.

**Changing dimensions**

With data warehouse systems, you can use time travel for attributes that change overtime through the normal course of business.
For example, personal information, medical records or credit information of the customer.

**Analyzing and calculating trends**

You can establish how data changes over time with the ongoing business activity,
and calculate trends in the way that data changes over time.

**Rebuilding data if inadvertent changes occur**

You can retrieve previous version of your data from the history table and insert
the old data back into the table.

**Reconstructing data**

You can reconstruct the state of the data as of any time in the past.

**Identifying differences**

You can identify differences in between two points in time of interest.

### Time travel SQL commands
{: #sqltt}

A **TIME_TRAVEL_ENABLED** subcommand is added to the following commands:

- SET SYSTEM DEFAULT
- SHOW SYSTEM DEFAULT

A **DATA_VERSION_RETENTION_TIME** subcommand is added to the following commands:

- SET SYSTEM DEFAULT
- SHOW SYSTEM DEFAULT
- CREATE DATABASE
- ALTER DATABASE
- CREATE SCHEMA
- ALTER SCHEMA
- CREATE TABLE

### Data version retention interval (DATA_VERSION_RETENTION_TIME)
{: #retentiontt}

Data version retention time interval (retention time interval, retention interval)
specifies the maximum number of days that historical data in a temporal table is preserved
and visible to time travel queries.

For example, if you modify an object, {{site.data.keyword.netezza_short}} preserves the state of the data before the modification so that you can do time travel operations.

The default retention interval value at all levels is 0. The maximum is 92 days. When the retention interval ends,
your historical data is no longer available for querying and you cannot restore objects.

A table with a 0 retention interval is not a temporal table (time travel table) and does not support time travel queries.

If you set a retention interval of 0 days for an object, time travel is disabled for the object.

Netezza Performance Server retains the historical data based on the retention time interval that is associated with a table. This retention period is the time period (in days) over which you can query the historical data.
Older historical rows are reclaimed when you run the **GROOM TABLE** command, or use the **AutoMaint** groom feature if the rows are not needed to support incremental backup.

### Temporal tables
{: #temporaltablestt}

A temporal table is a table that has a specified, nonzero retention interval, and supports time travel queries.
Temporal tables provide a built-in support to access the data that is stored in a table at any point in time
rather than current data (current moment in time). The history of your data in the table is maintained and managed automatically.

At any specified time, a table’s retention interval start timestamp equals the current timestamp
(date/time, with microsecond granularity) minus the retention interval.

The retention interval of a temporal table is the period of time that starts at the retention start timestamp and has no defined end.

Tables with retention interval set to zero are not temporal.

Netezza Performance Server supports only system-managed temporal tables.
A system-managed temporal table is a table that maintains historical versions of its rows.
Use a system-period temporal table to store current versions of your data.
The database transparently stores your updated and deleted data rows.
System-period tables are system-managed.
{: note}

## Enabling and disabling time travel
{: #enabledisablett}

By default, time travel

### Enabling time travel
{: #enablett}

As an *Admin* or a user with the *MANAGE SYSTEM* privilege, run the command:

```
SYSTEM.ADMIN(ADMIN)=> SET SYSTEM DEFAULT TIME_TRAVEL_ENABLED TO ON
```

### Disabling time travel
{: #disablett}

As an *Admin* or a user with the *MANAGE SYSTEM* privilege, run the command:

```
SYSTEM.ADMIN(ADMIN)=> SET SYSTEM DEFAULT TIME_TRAVEL_ENABLED TO OFF
```

If **TIME_TRAVEL_ENABLED** is set from ON to OFF, the existing temporal tables retain their retention intervals and historical rows. That information is available again when **TIME_TRAVEL_ENABLED** is set to ON.

## Setting the retention interval
{: #settingtt}

If you have the *MANAGE SYSTEM* privilege, or are an *Admin* user, you can set the retention interval property (**DATA_VERSION_RETENTION_TIME**) on a table, schema, database, and system level.

You can set **DATA_VERSION_RETENTION_TIME** on a whole system, database, or schema to have the same value on the tables within that system, database, or schema.

You can set the retention interval to any value from 0 up to 92 days. When the retention interval ends,
your historical data is no longer available for querying and you cannot restore objects.

If you set a retention interval of 0 days for an object, time travel is disabled for the object.

## Changing the retention interval
{: #chngingtt}

## Querying historical data
{: #queryingtt}

## Setting time periods for queries
{: #settingtimett}

## Running queries
{: #runningtt}
