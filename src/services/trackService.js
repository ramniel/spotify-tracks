import http from "./httpService";
import { apiUrl } from "../config.json";

export function searchTracks(searchQuery, accessToken) {
  const authorization = "Bearer ".concat(accessToken);
  const headers = {
    headers: { Authorization: authorization }
  };
  return http.get(`${apiUrl}/search?q=${searchQuery}&type=track`, headers);
}
