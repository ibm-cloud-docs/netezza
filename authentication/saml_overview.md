---

copyright:
  years:  2024
lastupdated: "2024-05-22"

keywords: SAML access for Netezza Performance Server, permissions for Netezza Performance Server, identity and access management for Netezza Performance Server, roles for Netezza Performance Server, actions for Netezza Performance Server, assigning access for Netezza Performance Server

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

# Overview
{: #samloverview}

With SAML, you can enable a single sign-on experience for users across many SAML-enabled applications and services.
Users authenticate with the IdP once using a single set of credentials, and then get access to multiple applications and services without additional sign-ins.

- With this feature, customer using SAML compliant IdP providers will be able to authenticate to Netezza using the Cyclops UI.
- If supported by the Identity Provider and enabled by administrator, SAML users will be able to use MFA which will provide an additional layer of security.


Please follow below steps to setup SAML authentication :

- [Enabling SAML authentication](/docs/netezza?topic=netezza-samliamauth).
- [Configuring SAML authentication in IDP](/docs/netezza?topic=netezza-saml-docs).

## Limitation
{: #saml_limitation}

SAML does not support signed authentication. Support for this will be added in upcoming release.
