---

copyright:
  years:  2023
lastupdated: "2023-09-11"

keywords: data lakehouse, watsonx.data known issues when using nps, netezza data lakehouse, watsonx, watsonx.data, watsonx.data with nps
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

# {{site.data.keyword.lakehouse_short}} known issues
{: #watsonx.data_knownissues}

You might experience the following issues while using {{site.data.keyword.lakehouse_short}} with {{site.data.keyword.netezza_short}}:

- You may see the following error when dropping columns using an alter statement.

  `The following columns have types incompatible with the existing columns in their respective positions : COL3`

  For more information, see [ALTER TABLE](https://ibmdocs-test.dcs.ibm.com/docs/en/SSTNZ3_current?topic=npsscr-alter-table-3).

  #### Workaround:

  Refer [Dropping incompatible column types in ALTER TABLE](https://www.ibm.com/docs/en/watsonx/watsonxdata/1.1.x?topic=watsonxdata-known-issues-limitations#Knwnissulimit2__dl_yms_hfl_2bc)

- **INSERT** is only supported for unpartitioned tables. You will not be able to insert into partitioned iceberg tables created by other engines.

- **CTAS (CREATE TABLE AS SELECT)** within a single SQL statement is not supported when the target table is an iceberg table.

    #### Workaround:
    {: #wrkarnd}

    Create the table and do the insert in separate SQL statements.
