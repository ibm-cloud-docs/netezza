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

# Nzalerts on Azure – Installation guide
{: #nzalert_setup}

This guide outlines two methods to set up **Nzalerts** on Microsoft Azure.

## Setup options
{: #setupoptions}

### Option 1: Using IBM’s Multi-Tenant App
{: #opt1}

Events will be published to your Azure Event Grid topic by granting access to IBM’s multi-tenant app.

### Option 2: Using Access Key
{: #opt2}

Events will be published to your Azure Event Grid topic by providing the endpoint and access key.

## A. Providing the access to IBM’s multi-tenant app:
{: #accesstoibmtenant}

### Step1: Create the Event Grid Topic:
{: #createeventgrid}

1. Login to Azure portal.
1. Navigate to search bar and search for Event-Grid.
1. Select “Topic" in Event-Grid. Click on “Create" to create a new topic.
1. Fill out the details like Resource Group, Topic Name.
1. Then click on “Review+create” to create the topic.

### Step 2: Give consent to make IBM’s multi-tenant app as SP
{: #consentibmtenant}

1. Login to the Azure Portal.
1. Get the Directory ID of your Microsoft AD on which you need your topic to be published. Directory ID would be needing for creating the notification method.
1. Refer the document to create the notification method. [Azure Event Grid Notification Method](https://login.microsoftonline.com/<>/oauth2/authorize?client_id=<>&response_type=code).
1. A consent URL will be generated once you input your Directory ID. For example, see the following.

   ```url
   https://login.microsoftonline.com/<>/oauth2/authorize?client_id=<>&response_type=code
   ```
1. Paste the link on the browser. Only global admins (or roles with app consent rights) can consent on behalf of the tenant. Click “Accept”. This will create a Service Principal of our app in your tenant.

### Step 3: Give Publish permission
{: #publishpermission}

To get the events to be published in that topic, click the created topic and navigate to "Access Control (IAM)” on the left side.
1. Click on "Add Role Assignment”.
1. Choose role “Eventgrid data sender”.
1. Assign To: User, Group or service principle
1. Select the Multi-tenant App for which customers has Consented and then “Save”.

### Step 4: Create Event rule method in NzSaas console
{: #event_ruleconsole}

1. Create event Rule will take tenant id and event grid topic as input. Refer Notify Type: Azure_Event_Grid in document.

Once the events are published to Azure Event Grid, you can configure the downstream handling based on your requirements—whether it's delivering the events via email, forwarding them to a queue, or integrating with other services.
{: note}

## B. Providing the access key:
{: #prov_access_key}

### Step 1: Create Event Grid in your account
{: #create_event_grid}

1. Login to Azure portal.
1. Navigate to search bar and search for **Event Grid**.
1. Select `Topic` in EventGrid. Click on `Create` to create a new topic.
1. Fill out the details like `Resource Group`, `Topic Name`.
1. Then click on `Review+create` to create the topic.

### Step 2: Create notification method
{: #create_notif_method}

1. From the Event Grid topic:

    Get the **Topic Endpoint** from the **Overview** tab.

    Get the **Access Key** from **Settings → Access Keys**.

1. Refer to the Notification Method Document to complete the setup.
