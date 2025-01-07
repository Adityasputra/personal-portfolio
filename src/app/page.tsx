import About from "@/components/layout/About";
import Footer from "@/components/layout/Footer";
import HomePage from "@/components/layout/Home";
import Navbar from "@/components/layout/Navbar";
import Project from "@/components/layout/Projetc";

export default function Home() {
  return (
    <>
      <div className="container mx-auto min-h-screen flex flex-col">
        <Navbar />
        <HomePage />
      </div>
      <About />
      <Project />
      <Footer />
    </>
  );
}
