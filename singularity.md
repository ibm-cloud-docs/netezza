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

# {{site.data.keyword.netezza_short}} singularity
{: #singularity}

**COMMENT:**

1. Name TBD
1. Can you access data from S3 only?

With {{site.data.keyword.netezza_full}}, you can run different types of analytics on the fly to guide better decisions without having to import the data directly into your database.


If you are working with external data sources, you can use {{site.data.keyword.netezza_short}} to access and analyze **.parquet** files that are stored on on AWS Simple Cloud Storage (S3) or AZURE remote sources.


## Setting up
{: #settingupsingularity}

To query or load external data, do the following steps:

1. Specify bucket details, credentials, and other necessary information to access data that is stored outside {{site.data.keyword.netezza_short}}.
1. Create an external table on a specific AWS bucket.

## Using external tables
{: #externaltablessingularity}

An external table points to data that is located in AWS S3. External tables are used to read data from files or write data to files.

Each external table specifies the parameters (connection string) that are needed to connect to a specific database. For example, username, password, the location of the database, or the timeout duration. You can include authentication information for the database in the data source connection by creating a sign on.

Data sources represent connection string information that describes where your data is placed and how to authenticate to your data source.



External data sources have schemas (definitions), but the actual data exists inside the {{site.data.keyword.netezza_short}} database.

External datasources are maintained are specific to every database. After you create the external datasource definition, you can use ALTER statements to modify the external datasource columns or use SHOW statement to view the external datasource column values. Additionally, Netezza provides a verbose option too for the SHOW statement which combines the column values to form the cloud connection string for that external datasource. 

## External data source
{: #externaldatasource_singularity}

Data sources represent connection string information that describes where your data is placed and how to authenticate to your data source. You can use external datasources to access files of various format like .parquet that are stored on S3 or AZURE remote sources. An external datasource has a definition, also called its schema, but the actual data exists inside the Netezza system database. External datasources are maintained are specific to every database. After you create the external datasource definition, you can use ALTER statements to modify the external datasource columns or use SHOW statement to view the external datasource column values. Additionally, Netezza provides a verbose option too for the SHOW statement which combines the column values to form the cloud connection string for that external datasource. 

### Creating external data sources with **CREATE EXTERNAL DATASOURCE**
{: #creating_externaldatasources_singularity}

External data source defines the location of the external database and the credentials to connect to it. External data sources are used to establish connectivity and support the primary use case of data virtualization and data load by using {{site.data.keyword.netezza_short}}.

1. Ensure that you have the following privileges:

- The **CREATE EXTERNAL TABLE** administration privilege.

  The database user who runs the **CREATE EXTERNAL DATASOURCE** command owns the external data source. When you create an external datasource, you must specify the remote source where the external datasource data object is stored.

- The **List** privilege on the database where you are defining the table.

  If the schema where you define the table is not the default schema, you must have the **List** privilege on the schema as well.

1. Run the **CREATE EXTERNAL DATASOURCE** command to create external data sources.

   You can only create external datasource when ENABLE_EXTERNAL_DATASOURCE 

   **COMMENT: WHAT DOES THE LAST SENTENCE MEAN??**

```
CREATE EXTERNAL DATASOURCE <name> on AWSS3 or AZUREBLOB USING ( <external_datasource_options> );
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

## External datasource examples
{: #examples_singularity}
