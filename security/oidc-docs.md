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

Admin user can manage OIDC configurations from web console.

## How to get Client ID, Tenant ID, Client Secret.

1. Login to the Azure Portal.
2. Navigate to Azure Active Directory.
3. Select App Registrations, locate the Azure AD App that you're trying to find the Client ID and Client Secret Key for.
4. Within the Azure AD App, select Certificates & Secrets.

## Configure OIDC user authentication at NPS

1. Login to cyclops as an admin user.
2. Select `IDP configuration` topic.
3. Enable Azure OIDC configuration.
4. Add Client ID, Tenant ID, Client Secret.

<!-- ## Steps to get OIDC redirect URI

Use console base URL and append `v1/oidcredirect?crn=<crn_of_namespace>`.

Example:

For console base URL :

   ```
   https://console-nz-dev-eks-cluster.us-east.data-warehouse.test.cloud.ibm.com/#/?crn=<crn_of_namespace>
   ```
   {: codeblock}

OIDC redirect URI is :

   ```
   https://console-nz-dev-eks-cluster.us-east.data-warehouse.test.cloud.ibm.com/v1/oidcredirect?crn=<crn_of_namespace>
   ```
   {: codeblock} -->

## Configure redirect URI on Azure IDP

1. Login to the Azure portal.
2. Navigate to Azure active directory.
3. Select App registrations, locate the Azure AD App.
3. Navigate to authentication action.
4. You can copy OIDC redirect URI displayed on the console. Update "Redirect URIs" with this copied URI.


Admin users can configure the following OIDC configurations by using Cyclops:

1. Login to cyclops as an admin user.
1. Select `IDP configurations` topic.
1. Enable Azure OIDC configuration.
1. Add Client ID, Tenant ID, Client Secret.
