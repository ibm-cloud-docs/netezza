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

#  Schemas
{: #create-schemas}

## Creating schemas
{: #creating_sch}

1. Go to **Databases**.
1. Select the database in which you want to create a schema.
1. Click **Create schema**.
1. Type a name for the schema.  
   If the name contains special characters, enclose it in double quotation marks.
1. Specify the retention time interval (in days) for the schema.
1. Click **Create**.

## Updating retention time interval (time travel) for schemas
{: #updating_rt_sch}

1. Go to **Databases**.
1. Select the database in which the schema that you want to alter is.
1. From the overflow menu, click **Update interval**.
1. Type a retention time interval.  
   You can select between 1 day and up to 99 days, or zero to alter a temporal schema to nontemporal.   
   For more information on retention time interval and time travel, see [{{site.data.keyword.netezza_short}} time travel](/docs/netezza?topic=netezza-enablingdisabling_tt).
1. Click **Save**.

