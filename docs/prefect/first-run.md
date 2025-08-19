---
layout: doc
---

<script>
import ImagePopout from "../../components/ImagePopout.vue";
</script>

# Your First Run

Running `Prefect` is straight forward, however, it depends where you are running it that matters. You can run prefect in the cloud if you have an account, or you can run it locally with `prefect server start`. If you are not sure where it will be running just check your `profiles.toml` file. Usually located in `.prefect` directory, this is usually located where your dot-directories are normally located. On Windows, this is `~/.prefect/` and on Linux it is the same: `/home/username/.prefect`

Inside `profiles.toml` there may or may not be some environment variables set for you, I believe this is determined if you have ran your flows already or not.

> [!caution]
> If you are not using the default database which is SQLite, then you will have to create a database named `prefect`, or the server will not run.

```toml
active = "local"

[profiles.local]
PREFECT_API_URL="http://127.0.0.1:4200/api"
PREFECT_API_DATABASE_CONNECTION_URL="postgresql+asyncpg://postgres:your_password@localhost:5432/prefect"
PREFECT_API_DATABASE_TIMEOUT=600
```

After all that is taken care of, run your python file like normal.

```bash
python main.py
```

Then in your server running at [http://127.0.0.1:4200/runs](http://127.0.0.1:4200/runs) you should see something like this:
