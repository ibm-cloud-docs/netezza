---

copyright:
  years:  2023
lastupdated: "2023-12-29"

keywords: IAM access for Netezza Performance Server, permissions for Netezza Performance Server, identity and access management for Netezza Performance Server, roles for Netezza Performance Server, actions for Netezza Performance Server, assigning access for Netezza Performance Server

subcollection: netezza

---

{:new_window: target="_blank"}
{:shortdesc: .shortdesc}
{:screen: .screen}
{:pre: .pre}
{:table: .aria-labeledby="caption"}
{:codeblock: .codeblock}
{:tip: .tip}
{:download: .download}
{:important: .important}
{:caption: .caption}

# Managing SAML IDP configuration for {{site.data.keyword.netezza_short}}
{: #saml-docs}
Set the following configurations for Cyclops endpoints on IDP:
{: shortdesc}

 ```bash
"service_provider_slo_url": "https://console-nz-dev-eks-cluster.us-east.data-warehouse.test.cloud.ibm.com/#/?crn=<crn_of_namespace>/v1/samlsloresponse"
```
{: codeblock}

 ```bash
"assertion_consumer_service_url": "https://console-nz-dev-eks-cluster.us-east.data-warehouse.test.cloud.ibm.com/#/?crn=<crn_of_namespace>/v1/samlacsendpoint"
```
{: codeblock}

`/ips/ssl-secret/server.pem` certificate must be configured on IDP.

Admin users can configure the following SAML configurations by using Cyclops:

 ```bash
//SAML Configuration 
     "service_provider_entity_id": "http://netezza.com/saml/acs/example" 
     "service_provider_private_key": "/ips/ssl-secret/server.key" 
     "service_provider_certificate": "/ips/ssl-secret/server.pem"

//Below parameters required to be configured for SAML SSO 
     "idp_metadata_url": "https://auth.pingone.asia/793adfb9-e7c9-4e80-a1a2-335f27066ffe/saml20/metadata/caf77459-5b2b-400d-bcb1-7b71f85d25c1" 
     "service_provider_slo_url": "https://console-nz-dev-eks-cluster.us-east.data-warehouse.test.cloud.ibm.com/#/?crn=crn_of_namespace/v1/samlsloresponse" 
     "assertion_consumer_service_url": "https://console-nz-dev-eks-cluster.us-east.data-warehouse.test.cloud.ibm.com/#/?crn=crn_of_namespace/v1/samlacsendpoint" 

//Optional parameters for SAML, If not configured default values would be used 
//"force_authn": false 
//"is_passive": false 
//"canonicalizer_id": "http://www.w3.org/2001/10/xml-exc-c14n#" 
//This value is required for ADFS
```
{: codeblock}

## Steps to get SAML slo and acs URL from NPS

1. Execute below command from `k8s` prompt:

  ```bash
  #k get dns -n ibm-nz-cyclops
  ```
  {: codeblock}

1. From the following output, you can form the URL as `HOSTNAME.DOMAIN`.

  | NAME | HOSTNAME |RECORD TYPE | DOMAIN |
  | :----------- | :----------- | :----------- | :----------- |
  | **console-public-dns** | **console-nz-dev-eks-cluster.us-east** | `data-warehouse.test.cloud.ibm.com` | **CNAME** |

  URL:

   ```bash
   console-nz-dev-eks-cluster.us-east.data-warehouse.test.cloud.ibm.com
   ```
  {: codeblock}

1. For generating a URL specific to the namespace, add the CRN number as shown:

  ```bash
  https://console-nz-dev-eks-cluster.us-east.data-warehouse.test.cloud.ibm.com/#/?crn=<crn_of_namespace>
  ```
  {: codeblock}

  ```bash
  "service_provider_slo_url": "https://console-nz-dev-eks-cluster.us-east.data-warehouse.test.cloud.ibm.com/#/?crn=<crn_of_namespace>/v1/samlsloresponse"
  ```
  {: codeblock}

  ```bash
  "assertion_consumer_service_url": "https://console-nz-dev-eks-cluster.us-east.data-warehouse.test.cloud.ibm.com/#/?crn=<crn_of_namespace>/v1/samlacsendpoint"
  ```
  {: codeblock}
