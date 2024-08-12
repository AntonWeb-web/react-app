import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { changeColorReducer } from "./reducers/changeColorReducer"
import { inputLetterReducer } from "./reducers/inputLetterReducer"
import { resetStateReducer } from "./reducers/resetStateReducer"

const allText = [
    {id: 1, text: 'Nulla arcu libero, sit dapibus vel cursus ex. Amet, cursus vitae justo nulla justo sit sodales dictum interdum integer augue dapibus nisi tortor, vene'},
    {id: 2, text: 'In ultricies. In pellentesque sed aenean ipsum dui urna non amet, nulla mattis cras dictum. Ex. Ipsum non aenean dolor risus tortor, amet mattis lorem'},
    {id: 3, text: 'Ultricies. Velit ornare lectus quis, sed dictumst. Amet, molestie risus in cursus mattis sit leo, mattis platea mauris faucibus. Libero, eget morbi la'},
    {id: 4, text: 'Cras ornare hac in aenean cras consectetur consectetur quam, venenatis risus odio. Sit ornare non eget nulla sodales sed odio. In accumsan ornare just'},
    {id: 5, text: 'Sit sit nec in lorem et mattis non dictum. Consectetur mattis et. Nulla ultricies. Faucibus. Mauris et cursus leo, leo, et non amet id aenean eleifend'},
    {id: 6, text: 'can increase develop suck keep he without consider school be day few life school set through may ask system make old would work well because now face since'},
]

// рандомлю текст из массива
const text = allText[Math.floor(Math.random() * allText.length)].text.toLowerCase()
// тут я разбиваю текст на буквы
// понимаю, что надо было бы реализовать как-то по другому, 
// но ничего лучше я пока что не придумал
const splitText = text.replace(/ /g, '\u00A0').split('').map((letter, letterIndex) => {
    return {
        id: letterIndex,
        letter: letter,
        color: '323437',
    }
})

export const initialState = {
    inputLetter: '',
    defaultText: splitText,
    currentIndex: 0,
    isCorrect: true,
}

const rootReducer = combineReducers({
    inputLetter: inputLetterReducer,
    changeColor: changeColorReducer,
    resetState: resetStateReducer,
})

export const store = configureStore({
    reducer: {
        rootReducer,
    },
})