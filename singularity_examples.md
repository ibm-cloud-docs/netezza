---

copyright:
  years:  2022
lastupdated: "2022-12-09"

keywords: singularity, parquet, data lake, netezza singularity, parquet files
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

## Examples
{: #examples_singularity}

- Alter the external datasource to modify columns:

```sql
ALTER EXTERNAL DATASOURCE NYCTAXIS3
ON AWSS3
USING (
   BUCKET 'myfancybucket'
);
```
{: codeblock}

- Show the external data source column values:

```sql
SHOW EXTERNAL DATASOURCE NYCTAXIS3;
```
{: codeblock}

- Show the external data source in a cloud connection string format:

```sql
SHOW EXTERNAL DATASOURCE NYCTAXIS3 VERBOSE;
```
{: codeblock}

- Create an external `NYCTAXIS31` data source with the remote source `AZUREBLOB`:

```sql
CREATE EXTERNAL DATASOURCE NYCTAXIS31B
ON AZUREBLOB
USING (
   CONTAINER '????'
   KEY '????'
   ACCOUNT '????'
   BLOBTYPE 'CSSM_KEYBLOB_RAW'
);
```
{: codeblock}

- Drops the external `NYCTAXIS3` data source:

```sql
DROP EXTERNAL DATASOURCE NYCTAXIS3 ;
```
{: codeblock}
