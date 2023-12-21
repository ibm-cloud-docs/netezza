---

copyright:
  years:  2023
lastupdated: "2023-12-21"

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
//"service_provider_slo_url": "https://localhost:10443/v1/samlsloresponse"
```
{: codeblock}

 ```bash
//"assertion_consumer_service_url": "https://localhost:10443/v1/samlacsendpoint"
```
{: codeblock}

Admin users can configure the following SAML configurations by using Cyclops:

 ```bash
//SAML Configuration
      "service_provider_entity_id": "http://netezza.com/saml/acs/example",
      "service_provider_private_key": "/nz/crypto-keys/signing-private.key",
      "service_provider_certificate": "/nz/crypto-keys/signing-certificate.crt"
      //Below parameters required to be configured for SAML SSO
      //"idp_metadata_url": "https://auth.pingone.asia/793adfb9-e7c9-4e80-a1a2-335f27066ffe/saml20/metadata/caf77459-5b2b-400d-bcb1-7b71f85d25c1"
      //"service_provider_slo_url": "https://localhost:10443/v1/samlsloresponse"
      //"assertion_consumer_service_url": "https://localhost:10443/v1/samlacsendpoint"
      //Optional parameters for SAML, If not configured default values would be used
      //"force_authn": "false"
      //"is_passive": "false"
      //"canonicalizer_id": "http://www.w3.org/2001/10/xml-exc-c14n# " //This value is required for ADFS
 
```
{: codeblock}

## Usage of `nzcli` with SAML authentication

 ```bash
./nzcli --help
```
{: codeblock}

 ```bash
./nzcli nzstate  -u admin -pw  jwttoken -apiserver ip
```
{: codeblock}

After successful configuration of Cyclops and Identity Provider, you will get a JWT token on Cyclops GUI. You can use the JWT token to execute `nzcli` commands as follows:

```bash
./nzcli nzstate  -u SAMLUSER -pw  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -apiserver X.X.X.X
```
{: codeblock}

**_NOTE:_** Similarly, you can use many `nzcli` commands.

## Usage of `v2/signin` API with SAML authentication
`v2/signin` API is not supported for SAML authentication.