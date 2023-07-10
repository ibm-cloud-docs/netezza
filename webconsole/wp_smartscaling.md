---

copyright:
  years: 2021
lastupdated: "2023-06-01"

keywords: smart scaling, scaling, Netezza Performance Server smart scaling,
subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}
{:caption: .caption}

# Smart scaling
{: #smartscaling}

You can use this feature only if you are on {{site.data.keyword.netezza_short}} on AWS.
{: important}

On the _Workload patterns_ page, you learn how to optimize the usage of your system resources as smart scaling uses machine learning to provide predictions based on historical workload patterns.

By hovering over each data point, you reveal a tool tip with more information. Tool tips include Time interval, Historical and/or Predicted NZP, NZP description, Historical or Suggested Contour Profile.

When you are looking at the graph overall, use the legend to identify the contour profile.

## Graph elements
{: #smartscaling_graph}

The default *Workload Utilization* graph visualizes multiple data points that are related to your system resources.

- Historical NZP*

- Predicted NZP*

- Historical Contour Profile

- Suggested Contour Profile

- Time

### Time interval
{: #smartscaling_timeinterval}

You can select a time interval by using the drop down at the top of the graph.

By default, the current date stays the same. When you select between the daily, weekly, or monthly view, the date is aggregated over time accordingly.

A line in the middle of the graph shows the cut off between historical and predicted or suggested data.

Predicted data is only displayed when the system has been collecting historical data for at least 7 days. Until then, the graph displays a data point for each day. On the 7th day, a prediction for an extra two weeks' worth of information appears.

### Historical and Predicted NZP
{: #smartscaling_nzp}

The purple and pink lines represent Historical NZP and Predicted NZP.

NZP (Netezza Performance metric) is a measure of system utilization.

High level NZP indicates elevated levels of utilization. Low NZP indicates decreased resource usage.

The historical and predicted NZP lines are measured on the scale to the left of the chart between 0% and 100%.

### Historical and Suggested contour profile
{: #smartscaling_contourprofile}

Historical Contour Profile and Suggested Contour Profiles are visualized by the blue bars.

The contours that are displayed to the right of the current date line are historical contours. They represent the profiles that are used on each time interval.

The bars that are displayed on the right side of the current date line are suggested contours for each time interval.

Contour profiles are suggested based on the predicted NZP during that time interval. If NZP exceeds 80%, it is suggested that contour profile is scaled up the next closest contour to increase compute and improve performance for heavy workload periods. When the algorithm predicts NZP at or below 20% for a time interval, the graph suggests to scale down to a lower profile.
{: tip}

### Confidence score
{: #confidence_score}

Confidence score reflects the accuracy of the predictions that are provided based on your system historical workload patterns. By analyzing the confidence score, you can choose how to use your system resources.

## Smart scaling example
{: #smartscaling_example}

1. [Log in to the web console](/docs/netezza?topic=netezza-getstarted-console).
1. Go to **Administering > Workload patterns**.  
1. Review the smart scaling utilization graph.   
   In this example, as a database administrator, you want to to get a deeper understanding of your system utilization over time.
   
   In this scenario, it turns out that every Sunday, your system utilization drops below average as compared to other days of the week. Basing on this information, you can update your scaling schedule to match anticipated peaks and dips in workloads.

1. Configure the scheduler to scale down the instance for every Sunday as described in [Editing scheduled scaling](/docs/netezza?topic=netezza-scaling-console#scaling-console-editing).
1. Configure the scheduler to scale up back starting every Monday as described in [Editing scheduled scaling](/docs/netezza?topic=netezza-scaling-console#scaling-console-editing).

As a result, you will see performance improvement and reduction in resource waste and costs in the future.