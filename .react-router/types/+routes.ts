// Generated by React Router

import "react-router"

declare module "react-router" {
  interface Register {
    pages: Pages
    routeFiles: RouteFiles
  }
}

type Pages = {
  "/": {
    params: {};
  };
  "/website-2": {
    params: {};
  };
  "/website-2/contact": {
    params: {};
  };
  "/website-2/resume": {
    params: {};
  };
  "/website-2/icons": {
    params: {};
  };
  "/website-2/rls": {
    params: {};
  };
  "/website-2/projects": {
    params: {};
  };
  "/website-2/notes": {
    params: {};
  };
  "/website-2/notes/grpccode": {
    params: {};
  };
  "/website-2/notes/git": {
    params: {};
  };
};

type RouteFiles = {
  "root.tsx": {
    id: "root";
    page: "/" | "/website-2" | "/website-2/contact" | "/website-2/resume" | "/website-2/icons" | "/website-2/rls" | "/website-2/projects" | "/website-2/notes" | "/website-2/notes/grpccode" | "/website-2/notes/git";
  };
  "./layout/main-layout.tsx": {
    id: "layout/main-layout";
    page: "/website-2" | "/website-2/contact" | "/website-2/resume" | "/website-2/icons" | "/website-2/rls" | "/website-2/projects" | "/website-2/notes" | "/website-2/notes/grpccode" | "/website-2/notes/git";
  };
  "./pages/home.tsx": {
    id: "pages/home";
    page: "/website-2";
  };
  "./pages/contact.tsx": {
    id: "pages/contact";
    page: "/website-2/contact";
  };
  "./pages/resume.tsx": {
    id: "pages/resume";
    page: "/website-2/resume";
  };
  "./pages/icons.tsx": {
    id: "pages/icons";
    page: "/website-2/icons";
  };
  "./pages/rls.tsx": {
    id: "pages/rls";
    page: "/website-2/rls";
  };
  "./pages/projects/index.tsx": {
    id: "pages/projects/index";
    page: "/website-2/projects";
  };
  "./pages/notes.tsx": {
    id: "pages/notes";
    page: "/website-2/notes" | "/website-2/notes/grpccode" | "/website-2/notes/git";
  };
  "./pages/notes/index.tsx": {
    id: "pages/notes/index";
    page: "/website-2/notes";
  };
  "./pages/notes/grpccode.tsx": {
    id: "pages/notes/grpccode";
    page: "/website-2/notes/grpccode";
  };
  "./pages/notes/git.tsx": {
    id: "pages/notes/git";
    page: "/website-2/notes/git";
  };
};