---

copyright:
  years: 2023
lastupdated: "2023-03-02"

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
{: caption="Table 1. REGISTER EXTERNAL AUTHENTICATION SYSTEM command config for LDAP." caption-side="bottom"}

## Procedure
{: #ldapprocedure}

1. Log in to your {{site.data.keyword.netezza_short}} instance.
1. Connect to the database by using `nzsql` as a user with administrative access.

    ```sql
    nzsql -u admin -pw XXXXX
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

1. As admin, register an `LDAP` external authentication system.  
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
