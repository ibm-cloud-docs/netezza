---

copyright:
  years: 2023
lastupdated: "2023-04-20"

keywords: netezza data lakehouse, data lake, querying data, connecting to a metastore
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
{:codeblock: .codeblock}
{:tip: .tip}
{:note: .note}

# Querying data from data lakehouse
{: #querying_datalakehouse}

In the examples, the publicly available **draft comment: need examples for our data lakehouse use cases? if we want to stau consistent with the singularity examples we'd need yellow taxi table** is used. To follow this example, make sure that the data is in an accessible S3 bucket. **draft comment: do we need to specify any data format or anything else here?**

## 1. Create a database by using the required `metastoreuri`.
{: #create_database}

**draft comment: need command and example**

## 2. Connect to the database.

**draft comment: need command and example**

## 3. Show schema.

**draft comment: need command and example**

By default, you get connected to a reserved schema called NETEZZA_SCHEMA.

## 4. From your metastore schemas list, set the schema you want to connect to.

**draft comment: need command and example. `set schema x` (or query via full path select * from mydb.myschema.mytable)**

## 5. Show the table.

**draft comment: need command and example**

## 6. Select * from the YELLOW_TAXI_TABLE table.

**draft comment: need command and example**
