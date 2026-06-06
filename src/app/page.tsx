import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import About from "@/components/About";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <main>
        {/* ── HERO: Scrollytelling Canvas + Overlay ── */}
        <div className="relative">
          <ScrollyCanvas />
          <Overlay />
        </div>

        {/* ── CONTENT SECTIONS ── */}
        <Projects />
        <WorkExperience />
        <About />
        <Education />
        <Contact />
      </main>
    </>
  );
}
