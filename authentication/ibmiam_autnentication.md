---

copyright:
  years:  2023
lastupdated: "2023-08-02"

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

# Setting IBM IAM authentication
{: #ibmiamauth}

Set your authentication method to `IBMIAM` with the [`REGISTER EXTERNAL AUTHENTICATION SYSTEM` SQL statement](https://www.ibm.com/docs/en/netezza?topic=reference-register-external-authentication).
{: shortdesc}

Two factor authentication is not supported with an external authentication system.
{: important}

See also [Managing IAM access](docs/netezza?topic=netezza-iam-docs).

## Syntax
{: #ibmiamsyntax}

```sql
REGISTER EXTERNAL AUTHENTICATION SYSTEM 'IBMIAM' with { PRODUCTION | STAGING | DEVELOPMENT }
```
{: codeblock}

## Setting IBM IAM authentication with the web console
{: #setting_ibmiam_wc}

1. [Log in to the web console](/docs/netezza?topic=netezza-getstarted-console) as an `admin` user.
1. Go to the **Query editor**.
1. Register an `IBM IAM` external authentication system.
   Specify the `PRODUCTION` environment type.

    ```sql
    REGISTER EXTERNAL AUTHENTICATION SYSTEM 'IBMIAM' with 'PRODUCTION'
    ```
    {: codeblock}

1. Create a user or users with the external authentication method set to `IBM IAM` as desribed in [Creating users](/docs/netezza?topic=netezza-users-groups#create-users).
1. Verify whether the user was created successfully.

   1. Go to **Users and groups > Users**.
   1. Locate the user.
   1. Check the **Authentication type** section for the user.

## Setting IBM IAM authentication with the command-line
{: #ibmiamprocedure}

1. [Connect to {{site.data.keyword.netezza_short}}](/docs/netezza?topic=netezza-connecting-overview) as an `admin` user.

   In the example, the ['nzsql' command](https://www.ibm.com/docs/en/netezza?topic=anpssbun-log-2) is used. You can also use the [the ODBC or JDBC drivers](https://www.ibm.com/docs/en/netezza?topic=dls-overview-odbc-jdbc-ole-db-net-go-driver-3).

    ```sql
    nzsql -host <nps_host_ip> -u admin -pw XXXXX
    ```
    {: codeblock}

   | Input          | Description |
   | :-----------   | :---------- |
   | nps_host_ip    | Specifies the IP address of your instance.  \n To retrieve `NPS HOST IP`:  \n 1. Log in to your IBM Cloud account. \n 1. Go to **Private endpoints > Service instance details**. \n 1. Select your instance.  \n Your instance IP address is displayed on the page now.|
   | user           | Specifies the user name.      |
   | password       | **When MFA is not configured:** \n specify the `access-key` and `secret-key` for the user. \n **When MFA is configured:** \n specify the `access-key`, `secret-key`, and `mfa-code`.|

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

1. As admin, register an `IBMIAM` external authentication system.
   Specify the `PRODUCTION` environment type.

    ```sql
    REGISTER EXTERNAL AUTHENTICATION SYSTEM 'IBMIAM' with 'PRODUCTION'
    ```
    {: codeblock}

1. Create a user or users with the external authentication method set to `IBMIAM`.

    ```sql
    CREATE USER USER AUTH EXTERNAL 'IBMIAM';
    ```
    {: codeblock}

    Example:

    ```sql
    CREATE USER xyz@ibm.com AUTH EXTERNAL 'IBMIAM';
    ```
    {: codeblock}

1. Verify whether the user was created successfully.

    ```sql
    \q

    nzsql -u '"USER"' -pw PASSWORD
    ```
    {: codeblock}

    Example:

    ```sql
    \q

    nzsql -u '"xyz@ibm.com"' -pw XXXXXXXXXXXXX
    Welcome to nzsql, the IBM Netezza SQL interactive terminal.

    Type: \h for help with SQL commands
    ? for help on internal slash commands
    \g or terminate with semicolon to execute query
    \q to quit

    SSL enabled connection. Cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, protocol: TLSv1.2

    SYSTEM.ADMIN(xyz@ibm.com)=>
    ```
    {: codeblock}
