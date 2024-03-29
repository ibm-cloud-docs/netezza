---

copyright:
  years: 2023
lastupdated: "2023-05-30"

keywords: scaling, netezza scaling with the web console, compute scaling

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

# Scaling
{: #scaling-console}

On the *Workload patterns* page, you can initiate, edit or delete your **Scaling** operations and check their **History**.

On AWS, storage scaling has a cool-down period of six hours.

Within six hours of cool-down period, you can perform contour scaling from NC-Start to NC0 with specific selected storage values. The following ranges are always allowed:

- NC-Start 400 GB to NC0 2400 GB
- NC-start 800 GB to NC0 4800 GB
- NC-start 1200 GB to NC0 7200 GB

After six hours of cool-down period passes, if you perform contour scaling from NC-Start to NC0, you can select any storage values from the available list.
{:note: .note}

## Initiating on demand scaling
{: #scaling-console-ondemand}

1. Go to **Administration > Workload patterns**.
1. Click **Scaling**.
1. Type the name for your scaling job.
1. Move the Netezza unit (NZU) slider to the required position, or select from the drop-down.
1. Click **Scale**.

## Scheduling scaling
{: #scaling-console-scheduled}

1. Go to **Administration > Workload patterns**.
1. Click **Scaling**.
1. Type the name for your scaling job.
1. Select the **Schedule for a later time** checkbox.
1. Select the required parameters.
1. Click **Scale**.

## Editing scheduled scaling
{: #scaling-console-editing}

1. Go to **Administration > Workload patterns >Schedules**.
1. Select the operation that you want to edit.
1. Click **Edit**.
1. Select the required parameters.
1. Click **Save**.

## Deleting scheduled scaling
{: #scaling-console-deleting}

1. Go to **Administration > Workload patterns >Schedules**.
1. Select the operation that you want to edit.
1. Click **Delete**.
1. Click **Delete**.

## Checking scaling history
{: #scaling-console-history}

1. Go to **Administration > Workload patterns > History**.
1. Depending on your requirements, perform one of the following actions:

   - Filter by **Time completed** or **Owner**.

   - In **Find history**, type the name of the operation.
