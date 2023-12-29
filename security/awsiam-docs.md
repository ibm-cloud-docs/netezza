---

copyright:
  years:  2023
lastupdated: "2023-12-29"

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
An AWS IAM ops user (`nziamops`) must be created in your AWS account if Cyclops is configured to authenticate by using `nziamops` user. This is a fallback mechanism for authentication if the default mechanism does not work. Update the IAM credentials of the `nziamops` user using the Cyclops UI.
The `nziamops` user executes AWS APIs to fetch IAM user details like the access key ID and MFA device during the authentication process.

### IAM role `NzCrossAccountRole` and trust relationship
Follow the manual instructions to set up the required AWS IAM policies.

If customer `IAM` users and `NzIAMOps` user are in same AWS account, the policy required:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": "iam:ListAccessKeys",
            "Resource": "arn_for_customeruser"
        }
    ]
}
```

If customer `IAM` users and `NzIAMOps` user are in different customer AWS accounts, the policy Required:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": "sts:AssumeRole",
            "Resource": [
                "arn_for_customeruser"
            ]
        }
    ]
} 

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
