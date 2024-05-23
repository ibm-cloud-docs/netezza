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
{:note: .note}

# Configuring OIDC authentication in IdP
{: #oidc-docs}

Admin user can manage OIDC configurations from web console.

## How to get `Client ID`, `Tenant ID`, `Client Secret`
{: #htgctc}

1. Login to the Azure Portal.
2. Navigate to the Azure AD (Active Directory).
3. Select App registrations and locate the Azure AD application to find the Client ID and Client Secret Key.
4. In the Overview section, you will find Application (client) ID and Tenant ID.
1. In Azure AD application, select **Certificates & Secrets** from the **Manage** sidebar.
   1.	If you already have secret, go to [Configure redirect URI on Azure IdP](/docs/netezza?topic=netezza-oidc-docs#cruai) to get OIDC redirect URI .
   2.	If you are creating secret for the first time, click **New client secret** and fill the secret details.
6. Copy the client Secret value and store it for later use.


Ensure to copy the `Value`, not the `Secret ID`.
{: note}


## Configure Azure OIDC details
{: #couan}

1. Login to Cyclops as a user who is part of the administrative group.
2. Select `IdPconfiguration` topic.
3. Enable `Azure OIDC` configuration.
4. Add `Client ID`, `Tenant ID`, `Client Secret` and click the `Save` button.

## Configure redirect URI on Azure IdP
{: #cruai}

1. Login to the Azure portal.
2. Navigate to Azure AD.
3. Select App registrations, locate the Azure AD application.
3. Navigate to **Authentication** section -> **Add platform** -> select **Web**.
4. Copy `OIDC` redirect URI from the IdPconfiguration page on console. Update "Redirect URIs" with the copied URI.
