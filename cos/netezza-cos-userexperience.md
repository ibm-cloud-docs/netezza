---

copyright:
  years: 2025
lastupdated: "2025-09-19"

keywords: netezza cos

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:tip: .tip}
{:important: .important}
{:note: .note}
{:codeblock: .codeblock}
{:screen: .screen}
{:caption: .caption}

# User experience
{: #user_exp}

Netezza Performance Server offers seamless integration with Native Cloud Object Storage (NCOS), enabling a straightforward path for adoption. To create a table that utilizes object storage, users follow the standard table creation process with storage type selection or using database or system level settings.

## Object naming and deletion
{: #obj_naming_del}

**Object naming:** Each object saved in the object store has a prefix `/nps/<instance name>/<dbuuid>/<dsid>`.

**Object deletion:** An asynchronous garbage cleaner performs object deletion, but metadata objects are not automatically deleted.
