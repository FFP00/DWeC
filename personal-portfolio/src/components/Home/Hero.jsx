import { Link } from "react-router-dom";

export default function Hero(){
    return(
        <div className="Hero">
            <header className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold">Transformamos ideas en productos digitales</h1>
                            <p className="lead text-secondary mt-3">
                                Somos cuatro profesionales del CFGS creando soluciones web modernas. Mira nuestros portafolios y proyectos reales.
                            </p>
                            <div className="d-flex gap-3 mt-4">
                                <Link to="/projects" className="btn btn-primary btn-lg">
                                    Proyectos
                                </Link>
                                <Link to="/contact" className="btn btn-outline-primary btn-lg">
                                    Contactanos
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}