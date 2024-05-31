import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { getDbClient } from "../../db/connection";
import { v4 as uuidv4 } from "uuid";

export const createInframenor = async (
  anteproyectoEstadoAvance: any,
  anteproyectoFinanciamiento: any,
  anteproyectoFormulacion: any,
  ejecucionObra: any,
  licitacionEstadoAvance: any,
  licitacion: any,
  rendiciones: any
): Promise<void> => {
  const id = uuidv4();

  const params = {
    TableName: process.env.TABLE_NAME, // Reemplaza 'NombreDeTuTabla' con el nombre de tu tabla en DynamoDB
    Item: {
      id: { S: id },
      anteproyectoEstadoAvance: { M: anteproyectoEstadoAvance },
      anteproyectoFinanciamiento: { M: anteproyectoFinanciamiento },
      anteproyectoFormulacion: { M: anteproyectoFormulacion },
      ejecucionObra: { M: ejecucionObra },
      licitacionEstadoAvance: { M: licitacionEstadoAvance },
      licitacion: { M: licitacion },
      rendiciones: { M: rendiciones },
    },
  };

  try {
    // Ejecutar el comando PutItem para agregar el nuevo ítem a la tabla
    await getDbClient().send(new PutItemCommand(params));
    console.log("Inframenor creado exitosamente en DynamoDB.");
  } catch (error) {
    console.error("Error al crear el Inframenor:", error);
    throw error;
  }
}
