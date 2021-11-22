---

copyright:
  years: 2021
lastupdated: "2021-11-18"

keywords: nzbackup, netezza nzbackup, nzsqa, netezza nzsqa, nzsystem, netezza nzsystem, 

subcollection: netezza

---

{:external: target="_blank" .external}
{:shortdesc: .shortdesc}
{:table: .aria-labeledby="caption"}
{:tip: .tip}
{:important: .important}
{:shortdesc: .shortdesc}
{:screen: .screen}  
{:codeblock: .codeblock}  
{:pre: .pre}
{:note: .note}
{:important: .important}
{:step: data-tutorial-type='step'}
{:caution: .caution}

# Nz commands
{: #nz-commands}

## **`nzsqa`** command 
{: #nzsqa-command}

**`nzsqa`** is an internal command that runs low-level diagnostic tests.

Occasionally, Customer Service might ask you to use commands that are in the /nz/kit/bin/adm directory. These commands are low-level diagnostic commands that can be run only on the host and require administrative privileges.

Do not run these commands unless explicitly directed to do so by Netezza Customer Service. Running these commands without supervision can result in system crashes, data loss, or data corruption.
{:caution: .caution}


## **`nzpush`** command 
{: #nzpush-command}

**`nzpush`** provides low-level access to the Linux-based SPUs. Running this command can cause the system to crash or data to be lost.

Occasionally, Customer Service might ask you to use commands that are in the /nz/kit/bin/adm directory. These commands are low-level diagnostic commands that can be run only on the host and require administrative privileges.

Do not run these commands unless explicitly directed to do so by Netezza Customer Service. Running these commands without supervision can result in system crashes, data loss, or data corruption.
{:caution: .caution}

## **`nzsystem`** command 
{: #nzsystem-command}

Use the **`nzsystem`** command to change the system state, and show and set configuration information.

### **`nzsystem`** syntax
{: #nzsystem-syntax}

The **`nzsystem`** command uses the following syntax:

   ```
   nzsystem [-h|-rev|-hc] subcmd [subcmd_options]
   ```
   {: screen}
   {: codeblock}
 
 ### **`nzsystem`** inputs
{: #nzsystem-inputs}

The **`nzsystem`** command takes the following inputs: 

| Input | Description |
|----------|---------|
| nzsystem offline options | Takes the system offline. |
| nzsystem pause options | Pauses the system. Use this command to pause the system for administrative work, but allow all current transactions to complete. |
| nzsystem restart options | Stops and then automatically restarts the system. |
| nzsystem resume options | Returns the system to the online state. |
| nzsystem set options | Configures a system setting. Do not change your system settings unless directed to do so by IBM Support. |
| nzsystem showRegistry options | Displays the system configuration registry. |
| nzsystem showRev options | Displays the system software revision level. |
| nzsystem showState options | Displays the system state. This is the default subcommand if you type the nzsystem command without any subcommands. It is also the same as the nzstate show command. |
| nzsystem showIssues | Displays any hardware or dataslice issues that are found on the system. |
| nzsystem stop options | Stops the system. |
{: caption="Table 1. The nzsystem inputs" caption-side="bottom"}

### **`nzsystem`** options 
{: #nzsystem-options}

The **`nzsystem`** command takes the following options: 

| Command | Option | Description |
|----------|---------|---------|
| All nzsystem commands | `-u user` | Specifies the database user name [NZ_USER]. |
|----------| -pw password| Specifies the user password [NZ_PASSWORD].|
|----------| -host name| Specifies the host name or IP address [NZ_HOST].|
|----------| -timeout secs| Specifies the number of seconds to wait for the command to complete before it exits with a timeout error. The default is 300.|
| offline, pause, restart, set, stop| -force | Does not prompt for confirmation. |
| offline, pause, restart, stop | -now | Aborts the transactions that cannot be restarted after the state transition. |
|----------| -nowAfter seconds | Specifies the time for the work to finish before it resorts to -now. The default is 300 seconds. |
| set | -regFile file_name | Loads the registry configuration file. |
|----------| -arg | Specifies the configuration argument and its value. Some configuration arguments take a comma-separated list of multiple values. (<tag>=<value[, value,...]>). |
|----------| -ignoreErrors | Skips unavailable or erroneous settings. |
| showRev | -build | Shows the build string for the software as set by the Configuration Manager (CM). |
|----------| -label | Shows the label version of the build string. | 
{: caption="Table 1. The nzsystem options" caption-side="bottom"}
  
### **`nzsystem`** description
{: #nzsystem-description}

The **`nzsystem`** command does the following:

-  Privileges required

You can run a subset of the commands such as showRev and showState by using any database user account. However, your database user account must have the Manage System privilege to start or manage the system states and to set or show the registry settings.

- Common tasks

Use the **`nzsystem`** command to show and change system state.




   




