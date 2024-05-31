import sequelize from "../../db/config";
import { DataTypes } from "sequelize";

const Licitacion = sequelize.define("InframenorLicitacion", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombreLicitacion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  codigo: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fechaInicioPreLicitacion: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  proyectoObraAdquisicionCompra: {
    type: DataTypes.ENUM("Proyecto de obra", "Adquisicion", "Compra"),
    allowNull: true,
  },
  unidadEncargadaProyecto: {
    type: DataTypes.ENUM(
      "Inframenor",
      "Inframayor",
      "Pavimentos",
      "Sanamiento Sanitario",
      "Ciencia de datos"
    ),
    allowNull: true,
  },
  encargadoPreLicitaciones: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  idLicitacion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  modalidadCompra: {
    type: DataTypes.ENUM(
      "Licitacion Publica",
      "Licitacion Privada",
      "Pendiente",
      "Pendiente con duplicacion",
      "Trato directo",
      "Servicio Especializado",
      "Convenio Marco"
    ),
    allowNull: true,
  },
  fuenteFinanciamiento: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  observacionesIniciales: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  poseeTodosAntecedentesLicitacion: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  fechaEntregaObservacionesRequirente: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fechaRecepcionObservacionesSubsanadas: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  disponibilidadRecursos: {
    type: DataTypes.ENUM("Presupuestaria", "Financiera"),
    allowNull: true,
  },
  numeroCDPCDF: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fechaCreacionBases: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  basesListasParaLicitacion: {
    type: DataTypes.ENUM("Lista", "No"),
    allowNull: true,
  },
  ejecutivoUnidadAdquisiciones: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fechaAsignacionEjecutivo: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fechaDecretoAlcaldicio: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  numeroDecretoAlcaldicio: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fechaAdjudicacion: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fechaEnvioSolicitudConfeccionContrato: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fechaDecretoApruebaContrato: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fechaRecepcionContratoFirmado: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fechaContrato: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fechaPublicacionOCMercadoPublico: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  numeroOrdenCompra: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fechaCierre: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

const LicitacionObservaciones = sequelize.define(
  "InframenorLicitacionObservaciones",
  {
    fechaIngresoPlataformaContraloria: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fechaAcuseReciboContraloria: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fechaRecepcionRespuestaFinalContraloria: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    resultadoRevisionContraloria: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fechaAlcanzarEstado: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    observacionesEstado: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }
);

Licitacion.hasMany(LicitacionObservaciones, { foreignKey: "licitacionId" });
LicitacionObservaciones.belongsTo(Licitacion, { foreignKey: "licitacionId" });

export default Licitacion;