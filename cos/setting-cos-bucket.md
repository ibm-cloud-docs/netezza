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





## Post-Upgrade procedure: Enabling object storage in Netezza
{: #post-upg}

### Log in to the console
{: #log-cons-cos}

- Access the Netezza Console using administrator credentials.
- Navigate to **Settings**.

### Configure object storage bucket
{: #conf-objbuckt}

- Locate the **Object Storage** section.
- Click the button to **Configure AWS S3 (or compliant) bucket**.
- Follow the on-screen instructions to provide bucket details and credentials.

If you prefer to configure the bucket **without credentials** by granting **cross-tenant access** to Netezza, please contact **IBM Support**.
{: note}

### Enable object storage
{: #enable-objstge}

- Once the bucket is successfully configured, the button will change to **Enable Object Storage**.
- Click **Enable Object Storage**.


- This operation will **restart the Netezza database**, resulting in **temporary downtime**.
- All console operations will be **suspended** during this process.
- You will be unable to navigate to other pages or perform any actions until the operation completes.
{: note}

### Wait for synchronization
{: #wait-sync-cos}

- After configuring the bucket, **wait at least 2 minutes** before enabling object storage.
- This wait is **mandatory** to allow settings to synchronize across Netezza processes.

Once enabled, **Object Storage cannot be disabled** via the console or command-line tools. To revert or modify object storage settings, contact **IBM Support**.
{: note}
