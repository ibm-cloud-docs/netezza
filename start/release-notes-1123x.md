---

copyright:
  years: 2024
lastupdated: "2024-06-12"

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

- Added JWT token on the **Administration -> tools** tab and provision to copy/download JWT token after login to console for `SAML` and `OIDC` user.
- Added support for lakehouse connections, databases, and schemas on console for `AWS` platform.
- Introduced **Lakehouse connections** tab **Lakehouse connections** under **Administration** for creation of lakehouse connections, databases, and tables.
- Introduced `CRUD` operations in the **Query editor** for lakehouse tables.
- Introduced restore database functionality to backup and restore page.
- Enabled `SAML` and `OIDC` for `AWS` and `Azure` platforms.
- Moved bucket creation from **Backup and restore** page to **Administration**. Now you can create buckets parallelly for `BNR` and lakehouse datasource.

### Fixes
{: #julfixes2024}

- Resolved some of the blocker issues related to unification changes.
- Ops Commands are fixed.
- Ops Parameters are fixed.
- Error Handling with Adhoc Pause resume Job.
- Help Command of nzcli.
- nzcli binaries should create in release folder and not in base folder.
- Correction in all the error messages so that customer should be able to understand the error.

### Components
{: #compsjul2024}

- {{site.data.keyword.netezza_short}} 11.2.3.1
- Web console 4.1.0.0

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
