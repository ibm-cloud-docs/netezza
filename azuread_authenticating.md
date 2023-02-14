---

copyright:
  years: 2023
lastupdated: "2023-14-02"

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

# Setting Azure AD authentication
{: #azureadauth}

1. Log in to your {{site.data.keyword.netezza_short}} instance.
1. Connect to the database by using 'nzsql'.

```sql
nzsql
```
{: codeblock}

Example:

```sql
nzsql
Welcome to nzsql, the IBM Netezza SQL interactive terminal.  
Type: \h for help with SQL commands
? for help on internal slash commands
\g or terminate with semicolon to execute query
\q to quit  
SSL enabled connection. Cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, protocol: TLSv1.2
```
{: codeblock}

1. As admin, set your authentication method to `AzureAD`.

```sql
SYSTEM.ADMIN(ADMIN)=> REGISTER EXTERNAL AUTHENTICATION SYSTEM 'AzureAD' with clientid 'AZURE CLIENT ID' tenantid 'AZURE TENANT ID';
SET VARIABLE
```
{: codeblock}

1. Create a user or users with the authentication method set to `AzureAD`.

```sql
SYSTEM.ADMIN(ADMIN)=> create user "USER" with auth external 'azuread';
CREATE USER
```
{: codeblock}

1. Verify whether the user was added successfully.

```sql
SYSTEM.ADMIN(ADMIN)=> \q

[nz@ipshost-0 /]$ nzsql -u '"USER"' -pw
Welcome to nzsql, the IBM Netezza SQL interactive terminal.

Type: \h for help with SQL commands
? for help on internal slash commands
\g or terminate with semicolon to execute query
\q to quit

SSL enabled connection. Cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, protocol: TLSv1.2

SYSTEM.ADMIN(testuser2@ibmnzoc.onmicrosoft.com)=>
```
{: codeblock}
