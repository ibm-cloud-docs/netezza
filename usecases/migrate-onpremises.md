---

copyright:
  years: 2023
lastupdated: "2023-02-23"

keywords: use cases, Netezza tutorials, migrating on-premises backups to cloud, migrating

subcollection: netezza

---

{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}
{:codeblock: .codeblock}

# Migrating on-premises backups to cloud
{: #migrating-onprem-cloud}

Follow these steps to migrate a backup image take on {{site.data.keyword.netezza_short}} on Cloud Pak for Data System (on premises) to {{site.data.keyword.netezza_full}}.
{: shortdesc}

1. Migrate your backup image to IBM Cloud Object Store.

   Follow the steps that are described in:

   - [Migrating backups from file systems to cloud storages and from cloud storages to file systems](https://www.ibm.com/docs/en/netezza?topic=mb-migrating-backups-from-file-systems-cloud-storages-from-cloud-storages-file-systems).

   - [Migrating backups from file systems to Azure Blob Storage and from Azure Blob Storage to file systems](https://www.ibm.com/docs/en/netezza?topic=mb-migrating-backups-from-file-systems-azure-blob-storage-from-azure-blob-storage-file-systems).

1. Synchronize the on-premises backup image to the cloud instance by using the `nz` tool with the `bnr` option.

   ```sh
   $./nz bnr ls scan-object-store -host<NPS HOSTNAME -u ADMIN -pw PASSWORD -unique-id BACKUP UNIQUE ID
   ```
   {: #codeblock}

1. Restore the backup by using the web console.

   Follow the steps that are described in [Restoring backups](/docs/netezza?topic=netezza-bnr-webconsole#restore-backups).
