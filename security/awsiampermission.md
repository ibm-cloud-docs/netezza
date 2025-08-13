---

copyright:
  years:  2023
lastupdated: "2025-07-22"

keywords: IAM access for Netezza Performance Server, permissions for Netezza Performance Server, identity and access management for Netezza Performance Server, roles for Netezza Performance Server, actions for Netezza Performance Server, assigning access for Netezza Performance Server

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

# AWS IAM Policy Permissions
{: #awsiampolicypermission}

| **Service**               | **Actions**                                                                 | **Description**                                                                 |
|---------------------------|------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| Route 53                  | Get*, List*                                                                 | View hosted zones, DNS records, health checks, traffic policies, and domains.  |
| EC2                       | Describe*, StartInstances, StopInstances, TerminateInstances                | View EC2 resources and manage instance lifecycle (start, stop, terminate).     |
| Auto Scaling              | DescribeAutoScalingGroups                                                   | View Auto Scaling group configurations.                                        |
| EKS                       | DescribeCluster                                                             | View details of Amazon EKS clusters.                                           |
| Elastic Load Balancing   | ApplySecurityGroupsToLoadBalancer, ConfigureHealthCheck, Deregister*, Describe* | Manage and inspect load balancer configurations and health checks.        |
| KMS                       | DescribeKey, GetKeyPolicy, ListAliases                                      | View encryption key metadata and policies.                                     |
| Tagging                   | GetResources                                                                | Retrieve tags for AWS resources.                                               |
| ECR                       | Get*, Describe*, List*, Batch*                                              | Access container image metadata, scan findings, and download images.           |
| S3                        | Get*, List*                                                                 | View bucket and object metadata, access objects, and list buckets.             |
| IAM                       | GetRole, GetRolePolicy                                                      | View IAM role definitions and inline policies.                                 |
| Service Quotas           | List*                                                                       | View AWS service quota usage and history.                                      |
| Resource Groups           | ListGroups                                                                  | View AWS resource groups.                                                      |
| Route 53 Domains          | ListDomains, ListOperations                                                 | View domain registration details and operations.                               |
| CloudWatch                | DescribeAlarms                                                              | View CloudWatch alarm configurations.                                          |
