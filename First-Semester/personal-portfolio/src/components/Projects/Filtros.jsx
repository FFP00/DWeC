export default function Filtros({ filterMember, setFilterMember, filterType, setFilterType }) {
  return (
  <div className="Filtros">
      <section className="py-4 border-bottom">
        <div className="container">
          <div className="row g-3 align-items-end">
            <div className="col-md-4">
              <label className="form-label">Miembro</label>
              <select className="form-select" value={filterMember} onChange={e => setFilterMember(e.target.value)}>
                  <option value="all">Todos</option>
                  <option value="fernando">Fernando</option>
                  <option value="nico">Nico</option>
                  <option value="alex">Alex</option>
                  <option value="sergi">Sergi</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label">Tipo</label>
              <select className="form-select" id="filterType" value={filterType} onChange={e => setFilterType(e.target.value)}>
                  <option value="all">Todos</option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="uiux">UI/UX</option>
                  <option value="devops">Devops</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

