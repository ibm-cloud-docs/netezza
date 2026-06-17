---
copyright:
  years:  2026
lastupdated: "2026-06-17"

keywords: vector, netezza

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

# Vector data type support
{: vector_datatype_supp}

Netezza supports the vector data type, enabling storage and management of embeddings for generative AI applications. Vectors are essential for Retrieval-Augmented Generation (RAG) workflows, where embeddings extracted from documents are stored in a vector database for use with large language models (LLMs).

## Overview
{: vdts_overview}

With vector data type support, you can create embedding tables directly in Netezza, leveraging the AMPP (Asymmetric Massively Parallel Processing) architecture for high-performance vector storage and retrieval operations. This eliminates the need for separate vector databases and allows you to manage both structured and vector data in a unified platform.

## Supported distance operators
{: vdts_supp_dst_opt}

Netezza supports four widely used distance operators for vector similarity calculations:

- **L1 distance**: `<+>` (Manhattan distance)
- **L2 distance**: `<->` (Euclidean distance)
- **Cosine distance**: `<=>` (Cosine similarity)
- **Inner product**: `<#>` (Dot product)

These operators enable you to perform similarity searches and find the most relevant vectors based on different distance metrics.

## Dimension support
{: vdts_dim_sup}

Netezza supports up to **16,000 dimensions**, providing extensive flexibility for embedding models. This generous dimension limit ensures compatibility with a wide range of embedding models and use cases.

## Custom model integration
{:vdts_cus_modint}

You can integrate custom embedding models, allowing you to select models that best fit your specific use cases while ensuring compatibility with the dimension limit. Additionally, you can integrate custom LLMs, providing complete freedom and control over your AI stack with no vendor lock-in.

