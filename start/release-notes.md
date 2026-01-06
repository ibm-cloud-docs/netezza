---

copyright:
  years: 2025
lastupdated: "2025-12-23"

keywords: Netezza Performance Server release notes, what's new, AWS, Netezza on AWS

subcollection: netezza

---

{:shortdesc: .shortdesc}
{:screen: .screen}
{:codeblock: .codeblock}
{:pre: .pre}
{:tip: .tip}
{:note: .note}
{:caption: .caption}
{:table: .aria-labeledby="caption"}
{:external: target="_blank" .external}
{:step: data-tutorial-type='step'}

# Release note for NPSaaS
{: #my-service-relnotes1123x}

## 22 December 2025 - 11.3.0.5-IF1
{: #dec2025}
{: release-note}

### New features and enhancements
{: #nfdec2025}

Server certificate validation for SSL/TLS authentication for OLEDB driver

:   `Skip CA Certificate Verification` setting is introduced with a default value of `true`. To modify this default and enforce server certificate SSL validation, you can either uncheck the `Skip CA Certification Verification` option or set the environment variable `NZ_SKIP_CERT_VERIFICATION` to `false`.
When the `Skip CA Certificate Verification` parameter is set to `false` in either the console or through the environment variable `NZ_SKIP_CERT_VERIFICATION`, the value `false` takes precedence over all other configurations.
Additionally, introduced environment variables `NZ_SKIP_CERT_VERIFICATION` and `NZ_CA_CERT_FILE`. For more details, refer to [Configuring OLE DB](https://www.ibm.com/docs/en/netezza?topic=icodp-configuring-ole-db-1).

Accurate client IP logging for AWS private instances

:   Improved client IP reporting for AWS private instances. Starting with version 11.3.0.5, `pg.log` and `histdb` now display the actual client machine IP used to connect to the database instead of the load balancer IP.

Download certificates

:   You can now download certificates required to connect to the Netezza Performance Server directly from the console. Under the **Profile** icon, you will find the option to download. This certificate can be used while connecting to Netezza Performance Server using `nzsql` and the ODBC driver if you are using `skipCertVerification=false`.

Azure COS support

: This release introduces native support for Azure Blob Storage, enabling users to create tables in Netezza format directly on object storage systems. This enhancement provides greater scalability, flexibility, and cost-efficiency compared to traditional file or block-based storage architectures. For more information, see [Setting up a cloud object storage bucket](/docs/netezza?topic=netezza-cloudobjectstorage).

Default limit in fetching history records

:   On opening Connection History and Query History pages, by default we now fetch 2000 records from the last 15 minutes interval. Earlier, the default limit was much larger and led to longer load times on the first fetch. You can subsequently adjust the parameters to get the desired set of records. For more information, see [Query history](/docs/netezza?topic=netezza-history#query_history).

IAM Access on AWS bucket for COS

:   You can now configure your AWS S3 bucket for object storage using cross-tenant IAM access configuration. With this approach, you no longer need to provide keys for accessing the bucket. For more information, see [Setting up a cloud object storage bucket](/docs/netezza?topic=netezza-cloudobjectstorage).

Enhanced display of upcoming backups during daylight saving changes

:  Improved handling and display of upcoming backup times on the dashboard when daylight saving changes are in effect, ensuring accurate and consistent scheduling information.

Inbuilt DBA-IA Chatbot

:  The DBA chatbot is now integrated into your console for a more seamless experience. It is now conveniently located next to the **Profile** icon at the top of the window.

### Components
{: #compdec2025}

- `nzcli` version: 11.3.0.5-IF1

## 11 November 2025 - 11.3.0.4
{: #nov2025}
{: release-note}

### New features and enhancements
{: #nfnov2025}

Predefined alert rules support in webconsole

:   The predefined rules eliminate the need for manual configuration, making the process significantly faster and more efficient.

Server certificate validation for SSL/TLS authentication

:   Starting with version 11.3.0.4, the `skipCertVerification` parameter defaults to true for nzsql, ODBC, and JDBC drivers. To enforce mandatory server certificate SSL validation, set `skipCertVerification` to false. For more information, see [Configuring the DSN and driver options with ODBC Driver Setup](https://www.ibm.com/docs/en/netezza?topic=codsd-configuring-dsn-driver-options-odbc-driver-setup-3), [Data source configuration file](https://www.ibm.com/docs/en/netezza?topic=cods-data-source-configuration-file-3), [JDBC connection strings](https://www.ibm.com/docs/en/netezza?topic=icj-jdbc-connection-strings-3), [The nzsql command](https://www.ibm.com/docs/en/netezza?topic=sc-nzsql-command-1), [Configuring the JDBC data source by using an nzjdbc.ini file (Windows)](https://www.ibm.com/docs/en/netezza?topic=icj-configuring-jdbc-data-source-by-using-nzjdbcini-file-windows-4).

INZA 11.3.3 support

:   INZA 11.3.3 is supported. For more information, see [Netezza Performance Server Analytics 11.3.3 release notes](https://www.ibm.com/docs/en/netezza?topic=compatibility-netezza-performance-server-analytics-1133-release-notes).

### Components
{: #compnov2025}

- `nzcli` version: 11.3.0.4

## 29 September 2025 - 11.3.0.3-IF1
{: #sep2025}
{: release-note}

### New features and enhancements
{: #nfsep2025}

Netezza Cloud Object Storage (COS)

:   Netezza Performance Server (NPS) 11.3.0.3 IF1 introduces native support for S3-compatible object storage such as AWS S3, enabling users to create tables in Netezza format directly on object storage systems. This enhancement delivers a new level of scalability, flexibility, and cost-efficiency, surpassing the limitations of traditional file or block-based storage architectures. It is now available in public preview for Netezza as a service on AWS. For more information, see [Netezza Cloud Object Storage](/docs/netezza?topic=netezza-netezzacosobjstrge).

Netezza Bring Your Own Cloud on Azure

:   Announcing the general availability of Netezza BYOC on Azure. IBM Netezza as a Service Bring Your Own Cloud (BYOC) represents a transformative leap in cloud data and analytics solutions. This innovative offering is generally available and empowers businesses to deploy Netezza directly within their own Virtual Private Cloud (VPC), thereby enhancing data security and providing greater flexibility in managing their infrastructure. For more information, see [Netezza Performance Server for BYOC](https://www.ibm.com/docs/en/netezza?topic=netezza-performance-server-byoc).

IBM Netezza Software

:   This form factor provides a comprehensive, software-only deployment of Netezza for data and AI workloads, designed to run on client-provided containerized platforms such as Red Hat OpenShift. It is engineered for high performance and ease of deployment, integrating database, storage, server, and analytics capabilities into a single, standards-based solution. For more information, see [Netezza Performance Server - Software](https://www.ibm.com/docs/en/netezza?topic=netezza-performance-server-software).

Server Certificate Validation for SSL/TLS Authentication

:   To enhance security, server certificate validation is now required for all SSL/TLS connections using ODBC, JDBC, and nzsql. Users must specify the CA certificate path using the `caCertFile` parameter, similar to how the securityLevel parameter is used. For more information, see [Steps to acquire SSL certificates for netezza](/docs/netezza?topic=netezza-step_acq_sslcert).

### Components
{: #compsep2025}

- `nzcli` version: 11.3.0.3-IF1

## 08 Aug 2025 - 11.3.0.2
{: #aug2025}
{: release-note}

### New features and enhancements
{: #nfaug2025}

Notification setup for NPSaaS users

:   NPSaaS introduces notifications for critical service-related events, empowering users to monitor and respond to system changes effectively. For more information, see [Monitoring and alerts](/docs/netezza?topic=netezza-nzalert_overview).

REST catalog support for iceberg table management

:   IBM Netezza supports a built-in REST catalog for managing Iceberg tables, eliminating the need for external catalogs like AWS Glue. This feature allows users to configure their own object storage (AWS S3 or IBM COS) and create Lakehouse databases directly from the Netezza web console. For more information, see [Managing iceberg tables with IBM Netezza REST catalog](/docs/netezza?topic=netezza-netezza_manage_iceberg).

Enhancement in Azure connector support

:   The Azure connector has been enhanced to support General Purpose v2 storage accounts with the Standard performance tier. This enhancement enables users to perform backup and restore operations using Gen2 storage accounts, expanding compatibility and flexibility for Azure-based storage solutions.

Customer managed keys for Netezza BYOC on AWS

:   Gain enhanced control over your data security by managing your own encryption keys. This feature allows you to use customer-managed keys to encrypt data disks, ensuring greater protection and compliance.

AWS Marketplace integration

:   Netezza Bring Your Own Cloud (BYOC) is now available as an offering on the AWS Marketplace. This integration simplifies deployment and enables seamless access through your existing AWS account. For more information, see [IBM Netezza as a Service Bring Your Own Cloud](https://aws.amazon.com/marketplace/pp/prodview-qyfbcav4cr772?sr=0-1&ref_=beagle&applicationId=AWSMPContessa).

Support for encrypted S3 Buckets in Netezza backup and restore

:   Netezza backup and restore operations now support Amazon S3 buckets encrypted with AWS KMS keys. This enhancement enables secure data storage and retrieval using AWS-managed encryption. To configure your S3 bucket with an AWS KMS key, see [Configuring your bucket to use an S3 Bucket Key with SSE-KMS for new objects](https://docs.aws.amazon.com/AmazonS3/latest/userguide/configuring-bucket-key.html).

The bucket user needs to have access to AWS KMS key.
{: note}


### Components
{: #compaug2025}

- `nzcli` version: 11.3.0.2

## 02 July 2025 - 11.3.0.1
{: #jul2025}
{: release-note}

### New features and enhancements
{: #nfjul2025}

Netezza Iceberg Enhancements

:   11.3.0.1 introduces the following enhancements

- **CTAS support**: Create Iceberg tables using `CREATE TABLE AS SELECT` from Netezza or Iceberg tables.
- **Type promotion**: Unsupported types in Netezza are automatically promoted when creating Iceberg tables.
- **Cascade Drop**: Dropping schemas with Iceberg tables supports the `CASCADE` option.
- **Truncate support**: Use `TRUNCATE TABLE` to remove all data from Iceberg tables (data remains in snapshots).
- **Delete support**: Delete rows from Iceberg tables using `DELETE` queries.
- **Update support**: Update rows in Iceberg tables using `UPDATE` queries.
- **Table properties**: Netezza supports key Iceberg table properties for controlling read/write behavior.
- **Show properties**: Use `SHOW TBLPROPERTIES` to view non-default table settings.

For more information, see [Supported SQL commands](/docs/netezza?topic=netezza-sqlcommands_watsonx.data).

OIDC authentication in the Netezza ODBC driver

:   Added support for OIDC based authentication in the Netezza ODBC driver. For more information, see [Usage of ODBC driver with OIDC authentication](/docs/netezza?topic=netezza-usage-odbc-oidc).

Enhanced Database Assistant with new analytical skills

:   New skills are added to support user activity insights, data slice usage analysis, and permission visibility. For more information, see [Using the Netezza database assistant](/docs/netezza?topic=netezza-database-assistant#assistant-skills).

### Components
{: #compjul2025}

- `nzcli` version: 11.3.0.1

## 29 May 2025 - 11.2.3.6
{: #may2025}
{: release-note}

### New features and enhancements
{: #nfmayb2025}

Database Assistant for Azure and AWS

:   Announcing the general availability of the Netezza Database Assistant chatbot across AWS and Azure. Powered by IBM watsonx, this AI-driven assistant, originally introduced in an earlier release is now fully available. It delivers intelligent, conversational support to help streamline and simplify database operations. For more information, see [Using the Netezza database assistant](/docs/netezza?topic=netezza-database-assistant).

IBM Netezza JDBC driver update

:   The IBM Netezza JDBC driver now includes an upgraded Java Runtime Environment (JRE) version 15.0.2. This update enables support for Windows-integrated Kerberos ticket cache authentication, enhancing security and compatibility for enterprise environments.

### Fixes
{: #fixesmay2025}

- Improved lazy vacuum operations with internal support for configurable time and threshold settings in `nzvacuumcat.conf`.
- Resolved issues where vacuum and reindex tasks were frequently skipped due to continuous query activity.
- Ensured periodic cleanup of system and global database entries to reduce dead space and improve overall maintenance efficiency.

### Components
{: #compmay2025}

- `nzcli` version: 11.2.3.6

## 30 April 2025 - 11.2.3.5
{: #apr2025}
{: release-note}

### New features and enhancements
{: #nfaprlb2025}

Connection history

:   A detailed history of successful and failed connections is now available, including the reasons for any failures. This feature offers improved insights into connectivity issues. For more information, see [Connection history](/docs/netezza?topic=netezza-history#connection-hist).

Automaint history
:   A new section has been added to track the details of the last successful execution of Groom and Genstats as part of the automaint process configured on the system. For more information, see [Automaint history](/docs/netezza?topic=netezza-history#automain_hist).

Query history shortcuts
:   Users can now quickly access information about short-running and long-running queries, enhancing efficiency in query management.

### Components
{: #compaprl2025}

- `nzcli` version: 11.2.3.5

## 19 February 2025 - 11.2.3.4
{: #feb2025}
{: release-note}

### New features and enhancements
{: #nffeb2025}

Workload contour - Scaling
:   Scaling can now be performed while the instance is in paused state. For more information, see [Scaling](/docs/netezza?topic=netezza-scaling-console).

Recent queries
: The **Recent queries** section has been moved to **Query history** and now supports up to 500,000 rows, significantly increasing from the previous limit of 2000 rows. For more information, see [History](/docs/netezza?topic=netezza-history).

#### Connectivity improvements
{: #cifeb2025}

- OpenSSL library has been upgraded to 3.0.
- The nz_s3connector is open source now and has been moved to a new location [nz_s3Connector](https://github.com/IBM/netezza-utils/tree/master/bnr-utils/nz_s3Connector) from "Netezza Software Support Tools" package. The updated version is now available at: [v1.3](https://github.com/IBM/netezza-utils/releases/tag/v1.3).
- The **dbt-ibm-netezza** adaptor for IBM Netezza is now available. This integration empowers users to harness the full potential of dbt, the leading data transformation framework, and unlock the performance and scalability of Netezza. To know more about dbt-ibm-netezza, see [Getting started with dbt-ibm-netezza](/docs/netezza?topic=netezza-nzdbt-intro).

### Components
{: #compfeb2025}

- `nzcli` version: 0.9.35

## 17 January 2024 - 11.2.3.3 - IF1
{: #jan2025}
{: release-note}

### New features
{: #nfnov2024}

Database assistant for AWS
:   Introducing the Netezza Database Assistant chatbot for AWS cluster, which is backed by IBM watsonx, a new AI-powered, cutting-edge assistant built on IBM’s decades of expertise managing the world’s most mission-critical data workloads. For more information, see [Using the Netezza database assistant](/docs/netezza?topic=netezza-database-assistant).

## 22 November 2024 - 11.2.3.3
{: #nov2024}
{: release-note}



### New features and enhancements
{: #nfenhnov2024}

Query cancellation
:   A feature to cancel long-running queries executed from the query editor. For more information, see [Query cancellation](/docs/netezza?topic=netezza-history#query-cancellation).

IdP configuration
:   The IdP configuration page is now part of the **Settings** page. For details, see [Setting SAML authentication with the Netezza UI](/docs/netezza?topic=netezza-samliamauth#setting_saml_wc) and [Setting Azure OIDC authentication with the Netezza UI](/docs/netezza?topic=netezza-enable_oidciamauth#setting_oidc_wc).

### Components
{: #compnov2024}

- `nzcli` version: 0.9.24



## 23 September 2024 - 11.2.3.2
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




## 02 August 2024 - 11.2.3.1
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

## 20 June 2024 - 11.2.3.0 - IF1
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

## 29 May 2024 - 11.2.3.0
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

## 11.2.2.11 - April 30, 2024
{: #mar2024}

### New features and enhancements
{: #nfmar2024}

- `AWS IAM` user authentication allows you to create and log in to your account using your `AWS IAM` credentials. This means that you can use your existing AWS access and secret keys to sign in to your account with no additional steps required. Additionally, you can now use multi-factor authentication (MFA) to secure your account even further. For more information, see [Setting AWS IAM authentication](/docs/netezza?topic=netezza-awsiamauth).

#### Connectivity improvements
{: #cimar2024}


### Fixes
{: #fmar2024}

- **Timezone issues:** Fixed the incorrect timezone display issue. By default, all the timestamps are now displayed in database timezone. You can choose between database and local timezone for scheduling automaintenance, BnR and pause/resume job.


### Components
{: #compsmar2024}

- {{site.data.keyword.netezza_short}} 11.2.2.11
- Web console 4.0.3.1

## 11.2.2.10 - February 21, 2024
{: #feb2024}

### New features and enhancements
{: #nffeb2024}

- A new **Scheduler type** column is introduced in the **History** page for past records.This column indicates whether the respective schedule is **ad-hoc** or **scheduled**. For more information, see [Checking scaling history](/docs/netezza?topic=netezza-scaling-console#scaling-console-history).

- Enhanced system stability for smooth operations.

- **RHEL8/GCC9 upgrade:**\
   Version 11.2.2.10 incorporates an upgrade to RHEL8/GCC9.\
   GCC9 supports only 64-bit. NPS no longer provides 32-bit client builds.

   GCC9 upgrade has no impact on custom UDX. If you face any issues, contact IBM support.
   {: note}

- **INZA:**\
   `python2` and its adapter are no longer supported.
- **Netezza client:**\
   Support to initiate, view,  and manipulate schedules for ad hoc, pause, resume, and scaling. Fore more information, see [Pausing and resuming instances](/docs/netezza?topic=netezza-pauseresume) and [Scaling](/docs/netezza?topic=netezza-scaling-topic).
- Introduced new maintanence job types **Grooms** and **Genstats** under **Maintenance** section. For more information, see [Maintenance](/docs/netezza?topic=netezza-settings#maintenance).
- Introduced a new option **Lakehouse** to create databases. For more information, see [Create databases](/docs/netezza?topic=netezza-databases#create-db).
- `CREATE TABLE` support for unpartitioned Iceberg table.
- `INSERT` support for Iceberg table.

#### Connectivity improvements
{: #cifeb2024}

- OpenSSL library upgraded to 1.1.1t.
- TLSv1.3 connection protocol supported.
- New Ciphers supported for TLSv1.3:
    - TLS_AES_128_GCM_SHA256
    - TLS_AES_256_GCM_SHA384
    - TLS_CHACHA20_POLY1305_SHA256
- AIX 7.3 and SUSE 15 SP3 support added from version 11.2.2.10 and later.
- All 32 bit client are now deprecated.
- HP and Solaris clients are deprecated altogether.
- ConnRetry feature added in ODBC. Fore more information, see [Configuring the DSN and driver options with ODBC Driver Setup](https://www.ibm.com/docs/en/netezza?topic=codsd-configuring-dsn-driver-options-odbc-driver-setup-2).

### Fixes
{: #ffeb2024}

- `.Net` login timeout overflow is fixed.

### Components
{: #compsfeb2024}

- {{site.data.keyword.netezza_short}} 11.2.2.10
- Web console 4.0.1.7

### Known issues
{: #kifeb2024}

- For expansion failure due to node procurement issues, the Ops team restores the system to online state. You will see the state of Expansion scheduler as **Suspended** in Workload Patterns -> Scaling section. The Ops team will contact you once the required nodes becomes available. For more information, see [Viewing suspended expansion](/docs/netezza?topic=netezza-scaling-console#view-suspended-expansion).

- Differential schema level backup might fail with the error message - "Error: Backupset not found in history for specified database and connector." if full schema level backup is performed on some different schema. To overcome this issue, take full schema-level backup of the schemas before performing its differential schema level backup.

## 11.2.2.9 - December 8, 2023
{: #dec2023}

### New features and enhancements
{: #nfdec2023}

- New {{site.data.keyword.netezza_short}} functionalities that are associated with {{site.data.keyword.lakehouse_short}} are introduced. For more information, see [{{site.data.keyword.lakehouse_short}} SQL commands](/docs/netezza?topic=netezza-sqlcommands_watsonx.data).

   You can also view your data lakehouse objects with the web console.

- Learn how to [Run multiple SQL statements in a single session](/docs/netezza?topic=netezza-query-editor#single-session-queries) and [Run multiple SQL statements in different sessions](/docs/netezza?topic=netezza-query-editor#multiple-sessions-queries) with the query editor in the web console.

- Updated the algorithm to calculate the profile of the day. The calculation is now made by subtracting two subsequent records' timestamp values if they are of the same day and appending the `timedelta` to that profile. For each day, the system compares which profile has the maximum time duration and declares that profile to be the profile of the day.

### Components
{: #compsdec2023}

- {{site.data.keyword.netezza_short}} 11.2.2.9
- Web console 4.0.1.6
- JDBC driver (on all platforms)
   MD5 Auth requests are deprecated. All MD5 connections are dropped.

- OLEDB driver (only on Windows)
   TLS1.2 protocol is given preference for SSL connections.

- All Windows supported drivers (ODBC & OLEDB)
   Visual Studio VC++ runtime redistributables are upgraded to 2022.

### Known issues
{: #kidec2023}

- For issues related to {{site.data.keyword.netezza_short}} and {{site.data.keyword.lakehouse_short}}, see [{{site.data.keyword.lakehouse_short}} known issues](/docs/netezza?topic=netezza-watsonx.data_knownissues).
- The `Word_diff` function in the SQL extension toolkit does not support string input.

## 11.2.2.8 - IF4 - November 9, 2023
{: #nov2023}

### Fixes
{: #f1nov2023}

- Updated APIs for IBM cloud secret manager.

### Components
{: #comps1nov2023}

- {{site.data.keyword.netezza_short}} 11.2.2.8-IF4
- Web console 4.0.15

### Known issues
{: #ki1nov2023}

- The console might not display an abort confirmation when the backup or restore process is aborted and might show that the operation is still in progress. Apply the following workaround on your system to overcome this issue.
   - If backup aborted

      ```sql
      update _t_backup_history set status=2, batchstatus=2 where status=0
      ```
      {: codeblock}

   - If restore aborted

      ```sql
      update _t_restore_history set status=2, batchstatus=2 where status=0
      ```
      {: codeblock}

## 11.2.2.8 - July 24, 2023
{: #july2023}

### New features and enhancements
{: #nf1july2023}

- Technology preview support for **SELECT** operations from Apache Iceberg and Hive tables is available on {{site.data.keyword.netezza_short}} on AWS. Apache Iceberg is an open table format that helps simplify data processing on large datasets that are stored in data lakes. With Hive table support, you can access Hive tables directly from your {{site.data.keyword.netezza_short}} instance and perform complex analytics operations by joining the tables with {{site.data.keyword.netezza_short}} tables. For more information, see [Querying data from {{site.data.keyword.lakehouse_short}}](/docs/netezza?topic=netezza-overview_watsonx.data).

- {{site.data.keyword.netezza_short}} on AWS is now available in Europe (Frankfurt) region. Other regions where the service is available on AWS include:

   - North America: US East (Northern Virginia), US West (Northern California), and Canada (Central).
   - Asia Pacific: Tokyo, Seoul.

### Fixes
{: #f1july2023}

- Fixed the issue with SQL query editor where commented out queries separated by a semicolon in the same line get executed.
- Fixed the issue with multiple pause/resume and scaling jobs with the same name get executed.

### Components
{: #comps1july2023}

- {{site.data.keyword.netezza_short}} 11.2.2.8
- Web console 4.0.15

### Known issues
{: #ki1july2023}

- Contour scaling from NC-Start to NC0 with storage utilization higher than 90% might result in errors. Keep storage utilization under 90% or expand storage before you start contour scaling. Ops alerts notifies you about storage utilization.
- The console might not display an abort confirmation when the backup or restore process is aborted and might show that the operation is still in progress. Apply the following workaround on your system to overcome this issue.
   - If backup aborted

      ```sql
      update _t_backup_history set status=2, batchstatus=2 where status=0
      ```
      {: codeblock}

   - If restore aborted

      ```sql
      update _t_restore_history set status=2, batchstatus=2 where status=0
      ```
      {: codeblock}

## 11.2.2.7 - July 10, 2023
{: #july12023}

### New features and enhancements
{: #nfjuly12023}

- {{site.data.keyword.netezza_short}} is now enabled on Amazon Web Services (AWS) for US-East-1 region. For more information, see [Getting started with Netezza Performance Server](/docs/netezza?topic=netezza-getstarted) and [Connecting to Netezza Performance Server](/docs/netezza?topic=netezza-connecting-overview).
- On AWS, smart scaling with confidence score and seed models display is now available in {{site.data.keyword.netezza_short}} web console. For more information, see [Smart scaling](/docs/netezza?topic=netezza-smartscaling_intro).
- On AWS, a new entry-level workload contour called NC-Start is available to support lower volume BI and UAT workloads. You can scale this instance to NC0 performance profiles seamlessly as your workload increases. For more information, see [Scaling](/docs/netezza?topic=netezza-scaling-console).
- Time travel functionality is supported in {{site.data.keyword.netezza_short}} web console. For more information, see [Getting started with Netezza Performance Server time travel](/docs/netezza?topic=netezza-introducing_tt).
- INZA 11.2.28 is supported. For more information, see [Netezza Performance Server Analytics 11.2.28 release notes](https://www.ibm.com/docs/en/netezza?topic=npsarnc-netezza-performance-server-analytics-11228-release-notes-2).

### Components
{: #compsjuly12023}

- {{site.data.keyword.netezza_short}} 11.2.2.7
- Web console 4.0.14

### Known issues
{: #kijuly12023}

- Databases, schemas, and table names containing a dot character (".") do not show in the time travel statistics and graphs when you set the retention time interval to a nonzero value.
- On demand (ad hoc) backup and restore for multiple large databases at one go is successful for only a few databases in the batch. For the rest of the databases you get an authentication error.

    Workaround:

    - Take a backup of a single large database at a time.
    - Restore a single large database at a time.

## 11.2.2.6 - March 2023
{: #march2023}

### New features and enhancements
{: #new_features_mar2023}

- Default database maximum connections to the server is now increased to 1000.

### Fixes
{: #fixes_mar_2023}

- Fixed the issue with `.pln` files not getting stored in `$NZ_KIT_LOG/plans` directory if your query crashes.
- Fixed the issue with sensitive files from host pod being read by using external tables and remote `nzsql` client. Starting with this release, you cannot load data into `/root` and `/home` directories, so using `nzload` with datafile from `/root` and `/home` is restricted along with creating external tables in these directories.

### Components
{: #components11226}

- {{site.data.keyword.netezza_short}} 11.2.2.6
- Web console 4.0.12

### Known issues
{: #kimarch_2023}

- You might experience the paste option not working in Mozilla Firefox 110.x when you are using the query editor in the web console. This is the web browser limitation and you must change the browser configuration preferences to allow the web pages to get access to the clipboard by using JavaScript. This issue is not present in other web browsers.

    Workaround:

    1. Open a new Firefox window.
    1. In the address bar, enter `about:config`.
    1. Click **Accept the Risk and Continue** button.
    1. In the Search preference name, type `asyncc`.
    1. Select **dom.events.asyncClipboard.readText** and **dom.events.testing.asyncClipboard** by clicking the toggle icon on the right.
        The settings change from **false** to **true**.
    1. Refresh the web console page.

## 11.2.2.5 - February 2023
{: #feb2023}

### New features and enhancements
{: #new_feature_feb2023}

- Use time travel queries to retrieve and analyze historical data without having to develop extra application logic such as history tables. {{site.data.keyword.netezza_short}} time travel comes in handy when you want to track the history of data changes or reconstruct your data. By using this powerful tool, you can access historical data (data that was changed or deleted) at past points in time or within a past period of time. For more information, see [Getting started with time travel](/docs/netezza?topic=netezza-introducing_tt).

- The **nzbackup** and **nzrestore** destination directory limit is updated. Previously, only 16 directory locations to read/write were supported. Now, the limit is 32.

- The location of postmaster and postgres core dumps is changed.

| Core dump         | Previous location | New location                      |
| -----------       | -----------       | ----------                        |
| Postmaster cores  | NZ_DATA_DIR/global| NZ_LOG_DIR/postgres/postmaster/   |
| Postgres cores    | NZ_DATA_DIR/base	| NZ_LOG_DIR/postgres/postgres      |
{: caption="New and previous locations of the postmaster and postgres core dumps" caption-side="top"}

- Automatic pause and resume is enabled in the web console.

### Components
{: #components}

- {{site.data.keyword.netezza_short}} 11.2.2.5
- Web console 4.0.11

### Known issues
{: #kifeb2023}

If a common table expression or derived table query contains column names or column aliases, which begin with an underscore, Netezza Performance Server deletes these columns in the query result set.
If there are no columns to display, Netezza Performance Server returns the following error.

```sh
ERROR:  No columns are selected due to column alias begin with underscore
```
{: screen}

Example:

```sql
create table t1 ( c1 int , c2 int);
CREATE TABLE
with tab1 as ( select c1 as _c1 , c2 as _c2 from t1 ) select tab1.* from tab1; ERROR:  No columns are selected due to column alias begin with underscore
select tab1.* from ( select c1 as _c1 , c2 as _c2 from t1 ) as tab1; ERROR:  No columns are selected due to column alias begin with underscore
```
{: screen}

## 11.2.2.4 - July 2022
{: #july2022}

As of July 28, 2022, you can access data from data lakes and move data between applications with Kafka.

### New features
{: #nfjuly2022}


Use {{site.data.keyword.netezza_short}} as a data source or data sink. For more information, see [Using Netezza Performance Server as a data source](/docs/netezza?topic=netezza-netezzakafka#datasourcekafka) and [Using Netezza Performance Server as a data sink](/docs/netezza?topic=netezza-netezzakafka#datasinkkafka).

### Known issues
{: #kijuly2022}

`datasource` is a reserved keyword now. If you want to use `datasource` as an identifier, enclose it in double quotation marks (`"datasource"`).

Example:

```sql
SYSTEM.ADMIN(ADMIN)=> create table t1 ( "datasource" int);
CREATE TABLE
```
{: codeblock}

## 11.2.2.3 - June 2022
{: #june2022}

As of June 14, 2022, several fixes, and a stability patch for critical issues.

### Fixes
{: #fjune2022}

- Fixed the issue with queries failing with error **No such table exists** on a second attempt.
- Fixed the issue with DBOS crashing while redumping modified plan to file.
- Fixed the issue with intermittent hangs.
- Fixed **ERROR : unexpected error 12** that occurred when you ran merge queries dynamically through a stored procedure.
- Fixed the issue with memory leaks with stored procedures that occurred after the `_ENABLE_SPROC_HIST_LOGGING_` variable was enabled.
- Fixed the issue with postmaster crashing by compiling **librest** with Go 1.18.

### Known issues
{: #kijune2022}

- If a large database backup to Azure Blob Storage with a single stream fails, update the number of streams to 16 and retry the backup.


## May 2022
{: #may2022}

As of May 20, 2022, workload enhancements and network policies support is added.

### New features
{: #nfmay2022}

- Two new workload contours NC0 and NC3 are available for a wider range of configuration options for provisioning and scaling.
- Network policies support is added. You can control the set of the IP addresses and hostnames that your {{site.data.keyword.netezza_short}} database can connect to or can be connected from by using network policies. For more information, see [Network policies](/docs/netezza?topic=netezza-network-policies) and [Network policies with the web console](/docs/netezza?topic=netezza-settings&interface=ui).

### Known issues
{: #kimay2022}

- Netezza SQL Editor does not accept input for query requests. You can construct equivalent query requests by using [the command line](https://www.ibm.com/docs/en/netezza?topic=interfaces-command-line-interface).

## March 2022
{: #march2022}

As of March 17, 2022, the {{site.data.keyword.netezza_short}} web console is available in the following languages: English, German, French, Spanish, Italian, Brazilian, Japanese, Chinese Simplified, Chinese Traditional, and Korean.


For release notes for other {{site.data.keyword.netezza_short}} deployment options, see [this page](https://www.ibm.com/docs/en/netezza?topic=started-netezza-performance-server-release-notes).
