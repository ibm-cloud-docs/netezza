---

copyright:
  years: 2021
lastupdated: "2021-10-26"

subcollection: netezza

keywords: deprovision netezza, deprovisioning parameters, delete, deleting instances, delete an instance

---

{:shortdesc: .shortdesc}
{:new_window: target="_blank"}
{:external: .external}
{:codeblock: .codeblock}
{:pre: .pre}
{:screen: .screen}
{:tip: .tip}
{:important: .important}

# Deleting your deployment and removing your data
{: #deprovisioning}

{{site.data.keyword.netezza_full}} instances are deleted in production whenever you delete the instance in {{site.data.keyword.cloud_notm}}.
{: shortdesc}

## Deleting instances
{: #delete-instances}

To delete your deployment instance:

1. Log in to your {{site.data.keyword.cloud_notm}} account.
1. From the Resource list, select your deployment.
1. Using the menu icon, choose `Delete` from the list. 

## Removing backups
{: #remove-backups}

You can't remove backups manually. If you delete your deployment, its backups are deleted automatically within 30 days. If you want to restore a backup from a deleted deployment, you can raise a ticket with support.
