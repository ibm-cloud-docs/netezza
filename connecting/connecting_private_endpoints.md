---

copyright:
  years: 2023
lastupdated: "2023-04-20"

keywords: connecting, private endpoints

subcollection: netezza

---
{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:codeblock: .codeblock}
{:screen: .screen}
{:tip: .tip}
{:important: .important}
{:note: .note}
{:deprecated: .deprecated}
{:pre: .pre}
{:caption: .caption}

# Connecting to {{site.data.keyword.netezza_short}} on Azure by using private endpoints
{: #connecting-azure}

To connect to your {{site.data.keyword.netezza_short}} on Azure by using [Azure PrivateLink](https://learn.microsoft.com/en-us/azure/private-link/private-link-service-overview)), you must create [private endpoints](https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview) in your Azure subscriptions.

With these private endpoints, you can connect to the following components:

- Your {{site.data.keyword.netezza_short}} database on port 5480, and the API server on port 443.
- The web console on port 443.

1. Get subscription IDs.

When you create your private endpoint connection, the private link service must approve the request. Your request is approved automatically if you provide the subscription IDs in which they are to be created.

![Providing subscription IDs](../images/conn_wc_d.png){: caption="Image 1. Ways to provide subscription IDs." caption-side="bottom"}

There are two ways in which you can provide the subscription IDs:  

- **At deployment**  

If you deployed your instance with private endpoints only, you must have provided your subscription IDs [during provisioning](/docs/netezza?topic=netezza-getstarted), in step 9. Configure advanced features.  

![Connecting to {{site.data.keyword.netezza_short}}](../images/connecting2.png){: caption="Image 2. Configure advanced features during provisioning." caption-side="bottom"}

- **In the web console**

   If you deployed your instance with public and private endpoints, log in to the web console by using the public endpoint and set up the private link service on the **Private Link** page.  

   1. Log in to the web console.  

      1. [Retrieve information about endpoints to log in to the web console](/docs/netezza?topic=netezza-next-endpoints)
      1. [Generate credentials to log in](/docs/netezza?topic=netezza-generate-credentials).

   1. Go to **Administration > Settings > Private Link** and click **Create Private Link**.
   1. Provide the subscription IDs that you want to use to set up the private endpoints in your Azure account.  

   Use the **Private Link** page to update subscription IDs after private link is created.
   {: tip}

1. Get resource ID or alias.

You can get the resource ID or alias in one of the following ways:

- By going to **Private endpoints > Service instance details** page for the instance in the IBM Cloud dashboard.
- By going to **Administration > Settings > Private Link** in the web console.

1. Create private endpoints.

Follow the instructions described in [Create a private endpoint](https://learn.microsoft.com/en-us/azure/private-link/create-private-endpoint-portal?tabs=dynamic-ip#create-a-private-endpoint).  

During Step 5, when you are in the _Resource_ pane, select **Connect to an Azure resource by resource ID or alias** and enter the resource ID or alias you retrieved in **2. Get resource ID or alias**.

When the private endpoints are created, the status automatically changes to **Approved**. A private IP is assigned to each of your private endpoints. The IPs are displayed in Microsoft Azure Portal.

## Connecting to {{site.data.keyword.netezza_short}}
{: #connecting_instance}

You can access the {{site.data.keyword.netezza_short}} instance by using the two IP addesses that you obtained in **3. Create private endpoints.**

- To connect to your {{site.data.keyword.netezza_short}} on port 5480, use the IP address that is associated with the private endpoint that was created with the database resource ID or alias.

- To connect to your {{site.data.keyword.netezza_short}} web console on port 443, you can use the IP address that is associated with the private endpoint that was created with the console resource ID or alias.  

   To form the web console URL from the private endpoint IP address, append the CRN name to it.  
   Example:  
   `https://<private endpoint IP>/#/?crn=CRN_NAME`  
   To get the CRN name, follow the steps:

   1. Log in to your IBM Cloud account.
   1. Go to **Resource list > Services and software**.
   1. Select your {{site.data.keyword.netezza_short}} instance.  
      The CRN name is displayed on the page.

- To connect to the {{site.data.keyword.netezza_short}} instance from on-prem by using the IP addresses or hostnames, you need to setup [VPN or Express Route](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/) from your on-prem network to the VNET in your subscription.

See also:
- Assigning hostnames **ADD LINK**
- [Retrieving information about endpoints for logging in](/docs/netezza?topic=netezza-next-endpoints)
- [Generating credentials](/docs/netezza?topic=netezza-generate-credentials)