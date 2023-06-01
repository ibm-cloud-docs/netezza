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

# Connecting to {{site.data.keyword.netezza_short}}
{: #connecting-overview}

You can connect command-line interfaces, IBM or third-party applications and tools or apps that you create to your {{site.data.keyword.netezza_full}} instance by using private or public endpoints.
{: shortdesc}

For Azure, you can provision {{site.data.keyword.netezza_short}} with a private endpoint only or both public and private endpoints.  

For AWS, you can provision {{site.data.keyword.netezza_short}} with a private or a public endpoint.

Each endpoint type provides a set of hostnames or IP addresses that you can use to log in to {{site.data.keyword.netezza_short}} by using the following components:

- **[{{site.data.keyword.netezza_short}} web console](/docs/netezza?topic=netezza-getstarted-console)**  
   The web interface, which you can use to manage and monitor your instance by using a standard HTTPS port 443.  

- **[{{site.data.keyword.netezza_short}} software clients](https://www.ibm.com/docs/en/netezza?topic=dls-installing-uninstalling-client-tools-software-2)**  
   The command-line interface clients, which you can use to manage and monitor your instance by connecting to the database on port 5480 and the API server on a standard HTTPS port 443.
   
   - To connect to the database, download and install [the ODBC/JDBC/nzsql client packages](https://www.ibm.com/docs/en/netezza?topic=dls-installing-uninstalling-client-tools-software-2).  
   - To connect to the API server to manage your instance, download [the nz tool](/docs/netezza?topic=netezza-nztool).

## Connecting to {{site.data.keyword.netezza_short}} by using public endpoints
{: #public_endpoints}

A public endpoint can be accessed over the public network or internet. You can connect to your application by using your public hostname details.

1. Retrieve hostname details that are assigned to your instance:
   
   1. Log in to your IBM Cloud account.
   1. Go to **Resource list > Services and Software > Databases**.
   1. Click on your {{site.data.keyword.netezza_short}} instance.  
      You are now on the **Service instance details** page. In the **Public Endpoints** section, you can find information (URL details) about endpoints for accessing the web console, the API server, and the database.  

      Access to your data is protected by strong authentication, vast {{site.data.keyword.netezza_short}} authorization options and access controls, and encryption over the wire by using SSL and at rest. You can further restrict access to your instance by setting [network policies](/docs/netezza?topic=netezza-network-policies).
  
1. Connect to {{site.data.keyword.netezza_short}} with the credentials from [Generating credentials](/docs/netezza?topic=netezza-getstarted#viewing_credentials) by using one of the components:

   - The {{site.data.keyword.netezza_short}} web console as described in [Getting started with the web console](/docs/netezza?topic=netezza-getstarted-console).
   - The {{site.data.keyword.netezza_short}} software clients: [the `nzsql` command](https://www.ibm.com/docs/en/netezza?topic=anpssbun-log-2) or [the ODBC or JDBC drivers](https://www.ibm.com/docs/en/netezza?topic=dls-overview-odbc-jdbc-ole-db-net-go-driver-3).


## Connecting to {{site.data.keyword.netezza_short}} by using private endpoints
{: #private_endpoints} 

A private endpoint offers you a way to connect over the cloud platform internal network and is not accessible from public networks.

For Azure, {{site.data.keyword.netezza_short}} supports private connectivity through [Azure Privatelink](https://azure.microsoft.com/en-us/pricing/details/private-link/#overview).  

For AWS, {{site.data.keyword.netezza_short}} supports private connectivity through [AWS PrivateLink](https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html).  

1. Ensure that you set up your private link endpoint as desribed in [Configuring private endpoints](/docs/netezza?topic=netezza-creating-private-endpoints).
1. Connect to {{site.data.keyword.netezza_short}} with the IP address or hostname that were assigned to your private link endpoint. 

   - The {{site.data.keyword.netezza_short}} web console as described in [Getting started with the web console](/docs/netezza?topic=netezza-getstarted-console).
   - The {{site.data.keyword.netezza_short}} software clients: [the `nzsql` command](https://www.ibm.com/docs/en/netezza?topic=anpssbun-log-2) or [the ODBC or JDBC drivers](https://www.ibm.com/docs/en/netezza?topic=dls-overview-odbc-jdbc-ole-db-net-go-driver-3).

   
You can also connect to your {{site.data.keyword.netezza_short}} instance private endpoint from on-prem with your Azure or AWS cloud account.

For Azure, set up [a VPN or Express Route](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/) from your on-prem network to the VNET in your Azure subscription.  

For AWS, set up a [VPN](https://aws.amazon.com/vpn/) or [Direct Connect](https://aws.amazon.com/directconnect/) from your on-prem network to the VPC in your AWS account. For more information, see [Amazon Virtual Private Cloud Connectivity Options](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/introduction.html).


   