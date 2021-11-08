import { responseStructure } from '../types/base.type';
import { ResponseInterface } from '../types/response.interface';

export default (response: ResponseInterface, statusCode: number, message: string, data: unknown): ResponseInterface => {
  const status: boolean = statusCode >= 200 && statusCode <= 205;

  const baseStructure: responseStructure = {
    status,
    message,
  };

  const useErrorInstead: boolean = statusCode > 205;

  if (data) {
    baseStructure[useErrorInstead ? 'error' : 'data'] = data;
  }

  return response.status(statusCode).json(baseStructure);
};
