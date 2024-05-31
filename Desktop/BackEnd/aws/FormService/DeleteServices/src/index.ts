import {
  APIGatewayProxyEvent,
  APIGatewayProxyResultV2,
  Handler,
} from "aws-lambda";
import { getDbClient } from "./db/connection";
import { DeleteItemCommand } from "@aws-sdk/client-dynamodb";

export const handler: Handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResultV2> => {
  const tableNames = [
    process.env.TABLE_NAME1,
    process.env.TABLE_NAME2,
    process.env.TABLE_NAME3,
    process.env.TABLE_NAME4,
    process.env.TABLE_NAME5,
    process.env.TABLE_NAME6,
    process.env.TABLE_NAME7,
    process.env.TABLE_NAME8,
  ];
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Solicitud incorrecta",
          message: "El cuerpo de la solicitud no puede estar vacío.",
        }),
      };
    }

    const requestBody = JSON.parse(event.body);
    const id = requestBody.id;

    if (!id) {
      return {
        statusCode: 422,
        body: JSON.stringify({
          error: "Error de validación",
          message: "El campo 'id' es obligatorio.",
          details: {
            id: "id no puede estar vacío.",
          },
        }),
      };
    }

    const dbClient = getDbClient();

    // Eliminar el elemento de todas las tablas
    for (const tableName of tableNames) {
      const params = {
        TableName: tableName,
        Key: {
          id: { S: id },
        },
      };

      await dbClient.send(new DeleteItemCommand(params));
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Elemento eliminado exitosamente",
        inframenorId: id,
      }),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
