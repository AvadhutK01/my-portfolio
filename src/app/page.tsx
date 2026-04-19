import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <Hero />
      <About />
      <Experience />
      <Achievements />
      <Projects />
      <Contact />
      <footer className="w-full py-6 md:py-8 text-center border-t border-border bg-card mt-auto relative z-10">
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-1.5 flex-wrap px-4">
          Built with <span className="text-primary font-semibold">Next.js</span>. 
          Crafted with <FaHeart className="text-red-500 inline animate-pulse" /> by Avadhut Kelaskar &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
