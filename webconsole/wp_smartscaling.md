---

copyright:
  years: 2021
lastupdated: "2023-02-27"

keywords: smart scaling, scaling, Netezza Performance Server smart scaling, seed models, confidence score
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

Smart scaling uses machine learning to provide predictions based on historical workload patterns. By analyzing the data on the **Administering > Workload patterns** page, you can learn how to optimize the usage of your system resources.
{: shortdesc}

You can obtain more information about the following system resources:

- Historical and Predicted NZP (Netezza Performance Metric)
- Historical or Suggested Contour Profile
- Confidence score

## Seed models
{: #seed-models}

Seed models are pretrained models that are uploaded on your temporary workspace. A prediction API uses these models for the duration of a training grace period (7 days or more), after the system is deployed, starting from after day 1. At this stage, the confidence score is very low because the models do not reflect your workloads yet.  

After the training grace period is over, the model is retrained with the dataset that was generated from the collected workload data. The prediction API runs inference based on the pretrained models. Then, the confidence score is updated based on the accuracy of the prediction, and system scheduler triggers the training model task daily for 2 weeks, and then on a weekly basis.

**DRAFT COMMENT:  
1. You say that the training grace period is 7+ days, what exactly is the number of days? Can you change on your own?
1. How exactly are the pretrained models uploaded on your temporary workspace?
1. Is my understanding of this correct? `First, the models gather data/work on the temporary workspace. (For how long are they on the temp workspace; until the system is deployed; is there a min required timeframe? If they don't gather data on the temp workspace, why are they uploaded to it to begin with?) Then, after the system is deployed, a prediction API uses these models for 7 or so days (training grace period) to generate accurate data - confidence score. You are ok to use the confidence score after this period.`

## Graph elements
{: #smartscaling_graph}

### Performance property
{: #performance-property}

You can use the **Performance property** dropdown to navigate between different charts. The default **Workload Utilization** graph visualizes multiple data points that are related to your system resources.  

When you are looking at the graph overall, use the legend to identify the contour profile.
{: tip}

### Time interval
{: #smartscaling_timeinterval}

You can use the **Time interval** dropdown to select different time intervals.

By default, the current date stays the same. When you select between the daily, weekly, or monthly view, the date is aggregated over time accordingly.  

A line in the middle of the graph shows the cut off between historical and predicted or suggested data.

Predicted data is only displayed when the system has been collecting historical data for at least 7 days. Until then, the graph displays a data point for each day. After 7 days, a prediction for an extra two weeks' worth of information appears.

### Historical and Predicted NZP
{: #smartscaling_nzp}

The purple and pink lines represent **Historical NZP** and **Predicted NZP**.

NZP (Netezza Performance Metric) is a measure of system utilization.  
High level NZP indicates elevated levels of utilization. Low NZP indicates decreased resource usage.  
The historical and predicted NZP lines are measured on the scale to the left of the chart between 0% and 100%.

### Historical and Suggested contour profile
{: #smartscaling_contourprofile}

**Historical Contour Profile** and **Suggested Contour Profile** are visualized by the blue bars.

The contours that are displayed to the left of the current date line are historical contours. They represent the profiles that are used on each time interval.  
The bars that are displayed on the right side of the current date line are suggested contours for each time interval.

Contour profiles are suggested based on the predicted NZP during that time interval. If NZP exceeds 80%, it is suggested that contour profile is scaled up the next closest contour to increase compute and improve performance for heavy workload periods. When the algorithm predicts NZP at or below 20% for a time interval, the graph suggests to scale down to a lower profile.
{: tip}

### Confidence score
{: #confidence_score}

Confidence score reflects the accuracy of the predictions that are provided based on your system historical workload patterns. By analyzing the confidence score, you can choose how to use your system resources.
