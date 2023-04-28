---

copyright:
  years:  2023
lastupdated: "2023-04-28"

keywords: loading datainto netezza, loading databases, loading data, load your data on netezza performance server, loading data from local systems, loading data from S3

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

# Loading data to Netezza Performance Server
{: #load-dbs}

There are different ways in which you can load your data on {{site.data.keyword.netezza_full}}. Learn how to load data [from your local machine](/docs/netezza?topic=netezza-load-dbs#load-data-nzsql) or [from S3](/docs/netezza?topic=netezza-load-dbs#load-data-s3).

## Before you begin
{: #loading-prereqs}
      
1. Download the client packages from Fix Central and install them as described in [Installing client packages](https://www.ibm.com/docs/en/netezza?topic=npsda-installing-client-software-packages-2).

   One of the easiest ways to upload your data to {{site.data.keyword.netezza_short}} is by using the `nzsql` command. `nzsql` provides an interface that you can use to run SQL commands on the {{site.data.keyword.netezza_short}} host.
   {: tip}
     
   You cannot use the web console to load data.

1. Log in to Netezza Performance Server.

   In this example, the [the `nzsql` command](https://www.ibm.com/docs/en/netezza?topic=commands-nzsql-command) is used, but you can use other clients.
   
   As explained in [Connecting to {{site.data.keyword.netezza_short}}](/docs/netezza?topic=netezza-connecting-overview), you can provision {{site.data.keyword.netezza_short}} with a private endpoint or public and private endpoints. Each endpoint type provides a set of two hostnames that you can connect to {{site.data.keyword.netezza_short}}.

   To load data, you must be the admin user, or the owner of the database or schema. If you are loading data for the first time and you are not loading data to a preexisting table, you also must have the `Create Table` privilege. If you need to change user privileges, see [Managing users](/docs/netezza?topic=netezza-users-groups#users).
   
   ```sql
   nzsql -host <nps_host_ip> -u <user> -pw <password>
   ```
   {: codeblock}
   
   | Option            | Description |
   | -----------       | ----------- |
   | -host nps_host_ip | Specifies the IP address of your instance.  \n To retrieve `NPS HOST IP`:  \n 1. Log in to your IBM Cloud account. \n 1. Go to **Private endpoints > Service instance details**. \n 1. Select your instance.  \n Your instance IP address is displayed on the page now.|
   | -u user           | Specifies the user name.      |
   | -p password       | Specifies the password for the user. |
   
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

## Loading data from local systems
{: #load-data-nzsql}


1. Prepare the local data file that you want to load:
   
    1. Note the columns.
    1. Note the location of the file.
    1. Ensure that the data is saved in a delimited file, such as a comma-separated (CSV) file.

1. Create a table by using the [`CREATE TABLE AS`](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-table-as-2) command.  

   The [`CREATE TABLE AS`] command creates a table on {{site.data.keyword.netezza_short}} and fills it with the data from your local data file.  

   As a part of this command, your local data file is turned into [a transient external table](https://www.ibm.com/docs/en/netezza?topic=et-transient-external-tables-2). In other words, your local data file is temporarily treated as a database table that you can query for loading to a {{site.data.keyword.netezza_short}} table. When you are finished, the transient external table is automatically deleted.  
   
   ```sql
   CREATE TABLE <table> AS SELECT * FROM EXTERNAL <file_path> (<col1>, <col2>, ...) USING (RemoteSource <source_type> DELIM <delimiter_type> SkipRows <number_of_rows>);
   ```
   {: codeblock}

   Where:

   | Input               | Description |
   | -----------         | ----------- |
   | table             | Specifies a name for the table that you are creating. |
   | file_path         | Specifies the location of the source data file that you are loading. This source data file is turned into a transient external table. |
   | col1, col2, ... | Specify column names that correspond to column names from the file that you are loading. |
   | source_type       | Specifies that the source data file is remote. When you load data by using external tables, by default, the source data file path is assumed to be on the {{site.data.keyword.netezza_short}} host. If you want to load data from your local machine, you must use the `RemoteSource` option. For the `nzsql` client, specify `RemoteSource 'NZSQL'`. For more information, see [RemoteSource option](https://www.ibm.com/docs/en/netezza?topic=od-remotesource-option-2).|
   | delimiter_type   | Specifies the delimiter that is used in your source data file. For more information, see [Delimiter option](https://www.ibm.com/docs/en/netezza?topic=od-delimiter-option-2).|
   | number_of_rows  | Specifies the number of initial rows to skip before loading the data. For more information, see [SkipRows option](https://www.ibm.com/docs/en/netezza?topic=od-skiprows-option-2).|
   
   Example:

   ```sql
   CREATE TABLE flight_data AS SELECT * FROM EXTERNAL '/home/user/Downloads/customer_data.csv' (flight_id bigint, passenger_id int, last_name varchar(225), first_name varchar(225), seat_number int) USING (RemoteSource 'nzsql' DELIM ',' SkipRows 1);
   ```
   {: codeblock}

   For more examples on loading data with external tables, see [External tables](https://www.ibm.com/docs/en/netezza?topic=dl-external-tables-2).

   Your data is loaded into {{site.data.keyword.netezza_short}}. You can start running queries now.

## Loading data from Amazon S3
{: #load-data-s3}

You can load data to {{site.data.keyword.netezza_short}} from a data file on Amazon S3 that you previously uploaded there.

1. Prepare the data that you want to load.
   1. Ensure that the data is on Amazon S3.
   1. Note the file format.

1. On {{site.data.keyword.netezza_short}}, create a table by using the [`CREATE TABLE AS`](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-table-as-2) command.  

   The [`CREATE TABLE AS`] command creates a table on {{site.data.keyword.netezza_short}} and fills it with the data from S3. 

   As a part of this command, your data file is turned into [a transient external table](https://www.ibm.com/docs/en/netezza?topic=et-transient-external-tables-2). In other words, your data file is temporarily treated as a database table that you can query for loading to a {{site.data.keyword.netezza_short}} table. When you are finished, the transient external table is automatically deleted.  

   ```sql
   CREATE TABLE <table> AS SELECT * FROM EXTERNAL <file> USING (
    REMOTESOURCE <source_type>
    DELIM <delimiter_type>
    UNIQUEID <unique_ID>
    ACCESSKEYID <access_key_ID>
    SECRETACCESSKEY <secret_access_key>
    DEFAULTREGION <default_region>
    BUCKETURL <bucket_URL>
    ENDPOINT <endpoint>
    MULTIPARTSIZEMB <multipart_size> 
    );
   ```
   {: codeblock}

   Where:

   | Input               | Description |
   | -----------         | ----------- |
   | source_type       | Specifies the source type. You must use `S3`. |
   | delimiter_type    | Specifies the delimiter type that is used in your source data file. |
   | unique_ID         | Optional. Specifies the namespace that is used to group data in the cloud bucket. |
   | access_key_ID     | Specifies the access key. |
   | secret_access_key | Specifies the secret access key. |
   | default_region    | Specifies the region in  which the bucket is located. |
   | bucket_URL        | Specifies the name of the bucket. |
   | endpoint          | Specifies the region URL to access your bucket. |
   | multipart_size    | Specifies the size of each part in a multipart upload. The default is 105 MB; a maximum 105 MB of buffer can be uploaded in one request.)

   Example:

   ```sql
   CREATE TABLE flight_data AS SELECT * FROM EXTERNAL '/customer_data.dat' (flight_id bigint, passenger_id int, last_name varchar(225), first_name varchar(225), seat_number int) USING (
      REMOTESOURCE 'S3'
      DELIM '|'
      UNIQUEID 'sample'
      ACCESSKEYID 'xxxxx'
      SECRETACCESSKEY 'xxxxx'
      DEFAULTREGION 'ap-geo'
      BUCKETURL 'my.sample.bucket'
      ENDPOINT 's3.eu-west-1.cloud-object-storage.appdomain.cloud'
      MULTIPARTSIZEMB '50'
      );
   ```
   {: codeblock}

Your data is loaded into {{site.data.keyword.netezza_short}}. You can start running queries now.