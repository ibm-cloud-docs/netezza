---

copyright:
  years: 2022
lastupdated: "2021-12-09"

keywords: scheduler rules,

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}

# Scheduler rules
{: #scheduler-rules}

On the *Scheduler rules* page, you can view the list of scheduler rules, create a scheduler rule, activate or deactivate the rule, assign owner, rename, and remove the rule.

## Creating scheduler rules
{: #create-scheduler-rules}

1. Go to **Administration > Scheduler rules**.
1. Click **Create scheduler rule**.
1. Type a name for the scheduler rule.

   The name must be unique across all global object names. For example, database names and user group names. The name of the rule determines when the rule is evaluated in relation to other active rules.

1. Select the type of your scheduler rule.

   The scheduler rule can be `Standard` or `Advanced`.

1. Add conditions.

    For any rule to be triggered, all of the conditions must be met. If you do not set any conditions, the rule applies to all plans. The action is taken as a result of the rule.

1. Add actions.

   You can add only one action for a scheduler rule.

1. If you want the rule to control administrative jobs, tick **Apply to admin jobs**.
1. Tick **Active** to activate the rule.
1. Click **Create**.

You can select **View definition**, **Activate**, **Assign owner**, **Rename** and **Remove** options from the overflow menu.
{: note}
