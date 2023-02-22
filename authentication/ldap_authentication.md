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

# Setting LDAP authentication
{: #ldapauth}

Set your authentication method to `LDAP` with the `REGISTER EXTERNAL AUTHENTICATION SYSTEM` SQL statement.
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
