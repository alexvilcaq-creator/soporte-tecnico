const opciones = [
  { valor: "todas", texto: "Todas", punto: "bg-slate-400" },
  { valor: "pendiente", texto: "Pendiente", punto: "bg-amber-400" },
  { valor: "en proceso", texto: "En proceso", punto: "bg-sky-400" },
  { valor: "resuelta", texto: "Resuelta", punto: "bg-emerald-400" },
]

function FiltrosSolicitudes({ filtroActual, onFiltrar, conteos }) {
  return (
    <aside className="bg-slate-900 p-5 text-slate-300 md:min-h-screen md:w-60 md:shrink-0">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-white">Soporte técnico</h1>
        <p className="text-xs text-slate-400">Gestión de solicitudes</p>
      </div>
      <p className="mb-2 text-xs uppercase tracking-wide text-slate-500">Estado</p>
      <nav className="flex flex-wrap gap-1 md:flex-col">
        {opciones.map((op) => {
          const activo = filtroActual === op.valor
          return (
            <button
              key={op.valor}
              type="button"
              onClick={() => onFiltrar(op.valor)}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition md:w-full ${
                activo ? "bg-teal-600 text-white" : "hover:bg-slate-800"
              }`}
            >
              <span className={`size-2 rounded-full ${op.punto}`} />
              <span className="flex-1">{op.texto}</span>
              <span className={activo ? "text-teal-100" : "text-slate-500"}>
                {conteos[op.valor]}
              </span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export default FiltrosSolicitudes