import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb";

const dynamo = new DynamoDBClient({ region: "us-east-1" });

export const handler = async (event) => {
  const allowedOrigins = [
    'https://resume.willthesun.com',
    'https://willthesun.com',
    'http://localhost:3000'
  ];

  const origin = event.headers?.origin || '';
  const isAllowed = allowedOrigins.includes(origin);

  const corsHeaders = {
    "Access-Control-Allow-Origin": isAllowed ? origin : 'null',
    "Access-Control-Allow-Headers": '*',
    "Access-Control-Allow-Methods": 'GET,POST,OPTIONS',
  };

  // 👇 Ignore CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ message: "CORS preflight OK" }),
    };
  }

  const path = "resume";

  try {
    const result = await dynamo.send(new UpdateItemCommand({
      TableName: "HitCounter",
      Key: { path: { S: path } },
      UpdateExpression: "ADD #count :inc",
      ExpressionAttributeNames: { "#count": "count" },
      ExpressionAttributeValues: { ":inc": { N: "1" } },
      ReturnValues: "UPDATED_NEW"
    }));

    const count = result.Attributes?.count?.N || "0";

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ count: parseInt(count, 10) }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Failed to update counter" }),
    };
  }
};