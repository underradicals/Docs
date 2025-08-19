---
layout: doc
---

# Creating Python Environment

Open up your terminal:

::: code-group

```bash
python3 -m venv .venv && source ./.venv/bin/activate
```

```powershell
python -m venv .venv; ./.venv/Scripts/activate
```

:::

## But Why?

Python is primarily a scripting language, and its package system is global by default, that means that all installed packages not installed into a virtual environment are installed into a shared `site-packages` directory and that global directory is tied `one-to-one` to the python interpreter. So what that means, if we did not have virtual environments, installing `airflow` and `dbt` for one project might work if you used the correct versions. However, when you started another project, and wanted to use a newer version of dbt perhaps with `prefect` the package version conflicts would make project setup a nightmare. And the more projects you complete, the worse this problem becomes.

## Virtual Environments

So when you create a new project and want to isolate that project from other projects you may be working on, you create a virtual environment. What do you get from taking this extra step?

> - An isolated python executable
> - An isolated pip executable
> - An isolated python interpreter

And this solves the problem of version conflicts, and make developing with python a simpler experience.
