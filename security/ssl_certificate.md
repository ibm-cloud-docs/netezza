---

copyright:
  years: 2025

lastupdated: "2025-10-30"

keywords: isolation for Netezza Performance Server, service endpoints for Netezza Performance Server, private network for Netezza Performance Server, network isolation in Netezza Performance Server, non-public routes for Netezza Performance Server, private connection for Netezza Performance Server, private connectivity for Netezza Performance Server, endpoints,

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:screen: .screen}
{:pre: .pre}
{:table: .aria-labeledby="caption"}
{:codeblock: .codeblock}
{:tip: .tip}
{:note: .note}
{:important: .important}

# Steps to acquire SSL certificates for netezza
{: #step_acq_sslcert}

This guide outlines two methods to acquire SSL certificates for secure connection to a Netezza instance.

## Acquire certificates via browser
{: #method1_acq_cert_brows}

### 1: Download certificates from browser
{: #downl_cert_brows}

1. Open the **console link** to the instance in any browser.
2. Locate the **lock icon** or “Secure” indicator next to the URL.
3. Click **"Connection is secure"**, then click **"Certificate is valid"**.
4. In the certificate dialog, go to the **"Details"** tab.
5. Under **“Certificate Hierarchy”**, select each certificate one by one and click **"Export..."**.
6. You should now have **three certificates** downloaded to your system.

### 2: Combine certificates
{: #comb_certi}

Create a file named `certificate.crt` and paste the contents of the two certificates in the following order:

- **Intermediate Certificate** (ends with `CA1`)
- **Root Certificate** (ends with `GA2`)

### 3: Use certificate to connect to netezza
{: #use_certi_conn_nps}

Use the `certificate.crt` file with the `nzsql` utility:

```bash
$ nzsql -h xxxxxxxx -db system -securityLevel onlySecured -caCertFile certificate.crt -u admin -pw XXXXX

Welcome to nzsql, the IBM Netezza SQL interactive terminal.

Type:  \h for help with SQL commands
       \? for help on internal slash commands
       \g or terminate with semicolon to execute query
       \q to quit

SSL enabled connection. Cipher: TLS_AES_256_GCM_SHA384, bits: 256, protocol: TLSv1.3

SYSTEM.ADMIN(ADMIN)=> \q
```

You now have the `certificate.crt` file ready. This file can be shared with the customer for secure access.
