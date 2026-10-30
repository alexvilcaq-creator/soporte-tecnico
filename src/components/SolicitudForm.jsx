import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const prioridades = [
  { valor: "baja", texto: "Baja", activo: "bg-emerald-500 text-white hover:bg-emerald-500" },
  { valor: "media", texto: "Media", activo: "bg-amber-500 text-white hover:bg-amber-500" },
  { valor: "alta", texto: "Alta", activo: "bg-rose-500 text-white hover:bg-rose-500" },
]

function SolicitudForm({ onAgregar }) {
  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [solicitante, setSolicitante] = useState("")
  const [prioridad, setPrioridad] = useState("media")
  const [errores, setErrores] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const nuevos = {}
    if (!titulo.trim()) nuevos.titulo = "El título es obligatorio."
    if (!descripcion.trim()) nuevos.descripcion = "La descripción es obligatoria."
    if (!solicitante.trim()) nuevos.solicitante = "Indica quién solicita."
    setErrores(nuevos)
    if (Object.keys(nuevos).length > 0) return

    onAgregar({
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
      solicitante: solicitante.trim(),
      prioridad,
    })
    setTitulo(""); setDescripcion(""); setSolicitante(""); setPrioridad("media")
  }

  const borde = (campo) => (errores[campo] ? "border-rose-400" : "")

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Nueva solicitud</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <Label htmlFor="titulo">Título</Label>
          <Input id="titulo" className={borde("titulo")} placeholder="Ej. Falla en la impresora"
            value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          {errores.titulo && <p className="text-sm text-rose-600">{errores.titulo}</p>}
        </div>
        <div className="space-y-1">
          <Label htmlFor="solicitante">Solicitante</Label>
          <Input id="solicitante" className={borde("solicitante")} placeholder="Nombre Completo"
            value={solicitante} onChange={(e) => setSolicitante(e.target.value)} />
          {errores.solicitante && <p className="text-sm text-rose-600">{errores.solicitante}</p>}
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="descripcion">Descripción</Label>
        <Textarea id="descripcion" className={borde("descripcion")} placeholder="Describe el problema"
          value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        {errores.descripcion && <p className="text-sm text-rose-600">{errores.descripcion}</p>}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <Label>Prioridad</Label>
          <div className="flex gap-2">
            {prioridades.map((p) => (
              <Button
                key={p.valor}
                type="button"
                variant="outline"
                onClick={() => setPrioridad(p.valor)}
                className={prioridad === p.valor ? p.activo : "text-slate-600"}
              >
                {p.texto}
              </Button>
            ))}
          </div>
        </div>
        <Button type="submit" className="bg-teal-600 px-6 hover:bg-teal-700">
          Registrar solicitud
        </Button>
      </div>
    </form>
  )
}

export default SolicitudForm