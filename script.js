const questionSec = document.getElementById("question")
const answerButton = document.querySelectorAll(".answer")
const main = document.getElementById("main")
// const sa = document.getElementById("sa")
const result = document.getElementById("result")

let questionIndex = 0
let correctAnswersCount = 0
const questions = [
  {
    question: "Roberta _____ from The United States.",
    answers: [
      {
        text: "are",
        correct: false,
      },
      {
        text: "is",
        correct: true,
      },
      {
        text: "am",
        correct: false,
      },
      {
        text: "be",
        correct: false,
      },
    ],
  },
  {
    question: "What’s _____ name?",
    answers: [
      {
        text: "-",
        correct: false,
      },
      {
        text: "him",
        correct: false,
      },
      {
        text: "his",
        correct: true,
      },
      {
        text: "he",
        correct: false,
      },
    ],
  },

  {
    question: "My friend _____ in London.",
    answers: [
      {
        text: "living",
        correct: false,
      },
      {
        text: "live",
        correct: false,
      },
      {
        text: "lives",
        correct: true,
      },
      {
        text: "is live",
        correct: false,
      },
    ],
  },
]

function nextQ() {
  if (questionIndex == questions.length) {
    setTimeout(() => {
      main.style.display = "none"
      result.style.display = "inline"
      result.innerHTML = `you have answered <span id="spanA">${correctAnswersCount}</span> correct answers`
    }, 1000)

    // answerButton.forEach(button => {
    //   button.removeEventListener("click", selectAnswer)
    // })
    // sa.style.display = "inline"
  } else {
    result.style.display = "none"

    setTimeout(() => {
      questionSec.innerText = questions[questionIndex].question
      answerButton.forEach((button, index) => {
        button.innerText = questions[questionIndex].answers[index].text
        button.dataset.correct = questions[questionIndex].answers[index].correct
      })
    }, 1000)
  }
}
// sa.addEventListener("click", () => nextQ())
function selectAnswer(e) {
  const correctAnswer = e.target.dataset.correct
  console.log(correctAnswer)

  if (correctAnswer == "true") {
    correctAnswersCount++
    console.log(correctAnswersCount)

    document.body.classList.add("correct")
  } else {
    document.body.classList.add("wrong")
  }

  setTimeout(() => {
    document.body.classList.remove("correct", "wrong")
  }, 1000)

  questionIndex++
  nextQ()
}
answerButton.forEach(button => {
  button.addEventListener("click", selectAnswer)
})
nextQ()
