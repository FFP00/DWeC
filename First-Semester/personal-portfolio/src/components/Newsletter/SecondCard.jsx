export default function SecondCard(){
    return(
        <div className="col-lg-6">
            <div className="card h-100">
            <div className="card-body">
                <article className="mt-3">
                <h1 className="h4">Tema del mes: Accesibilidad en React</h1>
                <p className="text-secondary">
                    Consejos para mejorar Accesibilidad + Diseño & testing de los mismos.
                </p>
                <ul>
                    <li><strong>Tutorial:</strong> React Router & React Icons</li>
                    <li><strong>Proyecto:</strong> Varias paginas conectadas a traves de React Router</li>
                    <li><strong>Lectura:</strong> React Docs, React Router (v7)</li>
                </ul>
                </article>
            </div>
            </div>
        </div>
    )
}