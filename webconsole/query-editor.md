---

copyright:
  years: 2023
lastupdated: "2023-08-30"

keywords: web console, query editor, SQL, running queries with the query editor, queries that contain semicolons in a single session

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

1. Go to **Query editor**.
1. From **Data objects**, select the database and schema in which you want to run the query.
   If you do not pick a database, the default database `SYSTEM` is selected.
   If you select a database but do not pick a schema, the default schema for the database is selected.

1. Type the SQL statements that you want to run.
    In the query editor, each SQL statement is separated by the default statement separator - a semicolon (`;`). When you run a query with the default setting, each SQL statement is run in its own session.

     Example:

     ```sql
     SELECT * FROM "TESTDB"."ADMIN"."TEST_TABLE" LIMIT 10;

     INSERT INTO "TESTDB"."ADMIN"."TEST_TABLE" ("COL1") VALUES (1);

     SELECT * FROM "TESTDB"."ADMIN"."TEST_TABLE" LIMIT 10;
     ```
     The statements from the example run in 2 separate sessions.

      - If you want to run queries that contain semicolons in a single session, see [Running SQL statements in a single session](/docs/netezza?topic=netezza-query-editor#single-session-queries).
      - If you want to group queries that contain semicolons to run them in variuos sessions, see [Running multiple SQL statements in different sessions](/docs/netezza?topic=netezza-query-editor#multiple-sessions-queries).

1. If your query is a select statement, a `Set Limit` option shows up. With `Set Limit`, you can specify how many rows of data to retrieve. The default is `No limit`.

1. In **Workheet settings**, you can add the following options:

   - a limit clause in a select statement that is greater than your **Default maximum number of rows limit in result**.

      Example:
      ```sql
      select * from table1 limit 10;
      ```

      The **Results** field shows the smaller value of these two parameters.

   - set the Statement separator field to empty or type a separator other than the semicolon `;`. For example, you can pick the ampersand `&`.

   - set query editor time out in minutes.

1. Choose one of the following options:

   - Click **Run** to run the query.
     You can run selection, run to cursor, or run from cursor.
     The results of the query are displayed in the panel in one block.

   - Click the floppy disk icon that is in the `SQLworksheet` toolbar to save the query as a template.
     The saved query is added to **Saved queries** and **Queries > Recent Queries**.

   - Click **Clear** to clear the query.

The Query Editor supports a maximum result set of 519,999,999 rows. If a query exceeds this limit, it will return the error: `Error: The query result set is too large to load, please add or reduce the row limit.`
{: note}

### Running multiple SQL statements in a single session
{: #single-session-queries}

1. Go to **Query editor**.
1. From **Data objects**, select the database and schema in which you want to run the query.
   If you do not pick a database, the default database `SYSTEM` is selected.
   If you select a database but do not pick a schema, the default schema for the database is selected.

1. Type the SQL statements that you want to run.

   Example:

   ```sql
   set schema A1; create table TBL1 (COL1 int);
   ```

1. In **Workheet settings**, you can add the following options:

   - If your query is a select statement, a `Set Limit` option shows up. With `Set Limit`, you can specify how many rows of data to retrieve. The default is `No limit`. Add a limit clause in a select statement that is greater than your **Default maximum number of rows limit in result**.

      Example:

      ```sql
      select * from table1 limit 10;
      ```

      The **Results** field shows the smaller value of these two parameters.

   - set the `Statement separator` field to empty or type a separator other than the semicolon `;`. For example, you can pick the ampersand `&`. When you use an empty separator or a separator other than the default separator, all the statements in the current worksheet can run together, in the same session. Now, the 2 statements from the example from step 3 run in 1 session.

   - set query editor time out in minutes.

1. Choose one of the following options:

   - Click **Run** to run the query.
     You can run selection, run to cursor, or run from cursor.
     The results of the query are displayed in the panel in one block.

   - Click the floppy disk icon that is in the `SQLworksheet` toolbar to save the query as a template.
     The saved query is added to **Saved queries** and **Queries > Recent Queries**.

   - Click **Clear** to clear the query.

### Running multiple SQL statements in different sessions
{: #multiple-sessions-queries}

1. Go to **Query editor**.
1. From **Data objects**, select the database and schema in which you want to run the query.
   If you do not pick a database, the default database `SYSTEM` is selected.
   If you select a database but do not pick a schema, the default schema for the database is selected.

1. Type the SQL statements that you want to run.

   Example:

   ```sql
   set schema A1; create table TBL1 (COL1 int) & select * from A1.TBL1
   ```

1. In **Workheet settings**, you can add the following options:

   - If your query is a select statement, a `Set Limit` option shows up. With `Set Limit`, you can specify how many rows of data to retrieve. The default is `No limit`. Add a limit clause in a select statement that is greater than your **Default maximum number of rows limit in result**.

      Example:

      ```sql
      select * from table1 limit 10;
      ```

      The **Results** field shows the smaller value of these two parameters.

   - set the `Statement separator` field to a separator to other than the semicolon `;`. For example, you can pick the ampersand `&`. Now, in the example from step 3, the first 2 statements run in the same session, and the third statement runs in a separate session. `&` is used to separate the third statement in the worksheet.

   - set query editor time out in minutes.

1. Choose one of the following options:

   - Click **Run** to run the query.
     You can run selection, run to cursor, or run from cursor.
     The results of the query are displayed in the panel in multiple blocks (depending on the number of sessions that you chose to run).

   - Click the floppy disk icon that is in the `SQLworksheet` toolbar to save the query as a template.
     The saved query is added to **Saved queries** and **Queries > Recent Queries**.

   - Click **Clear** to clear the query.
