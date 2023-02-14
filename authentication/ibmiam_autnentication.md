--

copyright:
  years:  2023
lastupdated: "2023-02-14"

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

Set your authentication method to `AzureAD` with the `REGISTER EXTERNAL AUTHENTICATION SYSTEM` SQL statement.
{: shortdesc}

Two factor authentication is not supported with an external authentication system.
{: important}

## Syntax
{: #ibmiamsyntax}

```sql
REGISTER EXTERNAL AUTHENTICATION SYSTEM 'IBMIAM' with { PRODUCTION | STAGING | DEVELOPMENT }
```
{: codeblock}

## Procedure
{: #ibmiamprocedure}

1. Log in to your {{site.data.keyword.netezza_short}} instance.
1. Connect to the database by using `nzsql`.

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
