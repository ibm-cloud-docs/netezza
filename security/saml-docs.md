---

copyright:
  years:  2024
lastupdated: "2024-05-23"

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

# Configuring SAML authentication in IdP
{: #saml-docs}

Admin user can manage `SAML` configurations from Netezza UI. `IdP Metadata URL` and `EntityId` are required to setup SAML on Netezza UI. Update `ACS url` and `SLO endpoint` on IdP. Select the `Signed Authentication` checkbox only if it is already enabled in the `IdP application portal`.

The following `SAML` configuration steps are generic. Users can follow similar steps on respective IdP. For Okta IdP, it is mandatory to configure `SessionNotOnOrAfter`.
{: note}

## How to get `IdP Metadata URL` and `EntityId`
{: #htg_params}

1. Login to the IdP Portal.
2. Navigate to your `SAML` application.
3. In the application details, you can find `IdP Metadata URL` and `EntityId`.
{: #step3samlhtg}

## Configure IdP details
{: #config_saml}

1. Login to Netezza UI as a user who is part of the administrative group.
2. Select `Settings` topic from the left pane.
3. Enable `SAML` configuration.
4. Add `IdP Metadata URL` and `EntityId` from [step 3](/docs/netezza?topic=netezza-saml-docs#step3samlhtg).


## Configure ACS url and SLO endpoint on IdP
{: #config_acsurl}

1. Login to Netezza UI as a user who is part of the administrative group.
1. Select `Settings` topic from the left pane.
1. Copy the `ACS url` and `SLO endpoint` from the `IdP configuration` page.
{: #step3saml}

1. Login to the `IdP` Portal.
1. Navigate to your `SAML` application.
1. Edit the application configuration and add the ACS url and SLO endpoint from [step 3](/docs/netezza?topic=netezza-saml-docs#step3saml).


## Configuring Signed Authentication on IdP
{: #config_saoi}

1. Login to the IdP Portal.
1. Navigate to your `SAML` application.
1. Select respective checkbox to enable signed authentication.
1. Click `Download Certificate` button in the Netezza UI under `IdP configuration -> SAML`.

    An user with admin privileges can only download the authentication certificate.
    {: note}

1. Upload this certificate to `IdP` portal for signed authentication configuration.
