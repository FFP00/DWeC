import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold" to="/">
                        DigitalEvolution S.A
                    </NavLink>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMain">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navMain" className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item">                
                                <NavLink className="navbar-brand fw-bold" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">                
                                <NavLink className="navbar-brand fw-bold" to="/projects">
                                    Projects
                                </NavLink>
                            </li>
                            <li className="nav-item">                
                                <NavLink className="navbar-brand fw-bold" to="/newsletter">
                                    Newsletter
                                </NavLink>
                            </li>
                            <li className="nav-item">                
                                <NavLink className="navbar-brand fw-bold" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
} 