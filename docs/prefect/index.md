---
layout: doc
---

# Prefect

## Creating Python Environment

See the instructions at [Create Virutal Environment](../python/index.md)

## Install Prefect

::: code-group

```bash [pip]
pip install -U prefect
```

```bash [uv]
uv pip install -U prefect
```

:::

You can test if the installation was successful by trying the following script

```bash
prefect version
```

Which should something similar to what is seen below:

```bash
Version:             3.4.11
API version:         0.8.4
Python version:      3.12.3
Git commit:          3c98aa7f
Built:               Thu, Jul 31, 2025 08:45 PM
OS/Arch:             win32/AMD64
Profile:             local
Server type:         cloud
Pydantic version:    2.11.7
```

## Start the Local Server

Use the command below

```bash
prefect server start
```

The result is seen below

```bash
 ___ ___ ___ ___ ___ ___ _____
| _ \ _ \ __| __| __/ __|_   _|
|  _/   / _|| _|| _| (__  | |
|_| |_|_\___|_| |___\___| |_|

Configure Prefect to communicate with the server with:

    prefect config set PREFECT_API_URL=http://127.0.0.1:4200/api

View the API reference documentation at http://127.0.0.1:4200/docs

Check out the dashboard at http://127.0.0.1:4200
```

Out of the box, the api can be found at [http://127.0.0.1:4200/api](http://127.0.0.1:4200/api), Swagger API docs are at [http://127.0.0.1:4200/docs](http://127.0.0.1:4200/docs) and the dashboard can be found at [http://127.0.0.1:4200](http://127.0.0.1:4200)
