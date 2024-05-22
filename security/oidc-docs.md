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

# Configuring OIDC authentication in IDP
{: #oidc-docs}

Admin user can manage OIDC configurations from web console.

## How to get `Client ID`, `Tenant ID`, `Client Secret`.

1. Login to the Azure Portal.
2. Navigate to Azure Active Directory.
3. Select App Registrations, locate the Azure AD App that you're trying to find the Client ID and Client Secret Key for.
4.	In the Overview section you will find Application (Client ID) and Tenant ID.
1. In Azure AD App, select Certificates & Secrets from the Manage sidebar.
   1.	If you already have secret, go to [Steps to get OIDC redirect URI]().
   2.	If you are creating secret for the first time, click 'New client secret' and fill out the secret details.
6.	Copy the client Secret value and store it for use later. Ensure you grab the Value, not the Secret ID.

## Configure OIDC user authentication at NPS

1. Login to cyclops as an admin user.
2. Select `IDP configuration` topic.
3. Enable Azure OIDC configuration.
4. Add `Client ID`, `Tenant ID`, `Client Secret` and click the `Save` button.

## Configure redirect URI on Azure IDP

1. Login to the Azure portal.
2. Navigate to Azure active directory.
3. Select App registrations, locate the Azure AD App.
3. Navigate to **Authentication** section -> **Add platform** -> select **Web**.
4. You can copy OIDC redirect URI displayed on IDP configuration page on console. Update "Redirect URIs" with this copied URI.
