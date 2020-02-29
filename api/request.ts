import fetch from "isomorphic-unfetch";
const host = "http://127.0.0.1:9000";

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */



export const post = async (url, params) => {
  const options = {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "content-type": "application/json",
      'Authorization': window ? "Bearer " + JSON.parse(localStorage.getItem("token")) || "" : ""
    }
  };

  const response = await fetch(host + url, options);

  const data = await response.json();

  return data;
};

export const get = async url => {

  const response = await fetch(host + url);

  const data = await response.json();

  return data;
};
