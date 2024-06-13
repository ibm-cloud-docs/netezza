---

copyright:
  years: 2023
lastupdated: "2023-06-01"

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

{{site.data.keyword.netezza_full}} ({{site.data.keyword.netezza_short}}) is a fully managed, cloud native analytical data warehouse that is based on a massively parallel processing (MPP) architecture. {{site.data.keyword.netezza_short}} is mainly used for analytical processing of historical data. NPS can process from 100TB up to a few petabytes of data with best in the class performance. Its array of SPUs processes disjoint dataset in parallel which is then aggregated to come up with final result set.

Learn how to provision a {{site.data.keyword.netezza_short}} instance on Azure or AWS.
{: shortdesc}

## Before you begin
{: #provisioning_prereqs}

You need a pay-as-you-go {{site.data.keyword.cloud_notm}} account or a subscription to start the provisioning process.

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
1. Choose a workload contour, Netezza units (NZU), and storage values.
   For more information about workload contours, Netezza Units (NZU), and available storage configuration, see [Architecture](/docs/netezza?topic=netezza-compute-isolation&interface=ui).
1. Choose a performance profile and storage density.
1. Choose an endpoint type.
1. Configure advanced features.

   For Azure, if you want to access {{site.data.keyword.netezza_short}} by connecting to the database or web console with [private endpoints](https://learn.microsoft.com/en-us/azure/private-link/) only, you must provide the list of [subscription IDs](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id) that will be used to create the private endpoint.

   For AWS, if you want to access {{site.data.keyword.netezza_short}} by connecting to the database or web console with [private endpoints](https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html), you must provide the Amazon Resource Names (ARNs) for the [service principals](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html) that will be used to create the VPC endpoint service.

1. Click **Create** to start the provisioning process.
   You are redirected to the {{site.data.keyword.cloud_notm}} dashboard page.
1. Go to **Resource list**.
   After the provisioning process is finished, the instance status is `Active`.

Now, you can get the username and password that are necessary to log in to your instance.

## Generating credentials
{: #viewing_credentials}

1. Log in to your {{site.data.keyword.cloud_notm}} account.
1. Go to **Resource list > Services and Software > Databases**.
1. Click on your {{site.data.keyword.netezza_short}} instance.
   You are now on the **Service instance details** page.
1. Go to the **Service Credentials** tab.
1. Click **New Credentials**.

   1. Type a name to assing to your credentials.
   1. Select the IAM role that was assigned to you to manage the instance.
   1. Click **Add**.
      If your credentials were generated successfully, you can view them now.

1. Expand your credential entry.
   The following credentials were generated:

   - `username: admin` - Specifies a local database `admin` that was created for you to access the instance.
   - `password: xxxx`  - Specifies the password that you must use when logging in to your instance as `admin`.
       After you log in to your instance for the first time, change your `admin` password.{: tip}

Now, you can connect to your instance as described in [Connecting to {{site.data.keyword.netezza_short}}](/docs/netezza?topic=netezza-connecting-overview).
