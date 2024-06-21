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

## 11.2.3.0 - IF1 - June 20, 2024
{: #june2024}

### Components
{: #compsjune2024}

- {{site.data.keyword.netezza_short}} 11.2.3.0-IF1
- Web console 4.0.3.2

### Fixes
{: #fjun2024}

- Fixed the incorrect result issue with restrictions on `CHAR`/`VARCHAR`/`NCHAR`/`NVARCHAR` columns when a clustered table has an organizing column of one of these types.

- Fixed the incorrect results issue with restrictions on `CHAR`/`VARCHAR`/`NCHAR`/`NVARCHAR` columns in the following two cases:

    - when a clustered table has an organizing column of one of these types.
    - when a materialized view uses a column of one of these types in its `order by` clause.

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
