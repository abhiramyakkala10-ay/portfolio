import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import CursorParticles from "@/components/CursorParticles";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <CursorParticles />
      <Navbar />

      <main>
        {/* ── HERO: Scrollytelling Canvas + Overlay ── */}
        <div className="relative">
          <ScrollyCanvas />
          <Overlay />
        </div>

        {/* ── CONTENT SECTIONS ── */}
        <Projects />
        <About />
        <Education />
        <Contact />
      </main>
    </>
  );
}
