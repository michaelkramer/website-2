import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",

  ssr: false,
  buildDirectory: "dist",
  basename: "/website-2/",
  // return a list of URLs to prerender at build time
  async prerender() {
    return [
      "/",
      "/rls",
      "/resume",
      "/icons",
      "/notes",
      "/notes/grpccode",
      "/notes/git",
    ];
  },
} satisfies Config;
