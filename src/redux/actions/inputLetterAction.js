const INPUT_LETTER = 'INPUT_LETTER' 
// action для отслеживания нажатой юзером буквы
export const inputLetterAction = (payload) => ({
    type: INPUT_LETTER,
    payload
})