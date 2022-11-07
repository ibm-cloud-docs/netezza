---

copyright:
  years:  2022
lastupdated: "2022-11-07"

keywords: netezza time travel, enabling time travel on netezza, disabling time travel on netezza, enabling time travel, disabling time travel, time travel

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

# Enabling and disabling time travel
{: #enablingdisabling_tt}

By default, time travel

**DRAFT COMMENT: IS TT ENABLED BY DEFAULT?**

To enable the time travel feature, you must be an *Admin* or a user with the *MANAGE SYSTEM* privilege.

## Enabling time travel on Netezza
{: #enabling_tt}

To enable time travel, run the command as an *Admin* or a user with the *MANAGE SYSTEM* privilege.

```sql
SYSTEM.ADMIN(ADMIN)=> SET SYSTEM DEFAULT TIME_TRAVEL_ENABLED TO ON
```
{: codeblock}

## Verifying time travel is enabled
{: #verify_tt}

To check whether the time travel feature is enabled, run the command as an *Admin* or a user with the *MANAGE SYSTEM* privilege.

```sql
SHOW SYSTEM DEFAULT TIME_TRAVEL_ENABLED
```
{: codeblock}

If **TIME_TRAVEL_ENABLED** was not set, the command displays *FALSE*.

## Disabling time travel on Netezza
{: #disabling_tt}

To disable time travel, run the command as an *Admin* or a user with the *MANAGE SYSTEM* privilege.

```sql
SYSTEM.ADMIN(ADMIN)=> SET SYSTEM DEFAULT TIME_TRAVEL_ENABLED TO OFF
```
{: codeblock}

If **TIME_TRAVEL_ENABLED** is set from *ON* to *OFF*, the existing temporal tables retain their retention intervals and historical rows. That information is available again when **TIME_TRAVEL_ENABLED** is set to *ON*.

If you set a retention interval of 0 days for an object, time travel is disabled for the object. See ADD LINK TO CHANGING RETENTION
{: tip}
