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

With `SAML` authentication, you can enable a single sign-on experience for users across multiple SAML-enabled applications and services.
Users authenticating with the IdP(Identity provider) using a single set of credentials get access to multiple applications and services without additional sign-ins.

- With this feature, users using SAML-compliant IdPproviders can authenticate into Netezza using the Cyclops UI.
- If supported by the IdPand enabled by the administrator, `SAML` users can use MFA (Multi-factor authentication), which provides an additional layer of security.


Follow the steps to setup `SAML` authentication:

- [Enabling SAML authentication](/docs/netezza?topic=netezza-samliamauth).
- [Configuring SAML authentication in IdP](/docs/netezza?topic=netezza-saml-docs).

## Limitation
{: #saml_limitation}

`SAML` does not support signed authentication. Support for signed authentication will be added in the upcoming release.
