import style from './app.module.css'

export const Words = (props) => {
    // индекс буквы на которой находимся (currentIndex)
    const currentIndex = props.currentIndex
    // наш текст (text)
    const text = props.text
    // оставшиеся секунды (seconds)
    const seconds = props.seconds

    return (
        // Проверяю осталось ли время
        seconds > 0 ? (
            <div className={style.wordsContainer}>
                {/* получаю буквы из текст для отображения */}
                {text.map(letter =>
                // в className использую условие, чтобы понять нужно подчёркивать слово или нет
                    <div key={letter.id} className={currentIndex === letter.id ? style.wordUnderline : style.word}>
                        <span key={letter.id}
                        // в style использую условие, чтобы понять в какой цвет перекрасить букву
                            style={{ color: props.colorLetter[letter.id].color }}
                        >
                            {letter.letter}
                        </span>
                    </div>
                )}
            </div>
        ) : null
        // когда время закончилось, перестаю отрисовывать текст
    )
}