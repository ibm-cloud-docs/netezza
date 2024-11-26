---

copyright:
  years:  2023
lastupdated: "2023-11-21"

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
{: #integratenps_watsonx.data_mcsp}

You can integrate your {{site.data.keyword.netezza_full}} instance with {{site.data.keyword.lakehouse_short}}.

## Before you begin
{: #prereqswatsonx.data_mcsp}

Ensure that you obtained the IBM API key by following the steps:

1. Login to the IBM SaaS Console.
1. Select the account that is associated with your subscription. The **Subscriptions** page opens.
1. From the **Subscriptions** page, find the subscription for the instance that you want to add a service ID to. Then, click **View subscription details**.
1. Click the instance where you want to add a service ID. The **Instance details** tab opens.
1. Select the **Service IDs** tab and click **Create service ID**. The **Create service ID** window opens.
1. In the window, enter a name and choose a role for your service ID.
   - The **Service admin** role can view, create, update, and delete users, roles, and groups for an instance.
   - The **Service owner** role can take the same actions as the Service admin.
   - The **Service user** role can view the instance, but this role doesn't include permissions that are related to user management like adding more users.
   -  Service level roles:
      - **MetastoreAccess** - External users with read access to the metadata through HMS REST APIs in {{site.data.keyword.lakehouse_short}}.
      - **DataAccess** - Only supports IKC-{{site.data.keyword.lakehouse_short}} service-to-service authorization to profile data in {{site.data.keyword.lakehouse_short}}. 
1. Click **Create**. The service ID is created and appears in the table on the **Service IDs** tab.
1. Click **Options** for the service ID and click **View service ID details**.
1. From the **Service ID** page, click **Generate key**.
1. In the **Generate API key** window, enter an API key name and the expiration date and click **Generate key**. 

   You must name the API key as `ibmlhapikey_Serviceid-<ID_OF_THE_NEW_SERVICE_ID_CREATED>`. The `ID_OF_THE_NEW_SERVICE_ID_CREATED` can be obtained from the MCSP SaaS console. For example: `ibmlhapikey_Serviceid-b8fd5bbf-a95e-4664-85f7-282047433195`
   {: note}
   
1. Copy the API key from the window.
   
## Integrating {{site.data.keyword.netezza_short}} instance or remote client with {{site.data.keyword.lakehouse_short}} by using `nzcli`
{: #integratesteps_watsonx.data_mcsp}

1. Download `nz` tool.

   ```sql
   curl -o nz -k <name of the API server URL from namespace provisioning page>/v2/download/nz-linux-amd64
   ```
   {: codeblock}

1. Set up the environment variables.

   ```sql
   export APISERVER_URL=<name of the API server URL from namespace provisioning page>
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
    ./nz setup-hms create -connection-name <your connection name> -hms-token <your API key obtained in the `Before you begin` section> -hms-user `ibmlhapikey_Serviceid-<ID_OF_THE_NEW_SERVICE_ID_CREATED>` -url <thrift endpoint URL retrieved from watsonx.data instance>
   ```
   {: codeblock}

Where:

- `url` is the thrift endpoint URL, which you retrieve from {{site.data.keyword.lakehouse_short}} instance. For more information, see [Getting the HMS endpoint](/docs/watsonxdata?topic=watsonxdata-hms#hms_url). Ensure that the `url` is in the following `thrift://<host>:<port>` format when you run `nz setup-hms` command.
- `hms-user` is by default `ibmlhapikey_Serviceid-<ID_OF_THE_NEW_SERVICE_ID_CREATED>`.
- `hms-token` is your API key obtained in the **Before you begin** section.

After you registered to {{site.data.keyword.lakehouse_short}}, you can create a remote database.

1. Log in to your {{site.data.keyword.netezza_short}} web console or download `nzsql` command-line tool from [here](https://www.ibm.com/support/fixcentral/swg/downloadFixes?parent=ibm%7EWebSphere&product=ibm/WebSphere/IBM+Cloud+Private+for+Data+System&release=NPS_11.2&platform=All&function=fixId&fixids=11.2.2.7-WS-ICPDS-NPS-Clients-fp20684&includeRequisites=1&includeSupersedes=0&downloadMethod=http&login=true&login=true).
1. Query your data from {{site.data.keyword.lakehouse_short}}. For more information, see [Querying data from watsonx.data](/docs/netezza?topic=netezza-querying_watsonx.data).
