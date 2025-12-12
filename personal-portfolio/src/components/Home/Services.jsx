import { BsCodeSlash, BsPhone, BsBarChart, BsPeople } from "react-icons/bs";

export default function Services(){
    return(
        <div className="Services">
            <section className="py-5">
                <div className="container">
                    <h2 className="h3 fw-bold mb-4">Qué ofrecemos</h2>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100">
                            <div className="card-body">
                                <i className="fs-2 text-primary"><BsCodeSlash /></i>
                                <h3 className="h5 mt-3">Desarrollo web</h3>
                                <p className="text-secondary">Aplicaciones SPA con React, APIs REST y SSR cuando es necesario.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100">
                            <div className="card-body">
                                <i className="fs-2 text-primary"><BsPhone /></i>
                                <h3 className="h5 mt-3">Responsive</h3>
                                <p className="text-secondary">Interfaces adaptadas a cualquier dispositivo usando Bootstrap y CSS moderno.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100">
                            <div className="card-body">
                                <i className="fs-2 text-primary"><BsBarChart /></i>
                                <h3 className="h5 mt-3">Performance</h3>
                                <p className="text-secondary">Buenas prácticas, lazy loading y optimización de recursos.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100">
                            <div className="card-body">
                                <i className="fs-2 text-primary"><BsPeople /></i>
                                <h3 className="h5 mt-3">Trabajo en equipo</h3>
                                <p className="text-secondary">Git, PRs y CI/CD para entregas de calidad continua.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}