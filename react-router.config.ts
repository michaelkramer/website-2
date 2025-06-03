import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "./src",
  ssr: false,
  prerender: [
    "/",
    "/contact",
    "/resume",
    "/icons",
    "/rls",
    "/notes",
    "/notes/grpccode",
    "/notes/git",
  ],
} satisfies Config;
