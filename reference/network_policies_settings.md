---

copyright:
  years: 2023
lastupdated: "2023-03-02"

keywords: public isolation for Netezza Performance Server, compute isolation for Netezza Performance Server, Netezza Performance Server architecture, workload isolation in Netezza Performance Server

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}
{:caption: .caption}

# Network policies
{: #wc-nwpolicies}

On the *Network policies* page, you can add policies and view existing policies.

**Network policies** and **Private link** tabs are applicable only for Azure. 
{: note}

You can add network policies if you belong to the `ADMINISTRATORS` group.
{: note}

## Adding network policies
{: #wc-nwpolicies-adding}

1. Go to **Administration >> Settings >> Network policies**.
1. In the *Add policy* panel, enter your Classless Inter-Domain Routing (CIDR) or hostname.
   The IP address must conform to the domain standards.

1. Select whether the policy is `Allowed` or `Blocked`.
1. Click **Save**.

## Domain standards
{: #domain-standards}

For more information on the domain standards, see [Defining network policies with Classless Inter-Domain Routing (CIDR)](/docs/netezza?topic=netezza-network-policies#nw-cidr).

## Viewing network policies
{: #wc-nwpolicies-viewing}

To view existing policies, go to **Administration >> Settings >> Network policies >> Existing policies**.

## Deleting network policies
{: #wc-nwpolicies-deleting}

To delete a policy:

1. Go to **Administration >> Settings >> Network policies >> Existing policies**.
2. Select the policy that you want to delete.
3. Click **Delete**.

You can select multiple policies to delete them.
{: note}

For more information about network policies and use cases, see [Network policies](/docs/netezza?topic=netezza-network-policies).
