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

# Setting LDAP authentication
{: #ldapauth}

Set your authentication method to `LDAP` with the [`REGISTER EXTERNAL AUTHENTICATION SYSTEM` SQL statement](https://www.ibm.com/docs/en/netezza?topic=reference-register-external-authentication).
{: shortdesc}

Two factor authentication is not supported with an external authentication system.
{: important}

## Syntax
{: #ldapsyntax}

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

Where:

| Input       | Description  |
| ----------- | ----------- |
| VERSION     | The LDAP protocol version number to use. The default is 3.       |
| BINDDN      | The Distinguished Name to use when binding to the LDAP server. A bind string is optional. This clause is typically not defined for conducting anonymous LDAP look-ups.        |
| BINDPW      | The password that accompanies the `BINDDN` for binding to the LDAP server. |
| PORT        | The port number to use when it connects to the LDAP server. The default is 389. |
| SCOPE       | The scope to use when it searches the LDAP tree. |
| SSL         | Default is `OFF`. If `ON`, SSL is used when it contacts the LDAP server. When you specify LDAP as the authentication type, you must specify the SSL option. |
| ATTRNAME    | The field defined in the LDAP server that contains the user name. For Microsoft Active Directory, this is typically 'sAMAccountname', 'uid' for IBM® Tivoli Directory Server, and 'cn' for OpenLDAP servers. The default is 'cn'. |
| NAMECASE    | Indicates whether the LDAP server stores the user name in lowercase or uppercase. |
{: caption="REGISTER EXTERNAL AUTHENTICATION SYSTEM command config for LDAP." caption-side="bottom"}

## Setting LDAP authentication with the web console
{: #setting_ldap_wc}

1. [Log in to the web console](/docs/netezza?topic=netezza-getstarted-console) as an `admin`.
1. Go to the **Query editor**.
1. Register an `LDAP` external authentication system.
   Specify the necessary parameters.

    ```sql
    REGISTER EXTERNAL AUTHENTICATION SYSTEM 'LDAP' with base 'DC=cpsdevelopment,dc=fyre,dc=ibm,dc=com' namecase lowercase server 'windowsad-security1.fyre.ibm.com' ssl 'off' binddn 'CN=mannu,CN=Users,DC=cpsdevelopment,DC=fyre,DC=ibm,DC=com' bindpw 'Netezza@1234' attrname 'sAMAccountName';
    ```
    {: codeblock}

1. Create a user or users with the external authentication method set to `LDAP` as desribed in [Creating users](/docs/netezza?topic=netezza-users-groups#create-users).
1. Verify whether the user was created successfully.

   1. Go to **Users and groups > Users**.
   1. Locate the user.
   1. Check the **Authentication type** section for the user.

## Setting LDAP authentication with the command-line
{: #ldapprocedure}

1. [Connect to {{site.data.keyword.netezza_short}}](/docs/netezza?topic=netezza-connecting-overview) as an `admin`.

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

1. Register an `LDAP` external authentication system.
   Specify the necessary parameters.

    ```sql
    REGISTER EXTERNAL AUTHENTICATION SYSTEM 'LDAP' with base 'DC=cpsdevelopment,dc=fyre,dc=ibm,dc=com' namecase lowercase server 'windowsad-security1.fyre.ibm.com' ssl 'off' binddn 'CN=mannu,CN=Users,DC=cpsdevelopment,DC=fyre,DC=ibm,DC=com' bindpw 'Netezza@1234' attrname 'sAMAccountName';
    ```
    {: codeblock}

1. Create a user or users with the external authentication method set to `LDAP`.

    ```sql
    CREATE USER "USER" with auth external 'LDAP';
    ```
    {: codeblock}

1. Verify whether the user was created successfully.

    ```sql
    \q

    nzsql -d SYSTEM NAME -u '"USER"' -pw PASSWORD
    ```
    {: codeblock}

    Example:

    ```sql
    \q

    nzsql -d system -u '"user1"' -pw XXXXXXXXXXXXXX
    Welcome to nzsql, the IBM Netezza SQL interactive terminal.

    Type: \h for help with SQL commands
    ? for help on internal slash commands
    \g or terminate with semicolon to execute query
    \q to quit

    SSL enabled connection. Cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, protocol: TLSv1.2

    SYSTEM.ADMIN(user1)=>
    ```
    {: codeblock}
