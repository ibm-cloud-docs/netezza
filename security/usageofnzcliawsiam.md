---

copyright:
  years:  2023
lastupdated: "2023-12-27"

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

# Usage of `nzcli` with AWS IAM authentication
```bash
./nzcli awsiam --help
```
{: codeblock}

```bash
nz awsiam [options]
```
{: codeblock}

Authenticator is `AWSIAM`.
{: note}

## Options
| Options     | Description |
| ----------- | ----------- |
| `-access-key`     | The access key for the `awsiam` user [AWS_ACCESS_KEY_ID] (required)       |
| `-apiserver`    | The url of the api server [APISERVER_URL] (required)        |
| `-format` | Output Format [FORMAT]|
| `--h` | Show help of nz command |
 |`-hc`  |Show details of nz command |
| `-mfa-code`  |The MFA code for the awsiam user |
| `-secret-key` | The secret key for the awsiam user [AWS_SECRET_ACCESS_KEY] (required) |
| `-u`  |  NPS Username [NZ_USER] (required) |

`nzcli` for `nziamops` configuration is not supported.
{: note}

`nzcli` without `nziamops` configuration is supported as follows:

```bash
./nzcli awsiam -access-key <access-key-value> -secret-key <secret-key-value> -mfa-code <mfa-value> -u AWSUSER -apiserver NPS-IP nzcommand
```
{: codeblock}

```bash
./nzcli awsiam -access-key <access-key-value> -secret-key <secret-key-value>  -u AWSUSER -apiserver NPS-IP nzcommand
```
{: codeblock}

`nzcli` requests MFA code.
{: note}

## When MFA is configured or not for both types of AWSIAM users
When `nziamops` user is configured, specify the `secret-key account-id` as password.

 ```bash
./nzcli nzcommand -u AWSUSER -pw "secret-key account-id" -apiserver NPS-IP
```
{: codeblock}

When `nziamops` user user is not configured, specifiy the `access-id:secret-key` as password.

 ```bash
./nzcli nzcommand -u AWSUSER -pw "access-id:secret-key" -apiserver NPS-IP
```
{: codeblock}

AWS users can authenticate without `mfa-code` using `nzcli`.
{: note}

Following is the list of `nzcommand`.

 ```bash
nzsystem showRegistry -local
```
{: codeblock}

 ```bash
nzsystem showIssues -local
```
{: codeblock}

 ```bash
nzstate -local
```
{: codeblock}

 ```bash
nzsystem showRev -local
```
{: codeblock}

 ```bash
nzsystem showRev -build -local
```
{: codeblock}

 ```bash
nzsystem showRev -label -local
```
{: codeblock}

 ```bash
nzstats -local
```
{: codeblock}

 ```bash
nzds show -local
```
{: codeblock}

 ```bash
nzds show -regenstatus -local
```
{: codeblock}

 ```bash
nzds show -issues -local
```
{: codeblock}

 ```bash
nzhw show -local
```
{: codeblock}

 ```bash
nzhw listTypes -local
```
{: codeblock}

 ```bash
nzhw show -issues -detail -local
```
{: codeblock}

 ```bash
nzhw show -type spu -local
```
{: codeblock}

 ```bash
nzsession show -local
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