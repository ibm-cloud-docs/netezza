---

copyright:
  years: 2024
lastupdated: "2024-06-14"

keywords: autopause, auto-pause, autopause and resume, auto-pause and resume, auto-resume, resume, auto resuming Netezza, auto pausing Netezza

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}

# Auto-pausing and Auto-resuming
{: #autopause}

With {{site.data.keyword.netezza_full}}, you can auto-pause and auto-resume the system. The feature is not enabled by default, you have to turn it on by using the web console.

When auto-pause and auto-resume is enabled, {{site.data.keyword.netezza_short}} automatically detects inactivity and pauses its operations along with your billing. As soon as an activity (queries against the catalog are not considered activities) is detected on the system, it automatically resumes the operations and starts billing again.

While the system is in the auto-paused state, you can do an on demand (ad hoc) or a scheduled resume.

## Auto-pausing and Auto-resuming with the web console
{: #pnr-webconsole}

For more information, see [Auto-pausing and auto-resuming](/docs/netezza?topic=netezza-pnr-console&interface=ui).
