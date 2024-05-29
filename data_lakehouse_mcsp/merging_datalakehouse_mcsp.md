---

copyright:
  years: 2023
lastupdated: "2023-07-21"

keywords: data lakehouse, netezza data lakehouse, querying data, merging data, netezza with watsonx.data
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

# Merging and querying data from {{site.data.keyword.lakehouse_short}}
{: #merging_watsonx.data_mcsp}

Learn how to query and merge data from a {{site.data.keyword.netezza_short}} and a data lake table.

## Before you begin
{: #prereqsdlh3_mcsp}

In the examples, the publicly available [*New York taxi trip* record data](https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page) for yellow taxis in January 2021 and 2022 is used. To follow this example, make sure that the data is in an accessible S3 bucket and the table was loaded into {{site.data.keyword.lakehouse_short}} into an Apache Iceberg table in the Hive Metastore server (HMS).

## Run a cross database query with the table in the data lake database.
{: #runcdqdlh_mcsp}

- To identify which year had the most passengers, run:

   Example:

   ```sql
   LOCALDB.ADMIN(ADMIN)=> select ( select sum(PASSENGER_COUNT) from YELLOW_TAXI_JANUARY_2022_LOADED) as "passengers 2022",( select sum(PASSENGER_COUNT) from MYLAKE.TAXIDATA.YELLOW_TAXI_JANUARY_2021) as "passengers 2021";
   ```
   {: codeblock}

   Output:

   ```sql
   passengers 2022 | passengers 2021

   -----------------+-----------------

           3324167 |         1794615

   (1 row)
   ```
   {: codeblock}

- To compare how many passengers travelled between 1:00 AM and 6:00 PM in 2021 and 2022, run:

   Example:

   ```sql
   LOCALDB.ADMIN(ADMIN)=> select(select sum(PASSENGER_COUNT) from YELLOW_TAXI_JANUARY_2022_LOADED where TPEP_PICKUP_DATETIME::time > '1:00am' and TPEP_PICKUP_DATETIME::time < '6:00am') as "overnight passengers 2022", (select sum(PASSENGER_COUNT) from MYLAKE.TAXIDATA.YELLOW_TAXI_JANUARY_2021 where TPEP_PICKUP_DATETIME::time > '1:00am' and TPEP_PICKUP_DATETIME::time < '6:00am') as "overnight passengers 2021";
   ```
   {: codeblock}

   Output:

   ```sql
   overnight passengers 2022 | overnight passengers 2021

   ---------------------------+---------------------------

                      163058 |                     33469

   (1 row)
   ```
   {: codeblock}
