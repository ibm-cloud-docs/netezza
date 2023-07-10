---
copyright:
  years: 2023
lastupdated: "2023-06-05"

keywords: bnr, backup and restore, backup, restore

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}

# Backup and restore with the web console
{: #bnr-webconsole}

With the web console, you can run on demand backups, set, modify, and delete backup schedules, and restore backups.

You can run differential and/or cumulative backups only after you run a full backup first. You can restore differential and/or cumulative backups only after you restore a full backup first.

Schedule times of full, differential and cumulative backups of the same set of databases cannot overlap. You must schedule these backups in 30 minutes intervals.

If you want to back up and restore a specific database, you must ensure that:

- From the *Users and groups* view, you select **Users > Object privileges > Database > GLOBAL > List** to show this database.
- From the *Users and groups* view, you select **Users > Admin privileges > Database > GLOBAL > Backup** to back up this database.
- From the *Users and groups* view, you select **Users > Admin privileges > Database > GLOBAL > Restore** and **Users > Admin privileges > Database > *the name of the database you want to restore* > Restore** to restore this database.

## Running on demand backups
{: #run-backups-ondemand}

1. Go to **Backup and restore > Backup**.
1. Make sure that a destination bucket for the backups is created.

   For more information, see [Creating destination buckets](/docs/netezza?topic=netezza-bnr-overview#create-destinations).   

1. Select a destination bucket for your backup.
1. Select the backup type.

   You can choose a full, differential or cumulative backup type.

1. Specify whether you want to back up all databases or select databases.
1. Click **Back up now**.

## Scheduling backups
{: #schedule-backups}

1. Go to **Backup and restore > Backup**.
1. Make sure that a destination bucket for the backups is created.

   For more information, see [Creating destination buckets](/docs/netezza?topic=netezza-bnr-overview#create-destinations).

1. Select a destination bucket for your backup.
1. Select the backup type.
1. Specify whether you want to back up all databases or select databases.
1. Check the *Schedule for a later time* box.
1. Specify the starting date.
1. Specify the starting hour.
1. Specify the frequency.

   You can choose between daily, weekly, and monthly intervals.

1. Click **Create schedule**.

For more information about scheduled backups, see [Scheduled backups](/docs/netezza?topic=netezza-bnr-overview#scheduled-bnr).

## Modifying scheduled backups
{: #modify-scheduled-backups}

1. Go to **Backup and restore > Backup**.
1. From the *Scheduled backups* section, select a backup.
1. Click **Edit**.
1. Edit backup details.
1. Click **Save**.

## Deleting scheduled backups
{: #delete-scheduled-backups}

1. Go to **Backup and restore > Backup**.
1. From the *Scheduled backups* section, select a backup.
1. Click **Delete**.
1. Confirm your choice.

## Restoring backups
{: #restore-backups}

1. Go to **Backup and restore > Restore**.
1. Select a backup that you want to restore.
1. Click **Restore** or **Select objects**.

## Deleting backups
{: #delete-backups}

You can't manually remove information about backups that were taken.

If you delete your deployment, its backups are deleted automatically within 30 days.

For more information, see [Deleting your deployment and removing your data](/docs/netezza?topic=netezza-deprovisioning).
