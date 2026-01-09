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

Netezza now supports a hybrid storage architecture, enabling users to choose between block storage and object storage at the time of table creation. This enhancement provides flexibility in managing data based on performance and cost considerations. Object storage is a data storage technology that manages data as objects, providing practically unlimited and pain-free scalability, high uptimes, easier data sharing and movement, and lower storage costs.
Currently, native object storage is supported only on AWS public cloud in Bring Your Own Cloud (BYOC) and SaaS deployments, with planned support for additional platforms in the future.

## Hybrid storage architecture
{: #hybri_strge}

In the hybrid storage model, each data slice features two distinct storage partitions:

**Block Storage Partition:** Designed for traditional, high-performance storage needs, block storage is ideal for latency-sensitive workloads. Each SPU (Storage Processing Unit) is attached to block storage, ensuring seamless continuity and compatibility with existing database structures.

**Object Storage Partition:** Optimized for scalability, object storage supports large datasets, bulk data ingestion, and infrequently accessed data. Each SPU is also attached to object storage, enabling tables to be optionally stored on object storage for flexible data management.

Both block and object storage leverage local SSD caching to provide a similar experience.

When creating a table, users can specify whether to use block or object storage. This choice determines which storage partition the table's data will reside in. Netezza overcomes object storage latency limitations through higher I/O parallelism and caching.
