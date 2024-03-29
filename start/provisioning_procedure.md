---

copyright:
  years: 2023
lastupdated: "2023-04-20"

keywords: getting started with Netezza Performance Server, provisioning Netezza Performance Server

subcollection: netezza

---

{:shortdesc: .shortdesc}
{:screen: .screen}  
{:codeblock: .codeblock}  
{:pre: .pre}
{:tip: .tip}
{:note: .note}
{:important: .important}
{:external: target="_blank" .external}
{:step: data-tutorial-type='step'}

# Getting started with {{site.data.keyword.netezza_short}}
{: #getstarted}

{{site.data.keyword.netezza_full}} ({{site.data.keyword.netezza_short}}) is a fully managed, cloud native analytical data warehouse that is based on massively parallel processing [MPP] architecture. {{site.data.keyword.netezza_short}} is mainly used for analytical processing of historical data, and can process from 100TB up to a few petabytes of data with best in the class performance. Its array of SPUs processes disjoint dataset in parallel which is then aggregated to come up with final result set.

Learn how to provision a {{site.data.keyword.netezza_short}} instance on Azure or AWS, how to retrieve information about endpoints, and create credentials to access your instance.
{: shortdesc}

## Before you begin
{: #provisioning_prereqs}

You need a pay-as-you-go {{site.data.keyword.cloud_notm}} account to start the provisioning process.

For more information, see [Setting up your {{site.data.keyword.cloud_notm}} account](https://cloud.ibm.com/docs/account?topic=account-account-getting-started) and [Upgrading your account](https://cloud.ibm.com/docs/account?topic=account-upgrading-account).

## Provisioning {{site.data.keyword.netezza_short}} instances
{: #provisioning_instances}

1. Go to the the [{{site.data.keyword.cloud_notm}} catalog](https://cloud.ibm.com/catalog) or [Cloud Pak for Data as a Service](https://dataplatform.cloud.ibm.com/) web console.
1. Locate the {{site.data.keyword.netezza_short}} tile and click it.  
   You are redirected to the provisioning page.
1. On the provisioning page, select your platform.
   You can choose Azure or AWS.
1. Choose a corresponding location.
   Based on your selection of platform, {{site.data.keyword.netezza_short}} is available in different locations.
1. Specify a name for your instance.
1. Choose a workload contour, Netezza units (NZU) and storage values.
   For more information about workload contours, Netezza Units (NZU) and available storage configuration, see [Architecture](/docs/netezza?topic=netezza-compute-isolation&interface=ui).  
1. Choose a performance profile and storage density.
1. Choose an endpoint type.  
   For more information about connectivity options, see [Connecting to Netezza Performance Server](/docs/netezza?topic=netezza-connecting). 
1. Configure advanced features.  
   
   For Azure, if you want to be able to access NPS by connecting to the database or web console with [private endpoints](https://learn.microsoft.com/en-us/azure/private-link/) only, you must provide the list of subscription IDs that will be used to create the private endpoint.  
   If you deploy your {{site.data.keyword.netezza_short}} instance with both private and public endpoints, you do not have to provide subscription IDs.

   For AWS, if you want to be able to access NPS by connecting to the database or web console with [private endpoints](https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html), you must provide the list of service principals that will be used to create the VPC endpoint service.

1. Click **Create** to start the provisioning process.  
   You are redirected to the {{site.data.keyword.cloud_notm}} dashboard page. 
1. Go to **Resource list**.  
   After the provisioning process is finished, the instance status is `Active`. 

## Next steps
{: #provisioning_next}

- [Connect to your instance](/docs/netezza?topic=netezza-connecting-overview)
