import {
  destroyLoadingMessage,
  loadingMessageGenerator,
  serverErrorMessageGenerator,
} from './antdUtils';
import axios from '../http';
import { AxiosResponse } from 'axios';
import HttpRequestMethod from '../interfaces/HttpRequestMethod';

const promiseAPIGenerator = (
  method: HttpRequestMethod,
  url: string,
  callback: any
) => {
  return new Promise((resolve: any) => {
    loadingMessageGenerator(1);
    // @ts-ignore
    axios[method](url)
      .then((res: AxiosResponse) => {
        destroyLoadingMessage(1);
        callback(resolve, res);
      })
      .catch(() => {
        destroyLoadingMessage(1);
        serverErrorMessageGenerator();
      });
  });
};

export { promiseAPIGenerator };
