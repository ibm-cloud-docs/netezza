---
copyright:
  years: 2022
lastupdated: "2022-12-09"

keywords: bnr, backup and restore, backup, restore, backup flow

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}

# Configuring recommended backup flows
{: #configure-flow}

A backup schedule is to perform the following types of backups.

- Monthly full backups of all the databases.
- Weekly full backups of all the databases.
- Daily differential backups of all the databases.
{: shortdesc}

To set up a recommended backup schedule, follow the steps.

1. Log in to the web console.
1. Go to **Backup and restore > Backup**.
1. Make sure that destination buckets for your backups are created.

   For more information, see [Creating destination buckets](/docs/netezza?topic=netezza-bnr-overview#create-destinations).  

1. Configure your monthly schedule:

   1. Select a destination bucket for your backup.
   1. Select *Full* for the backup type.

      The first backup must be a full one so that any subsequent differential backup has a reference.
      {: important}

   1. Select the databases that you want to back up.
   1. Check the *Schedule for a later time* box.
   1. Specify the starting date.
   1. Specify the starting hour.
   1. Select *Monthly* when you specify the frequency.
   1. Click **Create schedule**.

1. Configure your weekly schedule:

   1. Select a destination bucket for your backup.
   1. Select *Full* for the backup type.
   1. Select the databases that you want to back up.
   1. Check the *Schedule for a later time* box.
   1. Specify the starting date.

      Select a date that is a week after the monthly start date and time.

   1. Specify the starting hour.
   1. Select *Weekly* when you specify the frequency.
   1. Click **Create schedule**.

1. Configure your daily schedule:

   1. Select a destination bucket for your backup.
   1. Select *Differential* for the backup type.
   1. Select the databases that you want to back up.
   1. Check the *Schedule for a later time* box.
   1. Specify the starting date.

      Select a date that is a day after the monthly start date and time.

   1. Specify the starting hour.
   1. Select *Daily* when you specify the frequency.
   1. Click **Create schedule**.
