import { initialState } from "../store"

const RESET_STATE = 'RESET_STATE'
// не работает, так как просто перезагружаю страницу
export const resetStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_STATE:
            return initialState
        default:
            return state
    }
}