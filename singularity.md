---

copyright:
  years:  2022
lastupdated: "2022-07-07"

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

# {{site.data.keyword.netezza_short}} external data sources
{: #singularity}

**COMMENT: Name TBD**

With {{site.data.keyword.metezza_full}}, you can use external tables to access and query **parquet** files that are stored outside of your database.

{{site.data.keyword.netezza_short}} supports the following external data sources:

- AWS S3
- Azure Blob Storage

External data sources use connection strings to specify how you can access an external system. Each connection string describes where your data is placed and how to authenticate to your data source. Each external data source has a definition (schema), but the actual data exists inside the {{site.data.keyword.netezza_short}} database.

**TIP:**
1. After you create an external datasource definition, you can use **ALTER** statements to modify the external data source columns or **SHOW** statements to view the external data source column values.
1. You can use the *verbose* option with the **SHOW** command. When you run the command, the column values are combined to form the cloud connection string for that external data source.

**COMMENT: Can I get an example command for this?**

Use cases for external data source include:

- X
- X

**COMMET: NEED HIGH-LEVEL EXAMPLES**

To work with external data, you must do the following:

1. Specify bucket details, credentials, and other necessary information to access data that is stored outside {{site.data.keyword.netezza_short}}.
1. Create an external table on a specific AWS bucket.

**COMMENT: 1. AWS only? 2. How relevant is the info from the box note from a client POV?**

## Creating external data sources with **CREATE EXTERNAL DATASOURCE**
{: #creating_externaldatasources_singularity}

External data sources are used to establish connection between storage accounts, and support the first use of data virtualization and data loading.

1. Ensure that you have the following privileges:

- The **CREATE EXTERNAL TABLE** administration privilege.

  The database user who runs the **CREATE EXTERNAL DATASOURCE** command owns the external data source. When you create an external datasource, you must specify the remote source where the external datasource data object is stored.

- The **List** privilege on the database where you are defining the table.

  If the schema where you define the table is not the default schema, you must have the **List** privilege on the schema as well.

1. Run the **CREATE EXTERNAL DATASOURCE** command to create external data sources.

   You cannot use the **INSERT**, **DROP**, **TRUNCATE** and other commands to work with external data sources.

   You can only create external datasource when ENABLE_EXTERNAL_DATASOURCE 

   **COMMENT: WHAT DOES THE LAST SENTENCE MEAN??**

   ```
   CREATE EXTERNAL DATASOURCE <name> on AWSS3 or AZUREBLOB USING ( <external_datasource_options> );
   ```

### **CREATE EXTERNAL DATASOURCE** examples
{: createexamples_singularity}

- The following command creates an external datasource having remote source AWSS3: 

```
CREATE EXTERNAL DATASOURCE NYCTAXIS3 
ON AWSS3 
USING (
   ACCESSKEYID '.....' 
   SECRETACCESSKEY  '...' 
   BUCKET 'myfancybucket' 
   REGION 'US-EAST-1'
);
```

- The following command alters the external datasource to modify columns:

```
ALTER EXTERNAL DATASOURCE NYCTAXIS3 ON AWSS3 USING (BUCKET 'myfancybucket');
```

- The following command shows the external data source column values:

```
SHOW EXTERNAL DATASOURCE NYCTAXIS3;
```

- The following command shows the external data source in a cloud connection string format:

```
SHOW EXTERNAL DATASOURCE NYCTAXIS3 VERBOSE;
```

- The following command creates an external `NYCTAXIS31` data source with the remote source `AZUREBLOB`:

```
CREATE EXTERNAL DATASOURCE NYCTAXIS31B ON AZUREBLOB USING (CONTAINER '????' KEY '????' ACCOUNT '????' BLOBTYPE 'CSSM_KEYBLOB_RAW');
```

- The following command drops the external `NYCTAXIS3` data source:

```
DROP EXTERNAL DATASOURCE NYCTAXIS3 ;
```

### **CREATE EXTERNAL DATASOURCE** syntax
{: #syntax_singularity}

#### AWS S3
{: #s3_singularity}

|Option         |Valid formats  |Description                   |Data type |Distribution  |
|---            |---            |---                           |---       |---           |
|region         |Text           |Region name                   |String    |Mandatory     |
|bucket         |Text           |Bucket name                   |String    |Mandatory     |
|accesskeyid    |Text           |AWS/IBM COS key               |String    |Optionl       |
|secretaccesskey|Text           |AWS/IBM COS secret access key |String    |Optional      |
|multipartsizemb|Text, fixed    |Multi part size; 8MB - 5GB    |String    |Optional      |
|endpoint       |Text           |region URL                    |String    |Optional      |

#### Azure Blob Storage
{: #blob_singularity}

|Option         |Valid formats  |Description                   |Data type |Distribution  |
|---            |---            |---                           |---       |---           |
|key            |Text           |Azure access key              |String    |Mandatory     |
|container      |Text           |Azure container name          |String    |Mandatory     |
|account        |Text           |Azure storage account name    |String    |Mandatory     |
|maxblocks      |Text           |Maximum number of blockc      |Integer   |Optional      |
|blocksizemb    |Text           |Block size; <100 MB           |Integer   |Optional      |
|blobtype       |               |                              |          |              |

**COMMENT: Why is blobtype empty? Is this N/A or an omission?**

## Creating external tables with **CREATE EXTERNAL TABLE**
{: #externaltables_singularity}

With the **CREATE EXTERNAL TABLE** command, you can create an external

## Creating and querying external tables

Can we use the examples from: https://github.ibm.com/Voldemort/nzparquet/blob/master/EXAMPLES.md??
