import {
  type RouteConfig,
  route,
  layout,
  index,
  // eslint-disable-next-line import/no-unresolved
} from "@react-router/dev/routes";

export default [
  layout("./layout/main-layout.tsx", [
    index("./pages/home.tsx"),
    route("contact", "./pages/contact.tsx"),
    route("website-2/resume", "./pages/resume.tsx"),
    route("./icons", "./pages/icons.tsx"),
    route("rls", "./pages/rls.tsx"),
    route("notes", "./pages/notes.tsx", [
      index("./pages/notes/index.tsx"),
      route("grpccode", "./pages/notes/grpccode.tsx"),
      route("git", "./pages/notes/git.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
