---

copyright:
  years: 2023
lastupdated: "2023-02-28"

keywords: Netezza Performance Server release notes, what's new,

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

# Release notes for {{site.data.keyword.netezza_short}} as a Service
{: #my-service-relnotes}

## March 2023
{: #march2023}

### New features and enhancements
{: #march2023}

### Components
{: #components11226}

- {{site.data.keyword.netezza_short}} 11.2.2.6
- Web console 4.0.12

### Known issues
{: #kimarch2023}

## February 2023
{: #feb2023}

### New features and enhancements
{: #feb2023}

- Use time travel queries to retrieve and analyze historical data without having to develop extra application logic such as history tables. {{site.data.keyword.netezza_short}} time travel comes in handy when you want to track the history of data changes or reconstruct your data. By using this powerful tool, you can access historical data (data that was changed or deleted) at past points in time or within a past period of time. For more information, see [Getting started with time travel](/docs/netezza?topic=netezza-introducing_tt).

- The **nzbackup** and **nzrestore** destination directory limit is updated. Previously, only 16 directory locations to read/write were supported. Now, the limit is 32.

- The location of postmaster and postgres core dumps is changed.

| Core dump       | Previous location | New location |
| -----------     | -----------       | ----------   |
| Postmaster cores| NZ_DATA_DIR/global| NZ_LOG_DIR/postgres/postmaster/|
| Postgre cors    | NZ_DATA_DIR/base	| NZ_LOG_DIR/postgres/postgres   |
{: caption="Table 1. New and previous locations of the postmaster and posgres core dumps." caption-side="bottom"}

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

## July 2022
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

## June 2022
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

As of May 20, 2022, workload enhacements and network policies support is added.

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
