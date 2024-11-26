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
{: #usage_nzcli_w_aws_auth}

```bash
./nzcli awsiam --help
```
{: codeblock}

```bash
nz awsiam [options] nzcommand
```
{: codeblock}

Authenticator is `AWSIAM`.
{: note}

## Options
{: #usage_nzcli_w_aws_options}

| Options     | Description |
| ----------- | ----------- |
| `-access-key`     | The access key for the `awsiam` user [AWS_ACCESS_KEY_ID] (required)       |
| `-apiserver`    | The url of the api server [APISERVER_URL] (required)        |
| `-format` | Output Format [FORMAT]|
| `--h` | Show help of nz command |
 |`-hc`  |Show details of nz command |
| `-mfa-code`  |The MFA code for the awsiam user |
| `-secret-access-key` | The secret access key for the awsiam user [AWS_SECRET_ACCESS_KEY] (required) |
| `-u`  |  NPS Username [NZ_USER] (required) |
{: caption="Options"}

```bash
./nzcli awsiam -access-key <access-key-value> -secret-access-key <secret-access-key-value> -mfa-code <mfa-value> -u AWSUSER -apiserver APISERVER_URL nzcommand
```
{: codeblock}

```bash
./nzcli awsiam -access-key <access-key-value> -secret-access-key <secret-access-key-value>  -u AWSUSER -apiserver APISERVER_URL nzcommand
```
{: codeblock}

`nzcli` requests MFA code.
{: note}

## Using nzcli without AWS IAM option
{: #usage_nzcli_wo_aws_options}

When using nzcli without `AWSIAM` option, MFA code is not required. Specify only the `access-key:secret-access-key` as password.

 ```bash
./nzcli nzcommand -u AWSUSER -pw "access-key:secret-access-key" -apiserver APISERVER_URL
```
{: codeblock}

AWS users can authenticate without `mfa-code` using `nzcli`.
{: note}
