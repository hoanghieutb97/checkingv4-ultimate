import { SET_TODO } from "./constants"
export const initState = {
    gllm: [],
    silicon: []
}
function reducer(state, action) {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                todoInput: action.payload
            }
        default:
            throw console.log("invalid action", action);
    }

}

export default reducer