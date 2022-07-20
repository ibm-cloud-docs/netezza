---

copyright:
  years:  2022
lastupdated: "2022-07-07"

keywords: netezza and kafka, integrating kafka with netezza, kafka, netezza as a data sink, netezza as a data source,

subcollection: netezza

---

{:new_window: target="_blank"}
{:shortdesc: .shortdesc}
{:screen: .screen}
{:pre: .pre}
{:table: .aria-labeledby="caption"}
{:codeblock: .codeblock}
{:tip: .tip}
{:download: .download}
{:important: .important}
{:caption: .caption}

# {{site.data.keyword.netezza_short}} and Kafka
{: #netezzakafka}

## Overview
{: #overviewkafka}

[Apache Kafka](https://kafka.apache.org/documentation/) is a publish-subscribe messaging system, which you can use to move data between popular applications.

After you integrate your {{site.data.keyword.netezza_full}} instance with Kafka through the Kafka JDBC connector, you can use {{site.data.keyword.netezza_short}} as one of the following:

- A data source, which brings data to Kafka.
- A data sink, which reads data from Kafka.

## Using {{site.data.keyword.netezza_short}} as a data source
{: #datasourcekafka}

An e-commerce company stores its product listings in a {{site.data.keyword.netezza_short}} database. To streamline the in-app search experience and to access real time analytics, consumer apps (for example, Elasticsearch and Apache Flink) have access to the listings.

In this case, data is read from {{site.data.keyword.netezza_short}} through the Kafka JDBC source connector and Kafka streams the data. The consumer apps read from the stream and further process the data.

The following image illustrates the data flow {{site.data.keyword.netezza_short}} as a data source.

![{{site.data.keyword.netezza_short}} as a data source](images/nzdatasource.png){: caption="Image 1. The diagram depicts how Kafka reads data from Netezza through the JDBC source connector and enables consumer apps to access it." caption-side="bottom"}


## Using {{site.data.keyword.netezza_short}} as a data sink
{: #datasinkkafka}

To improve patient outcomes, efficiently identify risk factors, and provide quicker intervention times, a hospital extracts meaningful insights from physiological data. Different data sets from various channels are analyzed as they arrive.

In this case, the incoming data is streamed through Kafka and then computed. The producers are the sources of physiological data that come from different channels.

After the data is processed, it is stored on {{site.data.keyword.netezza_short}} for patient history record purposes through the Kafka JDBC sink connector.

The following image illustrates the data flow for {{site.data.keyword.netezza_short}} as a data sink.


![{{site.data.keyword.netezza_short}} as a data sink](images/nzsink.png){: caption="Image 2. The diagram depicts how incoming data from various producers is streamed and computed by Kafka through the JDBC driver and stored on Netezza." caption-side="bottom"}


## Integrating {{site.data.keyword.netezza_short}} and Kafka
{: #connectingkafka}

If you want to integrate your {{site.data.keyword.netezza_short}} instance with Kafka, you must use the Kafka JDBC connector.

The Kafka JDBC connector has support for source and sink JDBC connectors. With the source connector, you can transfer data from {{site.data.keyword.netezza_short}} into Kafka topics. With the sink connector, you can transfer data from Kafka topics into {{site.data.keyword.netezza_short}}by using the Kafka JDBC connector.


### Setting up the JDBC Kafka connector
{:# connectorkafka}

You must install the driver in Kafka's library by editing *plugin.path*. For more information, see


1. Set up Java.
1. Copy JDBC to Kafka.
1. Set up your connector.
1. Edit plugin.path.
1. Edit the sink and source properties.
