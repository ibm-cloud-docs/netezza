---

copyright:
  years:  2025
lastupdated: "2025-06-30"

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
{:note: .note}

# Usage of ODBC driver with OIDC authentication
{: #usage-odbc-oidc}

Configure and use OIDC authentication with an ODBC client to connect to Netezza Performance Server.

## Configuration steps for the OIDC ODBC driver
{: #conf-oidc-odbc}

### 1. Select OIDC as the authentication mode
{: #sel-oidc-auth-mode}

Provide the following details:

- **Client ID**
- **Tenant ID**
- **Client Secret**
- **Authentication Timeout** (Optional): Specifies the maximum time (in minutes) allowed for the user to complete the OIDC authentication process.
    - **Default**: 3 minutes
    - **Valid Range**: 1 to 9 minutes
    - If the user does not authenticate within this time, the process will time out and fail.

### 2. Add redirect URI to Azure Identity Provider (IdP)
{: #add-red-url-idp}

Ensure the following redirect URI is added to your Azure IdP configuration:

```url
http://localhost:8888/callback
```

This URI must be registered in the Azure IdP to enable successful redirection during authentication. For more information, see [Configure redirect URI on Azure IdP](/docs/netezza?topic=netezza-oidc-docs#cruai).
{: note}

### 3. Set the `NZREST` environment variable
{: #set-env-var}

Define the public URL of the `nzrest` service as the value of the `NZREST` environment variable.

```bash
export NZREST=<public-url-of-nzrest-service>
```

Replace `<public-url-of-nzrest-service>` with the actual URL.

## How to authenticate Netezza Performance Server with OIDC
{: #auth-nps-oidc}

### 1. Initiate the token request
{: #init-tok-req}

- Click the **Get Token** button, after entering the required parameters in the ODBC driver. This action will launch your default web browser and open the authorization URL.

### 2. Authenticate via browser
{: #auth-via-browser}

Authenticate using the browser window that opens.
Once authentication is successful:

- The token is returned to the ODBC driver.
- The **Password** field is automatically populated with the retrieved token.

The UI will remain unresponsive until authentication either succeeds or times out. Even if the browser is closed or authentication fails, the UI will stay frozen until the timeout period ends.
{: note}

### 3. Register the OIDC user in Netezza
{: #reg-oidc-netezza}

Ensure that the user account used for browser-based authentication is registered in Netezza with external OIDC authentication enabled.

You can register the OIDC user using either of the following methods:

- [Configure Azure OIDC authentication using the Netezza UI](/docs/netezza?topic=netezza-enable_oidciamauth#setting_oidc_wc)
- [Configure Azure OIDC authentication using the command-line](/docs/netezza?topic=netezza-enable_oidciamauth#oidcmprocedure)

### 4. Test the connection
{: #test-conn}

Click **Test Connection** in the driver to verify connectivity to NPS.
Once the connection is successful, the same DSN can be reused to integrate Netezza with other tools.

After successful OIDC authentication, the user receives a 24-hour password. This password is automatically filled in the driver, enabling direct connection to Netezza. This feature supports **Single Sign-On (SSO)**.
{: note}
