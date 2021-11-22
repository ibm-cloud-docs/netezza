---

copyright:
  years: 2021
lastupdated: "2021-11-02"

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

You do not need to be the administrator to view recent queries. You must have the *List* permission for the users who ran the queries and the database objects to see the history records.

## Stored queries
{: #stored-queries}

### Creating stored queries
{: #create-stored-queries}

1. Go to **Queries > Stored queries**.
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

### Finding stored queries
{: #find-stored-queries}

1. Go to **Queries > Recent queries**.
1. Type the name of the query you are looking for in the search bar.

### Deleting stored queries
{: #delete-stores-queries}

1. Go to **Queries > Stored queries**.
1. Select a query.
1. From the overflow menu, click **Remove**.
1. Confirm your choice by clicking **Remove** again.
