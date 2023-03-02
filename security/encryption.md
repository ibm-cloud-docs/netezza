---

copyright:
  years: 2023
lastupdated: "2023-03-02"

keywords: data encryption in Netezza Performance Server, data storage for Netezza Performance Server, personal data in Netezza Performance Server, data deletion for Netezza Performance Server, data in Netezza Performance Server, data security in Netezza Performance Server

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

# Data security and encryption
{: #data-encryption}

{{site.data.keyword.netezza_full}} has security built into its architecture.
{: shortdesc}

The following methods are used to secure your connection and data:
- All the connections to the database server are TLS1.2 connections.
- {{site.data.keyword.netezza_short}} uses ECDHE-RSA-AES256-GCM-SHA384 Cipher with 2048 bit key size for TLS communication.
- User data are stored on secure reliable storage (as a service) from the cloud providers (IBM Cloud block storage or Azure Premium disks while using Azure).
- The data are encrypted at rest by the cloud provider itself.
- Backups are stored on Cloud Object Storage (COS) and are geo-replicated as well as encrypted by cloud provider at rest and in transit.

## Data deletion
{: #data-delete}

When you delete the instance, the service deletes the data associated with you instance including IBM managed backups associated with the service. You will never be able to restore it after that.
