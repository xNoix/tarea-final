import sequelize from "../../db/config";
import { DataTypes } from "sequelize";

const anteproyectoFormulacion = sequelize.define(
  "InframenorAnteproyectoFormulacion",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreProyecto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fechaInicioFormulacionProyecto: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    fechaTerminoFormulacionProyecto: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    codigoProyecto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estadoProyecto: {
      type: DataTypes.ENUM("En elaboracion", "Finalizado"),
      defaultValue: "En elaboracion",
    },
    georeferencia: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    encargadoUnidad: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sectoresBeneficiados: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tiposInfraestructura: {
      type: DataTypes.ENUM(
        "Sedes",
        "Luminaria",
        "Areas verdes",
        "Movilidad",
        "Pavimentos",
        "Contruccion",
        "Estudio",
        "Servicios"
      ),
      allowNull: true,
    },
    tipoIntervencion: {
      type: DataTypes.ENUM(
        "Mejoramiento",
        "Reposicion",
        "Construccion",
        "Habilitacion",
        "Instalacion"
      ),
      allowNull: true,
    },
    plazoProyecto: {
      type: DataTypes.ENUM("Corto", "Mediano", "Largo"),
      allowNull: true,
    },
    descripcionProyecto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    informeProyecto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    unidad: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    observacionesEncargado: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    fechaEnvioProyectoDOM: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fechaRecepcionManifestacionDOM: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    observacionesDOM: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  }
);

export default anteproyectoFormulacion;
