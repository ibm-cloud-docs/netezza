---

copyright:
  years: 2022
lastupdated: "2022-12-09"

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

## Downloading the nz tool
{: #download-nz}

Run the command:

```sh
curl -o nz -k https://<external hostname>/v1/download/<platform specific package>
chmod +x nz
```
{: codeblock}

## The nz syntax
{: #nz-syntax}

The `nz` command syntax can take two forms, depending on whether you created shortcuts for commonly used commands or not.

1. For more information about shortcuts and a list of commands that can have shortcuts, see [Creating nz shortcuts with the nz install command](/docs/netezza?topic=netezza-nztool#nzinstall-shortcuts).
1. You can set the `NZ_HOST`, `NZ_USER`, and `NZ_PASSWORD` environment variables and forgo specifying the `-host`, `-u`, and `-pw` options when you are running `nz` commands.
{: tip}

- Full syntax:

   ```sh
   nz [command] [subcommands] [options]
   ```
   {: codeblock}

   Example:

   ```sh
   ./nz nzstate -host <nps-hostname> -u <nps-admin-user> -pw <nps-admin-user-password>
   System state is 'Online'.
   ```
   {: codeblock}

- Shortcut syntax

   ```sh
   [command] [subcommand] [options]
   ```
   {: codeblock}

   Example:

   ```sh
   -host <nps-hostname> -u <nps-admin-user> -pw <nps-admin-user-password>
   System state is 'Online'.
   ```
   {: codeblock}

### Commands supported by the nz tool
{: #supported-cmds}

- {{site.data.keyword.netezza_short}} commands:

    - `nzbackup`
    - `nzbatchbnr`
    - `nzds`
    - `nzhw`
    - `nzrestore`
    - `nzrev`
    - `nzstate`
    - `nzstats`
    - `nzsession`
    - `nzsystem`

- Software Support Tools scripts:

    - `nz_abort`
    - `nz_altered_tables`
    - `nz_backup_size_estimate`
    - `nz_best_practices`
    - `nz_build_html_help_output`
    - `nz_catalog_dump`
    - `nz_catalog_size`
    - `nz_change_owner`
    - `nz_check_statistics`z
    - `nz_check_views`
    - `nz_cksum`
    - `nz_clone`
    - `nz_columns`
    - `nz_compiler_stats`
    - `nz_compressedTableRatio`
    - `nz_db_group_access_listing`
    - `nz_db_size`
    - `nz_db_tables_rowcount`
    - `nz_db_tables_rowcount_statistic`
    - `nz_db_user_access_listing`
    - `nz_db_views_rowcount`
    - `nz_ddl`
    - `nz_ddl_aggregate`
    - `nz_ddl_all_grants`
    - `nz_ddl_comment`
    - `nz_ddl_database`
    - `nz_ddl_diff`
    - `nz_ddl_ext_table`
    - `nz_ddl_function`
    - `nz_ddl_grant_group`
    - `nz_ddl_grant_role`
    - `nz_ddl_grant_user`
    - `nz_ddl_group`
    - `nz_ddl_history_config`
    - `nz_ddl_mview`
    - `nz_ddl_object`
    - `nz_ddl_owner`
    - `nz_ddl_procedure`
    - `nz_ddl_role`
    - `nz_ddl_scheduler_rule`
    - `nz_ddl_schema`
    - `nz_ddl_security`
    - `nz_ddl_sequence`
    - `nz_ddl_synonym`
    - `nz_ddl_sysdef`
    - `nz_ddl_table`
    - `nz_ddl_table_redesign`
    - `nz_ddl_user`
    - `nz_ddl_view`
    - `nz_ddl_view`
    - `nz_dimension_or_fact`
    - `nz_find_32bit_udx`
    - `nz_find_control_chars_in_data`
    - `nz_find_non_integer_strings`
    - `nz_find_object`
    - `nz_find_object_orphans`
    - `nz_find_object_owners`
    - `nz_find_table_orphans`
    - `nz_fix_the_permissions`
    - `nz_frag`
    - `nz_genstats`
    - `nz_get`
    - `nz_get_acl`
    - `nz_get_admin`
    - `nz_get_aggregate_name`
    - `nz_get_aggregate_names`
    - `nz_get_aggregate_signatures`
    - `nz_get_column_attnum`
    - `nz_get_column_name`
    - `nz_get_column_names`
    - `nz_get_column_oid`
    - `nz_get_column_type`
    - `nz_get_database_name`
    - `nz_get_database_names`
    - `nz_get_database_objid`
    - `nz_get_database_owner`
    - `nz_get_database_table_column_names`
    - `nz_get_ext_table_name`
    - `nz_get_ext_table_names`
    - `nz_get_ext_table_objid`
    - `nz_get_ext_table_owner`
    - `nz_get_function_name`
    - `nz_get_function_names`
    - `nz_get_function_signatures`
    - `nz_get_group_name`
    - `nz_get_group_names`
    - `nz_get_group_objid`
    - `nz_get_group_owner`
    - `nz_get_group_users`
    - `nz_get_lastTXid`
    - `nz_get_library_name`
    - `nz_get_library_names`
    - `nz_get_mgmt_table_name`
    - `nz_get_mgmt_table_names`
    - `nz_get_mgmt_view_name`
    - `nz_get_mgmt_view_names`
    - `nz_get_model`
    - `nz_get_mview_basename`
    - `nz_get_mview_definition`
    - `nz_get_mview_matrelid`
    - `nz_get_mview_name`
    - `nz_get_mview_names`
    - `nz_get_mview_objid`
    - `nz_get_mview_owner`
    - `nz_get_object_name`
    - `nz_get_object_objid`
    - `nz_get_object_owner`
    - `nz_get_object_type`
    - `nz_get_procedure_name`
    - `nz_get_procedure_names`
    - `nz_get_procedure_signatures`
    - `nz_get_role_name`
    - `nz_get_role_names`
    - `nz_get_schema_name`
    - `nz_get_schema_names`
    - `nz_get_schema_objid`
    - `nz_get_sequence_name`
    - `nz_get_sequence_names`
    - `nz_get_sequence_objid`
    - `nz_get_sequence_owner`
    - `nz_get_stableTXid`
    - `nz_get_synonym_definition`
    - `nz_get_synonym_name`
    - `nz_get_synonym_names`
    - `nz_get_synonym_objid`
    - `nz_get_synonym_owner`
    - `nz_get_sysmgmt_table_name`
    - `nz_get_sysmgmt_table_names`
    - `nz_get_sysmgmt_table_objid`
    - `nz_get_sysmgmt_view_name`
    - `nz_get_sysmgmt_view_names`
    - `nz_get_sysmgmt_view_objid`
    - `nz_get_sys_table_name`
    - `nz_get_sys_table_names`
    - `nz_get_sys_view_name`
    - `nz_get_sys_view_names`
    - `nz_get_table_distribution_key`
    - `nz_get_table_fks`
    - `nz_get_table_name`
    - `nz_get_table_names`
    - `nz_get_table_objid`
    - `nz_get_table_organization_key`
    - `nz_get_table_owner`
    - `nz_get_table_pk`
    - `nz_get_table_rowcount`
    - `nz_get_table_rowcount_statistic`
    - `nz_get_user_groups`
    - `nz_get_user_name`
    - `nz_get_user_names`
    - `nz_get_user_objid`
    - `nz_get_user_owner`
    - `nz_get_view_definition`
    - `nz_get_view_name`
    - `nz_get_view_names`
    - `nz_get_view_objid`
    - `nz_get_view_owner`
    - `nz_get_view_rowcount`
    - `nz_grep_views`
    - `nz_groom`
    - `nz_host_memory`
    - `nz_inconsistent_data_types`
    - `nz_index`
    - `nz_invisiblenz_lock`
    - `nz_maintenance_mode`
    - `nz_migrate`
    - `nz_my_access`
    - `nz_my_grants`
    - `nz_online_vacuum`
    - `nz_permissions_audit`
    - `nz_physical_table_layout`
    - `nz_plan`
    - `nz_query_history`
    - `nz_query_stats`
    - `nz_record_skew`
    - `nz_rerandomize`
    - `nz_rev`
    - `nz_set`
    - `nz_show_locks`
    - `nz_skew`
    - `nz_sort_order`
    - `nz_spu_memory`
    - `nz_spu_swap_space`
    - `nz_spu_top`
    - `nz_state`
    - `nz_stats`
    - `nz_storage_stats`
    - `nz_sysutil_stats`
    - `nz_table_analyze`
    - `nz_table_constraints`
    - `nz_table_references`
    - `nz_tables`
    - `nz_test`
    - `nz_transactions`
    - `nz_truncate`
    - `nz_update_statistic_date_high_value`
    - `nz_update_statistic_length`
    - `nz_update_statistic_min_or_max`
    - `nz_update_statistic_null_values`
    - `nz_update_statistic_table_rowcount`
    - `nz_update_statistic_unique_values`
    - `nz_usage`
    - `nz_view_plan_file`
    - `nz_view_references`
    - `nz_wrapper`
    - `nz_zonemap`


## Creating nz shortcuts with the nz install command
{: #nzinstall-shortcuts}

You can create shortcuts for the following commonly used commands by running the `nz install` command. As a result, for example, instead of running `nz nzstate`, you can issue `nzstate`.

    - `nz`
    - `nzbackup`
    - `nzbatchbnr`
    - `nzds`
    - `nz_get_model`
    - `nz_health`
    - `nzhistcreatedb`
    - `nzhw`
    - `nz_pause`
    - `nzpush`
    - `nz_query_history`
    - `nz_repl_health`
    - `nzrequest`
    - `nz_rerandomize`
    - `nzrestore`
    - `nzrev`
    - `nzsession`
    - `nzsqa`
    - `nzstate`
    - `nz_stats`
    - `nzstats`
    - `nzsystem`
    - `nz_sysutil_stats`
    - `nz_transactions`
    - `nz_view_references`
    - `nz_zonemap`


## nz environment variables
{: #supportedcommands}

Set the `NZ_HOST`, `NZ_USER`, and `NZ_PASSWORD` environment variables to forgo specifying the `-host`, `-u`, and `-pw` options when you are running `nz` commands.

- From Linux or Mac OSX terminal, run:

   ```sh
   export NZ_HOST=<nps-hostname>
   export NZ_USER=<nps-admin-user>
   export NZ_PASSWORD=<nps-admin-user-password>
   ```
   {: codeblock}

- From Windows (`cmd.exe`), run:

   ```sh
   set NZ_HOST=<nps-hostname>
   set NZ_USER=<nps-admin-user>
   set NZ_PASSWORD=<nps-admin-user-password>
   ```
   {: codeblock}

## CLI
{: #cli}

For more information about commands, see [the IBM Documentation page](https://www.ibm.com/docs/en/netezza).
