---

copyright:
  years: 2025
lastupdated: "2025-08-05"

keywords: rest catalog

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:tip: .tip}
{:important: .important}
{:note: .note}
{:codeblock: .codeblock}
{:screen: .screen}
{:caption: .caption}

# Managing iceberg tables with IBM Netezza REST catalog
{: #netezza_manage_iceberg}

## Overview
{: #overview_rest}

The **REST catalog** feature in IBM Netezza enables users to manage an integrated iceberg catalog without requiring external services like AWS Glue. This simplifies lakehouse deployments by leveraging built-in capabilities.

## Enabling REST catalog
{: #enable_rest}

To enable the REST catalog feature, follow these steps:

1. **Prepare object storage**
   Ensure you have access to object storage to hold Iceberg table data. Supported options include:
   - **AWS S3**
   - **IBM Cloud Object Storage (COS)**

2. **Access web console**
   Navigate to the **IBM Netezza Web Console**.

3. **Enable REST catalog**
   - Go to the **Settings** tab.
   - Toggle the **REST catalog** switch to enable the feature.

4. **Configure storage details**
   Provide the following information:
   - **Bucket Name**
   - **Access Credentials**
   - **Region**
   - **Endpoint** (required only for IBM COS)

5. **Deploy configuration**
   Click **Deploy** to initiate setup.

   Deployment includes provisioning of an additional **20 GiB** of persistent storage.
   {: note}

6. **Monitor deployment status**
   - Visit the **Settings** page to view deployment progress.
   - Status updates are displayed via **notification pop-ups**.

## Creating a lakehouse database
{: #lakehouse_db}

Once the REST catalog is enabled:

1. **Navigate to databases page**
   Open the **Databases** section in the web console.

2. **Create lakehouse database**
   - Select **Lakehouse** as the database type.
   - Choose **REST catalog** from the catalog type options.

3. **Provide required details**
   - For AWS S3-based Lakehouse, enter the **public endpoint** for your region.
   - Follow the on-screen instructions to complete database creation.

## Creating tables
{: #creating_tables}

After the Lakehouse database is created, use the standard table creation workflow to define and manage Iceberg tables.
