---

copyright:
  years: 2023
lastupdated: "2023-06-01"

keywords: getting started with Netezza Performance Server, provisioning Netezza Performance Server

subcollection: netezza

---

{:shortdesc: .shortdesc}
{:screen: .screen}
{:codeblock: .codeblock}
{:pre: .pre}
{:tip: .tip}
{:note: .note}
{:important: .important}
{:external: target="_blank" .external}
{:step: data-tutorial-type='step'}

# Configuring private endpoints
{: #creating-private-endpoints}

![{{site.data.keyword.netezza_short}} network architecture diagram](../images/private_link.jpg){: caption="Image 1. Connectivity flow from a customer on-premises instance to customer cloud to Private Link to {{site.data.keyword.netezza_short}} as a Service." caption-side="bottom"}

## Configuring private endpoints for Azure
{: #private-endpoints-azure}

If you want to connect to your {{site.data.keyword.netezza_short}} instance on Azure by using [Azure PrivateLink](https://learn.microsoft.com/en-us/azure/private-link/private-link-service-overview), you must create [private endpoints](https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview) in your Azure subscriptions.

1. Provide your subscription IDs.

   When you create your private endpoint connection, the private link service must approve the request. If you provide the subscription IDs in which they are to be created, your request is approved automatically.

   - If you deployed your instance with private endpoints only, you provided your subscription IDs [during provisioning](/docs/netezza?topic=netezza-getstarted), in step **9. Configure advanced features**.

   - If you deployed your instance with public and private endpoints and did not provide your subscription IDs during provisioning, log in to the web console by using the public endpoint and set up the private link service.

      1. [Log in to the web console](/docs/netezza?topic=netezza-getstarted-console).
      1. Go to **Administration > Settings > Private endpoints**.
      1. Click **Create Private Link**.
      1. Type the subscription IDs that you want to use to set up the private endpoints in your Azure account.

         Use the **Private Link** page to update subscription IDs after private link is created.
         {: tip}

      ![Connecting to {{site.data.keyword.netezza_short}}](../images/connecting2.png){: caption="Image 2. Configure advanced features during provisioning." caption-side="bottom"}

2. Get resource ID or alias.
   You can get the resource ID either from the {{site.data.keyword.netezza_short}} web console or the IBM Cloud catalog.

   - The {{site.data.keyword.netezza_short}} web console:

      1. [Log in to the web console](/docs/netezza?topic=netezza-getstarted-console).
      1. Go to **Administration > Settings > Private endpoints**.
      1. Click **Create Private Link**.

   - The IBM Cloud catalog:

      1. Log in to your IBM Cloud account.
      1. Go to **Private endpoints > Service instance details**.


3. Create private endpoints.

   Follow the instructions described in [Create a private endpoint](https://learn.microsoft.com/en-us/azure/private-link/create-private-endpoint-portal?tabs=dynamic-ip#create-a-private-endpoint).

   During Step 5, when you are in the _Resource_ pane, select **Connect to an Azure resource by resource ID or alias** and enter the resource ID or alias you retrieved in **2. Get resource ID or alias**.

   When the private endpoints are created, the status automatically changes to **Approved**. A private IP is assigned to each of your private endpoints. The IPs are displayed in **Microsoft Azure Portal**. Use these details to [log in to your instace by using private endpoints](/docs/netezza?topic=netezza-connecting-overview#private_endpoints).

## Configuring private endpoints for AWS
{: #private-endpoints-aws}


### Pre-requisites:
{: #aws_prerequisite}

To create a VPC (Virtual Private Cloud) endpoint in the same region as your Netezza instance, follow these steps:

1. Have a VPC in the same region as your Netezza instance. For example, if you created the instance in the **eu-central-1** (Frankfurt) region, you need to have a VPC in the Frankfurt region.

1. Create two VPC endpoints in this VPC. One for outbound traffic and one for inbound traffic.

### Creating endpoints:
{: #aws_cre}

The following steps need to be repeated for the database and console VPC
endpoint.

1. Go to **VPC->Endpoint->Create Endpoint**.

   Create two endpoints:
   - to access the database and the API server using `nz tool`.
   - to access the web console.

2. Give a name tag to your endpoint. For example, `console-nz-dev-endpoint`.

3. In **Service category**, select **Other endpoint service**.

4. To verify the `VPC endpoint service` name under **Service settings**, navigate to your `instance details` page and copy the provided `VPC endpoint service` name. Then paste it on the corresponding field in **Service settings** and click **Verify**. Upon successful verification, the message **Service name verified** will display. The `VPC endpoint service` names for the database and console may differ; refer your `instance details` page for accurate values. For example:

      - `com.amazonaws.vpce.eu-central-1.vpce-svc-0c5bd5410f78fd451` is the service name for the database.

      - `com.amazonaws.vpce.eu-central-1.vpce-svc-0061f6348c1e6eba6` is the service name for the console.

5. Select the VPC and the subnets, ensuring that the selected VPC is located in the same region as where your instance is deployed, such as `eu-central-1`.

6. Select a **Security group** that permits traffic on ports `5480` and `443`.

7. Click on **Create endpoint**.

8. Go to **VPC->Endpoints** once the endpoint is created and select the endpoint to view its status.

   Once the endpoint status shows `Available`, in the **endpoint details** page, you will see the DNS names assigned to each endpoint you created. There will be one DNS name created which can be used to access the service across all subnets and one for each subnet you added in *Step 5*. The dns name specific to each subnet will have the subnet name in sub-domain, like, `eu-central-1a.vpce.amazonaws.com` for the subnet in availability zone A in **eu-central-1**. We recommend use the first dns record, which can be used to access the service across all subnets that have been added.
   {: note}

   You will have two DNS names that you will use to connect to the service created.
      - One for the database VPC endpoint.
      - One for the console VPC endpoint.
   {: note}

9. Database and API server (using nz tool) can be accessed using the DNS name using port 5480 and 443 respectively.

10. To access the console, use the following URL format:
      ```url
      https:://<dns-name>/#/?crn=<crn>
      ```
      {: codeblock}

      Example
      ```url
      https:://vpce-039389rjehrjhr37ee.eu-central-1.vpce.amazonas.com/#/?crn=crn:v1:bluemix:public:data-warehouse:eu-de:a/46e84bdc00b94e99a0e4aeda769a02b6:9e57cae1-5bdd-4574-9a64-6261b96fc85f::
      ```
      {: codeblock}


To connect to your {{site.data.keyword.netezza_short}} on AWS by using [AWS PrivateLink](https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html), you must create [private endpoints](https://docs.aws.amazon.com/whitepapers/latest/aws-privatelink/what-are-vpc-endpoints.html) in your AWS subscription.

1. Provide your service principals.

   When you create your private endpoint connection, the private link service must approve the request. Your request is approved automatically if you provide the service principals in which they are to be created.

   - If you deployed your instance with private endpoints, you must have provided your service principals [during provisioning](/docs/netezza?topic=netezza-getstarted), in step **9. Configure advanced features**.

   ![Connecting to {{site.data.keyword.netezza_short}}](../images/aws_provisioning.png){: caption="Image 3. Configure advanced features during provisioning." caption-side="bottom"}

2. Create private endpoints.

   Follow the instructions described in [Create a private endpoint](https://docs.aws.amazon.com/vpc/latest/privatelink/create-interface-endpoint.html).

   When the private endpoints are created, a private hostname is assigned to each of your private endpoints. Use these details to [log in to your instace by using private endpoints](/docs/netezza?topic=netezza-connecting-overview#private_endpoints).
