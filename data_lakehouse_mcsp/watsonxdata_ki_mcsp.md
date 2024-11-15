---

copyright:
  years:  2024
lastupdated: "2024-11-15"

keywords: data lakehouse, watsonx.data known issues when using nps, netezza data lakehouse, watsonx, watsonx.data, watsonx.data with nps

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

# {{site.data.keyword.lakehouse_short}} known issues
{: #watsonx.data_knownissues_mcsp}

You might experience the following issues while using {{site.data.keyword.lakehouse_short}} with {{site.data.keyword.netezza_short}}:

- Boolean fields written with RLE encoding cannot be read and result in error.

`ERROR:  IOError: Unknown encoding type. : Encountered a problem during batch read:`
