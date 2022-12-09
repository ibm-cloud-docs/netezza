### New features and enhancements
{: #nfdec2022}

- Introduced full support for {{site.data.keyword.netezza_short}} time travel. You can retrieve and analyze historical data without having to develop additional application logic such as history tables. This powerful tool comes in handy when you want to track the history of data changes or reconstruct your data. By using {{site.data.keyword.netezza_short}} time travel, you can access historical data (data that was changed or deleted) at past points in time or within a past period of time.
For more information, see [Getting started with time travel](/docs/netezza?topic=netezza-introducing_tt).

- Introduced automation for NC0, NC1, NC2, and NC3.

- Introduced new version of the web console.

- Introduced full scaling support. For more information, see [Scaling](/docs/netezza?topic=netezza-scaling-topic).

- Introduced {{site.data.keyword.netezza_short}} on AWS. This is a beta feature that is available for evaluation and testing purposes. For known issues and limitations, see [Netezza Performance Server on AWS](https://supportcontent.ibm.com/support/pages/netezza-performance-server-cloud-pak-data-service-aws
).

### Known issues

If a common table expression or derived table query contains column names or column aliases, which begin with an underscore, {{site.data.keyword.netezza_short}} deletes these columns in the query result set. If there are no columns to display, {{site.data.keyword.netezza_short}} returns the following error.

```sql
ERROR:  No columns are selected due to column alias begin with underscore
```
{: codeblock}

Example:

```sql
create table t1 ( c1 int , c2 int);
CREATE TABLE
with tab1 as ( select c1 as _c1 , c2 as _c2 from t1 ) select tab1.* from tab1; ERROR:  No columns are selected due to column alias begin with underscore
select tab1.* from ( select c1 as _c1 , c2 as _c2 from t1 ) as tab1; ERROR:  No columns are selected due to column alias begin with underscore
```
{: codeblock}
