---

copyright:
  years: 2021
lastupdated: "2022-05-23"

keywords: Netezza Performance Server release notes, what's new,

subcollection: netezza

---

{:shortdesc: .shortdesc}
{:screen: .screen}  
{:codeblock: .codeblock}  
{:pre: .pre}
{:tip: .tip}
{:note: .note}
{:external: target="_blank" .external}
{:step: data-tutorial-type='step'}

# Release notes for {{site.data.keyword.netezza_short}} as a Service
{: #my-service-relnotes}

## June 2022
{: #june2022}

As of June 14, 2022, several fixes, and a stability patch for critical issues.

### Fixes
{: #fjune2022}

- Fixed the issue with queries failing with error **No such table exists** on a second attempt.
- Fixed the issue with DBOS crashing while redumping modified plan to file.
- Fixed the issue with intermittent hangs.
- Fixed **ERROR : unexpected error 12** that occurred when you ran merge queries dynamically through a stored procedure.
- Fixed the issue with memory leaks with stored procedures that occurred after the _ENABLE_SPROC_HIST_LOGGING_ variable was enabled.
- Fixed the issue with postmaster crashing by compiling **librest** with Go 1.18.

### Known issues
{: #kijune2022}

- If a large database backup to Azure Blob Storage with a single stream fails, update the number of streams to 16 and retry the backup.


## May 2022
{: #may2022}

As of May 20, 2022, workload enhacements and network policies support is added.

### New features
{: #nfmay2022}

- Two new workload contours  NC0 and NC3 are available for a wider range of configuration options for provisioning and scaling.
- Network policies support is added. You can control the set of the IP addresses and hostnames that your {{site.data.keyword.netezza_short}} database can connect to or can be connected from by using network policies. For more information, see [Network policies](/docs/netezza?topic=netezza-network-policies) and [Network policies with the web console](/docs/netezza?topic=netezza-settings&interface=ui).

### Known issues
{: #kimay2022}
- Netezza SQL Editor does not accept input for query requests. You can construct equivalent query requests by using [the command line](https://www.ibm.com/docs/en/netezza?topic=service-command-line-interface).

## March 2022
{: #march2022}

As of March 17, 2022, the {{site.data.keyword.netezza_short}} web console is available in the following languages: English, German, French, Spanish, Italian, Brazilian, Japanese, Chinese Simplified, Chinese Traditional, and Korean.


For release notes for other {{site.data.keyword.netezza_short}} deployment options, see [this page](https://www.ibm.com/docs/en/netezza?topic=netezza-release-notes).
