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

## Download certificate from console admin profile
{: #method1_acq_cert_profile}

The simplest way to download the SSL certificate is directly from the console profile section:

1. Log in to the Netezza Performance Server console.
2. Navigate to the **Console Profile** section.
3. Click the **Download Certificate** option.
4. The `certificate.crt` file downloads automatically to your system.

This method provides a pre-configured certificate file that is ready to use for secure connections.

### Use certificate to connect to netezza
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
