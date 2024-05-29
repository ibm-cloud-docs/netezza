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
{:note: .note}

# Overview
{: #samloverview}

{{site.data.keyword.netezza_short}} on AWS now supports `SAML` (Security Assertion Markup Language). This allows for seamless integration with SSO (single sign-on) systems, providing users with a more secure and efficient authentication process. With `SAML` support, users can leverage centralized identity management, reduce password fatigue, and enhance overall security by utilizing their existing IdP (identity provider ) frameworks.

- Using SAML-compliant IdP providers, user can authenticate into Netezza using the Netezza UI.
- If supported by the IdP and enabled by the administrator, `SAML` users can use MFA (Multi-factor authentication), which provides an additional layer of security.


Follow the steps to setup `SAML` authentication:

- [Configuring SAML authentication in IdP](/docs/netezza?topic=netezza-saml-docs).
- [Enabling SAML authentication](/docs/netezza?topic=netezza-samliamauth).

In the current NPSaaS implementation of `SAML`, signed authentication is not supported. However, support for signed authentication will be introduced in a future NPSaaS release.
{: note}
