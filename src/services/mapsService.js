import {Axios} from './Axios';

function getAllMap(){
    return Axios.get('maps');
}

export const mapsService = {
  getAllMap
};