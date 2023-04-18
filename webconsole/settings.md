---

copyright:
  years: 2022
lastupdated: "2022-12-09"

keywords: web console, administering web console, administering

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}

# Settings
{: #settings}

On the *Settings* page, you can manage the following items:

- Add policies and view existing policies
- Monitoring profile
- Database maintenance

## Network policies
{: #wc-nwpolicies}

On the *Network policies* page, you can add policies and view existing policies.

You can add network policies if you belong to the `ADMINISTRATORS` group.
{: note}

For more information about network policies and exmples, see [Network policies](/docs/netezza?topic=netezza-network-policies).

### Domain standards
{: #domain-standards}

For more information on the domain standards, see [Defining network policies with Classless Inter-Domain Routing (CIDR)](/docs/netezza?topic=netezza-network-policies#nw-cidr).

### Adding network policies
{: #wc-nwpolicies-adding}

1. Go to **Administration >> Settings >> Network policies**.
1. In the *Add policy* section, type your Classless Inter-Domain Routing (CIDR) or hostname.  
   The IP address must conform to the domain standards.  
1. Select whether the policy is `Allowed` or `Blocked`.
1. Click **Save**.

### Viewing network policies
{: #wc-nwpolicies-viewing}

To view existing policies, go to **Administration >> Settings >> Network policies >> Existing policies**.

### Deleting network policies
{: #wc-nwpolicies-deleting}

1. Go to **Administration >> Settings >> Network policies >> Existing policies**.
2. Select the policy that you want to delete.
3. Click **Delete**.

You can select multiple policies to delete.
{: note}


## Monitoring profile
{: #monitoring-profile}

On the *Monitoring profile* page, you can do the following:

- Monitor the performance of your system over time.
- Collect data for historical and real time data.

To access the *Monitoring profile* page, go to **Administration >> Settings >> Monitoring profile**.

## Maintenance
{: #maintenance}

On the *Maintenance*  page, you can schedule a database maintenance and view information about scheduled maintenance windows. The scheduled maintenance of your database includes grooms and genstats.

To schedule a database maintenance slot:

1. Go to **Administration >> Settings >> Maintenance**.
1. Click **Edit**.
1. Select a time for the maintenance job.
1. Select a day or days for the maintenance job.
1. Click **Save**.
