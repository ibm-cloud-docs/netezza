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

If you are working with external data, you can use {{site.data.keyword.netezza_full}} external tables to access and analyze structured and unstructured data in the **.parquet** format from AWS Simple Cloud Storage (S3).

Run different types of analytics on the fly to guide better decisions without having to import the data directly into your {{site.data.keyword.netezza_short}} database.

## Setting up
{: #settingupsingularity}

To query or load external data, do the following steps:

1. Specify bucket details, credentials, and other necessary information to access data that is stored outside {{site.data.keyword.netezza_short}}.
1. Create an external table on a specific AWS bucket.

## Using external tables
{: #externaltablessingularity}

External tables are used to read data from files or write data to files.

Data sources represent connection string information that describes where your data is placed and how to authenticate to your data source. You can use external datasources to access files of various format like .parquet that are stored on S3 or AZURE remote sources. An external datasource has a definition, also called its schema, but the actual data exists inside the Netezza system database. External datasources are maintained are specific to every database. After you create the external datasource definition, you can use ALTER statements to modify the external datasource columns or use SHOW statement to view the external datasource column values. Additionally, Netezza provides a verbose option too for the SHOW statement which combines the column values to form the cloud connection string for that external datasource. 
