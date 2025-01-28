import Navbar from "@/components/Navbar";
import TechSection from "@/components/ui/TechSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="container mx-auto lg:absolute top-0 left-0 right-0 z-10">
        <Navbar />
      </header>

      <main className="container mx-auto min-h-screen flex flex-col lg:flex-row items-center gap-8 mt-8">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col items-center text-center gap-4 px-4 lg:items-start lg:text-left">
          <h1 className="text-3xl lg:text-6xl font-bold text-[#FEB143]">
            Building the Future with Code
          </h1>
          <blockquote className="text-lg font-light leading-relaxed">
            Jadilah kreatif dalam setiap langkah, terus belajar, dan wujudkan
            ide-ide melalui kode yang sederhana namun berdampak besar
          </blockquote>
          <p className="text-sm italic font-light text-gray-600">
            @Adityasputra
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/Avatar.jpeg"
              alt="Aditya Saputra's Avatar Profile"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </main>

      <section className="bg-[#0e1224] py-4 min-h-screen w-full mx-auto">
        <div className="text-[#F8F7F3] p-10 mx-5 lg:mx-20">
          <h2 className="text-4xl lg:text-5xl">Hello!</h2>
          <h1 className="text-5xl lg:text-6xl mt-4">I'm Aditya Saputra</h1>
          <p className="mt-6">
            I'm a technology enthusiast passionate about programming, especially
            in web development. My journey began in high school and continued
            through completing the Hacktiv8 bootcamp as a full-stack JavaScript
            developer. I'm always learning new technologies to stay ahead and
            improve my skills.
          </p>
        </div>

        <div className="text-[#F8F7F3] p-10 mx-5 lg:mx-20">
          <h2 className="text-xl lg:text-2xl">Technology that I use:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            <TechSection
              techSection={{
                title: "Language",
                technologies: ["Javascript", "Typescript", "Go"],
              }}
            />
            <TechSection
              techSection={{
                title: "Frontend & Mobile",
                technologies: [
                  "React",
                  "NextJs",
                  "Tailwind",
                  "Redux",
                  "Vite",
                  "React Native",
                ],
              }}
            />
            <TechSection
              techSection={{
                title: "Backend & Database",
                technologies: ["ExpressJs", "NodeJs", "PostgreSQL", "MongoDB"],
              }}
            />
            <TechSection
              techSection={{
                title: "Cloud & DevOps",
                technologies: ["AWS", "Docker", "Git/Github"],
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
