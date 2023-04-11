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
      
- If you downloaded and installed `nzsql`, connect to {{site.data.keyword.netezza_short}} as the `admin` user by using [the `nzsql` command](https://www.ibm.com/docs/en/netezza?topic=commands-nzsql-command).  
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

- If you did not donwload and install `nzsql`, complete these steps:

1. Download the package from Fix Central and install it as desribed in [Installing client packages](https://www.ibm.com/docs/en/netezza?topic=service-installing-client-software-packages).  
1. Ensure that you have the correct path set up to run `nzsql` commands.  
   See:  
   - [Path for {{site.data.keyword.netezza_short}} CLI client commands](https://www.ibm.com/docs/en/netezza?topic=inpsccls-path-netezza-performance-server-cli-client-commands-2)
   - [The more command on Windows](https://www.ibm.com/docs/en/netezza?topic=commands-nzsql-command)
1. Connect to {{site.data.keyword.netezza_short}} by using `nzsql` by using [the `nzsql` command](https://www.ibm.com/docs/en/netezza?topic=commands-nzsql-command).  
   As explained in [Connecting to {{site.data.keyword.netezza_short}}](/docs/netezza?topic=netezza-connecting-overview), you can provision {{site.data.keyword.netezza_short}} with a private endpoint or public and private endpoints. Each endpoint type provides a set of two hostnames that you can connect to {{site.data.keyword.netezza_short}}.



## Loading databases
{: #loading-dbs}

1. Create an external table. https://www.ibm.com/docs/en/netezza?topic=dl-external-tables-2

An external table allows to treat an external flat file as a database table. You can use external tables to access files that are stored on the Netezza Performance Server host server. Additionally, Netezza Performance Server can treat a file on a client system as a remote external table by using the REMOTESOURCE option.
Netezza Performance Server environments also support system tables, which are stored on the host, and user tables, which are stored on the disks in the storage arrays.

You can use external tables to load data into a Netezza system or store data outside a Netezza system. If you use an external table to store data outside a system, you can transfer the data to another application or use the data as a table backup. You can also use data from an external table as part of an SQL query.

An external table has a definition, also called a table schema, but the actual data exists outside the Netezza Performance Server system database. After you create the external table definition, you can use INSERT INTO statements to load data from the external file into a database table or use SELECT FROM statements to query the external table.

1. 
