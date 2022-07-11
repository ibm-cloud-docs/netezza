---

copyright:
  years:  2022
lastupdated: "2022-11-07"

keywords: singularity, parquet, data lake, netezza singularity, parquet files, querying data
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

# Querying data
{:querying_singularity}

## Before you begin
{: #prereqs_singularity}

To query external data, you must do the following:

1. Ensure that **ENABLE_EXTERNAL_DATASOURCE** is set to `1`.

**COMMENT: Is there a command to verify this or do you have to run the SET command every time?**

2. Create an external data source.

   For more information, see [CREATE EXTERNAL DATASOURCE command](https://www.ibm.com/docs/en/netezza?topic=).

```
CREAT1E EXTERNAL DATASOURCE NYCTAXIS3 
ON AWSS3 
USING (
   ACCESSKEYID '.....' 
   SECRETACCESSKEY  '...' 
   BUCKET 'myfancybucket' 
   REGION 'US-EAST-1'
);
```

3. Create an external table.

   Ensure that you have the necessary privileges as described in [Privileges for creating external tables](https://www.ibm.com/docs/en/netezza?topic=et-create-external-table-command-2).

```
CREATE EXTERNAL TABLE nyc_taxi 
ON NYCTAXIS3 
USING ( 
   DATAOBJECT ('/example.parquet') 
   format 'PARQUET' 
);
```

## Accessing data
{: #accessing_singularity}

### Accessing data from public resources
{: #getresource_singularity}

To get a public resource from S3, run one of the following commands.

**COMMENT: Is S3 the only option?**

```
select *
from
table(
    scan_data_source('s3://myfancybucketexample/example.parquet')
);
```

```
select *
from
table(
    scan_data_source('s3://myfancybucketexample/example.parquet', NULL)
);
```

```
select *
from
table(
    scan_data_source('s3://myfancybucketexample/example.parquet', NULL, 0)
);
```

When you use `NULL` and `0` together, the queried file displays all columns.

Example:

```
num | squares |     timestamps      | fibonacci | fibs_is_even | Uppercase | Lowercase
-----+---------+---------------------+-----------+--------------+-----------+-----------
   1 |       1 | 2021-01-01 12:15:00 |         1 | f            | A         | a
   2 |       4 | 2021-01-02 12:15:00 |         1 | f            | B         | b
   3 |       9 | 2021-01-03 12:15:00 |         2 | t            | C         | c
   4 |      16 | 2021-01-04 12:15:00 |         3 | f            | D         | d
   5 |      25 | 2021-01-05 12:15:00 |         5 | f            | E         | e
   6 |      36 | 2021-01-06 12:15:00 |         8 | t            | F         | f
   7 |      49 | 2021-01-07 12:15:00 |        13 | f            | G         | g
   8 |      64 | 2021-01-08 12:15:00 |        21 | f            | H         | h
   9 |      81 | 2021-01-09 12:15:00 |        34 | t            | I         | i
  10 |     100 | 2021-01-10 12:15:00 |        55 | f            | J         | j
  11 |     121 | 2021-01-11 12:15:00 |        89 | f            | K         | k
  12 |     144 | 2021-01-12 12:15:00 |       144 | t            | L         | l
  13 |     169 | 2021-01-13 12:15:00 |       233 | f            | M         | m
  14 |     196 | 2021-01-14 12:15:00 |       377 | f            | N         | n
  15 |     225 | 2021-01-15 12:15:00 |       610 | t            | O         | o
  16 |     256 | 2021-01-16 12:15:00 |       987 | f            | P         | p
  17 |     289 | 2021-01-17 12:15:00 |      1597 | f            | Q         | q
  18 |     324 | 2021-01-18 12:15:00 |      2584 | t            | R         | r
  19 |     361 | 2021-01-19 12:15:00 |      4181 | f            | S         | s
  20 |     400 | 2021-01-20 12:15:00 |      6765 | f            | T         | t
  21 |     441 | 2021-01-21 12:15:00 |     10946 | t            | U         | u
  22 |     484 | 2021-01-22 12:15:00 |     17711 | f            | V         | v
  23 |     529 | 2021-01-23 12:15:00 |     28657 | f            | W         | w
  24 |     576 | 2021-01-24 12:15:00 |     46368 | t            | X         | x
  25 |     625 | 2021-01-25 12:15:00 |     75025 | f            | Y         | y
  26 |     676 | 2021-01-26 12:15:00 |    121393 | f            | Z         | z
(26 rows)
```

### Accesing data from private buckets

To retrieve data from a private bucket, you must use the following credentials.

```
select *
from
table(
    scan_data_source('s3://secretbucketexample/example.parquet', 'awskeyid=AWSKEYID secretaccesskey=SECRETACCESSKEY')
);
```

Example:

```
num | squares |     timestamps      | fibonacci | fibs_is_even | Uppercase | Lowercase
-----+---------+---------------------+-----------+--------------+-----------+-----------
   1 |       1 | 2021-01-01 12:15:00 |         1 | f            | A         | a
   2 |       4 | 2021-01-02 12:15:00 |         1 | f            | B         | b
   3 |       9 | 2021-01-03 12:15:00 |         2 | t            | C         | c
   4 |      16 | 2021-01-04 12:15:00 |         3 | f            | D         | d
...
(26 rows)
```

### Accessing data from local files

```
select *
from
table(
    scan_data_source('file:///shared/example.parquet')
);
```

Example:

```
num | squares |     timestamps      | fibonacci | fibs_is_even | Uppercase | Lowercase
-----+---------+---------------------+-----------+--------------+-----------+-----------
   1 |       1 | 2021-01-01 12:15:00 |         1 | f            | A         | a
   2 |       4 | 2021-01-02 12:15:00 |         1 | f            | B         | b
   3 |       9 | 2021-01-03 12:15:00 |         2 | t            | C         | c
   4 |      16 | 2021-01-04 12:15:00 |         3 | f            | D         | d
...
(26 rows)
```

## Querying external tables
{: #examples_singularity}

**COMMENT: Can we use the examples from: https://github.ibm.com/Voldemort/nzparquet/blob/master/EXAMPLES.md?? Especially how to get data from a private vs public bucket. How to save changed data? Optimisation seems to be the main selling point, why not showcase this better, for example by providing examples how to filter, display select columns, see how the file is structured?**

### Getting a subset of columns from a private file
{:#subset_singularity}

Select the subset of columns. In this example, the columns are 'squares' and 'num'.

```
select *
from
table(
    scan_data_source('s3://myfancybucketmateuszstompor/example.parquet', NULL, 2, 'squares', 'num')
);
```

Example:

```
squares | num
---------+-----
       1 |   1
       4 |   2
       9 |   3
      16 |   4
      25 |   5
      36 |   6
      49 |   7
      64 |   8
      81 |   9
     100 |  10
     121 |  11
     144 |  12
     169 |  13
     196 |  14
     225 |  15
     256 |  16
     289 |  17
     324 |  18
     361 |  19
     400 |  20
     441 |  21
     484 |  22
     529 |  23
     576 |  24
     625 |  25
     676 |  26
(26 rows)
```

### Using simple filters
{: #filters_singularity}

```
select *
from
table(
    scan_data_source('s3://myfancybucketexample/example.parquet', NULL, 0, '$1 > $2', 'squares', 200::float)
);
```

Example:

```
num | squares |     timestamps      | fibonacci | fibs_is_even | Uppercase | Lowercase
-----+---------+---------------------+-----------+--------------+-----------+-----------
  15 |     225 | 2021-01-15 12:15:00 |       610 | t            | O         | o
  16 |     256 | 2021-01-16 12:15:00 |       987 | f            | P         | p
  17 |     289 | 2021-01-17 12:15:00 |      1597 | f            | Q         | q
  18 |     324 | 2021-01-18 12:15:00 |      2584 | t            | R         | r
  19 |     361 | 2021-01-19 12:15:00 |      4181 | f            | S         | s
  20 |     400 | 2021-01-20 12:15:00 |      6765 | f            | T         | t
  21 |     441 | 2021-01-21 12:15:00 |     10946 | t            | U         | u
  22 |     484 | 2021-01-22 12:15:00 |     17711 | f            | V         | v
  23 |     529 | 2021-01-23 12:15:00 |     28657 | f            | W         | w
  24 |     576 | 2021-01-24 12:15:00 |     46368 | t            | X         | x
  25 |     625 | 2021-01-25 12:15:00 |     75025 | f            | Y         | y
  26 |     676 | 2021-01-26 12:15:00 |    121393 | f            | Z         | z
(12 rows)
```

### Using filters and column selection
{: #filterscolumns_singularity}

```
select *
from
table(
    scan_data_source('s3://myfancybucketexample/example.parquet', NULL, 3, 'num', 'timestamps', 'fibs_is_even', '$1 > $2', 'squares', 200::float)
);
```

Example:

```
num |     timestamps      | fibs_is_even
-----+---------------------+--------------
  15 | 2021-01-15 12:15:00 | t
  16 | 2021-01-16 12:15:00 | f
  17 | 2021-01-17 12:15:00 | f
  18 | 2021-01-18 12:15:00 | t
  19 | 2021-01-19 12:15:00 | f
  20 | 2021-01-20 12:15:00 | f
  21 | 2021-01-21 12:15:00 | t
  22 | 2021-01-22 12:15:00 | f
  23 | 2021-01-23 12:15:00 | f
  24 | 2021-01-24 12:15:00 | t
  25 | 2021-01-25 12:15:00 | f
  26 | 2021-01-26 12:15:00 | f
(12 rows)
```

### Using filters, column selection, and options
{: #filterscolumnsoptions_singularity}

```
select *
from
table(
    scan_data_source('s3://myfancybucketexample/example.parquet', 'appendtimezonecolumn=true', 3, 'num', 'timestamps', 'fibs_is_even', '$1 > $2', 'squares', 200::float)
);
```

Example:

```
num |     timestamps      | timestamps-timezone | fibs_is_even
-----+---------------------+---------------------+--------------
  15 | 2021-01-15 12:15:00 | UTC                 | t
  16 | 2021-01-16 12:15:00 | UTC                 | f
  17 | 2021-01-17 12:15:00 | UTC                 | f
  18 | 2021-01-18 12:15:00 | UTC                 | t
  19 | 2021-01-19 12:15:00 | UTC                 | f
  20 | 2021-01-20 12:15:00 | UTC                 | f
  21 | 2021-01-21 12:15:00 | UTC                 | t
  22 | 2021-01-22 12:15:00 | UTC                 | f
  23 | 2021-01-23 12:15:00 | UTC                 | f
  24 | 2021-01-24 12:15:00 | UTC                 | t
  25 | 2021-01-25 12:15:00 | UTC                 | f
  26 | 2021-01-26 12:15:00 | UTC                 | f
(12 rows)
```

### Using complex filters
{: #complexfilters_singularity}

```
select *
from
table(
    scan_data_source('s3://myfancybucketexample/example.parquet', NULL, 0, '($1 > $2) && ($1 < $3)', 'squares', 20::float, 200::float)
);
```

Example:

```
num | squares |     timestamps      | fibonacci | fibs_is_even | Uppercase | Lowercase
-----+---------+---------------------+-----------+--------------+-----------+-----------
   1 |       1 | 2021-01-01 12:15:00 |         1 | f            | A         | a
   2 |       4 | 2021-01-02 12:15:00 |         1 | f            | B         | b
   3 |       9 | 2021-01-03 12:15:00 |         2 | t            | C         | c
   4 |      16 | 2021-01-04 12:15:00 |         3 | f            | D         | d
   5 |      25 | 2021-01-05 12:15:00 |         5 | f            | E         | e
   6 |      36 | 2021-01-06 12:15:00 |         8 | t            | F         | f
   7 |      49 | 2021-01-07 12:15:00 |        13 | f            | G         | g
   8 |      64 | 2021-01-08 12:15:00 |        21 | f            | H         | h
   9 |      81 | 2021-01-09 12:15:00 |        34 | t            | I         | i
  10 |     100 | 2021-01-10 12:15:00 |        55 | f            | J         | j
  11 |     121 | 2021-01-11 12:15:00 |        89 | f            | K         | k
  12 |     144 | 2021-01-12 12:15:00 |       144 | t            | L         | l
  13 |     169 | 2021-01-13 12:15:00 |       233 | f            | M         | m
  14 |     196 | 2021-01-14 12:15:00 |       377 | f            | N         | n
(14 rows)
```

**NOTE: Even though the condition `squares > 20` was provided, rows with values `1`, `4`, `9`, and `16` were still returned. It is expected behaviour.**
