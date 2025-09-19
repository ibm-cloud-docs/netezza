---

copyright:
  years: 2025
lastupdated: "2025-09-19"

keywords: netezza cos

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

# Setting up a cloud object storage bucket
{: #netezzacosobjstrge_bkt}

## Prerequisites
{: #prereq}

Before enabling object storage on AWS, ensure you have:

- Created an S3 bucket without public access.

### Access the settings page
{: #access_settings}

1. Sign in to the system.
2. Navigate to the settings page.

### Add a COS bucket
{: #add_cos_bkt}

1. At the bottom of the page, click on the **Add COS bucket** option.
2. Specify the following details:
	* **Destination**: Choose either Amazon AWS or IBM Cloud.
	* **Region**: Select a region associated with your credentials.
	* **Access Key ID**: Enter your access key ID.
	* **Secret Key**: Enter your secret key.
	* **Bucket Name**: Enter the name of your public cloud storage bucket resource.

### Wait for bucket sync and enable COS
{: #wait_bkt_sync}

1. Wait for 30 seconds to allow the bucket information to sync across pods.
2. Once the bucket is added successfully, the option to **Enable COS** will become available.
3. Click on **Enable COS** to enable object storage.

    Enabling object storage requires restarting the system. Once object storage is enabled, it cannot be disabled.
    {: note}
