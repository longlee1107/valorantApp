import {Axios} from './Axios';
import {AxiosFormData} from "./AxiosFormData";

function getListRequest(id) {
    return Axios.get(`api/v1/users/get_request_sent_to_me?id=${id}`);
}

function getListRequestDetail(id, type) {
    return Axios.get(`api/v1/users/get_request_by_id_and_type?id=${id}&type=${type}`)
}

function changeStatusModifiRequest(payload) {
    return Axios.post(`api/v1/request_modifi/acceptRequestModifi`, payload)
}

function changeStatusDeviceRequest(payload) {
    return Axios.put(`api/v1/request-device/acceptRequestDevice`, payload)
}

function changeStatusAttendRequest(payload) {
    return AxiosFormData.post(`/api/v1/request_attend/change-status`, payload)
}

function changeStatusDayoffRequest(payload) {
    return AxiosFormData.post(`/api/v1/request_day_off/change-status`, payload)
}

function changeStatusOTRequest(payload) {
    return AxiosFormData.post(`/api/v1/request_ot/response-request-ot`, payload)
}

export const listRequestService = {
    getListRequest,
    getListRequestDetail,
    changeStatusModifiRequest,
    changeStatusDeviceRequest,
    changeStatusAttendRequest,
    changeStatusDayoffRequest,
    changeStatusOTRequest
};