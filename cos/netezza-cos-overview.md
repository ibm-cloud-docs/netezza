---

copyright:
  years: 2025
lastupdated: "2025-05-8"

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

# Overview
{: #netezzacosoverview}

With the introduction of Cloud Object Storage (COS) support, Netezza now offers a hybrid storage model, enabling customers to use both block storage and object storage for their workloads. This provides a cost-effective solution for managing cold and hot data, with table-level and database-level control over storage preferences.

## Key benefits
{: #cos_key_benefits}

Migrating to COS offers several advantages that enhance cost-efficiency, scalability, and system flexibility:

### 1. Lower Storage Costs

- COS is significantly more cost-effective than block storage for storing large volumes of cold or infrequently accessed data.
- Ideal for archival or historical data that doesn’t require high-performance access.

### 2. Scalability

- COS provides virtually unlimited storage capacity without the need for complex provisioning.
- Automatically scales with your data, removing storage limits that may exist with block devices.

### 3. Hybrid Storage

- Can configure databases or tables to use COS or block storage depending on performance or cost needs. This allows you to specify where your hot data and cold data will be stored.
