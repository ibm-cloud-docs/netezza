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

# Setting Azure AD authentication
{: #azureadauth}

Set your authentication method to `AzureAD` with the `REGISTER EXTERNAL AUTHENTICATION SYSTEM` SQL statement.
{: shortdesc}

Two factor authentication is not supported with an external authentication system.
{: important}

## Syntax
{: #azureadsyntax}

```sql
REGISTER EXTERNAL AUTHENTICATION SYSTEM 'AzureAD' with clientid 'AZURE CLIENT ID' tenantid 'AZURE TENANT ID'
```
{: codeblock}

- For `clientid`, see [How to: Get an Azure Application ID](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/msipcthin2/application-id?)
- For `tenantid`, see [How to find your Azure Active Directory tenant ID](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-how-to-find-tenant)

## Procedure
{: #azureadprocedure}

1. Log in to your {{site.data.keyword.netezza_short}} instance.
1. Connect to the database by using `nzsql` as a user with administrative access.

    ```sql
    nzsql -u admin -pw XXXXXXX
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

1. As admin, register an `AzureAD` external authentication system.  
   Specify the `clientid` and `tenantid` parameters.

    ```sql
    REGISTER EXTERNAL AUTHENTICATION SYSTEM 'AzureAD' with clientid 'AZURE CLIENT ID' tenantid 'AZURE TENANT ID';
    SET VARIABLE
    ```
    {: codeblock}

1. Create a user or users with the external authentication method set to `AzureAD`.

    ```sql
    create user "USER" with auth external 'AzureAD';
    CREATE USER
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

    nzsql -u '"xyz@example.example.com"' -pw XXXXXXXXXXXXXX
    Welcome to nzsql, the IBM Netezza SQL interactive terminal.

    Type: \h for help with SQL commands
    ? for help on internal slash commands
    \g or terminate with semicolon to execute query
    \q to quit

    SSL enabled connection. Cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, protocol: TLSv1.2

    SYSTEM.ADMIN(xyz@example.example.com)=>
    ```
    {: codeblock}
