---

copyright:
  years: 2024
lastupdated: "2024-07-17"

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

## 11.2.3.1 - July 15, 2024
{: #jul2024}

### New features and enhancements
{: #nfjul2024}

- Introduced new feature in `AWS` network policies for Ingress connections. You can now control which IP addresses are allowed to connect to the {{site.data.keyword.netezza_short}} database, similar to Azure network policies. For details, see [Network policies](/docs/netezza?topic=netezza-network-policies#aws_nw_policy).
- Introduced JWT token in the **Administration -> tools** tab, allowing [`SAML`](/docs/netezza?topic=netezza-samloverview) and [`OIDC`](/docs/netezza?topic=netezza-oidcoverview) users to copy the JWT token from the console after logging in.
- Enhanced platform `AWS` Administration functionality to include support for lakehouse connections, databases, and schemas on the console.
    - Introduced a new **Lakehouse Connections** tab in **Administration** specifically for creating lakehouse connections, databases, and tables.
- Added `CRUD` operations to the **Query Editor** for lakehouse tables.
- Enabled `SAML` and `OIDC` for `AWS` and `Azure` platforms.
- Introduced the `Destinations` tab in **Administration**. You can now create buckets concurrently for `BNR` and `Lakehouse datasource`.
- Introduced a new postgres flag `sslCertValidation` which enables forced SSL certificate validation, including certificate expiry checks, for every session.

    Contact IBM support to enable this option.
    {: note}

### Components
{: #compsjul2024}

- {{site.data.keyword.netezza_short}} 11.2.3.1
- Web console 4.1.0.0

### Known issues
{: #knownjul2024}

- **Date Picker Issue in Chromium-Based Browsers**: You might experience an issue with the date picker in the console when using the latest versions of Chrome and Edge on Windows 11. When a date is selected and the focus is shifted to another input field, the date reverts to its default value.

Affected Platforms: Windows 11 (Chrome version 127.0.4xxx.xx and Edge version 127.0.2651.74).

**Workaround**
Use Firefox or older versions of Chrome or Edge.

The behavior might vary on different operating systems and browser versions.
{: note}



## 11.2.3.0 - May 29, 2024
{: #may2024}

### New features and enhancements
{: #nfmay2024}

- NPS 11.2.3.0 supports SSO (Single sign-on) with multi-factor authentication:
    - [SAML](/docs/netezza?topic=netezza-samloverview)
    - [OIDC (Azure)](/docs/netezza?topic=netezza-oidcoverview)
- Introduced `nc-start` configuration on Azure which provides entry-level configuration for BI and UAT workloads.
- A new checkbox option has been added to the console for deleting backups. When selected this option will also remove the backup from the underlying cloud object store (S3/Azure blob).
- Introduced capability for performing time travel in Iceberg table. For details, see [Time travel for Iceberg table](/docs/netezza?topic=netezza-timetravel_watsonxdata).

### Components
{: #compsmay2024}

- {{site.data.keyword.netezza_short}} 11.2.3
- Web console 4.0.3.2
