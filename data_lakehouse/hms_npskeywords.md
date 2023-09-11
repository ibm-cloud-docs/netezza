---

copyright:
  years:  2023
lastupdated: "2023-09-11"

keywords: data lakehouse, watsonx.data sql commands, netezza data lakehouse, watsonx, watsonx.data, watsonx.data with nps, hms keywords, nps keywords, nps reserved keywords
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

# Schema names in Hive Metastore (HMS) that are NPS reserved keywords
{: #hms_npskeywords.data}

If there are schema names in Hive Metastore that are NPS keywords, you cannot use those keywords as identifiers when using the schema in:

```sql
SET SCHEMA <name>
```
{: codeblock}

or cross schema reference in:

```sql
SELECT col from <schema_name>.<tablename>
```
{: codeblock}

For these use cases, these schema names must be quoted in double quotation marks to be used as identifiers.

For example:

`default` is a {{site.data.keyword.netezza_short}} keyword and it is a schema name in HMS. To use it in **SET SCHEMA** command:

- Reference the schema name in double quotes by using the system case, usually written in uppercase.

```sql
SET SCHEMA "DEFAULT"
```
{: codeblock}

- Alternatively, reference the schema name in double quotes with carets to convert to system case.

```sql
SET SCHEMA "^default^";
```
{: codeblock}

For more information on {{site.data.keyword.netezza_short}} keywords, see [SQL reserved words and keywords](https://www.ibm.com/docs/en/netezza?topic=dud-sql-reserved-words-keywords-2).
