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

# Netezza Cloud Object Storage utilisation
{: #netezza_cososm}

## Monitoring Cloud Object Storage utilization
{: #monitoring_cloud}

Cloud Object Storage utilization can be monitored from the Dashboard page for a high-level overview. For detailed insights into data slice utilization, please refer to the **Infrastructure** page.

## Navigating to the Object Storage Console page
{: #navigating_obj}

1. Login to your console account.
2. From the breadcrumb or top menu (often represented by the menu icon or three horizontal lines), click to open the main navigation menu.
3. In the menu, look for or search for "Object Storage".
4. Click on Object Storage to open its dedicated settings or management page.

### Alternative navigation steps
{: #nav_steps}

1. Login ➔ Click on ☰ Menu Icon (breadcrumb/top menu)
2. Navigate to Settings
3. Lookup or Search for Object Storage
4. Click on Object Storage

## Using the `nzds show [-detail]` command
{: #using_nzds}

The `nzds show [-detail]` command has been enhanced to include information about Netezza Cloud Object Storage (COS) utilization. A new column, Obj Used (GiB), has been added to the command output, displaying the amount of Cloud Object Storage used, reported in GiB (Gibibytes).

## Updated output of the `nzds show [-detail]` command
{: #updated_op}

### Columns
{: #cols}

* Data Slice Status
* SPU Partition Size (GiB)
* %Used
* Supporting Disks
* Obj Used (GiB)
* Supporting Disks Locations
* Primary Storage

### Example output
{: #op}

| Data Slice Status | SPU Partition Size (GiB) | %Used | Supporting Disks | Obj Used (GiB) | Supporting Disks Locations | Primary Storage |
| --- | --- | --- | --- | --- | --- | --- |
| 1   |  Unknown | 1003 | 0 | 16 | 0.00 | 1004 | 0.27 spa1.disk1 | 1004 |

## Benefits of COS utilization visibility
{: #benifits_cos}

### Advantages
{: #advntages}

1. **Improved Monitoring**: Administrators can now monitor cloud storage usage directly from the CLI without relying solely on the dashboard or external tools.
2. **Granular Insight**: With the new Obj Used (GiB) column, COS usage can be tracked at the data slice level, providing better visibility into storage distribution and helping identify uneven or unexpected usage patterns.
3. **Better Resource Planning**: Knowing exact COS usage per slice helps in capacity planning, cost estimation, and ensuring optimal usage of allocated cloud resources.
4. **Faster Troubleshooting**: When investigating performance or storage-related issues, COS metrics available at the command-line level help narrow down problems faster and more accurately.
5. **Automation-Friendly**: Since the COS utilization is now accessible using a CLI command, it can be easily integrated into scripts, monitoring systems, or automated reports.
