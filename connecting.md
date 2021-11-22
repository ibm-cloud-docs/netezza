---

copyright:
  years: 2021
lastupdated: "2021-10-26"

keywords: connecting to Netezza Performance Server, connecting

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

# Connecting to {{site.data.keyword.netezza_short}}
{: #connecting}

You can connect command-line interfaces, IBM® or third-party applications and tools or apps that you create to your {{site.data.keyword.netezza_full}} instance.
{: shortdesc}

## Connectivity options
{: #connectivity-options}

You can provision {{site.data.keyword.netezza_short}} with a private endpoint or public and private endpoints.

- A public endpoint can be accessed over the public network or internet.

   You can connect to your application by using a public hostname. To connect, you need public hostname details. Go to **Resource list > Services and Software > Service instance details**. On the page, you can find information about endpoints for accessing the web console, the API server, and the database. 
   
   Access to your data is protected by strong authentication, vast {{site.data.keyword.netezza_short}} authorization options and access controls, encryption over the wire using SSL and at rest, and IBM security and compliance practices for development and operations.
  
- A private endpoint offers you a way to connect over the cloud platform internal network and is not accessible from public networks.

   {{site.data.keyword.netezza_short}} supports private connectivity through [Azure Privatelink](https://azure.microsoft.com/en-us/pricing/details/private-link/#overview).

   Create a [support ticket](/docs/netezza?topic=netezza-tickets&interface=ui) to receive further instructions on how to set up a [private ednpoint](https://docs.microsoft.com/en-us/azure/private-link/private-endpoint-overview) in your VNET.


Each endpoint type provides a set of three hostnames. You can connect each of the hostnames to one of the following components:

- Web console
   
   The web interface, which you can use to manage and monitor the database. Your credentials are available in the **Service credentials** section.
   
   To connect by using the web console, follow these steps.
   
   1. Log in to your IBM Cloud account.
   1. Go to **Resource list > Services and software**.
   1. Select your **Netezza Performance Server** instance.
   
      You are now on the service instance page.
      
   1. Select the **Manage** tab.
   1. Click the **Web console** button to launch the web console.

- {{site.data.keyword.netezza_short}} database (NZ host)

   The hostname, which you can connect to the database on port 5480 by using ODBC, JDBC, OLE DB, .NET and Go Driver drivers, `nzsql`, `nz`. For more information about the drivers, see [Drivers](https://ibm.com/docs/en/netezza?topic=ndu-drivers-language-support-1).




