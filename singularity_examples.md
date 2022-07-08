---

copyright:
  years:  2022
lastupdated: "2022-08-07"

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

```
ALTER EXTERNAL DATASOURCE NYCTAXIS3
ON AWSS3
USING (
   BUCKET 'myfancybucket'
);
```

- Show the external data source column values:

```
SHOW EXTERNAL DATASOURCE NYCTAXIS3;
```

- Show the external data source in a cloud connection string format:

```
SHOW EXTERNAL DATASOURCE NYCTAXIS3 VERBOSE;
```

- Create an external `NYCTAXIS31` data source with the remote source `AZUREBLOB`:

```
CREATE EXTERNAL DATASOURCE NYCTAXIS31B
ON AZUREBLOB
USING (
   CONTAINER '????'
   KEY '????'
   ACCOUNT '????'
   BLOBTYPE 'CSSM_KEYBLOB_RAW'
);
```

- Drops the external `NYCTAXIS3` data source:

```
DROP EXTERNAL DATASOURCE NYCTAXIS3 ;
```
