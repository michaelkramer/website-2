import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",

  ssr: false,
  prerender: true,
  buildDirectory: "dist",
  basename: "/website-2/",
} satisfies Config;
