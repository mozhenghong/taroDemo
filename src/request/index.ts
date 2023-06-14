import Taro from "@tarojs/taro";
import { APIS } from "./api";
import { IRequest, IStatusCode, IResponse } from "@/types/request";

const errorHandle = (response: IResponse) => {
  if (response.statusCode === IStatusCode.Unauthorized) {
    setTimeout(() => {
      void Taro.showToast({
        title: response.data.message,
        duration: 1500,
        icon: "none",
      });
    }, 100);
  } else {
    if (response.statusCode !== 200) {
      void Taro.showToast({
        title: response.data.message,
        duration: 1000,
        icon: "none",
      });
    }
  }
};

const request = async (params: IRequest) => {
  const { url, contentType, ...rest } = params;
  let headers = {};

  try {
    const response: IResponse = await Taro.request({
      url: `api${url}`,
      header: { "content-type": contentType, ...headers },
      ...rest,
    });
    if (response.statusCode === 200 && response.data.code !== 0) {
      void Taro.showToast({
        title: response.data.message,
        duration: 1500,
        icon: "none",
      });
      return response.data;
    }
    return response.data;
  } catch (error) {
    if (error instanceof Response) {
      const res: any = {};
      res.statusCode = error.status;
      res.header = {};
      for (const key of error.headers.keys()) {
        res.header[key] = error.headers.get(key);
      }
      return error
        .json()
        .then((data) => {
          res.data = data;
          return res;
        })
        .then((response) => {
          errorHandle(response);
          return response.data;
        });
    }
  }
};

const APIFunction = {};
Object.keys(APIS).forEach((key) => {
  const value = APIS[key].split(" ");
  const url = value.length === 1 ? value[0] : value[1];
  const method = value.length === 1 ? "GET" : "POST";
  const contentType =
    value.length === 3
      ? "application/x-www-form-urlencoded"
      : "application/json";
  APIFunction[key] = (data: any) => request({ url, method, data, contentType });
});

export default APIFunction;
