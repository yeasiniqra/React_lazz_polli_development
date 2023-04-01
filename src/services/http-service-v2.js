import { AUTH } from "./auth-service.js";
import { CONFIG } from "./config-service";
import { getTokenSync } from "../lib/token";
import { POST_RESUME } from "../lib/endpoints.js";
import { toast } from "react-toastify";


//post method
// export const postV2 = ({ url, payload }) => {
//   const token = getTokenSync();
//   const headers = {};
//   if (token) {
//     headers[AUTH.AUTH_TOKEN_NAME] = token;
//   }
//   return fetch(`${CONFIG.BASE_URL}/${url}`, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//       ...headers,
//     },
//     body: JSON.stringify({ ...payload, activityId: window.ActivityId }),
//   })
//     .then(async (response) => {
//       if (!response.ok) {
//         const message = httpErrorHandler(response);
//         throw new Error(message);
//       }
//       let responseJSON;
//       try {
//         responseJSON = await response.json();
//       } catch (error) {
//         throw new Error("Unexpected Error Occurred!");
//       }

//       return responseJSON;
//     });
// };

// export const getV2 = ({ url }) => {
//   const token = getTokenSync();
//   const headers = {};
//   if (token) {
//     headers[AUTH.AUTH_TOKEN_NAME] = token;
//   }
//   return fetch(`${CONFIG.BASE_URL}/${url}`, {
//     method: "GET",
//     headers: {
//       "content-type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//       ...headers,
//     },
//   })
//     .then(async (response) => {
//       if (!response.ok) {
//         const message = httpErrorHandler(response);
//         throw new Error(message);
//       }

//       let responseJSON;
//       try {
//         responseJSON = await response.json();
//       } catch (error) {
//         console.log(error);
//         throw new Error("Unexpected Error Occurred!");
//       }

//       return responseJSON;
//     });
// };

export const postV2 = ({ url, payload }) => {
  const token = getTokenSync();
  const headers = {};
  if (token) {
    headers[AUTH.AUTH_TOKEN_NAME] = token;
  }
  return fetch(`${CONFIG.BASE_URL}/${url}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      ...headers,
    },
    body: JSON.stringify({ ...payload, activityId: window.ActivityId }),
  })
    .then(async (response) => {
      if (!response.ok) {
        const message = httpErrorHandler(response);
        if (response.status === 401) {
          toast.warning(`Your Session Expired Please Logout and again Login!`);
        }
        throw new Error(message);
      }
      let responseJSON;
      try {
        responseJSON = await response.json();
      } catch (error) {
        throw new Error("Unexpected Error Occurred!");
      }

      return responseJSON;
    });
};

export const getV2 = ({ url }) => {
  const token = getTokenSync();
  const headers = {};
  if (token) {
    headers[AUTH.AUTH_TOKEN_NAME] = token;
  }
  return fetch(`${CONFIG.BASE_URL}/${url}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      ...headers,
    },
  })
    .then(async (response) => {
      if (!response.ok) {
        const message = httpErrorHandler(response);
        if (response.status === 401) {
          toast.warning(`Your Session Expired Please Logout and again Login!`);
        }
        throw new Error(message);
      }

      let responseJSON;
      try {
        responseJSON = await response.json();
      } catch (error) {
        console.log(error);
        throw new Error("Unexpected Error Occurred!");
      }

      return responseJSON;
    });
};




//for file upload 1
export const sendResume = async (payload) => {
  const res = await fetch(`${CONFIG.BASE_URL}/${POST_RESUME}`, {
      method: 'POST',
      headers: {
          'Access-Control-Allow-Origin': "*",
          'content-type': 'multipart/form-data', 
      },
      body: payload
  });

  if(res.status > 400)
      throw new Error("Validation Error");

  if (res.status > 299 || res.status < 200)
      throw new Error(res.statusText);

  return await res.json();
}

//for file upload 2
const file = ({ url, payload }) => {
    const token = getTokenSync(); 
    const headers = {};
    if (token) {
      headers[AUTH.AUTH_TOKEN_NAME] = token;
    }
    return fetch(`${CONFIG.BASE_URL}/${url}`, {
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin': "*",
      },
      body: payload,
    }).then((response) => {
      if (!response.ok) {
        const message = httpErrorHandler(response);
        throw new Error(message);
      }

      let responseJSON;
      try {
        responseJSON = response.json();
      } catch (error) {
        console.log(error);
        throw new Error("Unexpected Error Occurred!");
      }

      return responseJSON;
    });
};

export const post = ({ url, payload }) => {
  return fetch(`${CONFIG.BASE_URL}/${url}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      [AUTH.AUTH_TOKEN_NAME]: AUTH.AUTH_TOKEN,
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) {
        const message = httpErrorHandler(response);
        throw new Error(message);
      }

      let responseJSON;
      try {
        responseJSON = response.json();
      } catch (error) {
        throw new Error("Unexpected Error Occurred!");
      }

      return responseJSON;
    })
    .then((data) => {
      if (data.IsError) {
        const message = customErrorHandler(data);
        throw new Error(message);
      }

      return data;
    });
};

// const httpErrorHandler = (response) => {
//   switch (response.State) {
//     case 404:
//       return `Not Found! Error Code: ${response.status}`;
//     default:
//       return `Unexpected Error Occurred!  Error Code: ${response.status}`;
//   }
// };

// 'hhtp1',
const httpErrorHandler = (response) => {
  if (response.status === 401) {
    toast.warning(`Unauthorized`);
    return "Unauthorized";
  }

  if (response.status === 403) {
    toast.warning(`Forbidden`);
    return "Forbidden";
  }

  if (response.status === 404) {
    toast.warning(`Resource not found`);
    return "Resource not found";
  }

  const contentType = response.headers.get("Content-Type");
  if (contentType && !contentType.includes("application/json")) {
    return "Unexpected Error Occurred!";
  }

  return response.json().then((error) => {
    if (error.message) {
      return error.message;
    }
    return "Unexpected Error Occurred!";
  });
};


const customErrorHandler = (response) => {
  switch (response.Id) {
    case 400:
      return `${response.Msg}: ${response.Id}`;
    default:
      return `${response.Msg || "Unexpected Error Occurred!"} Error Code: ${
        response.Id || 999
      } (c)`;
  }
};

const http = { post, file };

export default http;
























// fetch('https://client.lazzpolli.com/AppUser/Profile')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });