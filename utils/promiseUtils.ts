import {
  destroyLoadingMessage,
  loadingMessageGenerator,
  serverErrorMessageGenerator,
} from './antdUtils';
import axios from '../http';
import { AxiosResponse } from 'axios';
import HttpRequestMethod from '../interfaces/HttpRequestMethod';

function promiseAPIGenerator(
  method: HttpRequestMethod,
  url: string,
  data: any,
  callback: any
): Promise<any>;
function promiseAPIGenerator(
  method: HttpRequestMethod,
  url: string,
  callback: any
): Promise<any>;
function promiseAPIGenerator(
  method: HttpRequestMethod,
  url: string,
  data: any,
  callback?: any
) {
  return new Promise((resolve: any) => {
    loadingMessageGenerator(1);
    if (typeof data === 'object') {
      axios[method](url, data)
        .then((res: AxiosResponse) => {
          destroyLoadingMessage(1);
          callback(resolve, res);
        })
        .catch(() => {
          destroyLoadingMessage(1);
          serverErrorMessageGenerator();
        });
    } else if (typeof data === 'function') {
      axios[method](url)
        .then((res: AxiosResponse) => {
          destroyLoadingMessage(1);
          data(resolve, res);
        })
        .catch(() => {
          destroyLoadingMessage(1);
          serverErrorMessageGenerator();
        });
    }
  });
}

export { promiseAPIGenerator };
