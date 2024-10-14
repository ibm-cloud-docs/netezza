---

copyright:
  years: 2023
lastupdated: "2023-03-06"

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

# Sequences
{: #create-sequences}

## Creating sequences
{: #creating_sq}

1. Go to **Databases**
1. Select the database in which you want to create a sequence.
1. Select the schema in which you want to create a sequence.
1. Go to **DB Objects > Sequences**.
1. Click **Create sequence**.
1. Type a name for sequence.
   The name can be up to 128 characters long and it must begin with a letter or underscore and cannot contain embedded spaces. The name must be unique.
   If the name contains special characters, enclose it in double quotation marks.
1. Specify the starting integer value for the sequence.
1. Specify the minimum value.
1. Specify the maximum value.
1. Specify the increment by value.
1. Specify whether you want the sequence to restart when it reaches its last value by checking the **Cycle** box.
   The default is **No cycle**, which means that the sequence stops when it reaches its last value.
1. Click **Create**.

You can select **Assign owner**, **Rename**, **Alter** and **Drop** options from the overflow menu.
{: note}
