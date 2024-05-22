---

copyright:
  years:  2023
lastupdated: "2024-02-13"

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

# Configuring SAML authentication in IDP
{: #saml-docs}

Admin user can manage SAML configurations from web console.

## How to get `IDPMetadataURL`, `EntityId`
{: #htg_params}

1. Login to the IDP Portal.
2. Navigate to your SAML application.
3. In app details, you can find `IDPMetadataURL`, `EntityId`.

## Configure SAML user authentication at NPS
{: #config_saml}

1. Login to cyclops as an admin.
2. Select IDP configuration topic.
3. Enable SAML configuration.
4. Add `IDPMetadataURL`, `EntityId`.


## Configure ACS url and SLO endpoint on IDP
{: #config_acsurl}

1. Login to Cyclops as an admin
1. Select IDP configuration topic. You can see ACS url and SLO endpoint on this page.
1. Login to the IDP portal.
1. Navigate to your SAML application.
1. Edit app configuration and update the ACS url and Slo endpoint displayed in the console.
