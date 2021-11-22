---

copyright:
  years: 2021
lastupdated: "2021-11-02"

keywords: web console, getting started with the web cosnole

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}

# Resource monitoring
{: #resource}

## Dasboard
{: #dashboard}

On the *Dashboard* page, you can view graphs for the following.

- Resource consumption
- Query throughput
- Query performance
- Query runtime distribution
- Sessions
- Current GRA distribution

By default, the information is saved for the following time intervals.

- 1 hour
- 6 hours
- 12 hours
- 24 hours
- 3 days

You can also set a custom time setting.

1. Click **Custom**.
1. Specify the start and end dates.
1. Click **Done**.

For any of the charts, you can zoom in and out by moving the slider to see a specific range. You can also expand your graph view by clicking the arrows icon.
{: tip}

### Resource consumption
{: #resource-consumption}

The resource monitor chart summarizes several key system resources for the monitored system.

The chart displays information about the overall CPU, disk, fabric network, and memory utilization of the monitored system. 

### Query throughput
{: #query-throughput}

The query throughput chart displays a current summary and view of the query throughput of the system. You can view the number of queries that are running over time on the system.

Queries can be grouped basing on the number of queries that run per minute or per hour.

### Query performance
{: #query performance}

The query performance chart displays information on the query preparation time. Query preparation time is the time between when a query is submitted and when it starts to run. The chart also shows the total duration of a query.

The charts can help you to identify the busiest and the least busy hours for your system, and whether the query trend is growing or decreasing over time. You can also identify times when queries take the longest to run.

This features can help you to plan for activities such as scheduling maintenance windows during the least used times and identifying the busiest times when high activity might cause users to report query result delays or performance concerns.

### Query runtime distribution
{: #query-runtime-distribution}

The query runtime distribution chart displays a relative duration of a query over time.

### Sessions
{: #sessions}

The sessions chart displays the number of connections over time. You can also view the list of sessions, change priority, stop transactions, or stop sessions.

### Current GRA distribution
{: #gra-distribution}

The current GRA distribution chart displays information about the current guaranteed resource allocation share of resource groups.

## Workload
{: #workload}

### Queue monitor
{: #queue-monitor}

The queue monitor chart summarizes the short and long queues on the system and how busy they are. The report shows you the number of snippets in the snippet queues and the number of jobs in the GRA queues.

Thee chart shows the values for the latest sample of data:

- The number of long GRA jobs that are waiting for GRA resources.
- The number of short GRA jobs that are waiting for GRA scheduler slots.
- The number of long snippets that are waiting for resources.
- The number of short snippets that are waiting for resources.

The queue sizes monitor trend chart displays the recent history of these four queues. For newly added hosts, the charts show a short sample of trend, but the charts can grow to show up to six days of trend. 

You can zoom in and out by moving the slider to see a specific range. You can also expand your graph view by clicking the arrows icon.
{: tip}

{{site.data.keyword.netezza_short}} separates short queries from longer-running queries. Short queries are those queries that run in two seconds or less. For “lightly loaded” systems, the queues might be zero if no queries are waiting, or small. As the system becomes busy with concurrent short or long queries, these queues can show a larger number of waiting snippets and jobs.

{{site.data.keyword.netezza_short}} reserves resources specifically for short queries so that it can run and complete those short queries even while it is busy running longer queries. 

### Resource allocation
{: #resource-allocation}

The resource allocation charts display the percentage of current system resources that are consumed by the 4 most popular resource groups.

The first chart monitors the percentage of system resources that are consumed by the resource groups over the time. The other two pie charts show the current resource allocation and current run jobs of the most popular resource groups.

## Infrastructure
{: #infrastructure}

On the *Infrastructure* page, you can view information about your system, system disk status, SPUs, and storage utilization.




