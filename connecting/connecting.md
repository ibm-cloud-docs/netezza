---

copyright:
  years: 2023
lastupdated: "2023-06-01"

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

For Azure, you can provision {{site.data.keyword.netezza_short}} with a private endpoint only or both public and private endpoints.
For AWS, you can provision {{site.data.keyword.netezza_short}} with a private or a public endpoint.

Each endpoint type provides a set of hostnames or IP addresses that you can use to log in to {{site.data.keyword.netezza_short}} by using the following components:

- **[{{site.data.keyword.netezza_short}} web console](/docs/netezza?topic=netezza-getstarted-console)**  
   The web interface, which you can use to manage and monitor your instance by using a standard HTTPS port 443.  

- **{{site.data.keyword.netezza_short}} database (NZ host)**  
   The command-line interface clients, which you can use to manage and monitor your instance by connecting to the database on port 5480 and the API server on a standard HTTPS port 443.
   
   - To connect to the database, download and install [the ODBC/JDBC/nzsql client packages](https://www.ibm.com/docs/en/netezza?topic=icsp-client-software-packages-2).  
   - To connect to the API server to manage your instance, download [the nz tool](/docs/netezza?topic=netezza-nztool).

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
