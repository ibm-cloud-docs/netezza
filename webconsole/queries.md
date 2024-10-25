---

copyright:
  years: 2023
lastupdated: "2024-01-03"

keywords: web console, queries

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}
{:screen: .screen}

# Queries
{: #queries}

## Recent queries
{: #recent-queries}

On the page, you can see the most recent 2000 queries.

The administrator privileges are not necessary to view recent queries. You must have the *List* permission for database objects used in the queries to see the history records. The **Recent Queries** view is only showing SQL statements that involve the generation of a query plan, for example, INSERT, UPDATE, DELETE, or SELECT statements. 


### Creating queries
{: #create-queries}

1. Go to **Query editor**.
1. Type a name for your query.
1. Select the database in which you want to run the query.
1. Select the schema where you want to run the query.

   If you do not pick a schema, the default database schema is selected.

1. Type the SQL query that you want to run.

   If your query is a select statement, a *Set Limit* option appears to allow you to specify how many rows of data you want to retrieve. The default is `No limit`.

1. When you add the necessary information, you can do one of the following:

   - Click **Run** to run the query.

     The results of the query are displayed in the panel.

   - Click the floppy disk icon that is next to the `Query field` name to save the query as a template.

     The saved query is added to **Queries > Recent Queries**.

   - Click **Clear** to clear the query.

### Finding queries
{: #find-queries}

1. Go to **Queries > Recent queries**.
1. Type the name of the query you are looking for in the search bar.

### Deleting queries
{: #delete-queries}

1. Go to **Queries**.
1. Select a query.
1. From the overflow menu, click **Remove**.
1. Confirm your choice by clicking **Remove** again.

## Query history
{: #query-history}

To access the page, go to **Queries > Query history** or select **Query history** from the home page.

When you are on the **Query history** page, you can do the following:
- View your data in a table or card view.
- Export data to export your query history to a data file.
- Sort any column by placing the cursor on the column header.
- Find specific queries by using various filtering criteria.

  For example, you can use it to find queries that are submitted by a particular user or group, or queries that run on a particular database.

- Search the query history but clicking **Search**.
  You can use a predefined search criteria, or create a new search option.

- Select the columns to display in the table.

  Click the settings icon next to the **Find query history** field to edit columns.

- View metrics and statistics status.

### Query history columns
{: #query-history-columns}

- **Start time**
   Specifies the time when the query started.

- **End time**
   Specifies the time when the query finished.

- **Elapsed time**
   Specifies the time that it took the query to run.

- **Query text**
   Specifies the SQL command of the query.

- **Database**
   Specifies the name of the database on which the query ran.

- **Schema**
   Specifies the schema that was used for the query.

- **User name**
   Species the name of the user that ran the query.

- **Group**
   Specifies the group of users from which the query originates.

- **Result rows**
   Specifies the number of result rows that were returned by the query.

- **Prep time**
   Specifies the preparation time that was needed for the query.

- **Status**
   Specifies the completion status of the query.

- **Plan ID**
   Specifies the ID of the system-generated plan for the query.

- **Client IP**
   Specifies the IP of the client that ran the SQL query.

- **GRA time**
   Specifies the time that the query spent at the GRA.

- **Checksum**
   Specifies the checksum of the query.

- **Client type**
   Specifies the type of the client that ran the query.

- **Client host**
   Specifies the hostname of the client from which the query originates.

- **Resource group name**
   Specifies the resource group on which the query ran.

<!-- - **Session ID**
   Specifies the ID of the session in which the query ran.

- **Client user ID**
   Specifies the client user ID of the client that ran the query.

- **Client application name**
   Specifies the client application name from which the query originates.

- **Client workstation name**
   Specifies the client workstation name from which the query originates.

- **Client accounting string**
   Specifies the accounting string of the client that ran the query. -->
