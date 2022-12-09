---

copyright:
  years: 2022
lastupdated: "2022-12-09"

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

## Initiating on demand scaling
{: #scaling-console-ondemand}

1. Go to **Administration > Workload patterns**.
1. Click **Scaling**.
1. Type the name for your scaling job. **DRAFT COMMENT: is that really optional?**
1. Move the Netezza unit (NZU) slider to the required position, or select from the drop-down.
1. Click **Scale**.

## Scheduling scaling
{: #scaling-console-scheduled}

1. Go to **Administration > Workload patterns**.
1. Click **Scaling**.
1. Type the name for your scaling job. **DRAFT COMMENT: is that really optional?**
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
1. Click **Delete**. **DRAFT COMMENT: Are we asking to click delete twice??**

## Checking scaling history
{: #scaling-console-history}

1. Go to **Administration > Workload patterns > History**.
1. Depending on your requirements, perform one of the following actions:

   - Filter by **Time completed** or **Owner**.

   - In **Find history**, type the name of the operation.
