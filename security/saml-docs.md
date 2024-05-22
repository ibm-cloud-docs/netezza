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
3. In the app details, you can find `IDPMetadataURL`, `EntityId`.

## Configure IDP details
{: #config_saml}

1. Login to cyclops as a user who is part of the administrative group.
2. Select IDP configuration topic.
3. Enable SAML configuration.
4. Add `IDPMetadataURL`, `EntityId`.


## Configure ACS url and SLO endpoint on IDP
{: #config_acsurl}

1. Login to cyclops as a user who is part of the administrative group.
1. Select IDP configuration topic. Copy ACS url and SLO endpoint seen on this page.
1. Login to the IDP portal.
1. Navigate to your SAML application.
1. Edit app configuration and add the ACS url and SLO endpoint from step 2.
