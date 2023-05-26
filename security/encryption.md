---

copyright:
  years: 2023
lastupdated: "2023-04-19"

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

- All the connections to the database server are TLS 1.2 connections.
- {{site.data.keyword.netezza_short}} supports the following suites of Cipher with 2048 bit RSA key size for TLS communication:

   -  `TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384`
   -  `TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384`
   -  `TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256`
   -  `TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256`
   -  `TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256`
   -  `TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256`

- User data is stored on secure reliable storage (as a service) from the cloud providers.  
  For Azure, Azure Premium disks.  
  For AWS, Amazon Elastic Block Store (EBS).  

- The data is encrypted at rest by using cloud provider key management service.
- Snapshots are stored on Cloud Object Storage (COS), which is replicated across AZs in the region in which it was created and are encrypted at rest and in transit.

## Data deletion
{: #data-delete}

When you delete an instance, all the data and snapshots associated with the instance are deleted immediately. 


