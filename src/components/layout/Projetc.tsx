import Card from "../UI/Card";
import data from "../../data/projects.json";
import Link from "next/link";

export default function Project() {
  const filteredData = data.filter((project) => project.star === true);
  return (
    <div className="container mx-auto min-h-screen justify-center items-center flex flex-col">
      <h2 className="text-black p-6 text-3xl font-mono">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {filteredData.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
      <div className="flex justify-center items-center p-6">
        <Link
          href="/projects"
          className="px-12 font-mono py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg bg-gradient-to-r from-[#FEB143] to-[#b9a87d] hover:saturate-150 hover:scale-105"
        >
          See More
        </Link>
      </div>
    </div>
  );
}
