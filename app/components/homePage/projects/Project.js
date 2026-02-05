import SingleProject from "./SingleProject";

export default function Project({ data }) {
  const aspect = ["7 / 5", "5 / 6", "10 / 9", "7 / 5"];
  return (
    <div className="flex flex-col gap-y-5 md:gap-y-12.5 lg:flex-row lg:gap-x-6">
      {data.projects.map((project, index) => (
        <div className="lg:w-1/4" key={index}>
          <SingleProject
            project={project}
            index={index}
            aspect={aspect[index]}
          />
        </div>
      ))}
    </div>
  );
}
