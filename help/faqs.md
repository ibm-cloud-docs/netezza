---

copyright:
  years: 2023
lastupdated: "2023-06-09"

keywords: Netezza Performance Server frequently asked questions, signing up for Netezza Performance Server, generating credentials for Netezza Performance Server instance,

subcollection: netezza

content-type: faq

---

{:shortdesc: .shortdesc}
{:faq: data-hd-content-type='faq'}
{:support: data-reuse='support'}

# FAQs for {{site.data.keyword.netezza_short}}
{: #netezza-faqs}

This is a collection of frequently asked questions (FAQ) about the {{site.data.keyword.netezza_full}}.
{: shortdesc}

## How do I sign up for {{site.data.keyword.netezza_short}}?
{: #singing-up}
{: faq}
{: support}

[Create a free IBM Cloud account](https://cloud.ibm.com/registration?target=%2Fcatalog%2Fservices%2Fdb2-warehouse).
When you have the account, you can provision a {{site.data.keyword.netezza_short}} instance directly through the IBM Cloud® catalog.  
For more information, see [Getting started with {{site.data.keyword.netezza_short}}](/docs/netezza?topic=netezza-getstarted).

## How do I generate or view credentials for my {{site.data.keyword.netezza_short}} instance?
{: #generating-credentials}
{: faq}
{: support}

To generate credentials, follow the steps: 

1. Log in to [IBM Cloud](https://cloud.ibm.com/) account.
1. Go to **Resource list > Services and Software > Databases**.
1. Click on your {{site.data.keyword.netezza_short}} instance.  
   You are now on the Service instance details page.
1. Go to the **Service Credentials** tab.
1. Click **New Credentials**.
1. Type a name to assing to your credentials.
1. Select the IAM role that was assigned to you to manage the instance.
1. Click **Add**.  
   If your credentials were generated successfully, you can view them now.
   Expand your credential entry. The following credentials were generated:

   - `username: admin` - Specifies a local database admin user that was created for you to access the instance.
   - `password: xxxx` - Specifies the password that you must use when logging in to your instance as admin.

   After you log in to your instance for the first time, change your admin password.

To view credentials, follow the steps:

1. Log in to [IBM Cloud](https://cloud.ibm.com/) account.
1. Go to **Resource list > Services and Software > Databases**.
1. Click on your {{site.data.keyword.netezza_short}} instance.  
   You are now on the Service instance details page.
1. Go to the **Service Credentials** tab.
1. Expand the credential entry that is associated with the credentials that you generated previously.

   - `username: admin` - Specifies a local database admin user that was created for you to access the instance.
   - `password: xxxx` - Specifies the password that you must use when logging in to your instance as admin.

   After you log in to your instance for the first time, change your admin password.

## Now that I've generated credentials, how do I access my {{site.data.keyword.netezza_short}} instance?
{: #accessing-instance}
{: faq}
{: support}

You can access your {{site.data.keyword.netezza_short}} instance several ways, including a dedicated web console and a REST API.

For more information, see [Connecting to Netezza Performance Server](/docs/netezza?topic=netezza-connecting-overview).

## Can I set up spending notifications for my {{site.data.keyword.netezza_short}} instance to keep track of my credit usage?
{: #spending_notifs}

If you have an IBM Cloud® Pay-As-You-Go or Subscription account, you can set up email spending notifications. After your account is configured, you can configure spending thresholds and choose to receive notifications when you reach 80%, 90%, and 100% of the thresholds.  
For more information, see [Setting spending notifications](https://cloud.ibm.com/docs/billing-usage?topic=billing-usage-spending&interface=ui)

## What's managed for me with {{site.data.keyword.netezza_short}}?
{: #whats-managed}
{: faq}
{: support}

IBM handles all of the software upgrades, operating system updates, and hardware maintenance for your {{site.data.keyword.netezza_short}} instance.
IBM also preconfigures {{site.data.keyword.netezza_short}} parameters for optimal performance across analytical workloads, and takes care of encryption and regular backups of your data.

The service includes 24x7 health monitoring of the database and infrastructure.

In the event of a hardware or software failure, the service is automatically restarted. Because {{site.data.keyword.netezza_short}} is a fully-managed SaaS offering, you do not get SSH access or root access to the underlying server hardware, and cannot install additional software.

## Where can I find more information about {{site.data.keyword.netezza_short}}?
{: #more-info}
{: faq}
{: support}

- In addition to the IBM Cloud documentation site, there is a wide range of information about the underlying {{site.data.keyword.netezza_short}} engine functionality in the [IBM Documentation](https://www.ibm.com/docs/en/netezza).

- Updates to the service are posted in the [Release notes](https://www.ibm.com/docs/en/netezza?topic=server-netezza-release-notes).

- You can find pricing information one the IBM Cloud [catalog](https://cloud.ibm.com/catalog#services) page.

For more information, contact [IBM Sales](https://www.ibm.com/contact/us/en/).

## Where can I find help for a problem that I'm having?
{: #finding-help}
{: faq}
{: support}

For information about posting questions on a forum or opening a support ticket, see:

- [Opening tickets](https://cloud.ibm.com/docs/netezza?topic=netezza-tickets&interface=ui)

- [IBM Cloud Support](https://cloud.ibm.com/unifiedsupport/supportcenter)

- [IBM Cloud® support forum](https://www.ibm.com/mysupport/s/forumshome?language=en_US)

- [IBM Hybrid Data Management Community](https://community.ibm.com/community/user/hybriddatamanagement/home)

## How can I change a Query History user's password?
{: #changequerypswd-help}
{: faq}
{: support}

If you want to change the password of the `Query History` user, you must also change the password in the `Query History` configuration. However, you cannot change the `Query History` user's password for an active `Query History` configuration. If you attempt to do so, you will receive the following error message:

**ERROR: History configuration `hist_interval` is current or not found.**

Instead, you must assign a different `Query History` configuration to the source database, make the password change in the desired configuration, and then reactivate that configuration. The following steps illustrate that procedure:

1. Determine the name of the existing `Query History` configuration. The configuration name is the first field returned:

```bash
[nz1 ~]$ nzsql -c "show history configuration"
```
{: codeblock}

 ```sql
CONFIG_NAME | CONFIG_DBNAME | CONFIG_DBTYPE | CONFIG_TARGETTYPE | CONFI  G_LEVEL | CONFIG_HOSTNAME | CONFIG_USER | CONFIG_PASSWORD |  CONFIG_LOADINTERVAL | CONFIG_LOADMINTHRESHOLD | CONFIG_LOADMAXTHRESHOLD |  CONFIG_DISKFULLTHRESHOLD | CONFIG_STORAGELIMIT | CONFIG_LOADRETRY |
CONFIG_ENABLEHIST | CONFIG_ENABLESYSTEM | CONFIG_NEXT | CONFIG_CURRENT | CONFIG_VERSION | CONFIG_COLLECTFILTER | CONFIG_KEYSTORE_ID | CONFIG_KEY_ID | KEYSTORE_NAME | KEY_ALIAS | CONFIG_NAME_DELIMITED | CONFIG_DBNAME_DELI  MITED | CONFIG_USER_DELIMITED
-------------+---------------+---------------+-------------------+--------------+-----------------+-------------
   NZ_HIST   | HISTDB        |             1 |                 1 |              2 | localhost       |
TESTUSER    |
y5neWx3HuL2k$w5DqbqJOp+Y= |                     5 |
(1 rows)
```
{: codeblock}

2. Create a configuration in which you disable query history (with the `HISTTYPE` argument). For example, the following creates a configuration called hist_disabled:
```bash
[nz1 ~]$ nzsql -c "CREATE HISTORY CONFIGURATION hist_disabled HISTTYPE NONE;"
CREATE HISTORY CONFIGURATION
```
{: codeblock}

3. Update the system to use the `hist_disabled` configuration.
```bash
[nz1 ~]$ nzsql -c "SET HISTORY CONFIGURATION hist_disabled"
SET HISTORY CONFIGURATION
```
{: codeblock}

4. Changes you make to a configuration only take effect after you restart the database. Load (activate) the disabled Query History configuration by restarting with the `nzstop/nzstart` commands.

5. Verify that the disabled Query History configuration is now active:

```bash
[nz1 ~]$ nzsql -c "SHOW HISTORY CONFIGURATION"
```
{: codeblock}
```sql
| CONFIG_NAME  | CONFIG_DBNAME | CONFIG_DBTYPE | CONFIG_TARGETTYPE | CONFIG_LEVEL |
| -------- | ------- | ------- | ------- | ------- |
| HIST_DISABLED |     |   3  |    1 |   1  | localhost
.
.
.
---------------+---------------+---------------+-------------------+--------------+----------
 HIST_DISABLED |               |             3 |                 1 |            1 | localhost       |             |                 
.
.
.
 (1 row))
 ```
{: codeblock}


6. Make the required password changes in the original query history configuration (`nz_hist`). In the following example, the user `qryhist` is assigned the password new_password.
```bash
[nz1 ~]$ nzsql -c "ALTER HISTORY CONFIGURATION nz_hist USER qryhist PASSWORD new_password'"
ALTER HISTORY CONFIGURATION
```
{: codeblock}

7. Configure the system to use the initial configuration (`nz_hist`), which now has the changed password.
```bash
[nz1 ~]$ nzsql -c "SET HISTORY CONFIGURATION nz_hist"
SET HISTORY CONFIGURATION
```
{: codeblock}

8. Stop and restart the database so that the system loads the original query history configuration (`nzstop/nzstart` commands).

9. Verify that the correct Query History configuration is once again active with the `SHOW HISTORY CONFIGURATION` command.

For a complete description of each of the Query History commands, refer to the **IBM Netezza Database User’s Guide**.