---

copyright:
  years:  2023
lastupdated: "2023-09-08"

keywords: data lakehouse, watosnx.data sql commands, netezza data lakehouse, watsonx, watsonx.data, watsonx.data with nps
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

# {{site.data.keyword.lakehouse_short}} SQL commands
{: #sqlcommands_watsonx.data_mcsp}

With 11.2.2.9 release, the following SQL commands and functionalities are supported with {{site.data.keyword.lakehouse_short}}.
For more information, see:

- [CREATE DATABASE](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-database-2)
- [CREATE SCHEMA](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-schema-2)
- [CREATE TABLE](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-table-2)
- [DESCRIBE](https://www.ibm.com/docs/en/netezza?topic=reference-describe)
- [SELECT QUERIES](https://www.ibm.com/docs/en/netezza?topic=npsscr-select-retrieve-rows-2)
- Backup and restore is only supported for the login and reference information, not the data itself.
- AWS S3, IBM COS, minIO data sources are available as storage options or a data lake database.

The following functionalities are not supported:

- Creation of {{site.data.keyword.lakehouse_short}} native objects (for example materialized views and sequences) in schemas other than NETEZZA_SCHEMA
- Queries which update the contents of tables (Insert, Update, Merge, Truncate)
- Queries which create, alter or drop tables and schemas
- Accessing data lake tables that were created by using LZ4 compression format
- Multi-table transactions
- Time travel on Iceberg tables
- `timestamptz` and `UUID` data types
