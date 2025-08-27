import { defineConfig } from "vitepress";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  vite: {
    server: {
      port: 3000,
      host: "0.0.0.0",
      https: {
        key: path.resolve("E:\\certs\\cert.key"),
        cert: path.resolve("E:\\certs\\cert.crt"),
      },
    },
    build: {
      emptyOutDir: true,
    },
  },
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    outline: {
      level: [2, 4]
    },
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Resume",
        items: [
          { text: "Resume", link: "/resume/index" },
          {
            text: "Download",
            link: "https://underradicals.github.io/resume.pdf",
            target: "blank",
          },
          {
            text: "Interview Question",
            items: [
              { text: "Data Engineer", link: "/resume/data-engineer.md" },
            ],
          },
        ],
      },
      {
        text: "Posts",
        items: [
          {
            text: "Computer Science",
            items: [{ text: "OS Basic", link: "/cs/index" }],
          },
          {
            text: "Data Engineering and Analytics",
            items: [{ text: "Data Modeling", link: "/data_engineering/index" }],
          },
        ],
      },
      {
        text: "Docs",
        items: [
          {
            text: "Python",
            items: [
              {
                text: "Create Virtual Environment",
                link: "/docs/python/index",
              },
            ],
          },
          {
            text: "Apache Spark",
            items: [{ text: "Getting Started", link: "/docs/spark/index" }],
          },
          {
            text: "Prefect",
            items: [{ text: "Installation", link: "/docs/prefect/index" }],
          },
          {
            text: "dbt (data build tool)",
            items: [{ text: "Installation", link: "/docs/dbt/index" }],
          },
          {
            text: "Object Storage",
            items: [{ text: "MinIO", link: "/docs/minio/index" }],
          },
        ],
      },
    ],

    sidebar: {
      "/resume/": [
        {
          text: "Interview-Questions",
          link: "/resume/data-engineer.md",
        },
        {
          text: "Answers",
          items: [
            {
              text: "PySpark & Databricks",
              link: "/resume/spark-and-databricks.md",
            },
            {
              text: "Delta Lake",
              link: "/resume/delta-lake.md",
            },
          ],
        },
      ],
      "/cs/": [
        {
          text: "Computer Science",
          items: [{ text: "OS Basics", link: "/cs/index" }],
        },
      ],
      "/data_engineering/": [
        {
          text: "Data Engineering (AWS)",
          items: [
            { text: "Getting Started", link: "/data_engineering/index" },
            { text: "Data Discovery", link: "/data_engineering/data-discovery" },
            { text: "The Modern Data Architecture", link: "/data_engineering/modern-data-architecture" },
            { text: "Orchestration and Automation", link: "/data_engineering/orchestration-and-automation" },
            { text: "Security", link: "/data_engineering/security" }
          ],
        },
      ],
      "/docs/python/": [
        {
          text: "Python",
          items: [{ text: "Virtual Environment", link: "/docs/python/index" }],
        },
      ],
      "/docs/spark/": [
        {
          text: "Apache Spark",
          items: [{ text: "Getting Started", link: "/docs/spark/index" }],
        },
      ],
      "/docs/prefect/": [
        {
          text: "Prefect",
          items: [
            { text: "Installation", link: "/docs/prefect/index" },
            { text: "Running Prefect", link: "/docs/prefect/first-run" },
          ],
        },
      ],
      "/docs/dbt/": [
        {
          text: "dbt (data build tool)",
          items: [{ text: "Installation", link: "/docs/dbt/index" }],
        },
      ],
      "/docs/minio/": [
        {
          text: "MinIO",
          items: [
            { text: "Getting Started", link: "/docs/minio/index" },
            { text: "Creating a User", link: "/docs/minio/creating-a-user" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/underradicals" },
      { icon: "linkedin", link: "https://x.com/underradicals" },
      { icon: "x", link: "https://www.linkedin.com/in/underradicals/" },
    ],
  },
});
