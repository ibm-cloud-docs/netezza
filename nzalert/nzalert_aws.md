---

copyright:
  years: 2025
lastupdated: "2025-07-31"

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

# Nzalerts on AWS
{: #nzalert_aws_setup}

This guide outlines two methods to set up **Nzalerts** on **Amazon Web Services (AWS)**:

## Setup Options
{: #setupoptions_aws}

### Option 1: AWS SNS method using cross-account managed identity
{: #opt1}

Uses an SNS topic with access granted to the NZEvents AWS role.

### Option 2: AWS SNS method using credentials
{: #opt2}

Involves creating a user, role, and credentials, with full control managed by the user.

### Option 3: Email method
{: #opt3_emailmethod}

## 1: AWS SNS method
{: #nzalert_arnmethod}

This method is simpler and uses an existing AWS role to publish events to your SNS topic.

### **Step 1: Setup SNS topic**
{: #nzalert_aws_setupsns}

1. Log in to your **AWS** account.
2. Search for **SNS** in the AWS console.
3. Go to **Topics** -> **Create Topic**.
4. Fill in the required details: **Type**, **Name**, and **Display Name**.
5. After creation, locate the **ARN** in the topic details and save it for later. See, `<YOUR_SNS_TOPIC_ARN>`.

### **Step 2: Create notification method using cross-account managed identity**
{: #create_noti_arn}

#### Using nzsql
{: #using_nzsql}

See [Notification and event rule management for NPS events](https://ibmdocs-test.dcs.ibm.com/docs/en/SSTNZ3_test?topic=nzalert-notification-event-rule-management-nps-events) for creating a notification method.

Example:

```sql
CREATE NOTIFICATION METHOD <NOTIFICATION-METHOD-NAME>
TYPE AWS_SNS
AWS_TOPIC_ARN '<YOUR_SNS_TOPIC_ARN>';
```

#### Using NPS console
{: #using_nps_console}

1. Go to **Settings** -> **Monitoring and alerts** section.
2. Navigate to **Add method** radio button and click it.
3. In the **Select method** section, from the drop down choose **AWS SNS** and provide the name for the notification method and click next.
4. In the **Configure method** section, enter `<YOUR_SNS_TOPIC_ARN>` in the field for topic ARN and click confirm.

### **Step 3: Get ROLE ARN**
{: #nzalert_aws_rolearn}

#### Using nzsql
{: #using_nzsql_rolearn}

1. Run `SHOW NOTIFICATION METHOD` in `nzsql` like the following.

    ```sql
    SHOW NOTIFICATION METHOD;
    ```

    | NAME                     | TYPE     |
    |:------------------------|:---------|
    | EXAMPLE_EMAIL_NM_1      | EMAIL    |
    | EXAMPLE_AWS_SNS_NM_1    | AWS_SNS  |

2. Identify the method created using the SNS ARN.
3. In `nzsql`, run the following:

    ```sql
    SHOW NOTIFICATION METHOD EXAMPLE_AWS_SNS_NM_1;
    ```

    | NAME                  | TYPE     | AWS_TOPIC_ARN                                  | AWS_ROLE_ARN                                  |
    |:---------------------|:---------|:----------------------------------------------|:----------------------------------------------|
    | EXAMPLE_AWS_SNS_NM_1 | AWS_SNS  | `arn:aws:sns:<region>:<account-id>:<topic-name>` | `arn:aws:iam::<account-id>:role/<role-name>`     |

4. Copy the **AWS_ROLE_ARN** from the output and save it for later use.

#### Using NPS console
{: #using_nps_console_rolearn}

1. Go to **Settings** -> **Alerts and monitoring**, then expand the notification method which you have created in the earlier step.

2. Copy the value for **AWS_ROLE_ARN** field and store the AWS ROLE ARN for later use.

### **Step 3: Configure SNS topic access policy**
{: #nzalert_aws_conf_sns_accpolicy}

1. Go to **AWS** console -> **SNS** -> **Edit**.
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

## 2: Credentials method
{: #nzalert_aws_credmethod}

This method provides full control over user and role creation, suitable for custom setups.

### **Step 1: Setup SNS topic**
{: #nzalert_aws_snssetup_top}

Follow the same steps as in the ARN Method to create and retrieve the SNS Topic ARN.

### **Step 2: Get access key ID and secret**
{: #nzalert_aws_acckey_sec}

Refer to the AWS documentation:
- Get [Access Key ID and Secret Credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-authentication-user.html#cli-authentication-user-get).

### **Step 3: Create user**
{: #nzalert_aws_createuser}

1. Log in to [AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-authentication-user.html#cli-authentication-user-create) -> Navigate to **IAM**.
2. Go to **Users** -> **Create User**.
3. Enter user details.
4. Skip permissions -> Click **Next**.
5. Review and create the user.
6. Copy and store the **User ARN**. See, `<YOUR_USER_ARN>`.

### **Step 4: Create role policy**
{: #nzalert_aws_role_pol}

1. Go to **IAM** -> **Policies** -> **Create Policy**.
2. Choose **JSON** and paste:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "sns:Publish",
      "Resource": "<YOUR_SNS_TOPIC>"
    }
  ]
}
```

3. Click **Next**, provide policy details, and save the policy name.

### **Step 5: Create role**
{: #nzalert_aws_create_role}

1. Go to **IAM** -> **Roles** -> **Create Role**.
2. Select **Custom Trust Policy**.
3. Paste the following (replace `<YOUR_USER_ARN>`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
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

### **Step 6: Configure SNS topic access policy**
{: #nzalert_aws_snstop_acc_pol}

1. Go to the SNS topic -> **Edit**.
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

### **Step 7: Create and attach user policy**
{: #nzalert_aws_create_att_user_pol}

1. Go to **IAM** -> **Policies** -> **Create Policy**.
2. Paste the following JSON:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "sts:AssumeRole",
      "Resource": "<YOUR_ROLE_ARN>"
    }
  ]
}
```

3. Click **Next**, provide policy details, and save the policy name.

### **Step 8: Create notification method using credentials**
{: #create_noti_cred_method}

#### Using nzsql
{: #create_noti_nzsql}

See [Notification and event rule management for NPS events](https://ibmdocs-test.dcs.ibm.com/docs/en/SSTNZ3_test?topic=nzalert-notification-event-rule-management-nps-events) for creating a notification method.

Example:

```sql
  CREATE NOTIFICATION METHOD <NOTIFICATION-METHOD-NAME>
  TYPE AWS_SNS
  AWS_TOPIC_ARN '<YOUR_SNS_TOPIC_ARN>'
  AWS_ROLE_ARN '<YOUR_ROLE_ARN>'
  AWS_ACCESSKEY_ID 'XXXXX'
  AWS_ACCESSKEY_SECRET 'XXXXX';
```


Use the `access key id` and `access key secret` created in previous step.
{: note}

#### Using NPS console
{: #using_console_nps}

1. Go to **Settings** -> **Monitoring and alerts** section.
2. Navigate to **Add** method radio button and click it.
3. In the **Select** method section, from the select method drop down choose **AWS SNS** and provide the name for the notification method in the enter method name field and click next.
4. In the **Configure method** section, enter `<YOUR_SNS_TOPIC_ARN>` in the field for topic ARN.
5. Click on the **add role** ARN checkbox.
6. Enter `<YOUR_ROLE_ARN>` in the Role ARN field.
7. Enter **access key id** and **access key secret** created before.
8. Click **Confirm**.

## 3: Email method
{: #nzalert_aws_emailmethod}

1. Go to **Settings** -> **Monitoring and alerts** section.
2. Navigate to **Add** method radio button and click it.
3. In the **Select** method section, from the select method drop down choose **Email** and provide the name for the notification method in the enter method name field and click next.
4. In the **Configure method** section, enter the mail address in the respective fields.
5. Click **Confirm**.

### Create rule for Email method
{: #create_rule_email}

1. Go to **Settings** -> **Monitoring and alerts** section.
2. Navigate to **Create rule** -> **Define rule**.
3. Enter rule name and enable the status and click **Next**.
4. Go to **Select destination**, select the destination as **Email** and choose email method.
5. Click **Next** to go to **Choose event**.
6. Enter the details and click **Next** to go to **Event expression**.
7. Fill in the necessary fields and click **Confirm** to complete the rule setup.
