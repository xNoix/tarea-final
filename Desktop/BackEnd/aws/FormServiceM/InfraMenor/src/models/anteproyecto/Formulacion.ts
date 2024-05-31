import Joi from "joi";

export const anteproyectoFormulacionSchema = Joi.object({
  nombreProyecto: Joi.string().required(),
  fechaInicioFormulacionProyecto: Joi.date().required(),
  fechaTerminoFormulacionProyecto: Joi.date().allow(null),
  codigoProyecto: Joi.number().integer().required(),
  estadoProyecto: Joi.string()
    .valid("En elaboracion", "Finalizado")
    .default("En elaboracion"),
  georeferencia: Joi.string().allow(null),
  encargadoUnidad: Joi.string().allow(null),
  sectoresBeneficiados: Joi.string().allow(null),
  tiposInfraestructura: Joi.string()
    .valid(
      "Sedes",
      "Luminaria",
      "Areas verdes",
      "Movilidad",
      "Pavimentos",
      "Contruccion",
      "Estudio",
      "Servicios"
    )
    .allow(null),
  tipoIntervencion: Joi.string()
    .valid(
      "Mejoramiento",
      "Reposicion",
      "Construccion",
      "Habilitacion",
      "Instalacion"
    )
    .allow(null),
  plazoProyecto: Joi.string().valid("Corto", "Mediano", "Largo").allow(null),
  descripcionProyecto: Joi.string().allow(null),
  informeProyecto: Joi.string().allow(null),
  unidad: Joi.string().allow(null),
  observacionesEncargado: Joi.array().items(Joi.string()).allow(null),
  fechaEnvioProyectoDOM: Joi.date().allow(null),
  fechaRecepcionManifestacionDOM: Joi.date().allow(null),
  observacionesDOM: Joi.array().items(Joi.string()).allow(null),
});
