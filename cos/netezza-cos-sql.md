---

copyright:
  years: 2025
lastupdated: "2025-05-8"

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

## Storage Type Configuration in SQL

Customers can now define the storage type when creating or altering tables and databases using the following syntax:

- **Create Table with Storage Type**

  ```sql
  CREATE TABLE T1 (c1 INT) WITH STORAGE_TYPE AS Object;
  ```

- **Create Database with Storage Type**

  ```sql
  CREATE DATABASE db1 WITH STORAGE_TYPE AS Block;
  ```

- **Alter Database Storage Type**

  ```sql
  ALTER DATABASE db2 WITH STORAGE_TYPE AS Object;
  ```


The **storage type of an existing table cannot be changed** once data has been inserted. To change a table’s storage type, users should create a new table using CTAS (Create Table As Select), specifying the desired `storage_type`.
{: note}


## Datasource Configuration

- Users can configure and modify the default datasource's storage type at the **database level**.
- This allows consistent storage behavior across all tables within a database unless overridden at the individual table level.
