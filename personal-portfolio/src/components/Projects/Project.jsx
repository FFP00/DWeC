import { useState, useEffect } from "react";

export default function Project({ filterMember, filterType }) {

    const [data, setData] = useState(null);  

    useEffect(() => {
        const fetchData = async () => {
        const res = await fetch("/data/projects.json"); 
        const json = await res.json();                
        setData(json);                                 
        };
        fetchData();
    }, []); 

    if (!data) return null;

    const filteredProjects = data.members.flatMap(miembros =>
        miembros.projects.filter(project =>
            (filterMember == "all" || miembros.name == filterMember) &&
            (filterType == "all" || project.type == filterType)
        )
        
    );

    return (
        <div className="Projects">
            <main className="py-5">
                <div className="container">
                    <h1 className="h3 fw-bold mb-4">Proyectos del equipo</h1>

                    <div className="row g-4" id="projectsGrid">
                        {filteredProjects.map( proyectos =>
                                <div className="col-md-6 col-lg-4" data-type={proyectos.type}>
                                    <div className="card h-100">
                                    <img src={proyectos.image} className="card-img-top" alt={proyectos.title} />
                                    <div className="card-body">
                                        <h3 className="h5">{proyectos.title}</h3>
                                        <p className="text-secondary">{proyectos.description}</p>
                                        <div className="d-flex gap-2">
                                        {proyectos.technologies.map(tecnologias => 
                                            <span className="badge text-bg-success">{tecnologias}</span> )
                                        }
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </main>
        </div>
    )
}