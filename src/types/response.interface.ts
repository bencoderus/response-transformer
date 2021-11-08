/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ResponseInterface {
  status(statusCode: number): any;
  send(body: any): any;
  json(body: any): any;
}
