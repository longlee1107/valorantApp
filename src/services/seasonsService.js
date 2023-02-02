import { Axios } from "./Axios";

function getAllSeasonsRequest() {
  return Axios.get('seasons');
}

export const seasonsService = {
  getAllSeasonsRequest,
  };
  