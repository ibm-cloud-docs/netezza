---

copyright:
  years: 2024
lastupdated: "2024-05-14"

keywords: Netezza Performance Server release notes, what's new, AWS, Netezza on AWS

subcollection: netezza

---

{:shortdesc: .shortdesc}
{:screen: .screen}
{:codeblock: .codeblock}
{:pre: .pre}
{:tip: .tip}
{:note: .note}
{:external: target="_blank" .external}
{:step: data-tutorial-type='step'}

# 11.2.3.x
{: #my-service-relnotes1123x}

## 11.2.3.0 - May 29, 2024
{: #may2024}

### New features and enhancements
{: #nfmay2024}

- NPS 11.2.3.0 supports SSO (Single sign-on) with multi-factor authentication:
    - [SAML](/docs/netezza?topic=netezza-samliamauth)
    - [OIDC (Azure)](/docs/netezza?topic=netezza-oidciamauth)
- Added nzstart support On Azure UI.
- Improved UX for login. *Details to be added*

#### Connectivity improvements
{: #cimay2024}

*No inputs.*

### Fixes
{: #fmay2024}

- Removed schema level backup from console UI (backup and restore tab).
- Resolved the issue of backup objects getting deleted from cloud (S3/AZ) when **Delete object from Cloud** checkbox is checked on console when deleting backups.

### Components
{: #compsmay2024}

- {{site.data.keyword.netezza_short}} 11.2.3
- Web console 4.0.3.2
