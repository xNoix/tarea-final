import Joi from "joi";

export const anteproyectoEstadoAvanceObservacionesSchema = Joi.object({
  fechaInicioSubsanacion: Joi.date().allow(null),
  fechaFinalSubsanacion: Joi.date().allow(null),
  fechaEnvioSubsanacion: Joi.date().allow(null),
  fechaRespuestaDOM: Joi.date().allow(null),
});

export const anteproyectoEstadoAvanceSchema = Joi.object({
  fechaInicialProcesoEstadoElegibleAdmisible: Joi.date().allow(null),
  fechaAlcanzaEstadoElegible: Joi.date().allow(null),
  fechaAlcanzaEstadoAprobado: Joi.date().allow(null),
  fechaSolicitudCreacionCuentaPresupuestaria: Joi.date().allow(null),
  fechaInicioSolicitudCompra: Joi.date().allow(null),
  fechaDocumentacionAntecedentesFuenteFinanciamiento: Joi.date().allow(null),
  fechaRecepcionPostulacionProgramasFinanciamiento: Joi.date().allow(null),
  observaciones: Joi.array()
    .items(anteproyectoEstadoAvanceObservacionesSchema)
    .required(),
});
