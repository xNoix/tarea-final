import { APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler } from "aws-lambda"
import { createInframenor } from "./handler/inframenor";

export const handler: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {

    const path = event.path;
    
    switch (path) {
        case '/ruta1':
            try {
                createInframenor();
            } catch (error) {
                return {
                    statusCode: 500,
                    body: JSON.stringify({ error: error })
                };
            };
        default:
            return {
                statusCode: 404,
                body: JSON.stringify({ error: 'Ruta no encontrada' })
            };
    }
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'goodjob'
        })
    }
}