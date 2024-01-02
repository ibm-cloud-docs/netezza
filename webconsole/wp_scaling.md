---

copyright:
  years: 2023
lastupdated: "2024-01-02"

keywords: web console, administering web console, administering, pnr, pause and resume, netezza pause and resume, pause and resume by using netezza web console, pausing and resuming netezza performance server with the web console, netezza auto-pause and resume, netezza autopause and resume, netezza auto-pause and resume with the web console, scaling, netezza scaling with the web console, compute scaling, smartscaling, netezza smartscaling, netezza performance server smartscaling

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}

# Scaling
{: #scaling-console}

On the *Workload patterns* page, you can initiate, edit or delete your **Scaling** operations and check their **History**.

On AWS, a new entry-level workload contour called NC-Start is available to support lower volume BI and UAT workloads. You can scale this instance to NC0 performance profiles seamlessly as your workload increases. For NC-Start specifically, you can initiate on demand storage and contour scaling. The rest of the procedures are applicable for other workload contours.

On AWS, storage scaling has a cool-down period of six hours.

Within six hours of cool-down period, you can perform contour scaling from NC-Start to NC0 with the selected storage values. The following ranges are always allowed:

- NC-Start 400 GB to NC0 2400 GB
- NC-Start 800 GB to NC0 4800 GB
- NC-Start 1200 GB to NC0 7200 GB

After six hours of cool-down period passes and you want to perform contour scaling from NC-Start to NC0, you can select any storage values from the available list.
{:note: .note}

## Initiating on demand storage scaling for NC-Start
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
