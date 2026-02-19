import { BsGithub, BsInstagram, BsTwitterX, BsSteam } from "react-icons/bs";

export default function SecondCard(){
    return(
        <div className="col-lg-6">
            <div className="card">
            <div className="card-body">
                <ul className="list-unstyled mt-3">
                <li className="mb-2"><strong>Dirección:</strong> Palma, Islas Baleares</li>
                <li className="mb-2"><strong>Mail:</strong> contact@digitalevolutionsa.es</li>
                <li className="mb-2"><strong>Horario:</strong> Hábiles 9:00-18:00</li>
                </ul>
                <div className="ratio ratio-16x9 mt-3">
                <iframe src="https://maps.google.com/maps?q=Palma%20de%20Mallorca&t=&z=13&ie=UTF8&iwloc=&output=embed" title="Mapa Palma"></iframe>
                </div>
            </div>
            </div>
            <div className="container text-center my-4">
                <div className="d-flex justify-content-center gap-4">
                    <a href="https://github.com" className="btn btn-outline-dark"><BsGithub size={24} /> GitHub</a>
                    <a href="https://x.com"className="btn btn-outline-primary"><BsTwitterX size={24} /> X/Twitter</a>
                    <a href="https://instagram.com"className="btn btn-outline-danger"><BsInstagram size={24} /> Instagram</a>
                    <a href="https://store.steampowered.com"className="btn btn-outline-warning"><BsSteam size={24} /> Steam</a>
                </div>
            </div>
        </div>
    )
}