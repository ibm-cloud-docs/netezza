---

copyright:
  years: 2023
lastupdated: "2023-05-25"

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
   $./nz bnr ls scan-object-store -host<NPS HOSTNAME -u ADMIN -pw PASSWORD -unique-id BACKUP-UNIQUE-ID
   ```
   {: #codeblock}

   Where `unique-id` is the cloud directory structure following the bucket to where the backup image (starting NPS directory) is stored.
   Since {{site.data.keyword.netezza_short}} controls backup/restore from the {{site.data.keyword.netezza_short}} web console, {{site.data.keyword.netezza_short}} creates a directory in the bucket named the same as the namespace name and puts the corresponding backup images in that directory. So the default {{site.data.keyword.netezza_short}} `UNIQUE-ID` is the namespace name, but if you are transferring backups from a filesystem to the bucket in the cloud, `BACKUP-UNIQUE-ID` is the path to the directory you store the backups in.

1. Restore the backup by using the web console.

   Follow the steps that are described in [Restoring backups](/docs/netezza?topic=netezza-bnr-webconsole#restore-backups).

   Optionally, you can restore by using `nz nzrestore` command.

   - By using `az` connector:

   ```sh
   ./nz nzrestore -v -db <targetdbname> -sourcedb <targetdbname -backupset <> -npshost <> -connector az -connectorArgs "UNIQUE_ID=<>:STORAGE_ACCOUNT=<>:KEY=<>:CONTAINER=<>:REGION=<>:BLOCK_SIZE_MB=25"
   ```
   {: #codeblock}

   - For S3:

   ```sh
   "time nzrestore -v -db <> -npshost <> -streams AUTO -connector s3 -connectorArgs BUCKET_URL=<>:UNIQUE_ID=<>:ACCESS_KEY_ID=<>:SECRET_ACCESS_KEY=<>:DEFAULT_REGION=<>"
   ```
   {: #codeblock}
