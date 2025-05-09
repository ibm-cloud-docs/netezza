---

copyright:
  years: 2025
lastupdated: "2025-05-8"

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

# Getting started
{: #netezzacosgetstarted}

This guide outlines how to configure, manage, and optimize the Cloud Object Storage (COS) feature in IBM Netezza on cloud platforms.

### New Deployments

- COS buckets will be provisioned automatically and configured during system initialization.

### Existing Deployments

- COS can be enabled during upgrade to a supported NPS version.
- Existing tables can be migrated using CTAS.

### Configuring COS Access

Options include:

- **IAM roles**
- **Credential profiles**
- **Explicit bucket policies**

## Prerequisites and System Requirements
{: #pre-requites-sysreq}

## Supported Platforms

IBM Netezza Performance Server (NPS) on:

- NzSaaS (Netezza as a Service)
- BYOC/CVPC (Bring Your Own Cloud / Customer-Provided VPC)

### Minimum Version

- COS support requires NPS version X.X.X or later.

### Cloud Providers

- **AWS S3** (Standard bucket type required)
- **Azure Blob Storage** (support planned)

### Required Permissions

- SPUs must have **read and write access** to the COS bucket.
- **IAM roles**, **bucket policies**, or **credentials** must be properly configured.
