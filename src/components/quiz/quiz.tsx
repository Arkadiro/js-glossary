import React from 'react';
import * as Styled from './quiz.styles';
import Image from "@/components/image/image";
import directory from "./img/directory.svg"
import { data, answers, answersOrder } from './content'

//ts

const Quiz: React.FC = () => {
    let score = 0;

    
    // const results = document.getElementById('results');
    // const quizForm = document.getElementById('quizForm');
    // const body = document.body;
    
    // const buildQuestions = () => {
    //     data.forEach((e, i) => {
    //         quizForm.insertAdjacentHTML('beforeend', `
    //             <h3>${i + 1}. ${e.question}</h3>
    //             <div id='question${i + 1}'></div>
    //         `);
    //     });
    //     quizForm.insertAdjacentHTML('beforeend', `
    //             <input type="submit" value="Submit Answers"></input>
    //         `);
    // };
    
    // const buildAnswers = () => {
    //     data.forEach((e, index) => {
    //         const question = document.getElementById(`question${index + 1}`);
    //         e.answers.forEach((e, i) => {
    //             question.innerHTML += `
    //                 <input type="radio" name="q${index + 1}" value="${answersOrder[i]}" id="q1a">${answersOrder[i]}. ${e}<br>
    //             `;
    //         });
    //     })
    // };
    
    // const popup = (e) => {
    //     if (e === 'show') {
    //         body.style.overflowY = 'hidden';
    //         results.style.opacity = `0.8`;
    //         results.style.zIndex = '1';
    //     } else if (e === 'hide') {
    //         body.style.overflowY = 'auto';
    //         results.style.opacity = '0';
    //         results.style.zIndex = '-1';
    //     }
    // };
    
    // const addEventListeners = () => {
    //     quizForm.addEventListener('submit', (e) => {
    //         e.preventDefault();
    //         submitAnswers();
    //     });
    //     results.addEventListener('click', () => {
    //         popup('hide');
    //         score !== 0 ? quizForm.reset() : null;
    //         score = 0;
    
    //     });
    // };
    
    // buildQuestions();
    // buildAnswers();
    // addEventListeners();
    
    // const submitAnswers = () => {
    //     if (score !== 0) {
    //         score = 0;
    //     };
    
    //     const total = data.length;
    
    //     popup('show');
    
    //     //Get user input
    //     const userInput = [];
    //     data.forEach((e, i) => {
    //         if (document.forms["quizForm"][`q${i + 1}`].value === '') {
    //             userInput.push(null);
    //         } else {
    //             userInput.push(document.forms["quizForm"][`q${i + 1}`].value);
    //         };
    //     });
    
    //     //Validation
    //     for (let [i, value] of userInput.entries()) {
    //         if (value === null) {
    //             results.innerHTML = `
    //                 <h3> You missed question ${i + 1}</h3>
    //             `;
    //             break;
    //         }
    //     };
    
    
    //     //Check Answers
    //     for (let [i] of userInput.entries()) {
    //         if (userInput[i] === answers[i]) {
    //             score++;
    //         }
    //     };
    
    //     // Display results
    //     if (!userInput.includes(null)) {
    //         results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';
    //     };
    
    // }

    return (

        <Styled.Quiz>
            <div id="container">
                <header>
                    <h1>Simple JS Quiz</h1>
                    <p>Test your knowlage in <strong>JS fundamantals</strong></p>
                </header>
                <section>
                    <div id="results"></div>
                    <form name="quizForm" id="quizForm">
                        {data.map((e, index) => (
                            <>
                                <h3>{index + 1}. {e.question}</h3>
                                <div id={'question ' + index + 1}> 
                                {e.answers.map((e, i) => (
                                        <>
                                        <input type="radio" name="q${index + 1}" value="${answersOrder[i]}" id="q1a"/>{answersOrder[i] + `. ${e}`}
                                        <br/>
                                        </>
                                    ))}
                                </div>
                            </>
                        ))}
                        <input type="submit" value="Submit Answers"></input>
                    </form>
                </section>
                <footer>
                    <p>Copryight &copy; 2024</p>
                </footer>
            </div>
        </Styled.Quiz>
    )
};

export default Quiz;
