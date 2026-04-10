import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Alumni from "../components/Alumni";
import CTA from "../components/CTA";
import Stats from "../components/Stats";
import Courses from "../components/Courses";
import Footer from "../components/Footer";

// Server Component: GAP English - Anh ngữ Ms. Loan
export default function Homepage() {
  const bodyFontStyle = "font-baloo2";

  return (
    <div
      className={`min-h-screen bg-[#e8f6df] text-[#7d3429] selection:bg-[#cfecc4] ${bodyFontStyle} overflow-x-hidden`}
    >
      <Navigation />
      <Hero />
      <About />
      <Testimonials />
      <Alumni />
      <CTA />
      <Stats />
      <Courses />
      <Footer />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `,
        }}
      />
    </div>
  );
}
