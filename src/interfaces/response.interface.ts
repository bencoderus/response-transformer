/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ResponseInterface {
  status(statusCode: number): this;
  send(body: any): any;
  json(body: any): any;
}
