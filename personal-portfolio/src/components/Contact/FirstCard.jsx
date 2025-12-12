export default function FirstCard(){
    return(
        <div className="col-lg-6">
            <h1 className="h3 fw-bold">Contacto</h1>
            <p className="text-secondary">Contacta con nosotros y te responderemos en menos de 48 horas.</p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-4" id="contactForm">
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" placeholder="Nombre" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido/s</label>
                    <input type="text" className="form-control" placeholder="Apellido/s" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mail</label>
                    <input type="email" className="form-control" placeholder="Mail" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Asunto</label>
                    <input type="text" className="form-control" placeholder="Asunto" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mensaje</label>
                    <textarea className="form-control" rows="6" placeholder="Mensaje" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
                <p className="small text-secondary mt-2">Usaremos tus datos solo para responder. <u>Zero spam.</u></p>
            </form>
        </div>
    )
}