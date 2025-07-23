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

# Notification and event rule management for NPS events
{: #noti_evnt_rule}

You can use the `CREATE NOTIFICATION METHOD` command to create notification methods for NPS events to send alerts. Notification methods are used to define how you want to be notified when an event occurs, based on your pre-configured event rules.

## Privileges required
{: #privi_req}

Your database user account must have **Manage System** privilege.

## Syntax
{: #synt_sql}

### Create Notification Method
{: #create_noti_method}

```sql
CREATE NOTIFICATION METHOD method_name
TYPE { EMAIL | AWS_SNS | AZURE_EVENT_GRID }
<additional_options>;
```

#### Additional options for `EMAIL` type:
{: #addi_email}

```sql
EMAIL_TO 'comma_separated_email_to_list'
[EMAIL_CC 'comma_separated_email_cc_list']
```

#### Additional options for `AWS_SNS` type:
{: #addi_awssns}

```sql
AWS_TOPIC_ARN 'aws_topic_arn'
[AWS_ROLE_ARN 'aws_role_arn']
[AWS_ACCESSKEY_ID 'aws_accesskey_id']
[AWS_ACCESSKEY_SECRET 'aws_accesskey_secret']
```

#### Additional options for `AZURE_EVENT_GRID` type:
{: #addi_azure_event}

```sql
AZURE_TENANT_ID 'azure_tenant_id'
AZURE_TOPIC_ENDPOINT 'azure_topic_endpoint'
[AZURE_SECRET_KEY 'azure_secret_key']
```

### Alter notification method
{: #alter_noti}

```sql
ALTER NOTIFICATION METHOD method_name
RENAME TO new_notification_method_name
<additional_options>;
```

You cannot alter the `TYPE` of a notification method. You must drop the event rule using the method before renaming it.
{: note}

### Show notification method
{: #show_noti_method}

```sql
SHOW NOTIFICATION METHOD [method_name]
```

- If `method_name` is provided, it shows details of that method.
- Otherwise, it lists all available notification methods.


### Drop notification method
{: #drop_noti}

```sql
DROP NOTIFICATION METHOD method_name
```

## Create event rule
{: #create_event_rule1}

You can use the `CREATE EVENT RULE` command to define rules for triggering alerts based on system events.

### Privileges required
{: #priv_req}

Your database user account must have **Manage System** privilege.

### Create event rule
{: #create_event_rule2}

```sql
CREATE EVENT RULE rule_name
EVENT_TYPE 'event_type'
[EVENT_ENABLE '{yes | no}']
EVENT_ARGS_EXPR 'event_arguments_expression'
EVENT_NOTIFYTYPE { EMAIL | AWS_SNS | AZURE_EVENT_GRID }
DESTINATION notification_method_name
EVENT_SUMMARY 'event_summary'
EVENT_BODYTEXT 'event_body_text'
EVENT_AGGR_COUNT event_aggr_count;
```

### Options
{: #options}

- **EVENT_TYPE**: Specifies the event type.
- **EVENT_ENABLE**: Enables or disables the rule.
- **EVENT_ARGS_EXPR**: Optional expression for filtering.
- **EVENT_NOTIFYTYPE**: Notification type (must match the method).
- **DESTINATION**: Notification method name.
- **EVENT_SUMMARY**: Message summary.
- **EVENT_BODYTEXT**: Message body.
- **EVENT_AGGR_COUNT**: Number of events to aggregate (1–1000, email only).

### Alter event rule
{: #alter_event_rule2}

```sql
ALTER EVENT RULE rule_name
RENAME TO 'new_rulename'
EVENT_TYPE 'event_type'
EVENT_ENABLE '{yes | no}'
EVENT_ARGS_EXPR 'event_arguments_expression'
EVENT_NOTIFYTYPE event_notification_type
DESTINATION notification_method_name
EVENT_SUMMARY 'summary_of_the_event'
EVENT_BODYTEXT 'notification_body_text'
EVENT_AGGR_COUNT aggregate_count_for_event_type;
```

### Show event rule
{: #show_event_rule3}

```sql
SHOW EVENT RULE [event_name]
```

- If `event_name` is provided, shows that rule.
- Otherwise, lists all rules.

### Drop event rule
{: #drop_event_rule2}

```sql
DROP EVENT RULE name
```

## Examples
{: #ex2}

### Email notification method and event rule
{: #emai_noti3}

```sql
CREATE NOTIFICATION METHOD email_nm
TYPE email
EMAIL_TO 'nzuser1@example.com,nzuser2@example.com'
EMAIL_CC 'nzuser3@example.com,nzuser4@example.com';

CREATE EVENT RULE TheSystemGoingOnline1
EVENT_ENABLE 'YES'
EVENT_TYPE 'sysStateChanged'
EVENT_ARGS_EXPR '$previousState == online && $currentState != online'
EVENT_NOTIFYTYPE email
DESTINATION email_nm
EVENT_SUMMARY 'NPS system went from $previousState to $currentState at $eventTimestamp.'
EVENT_BODYTEXT '$notifyMsg\\n\\nEvent:\\n$eventDetail\\nEvent Rule:\\n$eventRuleDetail'
EVENT_AGGR_COUNT 1;
```

### AWS SNS notification method and event rule
{: #awssns_eventrule3}

```sql
CREATE NOTIFICATION METHOD aws_nm1
TYPE AWS_SNS
AWS_TOPIC_ARN 'arn:aws:sns:us-east-2:XXXXXXXXXXX:nzexample_';

CREATE NOTIFICATION METHOD aws_nm2
TYPE AWS_SNS
AWS_TOPIC_ARN 'arn:aws:sns:us-east-2:XXXXXXXXXXX:nzexample_'
AWS_ROLE_ARN 'arn:aws:iam::XXXXXXXXXXX:role/Example_role'
AWS_ACCESSKEY_ID 'XXXXYYYYYXXXXXXX'
AWS_ACCESSKEY_SECRET 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

CREATE EVENT RULE TheSystemGoingOnline2
EVENT_ENABLE 'YES'
EVENT_TYPE 'sysStateChanged'
EVENT_ARGS_EXPR '$previousState == online && $currentState != online'
EVENT_NOTIFYTYPE AWS_SNS
DESTINATION aws_nm1
EVENT_SUMMARY 'NPS system went from $previousState to $currentState at $eventTimestamp.'
EVENT_BODYTEXT '$notifyMsg\\n\\nEvent:\\n$eventDetail\\nEvent Rule:\\n$eventRuleDetail'
EVENT_AGGR_COUNT 0;
```

### Azure event grid notification method and event rule
{: #awssns_eventrule4}

```sql
CREATE NOTIFICATION METHOD azure_nm1
TYPE AZURE_EVENT_GRID
AZURE_TENANT_ID 'XXXXX-YYYY-ZZZZZ-AAAA-XXXXXXXXXXXXXX'
AZURE_TOPIC_ENDPOINT 'XXXXYYYYYYXXXXXXZZZZZZZZAAAAABBBBSSSSS';

CREATE NOTIFICATION METHOD azure_nm2
TYPE AZURE_EVENT_GRID
AZURE_SECRET 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
AZURE_TOPIC_ENDPOINT 'XXXXYYYYYYXXXXXXXZZZZZZZZAAAAABBBBSSSS';

CREATE EVENT RULE TheSystemGoingOnline3
EVENT_ENABLE 'YES'
EVENT_TYPE 'sysStateChanged'
EVENT_ARGS_EXPR '$previousState == online && $currentState != online'
EVENT_NOTIFYTYPE AZURE_EVENT_GRID
DESTINATION azure_nm1
EVENT_SUMMARY 'NPS system went from $previousState to $currentState at $eventTimestamp.'
EVENT_BODYTEXT '$notifyMsg\\n\\nEvent:\\n$eventDetail\\nEvent Rule:\\n$eventRuleDetail'
EVENT_AGGR_COUNT 0;
```
