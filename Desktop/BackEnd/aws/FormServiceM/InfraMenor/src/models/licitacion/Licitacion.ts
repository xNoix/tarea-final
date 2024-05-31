import Joi from "joi";

export const licitacionObservacionesSchema = Joi.object({
  fechaIngresoPlataformaContraloria: Joi.date().allow(null),
  fechaAcuseReciboContraloria: Joi.date().allow(null),
  fechaRecepcionRespuestaFinalContraloria: Joi.date().allow(null),
  resultadoRevisionContraloria: Joi.string().allow(null),
  fechaAlcanzarEstado: Joi.date().allow(null),
  observacionesEstado: Joi.string().allow(null),
});

export const licitacionSchema = Joi.object({
  id: Joi.number().integer().positive(),
  nombreLicitacion: Joi.string().allow(null),
  codigo: Joi.number().integer().allow(null),
  fechaInicioPreLicitacion: Joi.date().allow(null),
  proyectoObraAdquisicionCompra: Joi.string()
    .valid("Proyecto de obra", "Adquisicion", "Compra")
    .allow(null),
  unidadEncargadaProyecto: Joi.string()
    .valid(
      "Inframenor",
      "Inframayor",
      "Pavimentos",
      "Sanamiento Sanitario",
      "Ciencia de datos"
    )
    .allow(null),
  encargadoPreLicitaciones: Joi.string().allow(null),
  idLicitacion: Joi.string().allow(null),
  modalidadCompra: Joi.string()
    .valid(
      "Licitacion Publica",
      "Licitacion Privada",
      "Pendiente",
      "Pendiente con duplicacion",
      "Trato directo",
      "Servicio Especializado",
      "Convenio Marco"
    )
    .allow(null),
  fuenteFinanciamiento: Joi.string().allow(null),
  observacionesIniciales: Joi.array().items(Joi.string()).allow(null),
  poseeTodosAntecedentesLicitacion: Joi.boolean().allow(null),
  fechaEntregaObservacionesRequirente: Joi.date().allow(null),
  fechaRecepcionObservacionesSubsanadas: Joi.date().allow(null),
  disponibilidadRecursos: Joi.string()
    .valid("Presupuestaria", "Financiera")
    .allow(null),
  numeroCDPCDF: Joi.number().integer().allow(null),
  fechaCreacionBases: Joi.date().allow(null),
  basesListasParaLicitacion: Joi.string().valid("Lista", "No").allow(null),
  ejecutivoUnidadAdquisiciones: Joi.string().allow(null),
  fechaAsignacionEjecutivo: Joi.date().allow(null),
  fechaDecretoAlcaldicio: Joi.date().allow(null),
  numeroDecretoAlcaldicio: Joi.number().integer().allow(null),
  fechaAdjudicacion: Joi.date().allow(null),
  fechaEnvioSolicitudConfeccionContrato: Joi.date().allow(null),
  fechaDecretoApruebaContrato: Joi.date().allow(null),
  fechaRecepcionContratoFirmado: Joi.date().allow(null),
  fechaContrato: Joi.date().allow(null),
  fechaPublicacionOCMercadoPublico: Joi.date().allow(null),
  numeroOrdenCompra: Joi.number().integer().allow(null),
  fechaCierre: Joi.date().allow(null),
  observaciones: Joi.array().items(licitacionObservacionesSchema).required(),
});
