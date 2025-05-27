import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/contact": {};
  "/resume": {};
  "/icons": {};
  "/rls": {};
  "/notes": {};
  "/notes/grpccode": {};
  "/notes/git": {};
};