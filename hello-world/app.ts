import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

type eventBody = {
    first_name: string,
    last_name: string,
    font: string,
}

export const lambdaHandler = async (event: eventBody): Promise<APIGatewayProxyResult> => {
    const first_name: string = event.first_name;
    const last_name: string = event.last_name;
    const font: string = event.font;

    try {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `hello ${first_name} ${last_name}, your desired font is ${font}`,
            }),
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }
};
