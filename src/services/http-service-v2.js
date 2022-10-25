import { AUTH } from './auth-service.js';
import { CONFIG } from './config-service';
import {getTokenSync} from "../lib/token";

export const postV2 = ({ url, payload }) => {
  const token = getTokenSync();
  const headers = {};
  if(token){
    headers[AUTH.AUTH_TOKEN_NAME] = token
  }

  return fetch(`${CONFIG.BASE_URL}/${url}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      ...headers
    },
    body: JSON.stringify(payload),
  }).then((response) => {
    if(!response.ok) {
      const message = httpErrorHandler(response);
      throw new Error(message);
    }

    let responseJSON;
    try {
      responseJSON = response.json();
    } catch (error) {
      console.log(error);
      throw new Error('Unexpected Error Occurred!');
    }

    return responseJSON;
  });
}

export const post = ({ url, payload }) => {
  return fetch(`${CONFIG.BASE_URL}/${url}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      [AUTH.AUTH_TOKEN_NAME]: AUTH.AUTH_TOKEN
    },
    body: JSON.stringify(payload),
  }).then((response) => {
    if(!response.ok) {
      const message = httpErrorHandler(response);
      throw new Error(message);
    }

    let responseJSON;
    try {
      responseJSON = response.json();
    } catch (error) {
      throw new Error('Unexpected Error Occurred!');
    }

    return responseJSON;
    
  }).then((data) => {
    if (data.IsError) {
      const message = customErrorHandler(data);
      throw new Error(message);
    }

    return data;
  });
}

const httpErrorHandler = (response) => {
  switch (response.State) {
    case 404:
      return `Not Found! Error Code: ${response.status}`
    default:
      return `Unexpected Error Occurred!  Error Code: ${response.status}`
  }
}

const customErrorHandler = (response) => {
  switch (response.Id) {
    case 400:
      return `${response.Msg}: ${response.Id}`
    default:
      return `${response.Msg || 'Unexpected Error Occurred!'} Error Code: ${response.Id || 999} (c)`
  }
}

const http = {post};

export default http;