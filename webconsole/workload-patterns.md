---

copyright:
  years: 2022
lastupdated: 2022-12-09"

keywords: web console, administering web console, administering, pnr, pause and resume, netezza pause and resume, pause and resume by using netezza web console, pausing and resuming netezza performance server with the web console, netezza auto-pause and resume, netezza autopause and resume, netezza auto-pause and resume with the web console, scaling, netezza scaling with the web console, compute scaling, smartscaling, netezza smartscaling, netezza performance server smartscaling

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}

# Workload patterns
{: #patterns}

## Pausing and resuming
{: #pnr-console}

On the *Workload patterns* page, you can initiate, edit or delete your **Pause/resume** operations and check their **History**.

### Initiating on demand pause
{: #pnr-console-pausing-ondemand}

1. Go to **Administration > Workload patterns**.
1. Click **Pause/resume**.
1. Type the name for your pause operation.
1. Click **Pause** and **Confirm**.

### Initiating on demand resume
{: #pnr-console-resuming-ondemand}

1. Go to **Administration > Workload patterns**.
1. Click **Pause/resume**.
1. Type the name for your resume operation.
1. Click **Resume** and **Confirm**.

### Scheduling pause
{: #pnr-console-pausing-scheduled}

1. Go to **Administration > Workload patterns**.
1. Click **Pause/resume**.
1. Type the name for your pause operation.
1. Select the **Schedule for a later time** checkbox.
1. Click the **Pause** radio button.
1. Select the required parameters.
1. Click **Schedule pause** and **Confirm**.

### Scheduling resume
{: #pnr-console-resuming-scheduled}

1. Go to **Administration > Workload patterns**.
1. Click **Pause/resume**.
1. Type the name for your pause operation.
1. Select the **Schedule for a later time** checkbox.
1. Click the **Resume** radio button.
1. Select the required parameters.
1. Click **Schedule resume** and **Confirm**.

### Editing scheduled pause or resume
{: #pnr-console-editing}

1. Go to **Administration > Workload patterns > Schedules**.
1. Select the operation that you want to edit.
1. Click **Edit**.
1. Select the required parameters.
1. Click **Save**.

### Deleting scheduled pause or resume
{: #pnr-console-deleting}

1. Go to **Administration > Workload patterns > Schedules**.
1. Select the operation that you want to delete.
1. Click **Delete**.
1. Click **Delete**.

### Checking pause or resume history
{: #pnr-console-history}

1. Go to **Administration > Workload patterns > History**.
1. Depending on your requirements, perform one of the following actions:

   - Filter by **Time completed** or **Owner**.

   - In **Find history**, type the name of the operation.

## Auto-pausing and auto-resuming
{: #autopnr-console}

On the *Workload patterns* page, you can enable or disable your **Auto pause** operations and check their **History**.

### Enabling auto-pause
{: #autopnr-console-enable}

1. Go to **Administration > Workload patterns**.
1. Click **Pause/resume**.
1. Type the name for your auto-pause operation.
1. Select the **Auto pause** checkbox.
1. Click **Confirm**.

### Disabling auto-pause
{: #autopnr-console-disable}

1. Go to **Administration > Workload patterns**.

### Checking auto-pause history
{: #autopnr-console-history}

1. Go to **Administration > Workload patterns > History**.
1. Depending on your requirements, perform one of the following actions:

   - Filter by **Time completed** or **Owner**.

   - In **Find history**, type the name of the operation.

## Scaling
{: #scaling-console}

On the *Workload patterns* page, you can initiate, edit or delete your **Scaling** operations and check their **History**.

### Initiating on demand scaling
{: #scaling-console-ondemand}

1. Go to **Administration > Workload patterns**.
1. Click **Scaling**.
1. Type the name for your scaling job.
1. Move the Netezza unit (NZU) slider to the required position, or select from the drop-down.
1. Click **Scale**.

### Scheduling scaling
{: #scaling-console-scheduled}

1. Go to **Administration > Workload patterns**.
1. Click **Scaling**.
1. Type the name for your scaling job.
1. Select the **Schedule for a later time** checkbox.
1. Select the required parameters.
1. Click **Scale**.

### Editing scheduled scaling
{: #scaling-console-editing}

1. Go to **Administration > Workload patterns > Schedules**.
1. Select the operation that you want to edit.
1. Click **Edit**.
1. Select the required parameters.
1. Click **Save**.

### Deleting scheduled scaling
{: #scaling-console-deleting}

1. Go to **Administration > Workload patterns > Schedules**.
1. Select the operation that you want to delete.
1. Click **Delete**.
1. Click **Delete**.

### Checking scaling history
{: #scaling-console-history}

1. Go to **Administration > Workload patterns > History**.
1. Depending on your requirements, perform one of the following actions:

   - Filter by **Time completed** or **Owner**.

   - In **Find history**, type the name of the operation.
