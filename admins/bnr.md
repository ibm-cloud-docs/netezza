---

copyright:
  years: 2022
lastupdated: "2022-12-09"

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

{{site.data.keyword.netezza_full}} supports full, differential, and cumulative backups that can be performed on demand or according to a schedule.

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
1. Go to the **Backup and restore > Destinations**.
1. Select `Amazon S3` as your destination bucket.
1. Type a bucket name.
1. Provide an access key ID.
1. Select a region.
1. Type your secret key.
1. Click **Save**.

#### For Azure Blob Storage
{: #azure-bucket}

1. Log in to the web console.
1. Go to the **Backup and restore > Destinations**.
1. Select `Azure Blob Storage` as your destination bucket.
1. Type a container name.
1. Select a blob type.
1. Select a region.
1. Type an account name.

   You can found the account name in the Azure portal, under **Storage accounts**.

1. Type your account key.

   In the Azure portal, goto **Storage Accounts > your_account > Access keys > Show keys > key1 > Key**.

1. Click **Save**.

#### For IBM Cloud Object Storage
{: #cos-bucket}

1. Log in to the web console.
1. Go to the **Backup and restore > Destinations**.
1. Select `IBM Cloud Object Storage` as your destination bucket.
1. Type a bucket name.
1. Type your access key ID.
1. Type your endpoint URL.
1. Type your secret key.
1. Click **Save**.
