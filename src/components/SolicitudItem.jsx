import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"

const punto = {
  alta: "bg-rose-500",
  media: "bg-amber-500",
  baja: "bg-emerald-500",
}

const etiqueta = {
  alta: "bg-rose-100 text-rose-700",
  media: "bg-amber-100 text-amber-700",
  baja: "bg-emerald-100 text-emerald-700",
}

const colorEstado = {
  pendiente: "bg-amber-50 text-amber-800 border-amber-200",
  "en proceso": "bg-sky-50 text-sky-800 border-sky-200",
  resuelta: "bg-emerald-50 text-emerald-800 border-emerald-200",
}

function SolicitudItem({ solicitud, onCambiarEstado, onEliminar }) {
  return (
    <Card className="shadow-sm transition-shadow hover:shadow-md">
      <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <span className={`hidden size-3 shrink-0 rounded-full sm:block ${punto[solicitud.prioridad]}`} />

        <div className="min-w-0 flex-1 space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-slate-900">{solicitud.titulo}</h3>
            <Badge className={etiqueta[solicitud.prioridad]}>{solicitud.prioridad}</Badge>
          </div>
          <p className="text-sm text-slate-600">{solicitud.descripcion}</p>
          <p className="text-xs text-slate-500">Solicitante: {solicitud.solicitante}</p>
        </div>

        <div className="flex items-center gap-2">
          <Select
            value={solicitud.estado}
            onValueChange={(nuevo) => onCambiarEstado(solicitud.id, nuevo)}
          >
            <SelectTrigger className={`w-36 ${colorEstado[solicitud.estado]}`}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pendiente">Pendiente</SelectItem>
              <SelectItem value="en proceso">En proceso</SelectItem>
              <SelectItem value="resuelta">Resuelta</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="ghost"
            size="sm"
            className="text-rose-600 hover:bg-rose-50 hover:text-rose-700"
            onClick={() => onEliminar(solicitud.id)}
          >
            Eliminar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default SolicitudItem