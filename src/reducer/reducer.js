import * as actions from "../types/types";

function reducer (state={}, action) {
    switch (action.type) {
        case actions.GET_PEOPLE:
            return {
                ...state,
                results: action.payload.results
            }
        case actions.GET_PLANETS:
            return {
                ...state,
                results: action.payload.results
            }
        default:
            return state;
    }
}

export default reducer;
