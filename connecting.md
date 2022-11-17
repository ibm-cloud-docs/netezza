---

copyright:
  years: 2021
lastupdated: "2022-11-17"

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

# Connecting to {{site.data.keyword.netezza_short}}
{: #connecting}

You can connect command-line interfaces, IBM® or third-party applications and tools or apps that you create to your {{site.data.keyword.netezza_full}} instance.
{: shortdesc}

## Connectivity options
{: #connectivity-options}

![Connecting to {{site.data.keyword.netezza_short}}](connecting.png){: caption="Image 1. The diagram depicts the the available options to connect to your {{site.data.keyword.netezza_short}} instance." caption-side="bottom"} **PLACEHOLDER**

You can provision {{site.data.keyword.netezza_short}} with a private endpoint or public and private endpoints.

- A public endpoint can be accessed over the public network or internet.

   You can connect to your application by using a public hostname. To connect, you need public hostname details. Go to **Resource list > Services and Software > Service instance details**. On the page, you can find URLs that are needed to access the web console, the API server, and the database.

   Access to your data is protected by strong authentication, vast {{site.data.keyword.netezza_short}} authorization options and access controls, encryption over the wire using SSL and at rest, and IBM security and compliance practices for development and operations.

- A private endpoint offers you a way to connect over the cloud platform internal network and is not accessible from public networks.

   {{site.data.keyword.netezza_short}} supports private connectivity through [Azure Privatelink](https://azure.microsoft.com/en-us/pricing/details/private-link/#overview). For more information on how to set up your private link and setting up the URLs for connecting to your instance, see [Connecting to {{site.data.keyword.netezza_short}} by using private endpoints](/docs/netezza?topic=netezza-connecting-to-netezza-performance-server-by-using-private-endpoints&interface=ui).

Each endpoint type provides a set of two hostnames. You can connect each of the hostnames to one of the following components:

- [Web console](/docs/netezza?topic=netezza-getstarted-console)

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
