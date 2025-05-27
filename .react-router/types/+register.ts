import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/contact": {};
  "/website-2/resume": {};
  "/icons": {};
  "/rls": {};
  "/notes": {};
  "/notes/grpccode": {};
  "/notes/git": {};
};