import sequelize from "../db/config";
import { anteproyectoEstadoAvance } from "./Anteproyecto/estadoDeAvance";
import { AnteproyectoFinanciamiento } from "./Anteproyecto/financiamiento";
import { anteproyectoFormulacion } from "./Anteproyecto/formulacion";
import { ejecucionObra } from "./EjecucionDeObra/ejecucionDeObra";
import { LicitacionEstadoAvance } from "./Licitacion/estadoAvance";
import { Licitacion } from "./Licitacion/licitacion";
import { rendiciones } from "./Rendiciones/rendiciones";

const inframenor = sequelize.define("Inframenor", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombreProyecto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaInicio: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completado: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  }
});

inframenor.hasOne(anteproyectoEstadoAvance, {
  foreignKey: "inframenorId",
  as: "anteproyectoEstadoAvance",
});

inframenor.hasOne(AnteproyectoFinanciamiento, {
  foreignKey: "inframenorId",
  as: "anteproyectoFinanciamiento",
});

inframenor.hasOne(anteproyectoFormulacion, {
  foreignKey: "inframenorId",
  as: "anteproyectoFormulacion",
});

inframenor.hasOne(Licitacion, {
  foreignKey: "inframenorId",
  as: "licitacion",
});

inframenor.hasOne(LicitacionEstadoAvance, {
  foreignKey: "inframenorId",
  as: "licitacionEstadoAvance",
});

// Y las relaciones inversas
anteproyectoEstadoAvance.belongsTo(inframenor, {
  foreignKey: "inframenorId",
  as: "inframenor",
});

anteproyectoFormulacion.belongsTo(inframenor, {
  foreignKey: "inframenorId",
  as: "inframenor",
});

AnteproyectoFinanciamiento.belongsTo(inframenor, {
  foreignKey: "inframenorId",
  as: "inframenor",
});

ejecucionObra.belongsTo(inframenor, {
  foreignKey: "inframenorId",
  as: "inframenor",
});

rendiciones.belongsTo(inframenor, {
  foreignKey: "inframenorId",
  as: "inframenor",
});

Licitacion.belongsTo(inframenor, {
  foreignKey: "inframenorId",
  as: "inframenor",
});

LicitacionEstadoAvance.belongsTo(inframenor, {
  foreignKey: "inframenorId",
  as: "inframenor",
});

export default inframenor;
