import sequelize from "../../db/config";
import { DataTypes } from "sequelize";

const LicitacionEstadoAvance = sequelize.define(
  "InframenorLicitacionEstadoAvance",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    carpetaMonitoreoCompleto: {
      type: DataTypes.ENUM("Si", "No"),
      allowNull: true,
    },
    fechaFinalConfeccionCarpetaMonitoreo: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fechaEntregaCarpetaMonitoreoOrdinarioDOM: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    control: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    montoAdjudicado: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    empresa: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    observacionesGenerales: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    tratoDirecto: {
      type: DataTypes.ENUM(
        "Proyecto terminado",
        "Contacto en tramite",
        "Licitacion Publica",
        "En ejecucion",
        "En proceso de licitacion",
        "No Aplica"
      ),
      allowNull: true,
    },
    estadoTecnico: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    seriedadOferta: {
      type: DataTypes.ENUM("Si", "No Aplica", "No tiene informacion"),
      allowNull: true,
    },
    fielCumplimientoContrato: {
      type: DataTypes.ENUM(
        "Si",
        "No Aplica",
        "Poliza de garantia",
        "No tiene informacion"
      ),
      allowNull: true,
    },
    polizaSeguroTodoEvento: {
      type: DataTypes.ENUM(
        "Si",
        "No",
        "No Aplica",
        "Poliza de garantia",
        "No tiene informacion"
      ),
      allowNull: true,
    },
    fechaPolizaSeguroTodoEvento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    comprobantePagoPolizaSeguroTodoEvento: {
      type: DataTypes.ENUM("Si", "No", "No Aplica", "No tiene informacion"),
      allowNull: true,
    },
    observacionesFinales: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  }
);

const LicitacionEstadoAvanceObservaciones = sequelize.define(
  "InframenorLicitacionEstadoAvanceObservaciones",
  {
    estado: {
      type: DataTypes.ENUM(
        "Adjudicada",
        "Con recepcion provisoria",
        "Desierta",
        "Revocada",
        "En proceso de licitacion",
        "En ejecucion",
        "Con entrega de terreno",
        "Proyecto terminado",
        "Contacto en tramite",
        "No Aplica"
      ),
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

LicitacionEstadoAvance.hasMany(LicitacionEstadoAvanceObservaciones, {
  foreignKey: "licitacionEstadoAvanceId",
  as: "observaciones",
});

LicitacionEstadoAvanceObservaciones.belongsTo(LicitacionEstadoAvance, {
  foreignKey: "licitacionEstadoAvanceId",
  as: "estadoAvance",
});

export default LicitacionEstadoAvance;