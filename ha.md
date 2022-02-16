---

copyright:
  years: 2021
lastupdated: "2021-07-16"

keywords: HA for Netezza Performance Server, high availability for Netezza Performance Server, HA

subcollection: netezza

---

{:new_window: target="_blank"}
{:shortdesc: .shortdesc}
{:screen: .screen}
{:pre: .pre}
{:table: .aria-labeledby="caption"}
{:codeblock: .codeblock}
{:tip: .tip}
{:download: .download}
{{site.data.keyword.attribute-definition-list}}

# Understanding high availability for {{site.data.keyword.netezza_short}}
{: #ha}

{{site.data.keyword.netezza_full}} leverages OpenShift to recover from node failures. It has a built-in self-healing mechanisms to recover from compute node (SPU) failures. It uses highly reliable storage (IBM Block Storage, Azure Premium SSD and others) for user data, and Cloud Object Storage (COS) for backups and staging.
Netezza service however is zonal service. If the zone goes down, service will come up in another zone and then the user data needs to be restored after the service comes online.
More details can be found [here](/docs/netezza?topic=netezza-understanding-bc-dr).
{: shortdesc}

## Responsibilities
{: #ha-responsibilities}

To find out more about responsibility ownership for using {{site.data.keyword.cloud}} products between {{site.data.keyword.IBM_notm}} and the customer, see [Shared responsibilities for {{site.data.keyword.cloud_notm}} products](/docs/overview?topic=overview-shared-responsibilities).


