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

# User experience
{: #user_exp}

Netezza Performance Server offers seamless integration with Native Cloud Object Storage (NCOS), enabling a straightforward path for adoption. To create a table that utilizes object storage, users follow the standard table creation process with storage type selection or using database or system level settings.

## How to enable object storage
{: #htuos}

1. Login to the Console.
2. Navigate to `Settings`.
3. Locate Object Storage Settings.
4. Configure Storage Bucket (AWS S3 or S3-compatible storage or Azure Blob storage).
5. Click the button to configure your storage bucket and follow the on-screen instructions. For details, see [Setting up a cloud object storage bucket](/docs/netezza?topic=netezza-cloudobjectstorage).

    If you prefer to configure the bucket without credentials by granting cross-tenant access to Netezza, contact IBM Support for assistance.
    {: note}

    #### AWS S3 configuration options:

    **Credential-Based Access (Default)**
    - Provide your AWS access credentials (`Access Key ID` and `Secret Access Key`).
    - Supported for both Fully Managed and BYOC (Bring Your Own Cloud) systems.

    **IAM Role-Based Access**
    - Check the **Use IAM Role** checkbox on the configuration form.
    - **For Fully Managed systems only:**
      - After checking the IAM option, additional instructions will be displayed.
      - Follow the on-screen instructions to update your AWS account policy.
      - This step grants Netezza the necessary permissions to access your bucket.
    - **For BYOC systems:**
      - No additional policy update is required.
      - IAM access will work automatically with your existing configuration.

    > **Note:** IAM role-based access is currently supported for AWS S3 only. Azure Blob Storage requires credential-based access.

    #### Azure Blob Storage Configuration:
    - Provide your Azure storage account credentials.
    - Currently supports credential-based access only.
    - IAM access is not supported for Azure at this time.

6. Once the bucket is configured, the button will change to **Enable Object Storage**.

**Important**

- During the enabling process, all console operations will be suspended. You will not be able to navigate or perform any other actions.
- After configuring the bucket, wait for sometime before enabling object storage. This delay ensures proper synchronization between Netezza processes.
- Once enabled, object storage cannot be disabled using the console or command-line tools. To disable, contact IBM Support.

## How to use object storage
{: #htuos}

### Create a database with object storage
{: #cadwos}

- Go to the `Database` page.
- Click **Create Database**.
- Set `Storage Type` to `Object`.

Example:
 ```bash
CREATE DATABASE <database_name> STORAGETYPE 'OBJECT';
```
{: codeblock}

- For detailed instructions on creating databases using the web console, see [Creating databases](/docs/netezza?topic=netezza-databases).
- For a complete reference on SQL commands, see [CREATE DATABASE](https://www.ibm.com/docs/en/netezza?topic=nscr-create-database).

### Create a table with object storage
{: #catwos}

- Go to the **Tables** page.
- Click Create Table.
- Set `Storage Type` to `Object`.

Example:
 ```bash
CREATE TABLE <table_name> (
    <column_name> <data_type>
) STORAGETYPE 'OBJECT';
```
{: codeblock}

- For detailed instructions on creating databases using the web console, see [Creating tables](/docs/netezza?topic=netezza-create-tables#creating-tables).
- For a complete reference on SQL commands, see [CREATE TABLE](https://www.ibm.com/docs/en/netezza?topic=nscr-create-table).


Existing tables will remain on Block Storage. To change the system-wide default to object storage, contact support.
{: note}

Additional reference: [SQL syntax for storage type specification](/docs/netezza?topic=netezza-netezzacossql).

## Object naming and deletion
{: #obj_naming_del}

**Object naming:** Each object saved in the object store has a prefix `/nps/<instance name>/<dbuuid>/<dsid>`.

**Object deletion:** An asynchronous garbage cleaner performs object deletion, but metadata objects are not automatically deleted.
