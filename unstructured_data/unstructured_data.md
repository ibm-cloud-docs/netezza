---
copyright:
  years:  2026
lastupdated: "2026-07-07"

keywords: netezza, unstructured data

subcollection: netezza

---

{:new_window: target="_blank"}
{:shortdesc: .shortdesc}
{:screen: .screen}
{:pre: .pre}
{:table: .aria-labeledby="caption"}
{:codeblock: .codeblock}
{:tip: .tip}
{:download: .download}
{:important: .important}
{:caption: .caption}
{:note: .note}

# Unstructured data
{: #unstructured_data}

The unstructured data support feature enables Netezza to process non-relational data such as plain text, images, and other file types. The feature follows a medallion architecture (bronze, silver, gold) where you can enrich data from unstructured sources and use it in other workloads.

## Data layers
{: #data_lay}

The medallion architecture organizes data into three layers:

- **Bronze data** (raw or partially enriched): Stored in customer buckets and lakehouse staging tables
- **Silver data** (extracted): Stored in Netezza native tables
- **Gold data** (extracted and processed for specific workloads): Stored in Netezza native tables

## Feature availability
{: Feature_ava}

The unstructured data feature is available only on:

- AWS SaaS
- AWS BYOC (Bring Your Own Cloud)

The feature is not available on Azure.

## Supported file types
{: Sup_file_typ}

You can process the following file types:

1. **PDF**: Standard PDF files
2. **Images**: All image file types (JPG, JPEG, PNG, WEBP, and others)
3. **JSON**: JSON data files

## Data storage options
{: data_stor_opt}

You can store raw data in two locations:

### Customer S3 buckets

You can use your own S3 buckets where you have stored unstructured data. There are no limitations on file size or lifetime for files in your bucket. You are responsible for loading data into your bucket. The console does not provide a way to upload files to your bucket.

### Netezza internal storage

Netezza provides a native S3 bucket per namespace. This bucket stores files that you upload through the console.

Limitations for internal storage:

- File size is limited to 1 MB
- Files are available for 24 hours from the time of upload

## Operations
{:opr_unstr_data}

The following built-in operations are available:

### PDF operations

- Extract text from PDF files
- Extract tables from PDF files
- Extract PDF metadata (author, number of pages, and other information)
- Extract page information (whether a page contains images or tables)

### Image operations

- Extract text from images
- Extract EXIF information (location, resolution, aperture, and other metadata)

### JSON operations

- Extract JSON path from JSON files

JSON files that you use for unstructured data operations must not contain BOM (Byte Order Mark) characters. If a JSON file contains a BOM, the operation fails with a `JSONDecodeError: Unexpected UTF-8 BOM` error. Save JSON files as UTF-8 without BOM before using them in unstructured data operations.
{: .important}

### Vectorization

Generate vector embeddings from extracted text for future RAG (Retrieval-Augmented Generation) workflows. You can use your own large language model (LLM) or Jupyter notebook to work with the embeddings.

## Prerequisites
{: #prereq_unstrdat}

Before you enable the unstructured data feature, ensure that the following requirements are met:

- INZA is installed.
- Nexus is enabled.

## Enablement process
{: #enab_process}

To enable the unstructured data feature:

1. On upgrade, the GENIUS database is created. The system registers all built-in operations as user-defined table functions (UDTFs) and user-defined functions (UDFs) in the database.

2. The admin user enables the feature by navigating to **Administration > Unstructured data support** in the console. The system creates the DATA database in the REST catalog and external data sources (EDS) for internal storage.

3. The admin onboards a user. This process includes:
   - Granting privileges on DATA and GENIUS databases
   - Creating a schema in GENIUS
   - Accepting inputs about a bucket and creating an EDS. Each user must have at least one EDS. Each EDS points to an external bucket and a single directory in that bucket where you have permission to read data. When specifying the directory, provide the full directory path inside the bucket without a trailing slash. For example, if the path for user `TEST1` is `<bucketname>/TEST1/landingzone`, specify `TEST1/landingzone` as the directory.
   - The onboarding process creates a STAGING table in the DATA.EDS schema where metadata of all scanned files is maintained.
   - Creating an EDS-specific schema in the GENIUS database

### Adding a data source for an onboarded user
{: #add_datasource_onboarded}

After a user is onboarded, you can assign an additional S3 bucket or directory to that user. To add a new data source, navigate to **Administration > Unstructured data support** and click **Create data source**.

## Ad-hoc operations
{: #adhocoper_unstrdata}

To perform ad-hoc operations:

1. Log in to the console. You now have access to the Analytics page where you can see:
   - List of EDS: EDSs that you own plus a virtual EDS for the internal storage bucket
   - List of files in all STAGING tables that you own
   - List of files from STAGING tables that other users have shared with you

2. Click a data source to sync it. The sync operation scans your bucket directory and fetches information for all existing files. It syncs the metadata, removes entries for files that are deleted from the data source, marks existing files as unprocessed if they have been updated since the last sync, and creates entries for newly added files.

3. Select a file to see its preview and metadata. For PDF files, you can scroll through the preview.

4. After you select a file for an operation, choose from the available operations.

   When you use the **Extract table** operation (for PDF or JSON files), a preview of the extracted table is shown for verification. Review the table contents, including column names and data types. You can change the table name, column names, and data types, and select which tables to export to Netezza. By default, all columns have a non-null constraint. If your table might contain null values in any column, clear the non-null constraint before you run the operation.

5. Choose whether to save the extracted data in the Netezza database.

### Operation flow

The operation follows this flow:

```
Console → payload → nzrest API → execute SQL → INZA UDTF
Console ← handle response ← result ← INZA UDTF
```

## Workflows
{: #work_fl}

You can automate data processing and schedule it for a specific time of day or day of the week. Workflows run on SPUs, which brings the AMPP architecture of Netezza and provides significant performance gain at scale.

To create a workflow:

1. Choose a data source to sync data from.
2. Select a date, time, schedule, and frequency.
3. Choose a specific file or use a regular expression (for example, `Report*.pdf` or `*invoice*.pdf`).
4. Choose a series of operations to perform. You can choose multiple operations that run serially.
5. Optionally, specify customizations such as the page range to process.

### Workflow history

The workflow history shows all workflows that have been run. Each operation is detailed, including:

- What operation was performed
- How many files were processed
- Which tables were created

## Limitations
{: #lim_unstrdat}

Be aware of the following limitations:

1. Data extraction queries are all host-based. No execution occurs on SPUs.
2. The feature is available only on AWS, not on Azure.
3. Extracting tables from PDF files might not work for complex PDFs (such as W2 forms) where table structures are not aligned by columns.
4. JSON files must not contain BOM (Byte Order Mark) characters. Files that contain BOM characters cause unstructured data operations to fail. Save JSON files with UTF-8 encoding without BOM.

## Feature dependencies
{: #feat_dep_unstrdat}

The unstructured data feature depends on:

1. INZA (with NDC)
2. NDC (the feature was developed using 11.3.1.1 REST catalog, but it should work with NDC)
