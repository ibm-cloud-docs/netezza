---
copyright:
  years:  2026
lastupdated: "2026-07-21"

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

# Unstructured data in Netezza
{: #unstructured_data}

The unstructured data support feature enables Netezza to process non-relational data such as PDFs, images, and JSON data. The feature follows a medallion architecture, where you can enrich data from unstructured sources and use it in other workloads.

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
2. **Images**: JPEG (.jpg, .jpeg), PNG (.png), and WebP (.webp) files. Only these formats are supported; other image file types are not supported.
3. **JSON**: JSON data files

## Data storage options
{: data_stor_opt}

You can store raw data in two locations:

### Customer S3 buckets

You can use your own S3 buckets where you have stored unstructured data. There are no limitations on file size or lifetime for files in your bucket. You are responsible for loading data into your bucket. The console does not provide a way to upload files to your bucket.

### Netezza internal storage

Netezza provides a facility to use native managed internal storage. You can upload files up to 1 MB in size through the console. The files are available for the next 24 hours from the time of upload.

## Operations
{:opr_unstr_data}

The following built-in operations are available:

### PDF operations

- Extract text from PDF files
- Extract tables from PDF files
- Extract PDF metadata (author, number of pages, and other information)

### Image operations

- Extract text from images
- Extract EXIF information (location, resolution, aperture, and other metadata)

### JSON operations

- Transpose JSON data to a table by using a JSONPATH query

JSON files that you use for unstructured data operations must not contain BOM (Byte Order Mark) characters. If a JSON file contains a BOM, the operation fails with a `JSONDecodeError: Unexpected UTF-8 BOM` error. Save JSON files as UTF-8 without BOM before using them in unstructured data operations.
{: .important}

The following characters and character sets are not supported in JSON files used for unstructured data processing:

| Character | Reason |
|-----------|--------|
| `\|` pipe | It is the delimiter — splits the row |
| `'` single quote | `EscapeChar=''` means it can't be escaped |
| `\` backslash | Confuses the parser with no escape char defined |
| `&` ampersand | Pipeline HTML-encodes it to `&amp;` — data corrupted |
| `<` less-than | Pipeline HTML-encodes it to `&lt;` |
| `>` greater-than | Pipeline HTML-encodes it to `&gt;` |
| Accented characters (`ü`, `ö`, `ä`, `é`, and so on) | 2-byte UTF-8 — internal engine interprets Latin-1 encoding which causes a `maxerrors` limit to be hit |
| CJK characters, emoji, `€`, and other multi-byte symbols | 3/4-byte UTF-8 — completely outside Latin-1 |
| `0x00` null byte | Terminates strings inside the Netezza engine |

Files that contain any of these characters may fail processing or produce unexpected results.
{: .important}

JSON path query syntax features are as per those supported by the `jsonpath-ng.ext` Python package. For syntax support, see the [jsonpath-ng.ext documentation](https://github.com/h2non/jsonpath-ng).
{: .note}

The following JSON path query features are not supported or do not behave as expected:

- Regular expression (regex) expressions are not supported.
- Logical AND (`&&`) operator is not supported.
- Comparison using `== null` is not supported.
- Comparison using `!= null` incorrectly returns records that contain null values.
{: .note}

### Vectorization

Generate vector embeddings from extracted text for future RAG (Retrieval-Augmented Generation) workflows. You can use your own large language model (LLM) or Jupyter notebook to work with the embeddings.

Vectorization supports English only. To use a different embedding model, contact support.
{: .note}

### Language support for text extraction

Text extraction supports the following languages:

- English
- Spanish
- Portuguese
- French
- German
- Italian

## Prerequisites
{: #prereq_unstrdat}

Before you enable the unstructured data feature, ensure that the following requirements are met:

- INZA is installed.
- Nexus is enabled.

## Enabling the feature
{: #enab_process}

An administrator can enable the feature by navigating to **Administration > Unstructured data support** in the console.

## Onboarding users
{: #onboard_users}

Log in as an administrator and navigate to **Administration > Unstructured data support**.

### Onboarding a new user

To onboard a user and create a data source for that user, follow the on-screen instructions in the console.

When creating a data source, note the following:

- A data source points to a customer S3 bucket. The administrator decides the directory structure within the bucket where the user has access.
- When specifying the directory, provide the full directory path inside the bucket without a trailing slash. For example, if the path for user `TEST1` is `<bucketname>/TEST1/landingzone`, specify `TEST1/landingzone` as the directory.

### Adding a data source for an onboarded user
{: #add_datasource_onboarded}

After a user is onboarded, you can assign an additional S3 bucket or directory to that user. To add a new data source, navigate to **Administration > Unstructured data support** and click **Create data source**.

If you are on **AWS BYOC (Bring Your Own Cloud)**, you do not need to execute the steps to grant cross-tenant IAM access when adding an external data source. The IAM role grant block shown during data source creation is not required on BYOC deployments and can be skipped.
{: note}

## Ad-hoc operations
{: #adhocoper_unstrdata}

After a user is onboarded, the user can access the **Analytics** page from the side panel on subsequent login.

On the Analytics page, you can work with data from two sources:

- **Remote data source (customer bucket)**: The data source that was created during onboarding.
- **Temporary storage**: Netezza provides temporary storage where you can upload files up to 1 MB in size. Uploaded files are available for 24 hours.

To perform ad-hoc operations:

1. Click a data source to sync it. The sync operation scans your bucket directory and fetches information for all existing files. It syncs the metadata, removes entries for files that are deleted from the data source, marks existing files as unprocessed if they have been updated since the last sync, and creates entries for newly added files.

2. Select a file to see its preview and metadata. For PDF files, you can scroll through the preview.

3. After you select a file, choose an operation and follow the on-screen instructions to process the file and save the results to Netezza.

   When you use the **Extract table** operation (for PDF or JSON files), a preview of the extracted table is shown for verification. Review the table contents, including column names and data types. You can change the table name, column names, and data types, and select which tables to export to Netezza. By default, all columns have a non-null constraint. If your table might contain null values in any column, clear the non-null constraint before you run the operation.

## Workflows
{: #work_fl}

You can automate data processing and schedule it for a specific time of day or day of the week. Workflows run on SPUs, which brings the AMPP architecture of Netezza and provides significant performance gain at scale.

To create a workflow:

1. Choose a data source to sync data from.
2. Select a date, time, schedule, and frequency.
3. Choose a specific file or use a regular expression (for example, `Report*.pdf` or `*invoice*.pdf`).
4. Choose a series of operations to perform. You can choose multiple operations that run serially.
5. Optionally, specify customizations such as the page range to process.

For example, you can configure a workflow to use the `INBOUND_INVOICES` data source with a file name filter of `*invoice*.pdf`, scheduled to run at 10 PM every day. The workflow extracts tables from page 1 of all matching files and inserts the data into a master table with a defined schema.

### Workflow history

The workflow history shows all workflows that have been run. Each operation is detailed, including:

- What operation was performed
- How many files were processed
- Which tables were created

Workflow history is retained only for the current day. You can view the execution history of workflows that ran on the same day. Workflow history from previous days is not available.
{: .note}

## Limitations
{: #lim_unstrdat}

- The feature is available only on AWS, not on Azure.
- Extracting tables from PDF files might not work for complex PDFs (such as W2 forms) where table structures are not aligned by columns.
- Before you perform an upgrade, ensure that the REST Catalog is disabled. If the REST Catalog remains enabled during the upgrade, the **Create Connection** button for creating a Nexus connection will be disabled after the upgrade.
- Image files whose filenames begin with a numeric character are not supported in workflows. This limitation applies only to image files. PDF and JSON files with filenames that start with numeric characters are supported.
- JSON files must not contain BOM characters, unsupported characters (such as pipe, single quote, backslash, ampersand, less-than, greater-than, multi-byte UTF-8 characters, and null bytes), or JSON path query features that are not supported.
- If you are on AWS BYOC and using a private namespace, there are known issues with missing dependencies. Contact support to manually install the required set of Python packages.
- On AWS BYOC with a private namespace, the **Extract text** operation supports English only.

## Feature dependencies
{: #feat_dep_unstrdat}

The unstructured data feature depends on:

1. INZA (with NDC)
2. NDC (the feature was developed using 11.3.1.1 REST catalog, but it should work with NDC)
