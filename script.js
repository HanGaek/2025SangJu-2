const quizData = [
  {
    type: "multiple",
    question: "예수님은 누구라고 말씀하셨나요?",
    choices: ["양의 문", "양치기", "나무 문", "성벽"],
    answer: "양의 문",
    explanation:
      "요한복음 10장 7절 말씀에서 예수님은 양의 문이라고 말씀하셨습니다."
  },
  {
    type: "multiple",
    question: "도둑은 무엇을 하려고 온다고 했나요?",
    choices: [
      "양과 장난치려고",
      "양을 놀게 하려고",
      "양을 도적질하고 죽이고 멸망시키려고",
      "양이 생명을 얻게 하려고"
    ],
    answer: "양을 도적질하고 죽이고 멸망시키려고",
    explanation:
      "요한복음 10장 10절 도적이 오는 것은 도적질하고 죽이고 멸망시키려는 것뿐이요."
  },
  {
    type: "multiple",
    question: "예수님은 왜 오셨다고 하셨나요?",
    choices: [
      "양과 놀기 위하여",
      "양에게 생명을 주려고",
      "양의 행동에 화가 나서",
      "양의 친구를 만나려고"
    ],
    answer: "양에게 생명을 주려고",
    explanation:
      "요한복음 10장 10절 내가 온 것은 양으로 생명을 얻게 하고 더 풍성히 얻게 하려는 것이라"
  },
  {
    type: "multiple",
    question: "양은 어떻게 해야 구원을 받는다고 했나요?",
    choices: [
      "문으로 들어가야 한다",
      "힘껏 외쳐야 한다",
      "열심히 올라가야 한다",
      "조용히 기다려야 한다"
    ],
    answer: "문으로 들어가야 한다",
    explanation:
      "요한복음 10장 9절 내가 문이니 누구든지 나로 말미암아 들어가면 구원을 얻고.."
  },
  {
    type: "multiple",
    question: "예수님보다 먼저 온 자들은 누구라고 하셨나요?",
    choices: ["왕", "목자", "절도와 강도", "문지기"],
    answer: "절도와 강도",
    explanation: "요한복음 10장 8절 나보다 먼저 온 자는 다 절도요 강도니.."
  },
  {
    type: "multiple",
    question: "예수님을 통해 들어가면 무엇을 얻을 수 있나요?",
    choices: ["선물", "친구", "구원", "지혜"],
    answer: "구원",
    explanation:
      "요한복음 10장 9절 내가 문이니 누구든지 나로 말미암아 들어가면 구원을 얻고.."
  },
  {
    type: "multiple",
    question: "‘나로 말미암아 들어가면’ 어떤 일이 일어나나요?",
    choices: ["집을 얻는다", "구원을 얻는다", "선물을 얻는다", "친구를 얻는다"],
    answer: "구원을 얻는다",
    explanation:
      "요한복음 10장 9절 내가 문이니 누구든지 나로 말미암아 들어가면 구원을 얻고.."
  },
  {
    type: "multiple",
    question: "양이 ‘들어가며 나오며’ 무엇을 얻나요?",
    choices: ["구원", "울타리", "꼴", "선한목자"],
    answer: "꼴",
    explanation:
      "요한복음 10장 9절 말미암아 들어가면 구원을 얻고 또는 들어가며 나오며 꼴을 얻으리라.."
  },
  {
    type: "multiple",
    question: "요한복음 10장 7절에서 하신 말씀이 아닌 것은?",
    choices: [
      "나는 양의 문이다",
      "너희는 내 양이다",
      "내가 진실로 너희에게 말한다"
    ],
    answer: "너희는 내 양이다",
    explanation:
      "요한복음 10장 7절 그러므로 예수께서 다시 이르시되 내가 진실로 진실로 너희에게 말하노니 나는 양의 문이라"
  },
  {
    type: "multiple",
    question:
      "요한복음 10장 9절의 말씀에서 예수님을 통해 들어간 자가 얻는 것과 가장 거리가 먼 것은?",
    choices: ["구원", "꼴", "생명", "재물"],
    answer: "재물",
    explanation:
      "요한복음 10장 9절 내가 문이니 누구든지 나로 말미암아 들어가면 구원을 얻고 또는 들어가며 나오며 꼴을 얻으리라"
  },
  {
    type: "multiple",
    question: "‘도둑’은 상징적으로 누구를 가리키는 것으로 해석되나요?",
    choices: [
      "당시 로마의 군인들",
      "예수님의 제자들",
      "어린 양들",
      "거짓 교사 또는 사탄"
    ],
    answer: "거짓 교사 또는 사탄",
    explanation:
      "요한복음 10장 10절 도적이 오는 것은 도적질하고 죽이고 멸망시키려는 것 뿐이요"
  },
  {
    type: "multiple",
    question: "예수님께서 스스로를 ‘문’이라 하신 비유적 의미는?",
    choices: [
      "구원의 유일한 통로이고 참된 길이라는 의미",
      "모든 사람의 문을 여는 열쇠라는 의미",
      "우리의 삶에서 겪는 관문 중 하나라는 의미",
      "우리가 필요할 때 열고 닫을 수 있다는 의미"
    ],
    answer: "구원의 유일한 통로이고 참된 길이라는 의미",
    explanation:
      "예수님은 구원으로 들어가는 유일한 문, 즉 길임을 나타내기 위한 비유입니다."
  },
  {
    type: "subjective",
    question:
      "문을 통해 들어간 자는 어떤 세가지 행동이나 상태를 경험한다고 말씀하셨나요?",
    answer: ["구원", "들어가며 나오며", "꼴"],
    explanation: "요한복음 10장 9절 말씀의 핵심 내용을 요약한 키워드입니다."
  },
  {
    type: "subjective",
    question: "‘들어가며 나오며 꼴을 얻는다’의 의미는 무엇인가요?",
    answer: ["자유롭게 인도받고 영적으로 풍성한 삶", "하나님의 돌봄과 공급"],
    explanation: "예수님을 통해 누리는 영적 삶을 의미합니다."
  },
  {
    type: "subjective",
    question:
      "‘양의 문으로만 들어가야 한다’는 우리의 삶에 어떤 메시지를 주고 있나요?",
    answer: [
      "예수님 믿고 따르는 것이 유일한 구원의 길",
      "예수님만이 참된 길이라는 메시지"
    ],
    explanation: "유일한 구원의 길은 예수님임을 강조하는 말씀입니다."
  }
];

const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const timerEl = document.getElementById("timer");
const questionText = document.getElementById("question-text");
const choicesBox = document.getElementById("choices-box");
const checkBtn = document.getElementById("check-btn");
const nextBtn = document.getElementById("next-btn");
const quitBtn = document.getElementById("quit-btn");

let current = -1; // 현재 문제 인덱스
let correctCount = 0;
let time = 0;
let timerInterval;
let shownQuestions = []; // 출제된 문제 인덱스 기록

startBtn.onclick = () => {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  shownQuestions = [];
  correctCount = 0;
  time = 0;
  current = -1;
  startTimer();
  nextBtn.click(); // 첫 문제 바로 출제
};

function startTimer() {
  timerInterval = setInterval(() => {
    time++;
    timerEl.textContent = `진행 시간: ${time}초 | 정답 수: ${correctCount}개`;
  }, 1000);
}

function showQuestion() {
  const quiz = quizData[current];
  const displayNumber = shownQuestions.length; // 출제 순서 번호 (1부터 시작했으므로 배열길이 그대로)

  questionText.textContent = `${displayNumber}. ${quiz.question}`;
  choicesBox.innerHTML = "";

  // 기존 정답 박스 제거
  const oldBox = document.querySelector(".answer-box");
  if (oldBox) oldBox.remove();

  if (quiz.type === "multiple") {
    const shuffledChoices = quiz.choices
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    shuffledChoices.forEach((choice) => {
      const btn = document.createElement("button");
      btn.textContent = choice;
      btn.onclick = () => {
        document
          .querySelectorAll("#choices-box button")
          .forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
      };
      choicesBox.appendChild(btn);
    });
  } else {
    const input = document.createElement("input");
    input.type = "text";
    input.id = "subjective-input";
    input.placeholder = "답을 입력하세요";
    input.style.fontSize = "16pt";
    input.style.padding = "10px";
    input.style.width = "80%";
    choicesBox.appendChild(input);
  }

  checkBtn.classList.remove("hidden");
  nextBtn.classList.add("hidden");

  if (quiz.type === "subjective") {
    quitBtn.classList.remove("hidden");
  } else {
    quitBtn.classList.add("hidden");
  }
}

checkBtn.onclick = () => {
  const quiz = quizData[current];
  let isCorrect = false;

  const answerBox = document.createElement("div");
  answerBox.className = "answer-box";

  if (quiz.type === "multiple") {
    const selectedBtn = document.querySelector("#choices-box button.selected");
    if (!selectedBtn) {
      alert("선택지를 고르세요!");
      return;
    }
    isCorrect = selectedBtn.textContent === quiz.answer;

    document.querySelectorAll("#choices-box button").forEach((btn) => {
      if (btn.textContent === quiz.answer) {
        btn.classList.add("correct-answer");
      }
    });
  } else {
    const input = document.getElementById("subjective-input");
    const userInput = input ? input.value.trim().toLowerCase() : "";

    if (Array.isArray(quiz.answer)) {
      isCorrect = quiz.answer.some((keyword) =>
        userInput.includes(keyword.toLowerCase())
      );
    } else {
      isCorrect = userInput === quiz.answer.toLowerCase();
    }
  }

  const resultMark = document.createElement("div");
  resultMark.textContent = isCorrect ? "⭕ 정답입니다!" : "❌ 오답입니다.";
  resultMark.style.fontSize = "28pt";
  resultMark.style.fontWeight = "bold";
  resultMark.style.marginBottom = "10px";

  const explainEl = document.createElement("p");
  explainEl.className = "explanation";
  explainEl.textContent = `설명: ${quiz.explanation}`;

  answerBox.appendChild(resultMark);
  answerBox.appendChild(explainEl);

  const questionBox = document.getElementById("question-box");
  const oldBox = document.querySelector(".answer-box");
  if (oldBox) oldBox.remove();
  questionBox.appendChild(answerBox);

  if (isCorrect) correctCount++;

  checkBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");
};

nextBtn.onclick = () => {
  const isEnoughCorrect = correctCount >= 4;

  if (!isEnoughCorrect) {
    // 객관식 문제 중 아직 출제 안된 문제 필터링
    const usedSet = new Set(shownQuestions);
    const remainingMultiple = quizData
      .map((q, i) => ({ q, i }))
      .filter(({ q, i }) => q.type === "multiple" && !usedSet.has(i));

    if (remainingMultiple.length === 0) {
      // 모두 소진 시 다시 랜덤 출제 (중복 허용)
      const allMultiple = quizData
        .map((q, i) => ({ q, i }))
        .filter(({ q }) => q.type === "multiple");
      const rand = Math.floor(Math.random() * allMultiple.length);
      current = allMultiple[rand].i;
    } else {
      // 남은 객관식 중 랜덤 출제
      const rand = Math.floor(Math.random() * remainingMultiple.length);
      current = remainingMultiple[rand].i;
    }

    shownQuestions.push(current);
    showQuestion();
  } else {
    // 정답 4개 이상일 때 주관식 문제 순서대로 출제
    current++;
    while (
      current < quizData.length &&
      quizData[current].type !== "subjective"
    ) {
      current++;
    }

    if (current < quizData.length) {
      shownQuestions.push(current);
      showQuestion();
    } else {
      finishQuiz();
    }
  }
};

quitBtn.onclick = () => {
  finishQuiz();
};

function finishQuiz() {
  clearInterval(timerInterval);
  quizScreen.innerHTML = `
    <h1>퀴즈 완료!</h1>
    <p>총 정답 수: ${correctCount}개</p>
    <p>총 소요 시간: ${time}초</p>
    <br/><br/><br/>
    <p><div style="font-size: 18pt; color: black;">요한복음 10장 7절-10절<br/>
    7. 그러므로 예수께서 다시 이르시되 내가 진실로 진실로 너희에게 말하노니 나는 양의 문이라<br />
    8. 나보다 먼저 온 자는 다 절도요 강도니 양들이 듣지 아니하였느니라<br />
    9. 내가 문이니 누구든지 나로 말미암아 들어가면 구원을 얻고 또는 들어가며 나오며 꼴을 얻으리라<br />
    10. 도적이 오는 것은 도적질하고 죽이고 멸망시키려는 것뿐이요 내가 온 것은 양으로 생명을 얻게 하고 더 풍성히 얻게 하려는 것이라</div></p>    
  `;
}