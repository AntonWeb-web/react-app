import { initialState } from "../store"

const CHANGE_COLOR = 'CHANGE_COLOR' 
export const changeColorReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_COLOR:
            const test = { ...state.defaultText }
            // проверяю правильность буквы юзера
            // если верная, крашу в белый
            return action.isCorrect ? {
                ...state, defaultText: Object.values(test).map(item => 
                    item.id === action.payload
                        ? {...item, color: '#d1d0c5'}
                        : item
                )
            } : {
                // если не верная, крашу в красный
                ...state, defaultText: Object.values(test).map(item => 
                    item.id === action.payload + 1
                        ? {...item, color: '#ca4754'}
                        : item
                )
            }
        default:
            return state
    }
} 
