import Project from "../components/homePage/projects/Project";
import ProjectSectionTitles from "../components/homePage/projects/ProjectSectionTitles";

export default function Projects({ data }) {
  return (
    <section className="pt-20 px-5 md:px-10 lg:px-12.5 xl:pt-37.5">
      <ProjectSectionTitles data={data} />
      <Project data={data} />
    </section>
  );
}
