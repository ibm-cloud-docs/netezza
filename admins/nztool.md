---

copyright:
  years: 2026
lastupdated: "2026-01-08"

keywords: nztool

subcollection: netezza

---

{:shortdesc: .shortdesc}
{:screen: .screen}
{:codeblock: .codeblock}
{:pre: .pre}
{:tip: .tip}
{:note: .note}
{:important: .important}
{:external: target="_blank" .external}
{:step: data-tutorial-type='step'}


# The nz tool
{: #nztool}

`nz` is a tool for {{site.data.keyword.netezza_full}} instances with which you can access {{site.data.keyword.netezza_short}}. With `nz`, you can also run commands in a secure and remote way through TLS/SSL to view, manage, and modify various aspects of your instances.
{: shortdesc}

On {{site.data.keyword.netezza_short}}, ports 5481, 5482 and 5483 are not exposed by default. To issue the commands that go through those ports, you must download and use the `nz` command line.

Supported platforms for the `nz` tool:

- `nz-darwin-amd64`
- `nz-linux-amd64`
- `nz-windows-amd64`

## Downloading the `nz` tool
{: #download-nz}

The `nz` tool can be downloaded using the following methods. For cloud platforms, it is recommended to download from the NPS server using the command-line interface method.
{: note}

1. **Using command-line interface**

   Run the command:

   ```sh
   curl -o nz -k https://<API Server URL>/<version number>/download/<platform specific package>
   chmod +x nz
   ```
   {: codeblock}

      where the API Server URL is the **API Server** URL details.

      To retrieve this information, follow the steps:

      1. Log in to your IBM Cloud account.

      2. Go to **Resource list** > **Services and Software** > **Databases**.

      3. Click your Netezza Performance Server instance. You are now on the **Service instance details** page. In the **Public Endpoints** section, you can find information (URL details) about endpoints for accessing the web console, the API server, and the database.

   Examples:

   To download `nz` on a Linux box, run:

   ```sh
   curl -o nz -k https://<API Server URL>/v2/download/nz-linux-amd64
   ```
   {: codeblock}

   To download `nz` on Windows, run:

   ```sh
   curl.exe -o nz.exe -k https://<API Server URL>/v2/download/nz-windows-amd64
   ```
   {: codeblock}

1. **Download from Fix Central**

   You can download the `nzcli` from [Fix Central](https://www.ibm.com/support/fixcentral/swg/selectFixes?parent=ibm%7EWebSphere&product=ibm/WebSphere/IBM+Cloud+Private+for+Data+System&release=NZCLI_11.2&platform=All&function=all).

## Setting up environment variables
{: #supportedcommands}

Set the `APISERVER_URL`, `NZ_USER`, and `NZ_PASSWORD` environment variables to forgo specifying the `-apiserver`, `-u`, and `-pw` options when you are running `nz` commands.

- From Linux or Mac OSX terminal, run:

   ```sh
   export APISERVER_URL=<api-server-url>
   export NZ_USER=<nps-admin-user>
   export NZ_PASSWORD=<nps-admin-user-password>
   ```
   {: codeblock}

- From Windows (`cmd.exe`), run:

   ```sh
   set APISERVER_URL=<api-server-url>
   set NZ_USER=<nps-admin-user>
   set NZ_PASSWORD=<nps-admin-user-password>
   ```
   {: codeblock}

- From Windows (PowerShell), run:

   ```sh
   $env:APISERVER_URL="<api-server-url>"
   $env:NZ_USER="<nps-admin-user>"
   $env:NZ_PASSWORD="<nps-admin-user-password>"
   ```
   {: codeblock}


On Windows, the shell strips quotes from arguments before passing them to the application. If you are using a username that requires quotes (for example, one containing lowercase letters or special characters), passing it through the command-line argument (-u `<username>`) can result in authentication failures. Linux preserves the quotes and is not affected by this behavior. To avoid authentication issues on Windows, it is recommended to use the environment variable approach when specifying a quoted username.
{: note}

## Username formatting
{: #username_nzcli_format}

   - Use a single quote followed by double quotes `'" "'` for usernames that:
     - Contain lowercase letters.
     - Include special characters other than an underscore `_` or `@` symbol.

      Example - Username: `SampleUser` -> `'"SampleUser"'`
   - For all other usernames, double quotes `""` are optional.

      Example - Username: `SAMPLEUSER` -> `SAMPLEUSER` or `"SAMPLEUSER"`


 **Case Sensitivity**:
   - **DB Users**: Usernames are not case-sensitive.

      Example - `sample_user` and `SAMPLE_USER` are treated the same.

   - **IBMIAM Users**: Usernames are case-sensitive.

      Example - `sample_user@ibm.com` and `SAMPLE_USER@ibm.com` are treated differently.

## The nz syntax
{: #nz-syntax}

The `nz` tool supports execution of select NPSaaS commands and Software Support Tools. Command execution syntax depends on the command type — NPSaaS command or Software Support Tool — and whether a shortcut command was installed.

Beginning with 11.2.2.10, the `APISERVER_URL` must be used instead of the host argument. To ensure optimal performance, you should redownload the `nz` tool at least every other release.
{: note}

**NPSaaS command syntax**
{: #npsaassyntax}

```sh
nz [command] [subcommands] [options]
```
{: codeblock}

Example:

```sh
./nz nzstate -apiserver <apiserver-url> -u <nps-admin-user> -pw <nps-admin-user-password>
System state is 'Online'.
```
{: codeblock}


**NPSaaS command shortcut syntax**
{: #npsyntxshrtct}

After running `nz install`, you can use shortcuts and omit the `nz` prefix:

```sh
[command] [subcommand] [options]
```
{: codeblock}

Example:

```sh
./nzstate -apiserver <apiserver-url> -u <nps-admin-user> -pw <nps-admin-user-password>
System state is 'Online'.
```
{: codeblock}


**Software Support Tool syntax**
{: #ssts}

Execution of a Software Support Tool requires a run command: `run`, `run-async`, `run-without-creds`, or `run-show-progress`.

```sh
nz [run-command] [software-support-tool] [subcommands] [options]
```
{: codeblock}

Example:

```sh
./nz run nz_get_table_rowcount database1 table1
```
{: codeblock}


## Installing shortcuts with nz install
{: #nzinstall-shortcuts}

You can create shortcuts for the following commonly used commands by running the `nz install` command. As a result, for example, instead of running `nz nzstate`, you can issue `nzstate` directly.

**nz install syntax**

```sh
nz install [--dry-run] [--dest DESTINATION-DIRECTORY] [--force]
```
{: codeblock}

| Option | Description |
|--------|-------------|
| `--dry-run` | Displays the symlinks that will be created without creating them. |
| `--dest` | Directory where the links are installed. |
| `--force` | Overwrites a pre-existing link. |

Example:

```sh
./nz install --dest /usr/local/bin --force
2024/09/13 09:18:09 main.go:131: Linking /root/nz -> /usr/local/bin/nzbackup
2024/09/13 09:18:09 main.go:131: Linking /root/nz -> /usr/local/bin/nzrestore
2024/09/13 09:18:09 main.go:131: Linking /root/nz -> /usr/local/bin/nzsystem
2024/09/13 09:18:09 main.go:131: Linking /root/nz -> /usr/local/bin/nzds
2024/09/13 09:18:09 main.go:131: Linking /root/nz -> /usr/local/bin/nzhw
2024/09/13 09:18:09 main.go:131: Linking /root/nz -> /usr/local/bin/nzstate
2024/09/13 09:18:09 main.go:131: Linking /root/nz -> /usr/local/bin/nzbatchbnr
2024/09/13 09:18:09 main.go:131: Linking /root/nz -> /usr/local/bin/nzrev
2024/09/13 09:18:09 main.go:131: Linking /root/nz -> /usr/local/bin/nzstats
2024/09/13 09:18:09 main.go:131: Linking /root/nz -> /usr/local/bin/nzsession
```
{: codeblock}

Shortcuts are created for the following commands:

```sh
nzbackup
nzbatchbnr
nzds
nzhw
nzrestore
nzrev
nzsession
nzstate
nzstats
nzsystem
```
{: screen}

## nz command reference
{: #supported-cmds}

### NPSaaS commands
{: #npsaas-cmds-ref}

The following {{site.data.keyword.netezza_short}} commands are supported by the `nz` tool:

```sh
nzbackup
nzbatchbnr
nzds
nzhw
nzrestore
nzrev
nzstate
nzstats
nzsession
nzsystem
nzprogress
nzsqa
```
{: screen}

When you take a backup of your database by using `nzbatchbnr`, you must keep the original spelling of the database name in your `backup.json`.
{: note}

### nz sub-commands
{: #sub_cmds}

| Command | Description |
|---------|-------------|
| `auto-pr` | List and show details of the Auto Pause/Resume mechanism. |
| `manualvacuum` | Execute a manual vacuum operation (requires system restart). |

### High-level nz commands
{: #high_lev_cmds}

| Command | Description |
|---------|-------------|
| `bnr` | Backup and restore operations. |
| `nzprogress` | Show all plans currently in progress. |

### Run commands
{: #other_cmds}

These commands allow running various `nz` commands on the target system:

| Command | Description |
|---------|-------------|
| `ops` | Run devops dedicated commands. |
| `pauseresume` | Pause or resume NPS. |
| `run` | Run any allowed nz command synchronously (passes `-u`, `-pw`). |
| `run-async` | Run any allowed nz command asynchronously. |
| `run-show-progress` | Run any allowed nz command showing immediate progress. |

### Permission and scaling commands
{: #permi_cmds}

| Command | Description |
|---------|-------------|
| `perms` | Get and set permissions. |
| `scale` | Scale NPS compute and/or storage. |

### Setup and miscellaneous commands
{: #setup_misc_cmds}

| Command | Description |
|---------|-------------|
| `setup-lh` | Set up a lakehouse connection for lakehouse integration. |
| `version` | Show the current version of the NZ client. |
| `install` | Install symlinks for supported NZ client commands. |
| `awsiam` | AWS IAM authenticator setup. |

### Direct nz host commands
{: #nz_host_calls}

| Command | Description |
|---------|-------------|
| `nzbackup` | Call the nzbackup tool. |
| `nzrestore` | Call the nzrestore tool. |
| `nzsystem` | Call the nzsystem tool. |
| `nzds` | Call the nzds tool. |
| `nzhw` | Call the nzhw tool. |
| `nzstate` | Call the nzstate tool. |
| `nzbatchbnr` | Call the nzbatchbnr tool. |
| `nzrev` | Call the nzrev tool. |
| `nzstats` | Call the nzstats tool. |
| `nzsession` | Call the nzsession tool. |

### Software Support Tools scripts
{: #sst-scripts-ref}

```sh
nz_abort
nz_altered_tables
nz_backup_size_estimate
nz_best_practices
nz_build_html_help_output
nz_catalog_dump
nz_catalog_size
nz_change_owner
nz_check_ids
nz_check_statistics
nz_check_views
nz_cksum
nz_clone
nz_columns
nz_compiler_stats
nz_compressedTableRatio
nz_db_group_access_listing
nz_db_size
nz_db_tables_rowcount
nz_db_tables_rowcount_statistic
nz_db_user_access_listing
nz_db_views_rowcount
nz_ddl
nz_ddl_aggregate
nz_ddl_all_grants
nz_ddl_comment
nz_ddl_database
nz_ddl_diff
nz_ddl_ext_datasource
nz_ddl_ext_table
nz_ddl_function
nz_ddl_grant_group
nz_ddl_grant_role
nz_ddl_grant_user
nz_ddl_group
nz_ddl_history_config
nz_ddl_library
nz_ddl_mview
nz_ddl_object
nz_ddl_owner
nz_ddl_procedure
nz_ddl_role
nz_ddl_scheduler_rule
nz_ddl_schema
nz_ddl_security
nz_ddl_sequence
nz_ddl_synonym
nz_ddl_sysdef
nz_ddl_table
nz_ddl_table_redesign
nz_ddl_user
nz_ddl_view
nz_ddl_view+
nz_dimension_or_fact
nz_event_runAwayQuery
nz_find_32bit_udx
nz_find_control_chars_in_data
nz_find_non_integer_strings
nz_find_object
nz_find_object_orphans
nz_find_object_owners
nz_find_table_orphans
nz_fix_the_permissions
nz_frag
nz_genstats
nz_get
nz_get_acl
nz_get_admin
nz_get_aggregate_name
nz_get_aggregate_names
nz_get_aggregate_signatures
nz_get_column_attnum
nz_get_column_name
nz_get_column_names
nz_get_column_oid
nz_get_column_type
nz_get_database_name
nz_get_database_names
nz_get_database_objid
nz_get_database_owner
nz_get_database_table_column_names
nz_get_ext_datasource_name
nz_get_ext_datasource_names
nz_get_ext_table_name
nz_get_ext_table_names
nz_get_ext_table_objid
nz_get_ext_table_owner
nz_get_function_name
nz_get_function_names
nz_get_function_signatures
nz_get_group_name
nz_get_group_names
nz_get_group_objid
nz_get_group_owner
nz_get_group_users
nz_get_lastTXid
nz_get_library_name
nz_get_library_names
nz_get_mgmt_table_name
nz_get_mgmt_table_names
nz_get_mgmt_view_name
nz_get_mgmt_view_names
nz_get_model
nz_get_mview_basename
nz_get_mview_definition
nz_get_mview_matrelid
nz_get_mview_name
nz_get_mview_names
nz_get_mview_objid
nz_get_mview_owner
nz_get_object_name
nz_get_object_objid
nz_get_object_owner
nz_get_object_type
nz_get_procedure_name
nz_get_procedure_names
nz_get_procedure_signatures
nz_get_role_name
nz_get_role_names
nz_get_schema_name
nz_get_schema_names
nz_get_schema_objid
nz_get_sequence_name
nz_get_sequence_names
nz_get_sequence_objid
nz_get_sequence_owner
nz_get_stableTXid
nz_get_synonym_definition
nz_get_synonym_name
nz_get_synonym_names
nz_get_synonym_objid
nz_get_synonym_owner
nz_get_sysmgmt_table_name
nz_get_sysmgmt_table_names
nz_get_sysmgmt_table_objid
nz_get_sysmgmt_view_name
nz_get_sysmgmt_view_names
nz_get_sysmgmt_view_objid
nz_get_sys_table_name
nz_get_sys_table_names
nz_get_sys_view_name
nz_get_sys_view_names
nz_get_table_distribution_key
nz_get_table_fks
nz_get_table_name
nz_get_table_names
nz_get_table_objid
nz_get_table_organization_key
nz_get_table_owner
nz_get_table_pk
nz_get_table_rowcount
nz_get_table_rowcount_statistic
nz_get_user_groups
nz_get_user_name
nz_get_user_names
nz_get_user_objid
nz_get_user_owner
nz_get_view_definition
nz_get_view_name
nz_get_view_names
nz_get_view_objid
nz_get_view_owner
nz_get_view_rowcount
nz_grep_views
nz_groom
nz_host_memory
nz_inconsistent_data_types
nz_index
nz_invisible
nz_lock
nz_maintenance_mode
nz_migrate
nz_my_access
nz_my_grants
nz_objects
nz_online_vacuum
nz_permissions_audit
nz_physical_table_layout
nz_plan
nz_query
nz_query_history
nz_query_stats
nz_record_skew
nz_rerandomize
nz_rev
nz_responders
nz_set
nz_show_locks
nz_skew
nz_sort_order
nz_spu_memory
nz_spu_swap_space
nz_spu_top
nz_state
nz_stats
nz_storage_stats
nz_sysutil_stats
nz_table_analyze
nz_table_constraints
nz_table_references
nz_tables
nz_temporal
nz_test
nz_transactions
nz_truncate
nz_update_backup_status
nz_update_statistic_date_high_value
nz_update_statistic_length
nz_update_statistic_min_or_max
nz_update_statistic_null_values
nz_update_statistic_table_rowcount
nz_update_statistic_unique_values
nz_usage
nz_view_plan_file
nz_view_references
nz_wrapper
nz_zonemap
```
{: screen}

## Timezone management
{: #timezne_mngemnt}

- **timezone**: List or set the timezone on the NPS host.

## CLI
{: #cli}

For more information about commands, see [the command-line interface](https://www.ibm.com/docs/en/netezza?topic=interfaces-command-line-interface) section.
