import { Outlet } from "react-router";
import me from "../assets/me.svg";
import Footer from "./footer";
import { Navbar } from "./navbar";
import { AppProvider } from "./provider";

export function links() {
  return [
    {
      rel: "icon",
      href: me,
      type: "image/svg+xml",
    },
  ];
}

export default function Layout() {
  return (
    <AppProvider>
      <Navbar />
      <div className="container mx-auto px-10 py-4">
        <Outlet />
      </div>
      <Footer />
    </AppProvider>
  );
}
