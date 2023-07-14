---

copyright:
  years:  2023
lastupdated: "2023-07-14"

keywords: data lakehouse, netezza data lakehouse, integrating nps with watsonx, watsonx, watsonx.data, watsonx.data with nps
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

# Integrating {{site.data.keyword.netezza_short}} with {{site.data.keyword.lakehouse_short}}
{: #integratenps_watsonx.data}

You can integrate your {{site.data.keyword.netezza_full}} instance with {{site.data.keyword.lakehouse_short}}.

## Before you begin
{: #prereqswatsonx.data}

Ensure that you obtained the IBM API key by following the steps:

1. Go to https://cloud.ibm.com/.
2. Click on IBM IAM.
3. Create a service ID.
4. Assign access.

   a. Select metastore.

   b. Select **Administrative privileges**.

5. Create an API key.

## Run the following `nz` command on {{site.data.keyword.netezza_short}} instance or remote client by using `nzcli`.

```sql
nz setup-hms --url <thrift endpoint> --hms-user <user-name> --hms-token <apikey> --name <unique connection1> --user <nz db user> --password <nz db password>
```
{: codeblock}

Where:

- `<thrift endpoint>` must be fetched from watsonx.data instance.
- `--hms-user <user-name>` is the IBM IAM ID.
- `--hms-token` is the IBM API key.

After you registered to {{site.data.keyword.lakehouse_short}}, you can follow the steps to create a remote database.
