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

# Creating views
{: #create-views}

1. Go to **Databases**
1. Select the database in which you want to create a view.
1. Select the schema in which you want to create a view.
1. Go to the **DB Objects > Views** tab.
1. Click **Create view**.
1. Type a name for the view.  
   The name can be up to 128 characters long and it must begin with a letter or underscore and cannot contain embedded spaces. The name must be unique.  
   If the name contains special characters, enclose it in double quotation marks.  
1. Specify whether the view is materialized.
1. Specify the query.  
   Enter the SQL query that provides the columns and rows of this view.  
   If the database object name contains special characters, enclose it in double quotation marks.
1. Click **Create**.
