---

copyright:
  years:  2023
lastupdated: "2023-04-06"

keywords: loading databases into netezza, loading databases

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

# Getting started loading data
{: #load-dbs}

One of the easiest way to load and unload data to {{site.data.keyword.netezza_short}} is by using the `nzsql` command. `nzsql` invokes an SQL command interpreter on the {{site.data.keyword.netezza_short}} host or a client system that you can use to manage database operations. 
{: #shortdesc}

Alternatively, you can use `nzpy`, `nzgo`, and the ODBC/JDBC drivers to load and unload data. You cannot load and unload data by using the web console.


## Before you begin
{: #loading-prereqs}
      
Connect to {{site.data.keyword.netezza_short}} as the `admin` user by using [the `nzsql` command](https://www.ibm.com/docs/en/netezza?topic=commands-nzsql-command).  
As explained in [Connecting to {{site.data.keyword.netezza_short}}](/docs/netezza?topic=netezza-connecting-overview), you can provision {{site.data.keyword.netezza_short}} with a private endpoint or public and private endpoints. Each endpoint type provides a set of two hostnames that you can connect to {{site.data.keyword.netezza_short}}.

```sql
nzsql -host NPS HOST IP -u USER -pw PASSWORD
```
{: codeblock}

| Option            | Description |
| -----------       | ----------- |
| -host NPS HOST IP | Specifies the IP address of your instance.  \n To retrieve `NPS HOST IP`:  \n 1. Log in to your IBM Cloud account. \n 1. Go to **Private endpoints > Service instance details**. \n 1. Select your instance.  \n Your instance IP address is displayed on the page now.|
| -u USER           | Specifies the user name.      |
| -p PASSWORD       | Specifies the password for the user. |



Example:

```sql
nzsql -host X.XX.XXX.XXX -u admin -pw password
Welcome to nzsql, the IBM Netezza SQL interactive terminal.
Type:  \h for help with SQL commands
       \? for help on internal slash commands
       \g or terminate with semicolon to execute query
       \q to quit

SYSTEM.ADMIN(ADMIN)=> 
```
{: codeblock}


If you did not install `nzsql`, complete these steps:
1. Download the package from Fix Central and install it as desribed in [Installing client packages](https://www.ibm.com/docs/en/netezza?topic=service-installing-client-software-packages).  
1. Ensure that you have the correct path set up to run `nzsql` commands.  
   See:  
   - [Path for {{site.data.keyword.netezza_short}} CLI client commands](https://www.ibm.com/docs/en/netezza?topic=inpsccls-path-netezza-performance-server-cli-client-commands-2)
   - [The more command on Windows](https://www.ibm.com/docs/en/netezza?topic=commands-nzsql-command)
1. Connect to {{site.data.keyword.netezza_short}} by using `nzsql`.   


## Loading databases
{: #loading-dbs}




1. set appropriate path and invoke nzsql

https://www.ibm.com/docs/en/netezza?topic=sc-nzsql-command-2