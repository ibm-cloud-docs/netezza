---

copyright:
  years: 2021
lastupdated: "2021-11-23"

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
{: #getting-started}

{{site.data.keyword.netezza_full}} ({{site.data.keyword.netezza_short}}) is a fully managed, cloud native analytical data warehouse that is based on massively parallel processing [MPP] architecture. {{site.data.keyword.netezza_short}} is mainly used for analytical processing of historical data, and can process from 100TB up to a few petabytes of data with best in the class performance. Its array of SPUs processes disjoint dataset in parallel which is then aggregated to come up with final result set.

This page explains how you can provision a {{site.data.keyword.netezza_short}} instance, and how to retrieve information about endpoints, and create credentials so that you can access your instance.
{: shortdesc}

## Before you begin
{: #prereqs}

You need a Pay-as-you-go {{site.data.keyword.cloud_notm}} account to start the provisioning process.

For more information, see [Setting up your {{site.data.keyword.cloud_notm}} account](https://cloud.ibm.com/docs/account?topic=account-account-getting-started) and [Upgrading your account](https://cloud.ibm.com/docs/account?topic=account-upgrading-account).

## Provision a {{site.data.keyword.netezza_short}} instance
{: #provision}

You can provision {{site.data.keyword.netezza_short}} through the [{{site.data.keyword.cloud_notm}} catalog](https://cloud.ibm.com/catalog) and [Cloud Pak for Data as a Service](https://dataplatform.cloud.ibm.com/).

Find the {{site.data.keyword.netezza_short}} tile and click it. You are redirected to the provisioning page.

On the provisioning page, select the cloud platform you want to deploy in and the corresponding region. Now, you can configure your instance by selecting the workload contour, Netezza units (NZU), storage values, and connectivity options.

For more information about workload contours, Netezza Units (NZU) and available storage configuration, see [Architecture](/docs/netezza?topic=netezza-compute-isolation&interface=ui).

For more information about connectivity options, see [Connecting to Netezza Performance Server](/docs/netezza?topic=netezza-connecting&interface=ui).

When you have made your selections, click the submit button to start the provisioning process. You are redirected to the {{site.data.keyword.cloud_notm}} dashboard page. Go to **Resource list**.

After the provisioning process is finished, the instance status is `Active`.

## Next steps
{: #next}

After {{site.data.keyword.netezza_short}} is provisioned, retrieve information about endpoints and create credentials so that you can access your instance.

### Retrieving information about endpoints
{: #next-endpoints}

1. On the **Resource list** page, go to **Services and Software**.
1. Locate your {{site.data.keyword.netezza_short}} instance and click on the service name.  
   You are redirected to the **Service instance details** page. On the page, you can find information about endpoints for accessing the web console, the API server, and the database. For more information, see [Connecting to {{site.data.keyword.netezza_short}}](/docs/netezza?topic=netezza-connecting).

### Generating credentials
{: #generate-credentials}

1. Select **Service credentials > New credentials > Add**.
1. Enter the name for the new credential.
1. Click **Add**.   
1. Expand **View credentials**.     
   You can use the password to connect to the {{site.data.keyword.netezza_short}} database and web console as user admin.

### Resetting history user password
{: #reset-password}

Your instance comes with [query history](https://www.ibm.com/docs/en/netezza?topic=administrators-collecting-data-history) enabled by default.

- Follow the instructions [here](https://www.ibm.com/support/pages/changing-query-history-users-password) to change the history user password.
- Open a [ticket](https://www.ibm.com/support/pages/changing-query-history-users-password) to stop and start the database when resetting history user password.
