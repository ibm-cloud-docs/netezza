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

# Creating sequences
{: #create-sequences}

1. Go to **Databases**
1. Select the database in which you want to create a view.
1. Go to **DB Objects > Sequences**.
1. Click **Create sequence**.
1. Select the schema where you want to create the sequence.
1. Type a name for sequence.
1. Specify the starting integer value for the sequence.
1. Specify the minimum value of the sequence.
1. Specify the maximum value of the sequence.
1. Select *Cycle* so the sequence restarts when it reaches its last value.

   The default is NO CYCLE, which means that the sequence stops when it reaches its last value.

1. Click **Create**.