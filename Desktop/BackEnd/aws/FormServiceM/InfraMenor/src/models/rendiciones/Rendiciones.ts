import Joi from "joi";

export const rendicionesObservacionesSchema = Joi.object({
  fechaEstadoPago: Joi.date().allow(null),
  montoEstadoPago: Joi.number().integer().allow(null),
  fechaEnvioEpConOrdinarioFinanzasCancelacion: Joi.date().allow(null),
  fechaRespuestaPorDOM: Joi.date().allow(null),
});

export const rendicionesSchema = Joi.object({
  id: Joi.number().integer().positive(),
  numero: Joi.number().integer().allow(null),
  idLicitacion: Joi.string().allow(null),
  codigo: Joi.number().integer().allow(null),
  unidadEncargadaProyecto: Joi.string()
    .valid(
      "Inframenor",
      "Inframayor",
      "Pavimentos",
      "Saneamiento sanitario",
      "Ciencia de datos"
    )
    .allow(null),
  presupuestoDisponible: Joi.number().integer().allow(null),
  numeroTotalEstadosPago: Joi.number().integer().allow(null),
  montoContrato: Joi.number().integer().allow(null),
  montoPorPagar: Joi.number().integer().allow(null),
  correctaEjecucionObra: Joi.string().allow(null),
  fechaRecepcionEpConDP: Joi.date().allow(null),
  fechaEnvioDPFuenteFinanciamiento: Joi.date().allow(null),
  encuestaSubdere: Joi.string().valid("Si", "No aplica").allow(null),
  fechaVencimientoBoletaCorrectaEjecucionObra: Joi.date().allow(null),
  fechaRecepcionProvisionaria: Joi.date().allow(null),
  reintegro: Joi.number().integer().allow(null),
  decretoReintegro: Joi.number().integer().allow(null),
  decretoPago: Joi.number().integer().allow(null),
  fechaRecepcionDefinitiva: Joi.date().allow(null),
  informeRendiciones: Joi.string().allow(null),
  obsercaciones: Joi.array().items(rendicionesObservacionesSchema).required(),
});
