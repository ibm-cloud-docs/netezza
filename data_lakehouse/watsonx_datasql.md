---

copyright:
  years:  2023
lastupdated: "2023-08-23"

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

# Watsonx.data SQL commands
{: #sqlcommands_watsonx.data}

With 11.2.2.9 release, the following SQL commands and functionalities are supported with watsonx.data. For more information, see:

- [CREATE DATABASE](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-database-2)
- [CREATE EXTERNAL DATASOURCE](https://www.ibm.com/docs/en/netezza?topic=tables-create-external-datasource-command) **draft comment: no info provided in the box note. Doesn't look like to be supported in 11.2.2.9. TBD with Brajesh**
- [CREATE GLOBAL TEMPORARY TABLE](https://www.ibm.com/docs/en/netezza?topic=mgtt-create-global-temporary-table-2) **draft comment: "temp tables only in NETEZZA_SCHEMA" - TBC with Brajesh/Mike -- do we mean temporary tables are only supported in NETEZZA_SCHEMA?**
- [CREATE TEMPORARY TABLE] **draft comment: "temp tables only in NETEZZA_SCHEMA" - TBC with Brajesh/Mike -- do we mean temporary tables are only supported in NETEZZA_SCHEMA?**
- [CREATE SCHEMA](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-schema-2)
- [CREATE TABLE](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-table-2)
- [DESCRIBE TABLE](https://ibmdocs-test.dcs.ibm.com/docs/en/SSTNZ3_current?topic=reference-describe-table) **draft comment: link to updated to prod**
- [SELECT FROM](https://www.ibm.com/docs/en/netezza?topic=npsscr-select-retrieve-rows-2)
- [SHOW SCHEMA FOR TABLE](https://www.ibm.com/docs/en/netezza?topic=npsscr-show-schema-2)
- authentication and authorization for HIVE Kerberos, DLH (apache ranger)
- AUTOMAINT
- backup and restore
- replication
- sequence
- storage
- supported data types

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
- multi-table transactions
- HIVE DDL/DML restrictions
- time travel support
- Views/Mviews
