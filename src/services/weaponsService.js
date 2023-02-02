import { Axios } from "./Axios";

function getAllWeapons() {
  return Axios.get('weapons');
}

export const weaponsService = {
    getAllWeapons,
  };
  