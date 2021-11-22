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
More details can be found [here](https://github.ibm.com/cloud-docs/netezza/bcdr.md). ( **Note:** Console displays the zone information on instance details page.)
{: shortdesc}

## Responsibilities
{: #ha-responsibilities}

To find out more about responsibility ownership for using {{site.data.keyword.cloud}} products between {{site.data.keyword.IBM_notm}} and the customer, see [Shared responsibilities for {{site.data.keyword.cloud_notm}} products](/docs/overview?topic=overview-shared-responsibilities).


## What level of availability do I need?
{: #ha-level}

You can achieve high availability on different levels in your IT infrastructure and within different components of your cluster. The level of availability that is right for you depends on several factors, such as your business requirements, the service level agreements (SLAs) that you have with your customers, and the resources that you want to expend.

## What level of availability does {{site.data.keyword.cloud_notm}} offer?
{: #ha-service}

The level of availability that you set up for your cluster impacts your coverage under the {{site.data.keyword.cloud_notm}} high availability service level agreement terms.

Service level objectives (SLOs) describe the design points that the {{site.data.keyword.cloud_notm}} services are engineered to meet. {{site.data.keyword.netezza_full}} is designed to achieve the following availability target.

| Availability target | Target Value   |
|---|---|
|  Availability % |  99.5 |
{: caption="Table 1. SLO for {{site.data.keyword.netezza_short}}" caption-side="top"}

The SLO is not a warranty and {{site.data.keyword.IBM_notm}} will not issue credits for failure to meet an objective. Refer to the SLAs for commitments and credits that are issued for failure to meet any committed SLAs. For a summary of all SLOs, see [{{site.data.keyword.cloud_notm}} service level objectives](/docs/overview?topic=overview-slo).

For more information on {{site.data.keyword.cloud_notm}}'s availability, see [Building resilient applications on {{site.data.keyword.cloud_notm}}](/docs/overview?topic=overview-zero-downtime).


## Locations
{: #ha-locations}

For more information about service availability within regions and data centers, see [Service and infrastructure availability by location](/docs/overview?topic=overview-services_region).
