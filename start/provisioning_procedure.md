---

copyright:
  years: 2023
lastupdated: "2023-03-09"

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

# Provisioning a {{site.data.keyword.netezza_short}} instance
{: #provisioning}

## Before you begin
{: #provisioning_prereqs}

You need a pay-as-you-go {{site.data.keyword.cloud_notm}} account to start the provisioning process.

For more information, see [Setting up your {{site.data.keyword.cloud_notm}} account](https://cloud.ibm.com/docs/account?topic=account-account-getting-started) and [Upgrading your account](https://cloud.ibm.com/docs/account?topic=account-upgrading-account).

## Procedure
{: #provisioning_procedrue}

1. Go to the the [{{site.data.keyword.cloud_notm}} catalog](https://cloud.ibm.com/catalog) or [Cloud Pak for Data as a Service](https://dataplatform.cloud.ibm.com/) web console.
1. Locate the {{site.data.keyword.netezza_short}} tile and click it.  
   You are redirected to the provisioning page.
1. On the provisioning page, select your platgorm.
   You can choose Azure or AWS.
1. Choose a corresponding location.
   Based on your selection of platform, {{site.data.keyword.netezza_short}} is available in different locations.
1. Specify a name for your instance.
1. Choose a workload contour, Netezza units (NZU) and storage values.
   For more information about workload contours, Netezza Units (NZU) and available storage configuration, see [Architecture](/docs/netezza?topic=netezza-compute-isolation&interface=ui).  
1. Choose an ednpoint type.  
   For more information about connectivity options, see [Connecting to Netezza Performance Server](/docs/netezza?topic=netezza-connecting&interface=ui). 
1. Configure advanced features.  
1. Click **Create** to start the provisioning process.  
   You are redirected to the {{site.data.keyword.cloud_notm}} dashboard page. 
1. Go to **Resource list**.  
   After the provisioning process is finished, the instance status is `Active`. 

## Next steps
{: #next}

After {{site.data.keyword.netezza_short}} is provisioned, retrieve information about endpoints and create credentials so that you can access your instance.