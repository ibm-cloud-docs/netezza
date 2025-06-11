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

# Compatibility and upgrade considerations
{: #netezzacompatibility}

The Object Storage (COS) feature is designed to minimize upgrade and downgrade impacts by allowing existing systems to support object storage without disruption. Customers can add COS bucket configurations seamlessly when upgrading to a version that supports this feature. However, once object storage is in use, downgrading to versions lacking COS support will be disabled to prevent incompatibility issues.

Future enhancements to DPM metadata and object naming conventions may require changes to upgrade and downgrade processes.
{: note}
