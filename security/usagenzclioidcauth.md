---

copyright:
  years:  2024
lastupdated: "2024-04-20"

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
{:note: .note}

# Usage of `nzcli` with OIDC authentication

 ```bash
./nzcli --help
```
{: codeblock}

 ```bash
./nzcli nzcommand  -u admin -pw  jwttoken -apiserver ip
```
{: codeblock}

After successful authentication from Cyclops and Identity Provider, you will get a JWT token on Cyclops GUI. You can use the JWT token to execute `nzcli` commands as follows:

```bash
./nzcli nzcommand  -u OIDCUSER -pw  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -apiserver X.X.X.X
```
{: codeblock}
