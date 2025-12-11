export default defineAppConfig({
  ui: {
    colors: {
      primary: "yellow",
      neutral: "bg-green-800",
    },
    footer: {
      slots: {
        root: "border-t border-default",
        left: "text-sm text-muted",
      },
    },
  },
  seo: {
    siteName: "The FG Expansion Spreadsheet",
  },
  header: {
    title: "",
    to: "/",
    logo: {
      alt: "",
      light: "",
      dark: "",
    },
    search: true,
    colorMode: true,
    links: [{
      "icon": "i-simple-icons-github",
      "to": "https://github.com/nuxt-ui-templates/docs",
      "target": "_blank",
      "aria-label": "GitHub",
    }],
  },
  footer: {
    credits: `Built with Nuxt. • Copyright © 2025 Skylafalls et, al.`,
    colorMode: false,
    links: [{
      "icon": "i-simple-icons-discord",
      "to": "https://discord.gg/",
      "target": "_blank",
      "aria-label": "The BBN Foundation's planning Discord server",
    }, {
      "icon": "i-simple-icons-github",
      "to": "https://github.com/skylafalls/fg-exp",
      "target": "_blank",
      "aria-label": "The FG Expansion Spreadsheet on GitHub",
    }],
  },
  toc: {
    title: "Table of Contents",
    bottom: {
      title: "Community",
      edit: "https://github.com/nuxt-ui-templates/docs/edit/main/content",
      links: [{
        icon: "i-lucide-star",
        label: "Star on GitHub",
        to: "https://github.com/nuxt/ui",
        target: "_blank",
      }, {
        icon: "i-lucide-book-open",
        label: "Nuxt UI docs",
        to: "https://ui.nuxt.com/docs/getting-started/installation/nuxt",
        target: "_blank",
      }],
    },
  },
});
