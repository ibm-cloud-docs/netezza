---

copyright:
  years:  2022
lastupdated: "2022-06-20"

keywords:

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
{: #nz-kafka}

**COMMENT**
1. What systems, applications, etc. would be using this? Do we have any examples of usage?
1. Do we want to elaborate more on the structure of the messages/topics, or do we assume that the customer would know it already?

Apache Kafka is a publish-subscribe messaging system. With Kafka, you can exchange data between processes, applications, and servers in distributed systems.

The sender (producers) can send and write messages to Kafka. In turn, the recipients (consumers) can read from its published stream. 

**COMMENT** This is unclear What stream? Kafka's?

The messages are grouped into topics. The sender writes messages to specific topics and the consumer receives the messages.

Messages from a specific topic are sent to the recipients who listen to that topic.

**COMMET** Is "listen" the correct word? Is there an option to listen to a topic or is it call "subscribe", "follow", etc.?

## Kafka connect and connectors
{: #kafkacc}

## Installing Kafka
{: #installingkafka}

## Starting Kafka
{: #startingkafka}
