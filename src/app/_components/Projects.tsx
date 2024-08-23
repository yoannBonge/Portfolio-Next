import projectsData from "@/data/projects.json";
import Image from "next/image";

export default function Projects() {
  const projects = projectsData;
  return (
    <ul className="group/list">
      {projects.map((project) => (
        <li key={project.title} className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:min-w-[440px] lg:grid-cols-12 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-2 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-950/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="-z-10 sm:order-2 sm:col-span-2 lg:z-0 lg:col-span-6">
              <h3>
                <a
                  className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href={
                    project.deployment ? project.deployment : project.githubLink
                  }
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${project.title} (s'ouvre dans un nouvel onglet)`}
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    <span className="inline-block">
                      {project.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </h3>
              <p className="mb-3 mt-2 max-w-48 text-sm font-semibold leading-normal">
                {project.summary}
              </p>
              <Image
                src={project.mainScreenshot}
                alt={`Capture d'écran de ${project.title}`}
                width={200}
                height={48}
              />
              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Outils utilisés :"
              >
                {project.tools.map((tool, index) => (
                  <li key={index} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      {tool}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <p
              className="custom-scrollbar -z-10 order-2 self-center text-wrap sm:w-[65vw] lg:z-20 lg:h-64 lg:w-64 lg:self-end lg:overflow-y-auto lg:pr-9"
              style={
                {
                  // scrollbarWidth: "none" /* For Firefox */,
                  // msOverflowStyle: "none" /* For IE and Edge */,
                }
              }
            >
              {project.detailsContext} <br />
              <br />
              {project.details}
            </p>
          </div>
          <hr className="mt-12 w-full lg:opacity-0" />
        </li>
      ))}
    </ul>
  );
}
