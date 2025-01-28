import Navbar from "@/components/Navbar";
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
    </>
  );
}
