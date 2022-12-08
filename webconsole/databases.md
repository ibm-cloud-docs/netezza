---

copyright:
  years: 2021
lastupdated: "2022-12-08"

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

# Databases
{: #databases}

You can access database information by using the web console.
{: shortdesc}

## Information about databases
{: #db-info}

|Value          | Description                      |
|:--------------|:---------------------------------|
|Name       | Specifies the name of the database.|
|Default schema | Specifies the deafult schema.|
|Owner          | Specifies the owner of the database.|
|User tables    | Specifies the number of tables that are created in the database.|
|Character set| Specifies the character set for the database.|
|Created on | Specifies when the database was created.|
{: caption="Table 1. The table lists database-related values and their definitions." caption-side="bottom"}

## Creating databases
{: #create-db}

1. Go to **Databases**.
1. Click **Create database**.
1. Specify the name of the database.
1. Click **Create**.

## Creating schemas
{: #create-schemas}

1. Go to **Databases**.
1. Select the database in which you want to create the schema.
1. Click **Create schema**.
1. Type a name for the schema.
1. Click **Create**.

## Creating tables
{: #create-tables}

1. Go to **Databases**.
1. Select the database in which you want to create the table.
1. Select the schema in which you want to create the table.
1. In the **DB Objects > Tables** section, click **Create table**.
1. Type a name for the table.  
   You can select a name that has up to 128 characters. The name must begin with a letter or an underscore and cannot contain embedded spaces. The name must be unique.  

1. Add columns to the table:

   1. In the **Columns** section, type a name for the column.
   1. Select the column type.

      The data type restricts the type of data that can be stored in a column. For example, preventing entry of alphanumeric characters into a numeric field. Data types also help sort data correctly and play a role in optimizing storage. For all these reasons, it is important to pick the appropriate data type.

   1. Specify whether or not you allow NULL values to be inserted. A column that allows NULL values also allows rows to be inserted with no value in that column. A column that does not allow NULL values does not accept rows with no value.
   1. Specify the default value to be used if no value is specified when a row is inserted.
   1. In the *Distribution on* and *Organize on* sections, specify the distribution key for the table by selecting up to four columns.

   Also, you can add columns after you created the table. Go to **Databases > Schema > DB objects > Tables**, select your table, and click **Create column**.
   {: tip}

1. Click **Create**.

### Column and table constraints
{: #constraints-table-column}

When you create a table, you can specify constraints for a column, table, or both.

For example, a table_constraint can be:

```
{ PRIMARY KEY ( column_name [, ... ] ) |  FOREIGN KEY ( column_name [,
... ] ) REFERENCES reftable (refcolumn ) [ MATCH matchtype ] [ ON
DELETE action ] [ ON UPDATE action ] [ [ NOT ] DEFERRABLE ] [ INITIALLY
checktime ] } [, ...]
```
{: screen}

The system permits and maintains primary key, default, foreign key, unique, and references. Because Netezza Performance Server does not support constraint checking and referential integrity, you must ensure your own constraint checking and referential integrity.

If you have permission to create a table, you can specify a constraint.

If you have permission to alter a table, you can add or drop a table constraint.

You cannot change constraint names or directly change the owner of the constraint. The owner of the constraint is always the owner of the table. Thus, if you change the owner of the table, the system changes the owner of all associated constraints.

### Grooming tables
{: #groom-tbls}

**GROOM TABLE** processes and reorganizes the table records in each data slice in a series of steps. You can perform operations such as **SELECT**, **UPDATE**, **DELETE**, and **INSERT** while the online data grooming is taking place.

The **SELECT** operations run in parallel with the groom operations.

The **INSERT**, **UPDATE**, and **DELETE** operations run serially between the groom steps.

For cluster based tables (CBTs), the groom steps are longer than for non-CBTs. The **INSERT**, **UPDATE**, and **DELETE** operations might be pending for a longer time until the current step completes.

You can use the **GROOM TABLE** functionality to reclaim disk space from deleted or outdated rows. You can also use this option to reorganize tables based on the clustered base table organizing keys or to migrate data from tables that have multiple stored versions.

1. Go to **Databases**.
1. Select your database.
1. Go to **DB Objects > Tables**.
1. Select the table that you want to groom.
1. Go to the **Grooms* tab.
1. Click **Groom table**.

- To groom tables, users must have the **GROOM** object privilege. You do not have to be an administrator.

- You cannot groom tables inside a transaction block (begin or commit pair), or with a stored procedure.

- When you specify organizing keys for an existing table to make it a cluster based table (CBT), the new organization might impact the compression size of the table. The new organization might create sequences of records that improve the overall compression benefit, or it might create sequences that do not compress so well. After a groom operation, your table size might be different compared to its previous organization.

### Modes
{: #modes}

You can choose different modes when grooming tables.

|Value | Description|
|:-----|:-----------|
|RECORDS READY | Reclaims and reorganizes records in the tables that were not groomed, and in those that were already groomed but got marked for regrooming. This is the default setting for clustered base tables (CBT).|
|RECORDS ALL | Reclaims and reorganizes all records in a table. This is the default for a non-CBT.|
|PAGES ALL | Identifies and marks the data pages in the table with no visible record as Empty to free up disk extents.|
|PAGES START | Identifies and marks the leading data pages in the table with no visible record as Empty. Stops when it finds a non-empty data page.|
|VERSIONS | Migrates records from previous table versions. Dropped columns do not appear and added columns show default values.|
{: caption="Table 1. The table lists modes-related values and their definitions." caption-side="bottom"}

## Creating views
{: #create-views}

1. Go to **Databases**
1. Select the database in which you want to create the view.
1. Select the schema in which you want to create the view.
1. Go to **DB Objects > Views**.
1. Click **Create view**.
1. Type a name for the view.  
   The name can be up to 128 characters long and it must begin with a letter or underscore and cannot contain embedded spaces. The name must be unique.

1. Specify whether the view is materialized.
1. Specify the query.  
   Enter the SQL query that provides the columns and rows of this view.

1. Click **Create**.

## Creating sequences
{: #create-sequences}

1. Go to **Databases**
1. Select the database in which you want to create the sequence.
1. Select the schema in which you want to create the sequence.
1. Go to **DB Objects > Sequences**.
1. Click **Create sequence**.
1. Type a name for the sequence.
1. Specify the starting integer value for the sequence.
1. Specify the minimum value of the sequence.
1. Specify the maximum value of the sequence.
1. Specify the increment by value of the sequence.
1. Select *Cycle* so the sequence restarts when it reaches its last value.  
   The default is NO CYCLE, which means that the sequence stops when it reaches its last value.

1. Click **Create**.

## Creating synonyms
{: #create-synonyms}

1. Go to **Databases**
1. Select the database in which you want to create a view.
1. Select the schema in which you want to create the synonym.
1. Go to **DB Objects > Synonyms**.
1. Click **Create synonym**.
1. Type a name for the synonym.
1. Specify the reference type.  
   For example, table, view, etc.

1. Specify the reference type for which you are creating this synonym.
1. Click **Create**.

## Creating procedures
{: #create-procedures}

1. Go to **Databases**.
1. Select the database in which you want to create the procedure.
1. Select the schema in which you want to create the procedure.
1. Go to **DB objects > Procedures**.
1. Click **Create procedure**.
1. Type a name for the procedure.
1. Specify the argument list.
1. Specify the return type of your procedure.  
   For example, `int`.

1. Specify the procedure body.  
   This is the source code for the body of the stored procedure. For example

   ```sql
   BEGIN RAISE NOTICE 'The customer name is David'; END;
   ```
   {: codeblock}

1. Click **Create**.

## Creating functions
{: #create-functions}

You cannot create functions with the web console. Instead, you can use the dedicated command. For more information, see [CREATE {OR REPLACE} FUNCTION](https://www.ibm.com/docs/en/netezza?topic=reference-create-replace-function).

## Creating aggregates
{: #create-aggregates}

You cannot create aggregates with the web console. Instead, you can use the dedicated command. For more information, see [CREATE {OR REPLACE} AGGREGATE](https://www.ibm.com/docs/en/netezza?topic=reference-create-replace-aggregate).

## Creating libraries
{: #create-libraries}

You cannot create libraries with the web console. Instead, you can use the dedicated command. For more information, see [CREATE {OR REPLACE} LIBRARY](https://www.ibm.com/docs/en/netezza?topic=reference-create-replace-library)

## Assigning owners to objects
{: #assign-owner}

1. Go to **Databases**.
1. Select the database for which you want to assign an owner.
1. Select the schema for which you want to assign an owner.
1. From **DB objects**, select an object type.  
   For example, *Tables*.

1. Identify your object name, and click **Assign owner** from the overflow menu.  
   The* Assign owner* window appears and the current owner of the object is displayed.

1. Choose an owner.  
   You can select a new owner from the drop down menu.

1. Click **Assign**.
