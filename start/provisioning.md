---

copyright:
  years: 2023
lastupdated: "2023-04-24"

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
   
   For Azure, if you want to be able to access NPS by connecting to the database or web console with [private endpoints](https://learn.microsoft.com/en-us/azure/private-link/) only, you must provide the list of subscription IDs that will be used to create the private endpoint.  

   For AWS, if you want to be able to access NPS by connecting to the database or web console with [private endpoints](https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html), you must provide the list of service principals that will be used to create the VPC endpoint service.

1. Click **Create** to start the provisioning process.  
   You are redirected to the {{site.data.keyword.cloud_notm}} dashboard page. 
1. Go to **Resource list**.  
   After the provisioning process is finished, the instance status is `Active`. 

If you selected to connect to your instance by using private endpoints, see [Setting up private endpoints](LINK).

## Configuring private endpoints
{: #creating-private-endpoints}

### Configuring private endpoints for Azure
{: #private-endpoints-azure}

If you want to connect to your {{site.data.keyword.netezza_short}} instance on Azure by using [Azure PrivateLink](https://learn.microsoft.com/en-us/azure/private-link/private-link-service-overview), you must create [private endpoints](https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview) in your Azure subscriptions.

1. Provide your subscription IDs.

   When you create your private endpoint connection, the private link service must approve the request. Your request is approved automatically if you provide the subscription IDs in which they are to be created.

   - If you deployed your instance with private endpoints only, you must have provided your subscription IDs [during provisioning](/docs/netezza?topic=netezza-getstarted), in step **9. Configure advanced features**.  

   - If you deployed your instance with public and private endpoints and did not provide your subscription IDs during provisioning, log in to the web console by using the public endpoint and set up the private link service.

      1. [Log in to the web console](/docs/netezza?topic=netezza-getstarted-console).
      1. Go to **Administration > Settings > Private endpoints** and click **Create Private Link**.
      1. Type the subscription IDs that you want to use to set up the private endpoints in your Azure account.  

         Use the **Private Link** page to update subscription IDs after private link is created.
         {: tip}

      ![Connecting to {{site.data.keyword.netezza_short}}](../images/connecting2.png){: caption="Image 2. Configure advanced features during provisioning." caption-side="bottom"}
   
2. Get resource ID or alias.  
   You can get the resource ID or alias in one of the following ways:

   - By going to **Private endpoints > Service instance details** page for the instance in the IBM Cloud catalog.
   - By going to **Administration > Settings > Private Link** in the {{site.data.keyword.netezza_short}} web console.

3. Create private endpoints.

   Follow the instructions described in [Create a private endpoint](https://learn.microsoft.com/en-us/azure/private-link/create-private-endpoint-portal?tabs=dynamic-ip#create-a-private-endpoint).  

   During Step 5, when you are in the _Resource_ pane, select **Connect to an Azure resource by resource ID or alias** and enter the resource ID or alias you retrieved in **2. Get resource ID or alias**.

   When the private endpoints are created, the status automatically changes to **Approved**. A private IP is assigned to each of your private endpoints. The IPs are displayed in **Microsoft Azure Portal**. Use these details to [log in to your instace by using private endpoints](LINK).

### Configuring private endpoints for AWS
{: #private-endpoints-aws}

To connect to your {{site.data.keyword.netezza_short}} on AWS by using [AWS PrivateLink](https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html), you must create [private endpoints](https://docs.aws.amazon.com/whitepapers/latest/aws-privatelink/what-are-vpc-endpoints.html) in your AWS subscription.

1. Provide your service principals.

   When you create your private endpoint connection, the private link service must approve the request. Your request is approved automatically if you provide the service principals in which they are to be created.

   - If you deployed your instance with private endpoints, you must have provided your service principals [during provisioning](/docs/netezza?topic=netezza-getstarted), in step **9. Configure advanced features**.

   ![Connecting to {{site.data.keyword.netezza_short}}](../images/aws_provisioning.png){: caption="Image 2. Configure advanced features during provisioning." caption-side="bottom"}   

2. Create private endpoints.

   Follow the instructions described in [Create a private endpoint](https://docs.aws.amazon.com/vpc/latest/privatelink/create-interface-endpoint.html).  

   When the private endpoints are created, a private hostname is assigned to each of your private endpoints. Use these details to [log in to your instace by using private endpoints](LINK).

   **DRAFT COMMENT: NEEDS VERIFICATION**


