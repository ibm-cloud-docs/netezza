---

copyright:
  years:  2023
lastupdated: "2023-12-20"

keywords: AWS IAM access for Netezza Performance Server, permissions for Netezza Performance Server, identity and access management for Netezza Performance Server, roles for Netezza Performance Server, actions for Netezza Performance Server, assigning access for Netezza Performance Server

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

# Setting AWS IAM authentication
{: #awsiamauth}

Set your authentication method to AWS IAM with the [`REGISTER EXTERNAL AUTHENTICATION SYSTEM` SQL statement](https://www.ibm.com/docs/en/netezza?topic=reference-register-external-authentication).
{: shortdesc}

An external authentication system does not support two-factor authentication.
{: important}

## Syntax
{: #awsiamsyntax}

```sql
REGISTER EXTERNAL AUTHENTICATION SYSTEM 'AWSIAM'
```
{: codeblock}

## Setting AWS IAM authentication with the web console
{: #setting_awsiam_wc}

1. [Log in to the web console](/docs/netezza?topic=netezza-getstarted-console) as an `admin` user.
1. Go to the **Query editor**.
1. Register an AWS IAM external authentication system.

    ```sql
    REGISTER EXTERNAL AUTHENTICATION SYSTEM 'AWSIAM'
    ```
    {: codeblock}

1. Create a user or users with the external authentication method set to AWS IAM as described in [Creating users](/docs/netezza?topic=netezza-users-groups#create-users).
1. Verify whether the user was created successfully.

   1. Go to **Users and groups > Users**.
   1. Locate the user.
   1. Check the **Authentication type** section for the user.

## Setting AWS IAM authentication with the command-line
{: #awsiamprocedure}

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
   | password       | **When MFA is not configured:** \n When `nziamops` user is configured, specify the `secret-key` and   `account-id` for the user. \n When `nziamops` user is not configured, specify the `access-key` and `secret-key`. \n **When MFA is configured:** \n When `nziamops` user is configured, specify the `secret-key`, `account-id`, and `mfa-code` for the user. \n When `nziamops` user is not configured, specify the `access-key`, `secret-key`, and `mfa-code` for the user.|

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

1. As an admin, register an `AWSIAM` external authentication system.

    ```sql
    REGISTER EXTERNAL AUTHENTICATION SYSTEM 'AWSIAM';
    ```
    {: codeblock}

1. Create a user or users with the external authentication method set to `AWSIAM`.

    ```sql
    CREATE USER USER AUTH EXTERNAL 'AWSIAM';
    ```
    {: codeblock}

    Example:

    ```sql
    CREATE USER AWSUSER AUTH EXTERNAL 'AWSIAM';
    ```
    {: codeblock}

1. Verify whether the user is created successfully.

    ```sql
    \q

    nzsql -u '"AWSUSER"' -pw PASSWORD
    ```
    {: codeblock}

    #### When MFA is not configured

    When `nziamops` user is configured, specify the `SECRET-KEY` and `ACCOUNT-ID` for the user.
    ```sql
    nzsql -u '"AWSUSER"' -pw "SECRET-KEY ACCOUNT-ID"
    ```
    {: codeblock}

    When `nziamops` user is not configured, specify the `ACCESS-KEY:SECRET-KEY`.
    ```sql
    nzsql -u '"AWSUSER"' -pw "ACCESS-KEY:SECRET-KEY"
    ```
    {: codeblock}


    #### When MFA is configured

    When `nzops` user is configured, specify the `SECRET-KEY`, `ACCOUNT-ID`, and `MFA-CODE` for the user.
    ```sql
    nzsql -u '"AWSUSER"' -pw "SECRET-KEY MFA-CODE ACCOUNT-ID"
    ```
    {: codeblock}

    When `nzops` user is not configured, specify the `ACCESS-KEY:SECRET-KEY`, and `MFA-CODE` for the user.
    ```sql
    nzsql -u '"AWSUSER"' -pw "ACCESS-KEY:SECRET-KEY MFA-CODE"
    ```
    {: codeblock}


    Example:

    ```sql
    \q

    nzsql -u '"AWSUSER"' -pw XXXXXXXXXXXXX
    Welcome to nzsql, the IBM Netezza SQL interactive terminal.

    Type: \h for help with SQL commands
    ? for help on internal slash commands
    \g or terminate with semicolon to execute query
    \q to quit

    SSL enabled connection. Cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, protocol: TLSv1.2

    SYSTEM.ADMIN(AWSUSER)=>
    ```
    {: codeblock}

AWS users can authenticate without `mfa-code` using `nzsql`.
{: note}