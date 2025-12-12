 import { Link } from "react-router-dom";
 
 export default function Hero(){
    return(
            <section className="py-5 bg-light">

                <div className="container">
                    <h2 className="h3 fw-bold mb-4">Nuestro equipo</h2>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 text-center">
                            <div className="card-body">
                                <h3 className="h5">Fernando</h3>
                                <p className="text-secondary">Frontend Developer | React</p>
                            </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 text-center">
                            <div className="card-body">
                                <h3 className="h5">Nico</h3>
                                <p className="text-secondary">Backend | Node & APIs</p>
                            </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 text-center">
                            <div className="card-body">
                                <h3 className="h5">Alex</h3>
                                <p className="text-secondary">UI/UX | Diseño</p>
                            </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 text-center">
                            <div className="card-body">
                                <h3 className="h5">Sergi</h3>
                                <p className="text-secondary">DevOps | CI/CD</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br>
                
                <div className="container">
                    <div className="row">
                        <Link to="/projects" className="btn btn-outline-primary btn-sm">
                            Ver portafolios
                        </Link>
                    </div>
                </div>


            </section>
    ) 
}