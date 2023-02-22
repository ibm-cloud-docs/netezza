---

copyright:
  years:  2023
lastupdated: "2023-02-14"

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

# Managing IAM access for {{site.data.keyword.netezza_short}}
{: #iam-docs}

Identity and Access Management (IAM) enables you to securely authenticate users for platform services and control access to resources consistently across the IBM Cloud platform. For example, with only a single login to {{site.data.keyword.cloud}} with your IBMid, you have access to any of your service consoles and their applications without having to log in to each of them separately.

Access to the {{site.data.keyword.netezza_full}} service instances for users in your account is controlled by {{site.data.keyword.cloud}} (IAM). Every user that accesses the {{site.data.keyword.netezza_short}} service in your account must be assigned an access policy with an IAM role. Review the following roles, actions, and more to help determine the best way to assign access to {{site.data.keyword.netezza_short}}.
{: shortdesc}

## Roles and actions
{: #roles-actions}

The access policy that you assign users in your account determines what actions a user can perform within the context of the service or specific instance that you select. The allowable actions are customized and defined by {{site.data.keyword.netezza_short}} as operations that are allowed to be performed on the service. Each action is mapped to an IAM platform that you can assign to a user.

If a specific role and its actions don't fit the use case that you're looking to address, you can [create a custom role](/docs/account?topic=account-custom-roles#custom-access-roles) and pick the actions to include.
{: tip}

IAM access policies enable access to be granted at different levels.

| Role                      | Connect | User Management | Scaling | Backup and Restore | Monitoring | DR      |
|:--------------------------|:--------|:----------------|:--------|:-------------------|:-----------|---------|
|IAM Platform Administrator | Y       | Y               | Y       | Y                  | Y          | Y       |
|IAM Platform Operator      | Y       | Y               | Y       | Y                  | Y          | Y       |
|IAM Platform Editor        | Y       | Y               | Y       | Y                  | Y          | Y       |
|IAM Platform Viewer        | Y       | N               | N       | N                  | N          | N       |
{: caption="Table 1. The table outlines what types of tasks each role allows for when you're working with the {{site.data.keyword.netezza_short}} service." caption-side="bottom"}

{{site.data.keyword.netezza_short}} does not use IAM Service roles.

For information about the steps to assign IAM access, see [Managing access to resources](/docs/account?topic=account-assign-access-resources).
