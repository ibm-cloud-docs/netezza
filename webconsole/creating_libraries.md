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

# Libraries
{: #create-libraries}

## Creating libraries
{: #creating_lib}

1. Go to **Databases**
1. Select the database in which you want to create a view.
1. Go to **DB Objects > Libraries**.
1. Click **Create library**.
1. Select the schema where you want to create a library.
1. Type a name for the library.  
1. Specify the external host object filename.

   This is the path for the compiled host object file of the shared library. For example, `/etc/motd`.

1. Specify the external SPU object filename.

   This it the path for the compiled object file of the Linux SPU. For example, `/etc/motd`.

1. Click **Create**.

You can also select to replace your library, include a load clause, and include a dependencies clause.
