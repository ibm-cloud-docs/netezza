---

copyright:
  years: 2023
lastupdated: "2023-02-24"

keywords: web console, netezza web console, ui

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}
{:codeblock: .codeblock}
{:screen: .screen}
{:caption: .caption}

# Creating tables
{: #create-tables}

1. Go to **Databases**.
1. Select the database in which you want to create a table.
1. Select the schema in which you want to create a table.
1. Ensure that you are in the **DB Objects > Tables* tab.
1. Click **Create table**.
1. Type a name for the table.  
   If the name contains special characters, enclose it in double quotation marks.  
   You can select a name that has up to 128 characters. The name must begin with a letter or an underscore and can't contain embedded spaces. The name must be unique.

1. Add columns to the table:

   1. In the *Columns* section, under *Name*, type a name for the column.
      The name must start with a letter.
   1. Select your column type.  
      The data type restricts the type of data that can be stored in a column. For example, preventing entry of alphanumeric characters into a numeric field.  
      Data types also help sort data correctly and play a role in optimizing storage. For all these reasons, it is important to pick the appropriate data type.
   1. Specify whether or not you allow NULL values to be inserted.  
      A column that allows NULL values also allows rows to be inserted with no value in that column. A column that does not allow NULL values does not accept rows with no value.
   1. Specify the default value to be used if no value is specified when a row is inserted.      
   1. In the *Distribute on* and *Organize on* sections, specify the distribution key for the table by selecting up to four columns.

      To add another column, click the plus sign.

1. Click **Create**.

## Column and table constraints
{: #constraints-table-column}

When you create a table, you can specify constraints for a column, table, or both.

For example, a table_constraint can be:

```sql
{ PRIMARY KEY ( column_name [, ... ] ) |  FOREIGN KEY ( column_name [,
... ] ) REFERENCES reftable (refcolumn ) [ MATCH matchtype ] [ ON
DELETE action ] [ ON UPDATE action ] [ [ NOT ] DEFERRABLE ] [ INITIALLY
checktime ] } [, ...]
```
{: codeblock}

The system permits and maintains primary key, default, foreign key, unique, and references. Because Netezza Performance Server does not support constraint checking and referential integrity, you must ensure your own constraint checking and referential integrity.

If you have permission to create a table, you can specify a constraint.

If you have permission to alter a table, you can add or drop a table constraint.

You cannot change constraint names or directly change the owner of the constraint. The owner of the constraint is always the owner of the table. Thus, if you change the owner of the table, the system changes the owner of all associated constraints.

## Grooming tables
{: #groom-tbls}

`GROOM TABLES` processes and reorganizes table records in each data slice in a series of steps. You can still run operations such as `SELECT`, `UPDATE`, `DELETE`, and `INSERT` while data grooming is happening.  
`SELECT` operations run in parallel with the groom operations.  
`INSERT`, `UPDATE`, and `DELETE` operations run serially between the groom steps.  
For cluster based tables (CBTs), `GRROM TABLE` takes longer. Tthe `INSERT`, `UPDATE`, and `DELETE` operations might be pending longer until the current step completes.

You can use the Groom Table functionality to reclaim disk space from deleted or outdated rows. You can also use this option to reorganize tables based on the clustered base table organizing keys or to migrate data from tables that have multiple stored versions.

1. Go to **Databases**.
1. Select your database and schema.
1. Ensure that you are in the *DB Objects > Tables* tab.
1. Select the table that you want to groom.
1. Go to the *Grooms* tab.
1. Click **Groom table**.

- To run the operation, the user must have object privileges. The user does not have to be an administrator.

- You cannot groom tables inside a transaction block (begin or commit pair) or with a stored procedure.

- When you specify organizing keys for an existing table to make it a CBT, the new organization might impact the compression size of the table. The new organization can create sequences of records that improve the overall compression benefit, or it can create sequences that do not compress so well. After a groom operation, your table size might change.

### Modes
{: #modes}

You can choose different modes when you groom tables.

|Value | Description|
|:-----|:-----------|
|RECORDS READY | Reclaims and reorganizes records in the tables that were not groomed, and in those that were already groomed but got marked for regrooming. This is the default setting for clustered base tables (CBT).|
|RECORDS ALL | Reclaims and reorganizes all records in a table. This is the default for a non-CBT.|
|PAGES ALL | Identifies and marks the data pages in the table with no visible record as Empty to free up disk extents.|
|PAGES START | Identifies and marks the leading data pages in the table with no visible record as Empty. Stops when it finds a non-empty data page.|
|VERSIONS | Migrates records from previous table versions. Dropped columns do not appear and added columns show default values.|
{: caption="Table 1. The table lists modes-related values and their definitions." caption-side="bottom"}
