---

copyright:
  years:  2023
lastupdated: "2023-04-14"

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

# Loading data 
{: #load-dbs}

- Loading and unloading local data
   
- Loading and unloading data from S3

## Loading and unloading local data
{: #load-data-nzsql}

### Before you begin
{: #loading-prereqs}
      
1. Download the client packages from Fix Central and install it as desribed in [Installing client packages](https://www.ibm.com/docs/en/netezza?topic=npsda-installing-client-software-packages-2).

   One of the easiest way to load and unload data to {{site.data.keyword.netezza_short}} is by using the `nzsql` command. `nzsql` invokes an SQL command interpreter on the {{site.data.keyword.netezza_short}} host or a client system that you can use to manage database operations. 
   {: tip}
     
   You cannot load and unload data by using the web console.
   
1. Ensure that you have the correct path set up to run `nzsql` commands.  
   See:  
      
   - [Path for {{site.data.keyword.netezza_short}} CLI client commands](https://www.ibm.com/docs/en/netezza?topic=inpsccls-path-netezza-performance-server-cli-client-commands-2)
   - [The more command on Windows](https://www.ibm.com/docs/en/netezza?topic=commands-nzsql-command)

1. Connect to Netezza Performance Server as the `admin` user by using [the `nzsql` command](https://www.ibm.com/docs/en/netezza?topic=commands-nzsql-command) amd your credentials.  
   
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

## Loading data
{: #lodading-data}

1. Prepare the data that you want to load:
   
    1. Note the columns.
    1. Note the location of the file.

1. Create a table by using the `CREATE TABLE AS` command.

**DRAFT COMMENT: When do you create the external table? This is not clear**

   ```sql
   create table <table> as select * from external <file path> (<col1>, <col2>, ...) using (remotesource <source type> delim <delimiter type> skiprows <number of rows>);
   ```
   {: codeblock}

   Where:

   | Input               | Description |
   | -----------         | ----------- |
   | <table>             | Specifies a name for the table that you are creating. |
   | <file path>         | Specifies the location of the source data file that you are loading. |
   | <col1>, <col2>, ... | Specify column names in the table that correspond to column names from the file that you are loading. |
   | <source type>       | Specifies that the source data file is remote. You must use `nzsql` because you are using the `nzsql` client to load data. For more information, see [RemoteSource option](https://www.ibm.com/docs/en/netezza?topic=od-remotesource-option-2).|
   | <delimiter type>    | Specifies the delimiter that is used in your source data file. For more information, see [Delimiter option](https://www.ibm.com/docs/en/netezza?topic=od-delimiter-option-2).|
   | <number of rows>    | Specifies the number of initial rows to skip before loading the data. For more information, see [SkipRows option](https://www.ibm.com/docs/en/netezza?topic=od-skiprows-option-2).|
   
   Example:

   ```sql
   create table banking_customer_data as select * from external '/home/user/Downloads/banking_customer_data.csv' (customer_id bigint, credit_store int, country varchar(20), gender varchar(6), age int, tenure int, balance double, products_number int, credit_card int, active_member int, estimated_salary double, churn int) using (remotesource 'nzsql' delim ',' skiprows 1);
   ```
   {: codeblock}

   For more information about the `CREATE TABLE AS SELECT` command, see [CREATE TABLE AS](https://www.ibm.com/docs/en/netezza?topic=npsscr-create-table-as-2).

1. Insert the data from the table into the table on the Netezza Performance Server system 

   ```sql
   insert into <table> SELECT * from <external table> ????????????
   ``` 
   {: codeblock}


   ```sql
   INSERT INTO banking_customer_data_nps SELECT * FROM banking_customer_data ???????
   ```
   {: codeblock}

## Loading data from S3
{: #load-data-s3}

1. Prepare the data that you want to load.
1. On NPS, create an external table (that is based on another table) for the data that you want to load.

   ```sql
   CREATE EXTERNAL TABLE <table> SAMEAS <table> USING (
    DATAOBJECT <data object>
    REMOTESOURCE <source type>
    DELIM <delimiter type>
    UNIQUEID <unique ID>
    ACCESSKEYID <access key ID>
    SECRETACCESSKEY <secret access key>
    DEFAULTREGION <default region>
    BUCKETURL <bucket URL>
    ENDPOINT <endpoint>
    MULTIPARTSIZEMB <multipart size> 
    );
   ```
   {: codeblock}

   Where:

   | Input               | Description |
   | -----------         | ----------- |
   | <data object>       | Specifies a valid source data file on S3. |
   | <source type>       | Specifies the source type. You must use `S3`. |
   | <delimiter type>    | Specifies the delimiter type that is used in your source data file. |
   | <unique ID>         | Optional. Specifies the namespace that is used to group data in the cloud bucket. |
   | <access key ID>     | Specifies the access key. |
   | <secret access key> | Specifies the secret access key. |
   | <default region>    | Specifies the region in  which the bucket is located. |
   | <bucket URL>        | Specifies the name of the bucket. |
   | <endpoint>          | Specifies the region URL to access your bucket. |
   | <multipart size>    | Specifies the size of each part in a multipart upload. The default is 105 MB; a maximum 105 MB of buffer can be uploaded in one request.)

   Example:

   ```sql
   CREATE EXTERNAL TABLE emp_backup SAMEAS emp USING (
    DATAOBJECT ('/employee_data.dat')
    REMOTESOURCE 'S3' 
    DELIM '|' 
    UNIQUEID 'samplebackup' 
    ACCESSKEYID 'xxxxx'
    SECRETACCESSKEY 'xxxxx'
    DEFAULTREGION 'ap-geo' 
    BUCKETURL 'my.backup.bucket' 
    ENDPOINT 's3.us-east.cloud-object-storage.appdomain.cloud' 
    MULTIPARTSIZEMB '50'
    );
   ```
   {: codeblock}

1. Insert data from the external table into the table on the Netezza Performance Server host.

   ```sql
   insert into <table> SELECT * FROM <table>;
   ```