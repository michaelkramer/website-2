import { Outlet } from "react-router";
import Footer from "./footer";
import { Navbar } from "./navbar";
import { AppProvider } from "./provider";

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
