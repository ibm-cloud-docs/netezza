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
{: #sqlcommands_watsonx.data}

With 11.2.2.9 release, the following SQL commands and functionalities are supported with {{site.data.keyword.lakehouse_short}}.
For more information, see:

- [CREATE DATABASE](https://ibmdocs-test.dcs.ibm.com/docs/en/SSTNZ3_current?topic=npsscr-create-database-3)
- [CREATE SCHEMA](https://ibmdocs-test.dcs.ibm.com/docs/en/SSTNZ3_current?topic=npsscr-create-schema-3)
- [CREATE TABLE](https://ibmdocs-test.dcs.ibm.com/docs/en/SSTNZ3_current?topic=npsscr-create-table-3)
- [DESCRIBE](https://ibmdocs-test.dcs.ibm.com/docs/en/SSTNZ3_current?topic=reference-describe-table)
- [SELECT QUERIES](https://ibmdocs-test.dcs.ibm.com/docs/en/SSTNZ3_current?topic=npsscr-select-retrieve-rows-3)
- Backup and restore is only supported for the login and reference information, not the data itself.**draft comment: TBC in https://github.ibm.com/cloud-docs/netezza/issues/157**
- AWS S3, IBM COS, minIO data sources are available as storage options or a data lake database.

The following functionalities are not supported:

- Creation of Netezza native objects (for example materialized views and sequences) in schemas other than NETEZZA_SCHEMA
- Queries which update the contents of tables (Insert, Update, Merge, Truncate)
- Queries which create, alter or drop tables and schemas
- Multi-table transactions
- Time travel on Iceberg tables
- `timestamptz` and `uuid` data types
