import sequelize from "../../db/config";
import { DataTypes } from "sequelize";

const anteproyectoEstadoAvance = sequelize.define(
  "InframenorAnteproyectoEstadoAvance",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fechaInicialProcesoEstadoElegibleAdmisible: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fechaAlcanzaEstadoElegible: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fechaAlcanzaEstadoAprobado: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fechaSolicitudCreacionCuentaPresupuestaria: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fechaInicioSolicitudCompra: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fechaDocumentacionAntecedentesFuenteFinanciamiento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fechaRecepcionPostulacionProgramasFinanciamiento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }
);

const anteproyectoEstadoAvanceObservaciones = sequelize.define(
  "InframenorAnteproyectoEstadoAvanceObservaciones",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fechaInicioSubsanacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fechaFinalSubsanacion: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fechaEnvioSubsanacion: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fechaRespuestaDOM: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }
);

anteproyectoEstadoAvance.hasMany(anteproyectoEstadoAvanceObservaciones, {
  foreignKey: "anteproyectoEstadoAvanceId",
  as: "observaciones",
});

anteproyectoEstadoAvanceObservaciones.belongsTo(anteproyectoEstadoAvance, {
  foreignKey: "anteproyectoEstadoAvanceId",
  as: "estadoAvance",
});

export default anteproyectoEstadoAvance;