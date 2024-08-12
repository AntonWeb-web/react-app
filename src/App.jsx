import style from './app.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeColorAction } from './redux/actions/changeColorAction'
import { inputLetterAction } from './redux/actions/inputLetterAction'
import { Words } from './words'
import { Reset } from './reset'
import { Timer } from './timer'

const App = () => {
    const dispatch = useDispatch()
    const viewText = useSelector(state => state.rootReducer.inputLetter.defaultText)
    const currentIndex = useSelector(state => state.rootReducer.inputLetter.currentIndex)
    const colorLetter = useSelector(state => state.rootReducer.changeColor.defaultText)
    const isCorrect = useSelector(state => state.rootReducer.inputLetter.isCorrect)

    const [seconds, setSeconds] = useState(30)
    const [startTimer, setStartTimer] = useState(false)
    const [countPress, setCountPress] = useState(0)
    const [wpm, setWpm] = useState()
    const [acc, setAcc] = useState()
    const [showWords, setShowWords] = useState(true)

    const handleKeyDown = (event) => {
        let pressKey = event.key
        if (event.key === ' ')
            pressKey = '\u00A0'
        dispatch(inputLetterAction(pressKey))
        setCountPress(count => count + 1)
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        return () => (
            window.removeEventListener('keydown', handleKeyDown)
        )
    }, [])

    useEffect(() => {
        dispatch(changeColorAction(currentIndex - 1, isCorrect))
        
        if (startTimer === false && currentIndex > 0) setStartTimer(true)
    }, [currentIndex, isCorrect])

    useEffect(() => {
        if (currentIndex > 0 && seconds > 0) {

            const timerId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);

            return () => clearInterval(timerId);
        } else if (seconds <= 0) {
            clearInterval();

            const resultWpm = 'wpm ' + Math.round(currentIndex * 2 / 5)
            const resultAcc = 'acc ' + Math.round(currentIndex / countPress * 100) + '%' 

            setWpm(resultWpm)
            setAcc(resultAcc)
            setShowWords(false)
        }
    }, [startTimer, seconds])

    return (
        <div>
            <div className={style.typingArea}>
                <div className={style.void}></div>
                <Timer seconds={seconds} wpm={wpm} acc={acc} />
                {/* Компонента для отображения текста */}
                <Words text={viewText} seconds={seconds} currentIndex={currentIndex} colorLetter={colorLetter} />
                <div className={style.void}></div>
            </div>
            <Reset />
        </div>
    )
}

export default App