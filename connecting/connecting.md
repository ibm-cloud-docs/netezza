---

copyright:
  years: 2023
lastupdated: "2023-04-19"

keywords: connecting to Netezza Performance Server, connecting, private endpoint, public endpoint, public and private endpoints, web console,

subcollection: netezza

---

{:shortdesc: .shortdesc}
{:screen: .screen}  
{:codeblock: .codeblock}  
{:pre: .pre}
{:tip: .tip}
{:note: .note}
{:external: target="_blank" .external}
{:step: data-tutorial-type='step'}

# Connectivity options
{: #connecting-overview}

You can connect command-line interfaces, IBM or third-party applications and tools or apps that you create to your {{site.data.keyword.netezza_full}} instance by using private or public endpoints.
{: shortdesc}

For Azure, you can provision {{site.data.keyword.netezza_short}} with a private endpoint or both public and private endpoints.
For AWS, you can provision {{site.data.keyword.netezza_short}} with a private or a public endpoint.

Each endpoint type provides a set of hostnames that you can connect to one of the following {{site.data.keyword.netezza_short}} components:

- **[WEB CONSOLE](/docs/netezza?topic=netezza-getstarted-console)**  
   The web interface, which you can use to manage and monitor the database.  

- **{{site.data.keyword.netezza_short}} database (NZ host)**  
   The hostname, which you can connect to the database on port 5480 by using [the ODBC, JDBC, OLE DB, .NET and Go Driver drivers](https://www.ibm.com/docs/en/netezza?topic=npsdu-drivers-language-support-2), [nzsql](https://www.ibm.com/docs/en/netezza?topic=sc-nzsql-command-2), and [nz](/docs/netezza?topic=netezza-nztool).  

![Connectivity options](../images/networking.png){: caption="Image 1. Ways to connect." caption-side="bottom"}

## Public endpoint
{: #public_endpoint}

A public endpoint can be accessed over the public network or internet.

You can connect to your application by using a public hostname. To connect, you need public hostname details.  
To get the details, go to **Resource list > Services and Software > Service instance details**.  
On the page, you can find the URLs that are needed to access the web console, the API server, and the database.

Access to your data is protected by strong authentication, vast {{site.data.keyword.netezza_short}} authorization options and access controls, encryption over the wire by using SSL and at rest, and IBM security and compliance practices for development and operations.

## Private endpoint
{: #private_endpoint} 

A private endpoint offers you a way to connect over the cloud platform internal network and is not accessible from public networks.

For Azure, {{site.data.keyword.netezza_short}} supports private connectivity through [Azure Privatelink](https://azure.microsoft.com/en-us/pricing/details/private-link/#overview).  
For AWS, {{site.data.keyword.netezza_short}} supports private connectivity through [AWS PrivateLink](https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html).  

For more information on how to set up your private link and setting up the URLs for connecting to your instance, see [Connecting to {{site.data.keyword.netezza_short}} by using private endpoints](/docs/netezza?topic=netezza-connecting-to-netezza-performance-server-by-using-private-endpoints&interface=ui).

## Viewing endpoints
{: #view-endpoints}

At the time of instance creation, you can select your choice of endpoint from the **Service Endpoints** section on {{site.data.keyword.cloud_notm}}.  
The endpoints are available on the *Manage* page when you click on your service instance.
