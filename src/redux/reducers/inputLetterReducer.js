import { initialState } from "../store";

const INPUT_LETTER = 'INPUT_LETTER'
export const inputLetterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_LETTER:
            const { currentIndex, defaultText } = state;
            // проверяю правильность буквы юзера
            // и возвращаю соответствующий результат
            if (defaultText[currentIndex].letter === action.payload) {
                return { ...state, currentIndex: currentIndex + 1, isCorrect: true }
            } else {
                return { ...state, isCorrect: false}
            }
        default: 
            return state
    }
}