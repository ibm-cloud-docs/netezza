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

## Enable object storage
{: #enable_objstrge}

### Prepare your bucket
{: #prep_bkt}

- Create an **Amazon S3 bucket** or **Azure bucket** with **public access disabled**.

## Configure in Netezza Console
{: #config_netezza_console}

1. Log in to the Netezza Console using administrator credentials.
2. Navigate to Settings → Object Storage.
3. Click `Configure Object Storage` Bucket.

    ### AWS S3 configuration options:
    {: #awss3conf_options}

    **Credential-Based Access (Default)**
    - Provide your AWS access credentials (`Access Key ID` and `Secret Access Key`).
    - Supported for both Fully Managed and SaaS systems.

    **IAM Role-Based Access**
    - Check the **Use IAM Role** checkbox on the configuration form.
    - **For SaaS/Fully Managed systems only:**
      - After checking the IAM option, additional instructions will be displayed.
      - Follow the on-screen instructions to update your AWS account policy.
      - This step grants Netezza the necessary permissions to access your bucket.
    

      IAM role-based access is currently supported for AWS S3 only. Azure Blob Storage requires credential-based access.
      {: note}

    ### Azure Blob storage configuration:
    {: #azureblobstor_conf}

    - Provide your Azure storage account credentials.
    - Currently supports credential-based access only.
    - IAM access is not supported for Azure at this time.

4. Enter the required bucket details and credentials, based on your chosen provider:
    - **Destination**: Select the appropriate storage type (e.g., Azure Blob Storage or Amazon AWS S3).
    - **Bucket/Container name**: Provide the name of the bucket (AWS) or container (Azure).
    - **Region**: Specify the region associated with your storage.
    - **Authentication details**:
        - For **Azure**: `Account Name` and `Account Key`.
        - For **AWS**: `Access Key ID` and `Secret Key`.
    - Blob Type (Azure only): Choose `block` for blob type.
5. Wait **2 minutes** for the settings to synchronize.
6. Click **Enable Object Storage** to activate the configuration.

This will **restart the Netezza database**, causing **temporary downtime**.
{: note}

Once object storage is enabled, it **cannot be disabled**.
{: note}

## Configuration summary
{: #config_summary_table}

| Storage Type | Deployment Type | Credential Access | IAM Access | Remarks |
|--------------|-----------------|-------------------|------------|-------|
| AWS S3 | SaaS/Fully Managed | ✅ Supported | ✅ Supported | IAM requires policy update |
| AWS S3 | BYOC | ✅ Supported | ❌ Not Supported | Use credential-based access only |
| Azure Blob Storage | All | ✅ Supported | ❌ Not Supported | Credential-based access only |
| S3-Compatible | All | ✅ Supported | Varies | Depends on provider compatibility |
