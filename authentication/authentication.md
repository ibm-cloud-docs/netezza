---

copyright:
  years: 2023
lastupdated: "2023-02-14"

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

{{site.data.keyword.netezza_full}} offers the following authentication methods for {{site.data.keyword.netezza_short}} database users:

1. Local authentication
1. LDAP authentication
1. Azure Active Directory (Azure AD) authentication
1. [IBM IAM authentication](//docs/netezza?topic=netezza-iam-docs)

By default, local authentication and IBMIAM are enabled on the system.

Two factor authentication is not supported with an external authentication system.
{: important}

## Setting authentication
{: #settingauth}

You can set your authentication method with the following SQL statement:

```sql
REGISTER EXTERNAL AUTHENTICATION SYSTEM 'PROVIDER NAME' WITH 'PROVIDER ARGUMENTS'
```

Examples:

-  For Azure AD:

```sql
REGISTER EXTERNAL AUTHENTICATION SYSTEM 'AzureAD' with clientid 'AZURE CLIENT ID' tenantid 'AZURE TENANT ID'
```
{: codeblock}

- For IBM IAM:

```sql
REGISTER EXTERNAL AUTHENTICATION SYSTEM 'IBMIAM' with { PRODUCTION | STAGING | DEVELOPMENT }
```
{: codeblock}

- For LDAP:

```sql
REGISTER EXTERNAL AUTHENTICATION SYSTEM 'LDAP' with BASE SERVER
[ VERSION ]
[ BINDDN { bind-string | NONE } ]
[ BINDPW { bind-password | NONE } ]
[ PORT ]
[ SCOPE { SUB | ONE | BASE } ]
[ SSL { ON | OFF } ]
[ ATTRNAME ]
[ NAMECASE { LOWERCASE | UPPERCASE }]
```
{: codeblock}
