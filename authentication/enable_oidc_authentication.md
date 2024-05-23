---

copyright:
  years:  2024
lastupdated: "2024-05-23"

keywords: OIDC access for Netezza Performance Server, permissions for Netezza Performance Server, identity and access management for Netezza Performance Server, roles for Netezza Performance Server, actions for Netezza Performance Server, assigning access for Netezza Performance Server

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

# Enabling OIDC authentication
{: #enable_oidciamauth}

Set your authentication method to `OIDC` with the [`REGISTER EXTERNAL AUTHENTICATION SYSTEM` SQL statement](https://www.ibm.com/docs/en/netezza?topic=reference-register-external-authentication-system).
{: shortdesc}

`OIDC` external authentication system supports two-factor authentication. User needs to be configured with MFA on IdP(Identity Provider); for example, [Microsoft Azure](https://learn.microsoft.com/en-us/azure/app-service/configure-authentication-provider-openid-connect).
{: important}

## Syntax
{: #oidcsyntax}

```sql
REGISTER EXTERNAL AUTHENTICATION SYSTEM 'OIDC'
```
{: codeblock}

You can use two methods for enabling OIDC authentication:
- [Through web console.](/docs/netezza?topic=netezza-enable_oidciamauth#setting_oidc_wc)
- [From command-line.](/docs/netezza?topic=netezza-enable_oidciamauth#oidcmprocedure)


## Setting OIDC authentication with the web console
{: #setting_oidc_wc}

1. Log in to the web console as a user who is part of an administrative group. See, [Getting started with the web console](/docs/netezza?topic=netezza-getstarted-console).
1. Go to the **Query editor**.
1. Register an `OIDC` external authentication system.

    ```sql
    REGISTER EXTERNAL AUTHENTICATION SYSTEM 'OIDC'
    ```
    {: codeblock}

    This action has to be performed only once.
    {: note}

1. Create a user (or users) with the external authentication method set to `OIDC`, as described in [Creating users](/docs/netezza?topic=netezza-users-groups#create-users).
1. Verify whether the user is created successfully.

   1. Go to **Users and groups > Users**.
   1. Locate the user.
   1. Check the **Authentication type** section for the user.

## Setting OIDC authentication with the command-line
{: #oidcmprocedure}

1. Connect to {{site.data.keyword.netezza_short}} as a user who is part of an administrative group. See, [Connecting to {{site.data.keyword.netezza_short}}](/docs/netezza?topic=netezza-connecting-overview).

   In the example, the ['nzsql' command](https://www.ibm.com/docs/en/netezza?topic=anpssbun-log-2) is used. You can also use [the ODBC or JDBC drivers](https://www.ibm.com/docs/en/netezza?topic=dls-overview-odbc-jdbc-ole-db-net-go-driver-3).

    ```sql
    nzsql -host <nps_host_ip> -u <admin user> -pw XXXXX
    ```
    {: codeblock}

   | Input          | Description |
   | :-----------   | :---------- |
   | nps_host_ip    | Specifies the IP address of your instance.  \n To retrieve `NPS HOST IP`:  \n 1. Log in to your IBM Cloud account. \n 1. Go to **Private endpoints > Service instance details**. \n 1. Select your instance.  \n Your instance IP address appears on the page now.|
   | admin user     | Specifies the admin privileged user. |
   | password       | Specifies the password. |

1. As an admin, register an `OIDC` external authentication system.

    ```sql
    REGISTER EXTERNAL AUTHENTICATION SYSTEM 'OIDC';
    ```
    {: codeblock}

    This action has to be performed only once.
    {: note}

1. Create a user (or users) with the external authentication method set to `OIDC`.

    ```sql
    CREATE USER <USER> AUTH EXTERNAL 'OIDC';
    ```
    {: codeblock}

    Example:

    ```sql
    CREATE USER OIDCUSER AUTH EXTERNAL 'OIDC';
    ```
    {: codeblock}
