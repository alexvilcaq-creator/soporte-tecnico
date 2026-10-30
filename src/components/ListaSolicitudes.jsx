import SolicitudItem from "./SolicitudItem"

function ListaSolicitudes({ solicitudes, onCambiarEstado, onEliminar }) {
  if (solicitudes.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 py-12 text-center">
        <p className="font-medium text-slate-700">Todo en orden por aquí</p>
        <p className="text-sm text-slate-500">No hay solicitudes para mostrar.</p>
      </div>
    )
  }
  return (
    <div className="space-y-3">
      {solicitudes.map((s) => (
        <SolicitudItem
          key={s.id}
          solicitud={s}
          onCambiarEstado={onCambiarEstado}
          onEliminar={onEliminar}
        />
      ))}
    </div>
  )
}

export default ListaSolicitudes