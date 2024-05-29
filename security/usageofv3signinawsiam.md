---

copyright:
  years:  2023
lastupdated: "2023-12-26"

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

# Usage of `v3/signin` API with AWS IAM authentication

## When MFA is not configured
Specify the `Access-Id:Secret-Key` for the user.

 ```bash
curl -k -X POST https://localhost:3344/v3/signin -H 'Content-Type: application/json' -d '{ "username":"AWSUSER", "password":"Access-Id:Secret-Key" }'
```
{: codeblock}

## When MFA is configured
Specify the `Access-Id:Secret-Key` and `mfacode` for the user.

 ```bash
curl -k -X POST https://localhost:3344/v3/signin -H 'Content-Type: application/json' -d '{ "username":"AWSUSER", "password":"Access-Id:Secret-Key", "mfacode":"mfacodevalue" }'
```
{: codeblock}

## nzcli with JWT token authentication
```bash
./nzcli nzcommand -u AWSUSER -pw  jwttoken -apiserver ip
```
{: codeblock}

After successful authentication of AWSIAM user on either Netezza UI or v3/signin REST API, you will get a JWT token on Netezza UI GUI or on REST API response. You can use this JWT token to execute `nzcli` commands as follows.

```bash
./nzcli nzcommand -u AWSUSER -pw  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -apiserver X.X.X.X
```
{: codeblock}

## List of `nzcommand`
Following is the list of `nzcommand`.

 ```bash
nzsystem showRegistry
```
{: codeblock}

 ```bash
nzsystem showIssues
```
{: codeblock}

 ```bash
nzstate
```
{: codeblock}

 ```bash
nzsystem showRev
```
{: codeblock}

 ```bash
nzsystem showRev -build
```
{: codeblock}

 ```bash
nzsystem showRev -label
```
{: codeblock}

 ```bash
nzstats
```
{: codeblock}

 ```bash
nzds show
```
{: codeblock}

 ```bash
nzds show -regenstatus
```
{: codeblock}

 ```bash
nzds show -issues
```
{: codeblock}

 ```bash
nzhw show
```
{: codeblock}

 ```bash
nzhw listTypes
```
{: codeblock}

 ```bash
nzhw show -issues -detail
```
{: codeblock}

 ```bash
nzhw show -type spu
```
{: codeblock}

 ```bash
nzsession show
```
{: codeblock}

 ```bash
nzrev -dirSuffix
```
{: codeblock}

 ```bash
nzrev -rev
```
{: codeblock}

 ```bash
nzrev -shortLabel
```
{: codeblock}

 ```bash
nzrev -buildType
```
{: codeblock}
