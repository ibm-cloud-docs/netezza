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

# Usage of `nzcli` with SAML authentication

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
./nzcli nzcommand  -u SAMLUSER -pw  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -apiserver X.X.X.X
```
{: codeblock}

**_NOTE:_** Similarly, you can use many `nzcli` commands.

Following is list of `nzcommand`:

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

