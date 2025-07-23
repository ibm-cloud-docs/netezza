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

# List of event types supported for SaaS customers
{: #eventtypelist}

## Supported event types for notification types: `EMAIL`, `AWS_SNS`, and `AZURE_EVENT_GRID`
{: #supported_eventtype}

- `SYS_STATE_CHANGED`
- `HW_RESTARTED`
- `HW_DISK_FULL`
- `RUNAWAY_QUERY`
- `TX_LIMIT_EVENT`
- `NAMESPACE_PAUSE_STARTED`
- `NAMESPACE_PAUSE_COMPLETED`
- `NAMESPACE_PAUSE_WARNING`
- `NAMESPACE_RESUME_STARTED`
- `NAMESPACE_RESUME_COMPLETED`
- `NAMESPACE_RESUME_WARNING`
- `SCALING_STARTED`
- `SCALING_COMPLETED`
- `SCALING_ROLLBACK`
- `SCALING_WARNING`
- `BACKUP_FAILED`
- `RESTORE_FAILED`

## Example: Creating event rules using SQL syntax
{: #example_eventrule}

1. Log in to `nzsql`.
1. Create notification method - Refer to the appropriate guide to create the [notification method](/docs/netezza?topic=netezza-noti_evnt_rule).
1. Create event rules - Following are sample SQL event rules for different event types and notify types.

## Notify type: `AWS_SNS`
{: #notify_type}

### Event type: `sysStateChanged`
{: #event_type_sysstate}

```sql
create event rule TestRule1
event_type 'sysStateChanged'
event_notifytype aws_sns
destination <Notification_method_name>
event_summary 'NPS system $HOST went from $previousState to $currentState at $eventTimestamp.'
event_bodytext '$notifyMsg\n\nEvent:\n$eventDetail\nEvent Rule:\n$eventRuleDetail'
event_enable 'on'
event_args_expr '$previousState == online && $currentState != online'
event_aggr_count 0;
```

### Event type: `hwRestarted`
{: #event_type_hwrestart}

```sql
create event rule TestRule2
event_type 'hwRestarted'
event_notifytype aws_sns
destination <Notification_method_name>
event_summary 'NPS system $HOST - $hwtype $hwId restarted at $eventTimestamp.'
event_bodytext '$notifyMsg\n\nSPA ID: $spaId\nSPA Slot: $spaSlot\n'
event_enable 'on'
event_args_expr ''
event_aggr_count 0;
```

### Event type: `hwDiskFull` (80% & 90%)
{: #event_type_hwdisk}

```sql
-- Disk 80% Full
create event rule TestRule3
event_type 'hwDiskFull'
event_notifytype aws_sns
destination <Notification_method_name>
event_summary 'NPS system $HOST - $hwtype $hwId partition id $partition is $value % full at $eventTimestamp.'
event_bodytext '$notifyMsg\n\nSPA ID: $spaId\nSPA Slot: $spaSlot\nThreshold: $threshold\nValue: $value\n'
event_enable 'on'
event_args_expr '$threshold == 80 || $threshold == 85'
event_aggr_count 50;

-- Disk 90% Full
create event rule TestRule3
event_type 'hwDiskFull'
event_notifytype aws_sns
destination <Notification_method_name>
event_summary 'NPS system $HOST - $hwtype $hwId partition id $partition is $value % full at $eventTimestamp.'
event_bodytext '$notifyMsg\n\nSPA ID: $spaId\nSPA Slot: $spaSlot\nThreshold: $threshold\nValue: $value\n'
event_enable 'on'
event_args_expr '$threshold == 90 || $threshold == 95'
event_aggr_count 50;
```

### Event type: `runawayQuery`
{: #event_type_runwaway}

```sql
create event rule TestRule4
event_type 'runawayQuery'
event_notifytype aws_sns
destination <Notification_method_name>
event_summary 'NPS system $HOST - long-running query detected at $eventTimestamp.'
event_bodytext '$notifyMsg\n\nsessionId: $sessionId\nplanId: $planId\nduration: $duration seconds'
event_enable 'on'
event_args_expr ''
event_aggr_count 0;
```

### Event type: `transactionLimitEvent`
{: #event_type_translimit}

```sql
create event rule TestRule5
event_type 'transactionLimitEvent'
event_notifytype aws_sns
destination TEST_AWS_SNS
event_summary 'NPS system $HOST - current number ($CurNumTX) of transactions exceeded $TxLimitEventPercent of total limit at $eventTimestamp.'
event_bodytext ''
event_enable 'on'
event_args_expr '$TxLimitEventPercent == 90'
event_aggr_count 0;
```

Similar SQL `create event rule` examples exist for other event types like:
- `namespacePauseStarted`, `Completed`, `Warning`
- `namespaceResumeStarted`, `Completed`, `Warning`
- `scalingStarted`, `Completed`, `Warning`, `Rollback`
- `backupFailed`, `restoreFailed`

## Notify type: `EMAIL`
{: #noti_type_email}

Rules are identical in structure to `AWS_SNS`, except:

```sql
event_notifytype email
```

## Notify type: `AZURE_EVENT_GRID`
{: #noti_type_Azuregrid}

Same structure as above, with:
```sql
event_notifytype azure_event_grid
```

## Event type: `namespaceResumeWarning` for All Notify types
{: #event_type_namespace}

### Notify type: `AWS_SNS`
{: #noti_type_awssns}

```sql
create event rule TestRule11
event_type 'namespaceResumeWarning'
event_notifytype aws_sns
destination <Notification_method_name>
event_summary 'NPS system $HOST - Namespace Resume Warning Event.'
event_bodytext ''
event_enable 'on'
event_args_expr '$type == auto'
event_aggr_count 0;
```

### Notify type: `EMAIL`
{: #noti_type_email}

```sql
create event rule TestRule11
event_type 'namespaceResumeWarning'
event_notifytype email
destination <Notification_method_name>
event_summary 'NPS system $HOST - Namespace Resume Warning Event.'
event_bodytext ''
event_enable 'on'
event_args_expr '$type == auto'
event_aggr_count 0;
```

### Notify type: `AZURE_EVENT_GRID`
{: #noti_type_azure}

```sql
create event rule TestRule11
event_type 'namespaceResumeWarning'
event_notifytype azure_event_grid
destination <Notification_method_name>
event_summary 'NPS system $HOST - Namespace Resume Warning Event.'
event_bodytext ''
event_enable 'on'
event_args_expr '$type == auto'
event_aggr_count 0;
```
