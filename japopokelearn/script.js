// HIRAGANA

const hiraganaContainer =
    document.getElementById("hiragana-container");

if (hiraganaContainer) {

    hiragana.forEach(letter => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.textContent = letter.kana;

        card.addEventListener("click", () => {

            card.textContent =
                `${letter.kana} - ${letter.romaji}`;

        });

        hiraganaContainer.appendChild(card);

    });

}



// KATAKANA

const katakanaContainer =
    document.getElementById("katakana-container");

if (katakanaContainer) {

    katakana.forEach(letter => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.textContent = letter.kana;

        card.addEventListener("click", () => {

            card.textContent =
                `${letter.kana} - ${letter.romaji}`;

        });

        katakanaContainer.appendChild(card);

    });

}

// KANJI N5
const n5Btn =
    document.getElementById("n5-btn");

const n4Btn = document.getElementById("n4-btn");
const kanjiContainer = document.getElementById("kanji-container");


function showN5() {
    kanjiContainer.innerHTML = "";

    kanjiN5.forEach(kanji => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.textContent = kanji.kanji;

        card.addEventListener("click", () => {

            card.textContent =`${kanji.kanji} - ${kanji.reading} - ${kanji.meaning}`;
        });

        kanjiContainer.appendChild(card);

    });

}


if (n5Btn) {

    n5Btn.addEventListener("click", showN5);

}


function showN4() {
    kanjiContainer.innerHTML = "";

    kanjiN4.forEach(kanji => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.textContent = kanji.kanji;

        card.addEventListener("click", () => {

            card.textContent =`${kanji.kanji} - ${kanji.reading} - ${kanji.meaning}`;
        });

        kanjiContainer.appendChild(card);

    });

}


if (n4Btn) {

    n4Btn.addEventListener("click", showN4);

}


// QUIZ

const questionElement =
    document.getElementById("question");

const answersContainer =
    document.getElementById("answers");

const resultElement =
    document.getElementById("result");

const scoreElement =
    document.getElementById("score");



let currentQuestion = 0;

let score = 0;



if (questionElement) {

    function showQuestion() {

        // SI YA TERMINÓ
        if (currentQuestion >= quizQuestions.length) {

            questionElement.textContent =
                "Quiz Complete!";



            answersContainer.innerHTML =
                "";



            resultElement.textContent =
                `Final Score: ${score}`;

            return;
        }



        // PREGUNTA ACTUAL
        const question =
            quizQuestions[currentQuestion];



        // MOSTRAR PREGUNTA
        questionElement.textContent =
            question.question;



        // LIMPIAR BOTONES
        answersContainer.innerHTML =
            "";



        // CREAR BOTONES
        question.answers.forEach(answer => {

            const button =
                document.createElement("button");



            button.textContent =
                answer;



            // EVENTO CLICK
            button.addEventListener("click", () => {

                if (answer === question.correct) {

                    resultElement.textContent =
                        "Correct!";



                    score++;

                } else {

                    resultElement.textContent =
                        "Wrong!";

                }



                scoreElement.textContent =
                    `Score: ${score}`;



                // SIGUIENTE PREGUNTA
                currentQuestion++;



                // MOSTRAR SIGUIENTE
                showQuestion();

            });



            answersContainer.appendChild(button);

        });

    }



    // INICIAR QUIZ
    showQuestion();

}