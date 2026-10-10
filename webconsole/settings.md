---

copyright:
  years: 2026
lastupdated: "2026-07-31"

keywords: web console, administering web console, administering

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}

# Administration settings
{: #adm-settings}

On the *Administration* page, you can manage the following items:

- Time travel
- Add policies and view existing policies
- Monitoring profile
- Database maintenance
- Scheduler rules
- Destinations
- Infrastructure monitoring
- Advanced monitoring

## Time travel
{: #time-travel}

Here you can set system default data version retention time.

## Network policies
{: #wc-nwpolicies}

On the *Network policies* page, you can add policies and view existing policies.

**Network policies** and **Private link** tabs are applicable only for Azure. 
{: note}

To add network policies, you must belong to the `ADMINISTRATORS` group.
{: note}

For more information about network policies and examples, see [Network policies](/docs/netezza?topic=netezza-network-policies).

### Domain standards
{: #domain-standards}

For more information about domain standards, see [Defining network policies with Classless Inter-Domain Routing (CIDR)](/docs/netezza?topic=netezza-network-policies#nw-cidr).

### Adding network policies
{: #wc-nwpolicies-adding}

1. Go to **Administration > Network policies**.
1. In the *Add policy* section, type your Classless Inter-Domain Routing (CIDR) or hostname.
   The IP address must conform to the domain standards.
1. Click **Save**.

### Viewing network policies
{: #wc-nwpolicies-viewing}

To view existing policies, go to **Administration > Network policies > Existing policies**.

### Deleting network policies
{: #wc-nwpolicies-deleting}

1. Go to **Administration > Network policies > Existing policies**.
2. Select the policy that you want to delete.
3. Click **Delete**.

You can select multiple policies to delete.
{: note}

## Monitoring profile
{: #monitoring-profile}

On the *Monitoring profile* page, you can do the following:

- Monitor the performance of your system over time.
- Collect data for historical and real time data.

To access the *Monitoring profile* page, go to **Administration > Monitoring profile**.

## Maintenance
{: #maintenance}

On the *Maintenance* page, you can perform on-demand maintenance operations and schedule recurring database maintenance. The page provides the following operations:

- **Manual vacuum** — a data catalog operation that performs deep maintenance on system catalogs.
- **Schedule database maintenance** — schedule recurring Grooms and Genstats maintenance windows.



### Manual vacuum
{: #manual-vacuum}

Manual vacuum is a data catalog operation that physically reclaims disk space from deleted records and recreates system indexes.

System downtime is required to run a manual vacuum. All active database connections are terminated, and the system is unavailable to users and queries until the process completes and the system is restarted.
{: important}

The operation typically takes 15–45 minutes, but can exceed 2 hours for heavily bloated catalogs. A catalog backup is automatically performed before the vacuum begins.
{: note}

To run a manual vacuum:

1. Go to **Administration > Maintenance**.
1. In the **Manual vacuum** section, click **Run vacuum**.



### Scheduling database maintenance
{: #schedule-db-maintenance}

You can schedule recurring maintenance windows for **Grooms** and **Genstats**. Each can be configured independently with its own schedule, days, and duration.

To schedule a database maintenance window:

1. Go to **Administration > Maintenance**.
1. Under the **Schedule database maintenance** section, click **Enable** for **Grooms**, **Genstats**, or both.
1. Set the time and timezone for each enabled operation.
1. Select the days of the week on which the maintenance should run.
1. Set the **Duration (minutes)** to specify how long the maintenance process is allowed to run.
1. Click **Save**.

## Scheduler rules
{: #scheduler-rules}

On the *Scheduler rules* page, you can view the list of scheduler rules, create a scheduler rule, activate or deactivate the rule, assign owner, rename, and remove the rule.


### Creating scheduler rules
{: #create-scheduler-rules}

1. Go to **Administration > Scheduler rules**.
1. Click **Create scheduler rule**.
1. Type a name for the scheduler rule.

   The name must be unique across all global object names. For example, database names and user group names. The name of the rule determines when the rule is evaluated in relation to other active rules.

1. Select the type of your scheduler rule.

   The scheduler rule can be `Standard` or `Advanced`.

1. Add conditions.

    For any rule to be triggered, all of the conditions must be met. If you do not set any conditions, the rule applies to all plans. The action is taken as a result of the rule.

1. Add actions.

   You can add only one action for a scheduler rule.

1. If you want the rule to control administrative jobs, tick **Apply to admin jobs**.
1. Tick **Active** to activate the rule.
1. Click **Create**.

You can select **View definition**, **Activate**, **Assign owner**, **Rename** and **Remove** options from the overflow menu.
{: note}

## Destinations
{: #destinations}

On the *Destinations* page, you can manage storage destinations used by Netezza for backup and restore operations and other data movement tasks.

To access the *Destinations* page, go to **Administration > Destinations**.

## Infrastructure
{: #infrastructure-admin}

On the *Infrastructure* page, you can monitor system health, SPU resources, and data slice storage utilization.

To access the *Infrastructure* page, go to **Administration > Infrastructure**.

## Advanced monitoring
{: #advanced-monitoring-admin}

On the *Advanced monitoring* page, you can analyse additional performance metrics for workload monitoring.

To enable or disable Advanced monitoring, go to **Administration > Advanced monitoring** and toggle the switch.
