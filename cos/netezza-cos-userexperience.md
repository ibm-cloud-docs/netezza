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

## Object naming and deletion
{: #obj_naming_del}

**Object naming:** Each object saved in the object store has a prefix `/nps/<instance name>/<dbuuid>/<dsid>`.

**Object deletion:** An asynchronous garbage cleaner performs object deletion, but metadata objects are not automatically deleted.

## How to use object storage
{: #htuos}

### Enable object storage in settings
{: #eosis}

- Navigate to `Settings`.
- Enable `Object Storage`.

Once complete, the message will confirm: `Netezza instance restarted with Object Storage enabled`.

Default storage remains Block even after enabling Object Storage.
{: note}

### Create a database with object storage
{: #cadwos}

- Go to the `Database` page.
- Click **Create Database**.
- Set `Storage Type = Object`.

For more information, see [Creating databases](/docs/netezza?topic=netezza-databases).

### Create a table with object storage
{: #catwos}

- Go to the **Tables** page.
- Click Create Table.
- Choose `Storage Type = Object`.
- You can select **default** only if the database was created with object storage.

For more information, see [Creating tables](/docs/netezza?topic=netezza-create-tables#creating-tables)

Existing tables will remain on Block Storage. To change the system-wide default to object storage, contact support.
{: note}

Additional reference: [SQL syntax for storage type specification](/docs/netezza?topic=netezza-netezzacossql).
