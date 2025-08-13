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

# Nzalerts on Azure
{: #nzalert_setup}

This guide outlines two methods to set up **Nzalerts** on Microsoft Azure.

## Setup options
{: #setupoptions}

### Option 1: Providing access to IBM's multi-tenant app
{: #opt1}

Events will be published to your Azure event grid topic by granting access to IBM’s multi-tenant app.

### Option 2: Providing your access key
{: #opt2}

### Option 3: Email method
{: #opt3_emailmethod_az}

Events will be published to your Azure event grid topic by providing the endpoint and access key.

## 1. Providing access to IBM's multi-tenant app:
{: #accesstoibmtenant}

### Step1: Create the event grid topic:
{: #createeventgrid}

1. Login to **Azure** portal.
1. Navigate to search bar and search for `Event-Grid`.
1. Select `Topic` in `Event-Grid`. Click on **Create** to create a new topic.
1. Fill out the details like `Resource Group`, `Topic Name`.
1. Then click on **Review+create** to create the topic.

### Step 2: Give consent to make IBM’s multi-tenant app as Service Principal
{: #consentibmtenant}

1. Login to the **Azure** portal.
1. Get the Directory ID of your Microsoft AD on which you need your topic to be published. Directory ID would be required for creating the notification method.
1. Refer the document to create the notification method. [Azure Event Grid Notification Method](https://www.ibm.com/docs/en/netezza?topic=nzalert-notification-event-rule-management-nps-events).
1. A consent URL will be generated once you input your Directory ID. For example, see the following.

   ```url
   https://login.microsoftonline.com/<>/oauth2/authorize?client_id=<>&response_type=code
   ```

1. Paste the link on the browser. Only global admins (or roles with app consent rights) can consent on behalf of the tenant. Click **Accept**. This will create a Service principal of our app in your tenant.

### Step 3: Give publish permission
{: #publishpermission}

To get the events to be published in that topic, click the created topic and navigate to **Access Control (IAM)** on the left side.

1. Click on **Add Role Assignment**.
1. Choose role **Eventgrid data sender**.
1. Assign to: User, Group or service principle.
1. Select the multi-tenant app for which customers has consented and then **Save**.

### Step 4: Create event rule method in NzSaas console
{: #event_ruleconsole}

1. Create event rule will take tenant id and event grid topic as input. Refer notify type, see [Azure_Event_Grid](https://www.ibm.com/docs/en/netezza?topic=nzalert-manage-event-rules).

Once the events are published to Azure event grid, you can configure the downstream handling based on your requirements—whether it's delivering the events via email, forwarding them to a queue, or integrating with other services.
{: note}

## 2. Providing your access key:
{: #prov_access_key}

### Step 1: Create event grid in your account
{: #create_event_grid}

1. Login to **Azure** portal.
1. Navigate to search bar and search for **Event Grid**.
1. Select `Topic` in EventGrid. Click on **Create** to create a new topic.
1. Fill out the details like `Resource Group`, `Topic Name`.
1. Then click on **Review+create** to create the topic.

### Step 2: Create notification method
{: #create_notif_method}

1. From the Event grid topic:

    Get the **Topic Endpoint** from the **Overview** tab.

    Get the **Access Key** from **Settings -> Access Keys**.

1. Refer to the [Notification method](https://www.ibm.com/docs/en/netezza?topic=nzalert-notification-event-rule-management-nps-events) to complete the setup.

## 3: Email method
{: #nzalert_az_emailmethod}

1. Go to **Settings** -> **Monitoring and alerts** section.
2. Navigate to **Add** method radio button and click it.
3. In the **Select** method section, from the select method drop down choose **Email** and provide the name for the notification method in the enter method name field and click next.
4. In the **Configure method** section, enter the mail address in the respective fields.
5. Click **Confirm**.

### Create rule for Email method
{: #create_rule_email_az}

1. Go to **Settings** -> **Monitoring and alerts** section.
2. Navigate to **Create rule** -> **Define rule**.
3. Enter rule name and enable the status and click **Next**.
4. Go to **Select destination**, select the destination as **Email** and choose email method.
5. Click **Next** to go to **Choose event**.
6. Enter the details and click **Next** to go to **Event expression**.
7. Fill in the necessary fields and click **Confirm** to complete the rule setup.
