---

copyright:
  years:  2023
lastupdated: "2023-12-27"

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

# AWS IAM authentication
{: #awsiamauth}

NPSaaS now supports AWS IAM authentication from NPS version 11.2.2.11 onwards. For authenticating with IAM users, you need `ACCESS-KEY` and `SECRET-ACCESS-KEY` associated with your AWS account. Refer to [create/manage AWS access keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for details.

Set your authentication method to AWS IAM with the [`REGISTER EXTERNAL AUTHENTICATION SYSTEM` SQL statement](https://www.ibm.com/docs/en/netezza?topic=reference-register-external-authentication-system).
{: shortdesc}

## Enabling AWS IAM authentication
{: #enabling_awsauthentication}

You can use two methods for enabling AWS IAM authentication. :
- [Through web console.](/docs/netezza?topic=netezza-awsiamauth#setting_awsiam_wc)
- [From command-line.](/docs/netezza?topic=netezza-awsiamauth#awsiamprocedure)

Enabling AWS IAM authentication only needs to be done once.
{: note}

### Enabling AWS IAM authentication through web console
{: #setting_awsiam_wc}

1.  [Log in to the web console](/docs/netezza?topic=netezza-getstarted-console) as a user who is part of an administrative group.
1. Go to the **Query editor**.
1. Register an AWS IAM external authentication system.

    ```sql
    REGISTER EXTERNAL AUTHENTICATION SYSTEM 'AWSIAM';
    ```
    {: codeblock}

1. Create a user or users with the external authentication method set to AWS IAM as described in [Creating users](/docs/netezza?topic=netezza-users-groups#create-users).
1. Verify whether the user was created successfully.

   1. Go to **Users and groups > Users**.
   1. Locate the user.
   1. Check the **Authentication type** section for the user.


### Enabling AWS IAM authentication from command-line
{: #awsiamprocedure}

1. [Connect to {{site.data.keyword.netezza_short}}](/docs/netezza?topic=netezza-connecting-overview) as a user who is part of the administrative group.

   In the example, the ['nzsql' command](https://www.ibm.com/docs/en/netezza?topic=anpssbun-log-2) is used. You can also use [the ODBC or JDBC drivers](https://www.ibm.com/docs/en/netezza?topic=dls-overview-odbc-jdbc-ole-db-net-go-driver-3).

    ```sql
    nzsql -host <nps_hostname> -u admin -pw XXXXX
    ```
    {: codeblock}

   | Input          | Description |
   | :-----------   | :---------- |
   | nps_hostname    | Specifies the IP address of your instance.  \n To retrieve `NPS HOSTNAME`:  \n 1. Log in to your IBM Cloud account. \n 1. Go to **Private endpoints > Service instance details**. \n 1. Select your instance.  \n Your instance IP address appears on the page now.|
   | user           | Specifies the username.      |
   | password       | Specifies the password. |

1. As an admin, set up the `AWSIAM` external authentication system for initial registration only.

    ```sql
    REGISTER EXTERNAL AUTHENTICATION SYSTEM 'AWSIAM';
    ```
    {: codeblock}

1. Create a user or users with the external authentication method set to `AWSIAM`.

    ```sql
    CREATE USER <USERNAME> AUTH EXTERNAL 'AWSIAM';
    ```
    {: codeblock}

    Example:

    ```sql
    CREATE USER AWSUSER AUTH EXTERNAL 'AWSIAM';
    ```
    {: codeblock}

## Disabling AWS IAM authentication
{: #disabling_awsauthentication}

Run the following query to disable AWS IAM external authentication system from web console or `nzsql` client or any client of your choice.

 ```sql
 DEREGISTER EXTERNAL AUTHENTICATION SYSTEM 'AWSIAM';
 ```
{: codeblock}

## Limitations
{: #aws_limitations}

- AWS IAM authentication does not work for federated IAM users or where session token is also required for authentication.
