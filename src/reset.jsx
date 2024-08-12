import style from './app.module.css'
import { useDispatch } from 'react-redux'
import { resetStateAction } from './redux/actions/resetStateAction'

export const Reset = () => {
    const dispatch = useDispatch()

    // сроки поджимают, не успел сделать нормальный ресет
    // реализовал через обновление страницы
    const handleReset = () => {
        window.location.reload()
        //dispatch(resetStateAction())
    }

    return (
        <div className={style.resetContainer}> Reset
            <button onClick={handleReset} className={style.buttonReset}> ↻ </button>
        </div>
    )
}