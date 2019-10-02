import { authUrl, clientId, redirectUri, scopes } from "../config.json";

const apiEndpoint = authUrl + "/authorize";

export function authenticate() {
  window.location.href = `${apiEndpoint}?client_id=${clientId}&scope=${scopes.join(
    "%20"
  )}&response_type=token&redirect_uri=${redirectUri}`;
}

export function hashParams() {
  let hashParams = {};
  let e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }

  return hashParams;
}

export default {
  authenticate,
  hashParams
};
