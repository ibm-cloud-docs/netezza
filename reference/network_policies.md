---

copyright:
  years: 2023
lastupdated: "2023-05-17"

keywords: network policy, netezza network policy
subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}
{:caption: .caption}
{:note: .note}

# Network policies
{: #network-policies}

- [Azure](/docs/netezza?topic=netezza-network-policies#azure_nw_policy)
- [AWS](/docs/netezza?topic=netezza-network-policies#aws_nw_policy)

## Azure
{: #azure_nw_policy}

By default, you can connect to the {{site.data.keyword.netezza_short}} database or connect from the database to any device with any IP address or hostname.
By using the network policies feature in the web console, you can control the set of the IP addresses and hostnames that your {{site.data.keyword.netezza_short}} database can connect to or can be connected from. Network policies feature is supported on Azure only.

- If you want to restrict the destination your {{site.data.keyword.netezza_short}} instance can reach out to or can be reached from, see [Allowing connections only from a defined set of sources with the specified IP addresses and hostnames](/docs/netezza?topic=netezza-network-policies#use-case-1).

- If you want to restrict the sources that can reach out to your {{site.data.keyword.netezza_short}} instance or from which the instance can be reached, see [Allowing connections only from on premises and take backups, load or unload data by using Cloud Object Store](https://cloud.ibm.com/docs/netezza?topic=netezza-network-policies#use-case-2).

### Limitations
{: #limitations}

1. Network policies support only `IPv4` addresses.
1. Network policies can support a maximum of 1000 network policies.
1. Network policies restrict traffic only to the {{site.data.keyword.netezza_short}} database.
   They are not applicable to other components, such as the web console.

### Form factors
{: #nw-overview}

Network policies are defined by:

1. [Classless Inter-domain Routing (CIDR) notation](https://datatracker.ietf.org/doc/html/rfc4632).
2. [DNS hostnames](https://datatracker.ietf.org/doc/html/rfc1123).

By using these form-factors, you can create a network policy as either an `allow` or a `block` policy.

### Block and allow policies
{: #nw-block-allow}

#### Block policy
{: #blockpolicy}

Specifies a type of policy that prevents you from the following:

- Connecting to the {{site.data.keyword.netezza_short}} database by using any device or service.

- Connecting from the {{site.data.keyword.netezza_short}} database to any device or service that has either the specified hostname or an IP address in the range that is specified by CIDR.

#### Allow policy
{: #allowpolicy}

Specifies a policy that allows you to do the following:

- Connecting to the {{site.data.keyword.netezza_short}} database by using any device or service.

- Connecting from the {{site.data.keyword.netezza_short}} database to any device or service that has either the specified hostname or an IP address in the range that is specified by CIDR.

You can use the combination of allow and block (deny) policies to restrict connections to and from the {{site.data.keyword.netezza_short}} database to the provided set of IP addresses and hostnames.

### Defining network policies
{: #define-np}

#### Defining network policies with Classless Inter-Domain Routing (CIDR)
{: #nw-cidr}

With {{site.data.keyword.netezza_short}}, you can specify a range of IP addresses by using Classless Inter-Domain Routing (CIDR) in network policies.

A CIDR notation is a compact representation of an IP address and its associated network mask.

```sh
<ip_address>/<prefix_length>
```
{: codeblock}

For example, `76.168.0.0/24` represents IP addresses in the range of `76.168.0.0` and `76.168.0.62`

`0.0.0.0/0` is a special case of a CIDR notation, which is allowed. Use it with caution because of the following reasons:

- When you use `0.0.0.0/0` as a block policy, all traffic to and from your {{site.data.keyword.netezza_short}} database is restricted.

- When you use `0.0.0.0/0`as an allow policy, all traffic to and from your {{site.data.keyword.netezza_short}} database is allowed.

You can use CIDR ranges to represent public and private IP addresses.
Devices or services that are in a private or enterprise network that uses private IP addresses have gateways.
These gateways typically have network interfaces with public IP addresses, which do network address translation (NAT).
This allows entities in the private network to connect to external services.
{: note}

You must use a CIDR range that represents only the public IP addresses of gateways when you are setting `allow` and `block` policies.

Do not specify a CIDR range that represents private IP addresses space as block policies. You might impact the functioning of the database.

#### Defining network policies with DNS hostnames
{: #nw-defining-DNS}

With {{site.data.keyword.netezza_short}}, you can specify DNS hostnames in network policies.

DNS hostnames are names that are assigned to devices or services that serve as their network identity and are used to connect with them. An example of DNS hostname is `cloud.ibm.com`.

If you use a DNS hostname in policies, the local DNS name resolves the hostname to a single static IP address in the {{site.data.keyword.netezza_short}} instance so that the policy can work effectively.

If the hostname resolves to multiple IP addresses or if the assigned IP addresses can change (for example, load balancer), make sure that you provide the CIDR range of those IP addresses in the policy rather than the DNS hostname.

### Domain Name Server (DNS) resolution
{: #nw-dns}

When you use DNS hostname in a policy, the database tries to resolve the domain by using the local name server on the node.
If you use domain names that typically are not cached by the local name servers, for example, a service that is not native to or provided by the cloud infrastructure provider, the local name servers cannot resolve to it.

In such scenarios, you can do one of the following:

- Add the DNS server's IP address in the allow rule so that the database can resolve the hostname to its IP address.

- Provide the complete CIDR range that is used by the device or the service.

### Order of evaluation of network policies
{: #nw-eval}

The **allow** policies are evaluated first. Then, the **deny** policies.

During the evaluation, each policy is evaluated in the order that they are defined, from first to last.

The first rule that matches the incoming or outgoing connection is applied and subsequent rules are ignored for that connection.

You can find examples of creating policies in **Examples of network policies**.

### Creating and listing network policies
{: #nw-creating-listing}

You can create network policies if you belong to the `ADMINISTRATORS` group.

To create and view existing network policies in the {{site.data.keyword.netezza_short}} web console, select **Administration > Settings > Network Policies**. For more information about creating network policies with the web console, see [Network policies with the web console](/docs/netezza?topic=netezza-settings&interface=ui).

### Examples
{: #nw-examples}

Following are examples of how you can apply network policies.

#### Allowing connections only from a defined set of sources with the specified IP addresses and hostnames
{: #use-case-1}

If you want to allow connections to the {{site.data.keyword.netezza_short}} database only from devices with IP addresses in the range that is represented by CIDR-1, CIDR-2, and hostnames H1 and H2, and reject connections from all other sources, follow these steps.

1. Create the policies in order from `Rule 1` to `Rule 5`.

   ```sh
   Rule 1: CIDR-1    (allow)
   Rule 2: CIDR-2    (allow)
   Rule 3: H1        (allow)
   Rule 4: H2        (allow)
   Rule 5: 0.0.0.0/0 (deny)
   ```
   {: codeblock}

   These rules ensure that connections are matched against `Rule 1-4` to determine whether they can be allowed. If they are not allowed, `Rule 5` rejects them.

   If someone is trying to connect to the {{site.data.keyword.netezza_short}} database with hostnames `H1` and `H2`, the database first tries to resolve the hostname to its IP address to complete the connection. Because the database might not have the DNS entry cached locally, the database tries to resolve the hostname by using a public DNS server. The DNS lookup fails because Rule 5 is in place. As a result, the connection attempt fails.

2. Add the public authoritative DNS server hostname or CIDR (DNS-1) to the allow rules for the DNS lookup to succeed.

   ```sh
   Rule 1: CIDR-1    (allow)
   Rule 2: CIDR-2    (allow)
   Rule 3: H1        (allow)
   Rule 4: H2        (allow)
   Rule 5: DNS-1     (allow)
   Rule 6: 0.0.0.0/0 (deny)
   ```
   {: codeblock}

   The new rule is added as an **allow** rule (*Rule 5*).

#### Allowing connections only from on premises and take backups, load or unload data by using Cloud Object Store
{: #use-case-2}

If you want applications or users only from their on-premises network to connect to their {{site.data.keyword.netezza_short}} database, follow these steps.

1. Use a public NAT gateway.

   The on-premises network is a private enterprise network, which uses a private IP address space. If the applications and users want to connect to services outside the on-premises network, they must use a public NAT gateway.

   The public NAT gateway has interfaces with public IP addresses in a range that is represented by CIDR-1 and replaces the source IP address of the instances in the enterprise network with one of the public IP address of the NAT gateway.

   As a result, external applications see all the traffic that comes from one of the public interfaces of the NAT gateway that is represented by CIDR-1.

1. Add CIDR-1 as an `allow` rule (Rule 1).

   ```sh
   Rule 1: CIDR-1    (allow)
   ```
   {: codeblock}

1. Add a **deny all** rule (*Rule 2*) to restrict connections that originate only from the on-premises network.

   ```sh
   Rule 1: CIDR-1    (allow)
   Rule 2: 0.0.0.0/0 (deny)
   ```
   {: codeblock}

1. Make connections from the database to the respective Cloud Object Store endpoints (such as AWS S3 and Azure Blob Storage).

   You must add endpoints to the allows list if you want your database admins to back up data to Cloud Object Store and developers to use external tables in applications to load and unload data.


##### Adding AWS S3 endpoint to network allow policies
{: #use-case-2a}

If you have a bucket, for example, in the `us-east-1` region and want to use it for backups and loading and unloading of external tables, follow these steps.

1. Provide the CIDR range that represents the complete IP address range that is associated with the S3 endpoint.

   To retrieve the CIDR ranges that are used by the S3 endpoints in a particular AWS region:

   - Follow the instructions from [How can I find the IP address ranges used by Amazon S3?](https://aws.amazon.com/premiumsupport/knowledge-center/s3-find-ip-address-ranges/).

     ```sh
     curl https://ip-ranges.amazonaws.com/ip-ranges.json |\
         jq -r '.prefixes[] |
                select(.region=="us-east-1") |
                select(.service=="S3") |
                .ip_prefix'

     18.34.0.0/19
     54.231.0.0/16
     52.216.0.0/15
     18.34.232.0/21
     3.5.0.0/19
     44.192.134.240/28
     44.192.140.64/28
     ```
     {: codeblock}

   - Add the CIDR ranges to the allow lists.

     ```sh
     Rule 1: CIDR-1             (allow)
     Rule 2: 18.34.0.0/19       (allow)
     Rule 3: 54.231.0.0/16      (allow)
     Rule 4: 52.216.0.0/15      (allow)
     Rule 5: 18.34.232.0/21     (allow)
     Rule 6: 3.5.0.0/19         (allow)
     Rule 7: 44.192.134.240/28  (allow)
     Rule 8: 44.192.140.64/28   (allow)
     Rule 2: 0.0.0.0/0          (deny)
     ```
     {: codeblock}

    The AWS S3 endpoints do not have a single IP address that is associated with them. Adding the S3 endpoint hostname to the allow list can give inconsistent results.
    {: note}

1. If you want to use or connect from any other AWS service, add to the `allow` rule the CIDR range that is associated with those respective service endpoints.

   To retrieve the CIDR range for various AWS services:

   - Follow the instructions from [here](https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html#subscribe-notifications).

   - Add them as an allow rule as needed.


##### Adding Azure blob storage endpoints to the network allow policies.
{: #use-case-2b}

If you have storage accounts, for example, in the `East US 2` region with Azure Blob Storage for backups and loading and unloading of external tables, follow these steps.


1. Provide the CIDR range that represents the complete IP address range that is associate with the Azure Blob Storage endpoint.

   To retrieve the CIDR ranges that are used by the storage endpoints in a particular Azure region:

   - Follow the instructions from [Azure IP address ranges notifications](https://docs.microsoft.com/en-us/powershell/module/az.network/get-aznetworkservicetag?view=azps-7.5.0).

     ```she
     > $serviceTags = Get-AzNetworkServiceTag -Location eastus2
     > $serviceTags.Values | Where-Object { $_.Name -like "Storage*" -and $_.Properties.Region -eq "eastus2" }

     Name             : Storage.EastUS2
     System Service   : AzureStorage
     Region           : eastus2
     Address Prefixes : {13.68.120.64/28, 13.77.112.16/28, 13.77.112.32/28, 13.77.112.112/28…}
     Change Number    : 6

     Name             : Storage.EastUS2Stage
     System Service   : AzureStorage
     Region           : eastus2
     Address Prefixes : 137.116.2.64/27
     Change Number    : 1
     ```
     {: codeblock}

   - Add the CIDR ranges to your allow lists.

     ```sh
     Rule 1: CIDR-1             (allow)
     Rule 2: 13.68.120.64/28    (allow)
     Rule 3: 13.77.112.16/28    (allow)
     Rule 4: 13.77.112.32/28    (allow)
     Rule 5: 13.77.112.112/28   (allow)
     Rule 6: 137.116.2.64/27    (allow)
     Rule 2: 0.0.0.0/0          (deny)
     ```
     {: codeblock}

1. If you want to use or connect from any other Azure service, add to the allow rule the CIDR range that is associated with those respective service endpoints.
   To retrieve the CIDR range for various Azure services:

   - Follow the instructions from [here](https://docs.microsoft.com/en-us/powershell/module/az.network/get-aznetworkservicetag?view=azps-7.5.0).

   - Add the CIDR ranges as an allow rule as needed.

   The Azure Blob Storage endpoints do not have a single IP address that is associated with them. Adding the endpoint hostname to the allow list can give inconsistent results.
   {: note}


## AWS
{: #aws_nw_policy}

By default, the {{site.data.keyword.netezza_short}} database is accessible from any device with any IP address. However, `AWS`’s new network policies feature for Ingress connections enables you to specify and control the IP addresses that are permitted to connect to the {{site.data.keyword.netezza_short}} database, similar to the functionality provided by Azure Network policies.

### How to Enable
{: #enable_awspolicy}

To use this feature, customers must create a support ticket with IBM and provide a list of IPv4 addresses or ranges in CIDR format to be whitelisted.

After this feature is implemented, any IP address not included in the whitelist will be blocked from accessing the {{site.data.keyword.netezza_short}} database.
{: note}

### Limitations
{: #limitations_aws_policy}

1. Supports only IPv4 addresses or ranges in CIDR format.
2. It does not support allowing or blocking Egress connections.
3. Restrict traffic exclusively to {{site.data.keyword.netezza_short}} database and do not apply it to other components, such as web console.
