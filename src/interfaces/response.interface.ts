import { Response } from 'express';

export interface ResponseInterface extends Response {
  status(statusCode: number): this;
}
