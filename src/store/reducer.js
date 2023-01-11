import { SET_GLLM, SET_SHEET } from "./constants";

export const initState = {
    gllm: [],
    sheet: []
}


function reducer(state, action) {
    switch (action.type) {
        case SET_GLLM:
            return {
                ...state,
                gllm: action.payload
            }

        case SET_SHEET:
            return {
                ...state,
                sheet: action.payload
            }

        default:
            throw console.log("invalid action", action);
    }

}

export default reducer