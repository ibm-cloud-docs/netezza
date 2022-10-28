---

copyright:
  years: 2021
lastupdated: "2021-11-15"

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

# Connecting to {{site.data.keyword.netezza_short}} by using private endpoints.
{:# connecting-private-endpoints}

If you want to connect to {{site.data.keyword.netezza_short}} by using private endpoints, two [private link services](https://learn.microsoft.com/en-us/azure/private-link/private-link-service-overview) are available in the (IBM) Azure subscription. To connect to your instance by using these private link service, you must create two [private endpoints](https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview) in your Azure subscriptions.

With these private endpoints, you can connect to:
1. Your {{site.data.keyword.netezza_short}} database on port 5480 and the API server on port 443.
1. The web console on port 443.

## Providing subscription IDs
{: #providing-subscription-ids}

When you create your private endpoint connection, the request needs to be approved by the private link service.

To approve the private endpoints connection automatically, we need to add the subscription IDs, in which it has been created, to an allowlist.
**DRAFT COMMENT:Please clarify- in which the connection has been created?

There are two ways the subscription IDs can be provided:
- At deployment
- In the web console

![Connecting to {{site.data.keyword.netezza_short}}](connecting.png){: caption="Image 1. The diagram depicts the dependencies between the  {{site.data.keyword.netezza_short}} subscription, Azure Private Link, and customer account." caption-side="bottom"}

### Providing subscription IDs at deployment
{:# subscription-ids-deployment}

You can provide the subscription IDs as input during provisioning, in the **Configure advanced feature** section.

If you deploy your {{site.data.keyword.netezza_short}} instance with both private and public endpoints, you do not have to provide the subscription IDs.
If you deploy with a private endpoint, you must provide the subscription IDs.
{: note}

![Connecting to {{site.data.keyword.netezza_short}}](connecting2.png){: caption="Image 2. The Configure advanced feature section of the IBM Cloud page" caption-side="bottom"}

### Adding or updating subscription IDs in the web console
{: subscription-ids-webconsole}

If you deploy your instance with public and private endpoints, and you can log in to the web console by using the public endpoint and set up the  private link service there.

You can use the same page to update subscription IDs after private link is created.

To access the page, go to _Administration > Setting > Private Link_ and click **Create Private Link**. Then, you can provide your subscription IDs, which you will be using to set up private endpoints in your Azure account.

## Getting resource ID or alias
{: #getting-resourceid-alias}

After the private link service is created, you need its resource ID or alias to set up the private endpoints in your Azure subscriptions.

You can retrieve the resource ID or alias for the database and console in one of the following ways.
1. By going to _Private endpoints > Service instance details_ page for the instance in the IBM Cloud dashboard.
1. By going to _Administration > Setting > Private Link_ in the web console.

## Setting up Azure private endpoints to connect to Netezza instance
{: setting-up-private-endpoints}

To create private endpoints in your subscription, follow the instructions from [Create a private endpoint](https://learn.microsoft.com/en-us/azure/private-link/create-private-endpoint-portal?tabs=dynamic-ip#create-a-private-endpoint).  

In Step 5, when you are in the _Resource_ tab, select **Connect to an Azure resource by resource ID or alias**.

| Connection method    |Connect to an Azure resource by resource ID or alias.|
| Resource ID or alias |Provide the resource ID or alias you retrieved above.|

After you created the private endpoints, the status automatically changes to **Approved**.
After the approval, the private IPs that are assigned to your private endpoint in the Azure portal are displayed.

The IP address that is associated with the private endpoint that was created with the database resource ID or alias can be used to connect to your {{site.data.keyword.netezza_short}} database on port 5480.

The IP address that is associated with the private endpoint that was created with the console resource ID or alias can be used to connect to your  {{site.data.keyword.netezza_short}} web console on port 443.

By using the IP addresses from the devices in your subscription, you can now access the {{site.data.keyword.netezza_short}} instance.

To connect to the {{site.data.keyword.netezza_short}} instance from on-prem by using the IP addresses, you need to setup [VPN or Express Route](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/) from your on-prem network to the VNET in your subscription.   
