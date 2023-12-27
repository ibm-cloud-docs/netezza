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