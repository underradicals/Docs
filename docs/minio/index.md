---
layout: doc
---

# MinIO

## Installation

## Setup

Now that we have MinIO setup and the CLI installed, lets start playing around on the command line: Here are a list of some useful commands:

### List all aliases

```bash
mc alias ls
```

::: info Console Output `mc alias ls`

```bash
➜  ~ mc alias ls
local
  URL       : http://localhost:9000
  AccessKey : minioadmin # Change these immediately
  SecretKey : minioadmin # Change these immediately
  API       : S3v4
  Path      : auto
  Src       : C:\Users\tangl\mc\config.json

myminio
  URL       : http://192.168.1.141:9000
  AccessKey : minioadmin # Change these immediately
  SecretKey : minioadmin # Change these immediately
  API       : s3v4
  Path      : auto
  Src       : C:\Users\tangl\mc\config.json
```

:::

### Get Administrator Info

```bash
mc admin info myminio
```

::: info Console Output `mc admin info myminio`

```bash
➜  ~ mc admin info myminio
●  192.168.1.141:9000
   Uptime: 6 minutes
   Version: 2025-07-23T15:54:02Z
   Network: 1/1 OK
   Drives: 1/1 OK
   Pool: 1

┌──────┬────────────────────────┬─────────────────────┬──────────────┐
│ Pool │ Drives Usage           │ Erasure stripe size │ Erasure sets │
│ 1st  │ 28.8% (total: 931 GiB) │ 1                   │ 1            │
└──────┴────────────────────────┴─────────────────────┴──────────────┘

2.9 KiB Used, 1 Bucket, 1 Object
1 drive online, 0 drives offline, EC:0
```

:::

### List all Users for current Alias

```bash
mc admin user ls myminio
```

::: info Console Output `mc admin user ls myminio`

```bash
enabled    tanglesites           readwrite
```

:::

> Note, if you do not have any users for the current alias, then obviously this will not return anything.

:::

### List all Policies

Here the user `tanglesites` has a `readwrite` policy associated with it. There are other policy options:

```bash
mc admin policy list myminio
```

::: info Console Output `mc admin user ls myminio`

```bash
➜  ~ mc admin user ls myminio
writeonly
consoleAdmin
diagnostics
readonly
readwrite
```

:::
