---

copyright:
  years:  2025
lastupdated: "2025-06-30"

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

# Supported SQL commands
{: #sqlcommands_watsonx.data}

The following SQL commands and functionalities are supported with lakehouse database/tables.
For more information, see:

- [CREATE DATABASE](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-database-2)
- [CREATE SCHEMA](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-schema-2)
- [CREATE TABLE](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-table-2)
- [DESCRIBE](https://www.ibm.com/docs/en/netezza?topic=reference-describe)
- [SELECT QUERIES](https://www.ibm.com/docs/en/netezza?topic=npsscr-select-retrieve-rows-2)
- [CTAS](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-table-as-2)
- [DROP SCHEMA](https://www.ibm.com/docs/en/netezza?topic=npsscr-drop-schema-2)
- [TRUNCATE](https://www.ibm.com/docs/en/netezza?topic=npsscr-truncate-2)
- [DELETE](https://www.ibm.com/docs/en/netezza?topic=npsscr-delete-2)
- [UPDATE](https://www.ibm.com/docs/en/netezza?topic=npsscr-update-2)
- Backup and restore is only supported for the login and reference information, not the data itself.
- AWS S3, IBM COS, minIO data sources are available as storage options or a data lake database.
- Time travel on Iceberg tables

The following functionalities are not supported:

- Creation of lakehouse native objects (for example materialized views and sequences) in schemas other than NETEZZA_SCHEMA
- Queries which update the contents of tables (Insert, Merge)
- Accessing data lake tables that were created by using LZ4 compression format
- Multi-table transactions
- `timestamptz` and `UUID` data types
