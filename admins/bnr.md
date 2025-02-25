---

copyright:
  years: 2023
lastupdated: "2023-12-06"

keywords: bnr, backup and restore, backup, restore

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}

# Overview
{: #bnr-overview}

{{site.data.keyword.netezza_full}} supports full, differential, and cumulative backups that you might run on demand or according to a schedule.
If you want to run differential and/or cumulative backups, run a full backup first.
If you want to restore differential and/or cumulative backups, restore a full backup first.

You cannot backup (**nzbackup**) and restore (**nzrestore**) external data source objects.
{: note}

## Scheduled backups
{: #scheduled-bnr}

A scheduled backup is a backup of the existing database that runs on a schedule.

You can configure your backup schedule based on the following factors.

- Frequency (in order of priority)

   1. Monthly
   1. Weekly
   1. Daily

- Level (in order of priority)

   1. Full
   1. Differential
   1. Cumulative

If there is a schedule overlap, you are notified about it. You also receive information about which schedule takes precedence and why.
You cannot schedule backups for the same frequency to start at the same time if there is any intersection of databases between the backup schedules.
If there is no preexisting full backup to reference, you cannot perform a differential or cumulative backup.
{: important}

## On demand backups
{: #ondemand-brn}

An on demand (ad hoc) backup is a backup of the existing databases that runs only once and on demand. You can create on demand backups before you do any alterations on your system.

On demand backups support different backup levels:

- Full
- Differential
- Cumulative

## Destination buckets
{: #destination}

To create backups, you must have a destination bucket setup created.

For {{site.data.keyword.netezza_short}}, you can choose between the following destinations.

- Amazon S3
- Azure Blob Storage
- IBM Cloud Object Storage

### Creating destination buckets
{: #create-destinations}

You can create a destination bucket for Amazon S3, Azure Blob Storage, and IBM Cloud Object Storage by using the web console.

#### For Amazon S3
{: #amazon-bucket}

1. Log in to the web console.
1. Go to **Backup and restore > Destinations**.
1. Select `Amazon S3` as your destination bucket.
1. Type a bucket name.
1. Provide an access key ID.
1. Select a region.
1. Type your secret key.
1. Click **Save**.

#### For Azure Blob Storage
{: #azure-bucket}

1. Log in to the web console.
1. Go to **Backup and restore > Destinations**.
1. Select `Azure Blob Storage` as your destination bucket.
1. Type a container name.
   To view the container name, in the Azure portal, go to **Storage accounts -> Containers**.

1. Select a blob type.
1. Select a region.
1. Type an account name.
   To view the account name, in the Azure portal, go to **Storage accounts**.

1. Type your account key.
   To view your account key, in the Azure portal, go to **Storage Accounts > your_account > Access keys > Show keys > key1 > Key**.

1. Click **Save**.

#### For IBM Cloud Object Storage
{: #cos-bucket}

1. Log in to the web console.
1. Go to **Backup and restore > Destinations**.
1. Select `IBM Cloud Object Storage` as your destination bucket.
1. Type a bucket name.
1. Type your access key ID.
1. Type your endpoint URL.
1. Type your secret key.
1. Click **Save**.

### Establishing Private Connectivity between NZSaaS and Storage Account On Azure
{: #epc_nzsaas}

To establish a private connection between NZSaaS and your private storage account, follow these steps:

1. Create an IBM ticket and provide the resource ID of your storage account.
1. IBM will initiate a private endpoint connection request to your storage account.

To approve the private endpoint connection request, follow these steps:

1. Log in to your Azure subscription where your storage account is located.
1. In your storage account, navigate to Security + Networking > Networking.
1. Click on the Private endpoint Connection tab.
1. Select the pending connection request from NZSaaS VNET.
1. Approve the connection request.
1. Go to the NZSaaS web console > Backup and Restore > Destination.
1. Try to add your storage account as a destination.

Contact IBM, if you are still unable to register your storage account
{: note}

#### Egress costs
{: #egress-costs}

Data transfer between regions may incur egress costs. This is an important consideration for managing expenses related to data replication and synchronization across different regions.

Understanding the connections and the associated egress costs is crucial for efficient and cost-effective database management.
