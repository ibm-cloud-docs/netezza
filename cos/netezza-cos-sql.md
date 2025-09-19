---

copyright:
  years: 2025
lastupdated: "2025-05-13"

keywords: netezza cos

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

# SQL syntax for storage type specification
{: #netezzacossql}

This section describes the enhancements to the NPS SQL syntax to specify and manage storage types for datasources at both table and database levels. These improvements provide greater flexibility in configuring storage options, similar to existing Lakehouse functionality.

## Storage type configuration in SQL
{: #netezzacosstortypconsql}

Customers can now define the storage type when creating or altering tables and databases using the following syntax:

- **Create table with storage type**

    ```sql
    CREATE TABLE t1 (c1 int) storagetype 'object';
	CREATE TABLE t2 (c1 int) storagetype 'block';
    ```

- **Create database with storage type**

    ```sql
    CREATE DATABASE db1 storagetype 'object';
	CREATE DATABASE db1 storagetype 'block';
    ```

- **Alter database storage type**

    ```sql
    ALTER DATABASE db1 storagetype 'block';
	ALTER DATABASE db1 storagetype 'object';
    ```

The **storage type of an existing table cannot be changed** once table has been created. To change a table’s storage type, users should create a new table using CTAS (Create Table As Select), specifying the desired `storage_type`.
{: note}

## Datasource configuration
{: #netezzacos_dbconf}

- Users can configure and modify the default datasource's storage type at the **database level**.
- This allows consistent storage behavior across all tables within a database unless overridden at the individual table level.

## Default storage type
{: #netezzacossql_defstortyp}

The default storage type can be shown using the following query:

| Command                             | Description                  |
|-------------------------------------|------------------------------|
| `show default_storage_type;` | Show default storage type    |

### Storage type population
{: #netezzacossql_stortyppop}

- **Table Creation**: The `storagetype` is populated as per the `CREATE TABLE` query.
- **Database Creation**: If `storagetype` is not specified while table creation, fetch it from the database.
- **Global Setting**: If `storagetype` is not specified while database creation too, fetch the default storage type from the global setting.

### Session storage type setting
{: #session_type_settings}

The session storage type can be set for a particular session  using the following syntax:

```sql
set default_storage_type = 'object';
```

To view the current effective session storage type setting, use:

```sql
show default_storage_type;
```

Example output:

```sql
NOTICE: DEFAULT_STORAGE_TYPE = Object
```





## Precedence of storage type settings
{: #proce_sts}

The effective storage type applied when creating a table follows this precedence order:

1. **Create table statement** — If specified explicitly during table creation.
2. **Session setting** — If not specified in the create statement, the session-level setting applies.
3. **Database setting** — If no session setting exists, the database-level default is used.
4. **System setting** — If none of the above are set, the global system-wide default applies.

## Viewing table storage type
{: #view_tst}

To determine the storage type of an existing table, use the `\d` command:

```sql
SYSTEM.ADMIN(ADMIN)=> \d test_table
```

Example output snippet:

```tableeg1
Table "TEST_TABLE"
Attribute | Type                | Modifier | Default Value
----------+---------------------+----------+--------------
C1        | CHARACTER VARYING(2)|          |
Distributed on hash: "C1"
Storagetype: Block
```

## Creating tables with specific storage types
{: #create_table_sst}

- Once created, a table's storage type cannot be changed.
- To copy a table to another storage type, use the `CREATE TABLE AS SELECT` (CTAS) statement with the `storagetype` option:

    ```sql
    CREATE TABLE t3 as (select * from t1) storagetype 'block';
    ```

    Parentheses around the nested select statement are required currently.
    {: note}

- Materialized views inherit the storage type from their base tables; there is no option to specify storage type directly for materialized views.

## Database-level storage type setting
{: #dl_sts}

- When creating a database, you can specify the default storage type for tables created within it:

    ```sql
    create database database1 storagetype 'block';
    ```

- If not specified, the database inherits the session or system-wide default storage type.
- To keep the database default storage type unset (i.e., defer to higher precedence), specify `'default'`:

    ```sql
    create database database1 storagetype 'default';
    ```

- To check the default storage type for all databases, query the `_v_database` view:

    ```sql
    SYSTEM.ADMIN(ADMIN)=> select database, storagetype from _v_database;
    ```

    Example output:

    ```sql
    DATABASE | STORAGETYPE
    ---------+-------------
    DB1      | BLOCK
    DB2      | OBJECT
    SYSTEM   | SYSTEM DEFAULT
    ```

## Upgrade considerations
{: #upgrade_consd}

- During upgrades from releases supporting only block storage to those supporting object storage:
    - All existing tables will have their storage type set to `'block'`.
    - All existing databases will have their default storage type set to `'block'`.
