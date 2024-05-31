import Joi from "joi";

const licitacionEstadoAvanceObservacionesSchema = Joi.object({
  estado: Joi.string()
    .valid(
      "Adjudicada",
      "Con recepcion provisoria",
      "Desierta",
      "Revocada",
      "En proceso de licitacion",
      "En ejecucion",
      "Con entrega de terreno",
      "Proyecto terminado",
      "Contacto en tramite",
      "No Aplica"
    )
    .allow(null),
  fechaAlcanzarEstado: Joi.date().allow(null),
  observacionesEstado: Joi.string().allow(null),
});

export const licitacionEstadoAvanceSchema = Joi.object({
  carpetaMonitoreoCompleto: Joi.string().valid("Si", "No").allow(null),
  fechaFinalConfeccionCarpetaMonitoreo: Joi.date().allow(null),
  fechaEntregaCarpetaMonitoreoOrdinarioDOM: Joi.date().allow(null),
  control: Joi.string().allow(null),
  montoAdjudicado: Joi.number().integer().allow(null),
  empresa: Joi.string().allow(null),
  observacionesGenerales: Joi.array().items(Joi.string()).allow(null),
  tratoDirecto: Joi.string()
    .valid(
      "Proyecto terminado",
      "Contacto en tramite",
      "Licitacion Publica",
      "En ejecucion",
      "En proceso de licitacion",
      "No Aplica"
    )
    .allow(null),
  estadoTecnico: Joi.string().allow(null),
  seriedadOferta: Joi.string()
    .valid("Si", "No Aplica", "No tiene informacion")
    .allow(null),
  fielCumplimientoContrato: Joi.string()
    .valid("Si", "No Aplica", "Poliza de garantia", "No tiene informacion")
    .allow(null),
  polizaSeguroTodoEvento: Joi.string()
    .valid(
      "Si",
      "No",
      "No Aplica",
      "Poliza de garantia",
      "No tiene informacion"
    )
    .allow(null),
  fechaPolizaSeguroTodoEvento: Joi.date().allow(null),
  comprobantePagoPolizaSeguroTodoEvento: Joi.string()
    .valid("Si", "No", "No Aplica", "No tiene informacion")
    .allow(null),
  observaciones: Joi.array()
    .items(licitacionEstadoAvanceObservacionesSchema)
    .required(),
  observacionesFinales: Joi.array().items(Joi.string()).allow(null),
});
