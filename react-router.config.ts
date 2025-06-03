import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "./src",
  ssr: false,
  prerender: ["/resume", "/website-2/rls"],
} satisfies Config;
