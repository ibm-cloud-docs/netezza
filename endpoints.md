---

copyright:
  years: 2021,2022

lastupdated: "2022-12-09"

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

{{site.data.keyword.netezza_full}} offers a choice of public, private, or both public and private endpoints. Public network service endpoints are accessible from anywhere on the internet. Private network service endpoint access traverses only the cloud platform backbone network, not the public internet.
{: shortdesc}

Each endpoint type provides a set of three hostnames. You can connect each of the hostnames to one of the following components:

- Web console

   The web interface, which you can use to manage and monitor the database.

- {{site.data.keyword.netezza_short}} database (NZ host)

   The hostname, which you can connect to the database on port 5480.


## Viewing endpoints
{: #endpoint-setup}

At the time of instance creation, you can select your choice of endpoint from the **Service Endpoints** box on {{site.data.keyword.cloud_notm}}.
The endpoints are available on the **Manage** page when you click on service instance.
