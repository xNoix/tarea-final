import Joi from "joi";

export const anteproyectoFinanciamientoSchema = Joi.object({
  fuenteFinanciamiento: Joi.string().allow(null),
  presupuestoDisponible: Joi.number().integer().allow(null),
  aporteAdicional: Joi.number().integer().allow(null),
  fuenteAporteAdicional: Joi.string().allow(null),
  numeroCuentaPresupuestada: Joi.number().integer().allow(null),
  fechaPostulacionProgramasFinanciamiento: Joi.date().allow(null),
  fechaRecepcionPostulacionProgramasFinanciamiento: Joi.date().allow(null),
  estadoPagoDerechosMunicipales: Joi.string()
    .valid("Listo", "En proceso")
    .allow(null),
  fechaInicialSubsanacionObservacionesFuenteFinanciamiento:
    Joi.date().allow(null),
  fechaFinalSubsanacionObservacionesFuenteFinanciamiento:
    Joi.date().allow(null),
  observacionesFuenteFinanciamiento: Joi.array()
    .items(Joi.string())
    .allow(null),
});
