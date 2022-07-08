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

# Querying  data from data lakes
{: #singularity}

With {{site.data.keyword.netezza_full}}, you can use external tables to access and query **parquet** files that are stored outside of your database in data lakes.

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

**COMMET: NEED HIGH-LEVEL EXAMPLES, like loading and cleaning your data in one pass and writing the cleaned result into Netezza? Joining tables with frequently changing data from an external data source. By querying the external data source directly, you don't need to reload the data into NPS storage every time it changes.**

To work with external data, you must do the following:

1. Specify bucket details, credentials, and other necessary information to access data that is stored outside {{site.data.keyword.netezza_short}}.
1. Create an external table on a specific AWS bucket.

**COMMENT: 1. AWS only? 2. How relevant is the info from the box note from a client POV?**

## Creating external data sources with **CREATE EXTERNAL DATASOURCE**
{: #creating_externaldatasources_singularity}

You can create external data sources with the **CREATE EXTERNAL TABLE** command.

External data sources are used to establish connection between storage accounts, and support the first use of data virtualization and data loading.

1. Ensure that you have the following privileges:

- The **CREATE EXTERNAL TABLE** administration privilege.

  The database user who runs the **CREATE EXTERNAL DATASOURCE** command owns the external data source. When you create an external datasource, you must specify the remote source where the external datasource data object is stored.

- The **List** privilege on the database where you are defining the table.

  If the schema where you define the table is not the default schema, you must have the **List** privilege on the schema as well.

1. If **ENABLE_EXTERNAL_DATASOURCE** is not set to `1`, set it.

   ```
   SET ENABLE_EXTERNAL_DATASOURCE = 1;
   ```

1. Run the **CREATE EXTERNAL DATASOURCE** command to create external data sources.

   The **INSERT**, **DROP**, **TRUNCATE** and other commands do not work with external data sources.

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

You can create an external tables with the **CREATE EXTERNAL TABLE** command.

You can use external tables build on external datas ources. External data sources represent connection string information that describes where your data is placed and how to authenticate to your data source. -- REPETITION OF INFO?

With this we will mention the object file path and format of the file and all other connection string information will be fetched from external datasource the external table is build on. 

**COMMENT: This needs clarification**

1. Ensure that **ENABLE_EXTERNAL_DATASOURCE** is set to `1`.

**COMMENT: Is there a command to verify this or do you have to run the SET command every time?**

1. Create an external data source.

   Ensure that you have the correct privileges as mentioned in (Creating external data sources with **CREATE EXTERNAL DATASOURCE**)

```
CREAT1E EXTERNAL DATASOURCE NYCTAXIS3 
ON AWSS3 
USING (
   ACCESSKEYID '.....' 
   SECRETACCESSKEY  '...' 
   BUCKET 'myfancybucket' 
   REGION 'US-EAST-1'
);
```

1. Create an external table.

```
CREATE EXTERNAL TABLE nyc_taxi 
ON NYCTAXIS3 
USING ( 
   DATAOBJECT ('/example.parquet') 
   format 'PARQUET' 
);
```

## Creating and querying external tables

**COMMENT: Can we use the examples from: https://github.ibm.com/Voldemort/nzparquet/blob/master/EXAMPLES.md?? Especially how to get data from a private vs public bucket. How to save changed data? Optimisation seems to be the main selling point, why not showcase this better, for example by providing examples how to filter, display select columns, see how the file is structured?**
