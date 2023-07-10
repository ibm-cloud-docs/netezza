---

copyright:
  years: 2023
lastupdated: "2023-04-09"

keywords:

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:codeblock: .codeblock}
{:screen: .screen}
{:tip: .tip}
{:important: .important}
{:note: .note}
{:deprecated: .deprecated}
{:pre: .pre}
{:caption: .caption}
{:codeblock: .codeblock}

# Managing authentication methods
{: #authenticating}

## {{site.data.keyword.netezza_short}} authentication methods
{: #authmethods}

{{site.data.keyword.netezza_full}} on both Azure and AWS offers the following authentication methods for database users:

1. Local authentication 
1. LDAP authentication
1. Azure Active Directory (Azure AD) authentication
1. IBM IAM authentication

By default, local authentication and `IBM IAM` are enabled on the system. You can set your authentication method by running the [`REGISTER EXTERNAL AUTHENTICATION SYSTEM` SQL statement](https://www.ibm.com/docs/en/netezza?topic=reference-register-external-authentication).


Two factor authentication is not supported with an external authentication system.
{: important}
