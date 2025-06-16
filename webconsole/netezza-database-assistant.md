---

copyright:
  years: 2025
lastupdated: "2025-01-17"

subcollection: netezza

---


{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:codeblock: .codeblock}
{:screen: .screen}
{:tip: .tip}
{:important: .important}
{:note: .note}
{:deprecated: .deprecated}
{:pre: .pre}

# Using the Netezza database assistant
{: #database-assistant}

Chat with the IBM Netezza database assistant to help you complete tasks, find out about your system status and statistics, or ask general questions about Netezza.
{: shortdesc}

Open the database assistant from the Netezza web console, and then ask it to help you with a range of Netezza tasks, including:
- Answering your questions about Netezza
- Monitoring your Netezza instance, including getting information about:
    - Active connections
    - SQL activity
    - Resource usage
    - Schemas, databases, and tables in the system
    - Users
    - Backups
    - Compute scaling
    - Storage scaling

The database assistant uses built-in skills and is trained on the official IBM Netezza documentation so that it can provide you with the most accurate responses.

For details on the AI powering the Assistant, see the [WXO documentation](https://www.ibm.com/docs/en/watsonx/watson-orchestrate/current?topic=experience-faqs#are-span-translatenoibm-watsonx-orchestratespan-and-the-skill-sets-secure).

## Starting the database assistant
{: #assistant-getstarted}

To get started with the database assistant:

1. Open the Netezza web console.

1. Click the database assistant chat icon.

    ![database assistant icon](images/assistant-icon.png "database assistant icon")

If the chatbot is not visible, go to **Settings > Additional features** and enable the **Database assistant** option.
{: note}

1. Type your questions and requests in the chat.

## What can the database assistant do?
{: #assistant-skills}

You can ask the database assistant to complete the actions listed in the following table.

Depending on the database workload, the database assistant might take some time to respond to certain prompts, such as requesting a database summary or getting details about the largest tables by storage size.
{: note}

| No | Action | Example prompts |
|----|------------|-----------------|
| 1 | Show Instance Summary | Show me instance summary. What is the instance uptime? |
| 2 | List Tables | List tables for TESTDB11.SCH2. |
| 3 | List Views | List views for TESTDB11.SCH2 |
| 4 | List Schemas | List schemas in TESTDB11 |
| 5 | List Databases | List databases, Show databases |
| 6 | Show Backups | Show my backups, List backups |
| 7 | Total Storage Utilization | What is my storage utilization? Provide details on my storage usage |
| 8 | Show Instance State | Show instance status, Get status |
| 9 | Show CPU Usage | What is the host cpu usage in the last 4 hours. Get cpu usage from last Monday till last Wednesday |
| 10 | Show Memory Usage | Find out memory usage in the last 5 hours. Show memory usage in the last week |
| 11 | Show I/O Usage | Display I/O usage for the past 12 hours. What is the IO utilization over the last two weeks |
| 12 | Show Connections | List connections. Show connections |
| 13 | Show Active Queries | Show inflight sql queries. List running queries |
| 14 | Top N largest tables by storage | List top 10 tables largest tables. Provide list of largest tables by storage size |
| 15 | Get CRN | CRN? Get CRN |
| 16 | Get NPS hostname | What is my NPS hostname? Hostname? |
| 17 | Show Pause/Resume History | Show pause/resume history. Fetch pause-resume history |
| 18 | Show Scaling History | Show scaling history. Retrieve scaling history |
| 19 | Show Smart Scaling | Retrieve scaling demand growth. Provide me scaling prediction |
| 20 | Get System Version | What is current Netezza software version? Get my system version |



## Troubleshooting the Netezza database assistant
{: #assistant-troubleshooting}

If you find that you are not getting the answers and results that you expect from the Netezza database assistant, try one or more of the following troubleshooting strategies:
- Rephrase the question. The assistant might not understand your phrasing. Try using different wording, if possible.
- Restart the conversation. The assistant might be getting confused by other things you have discussed with it.
- Ensure that you are asking about Netezza. If you are asking about something else, it might be outside of the assistant's capabilities.
- Try asking about something specific. If your question is too broad, the assistant is more likely to return results that aren't relevant to your request.


## Data privacy and opting out
{: #assistant-data-privacy}

When you interact with the Netezza database assistant, your questions and requests are processed by IBM watsonx Orchestrate, which is outside of your Netezza instance. All communications between IBM watsonx Orchestrate and your Netezza instance are encrypted.

To opt out of the Netezza database assistant, contact IBM Support.
