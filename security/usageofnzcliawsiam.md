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

# Usage of `nzcli` with AWS IAM authentication
```bash
./nzcli awsiam --help
```
{: codeblock}

```bash
nz awsiam [options]
```
{: codeblock}

**_NOTE:_** Authenticator is `AWSIAM`.

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

**_NOTE:_** `nzcli` for `nziamops` configuration is not supported.

`nzcli` without `nziamops` configuration is supported as follows:

```bash
./nzcli awsiam -access-key <access-key-value> -secret-key <secret-key-value> -mfa-code <mfa-value> -u AWSUSER -apiserver NPS-IP nzcommand
```
{: codeblock}

```bash
./nzcli awsiam -access-key <access-key-value> -secret-key <secret-key-value>  -u AWSUSER -apiserver NPS-IP nzcommand
```
{: codeblock}

**_NOTE:_** `nzcli` requests MFA code.

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

## When MFA is not configured
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

## When MFA is configured
When `nziamops` user is configured, specifiy the `secret-key mfa-code account-id` as password.

 ```bash
./nzcli nzcommand -u AWSUSER -pw "secret-key mfa-code account-id" -apiserver NPS-IP
```
{: codeblock}

When `nziamops` user user is not configured, specify the `access-key:secret-key mfa-code` as password.

 ```bash
./nzcli nzcommand -u AWSUSER -pw "access-id:secret-key mfa-code" -apiserver NPS-IP
```
{: codeblock}