---

copyright:
  years: 2023

lastupdated: "2023-03-02"

keywords: isolation for Netezza Performance Server, service endpoints for Netezza Performance Server, private network for Netezza Performance Server, network isolation in Netezza Performance Server, non-public routes for Netezza Performance Server, private connection for Netezza Performance Server, private connectivity for Netezza Performance Server, endpoints,

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:screen: .screen}
{:pre: .pre}
{:table: .aria-labeledby="caption"}
{:codeblock: .codeblock}
{:tip: .tip}
{:note: .note}
{:important: .important}


# Endpoints
{: #endpoints}

{{site.data.keyword.netezza_full}} offers a choice of [public](/docs/netezza?topic=netezza-connecting-overview#public_endpoint), [private](/docs/netezza?topic=netezza-connecting-overview#private_endpoint), or both public and private endpoints. 

Public network service endpoints are accessible from anywhere on the internet. Private network service endpoint access traverses only the cloud platform backbone network, not the public internet.
{: shortdesc}

For more information about connecting to {{site.data.keyword.netezza_short}} by using private endpoints, see [Connecting to {{site.data.keyword.netezza_short}}](docs/netezza?topic=netezza-connecting-overview)

Each endpoint type provides a set of hostnames that you can connect to one of the following {{site.data.keyword.netezza_short}} components:

- **[WEB CONSOLE](/docs/netezza?topic=netezza-getstarted-console)**  
   The web interface, which you can use to manage and monitor the database.  See: [Retrieving credentials](/docs/netezza?topic=netezza-next-endpoints).

- **{{site.data.keyword.netezza_short}} database (NZ host)**  
   The hostname, which you can connect to the database on port 5480 by using the ODBC, JDBC, OLE DB, .NET and Go Driver drivers](https://www.ibm.com/docs/en/netezza?topic=npsdu-drivers-language-support-2), [nzsql](https://www.ibm.com/docs/en/netezza?topic=sc-nzsql-command-2), and [nz](/docs/netezza?topic=netezza-nztool).  See [Installing client packages](https://www.ibm.com/docs/en/netezza?topic=npsda-installing-client-software-packages-2).


## Viewing endpoints
{: #endpoint-setup}

At the time of instance creation, you can select your choice of endpoint from the **Service Endpoints** section on {{site.data.keyword.cloud_notm}}.
The endpoints are available on the *Manage* page when you click on your service instance.
