import { SET_GLLM, SET_SHEET } from './constants';
export const dispatchGLLM = payload => ({
    type: SET_GLLM,
    payload
})
export const dispatchSheet = payload => ({
    type: SET_SHEET,
    payload
})