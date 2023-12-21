---

copyright:
  years:  2023
lastupdated: "2023-12-20"

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

# Managing AWS IAM access for {{site.data.keyword.netezza_short}}
{: #awsiam-docs}

## AWS IAM `nziamops` user
An AWS IAM ops user (`nziamops`) is created in the NzSAAS AWS account if Cyclops is configured to authenticate by using `nziamops` user. The `nziamops` user executes AWS APIs to fetch IAM user details like the access key ID and MFA device during the authentication process. Your AWS account must provide cross-account access to the `nziamops` user in the NzSAAS account to execute the API calls on the Netezza IAM users by manually defining the IAM role and setting trust relationship between the AWS accounts.

Follow the manual instructions to set up an AWS IAM role (`NzCrossAccountRole`) and trust relationship. Configure the IAM role and user group in the AWS account during the authentication by using `nziamops` user.
{: shortdesc}

### IAM role `NzCrossAccountRole` and trust relationship

#### Policy for `NzCrossAccountRole`
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "iam:ListGroupsForUser",
                "iam:ListMFADevices",
                "iam:ListAccessKeys"
            ],
            "Resource": [
                "<ARN of IAM user in customer account>",
                "<ARN of IAM user in customer account>"
            ]
        }
    ]
}
```
{: codeblock}

The `Resource` section must have the ARN of IAM users from the account.

#### Trust relationship
The Netezza AWS account must be added under the Trusted entities.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::<Netezza_AWS_ACCOUNT_ID>:user/nziamopsuser"
            },
            "Action": "sts:AssumeRole"
        }
    ]
}
```
{: codeblock}

The `Netezza_AWS_ACCOUNT_ID` is the AWS account ID of the Netezza account.

### IAM admin user group `NzIAMAdminUsers`

#### Policy for the `NzAdminUsers` group
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": "iam: ListGroupsForUser",
            "Resource": "*"
        }
    ]
}
```
{: codeblock}

### IAM policy attached to user group to give permission to the user to execute APIs

#### `ListMFADevices`, `GetSessionToken` API
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "iam:ListMFADevices",
                "sts:GetSessionToken"
            ],
            "Resource": "*"
        }
    ]
}
```
{: codeblock}

## Usage of `nzcli` with AWS IAM authentication
```bash
./nzcli awsiam --help
```
{: codeblock}

```bash
nz awsiam [options]
```
{: codeblock}

**_NOTE:_** Authenticator is `AWSIAM`.

### Options
| Options     | Description |
| ----------- | ----------- |
| `-access-key`     | The access key for the `awsiam` user [AWS_ACCESS_KEY_ID] (required)       |
| `-apiserver`    | The url of the api server [APISERVER_URL] (required)        |
| `-format` | Output Format [FORMAT]|
| `--h` | Show help of nz command |
 |`-hc`  |Show details of nz command |
| `-mfa-code`  |The MFA code for the awsiam user |
| `-secret-key` | The secret key for the awsiam user [AWS_SECRET_ACCESS_KEY] (required) |
| `-u NPS`  | Username [NZ_USER] (required) |

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

## Usage of `v2/signin` API with AWS IAM authentication

### When MFA is not configured
When `nziamops` user is configured:
 ```bash
curl -k -X POST https://localhost:3344/v2/signin -H 'Content-Type: application/json' -d ' { "username":"AWSUSER", "password":"Secret-Key", "accountid":"accountidvalue" }'
```
{: codeblock}

When `nziamops` user is not configured:

 ```bash
curl -k -X POST https://localhost:3344/v2/signin -H 'Content-Type: application/json' -d '{ "username":"AWSUSER", "password":"Access-Id:Secret-Key" }'
```
{: codeblock}

### When MFA is configured
When `nziamops` user is configured, specify the `Secret-Key`, `accountid`, and `mfacode` for the user.

 ```bash
curl -k -X POST https://localhost:3344/v2/signin -H 'Content-Type: application/json' -d ' { "username":"AWSUSER", "password":"Secret-Key", "accountid":"accountidvalue", "mfacode":"mfacodevalue" }'
```
{: codeblock}

When `nziamops` user is not configured, specify the `Access-Id:Secret-Key` and `mfacode` for the user.

 ```bash
curl -k -X POST https://localhost:3344/v2/signin -H 'Content-Type: application/json' -d '{ "username":"AWSUSER", "password":"Access-Id:Secret-Key", "mfacode":"mfacodevalue" }'
```
{: codeblock}
