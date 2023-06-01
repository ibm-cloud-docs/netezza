---

copyright:
  years: 2023
lastupdated: "2023-06-01"

keywords: getting started with Netezza Performance Server, viewing credentials, adding credentials, Netezza Performance Server credentials

subcollection: netezza

---

{:shortdesc: .shortdesc}
{:screen: .screen}  
{:codeblock: .codeblock}  
{:pre: .pre}
{:tip: .tip}
{:note: .note}
{:important: .important}
{:external: target="_blank" .external}
{:step: data-tutorial-type='step'}

# Managing credentials
{: #managing-credentials}

## Generating credentials
{: #generate-credentials}

1. Log in to your {{site.data.keyword.cloud_notm}} account.
1. Go to **Resource list > Services and Software > Databases**.
1. Click on your {{site.data.keyword.netezza_short}} instance.  
   You are now on the **Service instance details** page where you can find information about endpoints for accessing the web console, the API server, and the database.
1. Go to the **Service Credentials** tab.
1. Click **New Credentials**.

   1. Type a name to assing to your credentials.
   1. Select the IAM role that was assigned to you to manage the instance.
   1. Click **Add**.

If your credentials were generated successfully, you can expand the newly created credential entry to view them.

## Viewing credentials
{: #view-credentials}

1. Log in to your {{site.data.keyword.cloud_notm}} account.
1. Go to **Resource list > Services and Software > Databases**.
1. Click on your {{site.data.keyword.netezza_short}} instance.  
   You are now on the **Service instance details** page where you can find information about endpoints for accessing the web console, the API server, and the database.
1. Go to the **Service Credentials** tab.
1. Expand **View credentials**.   
1. Expand your credential entry.
   The following credentials are displayed:

   - `username: admin` - Specifies a local database `admin` user that was created for you to access the instance.
   - `password: xxxx`  - Specifies the password that you must use when logging in to your instance as `admin`.  
   