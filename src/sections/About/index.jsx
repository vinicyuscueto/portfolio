import { useData } from "../../hooks/useData";

const About = () => {
  const { data, isLoading, error } = useData();

  if (isLoading) return null;
  if (error) return null;

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2>Sobre mim</h2>
        <div className="panel">
          <p>{data?.about}</p>
          <div className="rounded-xl p-0">
            <h3>Conhecimento</h3>
            <div className="flex flex-wrap gap-2">
              {data?.skills?.map((item, index) => (
                <div key={index}>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="panel">
            <h3>Experiência</h3>
            <div className="text-gray-300">
              {data?.experience?.map((item, index) => (
                <div key={index} className="my-4">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="panel">
            <h3>Certificações</h3>
            <div className="text-gray-300">
              {data?.badges?.map((item, index) => (
                <div key={index} className="my-4">
                  <h4>{item.title}</h4>
                  <a href={item.link} className="button-label" target="_blank">
                    Ver credencial <i className="bx bx-right-arrow-alt" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
