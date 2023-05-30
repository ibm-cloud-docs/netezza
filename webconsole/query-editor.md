---

copyright:
  years: 2023
lastupdated: "2023-02-02"

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

## Creating queries
{: #create-queries}

1. Go to **Query editor**.
1. From **Data objects**, select the database and schema in which you want to run the query.  
If you do not pick a schema, the default database schema is selected.

1. Type the SQL query that you want to run.  
If your query is a select statement, a Set Limit option shows up to allow you to specify how many rows of data you would like to retrieve. The default is No limit.

In the **Worksheet settings** you can specify the **Statement separator** you want to use. A semicolon (";") is the default **Statement separator** and you must change it to an ampersand ("&") when your queries contain semicolons (";") to avoid errors.

1. When you input the information, you can do one of the following:

   - Click **Run** to run the query.  
     The results of the query are displayed in the panel.

   - Click the floppy disk icon that is in the `SQLworksheet` toolbar to save the query as a template.  
     The saved query is added to **Saved queries** and **Queries > Recent Queries**.

   - Click **Clear** to clear the query.
