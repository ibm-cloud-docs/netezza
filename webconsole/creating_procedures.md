---

copyright:
  years: 2023
lastupdated: "2023-21-02"

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

# Creating procedures
{: #create-procedures}

1. Go to **Databases**.
1. Select the database in which you want to create a function.
1. Go to **DB objects > Procedures**.
1. Click **Create procedure**.
1. Select the schema where you want to create a procedure.
1. Type a name for the procedure.
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

1. Click **Create**.