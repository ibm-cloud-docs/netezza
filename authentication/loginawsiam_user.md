---

copyright:
  years:  2024
lastupdated: "2024-04-25"

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

# Login AWS IAM user
{: #loginawsiamauth}

An AWS IAM user can use the following methods to login:
- [Through web console.](/docs/netezza?topic=netezza-loginawsiamauth#login_awsiam_wc)
- [From command-line.](/docs/netezza?topic=netezza-loginawsiamauth#loginaws_cmd)

## Login AWS IAM user through web console
{: #login_awsiam_wc}


1. Login to the console by using the username and `secret-access-key` as password.
1. Enter the `access-key` and login.
1. If a user has MFA enabled, on the next page, the user will be asked to enter an MFA code.


## Login AWS IAM user through command-line
{: #loginaws_cmd}

### Without MFA
{: #awsiamwithoutmfa}

```sql
nzsql -u '"AWSUSER"' -pw "ACCESS-KEY:SECRET-ACCESS-KEY"
```

### With MFA
{: #awsiamwithmfa}

```sql
nzsql -u '"AWSUSER"' -pw "ACCESS-KEY:SECRET-ACCESS-KEY MFA-CODE"
```
