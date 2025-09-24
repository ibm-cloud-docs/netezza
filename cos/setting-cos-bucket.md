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
{: #cloudobjectstorage}

## Enable object storage on AWS
{: #enable_objstrge}

### Prepare your S3 bucket
{: #prep_bkt}

- Create an **Amazon S3 bucket** with **public access disabled**.

### Add COS bucket in console
{: #prep_bkt}

1. Log in to your console account.
2. Navigate to **Settings** via the ☰ **Menu Icon**.
3. Scroll down and click **Add COS bucket**.
4. Provide the following details:
   - **Destination**: Amazon AWS or IBM Cloud
   - **Region**: Based on your credentials
   - **Access Key ID** and **Secret Key**
   - **Bucket Name**

5. Wait **30 seconds** for bucket info to sync across pods.
6. Once available, click **Enable COS**.

## Configure in Netezza Console
{: #config_netezza_console}

1. Log in to the **Netezza Console** using administrator credentials.
2. Go to **Settings** → **Object Storage**.
3. Click **Configure AWS S3 (or compliant) bucket**.
4. Enter the required bucket details and credentials.
5. Wait **2 minutes** for settings to sync.
6. Click **Enable Object Storage**.

This will **restart the Netezza database**, causing **temporary downtime**.
{: note}

Once object storage is enabled, it **cannot be disabled**.
{: note}
