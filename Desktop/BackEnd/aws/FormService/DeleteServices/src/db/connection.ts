import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

let dbClient: DynamoDBClient;

export const getDbClient = (): DynamoDBClient => {
  if (!dbClient) {
    dbClient = new DynamoDBClient({ region: 'us-east-1' });
  }
  return dbClient;
};