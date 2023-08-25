---

copyright:
  years: 2023
lastupdated: "2023-08-23"

keywords: web console, query editor, SQL

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}

# Query editor
{: #query-editor}

With the query editor, you can run SQL queries on a specific host and database. You can also save any of the queries that you create.
{: shortdesc}

## Running queries with the query editor
{: #create-queries}

### Running multiple SQL statements in a single sessions
{: #single-session-queries}

1. Go to **Query editor**.
1. From **Data objects**, select the database and schema in which you want to run the query.  
   If you do not pick a schema, the default database schema is selected.

1. In **Workseet settings**, leave the `Statement separator` field empty or type a separator other than the semicolon `;`.  
   For example, you can pick the ampersand `&`.

1. Type the SQL statements that you want to run.  
   
   Example:

   ```sql
   set schema A1; create table TBL1 (COL1 int); 
   ```

   If your query is a select statement, a `Set Limit` option shows up. With `Set Limit`, you can specify how many rows of data to retrieve. The default is `No limit`.  
   In **Worksheet settings**, you can add a limit clause in a select statement that is greater than your **Default maximum number of rows limit in result**, for example: `select * from table1 limit 10;`, the **Results** field shows the smaller value of these two parameters.

1. Choose one of the following options:

   - Click **Run** to run the query.  
     The results of the query are displayed in the panel in one block.

   - Click the floppy disk icon that is in the `SQLworksheet` toolbar to save the query as a template.  
     The saved query is added to **Saved queries** and **Queries > Recent Queries**.

   - Click **Clear** to clear the query.

### Running multiple SQL statements in different sessions
{: #multiple-sessions-queries}

1. Go to **Query editor**.
1. From **Data objects**, select the database and schema in which you want to run the query.  
   If you do not pick a schema, the default database schema is selected.

1. In **Workseet settings**, in the `Statement separator` field, type a separator other than the semicolon `;`.  
   For example, you can pick the ampersand `&`.

1. Type the SQL statements that you want to run.  

   Example:

   ```sql
   set schema A1; create table TBL1 (COL1 int) & select * from A1.TBL1
   ```

   In the example, the first 2 statements run in the same session, and the third statement runs in a separate session. `&` is used to separate the third statement in the worksheet. 

   If your query is a select statement, a `Set Limit` option shows up. With `Set Limit`, you can specify how many rows of data to retrieve. The default is `No limit`.  
   In **Worksheet settings**, you can add a limit clause in a select statement that is greater than your **Default maximum number of rows limit in result**, for example: `select * from table1 limit 10;`, the **Results** field shows the smaller value of these two parameters.

1. Choose one of the following options:

   - Click **Run** to run the query.  
     The results of the query are displayed in the panel in multiple blocks (depending on the number of sessions that you chose to run).
 
   - Click the floppy disk icon that is in the `SQLworksheet` toolbar to save the query as a template.  
     The saved query is added to **Saved queries** and **Queries > Recent Queries**.

   - Click **Clear** to clear the query.