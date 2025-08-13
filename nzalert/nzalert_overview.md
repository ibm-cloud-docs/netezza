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

# Overview
{: #nzalert_overview}

This guide helps users to enable notifications for important service-related events such as:

- Scaling operations
- Pause/resume operations
- System state change
- Backup/restore failures
- Dataslice full

Refer to the [List of event types supported](https://www.ibm.com/docs/en/netezza?topic=nzalert-manage-event-rules) for a comprehensive list of events.


This feature supports three notification methods:
- Email
- AWS SNS (for AWS users)
- Azure Event Grid (for Azure users)

## Event setup process
{: #event_setup}

The event setup process for NPSaaS customers involves the following three steps:

### 1. Configure notification infrastructure
{: #config_noti}

- **AWS users**: Refer to [nzalert for AWS](/docs/netezza?topic=netezza-nzalert_aws_setup) for infrastructure setup.
- **Azure users**: Refer to [nzalert for Azure](/docs/netezza?topic=netezza-nzalert_setup) for infrastructure setup.
- **Email Notifications**: No additional infrastructure setup is required.

### 2: Create notification methods
{: #noti_methods}

- Follow the instructions on the [Create notification method](https://www.ibm.com/docs/en/netezza?topic=nzalert-notification-event-rule-management-nps-events).

### 3: Define event rules
{: #event_rules}

- Refer to the [Create Event Rule](https://www.ibm.com/docs/en/netezza?topic=nzalert-notification-event-rule-management-nps-events#noti_event_rule__email-rules__title__1) to configure event rules.
