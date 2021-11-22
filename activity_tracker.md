---

copyright:
  years: 2021
lastupdated: "2021-07-16"

keywords:

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

# Activity Tracker integration
{: #activity-tracker}

{{site.data.keyword.netezza_full}} deployments are integrated with Activity Tracker events in [IBM Cloud Activity Tracker with LogDNA](/docs/Log-Analysis-with-LogDNA?topic=Log-Analysis-with-LogDNA-getting-started), so you can view service-level events.

Currently, Activity Tracker with Log Analysis integration is available for {{site.data.keyword.netezza_short}} in the following regions:

| Deployment region | Activity Tracker region |
|:----------|:---------|
| Dallas | us-south |
| Washington | us-north |
{: caption="Table 1. Activity Tracker regions." caption-side="bottom"}

## Activity Tracker through Log Analysis
{: #at_logdna}

After you provision the service, events are automatically forwarded from all of your {{site.data.keyword.netezza_short}} deployments in the same region.

The service can be provisioned from its [catalog page](https://cloud.ibm.com/catalog/services/logdna?callback=%2Fobserve%2Flogging%2Fcreate){: external} or from an existing [Observability Dashboard](https://cloud.ibm.com/observe/activitytracker){: external}.

The Activity Tracker with Log Analysis service has a Lite plan that is free to use, but it only offers streaming events. To take advantage of the tagging, export, retention, and other features, you need to use one of the [paid plans](https://test.cloud.ibm.com/docs/log-analysis?topic=log-analysis-service_plans){: external}.

### Using the Log Analysis Activity Tracker
{: #at_use}

You can access Activity Tracker with Log Analysis through the Observability tab of your deployment's Manage page. The Manage Activity Tracker button links to the main list of all Activity Tracker instances in your IBM Cloud account. Select the instance where you set your logs to be forwarded. Click View Activity Tracker to view the events.

After the event activity is forwarded to the service, each event can be expanded to a detailed view by clicking the arrow that is next to the time stamp.

## Event fields
{: #at_ev_fields}

A description of the common fields for an Activity Tracker event is on the [Event fields](https://test.cloud.ibm.com/docs/activity-tracker?topic=activity-tracker-event){: external} page.

## List of events
{: #at_list_ev}

The following table lists the events that get sent to Activity Tracker from {{site.data.keyword.netezza_short}} deployments:

| Action | Description |
|:-------|:-------|
| `<service-id>.scheduled-backup.create`| A scheduled backup was created. If the attempted backup failed, a "-failure" flag is included in the message. |
| `<service-id>.restore.create`| A restore was initiated. If the attempted restore failed, a "-failure" flag is included in the message. |
| `<service-id>.resources.scale`| A storage scaling operation was performed. If the scaling operation failed, a "-failure" flag is included in the message. |
| `<service-id>.resources.workerscale`| A compute scaling operation was performed. If the scaling operation failed, a "-failure" flag is included in the message. |
| `<service-id>.system.pause`| System paused. If the operation failed, a "-failure" flag is included in the message. |
| `<service-id>.system.resume`| System resumed. If the operation failed, a "-failure" flag is included in the message. |
{: caption="Table 2. List of events and event descriptions." caption-side="bottom"}
