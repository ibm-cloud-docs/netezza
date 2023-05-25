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

# Procedures
{: #create-procedures}

## Creating procedures
{: #creating_proc}

1. Go to **Databases**.
1. Select the database in which you want to create a procedure.
1. Select the schema in which you want to create a procedure.
1. Go to **DB objects > Procedures**.
1. Click **Create procedure**.
1. Type a name for the procedure.
   The name can be up to 128 characters long and it must begin with a letter or underscore and cannot contain embedded spaces. The name must be unique.  
   If the name contains special characters, enclose it in double quotation marks.  
1. Specify the arguments.  
   This is to specify the parameter type list of the procedure. For example, `int`.
1. Specify the return type of your procedure.  
   For example, `int`.
1. Specify the procedure body.  
   This is the source code for the body of the stored procedure. For example

   ```sql
   BEGIN RAISE NOTICE 'The customer name is David'; END;
   ```
   {: codeblock}

1. Specify whether to replace the procedure.
1. Specify whether to include an execute clause.
1. Click **Create**.
