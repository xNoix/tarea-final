import sequelize from "../../db/config";
import { DataTypes } from "sequelize";

const AnteproyectoFinanciamiento = sequelize.define(
  "InframenorAnteproyectoFinanciamiento",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fuenteFinanciamiento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    presupuestoDisponible: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    aporteAdicional: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fuenteAporteAdicional: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    numeroCuentaPresupuestada: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fechaPostulacionProgramasFinanciamiento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fechaRecepcionPostulacionProgramasFinanciamiento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    estadoPagoDerechosMunicipales: {
      type: DataTypes.ENUM("Listo", "En proceso"),
      allowNull: true,
    },
    fechaInicialSubsanacionObservacionesFuenteFinanciamiento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fechaFinalSubsanacionObservacionesFuenteFinanciamiento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    observacionesFuenteFinanciamiento: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  }
);

export default AnteproyectoFinanciamiento;