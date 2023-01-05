import { SET_GLLM, SET_SILICON } from "./constants";

export const initState = {
    gllm: [],
    silicon: []
}


function reducer(state, action) {
    switch (action.type) {
        case SET_GLLM:
            return {
                ...state,
                gllm: action.payload
            }

        case SET_SILICON:
            return {
                ...state,
                silicon: action.payload
            }

        default:
            throw console.log("invalid action", action);
    }

}

export default reducer