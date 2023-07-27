---

copyright:
  years:  2023
lastupdated: "2023-07-27"

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
1. At the top of the page, from the **Manage** sub-menu, select **Access (IAM)**.
1. Click **Service IDs** and **Create**.
1. Provide **Create service ID** details.
1. On the **Access** tab, perform the following actions:

   a. Click **Assign group** and select the required access groups. Click **Add**. **DRAFT COMMENT: apparently, an access group must be created before you can assign/access groups. Is that step obligatory? Please clarify.**

   b. Click **Assign access**.

   c. In the **Service** search field, type watsonx.data and click it. Click **Next**.

   d. In the **Resources** section, ensure that **All resources** is selected. Click **Next**.

   e. In the **Roles and actions** section, select **MetastoreAccess** and **Administrator**, and click **Next**.

   f. Click **Add** and **Assign**. **DRAFT COMMENT: I understand these are obligatory steps, correct? Please clarify**.

1. Click the **API keys** tab and click **Create**.
1. Provide **Create API key** details.
   You must name the API key as **ibmlhapikey**.

## Integrating {{site.data.keyword.netezza_short}} instance or remote client with {{site.data.keyword.lakehouse_short}} by using `nzcli`.
{: #integratesteps_watsonx.data}

1. Download `nz` tool.

   ```sql
   curl -o nz -k <name of the API server URL from namespace provisioning page>/v2/download/nz-linux-amd64
   ```
   {: codeblock}

1. Set up the environment variables.

   ```sql
   export NZ_HOST=<name of the API server URL from namespace provisioning page>
   export NZ_USER=<admin user name>
   export NZ_PASSWORD=<admin user password>
   ```
   {: codeblock}

1. Change the permissions on `nzcli` executable.

   ```sql
   chmod +x nz
   ```
   {: codeblock}

1. Set up HMS with `nz` tool.

   ```sql
    ./nz setup-hms create -connection-name "<your connection name>" -hms-token “<your API key obtained in the `Before you begin` section>” -hms-user "ibmlhapikey" -url “<thrift endpoint URL retrieved from watsonx.data instance>”
   ```
   {: codeblock}

Where:

- `url` is the thrift endpoint URL which you retrieve from {{site.data.keyword.lakehouse_short}} instance. For more information, see [Getting the HMS endpoint](/docs/watsonxdata?topic=watsonxdata-hms#hms_url). You also must ensure that the `url` is in the following `"thrift://<host>:<port>""` format when you run `nz setup-hms` command.
- `hms-user <user-name>` is the IBM IAM ID.
- `hms-token <apikey>` is the IBM API key.

After you registered to {{site.data.keyword.lakehouse_short}}, you can create a remote database.

1. Log in to your {{site.data.keyword.netezza_short}} web console or download `nzsql` command line tool from [here](https://www.ibm.com/support/fixcentral/swg/downloadFixes?parent=ibm%7EWebSphere&product=ibm/WebSphere/IBM+Cloud+Private+for+Data+System&release=NPS_11.2&platform=All&function=fixId&fixids=11.2.2.7-WS-ICPDS-NPS-Clients-fp20684&includeRequisites=1&includeSupersedes=0&downloadMethod=http&login=true&login=true).
1. Query your data from {{site.data.keyword.lakehouse_short}}. For more information, see [Querying data from watsonx.data](/docs/netezza?topic=netezza-querying_watsonx.data).
