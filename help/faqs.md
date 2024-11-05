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

## How far can prolife be scaled up?
{: #profile-scaleup}
{: faq}
{: support}

From `NC-START`, we can scale up the workload contour to NC0.

## How far can profile be scaled up from the current configuration?
{: #profile-scaleup-config}
{: faq}
{: support}

Starting from the NC-START configuration, you can scale the workload contour up to NC0.

## What is the maximum storage scaling limit?
{: #storage-scaling-limit}
{: faq}
{: support}

Within the NC-START workload contour, storage can be scaled up to 1200 GB. However, if you also scale the workload contour to NC0, storage capacity can be increased from 2400 GB up to 24000 GB.

## What is the procedure for scaling up?
{: #procedure-scaleup}
{: faq}
{: support}

For detailed scaling procedures, please refer to the following documentation:  
To scale storage within the NC-START contour, see [NC-START Storage Scaling Guide](https://cloud.ibm.com/docs/netezza?topic=netezza-scaling-console&locale=en#ncstart-scalingstorage-console-ondemand).  
To scale the workload contour to NC0, see [NC-START to NC0 Contour Scaling Guide](https://cloud.ibm.com/docs/netezza?topic=netezza-scaling-console&locale=en#ncstart-scalingcontour-console-ondemand).

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