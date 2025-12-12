export default function FirstCard(){
    return(
        <div className="col-lg-6">
            <h1 className="h3 fw-bold">Suscríbete al newsletter</h1>
            <p className="text-secondary">Recibe una vez al mes las novedades, proyectos y aprendizajes del equipo.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4" id="newsletterForm">
            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text" className="form-control" placeholder="Nombre" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Mail:</label>
                <input type="email" className="form-control" placeholder="Mail" required />
            </div>
            <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="consent" required />
                <label className="form-check-label" htmlFor="consent">
                Acepto recibir comunicaciones y la política de privacidad.
                </label>
            </div>
            <button type="submit" className="btn btn-primary">Suscribirme</button>
            <p className="small text-secondary mt-2">Puedes darte de baja en cualquier momento desde el correo.</p>
            </form>
        </div>
    )
}