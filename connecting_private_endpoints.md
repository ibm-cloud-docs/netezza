---

copyright:
  years: 2021, 2022, 2023
lastupdated: "2023-01-11"

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

# Connecting to {{site.data.keyword.netezza_short}} by using private endpoints
{:# connecting-private-endpoints}

If you want to connect to {{site.data.keyword.netezza_short}} by using private endpoints, two [private link services](https://learn.microsoft.com/en-us/azure/private-link/private-link-service-overview) are available in the (IBM) Azure subscription.  
To connect to your instance by using these private link services, you must create [private endpoints](https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview) in your Azure subscriptions.

With these private endpoints, you can connect to:

- Your {{site.data.keyword.netezza_short}} database on port 5480, and the API server on port 443.
- The web console on port 443.

## Creating private endpoints
{: #create_private_endpoints}

Learn how to create [private endpoints](https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview) in your Azure subscriptions.

### 1. Get subscription IDs.
{: #providing-subscription-ids}

When you create your private endpoint connection, the private link service must approve the request. Your request might be approved automatically if you provide the subscription IDs in which they are to be created.

There are two ways in which you can provide the subscription IDs:

- At deployment
- In the web console

#### Providing subscription IDs at deployment
{:# subscription-ids-deployment}

You can provide the subscription IDs as input during provisioning, in the **Configure advanced feature** section.

If you deploy your {{site.data.keyword.netezza_short}} instance with both private and public endpoints, you do not have to provide subscription IDs.
If you deploy only with a private endpoint, you must provide subscription IDs.
{: note}

![Connecting to {{site.data.keyword.netezza_short}}](connecting2.png){: caption="Image 2. The Configure advanced feature section of the IBM Cloud page" caption-side="bottom"}

#### Providing subscription IDs in the web console
{: #subscription-ids-webconsole}

If you deployed your instance with public and private endpoints, log in to the web console by using the public endpoint and set up the private link service on the **Private Link** page.  

1. Go to **Administration > Setting > Private Link** and click **Create Private Link**.
1. Provide the subscription IDs which you want to use to set up the private endpoints in your Azure account.

Use the **Private Link** page to update subscription IDs after private link is created.
{: tip}

### 2. Get resource ID or alias.
{: #getting-resourceid-alias}

You can get the resource ID or alias in one of the following ways:

- By going to **Private endpoints > Service instance details** page for the instance in the IBM Cloud dashboard.
- By going to **Administration > Setting > Private Link** in the web console.

### 3. Create private endpoints.
{: #create_private_link}

Follow the instructions described in [Create a private endpoint](https://learn.microsoft.com/en-us/azure/private-link/create-private-endpoint-portal?tabs=dynamic-ip#create-a-private-endpoint).  

During Step 5, when you are in the _Resource_ pane, select **Connect to an Azure resource by resource ID or alias** and enter the resource ID or alias you retrieved in **2. Get resource ID or alias**.

When the private endpoints are created, the status automatically changes to **Approved**. The private IPs that are assigned to your private endpoint in the Azure portal are displayed.

## Connecting to {{site.data.keyword.netezza_short}}
{: #connecting_instance}

By using the IP addresses from the devices in your subscription, you can access the {{site.data.keyword.netezza_short}} instance. Also, you can  assign a hostname over URLs to these IP addresses by logging in the to web console and navigating to **Administration > Setting > Private link**.

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
