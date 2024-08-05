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
- Enabled [`SAML`](/docs/netezza?topic=netezza-samloverview) and [`OIDC`](/docs/netezza?topic=netezza-oidcoverview) for `AWS` and `Azure` platforms.
- Introduced the `Destinations` tab in **Administration**. You can now create buckets concurrently for `database backups` and `Lakehouse datasource`.

### Fixes
{: #fixesjul2024}

- Only administrators can enable and disable the auto-pause/resume feature. See [Auto-pausing and auto-resuming](/docs/netezza?topic=netezza-autopnr-console).
- Fixed an issue where differential backup from the Mako system is failing on the Netezza Performance Server while performing a restore.

<!-- - Introduced support for partial certificate chain verification in SSL.
- Improved transaction rollback performance by optimizing the handling of large tdj files. -->

- Improved signal handling for the DBOS process to avoid sessions getting hung in a disconnected state if a query with UDX was abnormally aborted.
- Prevented system restart due to crash when running stored procedures with execute immediate clause.
- Fixed an issue where some views couldn't access the toast data correctly after an OID reset.
- Fixed incorrect query results on tables distributed by char type columns with restrictions.

### Components
{: #compsjul2024}

- {{site.data.keyword.netezza_short}} 11.2.3.1
- Web console 4.1.0.0

### Known issues
{: #knownjul2024}

- **Issue with date picker in Chromium-Based Browsers**: You might experience an issue with the date picker in the console when using the latest versions of Chrome and Edge browser. When a date is selected and the focus is shifted to another input field, the date reverts to its default value.

    Affected versions: Chrome version `127.0.xxxx.xx` and Edge version `127.0.xxxx.xx`.

    **Workaround**

    Use Firefox or Safari browser.

    The behavior might vary on different operating systems and browser versions.
    {: note}

- **IP address required for OIDC/SAML authentication in private instances**: To use OIDC/SAML authentication in a private instance, access the web console via the `IP address`, not the `hostname`. To get `IP address`, see [Configuring private endpoints](https://cloud.ibm.com/docs/netezza?topic=netezza-creating-private-endpoints).


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
