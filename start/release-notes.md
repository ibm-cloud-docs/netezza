---

copyright:
  years: 2024
lastupdated: "2024-09-23"

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

## 18 November 2024 - 11.2.3.3
{: #nov2024}
{: release-note}

Query cancellation
:   This release introduces feature to cancel long running queries executed from the query editor. For more information, see [Query cancellation](/docs/netezza?topic=netezza-queries#query-cancellation).

Database assistant
:   This release starts a public tech preview of Netezza Database Assistant chatbot which is backed by IBM watsonx, a new AI-powered, cutting-edge assistant built on IBM’s decades of expertise managing the world’s most mission-critical data workloads. Fore more information, see [Database assistant](/docs/netezza?topic=netezza-netezza-db-assistant).

IdP configuration
:   This page is now part of **Settings** page. For details, see [Setting SAML authentication with the Netezza UI](/docs/netezza?topic=netezza-samliamauth#setting_saml_wc) and [etting Azure OIDC authentication with the Netezza UI](/docs/netezza?topic=netezza-enable_oidciamauth#setting_oidc_wc).

Fixes
:   Resolved issues related to time zone handling, ensuring consistent and accurate time display across the platform.


## September 23 2024 - 11.2.3.2
{: #sep2024}


### New features and enhancements
{: #nfsep2024}

- **Updated recent queries page:** Gain clearer insights into your queries with the addition of error type visibility for query failures.

    The `Recent Queries` page now shows queries submitted within the last 15 minutes by default. Queries remain visible for up to 24 hours, with a limit of 2,000 queries.
    {: note}

- **Enhanced IdP configuration options:** Enhanced the `IdP configuration` page with dedicated tiles for streamlined management of `SAML` and `OIDC` configurations.
    - Now, easily download certificates for signed authentication validation in `SAML` to simplify your setup and enhance security. For more details, see [Configuring Signed Authentication on IdP](/docs/netezza?topic=netezza-saml-docs#config_saoi).
    - Support for signed authentication has been introduced for `SAML` in {{site.data.keyword.netezza_short}}, providing robust security for your configurations. For more details, see [SAML](/docs/netezza?topic=netezza-samloverview).
- Introduced the new `nzprogress` command, allowing you to effortlessly view and track all ongoing plans in progress. See [Commands supported by the nz tool](/docs/netezza?topic=netezza-nztool#supported-cmds).

### Fixes
{: #fixessep2024}

- **Time zone handling:** Resolved issues related to time zone handling, ensuring consistent and accurate time display across the platform.
- **History page fixes:** Addressed the problem where auto pause and resume actions for recent entries were not showing on the **History** page of the web console, enhancing visibility and tracking.
- **Scheduled backups update:** Fixed the issue preventing the start date and time of scheduled backups from being edited, giving you full control over your backup schedules.

<!-- ### Components
{: #compssep2024}

- {{site.data.keyword.netezza_short}} 11.2.3.2
- Web console 4.1.1.0 -->


## 11.2.3.1 - August 02, 2024
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
- Introduced support for partial certificate chain verification in SSL. For more information, see [The nzsql command](https://www.ibm.com/docs/en/netezza?topic=commands-nzsql-command).
- Improved transaction rollback performance by optimizing the handling of large tdj files.
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

## 11.2.3.0 - IF1 - June 20, 2024
{: #june2024}

### Components
{: #compsjune2024}

- {{site.data.keyword.netezza_short}} 11.2.3.0-IF1
- Web console 4.0.3.2

### Fixes
{: #fjun2024}

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
