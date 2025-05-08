---

copyright:
  years: 2025
lastupdated: "2025-05-16"

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

# Object I/O layer design and user guide
{: #objguide}

## Overview
{: #ovrvw}

This document describes the design and usage of the Object I/O layer for Netezza Performance Server (NPS). The Object I/O layer enables reading and writing of data objects stored in object storage, supporting all data types currently residing on block storage. This includes raw table data as well as metadata related to Netezza journaling (DPM).

The goal is to provide a stable, cost-effective, and feature-rich solution that integrates seamlessly with existing NPS functionality while introducing support for hybrid storage environments.


## Objectives
{: #objtve}

### Stability
{: #stblty}

- Deliver stability consistent with current NPS block storage performance.
- Ensure reliable operation under high concurrency and workload demands.

### Price-performance
{: #prc_pfmnce}

- Reduce storage costs by leveraging native object storage.
- Minimize access costs through persistent caching strategies.
- Optimize object sizes to reduce the number of accesses per terabyte.
- Target performance at approximately 80% or better compared to block storage.

### Features
{: #ftre}

- Maintain full compatibility with existing Netezza features.
- Support new capabilities such as hybrid data sources combining block and object storage within the same instance.
- Enable concurrent production workloads accessing both block and object-stored data across multiple user sessions.


## Functional specification
{: #func_spec}

The Object I/O layer provides:

1. **Flexible access**
   - Supports read/write operations on any bucket, any object size, at any key name.
   - Allows configurability to enable various features, behaviors, and performance optimizations.

2. **High concurrency & utilization**
   - Designed for rapid scaling up to maximum concurrency supported by platform resources.
   - Efficiently utilizes system resources while maintaining minimal latency.

3. **Event-driven model**
   - Operates using notifications: open stream/handle → initiate workload → wait for completion notification.

4. **Configurable parameters**
   - Read/write sizes determined by application needs per workload.
   - Object keys follow a prototype naming scheme; future updates will support production-ready schemes without redesigning the I/O layer.
   - Resource utilization constrained via configurable registry/platform settings ensuring adaptability within environment limits.

---

## Design specification
{: #design_spec}

### Architecture components
{: #arch_comp}

#### AWS SDK Integration
{: #awssdkint}

- Uses AWS SDK for C++ APIs to interact with S3-compatible object stores.

#### Caching layer
{: #cachinglayer}

- Supports local caching typically on NVMe SSDs or equivalent fast local media (detailed separately).

#### Data slice process model
{: #scheduling_subsystems}

- One long-lived process manages each "data slice" responsible for handling all associated I/O requests efficiently:

    - Minimizes latency,
    - Maximizes concurrency,
    - Optimizes throughput,
    - Conserves CPU/memory/network/storage resources wherever possible.

#### Scheduling subsystems
{: #scheduling_subsystems}

Each data slice includes two schedulers:
1. CBS Scheduler – manages readahead buffering and memory backpressure.
2. DSI Scheduler – handles short-query bias prioritization, workload management (WLM), ordering constraints among requests.

Once scheduled, requests are forwarded promptly to the I/O manager process which issues them immediately and notifies completion early.

### Resource management strategies
{: #resrce_strgies}

| Resource | Strategy |
| -------- | -------- |
| Memory | Preallocated based on max expected concurrency; tunable via platform settings; applies graceful backpressure when demand exceeds capacity |
| CPU    | Efficient use via asynchronous APIs; uses Linux AIO when caching enabled; potential future io_uring support planned |
| Network | Bandwidth optimized through persistent caching minimizing repeated reads from remote stores |
| Storage Capacity | All pages compressed before persistence outside this layer |


### Cache I/O behavior
{: #cacheiobeh}

Caching employs asynchronous batched I/O designed to maximize continuous throughput while minimizing CPU overhead — avoiding bursty traffic patterns ensures smooth bandwidth utilization between cache layers and backend stores.

Cache persists across restarts (`nzstop/nzstart`) or pause/resume cycles allowing effective reuse unless cache size is insufficient relative to dataset footprint.


## Hybrid storage considerations
{: #hybrd_strg}

NPS nodes running in AWS EC2 environments have dedicated network paths:

1. To EBS Block Storage volumes,
2. To S3 Object Storage buckets,
3. Locally-attached ephemeral SSD volumes bypassing network bottlenecks entirely,

The design dedicates separate resource pools per storage type but coordinates asynchronously across these pools enabling simultaneous servicing of mixed workloads without blocking one another — maximizing aggregate throughput beyond what either could achieve alone.


## Future enhancements & notes
{: #fut_enh}

### Dynamic bucket allocation
{: #dynamcbktallocation}

Support for adding new buckets dynamically during runtime remains undefined—implementation may require service pauses or restarts depending on chosen approach.


### Azure cloud support
{: #azurecldconnect}

Planned integration using Azure SDK for C++ wrapping Azure Blob Storage APIs is anticipated but not yet implemented.


## Summary: How to use the object I/O layer effectively
{: #summry}

1. Configure your application’s read/write parameters including preferred object sizes aligned with your workload profile.
2. Utilize provided registry/platform tuning knobs to balance resource allocation against expected concurrency levels ensuring optimal performance without overcommitment.
3. Leverage persistent local caches where possible—this reduces cloud access costs significantly while improving response times.
4. For hybrid deployments mixing block/object storages:
    * Understand underlying node hardware capabilities regarding network bandwidth allocations,
    * Monitor scheduler behavior if needed adjusting WLM priorities or query biases accordingly,
    * Plan capacity so that caches can hold working sets effectively preventing excessive remote fetches.


By following these guidelines you can maximize stability, control costs effectively, maintain strong feature parity with traditional block-based systems—all while benefiting from modern scalable cloud-native architectures built into Netezza Performance Server’s next-generation design.
