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
{:note: .note}

# FAQs for {{site.data.keyword.netezza_short}}
{: #netezza-faqs}

This is a collection of frequently asked questions (FAQ) about the {{site.data.keyword.netezza_full}}.
{: shortdesc}

## How do I migrate my users from OnPrem LDAP to {{site.data.keyword.netezza_short}} Azure AD and enable SAML?
{: #migrate-onpremldap-azuread}
{: faq}
{: support}

To migrate your users from OnPrem LDAP to NZSaaS Azure AD and enable SAML, follow these steps:
1. Configure Azure AD and sync users from LDAP. For more information, see [Setting Azure AD authentication](/docs/netezza?topic=netezza-azureadauth).
1. Enable SAML by following the instructions in the [Enabling SAML authentication](/docs/netezza?topic=netezza-samliamauth).
1. Take a global backup on your on-premises system using the following command:

```sql
nzbackup -globals -dir /nzscratch/OnPremGlobals
```
{: codeblock}

1. Copy the backed-up globals directory to the target system.
1. On the target system, register the external authentication system (LDAP) using the following command:

   ```sql
   REGISTER EXTERNAL AUTHENTICATION SYSTEM 'LDAP'
   WITH BASE 'ou=Users,o=6167d268d49b604a5e763d8b,dc=jumpcloud,dc=com'
   NAMECASE lowercase
   SERVER '<LDAPSERVER>'
   SSL 'off'
   BINDDN 'uid=tejal,ou=Users,o=6167d268d49b604a5e763d8b,dc=jumpcloud,dc=com'
   BINDPW '<PASSWORD>';
   ```
   {: codeblock}

1. Before restoring the globals on the target system, verify the current user count and the latest user creation date on the source system by running the following queries:

   1. Get current user count:

      ```sql
      SELECT COUNT(*) FROM _v_user;
      ```
      {: codeblock}

   1. Get latest user creation date:

      ```sql
      SELECT createdate FROM _v_user ORDER BY createdate DESC LIMIT 1;
      ```
      {: codeblock}

1. Restore the backed-up globals on the target system using the following command:

   ```sql
   nzrestore -globals -dir /nz/OnPremGlobals -npshost <sourcehost> -u admin -pw 'Password'
   ```
   {: codeblock}

1. After restoring the globals, verify the number of users added to the target system by running the following query:

   ```sql
   SELECT COUNT(*) FROM _v_user;
   ```
   {: codeblock}

1. Update the `USEAUTH` field for the newly added users by running the following query:

   ```sql
   UPDATE _t_user SET USEAUTH=2
   WHERE usename IN (
   SELECT username FROM _v_user WHERE CREATEDATE > <O/P captured in step 3b>
   );
   ```
   {: codeblock}

   The number of updated users should match the number of users migrated.
   {: note}

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
For more information, see [Setting spending notifications](/docs/account?topic=account-spending).

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

- Updates to the service are posted in the [Release notes](https://www.ibm.com/docs/en/netezza?topic=started-netezza-performance-server-release-notes).

- You can find pricing information one the IBM Cloud [catalog](https://cloud.ibm.com/catalog#services) page.

For more information, contact [IBM Sales](https://www.ibm.com/contact).

## Where can I find help for a problem that I'm having?
{: #finding-help}
{: faq}
{: support}

For information about posting questions on a forum or opening a support ticket, see:

- [Opening tickets](https://cloud.ibm.com/docs/netezza?topic=netezza-tickets&interface=ui)

- [IBM Cloud Support](https://cloud.ibm.com/unifiedsupport/supportcenter)

- [IBM Cloud® support forum](https://www.ibm.com/mysupport/s/forumshome?language=en_US)

- [IBM Hybrid Data Management Community](https://community.ibm.com/community/user/datamanagement/home)

## How can I change a Query History user's password?
{: #changequerypswd-help}
{: faq}
{: support}

You can change the `Query History` password in 2 ways:
- using query editor
- using remote nzsql client

Use the following SQL syntax with admin or any user with administrator privilege:

1. Determine the name of the existing `Query History` configuration. The configuration name is the first field returned:

```bash
show history configuration
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

2. Create a configuration in which you disable `Query history` (with the `HISTTYPE` argument). For example, the following creates a configuration called hist_disabled:

```bash
CREATE HISTORY CONFIGURATION hist_disabled HISTTYPE NONE
CREATE HISTORY CONFIGURATION
```
{: codeblock}

3. Update the system to use the `hist_disabled` configuration.

```bash
SET HISTORY CONFIGURATION hist_disabled
SET HISTORY CONFIGURATION
```
{: codeblock}

4. Verify that the disabled `Query History` configuration is now active:

```bash
SHOW HISTORY CONFIGURATION
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


5. Make the required password changes in the original `Query history` configuration (`nz_hist`). In the following example, the user `qryhist` is assigned the password new_password.

```bash
ALTER HISTORY CONFIGURATION nz_hist USER qryhist PASSWORD new_password'
ALTER HISTORY CONFIGURATION
```
{: codeblock}

6. Configure the system to use the initial configuration (`nz_hist`), which now has the changed password.

```bash
SET HISTORY CONFIGURATION nz_hist
SET HISTORY CONFIGURATION
```
{: codeblock}

7. Stop and restart the database so that the system loads the original `Query history` configuration (`nzstop/nzstart` commands).

8. Changes you make to a configuration only take effect after you restart the database. Load (activate) the disabled `Query History` configuration by restarting with the `nzstop/nzstart` commands.

9. Verify that the correct `Query History` configuration is once again active with the `SHOW HISTORY CONFIGURATION` command.

For a complete description of each of the `Query History` commands, refer to the **IBM Netezza Database User’s Guide**.

## How to check the name without using config name ALL_HIST?
{: #example_allhist}

Check your name by running below query:

```bash
 nzsql -c "SHOW HISTORY CONFIGURATION"
```
{: codeblock}

### Steps for changing the current configuration and update the password.
{: #steps_configpswd}

1. Set the current configuration to `hist_disabled`.

   ```bash
    nzsql -c "set history configuration HIST_DISABLED"
   ```
   {: codeblock}

1. Restart the database.
1. Change the password as follows.
  
   ```bash
      nzsql -c "ALTER HISTORY CONFIGURATION <QUERYHIST> PASSWORD '<new password>';"
   ```
   {: codeblock}

1. Set the current configuration to your current history database file. If `all_hist` is your configuration then change it as follows:
   
   ```bash
      nzsql -c "set history configuration all_hist"
   ```
   {: codeblock}

1. Restart the database.

Open a [ticket](/docs/netezza?topic=netezza-tickets&interface=ui) to stop and start the database when resetting history user password.
{: note}

## How far can prolife be scaled up?
{: #profile-scaleup}
{: faq}
{: support}

From `NC-START`, we can scale up the workload contour to NC0.

## How much can storage be scaled up from an NC-START configuration with 400 GB storage density on AWS?
{: #profile-scaleup-config}
{: faq}
{: support}

Within the `NC-START` workload contour on AWS, storage can be scaled up to 1200 GB. If you choose to scale further into the NC0 contour, storage density can range from 2400 GB up to 24000 GB.
Similarly, for an NPS instance deployed on Azure, the base storage is 256 GB. This can be scaled up to 1024 GB within the `NC-START` workload contour. Scaling to the NC0 contour allows storage density to range from 1536 GB to 12288 GB.

## What is the maximum storage scaling limit?
{: #storage-scaling-limit}
{: faq}
{: support}

Within the NC-START workload contour, storage can be scaled up to 1200 GB. However, if you also scale the workload contour to NC0, storage capacity can be increased from 2400 GB up to 24000 GB.

## What is the procedure for scaling up from the NC-START configuration??
{: #procedure-scaleup}
{: faq}
{: support}

To scale up from the NC-START configuration, please follow the guidance provided in the documentation links below:
To increase storage within the NC-START workload contour (currently at 400 GB), see: [NC-START Storage Scaling Guide](https://cloud.ibm.com/docs/netezza?topic=netezza-scaling-console&locale=en#ncstart-scalingstorage-console-ondemand).
To scale the workload contour from NC-START to NC0, see: [NC-START to NC0 Contour Scaling Guide](https://cloud.ibm.com/docs/netezza?topic=netezza-scaling-console&locale=en#ncstart-scalingcontour-console-ondemand).

## How long does scaling up take?
{: #duration-scaleup}
{: faq}
{: support}

Scaling storage itself does not take six hours. However, a six-hour cooling period is required between consecutive storage scaling attempts. This is the minimum wait time before initiating another scaling process.

## Is it possible to scale up without affecting the current database configuration and data?
{: #scaleup-without-dbconfig}
{: faq}
{: support}

Yes, you can scale up while preserving the current database configuration and existing table data.

## After scaling up profile to NC0, is it possible to revert to `NC-START`?
{: #profile-scaleup-ncstart}
{: faq}
{: support}

No, once you scale up from NC-START to NC0, you cannot revert to NC-START.

## Is it possible to scale down storage after increasing it from 400 GB?
{: #profile-scaledown}
{: faq}
{: support}

No, once storage has been scaled up, it cannot be scaled down.
