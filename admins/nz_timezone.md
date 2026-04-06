---

copyright:
  years: 2026
lastupdated: "2026-01-08"

keywords: nz_timezone

subcollection: netezza

---

{:shortdesc: .shortdesc}
{:screen: .screen}
{:codeblock: .codeblock}
{:pre: .pre}
{:tip: .tip}
{:note: .note}
{:important: .important}
{:external: target="_blank" .external}
{:step: data-tutorial-type='step'}


# Timezone management
{: #timezn_mngmnt}

## Overview

The `nz timezone` command is used to list, view, and set timezone configurations on NPS (Netezza Performance Server) hosts. This command provides a convenient way to manage timezone settings through the NPS API.

## Syntax

```bash
nz timezone [sub-command] [options]
```

## Required Options

The following options are **required** for all operations:

| Option | Environment Variable | Description |
|--------|---------------------|-------------|
| `-apiserver <APISERVER>` | `APISERVER_URL` | The URL of the API server |
| `-u <USER>` | `NZ_USER` | NPS username for authentication |
| `-pw <PASSWORD>` | `NZ_PASSWORD` | NPS password for authentication |


## Optional Options

| Option | Environment Variable | Description |
|--------|---------------------|-------------|
| `-format <FORMAT>` | `FORMAT` | Specify the output format (e.g., JSON, table, etc.) |
| `-host <HOST>` | `NZ_HOST` | The URL of the NPS host (alternative to apiserver) |

## Getting help

To display the help information for the timezone command:

```bash
nz timezone -help
```

Or:

```bash
./nz timezone -help
```

## Sub-Commands

### 1. `ls` - List All Possible Timezone Values

Lists all available timezone values that can be set on the NPS host.

**Syntax:**
```bash
nz timezone ls -apiserver <URL> -u <USER> -pw <PASSWORD>
```

**Example:**
```bash
[nz@ipshost-0 web]$ ./nz-linux-amd64 timezone ls
  -apiserver https://nps.example.com
  -u admin
  -pw Netezza@123456789

                TIMEZONES
------------------------------------------
  Africa/Abidjan
  Africa/Accra
  Africa/Addis_Ababa
  Africa/Algiers
  Africa/Asmara
  Africa/Asmerado

```

**Use Case:** Use this command when you need to see all supported timezone options before setting a new timezone.


### 3. `set` - Set Timezone

Sets a new timezone on the NPS host.

**Syntax:**
```bash
nz timezone set -tz <TIMEZONE_VALUE> -apiserver <URL> -u <USER> -pw <PASSWORD>
```

**Example:**
```bash
./nz-linux-amd64 timezone set -tz  America/New_York -apiserver https://nps.example.com -u admin -pw REDACTED

Message:success
```

### 2. `show` - Show Current Timezone

Displays the currently configured timezone on the NPS host.

**Syntax:**
```bash
nz timezone show -apiserver <URL> -u <USER> -pw <PASSWORD>
```

**Example:**
```bash
[nz@ipshost-0 web]$ ./nz-linux-amd64 timezone show
  -apiserver https://nps.example.com
  -u admin
  -pw REDACTED

      TIMEZONE
--------------------
  America/New_York
```

**Use Case:** Use this command to verify the current timezone setting on your NPS host.
