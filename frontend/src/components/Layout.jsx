import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress, CustomCursor } from "@/components/Interactions";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const Layout = () => (
  <div className="App grain min-h-screen bg-[#050505] relative">
    <ScrollToTop />
    <ScrollProgress />
    <CustomCursor />
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);
