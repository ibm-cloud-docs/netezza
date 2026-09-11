---

copyright:
  years: 2026
lastupdated: "2026-07-21"

keywords: nz manualvacuum, manual vacuum, database maintenance, vacuum operation, reindex

subcollection: netezza

---

{:shortdesc: .shortdesc}
{:screen: .screen}
{:codeblock: .codeblock}
{:pre: .pre}
{:tip: .tip}
{:note: .note}
{:important: .important}
{:warning: .warning}
{:external: target="_blank" .external}
{:step: data-tutorial-type='step'}


# The nz manualvacuum command
{: #nz-manualvacuum}

The `nz manualvacuum` command performs a comprehensive vacuum and reindex operation on all databases in your {{site.data.keyword.netezza_short}} instance. This maintenance operation helps reclaim disk space and optimize database performance by removing obsolete data and rebuilding indexes. This command was introduced in nzcli version 11.3.1.3.
{: shortdesc}

## Overview
{: #manualvacuum-overview}

The manual vacuum operation is a critical maintenance task that:

- Stops the NPS system (`nzstop`)
- Creates a backup of the catalog data
- Performs vacuum and reindex operations on all databases
- Restarts the NPS system (`nzstart`)

The system is unavailable during this operation, which may take significant time depending on the number and volume of your databases.
{: important}

## Prerequisites
{: #manualvacuum-prereq}

Before running the manual vacuum operation, ensure that:

- You have administrative access to the {{site.data.keyword.netezza_short}} instance
- You have downloaded and configured the `nz` command-line tool version **11.3.1.3** or later
- You have set the required environment variables (`APISERVER_URL`, `NZ_USER`, `NZ_PASSWORD`) or are prepared to provide them as command options
- You have scheduled a maintenance window, as the system will be unavailable during the operation
- You have sufficient disk space for the catalog backup

## Syntax
{: #manualvacuum-syntax}

```sh
nz manualvacuum [options]
```
{: codeblock}

## Options
{: #manualvacuum-options}

| Option | Description |
|--------|-------------|
| `-apiserver <APISERVER>` | The URL of the API server. Can be set using the `APISERVER_URL` environment variable. (required) |
| `-u <USER>` | NPS username. Can be set using the `NZ_USER` environment variable. (required) |
| `-pw <PASSWORD>` | NPS password. Can be set using the `NZ_PASSWORD` environment variable. (required) |
| `-force` | Skip the confirmation prompt and proceed with the operation immediately |
| `-format <FORMAT>` | Output format for the command results |
| `-host <HOST>` | The URL of the API server. Can be set using the `NZ_HOST` environment variable |
{: caption="nz manualvacuum options" caption-side="bottom"}

## Examples
{: #manualvacuum-examples}

### Running manual vacuum with confirmation prompt
{: #manualvacuum-example-confirm}

```sh
./nz manualvacuum -apiserver <apiserver-url> -u <nps-admin-user> -pw <nps-admin-user-password>
```
{: codeblock}

The command displays a warning and prompts for confirmation:

```screen
  WARNING: Manual Vacuum Operation
=====================================
This operation will:
  1. Stop NPS (nzstop)
  2. Run nz_manual_vacuum
  3. Start NPS (nzstart)

This process may take significant time and will restart the system.
The system will be unavailable during this operation.

Do you want to continue? (yes/no):
```
{: screen}

### Running manual vacuum without confirmation
{: #manualvacuum-example-force}

Use the `-force` option to skip the confirmation prompt:

```sh
./nz manualvacuum -force -apiserver <apiserver-url> -u <nps-admin-user> -pw <nps-admin-user-password>
```
{: codeblock}

### Using environment variables
{: #manualvacuum-example-env}

Set environment variables to avoid specifying credentials in the command:

```sh
export APISERVER_URL=<apiserver-url>
export NZ_USER=<nps-admin-user>
export NZ_PASSWORD=<nps-admin-user-password>

./nz manualvacuum -force
```
{: codeblock}

## Operation workflow
{: #manualvacuum-workflow}

When you run the `nz manualvacuum` command, the following workflow is executed. Internally, the command invokes the `nz_manual_vacuum` system binary on the NPS host.

1. **System stop**: The NPS system is stopped using the `nzstop` command
2. **Catalog backup**: A backup of the catalog data is created at `/nz/manual_vacuum/nz_manual_vacuum.<timestamp>.tar.gz`
3. **Vacuum and reindex**: The operation performs vacuum and reindex on:
   - The `_T_OBJECT` system table
   - All user and system databases in sequence
4. **System start**: The NPS system is restarted using the `nzstart` command
5. **Completion**: The operation completes and displays a summary of the results

## Output and logs
{: #manualvacuum-output}

The manual vacuum operation generates:

- **Log file**: `/nz/manual_vacuum/nz_manual_vacuum.<timestamp>.log`
- **Backup file**: `/nz/manual_vacuum/nz_manual_vacuum.<timestamp>.tar.gz`
- **Console output**: Detailed progress information including:
    - Operation handle and timestamp
    - Command execution status
    - Timing information for each database
    - Size comparison (before and after)
    - Completion status

### Sample output
{: #manualvacuum-sample-output}

```screen
Manual vacuum completed successfully

Output:

================================================================================
Manual Vacuum Workflow Started
Handle: nzrest.68n6kkr8.manual_vacuum
User: admin
Timestamp: 2026-06-09 14:08:12,790
================================================================================

# Database 1 of 19          SYSTEM
     TIMINGS (vacuum    ):  Elapsed Time:     0.21
     TIMINGS (reindex   ):  Elapsed Time:     0.39

...

###############################################################################
    Size Before      Size After  Pathname
=============== ===============  =========================================================
     3924887043      3915646467  /data/catalog/data.1.0
###############################################################################

   log file: /nz/manual_vacuum/nz_manual_vacuum.20260609_140932.log
backup file: /nz/manual_vacuum/nz_manual_vacuum.20260609_140932.tar.gz

================================================================================
Manual Vacuum Workflow Completed Successfully
All commands executed without errors
================================================================================
```
{: screen}

## Best practices
{: #manualvacuum-best-practices}

- Schedule manual vacuum operations during maintenance windows when the system can be offline
- Monitor disk space before running the operation to ensure sufficient space for the catalog backup
- Review the log files after completion to verify successful execution
- Consider the size of your databases when planning the maintenance window, as larger databases require more time
- Keep the backup files for recovery purposes until you verify the operation completed successfully

## Related commands
{: #manualvacuum-related}

- [`nz_online_vacuum`](/docs/netezza?topic=netezza-nztool#supported-cmds) - Perform online vacuum without system restart
- [`nz_groom`](/docs/netezza?topic=netezza-nztool#supported-cmds) - Groom tables to reclaim space
- [`nzstate`](/docs/netezza?topic=netezza-nztool#supported-cmds) - Check system state
- [`nzstop` and `nzstart`](/docs/netezza?topic=netezza-nztool#supported-cmds) - Stop and start the NPS system
