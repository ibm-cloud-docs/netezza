---

copyright:
  years: 2025
lastupdated: "2025-07-23"

keywords: business continuity and disaster recovery for Netezza Performance Server as a Service, business continuity, disaster recovery,

subcollection: netezza

---
{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:codeblock: .codeblock}
{:screen: .screen}
{:tip: .tip}
{:important: .important}
{:note: .note}
{:deprecated: .deprecated}
{:pre: .pre}
{:caption: .caption}

# Nzalerts on AWS – Installation guide
{: #nzalert_aws_setup}

This guide outlines two methods to set up NZAlerts on AWS:

- **ARN Method**: Uses only an SNS topic with access granted to the NZEvents AWS role.
- **Credentials Method**: Involves creating a user, role, and credentials, with the entire setup managed by the user.

## ARN Method
{: #nzalert_arnmethod}

### 1. Setup SNS topic
{: #nzalert_aws_setupsns}

1. Log in to your AWS account.
2. Search for **SNS** in the AWS console.
3. Go to **Topics** → **Create Topic**.
4. Fill in the required details: **Type**, **Name**, and **Display Name**.
5. After creation, locate the **ARN** in the topic details and save it for later.

### 2. Get ROLE ARN
{: #nzalert_aws_rolearn}

1. Use the AWS Console or NZ-SQL CLI.
2. In `NZ-SQL` CLI, run:

   ```bash
   show NOTIFICATION METHOD;
   ```

3. Identify the method created using the SNS ARN.
4. Run:

   ```bash
   show NOTIFICATION METHOD <name-of-notification-method>;
   ```

5. Copy the **AWS_ROLE_ARN** from the output and save it.

### 3. Configure SNS topic access policy
{: #nzalert_aws_conf_sns_accpolicy}

1. Go to the SNS topic → **Edit**.
2. In the **Access Policy** section, add the following (replace placeholders):

```json
{
  "Effect": "Allow",
  "Principal": {
    "AWS": [
      "<AWS_ROLE_ARN>"
    ]
  },
  "Action": "sns:Publish",
  "Resource": "<YOUR_SNS_TOPIC_ARN>"
}
```

## Credentials method
{: #nzalert_aws_credmethod}

### 1. Setup SNS topic
{: #nzalert_aws_snssetup_top}

Follow the same steps as in the ARN Method to create and retrieve the SNS Topic ARN.

### 2. Get access key ID and secret
{: #nzalert_aws_acckey_sec}

Refer to the AWS documentation:
- Get [Access Key ID and Secret Credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-authentication-user.html#cli-authentication-user-get)

### 3. Create user
{: #nzalert_aws_createuser}

1. Log in to [AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-authentication-user.html#cli-authentication-user-create) → Navigate to **IAM**.
2. Go to **Users** → **Create User**.
3. Enter user details.
4. Skip permissions for now → Click **Next**.
5. Review and create the user.
6. Copy and store the **User ARN**.

### 4. Create role policy
{: #nzalert_aws_role_pol}

1. Go to **IAM** → **Policies** → **Create Policy**.
2. Choose **JSON** and paste:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": "sns:Publish",
      "Resource": "<YOUR_SNS_TOPIC>"
    }
  ]
}
```

3. Click **Next**, provide policy details, and save the policy name.

### 5. Create ROLE
{: #nzalert_aws_create_role}

1. Go to **IAM** → **Roles** → **Create Role**.
2. Select **Custom Trust Policy**.
3. Paste the following (replace `<YOUR_USER_ARN>`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Statement1",
      "Effect": "Allow",
      "Principal": {
        "AWS": "<YOUR_USER_ARN>"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

4. Click **Next**, attach the previously created policy.
5. Enter role details and create the role.
6. Copy and store the **ROLE ARN**.

### 6. Configure SNS topic access policy
{: #nzalert_aws_snstop_acc_pol}

1. Go to the SNS topic → **Edit**.
2. In the **Access Policy** section, add:

```json
{
  "Effect": "Allow",
  "Principal": {
    "AWS": [
      "<YOUR_ROLE_ARN>"
    ]
  },
  "Action": "SNS:Publish",
  "Resource": "<YOUR_SNS_TOPIC_ARN>"
}
```

### 7. Create and attach user policy
{: #nzalert_aws_create_att_user_pol}

1. Go to **IAM** → **Policies** → **Create Policy**.
2. Paste the following JSON:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": "sts:AssumeRole",
      "Resource": "<YOUR_ROLE_ARN>"
    }
  ]
}
```

3. Click **Next**, provide policy details, and save the policy name.
