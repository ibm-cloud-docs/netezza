---

copyright:
  years: 2024
lastupdated: "2024-04-30"

keywords: Netezza Performance Server release notes, what's new, AWS, Netezza on AWS

subcollection: netezza

---

{:shortdesc: .shortdesc}
{:screen: .screen}
{:codeblock: .codeblock}
{:pre: .pre}
{:tip: .tip}
{:note: .note}
{:external: target="_blank" .external}
{:step: data-tutorial-type='step'}

# 11.2.2.x
{: #my-service-relnotes}

## 11.2.2.11 - April 30, 2024
{: #mar2024}

### New features and enhancements
{: #nfmar2024}

- `AWS IAM` user authentication allows you to create and log in to your account using your `AWS IAM` credentials. This means that you can use your existing AWS access and secret keys to sign in to your account with no additional steps required. Additionally, you can now use multi-factor authentication (MFA) to secure your account even further. For more information, see [Setting AWS IAM authentication](/docs/netezza?topic=netezza-awsiamauth).

#### Connectivity improvements
{: #cimar2024}


### Fixes
{: #fmar2024}

- **Timezone issues:** Fixed the incorrect timezone display issue. By default, all the timestamps are now displayed in database timezone. You can choose between database and local timezone for scheduling automaintenance, BnR and pause/resume job.


### Components
{: #compsmar2024}

- {{site.data.keyword.netezza_short}} 11.2.2.11
- Web console 4.0.3.1

## 11.2.2.10 - February 21, 2024
{: #feb2024}

### New features and enhancements
{: #nffeb2024}

- A new **Scheduler type** column is introduced in the **History** page for past records.This column indicates whether the respective schedule is **ad-hoc** or **scheduled**.
For more information, see [Checking scaling history](/docs/netezza?topic=netezza-scaling-console#scaling-console-history).

- Enhanced system stability for smooth operations.

- **RHEL8/GCC9 upgrade:**\
   Version 11.2.2.10 incorporates an upgrade to RHEL8/GCC9.\
   GCC9 supports only 64-bit. NPS no longer provides 32-bit client builds.

   GCC9 upgrade has no impact on custom UDX. If you face any issues, contact IBM support.
   {: note}

- **INZA:**\
   `python2` and its adapter are no longer supported.
- **Netezza client:**\
   Support to initiate, view,  and manipulate schedules for ad hoc, pause, resume, and scaling. Fore more information, see [Pausing and resuming instances](/docs/netezza?topic=netezza-pauseresume) and [Scaling](/docs/netezza?topic=netezza-scaling-topic).
- Introduced new maintanence job types **Grooms** and **Genstats** under **Maintenance** section. For more information, see [Maintenance](/docs/netezza?topic=netezza-settings#maintenance).
- Introduced a new option **Lakehouse** to create databases. For more information, see [Create databases](/docs/netezza?topic=netezza-databases#create-db).
- `CREATE TABLE` support for unpartitioned Iceberg table.
- `INSERT` support for Iceberg table.
#### Connectivity improvements
{: #cifeb2024}

- OpenSSL library upgraded to 1.1.1t.
- TLSv1.3 connection protocol supported.
- New Ciphers supported for TLSv1.3:
    - TLS_AES_128_GCM_SHA256
    - TLS_AES_256_GCM_SHA384
    - TLS_CHACHA20_POLY1305_SHA256
- AIX 7.3 and SUSE 15 SP3 support added from version 11.2.2.10 and later.
- All 32 bit client are now deprecated.
- HP and Solaris clients are deprecated altogether.
- ConnRetry feature added in ODBC. Fore more information, see [Configuring the DSN and driver options with ODBC Driver Setup](https://www.ibm.com/docs/en/netezza?topic=codsd-configuring-dsn-driver-options-odbc-driver-setup-2).

### Fixes
{: #ffeb2024}

- `.Net` login timeout overflow is fixed.

### Components
{: #compsfeb2024}

- {{site.data.keyword.netezza_short}} 11.2.2.10
- Web console 4.0.1.7

### Known issues
{: #kifeb2024}

- For expansion failure due to node procurement issues, the Ops team restores the system to online state. You will see the state of Expansion scheduler as **Suspended** in Workload Patterns -> Scaling section. The Ops team will contact you once the required nodes becomes available. For more information, see [Viewing suspended expansion](/docs/netezza?topic=netezza-scaling-console#view-suspended-expansion).

- Differential schema level backup might fail with the error message - "Error: Backupset not found in history for specified database and connector." if full schema level backup is performed on some different schema. To overcome this issue, take full schema-level backup of the schemas before performing its differential schema level backup.

## 11.2.2.9 - December 8, 2023
{: #dec2023}

### New features and enhancements
{: #nfdec2023}

- New {{site.data.keyword.netezza_short}} functionalities that are associated with {{site.data.keyword.lakehouse_short}} are introduced. For more information, see [{{site.data.keyword.lakehouse_short}} SQL commands](/docs/netezza?topic=netezza-sqlcommands_watsonx.data).

   You can also view your data lakehouse objects with the web console.

- Learn how to [Run multiple SQL statements in a single session](/docs/netezza?topic=netezza-query-editor#single-session-queries) and [Run multiple SQL statements in different sessions](/docs/netezza?topic=netezza-query-editor#multiple-sessions-queries) with the query editor in the web console.

- Updated the algorithm to calculate the profile of the day. The calculation is now made by subtracting two subsequent records' timestamp values if they are of the same day and appending the `timedelta` to that profile. For each day, the system compares which profile has the maximum time duration and declares that profile to be the profile of the day.

### Components
{: #compsdec2023}

- {{site.data.keyword.netezza_short}} 11.2.2.9
- Web console 4.0.1.6
- JDBC driver (on all platforms)
   MD5 Auth requests are deprecated. All MD5 connections are dropped.

- OLEDB driver (only on Windows)
   TLS1.2 protocol is given preference for SSL connections.

- All Windows supported drivers (ODBC & OLEDB)
   Visual Studio VC++ runtime redistributables are upgraded to 2022.

### Known issues
{: #kidec2023}

- For issues related to {{site.data.keyword.netezza_short}} and {{site.data.keyword.lakehouse_short}}, see [{{site.data.keyword.lakehouse_short}} known issues](/docs/netezza?topic=netezza-watsonx.data_knownissues).
- The `Word_diff` function in the SQL extension toolkit does not support string input.

## 11.2.2.8 - IF4 - November 9, 2023
{: #nov2023}

### Fixes
{: #f1nov2023}

- Updated APIs for IBM cloud secret manager.

### Components
{: #comps1nov2023}

- {{site.data.keyword.netezza_short}} 11.2.2.8-IF4
- Web console 4.0.15

### Known issues
{: #ki1nov2023}

- The console might not display an abort confirmation when the backup or restore process is aborted and might show that the operation is still in progress. Apply the following workaround on your system to overcome this issue.
   - If backup aborted

      ```sql
      update _t_backup_history set status=2, batchstatus=2 where status=0
      ```
      {: codeblock}

   - If restore aborted

      ```sql
      update _t_restore_history set status=2, batchstatus=2 where status=0
      ```
      {: codeblock}

## 11.2.2.8 - July 24, 2023
{: #july2023}

### New features and enhancements
{: #nf1july2023}

- Technology preview support for **SELECT** operations from Apache Iceberg and Hive tables is available on {{site.data.keyword.netezza_short}} on AWS. Apache Iceberg is an open table format that helps simplify data processing on large datasets that are stored in data lakes. With Hive table support, you can access Hive tables directly from your {{site.data.keyword.netezza_short}} instance and perform complex analytics operations by joining the tables with {{site.data.keyword.netezza_short}} tables.
For more information, see [Querying data from {{site.data.keyword.lakehouse_short}}](/docs/netezza?topic=netezza-overview_watsonx.data).

- {{site.data.keyword.netezza_short}} on AWS is now available in Europe (Frankfurt) region.
Other regions where the service is available on AWS include:

   - North America: US East (Northern Virginia), US West (Northern California), and Canada (Central).
   - Asia Pacific: Tokyo, Seoul.

### Fixes
{: #f1july2023}

- Fixed the issue with SQL query editor where commented out queries separated by a semicolon in the same line get executed.
- Fixed the issue with multiple pause/resume and scaling jobs with the same name get executed.

### Components
{: #comps1july2023}

- {{site.data.keyword.netezza_short}} 11.2.2.8
- Web console 4.0.15

### Known issues
{: #ki1july2023}

- Contour scaling from NC-Start to NC0 with storage utilization higher than 90% might result in errors. Keep storage utilization under 90% or expand storage before you start contour scaling. Ops alerts notifies you about storage utilization.
- The console might not display an abort confirmation when the backup or restore process is aborted and might show that the operation is still in progress. Apply the following workaround on your system to overcome this issue.
   - If backup aborted

      ```sql
      update _t_backup_history set status=2, batchstatus=2 where status=0
      ```
      {: codeblock}

   - If restore aborted

      ```sql
      update _t_restore_history set status=2, batchstatus=2 where status=0
      ```
      {: codeblock}

## 11.2.2.7 - July 10, 2023
{: #july12023}

### New features and enhancements
{: #nfjuly12023}

- {{site.data.keyword.netezza_short}} is now enabled on Amazon Web Services (AWS) for US-East-1 region. For more information, see [Getting started with Netezza Performance Server](/docs/netezza?topic=netezza-getstarted) and [Connecting to Netezza Performance Server](/docs/netezza?topic=netezza-connecting-overview).
- On AWS, smart scaling with confidence score and seed models display is now available in {{site.data.keyword.netezza_short}} web console. For more information, see [Smart scaling](/docs/netezza?topic=netezza-smartscaling_intro).
- On AWS, a new entry-level workload contour called NC-Start is available to support lower volume BI and UAT workloads. You can scale this instance to NC0 performance profiles seamlessly as your workload increases. For more information, see [Scaling](/docs/netezza?topic=netezza-scaling-console).
- Time travel functionality is supported in {{site.data.keyword.netezza_short}} web console. For more information, see [Getting started with Netezza Performance Server time travel](/docs/netezza?topic=netezza-introducing_tt).
- INZA 11.2.28 is supported. For more information, see [Netezza Performance Server Analytics 11.2.28 release notes](https://www.ibm.com/docs/en/netezza?topic=npsarnc-netezza-performance-server-analytics-11228-release-notes-2).

### Components
{: #compsjuly12023}

- {{site.data.keyword.netezza_short}} 11.2.2.7
- Web console 4.0.14

### Known issues
{: #kijuly12023}

- Databases, schemas, and table names containing a dot character (".") do not show in the time travel statistics and graphs when you set the retention time interval to a nonzero value.
- On demand (ad hoc) backup and restore for multiple large databases at one go is successful for only a few databases in the batch. For the rest of the databases you get an authentication error.

  Workaround:

  - Take a backup of a single large database at a time.
  - Restore a single large database at a time.

## 11.2.2.6 - March 2023
{: #march2023}

### New features and enhancements
{: #march2023}

- Default database maximum connections to the server is now increased to 1000.

### Fixes
{: #fmarch2023}

- Fixed the issue with `.pln` files not getting stored in `$NZ_KIT_LOG/plans` directory if your query crashes.
- Fixed the issue with sensitive files from host pod being read by using external tables and remote `nzsql` client. Starting with this release, you cannot load data into `/root` and `/home` directories, so using `nzload` with datafile from `/root` and `/home` is restricted along with creating external tables in these directories.

### Components
{: #components11226}

- {{site.data.keyword.netezza_short}} 11.2.2.6
- Web console 4.0.12

### Known issues
{: #kimarch2023}

- You might experience the paste option not working in Mozilla Firefox 110.x when you are using the query editor in the web console. This is the web browser limitation and you must change the browser configuration preferences to allow the web pages to get access to the clipboard by using JavaScript. This issue is not present in other web browsers.

  Workaround:

  1. Open a new Firefox window.
  1. In the address bar, enter `about:config`.
  1. Click **Accept the Risk and Continue** button.
  1. In the Search preference name, type `asyncc`.
  1. Select **dom.events.asyncClipboard.readText** and **dom.events.testing.asyncClipboard** by clicking the toggle icon on the right.
     The settings change from **false** to **true**.
  1. Refresh the web console page.

## 11.2.2.5 - February 2023
{: #feb2023}

### New features and enhancements
{: #feb2023}

- Use time travel queries to retrieve and analyze historical data without having to develop extra application logic such as history tables. {{site.data.keyword.netezza_short}} time travel comes in handy when you want to track the history of data changes or reconstruct your data. By using this powerful tool, you can access historical data (data that was changed or deleted) at past points in time or within a past period of time. For more information, see [Getting started with time travel](/docs/netezza?topic=netezza-introducing_tt).

- The **nzbackup** and **nzrestore** destination directory limit is updated. Previously, only 16 directory locations to read/write were supported. Now, the limit is 32.

- The location of postmaster and postgres core dumps is changed.

| Core dump         | Previous location | New location |
| -----------       | -----------       | ----------   |
| Postmaster cores  | NZ_DATA_DIR/global| NZ_LOG_DIR/postgres/postmaster/|
| Postgres cores    | NZ_DATA_DIR/base	| NZ_LOG_DIR/postgres/postgres   |
{: caption="Table 1. New and previous locations of the postmaster and postgres core dumps." caption-side="bottom"}

- Automatic pause and resume is enabled in the web console.

### Components
{: #components}

- {{site.data.keyword.netezza_short}} 11.2.2.5
- Web console 4.0.11

### Known issues
{: #kifeb2023}

If a common table expression or derived table query contains column names or column aliases, which begin with an underscore, Netezza Performance Server deletes these columns in the query result set.
If there are no columns to display, Netezza Performance Server returns the following error.

```sh
ERROR:  No columns are selected due to column alias begin with underscore
```
{: screen}

Example:

```sql
create table t1 ( c1 int , c2 int);
CREATE TABLE
with tab1 as ( select c1 as _c1 , c2 as _c2 from t1 ) select tab1.* from tab1; ERROR:  No columns are selected due to column alias begin with underscore
select tab1.* from ( select c1 as _c1 , c2 as _c2 from t1 ) as tab1; ERROR:  No columns are selected due to column alias begin with underscore
```
{: screen}

## 11.2.2.4 - July 2022
{: #july2022}

As of July 28, 2022, you can access data from data lakes and move data between applications with Kafka.

### New features
{: #nfjuly2022}

- Use the technology preview of the {{site.data.keyword.netezza_short}} external tables to access and query *parquet* files that are stored outside of your database in data lakes (on AWS S3). For more information, see [Querying data from data lakes](/docs/netezza?topic=netezza-overview_singularity).

- Use {{site.data.keyword.netezza_short}} as a data source or data sink. For more information, see [Using Netezza Performance Server as a data source](/docs/netezza?topic=netezza-netezzakafka#datasourcekafka) and [Using Netezza Performance Server as a data sink](/docs/netezza?topic=netezza-netezzakafka#datasinkkafka).

### Known issues
{: #kijuly2022}

`datasource` is a reserved keyword now. If you want to use `datasource` as an identifier, enclose it in double quotation marks (`"datasource"`).

Example:

```sql
SYSTEM.ADMIN(ADMIN)=> create table t1 ( "datasource" int);
CREATE TABLE
```
{: codeblock}

## 11.2.2.3 - June 2022
{: #june2022}

As of June 14, 2022, several fixes, and a stability patch for critical issues.

### Fixes
{: #fjune2022}

- Fixed the issue with queries failing with error **No such table exists** on a second attempt.
- Fixed the issue with DBOS crashing while redumping modified plan to file.
- Fixed the issue with intermittent hangs.
- Fixed **ERROR : unexpected error 12** that occurred when you ran merge queries dynamically through a stored procedure.
- Fixed the issue with memory leaks with stored procedures that occurred after the _ENABLE_SPROC_HIST_LOGGING_ variable was enabled.
- Fixed the issue with postmaster crashing by compiling **librest** with Go 1.18.

### Known issues
{: #kijune2022}

- If a large database backup to Azure Blob Storage with a single stream fails, update the number of streams to 16 and retry the backup.


## May 2022
{: #may2022}

As of May 20, 2022, workload enhancements and network policies support is added.

### New features
{: #nfmay2022}

- Two new workload contours NC0 and NC3 are available for a wider range of configuration options for provisioning and scaling.
- Network policies support is added. You can control the set of the IP addresses and hostnames that your {{site.data.keyword.netezza_short}} database can connect to or can be connected from by using network policies. For more information, see [Network policies](/docs/netezza?topic=netezza-network-policies) and [Network policies with the web console](/docs/netezza?topic=netezza-settings&interface=ui).

### Known issues
{: #kimay2022}

- Netezza SQL Editor does not accept input for query requests. You can construct equivalent query requests by using [the command line](https://www.ibm.com/docs/en/netezza?topic=service-command-line-interface).

## March 2022
{: #march2022}

As of March 17, 2022, the {{site.data.keyword.netezza_short}} web console is available in the following languages: English, German, French, Spanish, Italian, Brazilian, Japanese, Chinese Simplified, Chinese Traditional, and Korean.


For release notes for other {{site.data.keyword.netezza_short}} deployment options, see [this page](https://www.ibm.com/docs/en/netezza?topic=netezza-release-notes).
