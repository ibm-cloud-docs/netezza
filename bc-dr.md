---

copyright:
  years: 2021
lastupdated: "2021-11-15"

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

{{site.data.keyword.netezza_short}} leverages backup and restore functionalities to provide support for business continuity and disaster recovery. A full backup of the database is taken once a week. This backup is followed by a differential backup every day for disaster recovery. This DR backup is encrypted and stored in Cloud Object Storage (COS). COS replicates each DR backup across multiple cloud regions to ensure availability if a single zone fails. DR backups of the last 2 weeks are retained by default. The insurance backup is taken every day at 2 AM.

{{site.data.keyword.netezza_short}} uses the cloud storage snapshot technology to provide support for business continuity and disaster recovery. A snapshot is taken every day at 2 AM. Snapshots are available across three cloud zones within the same geographical region to ensure availability if a single zone fails.

If a zone failure occurs, the disaster recovery process is automatically triggered to quickly start the service in one of the remaining zones with the latest snapshot available.
