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

The **storage type of an existing table cannot be changed** once table has been created. To change a table’s storage type, users should create a new table using CTAS (Create Table As Select), specifying the desired `storagetype`.
{: note}

## Database level configuration
{: #netezzacos_dbconf}

- Users can configure and modify the default storagetype at the **database level**.
- This allows consistent storage behavior across all tables within a database unless overridden at the individual table level.

## Default storagetype
{: #netezzacossql_defstortyp}

The **default storagetype** is set to 'block' at system level. Contact IBM Support to change the default.

## Storage type precedence for table creation
{: #proce_sts}

When creating a table, the system determines the storage type based on the following precedence:

1. **CREATE TABLE statement**
2. **Session-level setting**
3. **Database-level setting**
4. **System-wide setting**

The first and highest precedence is the `CREATE TABLE` statement itself. If the `storagetype` is not explicitly specified in the statement, the system checks whether a session-level setting has been applied. If not, it looks for the default storage type set at the database level. If the database-level setting is `"default"`, the system-wide `DEFAULT_STORAGE_TYPE` will be used.

### Viewing table storage type
{: #view_tst}

To determine the storage type of a table, query the `_v_table` system view:

```sql
SELECT TABLENAME, STORAGESOURCE, CASE WHEN STORAGESOURCE = 1 THEN 'BLOCK' WHEN STORAGESOURCE = 2 THEN 'OBJECT' END AS STORAGETYPE FROM _v_table WHERE TABLENAME like 'TEST_%';
```

The storagetype for a table can be determined from system view _v_table. Here, 1 represents `block` and 2 stands for `object`.

```table
| TABLENAME | STORAGESOURCE | STORAGETYPE |
|-----------|---------------|-------------|
| TEST_OBJ  | 2             | OBJECT      |
| TEST_BLK  | 1             | BLOCK       |
```

Once a table is created, its `storagetype` **cannot be changed**. To copy a table to a different storage type, use the **CTAS (Create Table As Select)** statement as following:

```sql
CREATE TABLE t3 AS (SELECT * FROM t1) STORAGETYPE 'block';
```

Parentheses around the `SELECT` statement are **required**
{: note}


You **cannot specify** `storagetype` for materialized views. The storage type is **inherited from the base table**.
{: note}

During an upgrade from a release that supports **only block storage** to one that supports **object storage**, all existing tables will have their `storagetype` set to `'block'`.
{: note}

## Setting `storagetype` for a Database
{: #setting_Strge_type}

The default storagetype to be applied to tables created in a particular database can be specified while creating the database.

1. **`CREATE DATABASE` statement**
2. **Session-level setting**
3. **System-wide setting**

You can set the default `storagetype` for a database during creation:

```sql
CREATE DATABASE database1 STORAGETYPE 'block';
```

If `storagetype` is **not specified**, the system will:

- Check for a **session-level setting**.
- If none is found, use the **system-wide default**.
- This value is then stored internally as the database's default `storagetype`.

To **leave the default unset** at the database level, use:

```sql
CREATE DATABASE database1 STORAGETYPE 'default';
```

To check the default `storagetype` for databases, query the `_v_database` system view:

```sql
SELECT DATABASE, STORAGETYPE FROM _v_database;
```

**Example output:**

```
 DATABASE |  STORAGETYPE
----------+----------------
 DB1      | BLOCK
 DB2      | OBJECT
 SYSTEM   | SYSTEM DEFAULT
(3 rows)
```


During an upgrade from a release that supports **only block storage** to one that supports **object storage** the default `storagetype` for all existing databases will be set to `'block'`.
{: note}

The default `storagetype` associated with a database can be changed using the `ALTER DATABASE` command.

- **Alter database storage type**

    ```sql
    ALTER DATABASE <database_name> SET STORAGETYPE '<storage_type>';
    ```
