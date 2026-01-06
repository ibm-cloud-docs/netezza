---

copyright:
  years: 2023
lastupdated: "2023-10-09"

keywords: security and compliance

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}

# Overview
{: #security_compliance_overview}

{{site.data.keyword.netezza_full}} ensures that your data is secured and protected by adhering to the following security and compliance standards.

## Secure access control
{: #access_control}

### Authentication
{: #auth_sec_compl}

Both [public](/docs/netezza?topic=netezza-connecting-overview#public_endpoints) and [private](/docs/netezza?topic=netezza-connecting-overview#private_endpoints) {{site.data.keyword.netezza_short}} endpoints are accessed through an HTTPS API. Where the API endpoint requires it, the user is authenticated for every HTTPS request that {{site.data.keyword.netezza_short}} receives.

### Encryption
{: #encryptiom_sec_compl}

When transmitted, content is encrypted on any public networks by using TLS 1.2 or later.  
For more information, see [Data security and encryption](/docs/netezza?topic=netezza-data-encryption).

At rest, content is encrypted within the Cloud Data Center in the following ways:

- On AWS, by using the 256-bit AES data encryption (industry standard).
- On Azure, by using the 256-bit AES data encryption that is compliant with FIPS 140-2.

## Security compliance for Netezza
{: #sec_comp_nps}

Netezza Performance Server as a Service (NPSaaS) follows industry‑recognized security and compliance standards to help protect customer data and support regulatory requirements. The service aligns with multiple frameworks including SOC 2, ISO 27001/27017/27018, and HIPAA—by implementing rigorous operational, administrative, technical, and organizational controls. These certifications and attestations help ensure that NPSaaS maintains a secure, trustworthy, and compliant environment for managing sensitive workloads.

### SOC 2 Type 2
{: #soc2t2}

IBM provides the following Service Organization Control (SOC) report for its Netezza Performance Server as a Service (NPSaaS) managed services offering:

This report evaluates IBM’s operational controls against the criteria established by the American Institute of Certified Public Accountants (AICPA) Trust Services Principles. These principles define industry‑recognized standards for ensuring systems and controls are designed to protect customer data and maintain service integrity.
You can request access to the SOC report by contacting IBM representative.

## ISO 27017, ISO 27018
{: #iso}

{{site.data.keyword.netezza_short}} conforms to the security controls and technical and organizational measures (TOMs) that are defined in the following documents:

- [ISO 27001](https://www.iso.org/standard/27001)
- [ISO 27017](https://www.iso.org/standard/43757.html)
- [ISO 27018](https://www.iso.org/standard/76559.html)

For more information, see the [IBM Compliance Support page](https://www.ibm.com/support/pages/compliance-request-tool/search/?q=IBM%20Netezza%20Performance%20Server).

## HIPAA
{: #hipaa}

{{site.data.keyword.netezza_short}} implemented the necessary controls commensurate with the Health Insurance Portability and Accountability Act of 1996 (HIPAA) Security and Privacy Rule requirements. The controls include appropriate administrative, physical, and technical safeguards that are required of business associates in 45 CFR Part 160 and Subparts A and C of Part 164.
