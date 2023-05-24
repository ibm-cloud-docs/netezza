---

copyright:
  years: 2023
lastupdated: "2023-05-24"

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

{{site.data.keyword.netezza_full}} ({{site.data.keyword.netezza_short}}) is a fully managed, cloud native analytical data warehouse that is based on massively parallel processing (MPP) architecture. {{site.data.keyword.netezza_short}} is mainly used for analytical processing of historical data, and can process from 100TB up to a few petabytes of data with best in the class performance. Its array of SPUs processes disjoint dataset in parallel which is then aggregated to come up with final result set.

Learn how to provision a {{site.data.keyword.netezza_short}} instance on Azure or AWS and configure private endpoint access.
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
1. Select your platform.
   You can choose Azure or AWS.
1. Choose a corresponding location.
   Based on your selection of platform, {{site.data.keyword.netezza_short}} is available in different locations.
1. Specify a name for your instance.
1. Choose a workload contour, Netezza units (NZU) and storage values.
   For more information about workload contours, Netezza Units (NZU) and available storage configuration, see [Architecture](/docs/netezza?topic=netezza-compute-isolation&interface=ui).  
1. Choose a performance profile and storage density.
1. Choose an endpoint type.   
1. Configure advanced features.  
   
   For Azure, if you want to access {{site.data.keyword.netezza_short}} by connecting to the database or web console with [private endpoints](https://learn.microsoft.com/en-us/azure/private-link/) only, you must provide the list of [subscription IDs](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id) that will be used to create the private endpoint.  

   For AWS, if you want to access {{site.data.keyword.netezza_short}} by connecting to the database or web console with [private endpoints](https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html), you must provide the Amazon Resource Names (ARNs) for the [service principals](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html) that will be used to create the VPC endpoint service.

1. Click **Create** to start the provisioning process.  
   You are redirected to the {{site.data.keyword.cloud_notm}} dashboard page. 
1. Go to **Resource list**.  
   After the provisioning process is finished, the instance status is `Active`. 

## What to do next
{: #wtdn}

If you selected to connect to your instance by using private endpoints, see [Configuring private endpoints](/docs/netezza?topic=netezza-getstarted#creating-private-endpoints).
{: important}

