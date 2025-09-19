---

copyright:
  years: 2025
lastupdated: "2025-09-19"

keywords: netezza cos

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:tip: .tip}
{:important: .important}
{:note: .note}
{:codeblock: .codeblock}
{:screen: .screen}
{:caption: .caption}

# Introduction to Object Storage
{: #netezzacosobjstrge}

Netezza Performance Server (NPS) 11.3.0.3 IF1 introduces native object storage support, offering scalability levels beyond traditional file or block-based storage. Object storage is a data storage technology that manages data as objects, providing practically unlimited and pain-free scalability, high uptimes, easier data sharing and movement, and lower storage costs.

## What is Hybrid Storage?
{: #hybri_strge}

In the hybrid storage model, each data slice features two distinct storage partitions:

**Block Storage Partition:** Traditional, high-performance storage for latency-sensitive workloads.

**Object Storage Partition:** Scalable storage for large datasets, bulk data ingestion, and infrequently accessed data.

### How it Works
{: #hybri_strge_works}

When creating a table, users can specify whether to use block or object storage. This choice determines which storage partition the table's data will reside in. Netezza overcomes object storage latency limitations through higher I/O parallelism and caching.
