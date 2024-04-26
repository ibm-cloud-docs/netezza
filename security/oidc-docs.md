---

copyright:
  years:  2024
lastupdated: "2024-04-20"

keywords: IAM access for Netezza Performance Server, permissions for Netezza Performance Server, identity and access management for Netezza Performance Server, roles for Netezza Performance Server, actions for Netezza Performance Server, assigning access for Netezza Performance Server

subcollection: netezza

---

{:new_window: target="_blank"}
{:shortdesc: .shortdesc}
{:screen: .screen}
{:pre: .pre}
{:table: .aria-labeledby="caption"}
{:codeblock: .codeblock}
{:tip: .tip}
{:download: .download}
{:important: .important}
{:caption: .caption}

# Managing OIDC IDP configuration for {{site.data.keyword.netezza_short}}
{: #oidc-docs}

Admin users can configure the following OIDC configurations by using Cyclops:

1. Login to cyclops as an admin user.
1. Select `IDP configurations` topic.
1. Enable Azure OIDC configuration.
1. Add Client ID, Tenant ID, Client Secret.

## Steps to get OIDC redirect URL from NPS

1. Execute the following command from `k8s` prompt:

    ```bash
    #k get dns -n ibm-nz-cyclops
    ```
    {: codeblock}

1. From the following output, you can form the URL as `HOSTNAME.DOMAIN`.

   | NAME | HOSTNAME | DOMAIN | RECORD TYPE |
   | :----------- | :----------- | :----------- | :----------- |
   | **console-public-dns** | **console-nz-dev-eks-cluster.us-east** | `data-warehouse.test.cloud.ibm.com` | **CNAME** |

   URL:

   ```bash
   console-nz-dev-eks-cluster.us-east.data-warehouse.test.cloud.ibm.com
   ```
   {: codeblock}

1. For generating a URL specific to the namespace, add the CRN number as shown:

   ```bash
   https://console-nz-dev-eks-cluster.us-east.data-warehouse.test.cloud.ibm.com/#/?crn=<crn_of_namespace>
   ```
   {: codeblock}

   ```bash
   "": "https://console-nz-dev-eks-cluster.us-east.data-warehouse.test.cloud.ibm.com/v1/oidcredirect?crn=<crn_of_namespace>"
   ```
   {: codeblock}
