---

copyright:
  years: 2021
lastupdated: "2021-11-02"

keywords: web console, users and groups, creating users, creating groups, users, groups

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:note: .note}
{:caption: .caption}

# Managing users and groups
{: #users-groups}

The **Users and groups** view displays all of your database user accounts and groups.
{: shortdesc}

## Users
{: #users}

### Creating users
{: #create-users}

1. Go to **Users and groups > Users**.
1. Click **Add user**.
1. In the **General settings** section, select the following:

   1. Authentication type

   1. Username

      The name must begin with a letter or an underscore. The name cannot contain embedded spaces. It must be unique within the system. It can have 128 characters.

   1. Password

      The password must have 15 characters, 1 upper case letter, and 1 special character.

   1. Resource group

   1. Account expiration date
   
      In the Account valid until section, specify whether the user account never expires or select an expiration date.

   1. Password expiration date
   
      In the Password expires field, specify whether the password of the user account never expires or select an expiration date.
 
1. Optionally, you can add the user account to any available groups by ticking the box next to the name of the group.
 
   If you want a user to have the necessary privileges to do scaling, pause and resume operations, you must add the user to the **ADMINISTRATORS** group.

### Information about users
{: #user-info}

|Value          | Description                      |
|:--------------|:---------------------------------|
|Username       | Specifies the database user name.|
|Resource group | Specifies the database group to which the user belongs and which controls the workload settings such as GRA and resource percentages.|
|Owner          | Specifies the owner of the user account.|
|Tables         | Specifies the number of tables that are owned by the user account.|
|Password expiration| Specifies when a user password expires.|
|Created on | Specifies when the user was created.|
|Authentication type| Specifies the authentication type.|
{: caption="Table 1. The table lists group-related values and their definitions." caption-side="bottom"}

### User actions
{: #user-actions}

In the users list view, there is an overflow menu that lists the actions that can be taken on the user. 

|Value          | Description                      |
|:--------------|:---------------------------------|
|Assign owner| Set the owner of the user account.|
|View privileges| View and alter the privileges for the user account, which dictate what that user can view and execute.|
|Change password| Change the password for the system user.|
|Account expiration| Set a date that the system user account will be valid until.|
|Password expiration| Set a number of days until the password for the user account expires.|
|Rename | Change the username of the user account.|
|Remove | Delete the user account from the system.|
{: caption="Table 1. The table lists user actions and their definitions." caption-side="bottom"}

### Granting admin privileges to users
{: #grant-admin-users}

User privileges dictate what actions can be taken by a particular user account. When new users are created, they have no privileges, so in most cases privileges need to be added. 

1. Go to **Users and groups > Users**.
1. Select the user for which you want to grant admin privileges and select **Admin privileges** from the overflow menu.

   In this view, you can see different admin privileges, which are already granted or that can be granted to the selected user.
   
   Granting these privileges allows the user to do the actions that the privileges correspond to. Granting privileges on global database and global schema unlocks all the privileges to the user equivalent to an admin.
   
1. Click **Edit**.
1. Update, grant, or revoke object privileges by putting ticks in corresponding boxes.
1. Click **Save**.
   
### Granting object privileges to users
{: #grant-object-users}

User privileges dictate what actions can be taken by a particular user account. When new users are created, they have no privileges, so in most cases privileges need to be added. 

1. Go to **Users and groups > Users**.
1. Select the user for which you want to grant object privileges and select **Object privileges** from the overflow menu.
1. Select a database.
   
   You can choose between the *Global* database and a specific database. *Global* means that the privileges are related to generic object types such as views, tables, databases, groups.
   
   If you choose *Global*, the privilege is assigned globally across the system. If the user account is given **Create table** privileges, this user can create a table in any database.
 
1. Select a schema.

   If you selected *Global* for the database in step 3, skip this step.
   
1. Click **Edit**.
1. Update, grant, or revoke object privileges by putting ticks in corresponding boxes.
1. Click **Save**.

### Deleting users
{: #delete-users}

1. Go to **Users and groups > Users**.
1. Select the user that you want to remove and select **Remove** from the overflow menu.

   In the confirmation pop up, click **Remove** to remove the user or **Cancel** to cancel this action.

## Groups
{: #groups}

### Creating groups
{: #create-groups}

1. Go to **Users and groups > Groups**.
1. Click **Create group**.
1. In the **General settings** section, select the following:

   1. Name
   
   1. Password expiration date
  
1. Specify resource allocation settings.
1. Specify session settings.
1. Add users.

   In the **Include users** section, specify which users to add to the group when it's created.
  
1. Click **Create**.

### Information about groups
{: #group-info}

|Value          | Description                      |
|:--------------|:---------------------------------|
|Name       | Specifies the name of the group.|
|Owner          | Specifies the database user who owns the group.
|Default priority| Specifies the workload management control that specifies the default priority for queries that are run by the users in this group.
|Max priority| Specifies the workload management control that specifies the maximum priority that a user in the group can assign to sessions or queries.
|Password expiration| Specifies when a group password expires.|
|Created on | Specifies when the group was created.|
{: caption="Table 1. The table lists group-related values and their definitions." caption-side="bottom"}

### Groups actions
{: #groups-actions}

In the Groups list view, there is an overflow menu that lists the actions that can be taken on each group. 

|Value          | Description                      |
|:--------------|:---------------------------------|
|Password expiration | Set the time in days after which the password expires for the members of a group.|
|Assign owner| Set the owner of the group.|
|Manage users| Add or remove users from the group.|
|Rename| Change the group name.|
|View privileges| View and alter the privileges for the group, which dictate what users in the group can view and execute.|
|Remove | Delete the group from the system.|
{: caption="Table 1. The table lists group-related actions and their definitions." caption-side="bottom"}

### Granting admin privileges to groups
{: #grant-admin-groups}

Group privileges dictate what actions canb be taken by users who are a part of the group.

1. Go to **Users and groups > Groups**.
1. Select the group for which you want to grant admin privileges and select **Admin privileges** from the overflow menu.

   In this view, you can see different admin privileges, which are already granted or that can be granted to the selected group.
   
   Granting these privileges allows the users that belong to the group to do the actions that the privileges correspond to. Granting privileges on global database and global schema unlocks all the privileges to the user equivalent to an admin.
   
1. Click **Edit**.
1. Update, grant, or revoke object privileges by putting ticks in corresponding boxes.
1. Click **Save**.   

### Granting object privileges to groups
{: #grant-object-groups}

Group privileges dictate what actions canb be taken by users who are a part of the group.

1. Go to **Users and groups > Groups**.
1. Select the group for which you want to grant object privileges and select **Object privileges** from the overflow menu.
1. Select a database.
   
   You can choose between the *Global* database and a specific database. *Global* means that the privileges are related to generic object types such as views, tables, databases, groups.
   
   If you choose *Global*, the privilege is assigned globally across the system.
 
1. Select a schema.

   If you selected *Global* for the database in step 3, skip this step.
   
1. Click **Edit**.
1. Update, grant, or revoke object privileges by putting ticks in corresponding boxes.
1. Click **Save**.

### Deleting groups
{: #delete-groups}

1. Go to **Users and groups > Groups**.
1. Select the group that you want to remove and select **Remove** from the overflow menu.
 
   In the confirmation pop up, click **Remove** to remove the group or **Cancel** to cancel this action.
