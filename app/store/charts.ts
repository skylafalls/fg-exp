import type { NavigationMenuChildItem } from "@nuxt/ui";

export const normalCharts = [
  {
    label: "Informals",
    description: "List of informal FG entries.",
    icon: "i-lucide-chart-bar",
    to: "/charts/informal",
  },
  {
    label: "Rigorous",
    description: "List of rigorous FG entries.",
    icon: "i-lucide-chart-bar",
    to: "/charts/rigorous",
  },
  {
    label: "Unranked",
    description: "List of unranked entries.",
    icon: "i-lucide-chart-spline",
    to: "/charts/unranked",
  },
  {
    label: "Features",
    description: "Symbols used in the chart and their meanings.",
    icon: "i-lucide-circle-alert",
    to: "/charts/features",
  },
  {
    label: "Milestones",
    description: "List of entries that are milestones.",
    icon: "i-lucide-flag",
    to: "/charts/milestones",
  },
] satisfies NavigationMenuChildItem[];

export const docsCharts = [
  {
    label: "Documents & Works",
    icon: "i-lucide-notebook-pen",
    description: "Works of FG that's pretty cool.",
    to: "/docs/fg-works",
  },
  {
    label: "Difficulties",
    icon: "i-lucide-timer",
    description: "Difficulties of rFG and what they mean.",
    to: "/docs/difficulties",
  },
  {
    label: "Rigor Classification",
    icon: "i-lucide-a-arrow-up",
    description: "Classifications of how rigorous something is.",
    to: "/docs/rigor-classifcation",
  },
  {
    label: "Concepts",
    icon: "i-lucide-list",
    description: "Common concepts the community uses.",
    to: "/docs/concepts",
  },
] satisfies NavigationMenuChildItem[];

export const specializedCharts = [
  {
    label: "Standard Breakology Index",
    icon: "i-lucide-heart-crack",
    description: "The specifics of the Standard Breakology Index.",
    to: "/charts/specialized/sbi",
  },
] satisfies NavigationMenuChildItem[];
