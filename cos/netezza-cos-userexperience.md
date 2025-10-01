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

1. Login to the Console
2. Navigate to `Settings`.
3. Locate Object Storage Settings
4. Find the section related to Object Storage.
5. Configure AWS S3 (or Compatible) Bucket
6. Click the button to configure your storage bucket and follow the on-screen instructions.

    If you prefer to configure the bucket without credentials by granting cross-tenant access to Netezza, contact IBM Support for assistance.
    {: note}

7. Once the bucket is configured, the button will change to **Enable Object Storage**.

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
