import Joi from "joi";

export const ejecucionObraSchema = Joi.object({
  fechaEntregaTerreno: Joi.date().allow(null),
  fechaEnvioDocumentacionFuenteFinanciamiento: Joi.date().allow(null),
  observacionesFuenteFinanciamiento: Joi.array()
    .items(Joi.string())
    .allow(null),
  fechaEjecucionObra: Joi.date().allow(null),
  seRealizaModificacionObra: Joi.boolean().allow(null),
  fechaSolicitudModificacionObra: Joi.date().allow(null),
  fechaEnvioOficioModificacionFuenteFinanciamiento: Joi.date().allow(null),
  fechaRecepcionObservacionesFuenteFinanciamientoModificacion:
    Joi.date().allow(null),
  observacionesFuenteFinanciamientoModificacionObra: Joi.array()
    .items(Joi.string())
    .allow(null),
  hayAumentosObra: Joi.boolean().allow(null),
  cantidadTiempoAumentoObra: Joi.number().integer().allow(null),
  seGeneroDecretoAlcaldicioAumentosObra: Joi.boolean().allow(null),
  numeroDecreto: Joi.number().integer().allow(null),
  estadoEjecucionObra: Joi.string().valid("En ejecucion", "No").allow(null),
  observacionesEjecucionObra: Joi.array().items(Joi.string()).allow(null),
});
