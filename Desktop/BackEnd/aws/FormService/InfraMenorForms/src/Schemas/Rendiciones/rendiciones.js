import sequelize from "../../db/config";
import { DataTypes } from "sequelize";

const rendiciones = sequelize.define("InframenorRendiciones", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  idLicitacion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  codigo: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  unidadEncargadaProyecto: {
    type: DataTypes.ENUM(
      "Inframenor",
      "Inframayor",
      "Pavimentos",
      "Saneamiento sanitario",
      "Ciencia de datos"
    ),
    allowNull: true,
  },
  presupuestoDisponible: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  numeroTotalEstadosPago: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  montoContrato: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  montoPorPagar: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  correctaEjecucionObra: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fechaRecepcionEpConDP: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fechaEnvioDPFuenteFinanciamiento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  encuestaSubdere: {
    type: DataTypes.ENUM("Si", "No aplica"),
    allowNull: true,
  },
  fechaVencimientoBoletaCorrectaEjecucionObra: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fechaRecepcionProvisionaria: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  reintegro: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  decretoReintegro: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  decretoPago: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fechaRecepcionDefinitiva: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  informeRendiciones: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

const rendicionesObservaciones = sequelize.define(
  "InframenorRendicionesObservaciones",
  {
    fechaEstadoPago: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    montoEstadoPago: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fechaEnvioEpConOrdinarioFinanzasCancelacion: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fechaRespuestaPorDOM: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }
);

rendiciones.hasMany(rendicionesObservaciones, {foreignKey: 'rendicionId'});
rendicionesObservaciones.belongsTo(rendiciones, {foreignKey: 'rendicionId'});

export default rendiciones;