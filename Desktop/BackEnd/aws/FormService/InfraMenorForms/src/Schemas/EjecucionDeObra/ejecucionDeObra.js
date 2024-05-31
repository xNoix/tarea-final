import sequelize from "../../db/config";
import { DataTypes } from "sequelize";

const ejecucionObra = sequelize.define("InframenorEjecucionObra", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fechaEntregaTerreno: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fechaEnvioDocumentacionFuenteFinanciamiento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  observacionesFuenteFinanciamiento: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  fechaEjecucionObra: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  seRealizaModificacionObra: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  fechaSolicitudModificacionObra: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fechaEnvioOficioModificacionFuenteFinanciamiento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fechaRecepcionObservacionesFuenteFinanciamientoModificacion: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  observacionesFuenteFinanciamientoModificacionObra: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  hayAumentosObra: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  cantidadTiempoAumentoObra: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  seGeneroDecretoAlcaldicioAumentosObra: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  numeroDecreto: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  estadoEjecucionObra: {
    type: DataTypes.ENUM("En ejecucion", "No"),
    allowNull: true,
  },
  observacionesEjecucionObra: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
});

export default ejecucionObra;