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

# Configuring SAML authentication in IdP
{: #saml-docs}

Admin user can manage `SAML` configurations from web console.

## How to get `IdP Metadata URL` and `EntityId`
{: #htg_params}

1. Login to the IdP Portal.
2. Navigate to your `SAML` application.
3. In the application details, you can find `IdP Metadata URL` and `EntityId`.

## Configure IdP details
{: #config_saml}

1. Login to Cyclops as a user who is part of the administrative group.
2. Select `IdP configuration` topic.
3. Enable `SAML` configuration.
4. Add `IdP Metadata URL` and `EntityId`.


## Configure ACS url and SLO endpoint on IdP
{: #config_acsurl}

1. Login to Cyclops as a user who is part of the administrative group.
1. Select `IdP configuration` topic.
1. Copy ACS url and SLO endpoint from the `IdP configuration` page.
{: #step3saml}

1. Login to the IdPportal.
1. Navigate to your `SAML` application.
1. Edit application configuration and add the ACS url and SLO endpoint from [step 3](/docs/netezza?topic=netezza-saml-docs#step3saml).
