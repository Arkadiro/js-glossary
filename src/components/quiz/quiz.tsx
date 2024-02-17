// import Image from '@/components/image/image'
// import directory from './img/directory.svg'

import { useEffect, useState } from 'react'
import * as Styled from './quiz.styles'
import { data, answers, answersOrder } from './content'

//ts

const Quiz: React.FC = () => {
    // Сделал, чтобы empty не попадали в массив ответов,
    // потому что иначе будет баг при валидации
    const initialSelectedAnswers = Array.from({ length: data.length }, () => '')
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
        initialSelectedAnswers
    )

    // Знаю, что ts и так бы определил их стили...
    const [score, setScore] = useState<number>(0)
    const [validate, setValidate] = useState<boolean>(false)
    const [showResultModal, setShowResultModal] = useState<boolean>(false)

    // Проверяем ответы, начисляем баллы
    function checkAnswers() {
        let currentScore = 0

        selectedAnswers.forEach((selectedAnswer: string, index: number) => {
            if (selectedAnswer === answers[index]) {
                currentScore++
            }
        })
        setScore(currentScore)
    }

    // Выбор варианта ответа
    function handleAnswerChange(index: number, answer: string) {
        const newSelectedAnswers = [...selectedAnswers]
        newSelectedAnswers[index] = answer
        setSelectedAnswers(newSelectedAnswers)
    }

    // Дисаблим кнопку
    function validateAnswers() {
        if (
            selectedAnswers.length === data.length &&
            selectedAnswers.every((answer) => !!answer)
        ) {
            setValidate(true)
        } else setValidate(false)
    }

    // Считать баллы будем только при сабмите формы
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        validateAnswers()

        checkAnswers()
        setShowResultModal(true)
    }

    // Рендерим модалку
    // Вынес ее сюда, чтобы почище было в разметке
    function renderModalMessage() {
        return (
            <h3>
                You scored <span>{score}</span> out of{' '}
                <span>{data.length}</span>
            </h3>
        )
    }

    // Запрещаю скрол, при открытии модалки
    useEffect(() => {
        if (showResultModal) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'scroll'
        }
    }, [showResultModal])

    useEffect(() => {
        validateAnswers()
    }, [handleAnswerChange])

    return (
        <Styled.Quiz>
            <div id="container">
                <header>
                    <h1>Simple JS Quiz</h1>
                    <p>
                        Test your knowlage in <strong>JS fundamantals</strong>
                    </p>
                </header>
                <section>
                    {/* Показываем модалку */}
                    {showResultModal && renderModalMessage()}
                    <form name="quizForm" onSubmit={handleSubmit}>
                        {data.map((e, index) => (
                            <div key={index}>
                                <h3>
                                    {index + 1}. {e.question}
                                </h3>
                                <div id={'question ' + index + 1}>
                                    {e.answers.map((answer, i) => (
                                        // Для уникальности добавил 'a'
                                        <label key={i + 'a'}>
                                            <input
                                                type="radio"
                                                name={(index + 1).toString()}
                                                value={answer[i]}
                                                onChange={() =>
                                                    handleAnswerChange(
                                                        index,
                                                        answersOrder[i]
                                                    )
                                                }
                                            />
                                            {answersOrder[i] + `. ${answer}`}
                                            <br />
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button type="submit" disabled={!validate}>
                            Submit Answers
                        </button>
                    </form>
                </section>
                <footer>
                    <p>Copryight &copy; 2024</p>
                </footer>
            </div>
        </Styled.Quiz>
    )
}

export default Quiz
