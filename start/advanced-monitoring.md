---

copyright:
  years: 2026
lastupdated: "2026-07-15"

keywords: Netezza Performance Server, advanced monitoring, performance metrics, resource utilization, monitoring dashboard

subcollection: netezza

---

{:shortdesc: .shortdesc}
{:screen: .screen}
{:codeblock: .codeblock}
{:pre: .pre}
{:tip: .tip}
{:note: .note}
{:caption: .caption}
{:table: .aria-labeledby="caption"}
{:external: target="_blank" .external}

# Advanced Monitoring
{: #advanced-monitoring}

The Advanced Monitoring feature provides deep, granular performance metrics, resource utilization analytics, and system health insights for {{site.data.keyword.netezza_full}}. Dashboard components cover query workload analytics, infrastructure utilization, storage consumption, database maintenance, and object usage statistics, all from a single interface.
{: shortdesc}

## Access and prerequisites
{: #advanced-monitoring-access}

Advanced Monitoring is available to administrator accounts only. Non-administrator users do not have visibility or access to these metrics.

To enable Advanced Monitoring:

1. Navigate to the **Administration** page.
2. Locate the **Monitoring Dashboard** tile.
3. Toggle the **Advanced Monitoring** setting to **ON**.

Once enabled, navigate to the **Monitoring Dashboard** page, scroll to the bottom of the interface, and select the **Advanced Monitoring** tab.

### Infrastructure Advanced Monitoring
{: #advanced-monitoring-infrastructure-tile}

For AWS SaaS and BYOC deployments that use the Lakehouse Unstructured feature, an **Infrastructure Advanced Monitoring** tile is also available on the **Administration** page. This tile provides infrastructure-level metrics specific to the Lakehouse Unstructured workload.

To access Infrastructure Advanced Monitoring:

1. Navigate to the **Administration** page.
2. Locate the **Infrastructure Advanced Monitoring** tile.
3. Select the tile to open the infrastructure monitoring view.

This feature is available on AWS SaaS and BYOC deployments only.
{: note}

## Dashboard components
{: #advanced-monitoring-components}

### Performance and workload analytics
{: #advanced-monitoring-workload}

The following charts are available in the Performance and Workload Analytics section.

**Query Summary**
:   A line chart that plots total, submitted, completed, and failed query counts. Used to infer query throughput and track daily query volumes.

**Performance Analysis**
:   A line chart that plots average queue time (seconds) versus date, and average and maximum run time versus date. Evaluates total query processing time by aggregating queue and execution latency.

**Type Analysis**
:   A stacked bar chart that plots the total volume of queries categorized by specific query types.

**Insert Operation Breakdown**
:   A stacked bar chart that shows the volume breakdown of write operations, segmenting INSERT, INSERT (LOAD), and INSERT (SINGLETON) operations.

**Success vs. Failure Rate**
:   An area graph that plots query success rate versus query failure rate over time.

**Workload Distribution by Query Type**
:   A pie chart that shows average query type distribution across the system.

### Infrastructure performance
{: #advanced-monitoring-infrastructure}

Four independent heatmaps plot maximum utilization metrics across an Hour x Date matrix to isolate resource bottlenecks.

**CPU Utilization**
:   Plots host CPU performance and SPU CPU performance.

**Memory Utilization**
:   Plots host memory allocation and SPU memory allocation.

### Storage and database metrics
{: #advanced-monitoring-storage}

**Top 5 databases by size**
:   A data table that identifies and tracks the capacity of the top five largest databases by storage volume.

### Database maintenance statistics
{: #advanced-monitoring-maintenance}

The following maintenance statistics are available.

**Last Backup Details**
:   Summary for the most recent backup operation.

**Last Vacuum Details**
:   Summary for the most recent database vacuum operation.

**Versioned Tables**
:   Tracks table versioning overhead and history.

**Skewed Tables**
:   Identifies data distribution imbalances across cluster nodes.

**Tables Needing Groom**
:   Flags tables that require data reorganization, space reclamation, or cleanup.

**Tables Needing Genstat**
:   Identifies tables requiring updated statistics generation for the query optimizer.

### Object usage statistics
{: #advanced-monitoring-object-usage}

Object usage statistics identify the most heavily targeted database objects to assist with indexing and schema optimization.

**Most Projected Tables**
:   Tables frequently referenced in select or projection blocks.

**Most Predicated Tables**
:   Tables frequently used in conditional filters and WHERE clauses.

**Most Projected Columns**
:   Specific columns frequently scanned or retrieved.

**Most Predicated Columns**
:   Specific columns frequently used in query predicates.
