export default function About() {
  return (
    <div className="bg-[#0e1224] py-4 min-h-screen w-full mx-auto">
      <div className="p-10 lg:p-20 mx-5 lg:mx-20 text-[#F8F7F3] font-mono">
        <h2 className="text-4xl lg:text-5xl">Hello!</h2>
        <h1 className="text-5xl lg:text-6xl mt-4">I'm Aditya Saputra</h1>
        <p className="mt-6 lg:mt-10">
          I'm a technology enthusiast passionate about programming, especially
          in web development. My journey began in high school and continued
          through completing the Hacktiv8 bootcamp as a full-stack JavaScript
          developer. I'm always learning new technologies to stay ahead and
          improve my skills.
        </p>
      </div>

      <div className="text-[#F8F7F3] px-5 lg:px-20 mx-5 lg:mx-20 font-mono">
        <h2 className="text-xl lg:text-2xl">Technology that I use:</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          <div>
            <p className="font-semibold">Language</p>
            <div className="flex flex-wrap mt-2 gap-2">
              {["Javascript", "Typescript", "Go"].map((tech) => (
                <span
                  key={tech}
                  className="bg-gradient-to-r from-[#FEB143] to-[#b9a87d] px-3 py-1 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold">Frontend & Mobile</p>
            <div className="flex flex-wrap mt-2 gap-2">
              {[
                "React",
                "NextJs",
                "Tailwind",
                "Redux",
                "Vite",
                "React Native",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-gradient-to-r from-[#FEB143] to-[#b9a87d] px-3 py-1 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold">Backend & Database</p>
            <div className="flex flex-wrap mt-2 gap-2">
              {["ExpressJs", "NodeJs", "PostgreSQL", "MongoDB"].map((tech) => (
                <span
                  key={tech}
                  className="bg-gradient-to-r from-[#FEB143] to-[#b9a87d] px-3 py-1 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold">Cloud & DevOps</p>
            <div className="flex flex-wrap mt-2 gap-2">
              {["AWS", "Docker", "Git/Github"].map((tech) => (
                <span
                  key={tech}
                  className="bg-gradient-to-r from-[#FEB143] to-[#b9a87d] px-3 py-1 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
