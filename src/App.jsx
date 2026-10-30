import { useState } from "react"
import SolicitudForm from "@/components/SolicitudForm"
import ListaSolicitudes from "@/components/ListaSolicitudes"
import FiltrosSolicitudes from "@/components/FiltrosSolicitudes"

function App() {
  const [solicitudes, setSolicitudes] = useState([])
  const [filtro, setFiltro] = useState("todas")

  const agregarSolicitud = (datos) => {
    setSolicitudes([
      ...solicitudes,
      { id: crypto.randomUUID(), estado: "pendiente", ...datos },
    ])
  }

  const cambiarEstado = (id, nuevoEstado) => {
    setSolicitudes(
      solicitudes.map((s) => (s.id === id ? { ...s, estado: nuevoEstado } : s))
    )
  }

  const eliminarSolicitud = (id) => {
    setSolicitudes(solicitudes.filter((s) => s.id !== id))
  }

  const solicitudesFiltradas =
    filtro === "todas" ? solicitudes : solicitudes.filter((s) => s.estado === filtro)

  const conteos = {
    todas: solicitudes.length,
    pendiente: solicitudes.filter((s) => s.estado === "pendiente").length,
    "en proceso": solicitudes.filter((s) => s.estado === "en proceso").length,
    resuelta: solicitudes.filter((s) => s.estado === "resuelta").length,
  }

  return (
    <div
      className="min-h-screen bg-slate-50 md:flex"
      style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
    >
      <FiltrosSolicitudes filtroActual={filtro} onFiltrar={setFiltro} conteos={conteos} />

      <main className="flex-1 space-y-6 p-6">
        <header>
          <h2 className="text-2xl font-semibold text-slate-900">Solicitudes</h2>
          <p className="text-sm text-slate-500">
            {conteos.pendiente} pendientes de {conteos.todas} en total
          </p>
        </header>
        <SolicitudForm onAgregar={agregarSolicitud} />
        <ListaSolicitudes
          solicitudes={solicitudesFiltradas}
          onCambiarEstado={cambiarEstado}
          onEliminar={eliminarSolicitud}
        />
      </main>
    </div>
  )
}

export default App