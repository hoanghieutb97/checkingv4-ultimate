import { SET_GLLM,SET_SILICON } from './constants';
export const getGllmAPI = payload => ({
    type: SET_GLLM,
    payload
})
export const getSiliconAPI = payload => ({
    type: SET_SILICON,
    payload
})