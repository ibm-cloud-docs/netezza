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

By default, you can connect to the {{site.data.keyword.netezza_short}} database or connect from the database to any device with any IP address or hostname. By using the network policies feature in the web console, you can control the Ingress traffic set of IP addresses that your {{site.data.keyword.netezza_short}} database can be connected from. Network policies feature is supported on Azure only.

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

By using this form factor, you can create a network policy as `allow`. Once you add a network policy, apart from the CIDR that is allowed, all other ingress traffic is blocked.

### Block and allow policies
{: #nw-block-allow}

#### Block policy
{: #blockpolicy}

Specifies a policy that prevents the following:

- When a customer-configured network policy is present, all ingress traffic to the {{site.data.keyword.netezza_short}} database is blocked by default.
- Any traffic that is not explicitly permitted by the configured network policy is denied.

#### Allow policy
{: #allowpolicy}

Specifies a policy that allows the following:

- Traffic explicitly permitted by the configured network policy to access the {{site.data.keyword.netezza_short}} database.
- Only the traffic matching the configured policy rules is allowed when a network policy is present.

#### Default case
{: #defaultcase}

- When no customer network policy is configured, all ingress traffic to the {{site.data.keyword.netezza_short}} database is allowed by default.
- After a customer network policy is configured, the default behavior changes to deny, and only traffic explicitly allowed by the policy is permitted.

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

- When you use `0.0.0.0/0` as an ingress allow policy, all traffic to your {{site.data.keyword.netezza_short}} database is allowed.

You can use CIDR ranges to represent public and private IP addresses.
Devices or services that are in a private or enterprise network that uses private IP addresses have gateways.
These gateways typically have network interfaces with public IP addresses, which do network address translation (NAT).
This allows entities in the private network to connect to external services.
{: note}

You must use a CIDR range that represents only the public IP addresses of gateways when you are setting `allow` policies.

### Order of evaluation of network policies
{: #nw-eval}

Policies are evaluated collectively rather than in a specific order. The allowed traffic is the union of the traffic permitted by all applicable policies. If traffic is not allowed by any applicable policy, it is denied.

You can find examples of creating policies in [Examples of network policies](/docs/netezza?topic=netezza-network-policies#nw-examples).

### Examples
{: #nw-examples}

Following are examples of how you can apply network policies.

#### Allowing connections only from a defined set of sources with the specified IP addresses
{: #use-case-1}

If you want to allow connections to the {{site.data.keyword.netezza_short}} database only from devices with IP addresses in the ranges represented by CIDR-1, CIDR-2, CIDR-3, and CIDR-4, follow these steps.

1. Create a network policy that allows ingress traffic from the required sources.

   ```sh
   Rule 1: CIDR-1    (allow)
   Rule 2: CIDR-2    (allow)
   Rule 3: CIDR-3    (allow)
   Rule 4: CIDR-4    (allow)
   ```
   {: codeblock}

   After the network policy is applied, ingress traffic to the {{site.data.keyword.netezza_short}} database is restricted to the traffic explicitly allowed by the policy. Any ingress traffic that does not match the configured allow rules is denied.

Kubernetes NetworkPolicy does not provide an explicit deny-all rule. When an ingress NetworkPolicy selects a pod, ingress traffic is denied by default unless it is allowed by an applicable NetworkPolicy rule.
{: note}

#### Allowing connections only from on premises and take backups, load or unload data by using Cloud Object Store
{: #use-case-2}

If you want applications or users from your on-premises network to connect to the {{site.data.keyword.netezza_short}} database and also allow the database to access Cloud Object Store endpoints, follow these steps.

1. Identify the public NAT gateway used by the on-premises network.

   The public NAT gateway replaces the source IP addresses of the on-premises applications and users with one of its public IP addresses, represented by CIDR-1.

1. Create a network policy that allows ingress traffic from CIDR-1.

   ```sh
   Rule 1: CIDR-1    (allow)
   ```
   {: codeblock}

   After the network policy is applied, ingress traffic from CIDR-1 is allowed, while other ingress traffic is denied by default.

1. Make connections from the database to the respective Cloud Object Store endpoints (such as AWS S3 and Azure Blob Storage).

   You must add endpoints to the allow list if you want your database admins to back up data to Cloud Object Store and developers to use external tables in applications to load and unload data.


#### Allowing connections from multiple sources by using multiple network policies
{: #use-case-3}

If you want to allow connections from multiple independent sources, you can create multiple network policies.

For example:

```sh
NetworkPolicy 1:
  CIDR-1    (allow)

NetworkPolicy 2:
  CIDR-2    (allow)

NetworkPolicy 3:
  CIDR-3    (allow)

NetworkPolicy 4:
  CIDR-4    (allow)
```
{: codeblock}

All four network policies are evaluated collectively. There is no execution order or priority between the policies.

The effective allowed traffic is the union of the traffic allowed by all applicable network policies:

- Traffic matching CIDR-1 → Allowed
- Traffic matching CIDR-2 → Allowed
- Traffic matching CIDR-3 → Allowed
- Traffic matching CIDR-4 → Allowed
- Traffic matching none of the policies → Denied

#### Default behavior when no network policy is configured
{: #use-case-default}

If no ingress network policy is configured, ingress traffic is allowed by default.

```sh
No NetworkPolicy
       |
       v
Ingress traffic
       |
       v
     ALLOW
```
{: codeblock}

After an ingress network policy is configured, the {{site.data.keyword.netezza_short}} database becomes ingress-isolated.

```sh
NetworkPolicy configured
       |
       v
Ingress traffic
       |
       +----------------------+
       |                      |
Matches an allow rule    No matching rule
       |                      |
       v                      v
     ALLOW                  DENY
```
{: codeblock}

This behavior allows you to start with the default open access and progressively restrict access by defining the specific sources that should be permitted.

##### Adding AWS S3 endpoint to network allow policies
{: #use-case-2a}

If you have a bucket, for example, in the `us-east-1` region and want to use it for backups and loading and unloading of external tables, follow these steps.

1. Provide the CIDR range that represents the complete IP address range that is associated with the S3 endpoint.

   To retrieve the CIDR ranges that are used by the S3 endpoints in a particular AWS region:

   - Follow the instructions from [How can I find the IP address ranges used by Amazon S3?](https://repost.aws/knowledge-center/s3-find-ip-address-ranges).

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

   - Follow the instructions from [here](https://docs.aws.amazon.com/vpc/latest/userguide/aws-ip-ranges.html#subscribe-notifications).

   - Add them as an allow rule as needed.


##### Adding Azure blob storage endpoints to the network allow policies.
{: #use-case-2b}

If you have storage accounts, for example, in the `East US 2` region with Azure Blob Storage for backups and loading and unloading of external tables, follow these steps.


1. Provide the CIDR range that represents the complete IP address range that is associate with the Azure Blob Storage endpoint.

   To retrieve the CIDR ranges that are used by the storage endpoints in a particular Azure region:

   - Follow the instructions from [Azure IP address ranges notifications](https://learn.microsoft.com/en-us/powershell/module/az.network/get-aznetworkservicetag?view=azps-12.5.0&viewFallbackFrom=azps-7.5.0) {: external}.

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

   - Follow the instructions from [here](https://learn.microsoft.com/en-us/powershell/module/az.network/get-aznetworkservicetag?view=azps-12.5.0&viewFallbackFrom=azps-7.5.0) {: external}.

   - Add the CIDR ranges as an allow rule as needed.

   The Azure Blob Storage endpoints do not have a single IP address that is associated with them. Adding the endpoint hostname to the allow list can give inconsistent results.
   {: note}


## AWS
{: #aws_nw_policy}

By default, the {{site.data.keyword.netezza_short}} database is accessible from any device with any IP address. However, `AWS`’s new network policies feature for Ingress connections enables you to specify and control the IP addresses that are permitted to connect to the {{site.data.keyword.netezza_short}} database, similar to the functionality provided by Azure Network policies.

### How to Enable
{: #enable_awspolicy}

To use this feature, you must create a support ticket with IBM and provide a list of IPv4 addresses or ranges in CIDR format to be whitelisted.

After this feature is implemented, any IP address not included in the whitelist will be blocked from accessing the {{site.data.keyword.netezza_short}} database.
{: note}

### Limitations
{: #limitations_aws_policy}

1. Supports only IPv4 addresses or ranges in CIDR format.
2. It does not support allowing or blocking Egress connections.
3. Restrict traffic exclusively to {{site.data.keyword.netezza_short}} database and do not apply it to other components, such as web console.
