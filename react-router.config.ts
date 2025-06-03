import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "./src",
  ssr: false,
  prerender: [
    "/website-2/",
    "/website-2/contact",
    "/website-2/resume",
    "/website-2/icons",
    "/website-2/rls",
    "/website-2/notes",
    "/website-2/notes/grpccode",
    "/website-2/notes/git",
  ],
} satisfies Config;
