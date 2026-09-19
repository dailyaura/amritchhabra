import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Seo from "./pages/Seo";
import SocialMedia from "./pages/SocialMedia";
import MetaAds from "./pages/MetaAds";
import EmailMarketing from "./pages/EmailMarketing";
import ContentWriting from "./pages/ContentWriting";
import Results from "./pages/Results";
import Contact from "./pages/Contact";

const ScrollManager = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="min-h-screen bg-ink text-slate-200">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/seo" element={<Seo />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/meta-ads" element={<MetaAds />} />
            <Route path="/email-marketing" element={<EmailMarketing />} />
            <Route path="/content-writing" element={<ContentWriting />} />
            <Route path="/results" element={<Results />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster theme="dark" position="bottom-right" toastOptions={{ style: { background: "#0b0f19", border: "1px solid #1e293b", color: "#f9fafb" } }} />
    </BrowserRouter>
  );
}
