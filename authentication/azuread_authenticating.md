---

copyright:
  years: 2023
lastupdated: "2023-06-01"

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

Set your authentication method to `AzureAD` with the [`REGISTER EXTERNAL AUTHENTICATION SYSTEM` SQL statement](https://www.ibm.com/docs/en/netezza?topic=reference-register-external-authentication).
{: shortdesc}

Two factor authentication is not supported with an external authentication system.
{: important}

## Syntax
{: #azureadsyntax}

```sql
REGISTER EXTERNAL AUTHENTICATION SYSTEM 'AzureAD' with clientid 'AZURE CLIENT ID' tenantid 'AZURE TENANT ID'
```
{: codeblock}

- For `clientid`, see [How to: Get an Azure Application ID](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/msipcthin2/application-id?).
- For `tenantid`, see [How to find your Azure Active Directory tenant ID](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-how-to-find-tenant).

## Setting Azure AD authentication with the web console
{: #setting_azuread_wc}

1. [Log in to the web console](/docs/netezza?topic=netezza-getstarted-console) as an `admin` user.
1. Go to the **Query editor**.
1. Register an `Azure AD` external authentication system.
   Specify the `clientid` and `tenantid` parameters.

    ```sql
    REGISTER EXTERNAL AUTHENTICATION SYSTEM 'AzureAD' with clientid 'AZURE CLIENT ID' tenantid 'AZURE TENANT ID';
    SET VARIABLE
    ```
    {: codeblock}

1. Create a user or users with the external authentication method set to `AzureAD` as desribed in [Creating users](/docs/netezza?topic=netezza-users-groups#create-users).
1. Verify whether the user was created successfully.  
   
   1. Go to **Users and groups > Users**.
   1. Locate the user.
   1. Check the **Authentication type** section for the user.

## Setting Azure AD authentication with the command-line
{: #azureadprocedure}

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
   | password       | Specifies the password for the user. |
   
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

1. Register an `AzureAD` external authentication system.  
   Specify the `clientid` and `tenantid` parameters.

    ```sql
    REGISTER EXTERNAL AUTHENTICATION SYSTEM 'AzureAD' with clientid 'AZURE CLIENT ID' tenantid 'AZURE TENANT ID';
    SET VARIABLE
    ```
    {: codeblock}

1. Create a user or users with the external authentication method set to `AzureAD`.

    ```sql
    CREATE USER "USER" with auth external 'AzureAD';
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

