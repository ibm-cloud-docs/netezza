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

# Managing owners
{: #managing_owners}

## Assigning owners to objects
{: #assign-owner}

1. Go to **Databases**.
1. Select the database in which you want to create a function.
1. Select an object type and object.

   For example, *Synonyms*.

1. Select **Assign owner** from the overflow menu.

   The* Assign owner* window appears and the current owner of the object is displayed.

1. Choose an owner.
1. Click **Assign**.

## Removing owners from object
{: #drop-owner}

To drop an owner, you must be the object owner, the admin user, or have appropriate object privileges. If you don’t have the privilege, you can request your admin to grant it to you.

1. Go to **Databases**.
1. Select the database in which you want to create a function.
1. Select an object type and object.

   For example, *Synonyms*.

1. Select **Drop owner** from the overflow menu.
1. Click **Drop**.