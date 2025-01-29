import Card from "@/components/ui/Card";
import data from "../../data/projects.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">My Projects</h1>
          <p className="mt-2 text-gray-600">
            A collection of my latest works, from web apps to mobile apps.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
