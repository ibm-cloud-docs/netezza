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

# Netezza architecture supporting Cloud Object Storage
{: #netezzacosobjstrge_arch}

The Netezza architecture consists of three distinct storage layers:

**Block storage:** Each SPU is attached to block storage, ensuring continuity and compatibility with existing database structures.

**Object storage:** Each SPU is attached to object storage, allowing tables to be stored optionally on object storage.

**Local SSD caching:** Both block and object storage leverage local SSD caching to provide a similar experience.
