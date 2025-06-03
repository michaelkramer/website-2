import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "./src",
  ssr: false,
  async prerender() {
    return [
      "/website-2/rls",
      "/website-2/resume",
      "/website-2/notes",
      "/website-2/icons",
    ];
  },
} satisfies Config;
