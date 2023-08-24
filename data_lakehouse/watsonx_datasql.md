---

copyright:
  years:  2023
lastupdated: "2023-08-24"

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
- [CREATE EXTERNAL DATASOURCE](https://ibmdocs-test.dcs.ibm.com/docs/en/SSTNZ3_current?topic=tables-create-external-datasource-command) **draft comment: no info provided in the box note. Doesn't look like to be supported in 11.2.2.9. TBD with Brajesh**
- [CREATE GLOBAL TEMPORARY TABLE](https://ibmdocs-test.dcs.ibm.com/docs/en/SSTNZ3_current?topic=mgtt-create-global-temporary-table-3) **draft comment: "temp tables only in NETEZZA_SCHEMA" - TBC with Brajesh/Mike -- do we mean temporary tables are only supported in NETEZZA_SCHEMA?**
- [CREATE TEMPORARY TABLE] **draft comment: "temp tables only in NETEZZA_SCHEMA" - TBC with Brajesh/Mike -- do we mean temporary tables are only supported in NETEZZA_SCHEMA?**
- [CREATE SCHEMA](https://ibmdocs-test.dcs.ibm.com/docs/en/SSTNZ3_current?topic=npsscr-create-schema-3)
- [CREATE TABLE](https://ibmdocs-test.dcs.ibm.com/docs/en/SSTNZ3_current?topic=npsscr-create-table-3)
- [DESCRIBE tblname](https://ibmdocs-test.dcs.ibm.com/docs/en/SSTNZ3_current?topic=reference-describe-table)
- [SELECT FROM](https://ibmdocs-test.dcs.ibm.com/docs/en/SSTNZ3_current?topic=npsscr-select-retrieve-rows-3)
- Backup and restore is only supported for the login and reference information, not the data itself.
- sequence **draft comment: do we mean [CREATE SEQUENCE](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-sequence-2)?** all non-table objects cannot be made in the data lake schemas.
- AWS S3, IBM COS, minIO data sources are available as storage options or a data lake database.
- certificate authentication for data lake on HDFS by using Kerberos
- supported data types **draft comment: for 11.2.2.8 we agreed to only list the following unsupported data types: list, struct, map, timestamptz, uuid. Do we now want to add the supported ones?**

The following commands and functionalities are not supported:

- [ALTER SCHEMA](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-schema-2)
- [ALTER TABLE](https://www.ibm.com/docs/en/netezza?topic=npsscr-alter-table-2)
- [DELETE FROM](https://www.ibm.com/docs/en/netezza?topic=npsscr-delete-2)
- [DROP DATABASE](https://www.ibm.com/docs/en/netezza?topic=npsscr-drop-database-2)
- [DROP SCHEMA](https://www.ibm.com/docs/en/netezza?topic=npsscr-drop-schema-2)
- [INSERT INTO](https://www.ibm.com/docs/en/netezza?topic=npsscr-insert-2)
- [MERGE STMT](https://www.ibm.com/docs/en/netezza?topic=npsscr-merge-2)
- [TRUNCATE STMT](https://www.ibm.com/docs/en/netezza?topic=npsscr-truncate-2)
- [UPDATE TABLE](https://www.ibm.com/docs/en/netezza?topic=npsscr-update-2)
- Multi-table transactions are not supported. You cannot modify a native {{site.data.keyword.netezza_short}} and data lake table in a single transaction.
- HIVE DDL/DML operations
- replication services
- time travel queries
- materialized views
