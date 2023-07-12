---

copyright:
  years: 2023
lastupdated: "2023-07-23"

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

## Before you begin
{: #prereqsdlh1}

In the examples, the publicly available [*New York taxi trip* record data](https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page) for yellow taxis in January 2021 and 2022 is used. To follow this example, make sure that the data is in an accessible S3 bucket and the table was loaded into an Apache Iceberg table in the Hive Metastore server (HMS).

## 1. Create a database by using the required `metastoreuri`.
{: #create_database}

External datasources allow an administrator to grant access to S3 without providing the keys directly to a user.

Example:

```sql
LOCALDB.ADMIN(ADMIN)=> create database mylake with metastoreuri 'thrift://mymetastoreserverhostname:9083' catalogtype 'hive' on awss3 using ( ACCESSKEYID 'xxxx' SECRETACCESSKEY 'xxxx' BUCKET 'example-bucket' REGION 'us-east-1');
NOTICE:  589 tables from the datalake are available in MYLAKE
```
{: codeblock}

## 2. Connect to the database.
{: #connectdlh_database}

```sql
LOCALDB.ADMIN(ADMIN)=> \c mylake
```
{: codeblock}

You are now connected to **mylake** database.

## 3. List the available schemas.
{: #showschemadlh}

```sql
MYLAKE.NETEZZA_SCHEMA(ADMIN)=> show schema;
```
{: codeblock}

By default, you get connected to a reserved schema called **NETEZZA_SCHEMA**.

Output:

```sql
DATABASE |                   SCHEMA                   | OWNER
----------+--------------------------------------------+-------
MYLAKE   | DEFAULT                                    | ADMIN
MYLAKE   | DEFINITION_SCHEMA                          | ADMIN
MYLAKE   | DEMO                                       | ADMIN
MYLAKE   | INFORMATION_SCHEMA                         | ADMIN
MYLAKE   | NETEZZA_SCHEMA                             | ADMIN
MYLAKE   | TAXIDATA                                   | ADMIN
MYLAKE   | TEST                                       | ADMIN
(7 rows)
```
{: codeblock}

## 4. From your schemas list, set the schema you want to connect to.
{: #setschdlh}

```sql
MYLAKE.NETEZZA_SCHEMA(ADMIN)=> set schema taxidata;
SET SCHEMA
```
{: codeblock}

You can also query your data by using a full path **SELECT * from mydb.myschema.mytable**.

## 5. List the available tables.
{: #listtabledlh}

```sql
MYLAKE.TAXIDATA(ADMIN)=> show table;
```
{: codeblock}

Output:

```sql
DATABASE |  SCHEMA  |          TABLE           |      TYPE      | OWNER
----------+----------+--------------------------+----------------+-------
MYLAKE   | TAXIDATA | YELLOW_TAXI_JANUARY_2022 | DATALAKE TABLE | ADMIN
MYLAKE   | TAXIDATA | YELLOW_TAXI_JANUARY_2021 | DATALAKE TABLE | ADMIN
(2 rows)
```
{: codeblock}

## 6. **Select * from** the required table.
{: #selectdlh_table}

```sql
MYLAKE.TAXIDATA(ADMIN)=> select * from YELLOW_TAXI_JANUARY_2021 limit 1;
```
{: codeblock}

Output:

```sql
VENDORID | TPEP_PICKUP_DATETIME | TPEP_DROPOFF_DATETIME | PASSENGER_COUNT | TRIP_DISTANCE | RATECODEID | STORE_AND_FWD_FLAG | PULOCATIONID | DO
LOCATIONID | PAYMENT_TYPE | FARE_AMOUNT | EXTRA | MTA_TAX | TIP_AMOUNT | TOLLS_AMOUNT | IMPROVEMENT_SURCHARGE | TOTAL_AMOUNT | CONGESTION_SURCHARGE |AIRPORT_FEE
----------+----------------------+-----------------------+-----------------+---------------+------------+--------------------+--------------+---
-----------+--------------+-------------+-------+---------+------------+--------------+-----------------------+--------------+------------------
----+-------------
        1 | 2021-01-01 00:30:10  | 2021-01-01 00:36:12   |               1 |           2.1 |          1 | N                  |          142 |   
        43 |            2 |           8 |     3 |     0.5 |          0 |            0 |                   0.3 |         11.8 |                  
2.5 |            
(1 row)
```
{: codeblock}

- To identify the total number of passengers that travelled by taxis in New York in January 2022, run:

   ```sql
   MYLAKE.TAXIDATA(ADMIN)=> select sum(PASSENGER_COUNT) FROM YELLOW_TAXI_JANUARY_2022;
   ```
   {: codeblock}

   Output:

   ```sql
   SUM   
   ---------
   3324167
   (1 row)
   ```
   {: codeblock}

- To identify the vendor that had the most passengers between 1:00 AM and 6:00 AM, run:

   ```sql
   MYLAKE.TAXIDATA(ADMIN)=> SELECT VENDORID, SUM(PASSENGER_COUNT) as "passengers" FROM YELLOW_TAXI_JANUARY_2022 WHERE TPEP_PICKUP_DATETIME::time > '1:00am'AND "TPEP_PICKUP_DATETIME"::time < '6:00am' GROUP BY VENDORID;
   ```
   {: codeblock}

   Output:

   ```sql
   VENDORID | passengers
   ----------+------------
          2 |     122251
          1 |      40807
          6 |           
          5 |           
   (4 rows)
   ```
   {: codeblock}
