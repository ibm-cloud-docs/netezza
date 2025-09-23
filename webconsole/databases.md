---

copyright:
  years: 2024
lastupdated: "2024-10-14"

keywords: web console, netezza web console, ui

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}
{:codeblock: .codeblock}
{:screen: .screen}
{:caption: .caption}

# Databases
{: #databases}

You can access database information by using the web console.
{: shortdesc}

## Information about databases
{: #db-info}

|Value          | Description                      |
|:--------------|:---------------------------------|
|Name       | Specifies the name of the database.|
|Default schema | Specifies the deafult schema.|
|Owner          | Specifies the owner of the database.|
|User tables    | Specifies the number of tables that are created in the database.|
|Character set| Specifies the character set for the database.|
|Created on | Specifies when the database was created.|
{: caption="The table lists database-related values and their definitions." caption-side="bottom"}

## Creating databases
{: #create-db}

1. Go to **Databases**.
2. Click **Create database** after selecting following options:
   - Netezza
   - Lakehouse
3. Add all inputs based on the option selected. Type a name for the database.
   If the name contains special characters, enclose it in double quotation marks. The dot character (".") is not supported.
4. If the database type is `Netezza`, select a storage type from the drop-down: **Block**, **Default**, or **Object**.

      Specify the default storagetype to be used for objects created within the database. For more information on storagetypes, see [Default storage type](/docs/netezza?topic=netezza-netezzacossql#netezzacossql_defstortyp).
      {: note}

5. Optional: Specify the retention time interval (in days) for the database.
   You can select between 1 day and up to 99 days.
   For more information on retention time interval and time travel, see [{{site.data.keyword.netezza_short}} time travel](/docs/netezza?topic=netezza-enablingdisabling_tt).
6. Click **Create**.

## Assigning owners to databases
{: #assigning_db}

1. Go to **Databases**.
1. Select the database for which you want to assing an owner.
1. From the overflow menu, click **Assign owner**.
1. Select an owner for the database.
1. Click **Assign**.

## Renaming databases
{: #renaming_db}

1. Go to **Databases**.
1. Select the database that you want to rename.
1. From the overflow menu, click **Rename**.
1. Type a new name for the database.
   If the name contains special characters, enclose it in double quotation marks. The dot character (".") is not supported.
1. Click **Rename**.

## Updating retention time interval (time travel) for databases
{: #updating_retention_db}

1. Go to **Databases**.
1. Select the database for which you want to update the retention time interval.
1. From the overflow menu, click **Update interval**.
1. Type a retention time interval.
   You can select between 1 day and up to 99 days, or zero to alter a temporal database to nontemporal.
   For more information on retention time interval and time travel, see [{{site.data.keyword.netezza_short}} time travel](/docs/netezza?topic=netezza-enablingdisabling_tt).
1. Click **Save**.

## Viewing privileges for databases
{: #viewing_privileges_db}

1. Go to **Databases**.
1. Select the database which privileges you want to view.
1. From the overflow menu, click **Show privileges**.
   A list of privileges is now displayed.

## Dropping databases
{: #dropping_db}

1. Go to **Databases**.
1. Select the database that you want to drop.
1. From the overflow menu, click **Drop**.
1. Confirm your choice by clicking **Drop**.
