import {Axios} from './Axios';

function getAllAgents(){
    return Axios.get('agents?isPlayableCharacter=true');
}

export const agentsService = {
    getAllAgents
};