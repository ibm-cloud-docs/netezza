---

copyright:
  years: 2025
lastupdated: "2025-01-04"

keywords: web console, administering web console, administering, pnr, pause and resume, netezza pause and resume, pause and resume by using netezza web console, pausing and resuming netezza performance server with the web console, netezza auto-pause and resume, netezza autopause and resume, netezza auto-pause and resume with the web console, scaling, netezza scaling with the web console, compute scaling, smartscaling, netezza smartscaling, netezza performance server smartscaling

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}
{:screen: .screen}

# Scaling
{: #scaling-console}

On the *Workload patterns* page, you can initiate, edit, or delete your **Scaling** operations and check their **History**.

On AWS, a new entry-level workload contour called NC-Start is available to support lower volume BI and UAT workloads. You can scale this instance to NC0 performance profiles seamlessly as your workload increases. For NC-Start specifically, you can initiate on-demand storage and contour scaling. The rest of the procedures are applicable for other workload contours.

You can now perform scaling (compute/storage) even when the system is in a paused state. Before scaling, the system will automatically resume to bring it online.This resume action will appear in the Pause/Resume history for reference.
{:note: .note}

On AWS, storage scaling has a cool-down period of six hours.

Within six hours of the cool-down period, you can perform contour scaling from NC-Start to NC0 with the selected storage values. The following ranges are always allowed:

- NC-Start 400 GB to NC0 2400 GB
- NC-Start 800 GB to NC0 4800 GB
- NC-Start 1200 GB to NC0 7200 GB

After six hours of cool-down period passes and you want to perform contour scaling from NC-Start to NC0, you can select any storage values from the available list.
{:note: .note}

## Initiating on-demand storage scaling for NC-Start
{: #ncstart-scalingstorage-console-ondemand}

1. Go to **Workload patterns**.
1. Click **Scaling**.
1. Type the name for your scaling job.
1. Move the **Storage density** slider to the required position, or select from the drop-down.
1. Click **Scale**.

## Initiating on demand contour scaling for NC-Start
{: #ncstart-scalingcontour-console-ondemand}

1. Go to **Workload patterns**.
1. Click **Scaling**.
1. Type the name for your scaling job.
1. Select **Scale up to NC0** checkbox.
1. Move the Netezza unit (NZU) slider to the required position, or select from the drop-down.
1. Move the **Storage density** slider to the required position, or select from the drop-down.
1. Click **Scale**.

On clicking **Scale**, you might get the following error message due to lack of free space in the current storage.

```Failed to create scheduler: Couldn't initiate scaling due to lack of free space in the current storage. Refer to documentation for next steps or contact IBM support.```

You can choose one of the following options to overcome this issue.

- [Option 1](#scaling-option1)
- [Option 2](#scaling-option2)

[Option 2](#scaling-option2) where storage scaling must be performed, might add additional cost because after storage scaling within `nc-start`, the minimum storage changes.
{: important}

### Option 1
{: #scaling-option1}

1. Free up space in the current storage by performing database maintenance by grooming or taking backup (or both) of selected large tables.
1. Delete the tables before profile scaling to bring down storage utilization.
1. Take a backup of data to a different storage like NFS server.
1. Delete the data from DB after successful backup and restore them after scaling is complete.

### Option 2
{: #scaling-option2}

Expand current storage before profile scaling.

This option requires a higher storage on NC0 profile.
For example, if current storage is scaled from 400 GB to 800 GB, the target storage on NC0 profile will be 4800 GB minimum.
If current storage is scaled from 800 GB to 1200 GB, then target storage on NC0 profile will be 7200 GB minimum.
Storage shrinking is not supported. You can't do storage scaling from higher to lower value.
{: important}

## Initiating on demand scaling
{: #scaling-console-ondemand}

1. Go to **Workload patterns**.
1. Click **Scaling**.
1. Type the name for your scaling job.
1. Move the Netezza unit (NZU) slider to the required position, or select from the drop-down.
1. Click **Scale**.

## Scheduling scaling
{: #scaling-console-scheduled}

1. Go to **Workload patterns**.
1. Click **Scaling**.
1. Type the name for your scaling job.
1. Select the **Schedule for a later time** checkbox.
1. Select the required parameters.
1. Click **Scale**.

## Editing scheduled scaling
{: #scaling-console-editing}

1. Go to **Workload patterns > Schedules**.
1. Select the operation that you want to edit.
1. Click **Edit**.
1. Select the required parameters.
1. Click **Save**.

## Deleting scheduled scaling
{: #scaling-console-deleting}

1. Go to **Workload patterns > Schedules**.
1. Select the operation that you want to delete.
1. Click **Delete**.
1. Click **Delete**.

## Checking scaling history
{: #scaling-console-history}

1. Go to **Workload patterns > History**.
1. Depending on your requirements, perform one of the following actions:

   - Filter by **Time completed** or **Owner**.

   - In **Find history**, type the name of the operation.

   - Filter by **Scheduler type**. The two options available are:
      - Ad hoc: Schedules executed within 5 minutes of creation.
      - Scheduled: Schedules executed at a later time.


## Viewing suspended expansion
{: #view-suspended-expansion}

After Ops team confirms the availability of nodes for expansion, you can see the created expansion in **Suspended** state under **Workload Patterns -> Scaling**.
If a new scheduler is created when existing scheduler is in **Suspended** state, then the newly created scheduler also goes into **Suspended** state.
After confirmation from Ops team, you can retry or delete the existing **Suspended** schedulers in the same order of their creation.
