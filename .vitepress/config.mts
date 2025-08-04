import { defineConfig, UserConfig } from 'vitepress'
import { readFileSync } from 'fs'

const viteConfig = {
  server: {
    host: '0.0.0.0',
    port: 3000,
    https: {
      key: readFileSync('/home/underradicals/Documents/certs/cert.key'),
      cert: readFileSync('/home/underradicals/Documents/certs/cert.crt'),
      ca: readFileSync('/home/underradicals/Documents/certs/mycert.pem'),
      requestCert: true,
      rejectUnauthorized: false
    }
  },
  build: {
    emptyOutDir: true
  },
} as UserConfig

export default defineConfig({
  vite: viteConfig,
  title: "Portfolio & Docs",
  description: "Underradicals",
  themeConfig: {
    outline: {
      level: [1, 4]
    },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Resume', items: [
          { text: 'Live View', link: '/resume' },
          { text: 'PDF View', link: '/resume.pdf', target: 'blank' }
        ]
      },
      {
        text: 'Posts', items: [ // Nav Title
          {
            text: 'Computer Science', items: [ // Dropdown Title
              { text: 'Internals', link: '/cs/basics' } // Dropdown Title Item
            ]
          }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Internals', items: [ // Sidebar Title
          { text: 'CS 101', link: '/cs/basics' } // Sidebar Title item
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/underradicals' },
      { icon: 'x', link: 'https://x.com/underradicals' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/underradicals/' }
    ]
  }
})
