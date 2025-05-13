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
    CREATE TABLE T1 (c1 INT) WITH STORAGE_TYPE AS Object;
    ```

- **Create database with storage type**

    ```sql
    CREATE DATABASE db1 WITH STORAGE_TYPE AS Block;
    ```

- **Alter database storage type**

    ```sql
    ALTER DATABASE db2 WITH STORAGE_TYPE AS Object;
    ```

The **storage type of an existing table cannot be changed** once data has been inserted. To change a table’s storage type, users should create a new table using CTAS (Create Table As Select), specifying the desired `storage_type`.
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
| `show storage_type_default_is_object;` | Show default storage type    |

### Storage type population
{: #netezzacossql_stortyppop}

- **Table Creation**: The `storagetype` is populated as per the `CREATE TABLE` query.
- **Database Creation**: If `storagetype` is not specified while table creation, fetch it from the database.
- **Global Setting**: If `storagetype` is not specified while database creation too, fetch the default storage type from the global setting.

### Example queries
{: #eg_quiers}

#### Creating tables with different storage types
{: #creating_strge}

```sql
CREATE TABLE t1 (c1 int);
CREATE TABLE t2 (c1 int) storagetype 'object';
CREATE TABLE t3 (c1 int) storagetype 'block';
```

#### Selecting storage source
{: #select_strge_srce}

```sql
SELECT RELNAME, storagesource FROM _T_CLASS WHERE RELORIGOID > 200000 ORDER BY RELNAME;
```

#### Dropping tables
{: #drop_tables}

```sql
DROP TABLE t1 IF EXISTS;
DROP TABLE t2 IF EXISTS;
DROP TABLE t3 IF EXISTS;
```

### Database operations
{: #db_ops}

#### Setting catalog to system
{: #set_cat_sys}

```sql
SET catalog system;
```

#### Dropping and creating database
{: #drop_db}

```sql
DROP DATABASE test_crdb;
CREATE DATABASE test_crdb;
```

#### Setting catalog to test database
{: #setting_cat_test_db}

```sql
SET catalog test_crdb;
```

#### Selecting storage source from database
{: #selecting_stege_db}

```sql
SELECT DATNAME, storagesource FROM _t_database WHERE DATNAME = 'TEST_CRDB';
```

#### Creating tables in test database
{: #creating_test_db}

```sql
CREATE TABLE t1 (c1 int);
CREATE TABLE t2 (c1 int) storagetype 'object';
CREATE TABLE t3 (c1 int) storagetype 'block';
```

#### Dropping tables in test database
{: #dropping_test_db}

```sql
DROP TABLE t1 IF EXISTS;
DROP TABLE t2 IF EXISTS;
DROP TABLE t3 IF EXISTS;
```

#### Dropping test database
{: #drop_test_db}

```sql
SET catalog system;
DROP DATABASE test_crdb;
```

### Creating database with specific storage types
{: #create_db_spec_strge_type}

#### Creating database with 'object' storage type
{: #create_db_obj_strge_type}

```sql
SET catalog system;
DROP DATABASE test_crdb;
CREATE DATABASE test_crdb storagetype 'object';
SET catalog test_crdb;
\c test_crdb
SELECT DATNAME, storagesource FROM _t_database WHERE DATNAME = 'TEST_CRDB';
CREATE TABLE t1 (c1 int);
CREATE TABLE t2 (c1 int) storagetype 'object';
CREATE TABLE t3 (c1 int) storagetype 'block';
SELECT RELNAME, storagesource FROM _T_CLASS WHERE RELORIGOID > 200000 ORDER BY RELNAME;
DROP TABLE t1 IF EXISTS;
DROP TABLE t2 IF EXISTS;
DROP TABLE t3 IF EXISTS;
SET catalog system;
DROP DATABASE test_crdb;
```

#### Creating database with 'block' storage type
{: #create_db_blk_strge_type}

```sql
SET catalog system;
DROP DATABASE test_crdb;
CREATE DATABASE test_crdb storagetype 'block';
SET catalog test_crdb;
SELECT DATNAME, storagesource FROM _t_database WHERE DATNAME = 'TEST_CRDB';
CREATE TABLE t1 (c1 int);
CREATE TABLE t2 (c1 int) storagetype 'object';
CREATE TABLE t3 (c1 int) storagetype 'block';
SELECT RELNAME, storagesource FROM _T_CLASS WHERE RELORIGOID > 200000 ORDER BY RELNAME;
DROP TABLE t1 IF EXISTS;
DROP TABLE t2 IF EXISTS;
DROP TABLE t3 IF EXISTS;
SET catalog system;
DROP DATABASE test_crdb;
```
