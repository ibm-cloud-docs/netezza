---

copyright:
  years:  2023
lastupdated: "2023-12-20"

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

# Setting SAML authentication
{: #samliamauth}

Set your authentication method to `SAML` with the [`REGISTER EXTERNAL AUTHENTICATION SYSTEM` SQL statement](https://www.ibm.com/docs/en/netezza?topic=reference-register-external-authentication).
{: shortdesc}

Two-factor authentication is supported by SAML external authentication system. User needs to be configured with MFA on IDP (Identity Provider), for example, Ping Identity.
{: important}

See also [Managing IAM access](/docs/netezza?topic=netezza-iam-docs).

## Syntax
{: #samlsyntax}

```sql
REGISTER EXTERNAL AUTHENTICATION SYSTEM 'SAML'
```
{: codeblock}

## Setting SAML authentication with the web console
{: #setting_saml_wc}

1. [Log in to the web console](/docs/netezza?topic=netezza-getstarted-console) as an `admin` user.
1. Go to the **Query editor**.
1. Register a `SAML` external authentication system.

    ```sql
    REGISTER EXTERNAL AUTHENTICATION SYSTEM 'SAML'
    ```
    {: codeblock}

1. Create a user or users with the external authentication method set to `SAML` as described in [Creating users](/docs/netezza?topic=netezza-users-groups#create-users).
1. Verify whether the user is created successfully.

   1. Go to **Users and groups > Users**.
   1. Locate the user.
   1. Check the **Authentication type** section for the user.

## Setting SAML authentication with the command-line
{: #samlmprocedure}

1. [Connect to {{site.data.keyword.netezza_short}}](/docs/netezza?topic=netezza-connecting-overview) as an `admin` user.

   In the example, the ['nzsql' command](https://www.ibm.com/docs/en/netezza?topic=anpssbun-log-2) is used. You can also use [the ODBC or JDBC drivers](https://www.ibm.com/docs/en/netezza?topic=dls-overview-odbc-jdbc-ole-db-net-go-driver-3).

    ```sql
    nzsql -host <nps_host_ip> -u admin -pw XXXXX
    ```
    {: codeblock}

   | Input          | Description |
   | :-----------   | :---------- |
   | nps_host_ip    | Specifies the IP address of your instance.  \n To retrieve `NPS HOST IP`:  \n 1. Log in to your IBM Cloud account. \n 1. Go to **Private endpoints > Service instance details**. \n 1. Select your instance.  \n Your instance IP address appears on the page now.|
   | user           | Specifies the username.      |
   | password       | Specifies the JWT token that is generated for this user after Cyclops and IDP (Identity Provider) authentication. |

   Example:

    ```sql
    nzsql -host X.XX.XXX.XXX -u admin -pw password
    Welcome to nzsql, the IBM Netezza SQL interactive terminal.
    Type:  \h for help with SQL commands
           \? for help on internal slash commands
           \g or terminate with semicolon to execute query
           \q to quit

    SYSTEM.ADMIN(ADMIN)=>
    ```
    {: codeblock}

1. As an admin, register an `SAML` external authentication system.

    ```sql
    REGISTER EXTERNAL AUTHENTICATION SYSTEM 'SAML';
    ```
    {: codeblock}

1. Create a user or users with the external authentication method set to `SAML`.

    ```sql
    CREATE USER USER AUTH EXTERNAL 'SAML';
    ```
    {: codeblock}

    Example:

    ```sql
    CREATE USER SAMLUSER AUTH EXTERNAL 'SAML';
    ```
    {: codeblock}

1. Verify whether the user is created successfully.

    ```sql
    \q

    nzsql -u '"SAMLUSER"' -pw JWTTOKEN
    ```
    {: codeblock}

    Example:

    ```sql
    \q

    nzsql -u '"SAMLUSER"' -pw XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    Welcome to nzsql, the IBM Netezza SQL interactive terminal.

    Type: \h for help with SQL commands
    ? for help on internal slash commands
    \g or terminate with semicolon to execute query
    \q to quit

    SSL enabled connection. Cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, protocol: TLSv1.2

    SYSTEM.ADMIN(SAMLUSER)=>
    ```
    {: codeblock}
