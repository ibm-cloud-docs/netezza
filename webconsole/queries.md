---

copyright:
  years: 2025
lastupdated: "2025-01-29"

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

## Query history
{: #query_history}

The administrator privileges are not necessary to view query history. The **Query history** view is only showing SQL statements that involve the generation of a query plan, for example, INSERT, UPDATE, DELETE, or SELECT statements.

The Query History can be filtered by selecting from various preset intervals or specifying a custom time interval.

### Charts
{:queryhistory_chart}

- Success Ratio: Represents the ratio of queries executed within the selected time span. This metric calculates the total number of queries fired against the number of completed and failed queries (with varying failure reasons).
- Databases: Displays the total number of queries fired on the databases during the selected time span.
- Users:

   - For Admin users: Displays the total number of queries fired by all users within the selected time span.
   - For Non-admin users: Shows the total number of queries fired by the individual user within the selected time span.

The number of queries displayed is limited to a maximum of 1M rows.
{: note}

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

<!-- ### Deleting queries
{: #delete-queries}

1. Go to **Queries**.
1. Select a query.
1. From the overflow menu, click **Remove**.
1. Confirm your choice by clicking **Remove** again. -->


<!-- - **Session ID**
   Specifies the ID of the session in which the query ran.

- **Client user ID**
   Specifies the client user ID of the client that ran the query.

- **Client application name**
   Specifies the client application name from which the query originates.

- **Client workstation name**
   Specifies the client workstation name from which the query originates.

- **Client accounting string**
   Specifies the accounting string of the client that ran the query.-->

## Query cancellation
{: #query-cancellation}

When you execute a long running query from query editor, you can cancel the query until the time it is in execution by a simple click of the button.
<!-- The cancellation now work for short queries. -->
