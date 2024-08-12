const CHANGE_COLOR = 'CHANGE_COLOR'
// в зависимости от правильности буквы юзера
// меняем цвет буквы
export const changeColorAction = (payload, isCorrect) => ({
    type: CHANGE_COLOR,
    payload, 
    isCorrect,
})