import style from './app.module.css'

export const Timer = (props) => {
    // скорость печати (wpm)
    const wpm = props.wpm
    // аккуратность (acc)
    const acc = props.acc
    // оставшееся время (seconds)
    const seconds = props.seconds

    return (
        <div className={style.divTime}>
            {seconds > 0 ?
                <div> {seconds} </div> : null}
            <div> {wpm} </div>
            <div> {acc} </div>
        </div>
    )
}