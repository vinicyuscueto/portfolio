import { useData } from "../../hooks/useData";

const Projects = () => {
  const { data, isLoading, error } = useData();

  if (isLoading) return null;
  if (error) return null;

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2>Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data?.projects?.map((item, index) => (
            <div
              key={index}
              className="panel"
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item?.technologies?.map((item, index) => (
                  <div key={index}>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href={item.link} className="button-label" target="_blank">
                  Ver Projeto <i className="bx bx-right-arrow-alt" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
