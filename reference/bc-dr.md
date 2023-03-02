---

copyright:
  years: 2023
lastupdated: "2023-03-02"

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

# Understanding business continuity and disaster recovery for {{site.data.keyword.netezza_short}}
{: #understanding-bc-dr}

{{site.data.keyword.netezza_full}} service gets deployed in a single zone. When a zone goes down, {{site.data.keyword.netezza_short}} service is brought online into another zone by a recovery strategy.
{: shortdesc}

## Disaster recovery strategy
{: #bc-dr-strategy}

{{site.data.keyword.netezza_short}} uses the cloud storage snapshot technology to provide support for business continuity and disaster recovery. A snapshot is taken every day at 2 AM. Snapshots are available across three cloud zones within the same geographical region to ensure availability if a single zone fails.

If a zone failure occurs, the disaster recovery process is automatically triggered to quickly start the service in one of the remaining zones with the latest snapshot available.
