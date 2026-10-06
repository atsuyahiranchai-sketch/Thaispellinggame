const questionSets = {
  "ป.4": [
    { choices: ["อนุญาต", "อนุญาติ", "อณุญาต", "อนุญาด"], correct: 0 },
    { choices: ["สังเกต", "สังเกตุ", "สังเกด", "สังเกตต์"], correct: 0 },
    { choices: ["โอกาส", "โอกาศ", "โอกาด", "โอกาส์"], correct: 0 },
    { choices: ["อากาศ", "อากาส", "อากาด", "อากาษ"], correct: 0 },
    { choices: ["กะเพรา", "กระเพรา", "กะเพา", "กระเพา"], correct: 0 },
    { choices: ["สัปดาห์", "สับดาห์", "สัปดา", "สัปปดาห์"], correct: 0 },
    { choices: ["พยายาม", "พยาม", "พะยายาม", "พะยาม"], correct: 0 },
    { choices: ["สะอาด", "สอาด", "สะอาดด", "สะอ๊าด"], correct: 0 },
    { choices: ["กติกา", "กฏิกา", "กะติกา", "กติการ"], correct: 0 },
    { choices: ["โทรศัพท์", "โทรสับ", "โทรศัพย์", "โทรศัพท์์"], correct: 0 },
  ],
  "ป.5": [
    { choices: ["ผลิตภัณฑ์", "ผลิตภัณท์", "ผลิตภัณฑ", "ผลิตภัณ"], correct: 0 },
    { choices: ["บรรยากาศ", "บรรยากาส", "บันยากาศ", "บรรยากาด"], correct: 0 },
    { choices: ["อัศจรรย์", "อัศจรร", "อัสจรรย์", "อัศจันย์"], correct: 0 },
    { choices: ["กฎหมาย", "กฏหมาย", "กดหมาย", "กฏหมายน"], correct: 0 },
    { choices: ["สัญลักษณ์", "สัญญลักษณ์", "สัญลักษ์", "สัญญลักณ์"], correct: 0 },
    { choices: ["รสชาติ", "รสชาด", "รสชาต", "รสชาต์"], correct: 0 },
    { choices: ["สัมภาษณ์", "สัมพาษณ์", "สัมภาษ", "สัมภาสณ์"], correct: 0 },
    { choices: ["ประณีต", "ปราณีต", "ประนีต", "ประณีตต์"], correct: 0 },
    { choices: ["กะทันหัน", "กระทันหัน", "กะทันฮัน", "กะทันหันท์"], correct: 0 },
    { choices: ["คำนวณ", "คำนวน", "คำนวณณ์", "คำณวน"], correct: 0 }
  ],
  "ป.6": [
    { choices: ["ปรากฏ", "ปรากฎ", "ปรากด", "ปรากฏ์"], correct: 0 },
    { choices: ["อุปสรรค", "อุปสัก", "อุปสรรค์", "อุปสัค"], correct: 0 },
    { choices: ["พิพิธภัณฑ์", "พิพิธภัณท์", "พิพิธพัน", "พิพิธภัณฑ"], correct: 0 },
    { choices: ["ทะเลสาบ", "ทะเลสาป", "ทะเลสาบบ", "ทเลสาบ"], correct: 0 },
    { choices: ["นิทรรศการ", "นิทัศการ", "นิทรรศกาล", "นิทรรศ์การ"], correct: 0 },
    { choices: ["กรรมสิทธิ์", "กรรมสิทธิ", "กรรมสิทธ์", "กรรมสิทธิ์์"], correct: 0 },
    { choices: ["สัมมนา", "สัมนา", "สัมมะนา", "สัมมน่า"], correct: 0 },
    { choices: ["วิทยาศาสตร์", "วิทยาศาตร์", "วิทยาสาสตร์", "วิทยาศาสต์"], correct: 0 },
    { choices: ["สาธารณประโยชน์", "สาธารณะประโยชน์", "สาธารณประโยช", "สาธารณะประโยชน์์"], correct: 0 },
    { choices: ["อนุรักษ์", "อนุรัก", "อนุรักษ", "อนุรักษณ์"], correct: 0 }
  ]
};

const spellingNotes = {
  "อนุญาต": "เขียน อนุญาต ไม่มีสระอิท้ายคำ",
  "สังเกต": "สังเกต ลงท้ายด้วย ต ไม่เติมสระอุ",
  "โอกาส": "โอกาส ใช้ ส สะกด",
  "อากาศ": "อากาศ ลงท้ายด้วย ศ",
  "กะเพรา": "กะเพรา ใช้ กะ ไม่เติม ร ตรงกลาง",
  "สัปดาห์": "สัปดาห์ ใช้ ป สะกดพยางค์แรก และ ดาห์ในพยางค์หลัง",
  "พยายาม": "พยายาม มี ย สองตำแหน่ง",
  "สะอาด": "สะอาด ใช้สระอาในพยางค์หลัง",
  "กติกา": "กติกา ใช้ ต เต่า ไม่ใช่ ฏ ปฏัก",
  "โทรศัพท์": "โทรศัพท์ มี พ การันต์",
  "ผลิตภัณฑ์": "ผลิตภัณฑ์ ลงท้ายด้วย ฑ์",
  "บรรยากาศ": "บรรยากาศ ใช้ บรร นำหน้า",
  "อัศจรรย์": "อัศจรรย์ มี รร และ ย์ การันต์",
  "กฎหมาย": "กฎหมาย ใช้ ฎ ชฎา",
  "สัญลักษณ์": "สัญลักษณ์ ลงท้ายด้วย ษณ์",
  "รสชาติ": "รสชาติ ใช้ ช ในคำว่า ชาติ",
  "สัมภาษณ์": "สัมภาษณ์ ใช้ ภ และ ษณ์",
  "ประณีต": "ประณีต ใช้ ณ เณร",
  "กะทันหัน": "กะทันหัน ขึ้นต้นด้วย กะ",
  "คำนวณ": "คำนวณ ใช้ ณ เณร ไม่ใช่ น หนู",
  "ปรากฏ": "ปรากฏ ใช้ ฏ ปฏัก",
  "อุปสรรค": "อุปสรรค มี รร อยู่ท้ายคำ",
  "พิพิธภัณฑ์": "พิพิธภัณฑ์ ลงท้ายด้วย ฑ์",
  "ทะเลสาบ": "ทะเลสาบ ใช้ บ ใบไม้สะกด",
  "นิทรรศการ": "นิทรรศการ มี รร ในพยางค์ รรศ",
  "กรรมสิทธิ์": "กรรมสิทธิ์ ลงท้ายด้วย ธิ์",
  "สัมมนา": "สัมมนา ไม่มีสระอิหลัง ม ตัวแรก",
  "วิทยาศาสตร์": "วิทยาศาสตร์ ลงท้ายด้วย ศาสตร์",
  "สาธารณประโยชน์": "สาธารณประโยชน์ เขียน ณ ก่อนคำว่า ประโยชน์",
  "อนุรักษ์": "อนุรักษ์ ลงท้ายด้วย ษ์"
};

const screens = {
  home: document.getElementById("homeScreen"),
  statusBoard: document.getElementById("statusBoardScreen"),
  test: document.getElementById("testScreen"),
  postReady: document.getElementById("postReadyScreen"),
  game: document.getElementById("playScreen"),
  gameOver: document.getElementById("gameOverScreen"),
  result: document.getElementById("resultScreen")
};
const gradeSelect = document.getElementById("gradeSelect");
const playerNameInput = document.getElementById("playerName");
const testButtons = [...document.querySelectorAll(".test-option")];
const iceButtons = [...document.querySelectorAll(".arena-ice")];
const video = document.getElementById("cameraVideo");
const canvas = document.getElementById("handCanvas");
const canvasContext = canvas.getContext("2d");
const cameraPlaceholder = document.getElementById("cameraPlaceholder");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const startSeconds = 40;
const maxSeconds = 60;
const timeBonus = 5;
const wrongPenalty = 5;
const answerRevealDuration = 2000;
const testAnswerRevealDuration = 850;
const recordsKey = "thaiSpellingGame.records.v1";

let selectedGrade = gradeSelect.value;
let playerName = "";
let currentSession = null;
let currentGameAttempt = null;
let phase = "pre";
let testQuestions = [];
let testIndex = 0;
let testScore = 0;
let preTestScore = 0;
let postTestScore = 0;
let gameQuestions = [];
let gameIndex = 0;
let gameCorrect = 0;
let gameAttempts = 0;
let timeLeft = startSeconds;
let survived = false;
let locked = false;
let timerId = null;
let advanceId = null;
let stream = null;
let handTracker = null;
let cameraFrameId = null;
let processingFrame = false;
let previousHandPoint = null;
let lastPunchAt = 0;

function showScreen(screen) {
  Object.values(screens).forEach((item) => item.classList.add("hidden"));
  screen.classList.remove("hidden");
}

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function createSessionId() {
  return globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function persistSession() {
  if (!currentSession) return false;
  const records = loadRecords();
  const existingIndex = records.findIndex((record) => record.id === currentSession.id);
  if (existingIndex < 0) records.push(currentSession);
  else records[existingIndex] = currentSession;

  try {
    localStorage.setItem(recordsKey, JSON.stringify(records));
    document.getElementById("recordStatus").textContent = "บันทึกคำตอบล่าสุดแล้ว";
    return true;
  } catch {
    document.getElementById("recordStatus").textContent = "บันทึกไม่ได้ โปรดออกจากโหมดส่วนตัวของเบราว์เซอร์";
    return false;
  }
}

function createAnswerLog(question, answer, questionNumber) {
  return {
    questionNumber: questionNumber + 1,
    choices: [...question.choices],
    selectedWord: question.choices[answer],
    correctWord: question.choices[question.correct],
    isCorrect: answer === question.correct,
    answeredAt: new Date().toISOString()
  };
}

function startPreTest() {
  stopCamera();
  clearInterval(timerId);
  timerId = null;
  clearTimeout(advanceId);
  selectedGrade = gradeSelect.value;
  phase = "pre";
  testScore = 0;
  preTestScore = 0;
  postTestScore = 0;
  gameAttempts = 0;
  testIndex = 0;
  testQuestions = shuffle(questionSets[selectedGrade]);
  currentGameAttempt = null;
  const startedAt = new Date().toISOString();
  currentSession = {
    id: createSessionId(),
    player: playerName,
    grade: selectedGrade,
    status: "in-progress",
    score: 0,
    correct: 0,
    preTest: 0,
    postTest: 0,
    survived: false,
    attempts: 0,
    answers: { preTest: [], postTest: [], gameAttempts: [] },
    startedAt,
    playedAt: startedAt
  };
  persistSession();
  document.getElementById("gradeBadge").textContent = selectedGrade;
  document.getElementById("testGrade").textContent = selectedGrade;
  document.getElementById("testPlayerName").textContent = playerName;
  document.getElementById("testPhaseLabel").textContent = "แบบทดสอบก่อนเล่น";
  document.getElementById("testEyebrow").textContent = "PRE-TEST";
  showScreen(screens.test);
  renderTestQuestion();
}

function renderTestQuestion() {
  const question = testQuestions[testIndex];
  const options = shuffle(question.choices.map((word, answer) => ({ word, answer })));

  document.getElementById("testQuestionNumber").textContent = `ข้อ ${testIndex + 1} จาก ${testQuestions.length}`;
  document.getElementById("testScore").textContent = String(testScore);
  document.getElementById("testProgressBar").style.width = `${(testIndex / testQuestions.length) * 100}%`;
  testButtons.forEach((button, index) => {
    button.textContent = options[index].word;
    button.dataset.testAnswer = String(options[index].answer);
    button.disabled = false;
    button.classList.remove("is-correct", "is-wrong");
  });
  locked = false;
}

function answerTest(answer) {
  if (locked || screens.test.classList.contains("hidden")) return;
  locked = true;
  const question = testQuestions[testIndex];
  const correct = answer === question.correct;
  const selectedButton = testButtons.find((button) => Number(button.dataset.testAnswer) === answer);
  const answerLog = createAnswerLog(question, answer, testIndex);
  if (phase === "pre") currentSession.answers.preTest.push(answerLog);
  else currentSession.answers.postTest.push(answerLog);
  testButtons.forEach((button) => { button.disabled = true; });
  testButtons.forEach((button) => {
    const isCorrect = Number(button.dataset.testAnswer) === question.correct;
    button.classList.toggle("is-correct", isCorrect);
    button.classList.toggle("is-wrong", button === selectedButton && !correct);
  });
  if (correct) testScore += 1;
  if (phase === "pre") currentSession.preTest = testScore;
  else currentSession.postTest = testScore;
  currentSession.currentPhase = phase === "pre" ? "pre-test" : "post-test";
  currentSession.lastActivityAt = answerLog.answeredAt;
  persistSession();
  document.getElementById("testScore").textContent = String(testScore);

  advanceId = window.setTimeout(() => {
    testIndex += 1;
    if (testIndex < testQuestions.length) {
      renderTestQuestion();
      return;
    }
    if (phase === "pre") {
      preTestScore = testScore;
      prepareGame();
    } else {
      postTestScore = testScore;
      showResults();
    }
  }, testAnswerRevealDuration);
}

function prepareGame() {
  clearInterval(timerId);
  timerId = null;
  gameAttempts += 1;
  currentGameAttempt = { attemptNumber: gameAttempts, answers: [], startedAt: new Date().toISOString() };
  currentSession.attempts = gameAttempts;
  currentSession.answers.gameAttempts.push(currentGameAttempt);
  currentSession.currentPhase = "game";
  currentSession.status = "in-progress";
  persistSession();
  gameQuestions = shuffle(questionSets[selectedGrade]);
  gameIndex = 0;
  gameCorrect = 0;
  timeLeft = startSeconds;
  locked = false;
  document.getElementById("gameGrade").textContent = selectedGrade;
  document.getElementById("gamePlayerName").textContent = playerName;
  document.getElementById("gameFeedback").textContent = "เล็งมือไปยังมุมของคำตอบ แล้วพุ่งหมัด";
  document.getElementById("cameraStatus").textContent = "ยังไม่ได้เปิดกล้อง";
  document.getElementById("cameraPlaceholder").hidden = false;
  document.getElementById("gameStartOverlay").classList.remove("hidden");
  document.getElementById("inputMode").textContent = "คลิกก้อนน้ำแข็งเพื่อเลือกแทนได้";
  showScreen(screens.game);
  renderGameQuestion();
  updateTimer();
}

function renderGameQuestion() {
  const question = gameQuestions[gameIndex];
  const options = shuffle(question.choices.map((word, answer) => ({ word, answer })));

  document.getElementById("questionCount").textContent = `ข้อ ${gameIndex + 1} / ${gameQuestions.length}`;
  updateQuestProgress(gameIndex);
  iceButtons.forEach((button, index) => {
    button.querySelector(".ice-word").textContent = options[index].word;
    button.dataset.answer = String(options[index].answer);
    button.disabled = false;
    button.classList.remove("is-correct", "is-wrong", "is-breaking");
  });
  document.getElementById("answerReveal").classList.remove("has-answer");
  document.getElementById("answerRevealTitle").textContent = "ต่อยคำที่คิดว่าถูก แล้วดูเฉลย!";
  document.getElementById("answerRevealWord").hidden = true;
  document.getElementById("answerRevealNote").hidden = true;
  locked = false;
}

function updateQuestProgress(completedCount) {
  const progress = document.getElementById("questProgress");
  progress.setAttribute("aria-valuenow", String(completedCount));
  progress.querySelectorAll(".quest-mark").forEach((mark, index) => {
    mark.classList.toggle("is-cleared", index < completedCount);
    mark.classList.toggle("is-current", index === completedCount && completedCount < gameQuestions.length);
  });
}

function beginRound() {
  document.getElementById("gameStartOverlay").classList.add("hidden");
  document.getElementById("gameFeedback").textContent = "กำลังเตรียมกล้อง...";
  timerId = window.setInterval(() => {
    timeLeft -= 1;
    updateTimer();
    if (timeLeft <= 0) finishGame(false);
  }, 1000);
  startCamera();
}

function chooseIce(button) {
  if (locked || screens.game.classList.contains("hidden") || !document.getElementById("gameStartOverlay").classList.contains("hidden")) return;
  locked = true;
  const question = gameQuestions[gameIndex];
  const correct = Number(button.dataset.answer) === question.correct;
  const correctWord = question.choices[question.correct];
  const answerLog = createAnswerLog(question, Number(button.dataset.answer), gameIndex);
  currentGameAttempt.answers.push(answerLog);
  iceButtons.forEach((iceButton) => {
    iceButton.disabled = true;
    const isCorrect = Number(iceButton.dataset.answer) === question.correct;
    iceButton.classList.toggle("is-correct", isCorrect);
    iceButton.classList.toggle("is-wrong", iceButton === button && !correct);
    if (iceButton === button) iceButton.classList.add("is-breaking");
  });

  document.getElementById("answerReveal").classList.add("has-answer", correct ? "answer-correct" : "answer-wrong");
  document.getElementById("answerReveal").classList.toggle("answer-correct", correct);
  document.getElementById("answerReveal").classList.toggle("answer-wrong", !correct);
  document.getElementById("answerRevealTitle").textContent = correct ? "เยี่ยมเลย! คำตอบถูกต้อง" : "มาเรียนรู้คำที่ถูกกัน";
  document.getElementById("answerRevealWord").textContent = correctWord;
  document.getElementById("answerRevealWord").hidden = false;
  document.getElementById("answerRevealNote").textContent = spellingNotes[correctWord] || `จำรูปสะกดของคำว่า “${correctWord}” ไว้สำหรับ Post-test`;
  document.getElementById("answerRevealNote").hidden = false;

  if (correct) {
    gameCorrect += 1;
    timeLeft = Math.min(maxSeconds, timeLeft + timeBonus);
    document.getElementById("gameFeedback").textContent = `ถูกต้อง! เพิ่มเวลา ${timeBonus} วินาที`;
  } else {
    timeLeft = Math.max(0, timeLeft - wrongPenalty);
    document.getElementById("gameFeedback").textContent = `ยังไม่ถูก ลดเวลา ${wrongPenalty} วินาที`;
  }
  currentSession.score = gameCorrect * 10;
  currentSession.correct = gameCorrect;
  currentSession.lastActivityAt = answerLog.answeredAt;
  currentSession.timeLeft = timeLeft;
  persistSession();
  updateTimer();

  if (timeLeft <= 0) {
    finishGame(false);
    return;
  }
  advanceId = window.setTimeout(() => {
    gameIndex += 1;
    if (gameIndex >= gameQuestions.length) {
      finishGame(true);
    } else {
      renderGameQuestion();
      document.getElementById("gameFeedback").textContent = "ต่อยก้อนน้ำแข็งที่มีคำสะกดถูก";
    }
  }, answerRevealDuration);
}

function updateTimer() {
  document.getElementById("timeText").textContent = String(timeLeft);
  document.getElementById("timeBar").style.width = `${(timeLeft / maxSeconds) * 100}%`;
  document.querySelector(".timer-track").setAttribute("aria-valuenow", String(timeLeft));
  document.querySelector(".timer-caption").classList.toggle("is-critical", timeLeft <= 10);
}

function finishGame(didSurvive) {
  clearInterval(timerId);
  timerId = null;
  clearTimeout(advanceId);
  survived = didSurvive;
  updateQuestProgress(didSurvive ? gameQuestions.length : gameIndex);
  stopCamera();
  if (!didSurvive) {
    currentSession.lastOutcome = "game-over";
    currentSession.timeLeft = 0;
    currentSession.lastActivityAt = new Date().toISOString();
    persistSession();
    document.getElementById("gameOverPlayer").textContent = playerName;
    document.getElementById("gameOverGrade").textContent = selectedGrade;
    document.getElementById("gameOverAttempt").textContent = String(gameAttempts);
    document.getElementById("gameOverCorrect").textContent = `${gameCorrect}/10`;
    document.getElementById("gameOverMessage").textContent = `${playerName}, ยังเหลืออีก ${10 - gameIndex} ข้อ ลองกลับไปช่วยกันอีกครั้งนะ`;
    showScreen(screens.gameOver);
    return;
  }

  currentSession.survived = true;
  currentSession.status = "awaiting-post-test";
  currentSession.currentPhase = "post-test";
  currentSession.gameCompletedAt = new Date().toISOString();
  persistSession();
  document.getElementById("testPhaseLabel").textContent = "รอดจากพายุแล้ว · แบบทดสอบหลังเล่น";
  document.getElementById("testEyebrow").textContent = "POST-TEST";
  document.getElementById("postReadyPlayer").textContent = playerName;
  document.getElementById("postReadyGrade").textContent = selectedGrade;
  document.getElementById("postReadyScore").textContent = `${preTestScore}/10`;
  document.getElementById("postReadyOutcome").textContent = "รอดชีวิต";
  phase = "post";
  testQuestions = shuffle(questionSets[selectedGrade]);
  testIndex = 0;
  testScore = 0;
  document.getElementById("testGrade").textContent = selectedGrade;
  showScreen(screens.postReady);
}

function beginPostTest() {
  document.getElementById("testPhaseLabel").textContent = "แบบทดสอบหลังเล่น";
  showScreen(screens.test);
  renderTestQuestion();
}

function showResults() {
  const difference = postTestScore - preTestScore;
  saveResult();
  document.getElementById("resultTitle").textContent = survived ? "คุณหนีรอดจากพายุแล้ว!" : "พายุหิมะพัดเวลาหมด";
  document.getElementById("resultMessage").textContent = `${playerName} · ระดับ ${selectedGrade} · ทำแบบทดสอบก่อนและหลังเล่นครบแล้ว`;
  document.getElementById("preScoreResult").textContent = `${preTestScore}/10`;
  document.getElementById("postScoreResult").textContent = `${postTestScore}/10`;
  document.getElementById("gameOutcome").textContent = survived ? "รอดชีวิต" : "GAME OVER";
  document.getElementById("gameCorrectResult").textContent = `${gameCorrect}/10`;
  document.getElementById("improvementResult").textContent = `${difference > 0 ? "+" : ""}${difference}`;
  renderRecords();
  renderLeaderboard();
  showScreen(screens.result);
}

function loadRecords() {
  try {
    const records = JSON.parse(localStorage.getItem(recordsKey) || "[]");
    return Array.isArray(records) ? records.filter((record) => record && typeof record.player === "string" && questionSets[record.grade]) : [];
  } catch {
    return [];
  }
}

function saveResult() {
  currentSession.score = gameCorrect * 10;
  currentSession.correct = gameCorrect;
  currentSession.preTest = preTestScore;
  currentSession.postTest = postTestScore;
  currentSession.survived = survived;
  currentSession.status = "completed";
  currentSession.currentPhase = "completed";
  currentSession.completedAt = new Date().toISOString();
  currentSession.playedAt = currentSession.completedAt;
  persistSession();
}

function renderRecords() {
  const list = document.getElementById("recordList");
  const records = loadRecords().sort((first, second) => new Date(second.lastActivityAt || second.playedAt) - new Date(first.lastActivityAt || first.playedAt));
  list.replaceChildren();

  if (records.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "records-empty";
    emptyMessage.textContent = "ยังไม่มีผลการเล่น มาเป็นนักสำรวจคนแรกกัน!";
    list.append(emptyMessage);
    return;
  }

  records.slice(0, 4).forEach((record, index) => {
    const row = document.createElement("button");
    row.className = "record-row";
    row.type = "button";
    row.setAttribute("aria-label", `ใช้ชื่อ ${record.player} ระดับ ${record.grade}`);

    const rank = document.createElement("span");
    rank.className = "record-rank";
    rank.textContent = String(index + 1).padStart(2, "0");

    const player = document.createElement("span");
    player.className = "record-player";
    const name = document.createElement("strong");
    name.textContent = record.player;
    const details = document.createElement("small");
    const answerCount = (record.answers?.preTest?.length || 0) + (record.answers?.postTest?.length || 0) + (record.answers?.gameAttempts || []).reduce((total, attempt) => total + attempt.answers.length, 0);
    details.textContent = `${record.grade} · ${answerCount} คำตอบ · ${formatRecordDate(record.lastActivityAt || record.playedAt)}`;
    player.append(name, details);

    const score = document.createElement("strong");
    score.className = "record-score";
    score.textContent = `${record.score}/100`;

    const outcome = document.createElement("span");
    const isCompleted = !record.status || record.status === "completed";
    outcome.className = `record-outcome${record.survived && isCompleted ? " is-survived" : ""}${isCompleted ? "" : " is-progress"}`;
    outcome.textContent = isCompleted ? (record.survived ? "รอด" : "หมดเวลา") : "กำลังเล่น";

    row.append(rank, player, score, outcome);
    row.addEventListener("click", () => {
      playerNameInput.value = record.player;
      gradeSelect.value = record.grade;
      document.getElementById("gradeBadge").textContent = record.grade;
      playerNameInput.focus();
    });
    list.append(row);
  });
}

function renderLeaderboard() {
  const records = loadRecords().filter((record) => !record.status || record.status === "completed");
  const groups = new Map();
  records.forEach((record) => {
    const player = record.player.trim();
    const key = `${player.toLocaleLowerCase("th-TH")}\u0000${record.grade}`;
    let group = groups.get(key);
    if (!group) {
      group = { player, grade: record.grade, rounds: 0, gamePoints: 0, preTotal: 0, postTotal: 0 };
      groups.set(key, group);
    }
    group.rounds += 1;
    group.gamePoints += Number(record.score) || 0;
    group.preTotal += Number(record.preTest) || 0;
    group.postTotal += Number(record.postTest) || 0;
  });

  const standings = [...groups.values()].sort((first, second) => second.gamePoints - first.gamePoints || second.postTotal - first.postTotal);
  const body = document.getElementById("leaderboardBody");
  body.replaceChildren();
  document.getElementById("boardPlayerCount").textContent = String(standings.length);
  document.getElementById("boardRoundCount").textContent = `${records.length} รอบการเล่น`;
  document.getElementById("boardEmpty").hidden = standings.length > 0;

  standings.forEach((group, index) => {
    const row = document.createElement("tr");
    const rank = document.createElement("td");
    rank.className = "board-rank";
    rank.textContent = String(index + 1).padStart(2, "0");

    const playerCell = document.createElement("td");
    playerCell.className = "board-player-cell";
    const name = document.createElement("strong");
    name.textContent = group.player;
    const grade = document.createElement("small");
    grade.textContent = group.grade;
    playerCell.append(name, grade);

    const rounds = document.createElement("td");
    rounds.textContent = String(group.rounds);
    const pre = document.createElement("td");
    pre.textContent = `${formatAverage(group.preTotal, group.rounds)}/10`;
    const post = document.createElement("td");
    post.textContent = `${formatAverage(group.postTotal, group.rounds)}/10`;
    const total = document.createElement("td");
    total.className = "board-total-score";
    total.textContent = `${group.gamePoints} แต้ม`;

    row.append(rank, playerCell, rounds, pre, post, total);
    body.append(row);
  });
}

function formatAverage(total, rounds) {
  return (total / rounds).toLocaleString("th-TH", { maximumFractionDigits: 1 });
}

function formatRecordDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "เล่นล่าสุด";
  return new Intl.DateTimeFormat("th-TH", { day: "numeric", month: "short" }).format(date);
}

async function startCamera() {
  const status = document.getElementById("cameraStatus");
  if (!navigator.mediaDevices?.getUserMedia) {
    status.textContent = "กล้องใช้ไม่ได้ในหน้านี้ · คลิกก้อนน้ำแข็งเพื่อตอบ";
    document.getElementById("inputMode").textContent = "โหมดสำรอง: คลิกก้อนน้ำแข็ง";
    return;
  }
  if (typeof Hands === "undefined") {
    status.textContent = "โหลดระบบ Hand Tracking ไม่สำเร็จ · คลิกก้อนน้ำแข็งเพื่อตอบ";
    document.getElementById("inputMode").textContent = "โหมดสำรอง: คลิกก้อนน้ำแข็ง";
    return;
  }

  status.textContent = "กำลังขออนุญาตใช้กล้อง...";
  try {
    const cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false });
    if (screens.game.classList.contains("hidden")) {
      cameraStream.getTracks().forEach((track) => track.stop());
      return;
    }
    stream = cameraStream;
    video.srcObject = stream;
    await video.play();
    if (screens.game.classList.contains("hidden")) {
      stopCamera();
      return;
    }
    cameraPlaceholder.hidden = true;
    handTracker = new Hands({ locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/${file}` });
    handTracker.setOptions({ maxNumHands: 1, modelComplexity: 1, minDetectionConfidence: 0.65, minTrackingConfidence: 0.55 });
    handTracker.onResults(handleHandResults);
    status.textContent = "กล้องทำงานแล้ว · ยกมือให้อยู่ในกรอบ";
    document.getElementById("inputMode").textContent = "กำหมัดแล้วพุ่งมือไปยังซ้าย/ขวาและบน/ล่าง";
    previousHandPoint = null;
    cameraLoop();
  } catch (error) {
    stopCamera();
    cameraPlaceholder.hidden = false;
    const message = error.name === "NotAllowedError" ? "ไม่ได้รับอนุญาตใช้กล้อง" : "เปิดกล้องไม่สำเร็จ";
    status.textContent = `${message} · คลิกก้อนน้ำแข็งเพื่อตอบ`;
    document.getElementById("inputMode").textContent = "โหมดสำรอง: คลิกก้อนน้ำแข็ง";
  }
}

function cameraLoop() {
  if (!stream) return;
  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && !processingFrame && handTracker) {
    processingFrame = true;
    handTracker.send({ image: video }).catch(() => {}).finally(() => { processingFrame = false; });
  }
  cameraFrameId = window.requestAnimationFrame(cameraLoop);
}

function handleHandResults(results) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
  canvasContext.clearRect(0, 0, width, height);
  const landmarks = results.multiHandLandmarks?.[0];
  if (!landmarks) {
    previousHandPoint = null;
    document.getElementById("cameraStatus").textContent = "ยังไม่พบมือ · วางมือในกรอบกล้อง";
    return;
  }

  const connections = [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [17, 18], [18, 19], [19, 20], [0, 17]];
  canvasContext.strokeStyle = "rgba(135, 239, 220, .9)";
  canvasContext.lineWidth = 3;
  connections.forEach(([from, to]) => {
    canvasContext.beginPath();
    canvasContext.moveTo(landmarks[from].x * width, landmarks[from].y * height);
    canvasContext.lineTo(landmarks[to].x * width, landmarks[to].y * height);
    canvasContext.stroke();
  });
  landmarks.forEach((point) => {
    canvasContext.beginPath();
    canvasContext.arc(point.x * width, point.y * height, 3, 0, Math.PI * 2);
    canvasContext.fillStyle = "#efffe3";
    canvasContext.fill();
  });

  const wrist = landmarks[0];
  const palm = landmarks[9];
  const point = { x: 1 - palm.x, y: palm.y };
  const speed = previousHandPoint ? Math.hypot(point.x - previousHandPoint.x, point.y - previousHandPoint.y) : 0;
  previousHandPoint = point;
  document.getElementById("cameraStatus").textContent = "พบมือแล้ว · กำหมัดแล้วพุ่งมือเพื่อต่อย";

  const curledFingers = [[8, 5], [12, 9], [16, 13], [20, 17]].filter(([tip, base]) => distance(landmarks[tip], wrist) < distance(landmarks[base], wrist) * 1.05).length;
  const now = performance.now();
  if (curledFingers >= 3 && speed > 0.075 && now - lastPunchAt > 850) {
    lastPunchAt = now;
    const side = point.x < 0.5 ? "left" : "right";
    const row = point.y < 0.5 ? "top" : "bottom";
    const target = `${side}-${row}`;
    const targetButton = iceButtons.find((button) => button.dataset.zone === target);
    if (targetButton && !targetButton.disabled) {
      document.getElementById("cameraStatus").textContent = `ต่อยก้อนน้ำแข็ง${side === "left" ? "ซ้าย" : "ขวา"}${row === "top" ? "บน" : "ล่าง"}!`;
      chooseIce(targetButton);
    }
  }
}

function distance(first, second) {
  return Math.hypot(first.x - second.x, first.y - second.y, (first.z || 0) - (second.z || 0));
}

function stopCamera() {
  if (cameraFrameId) window.cancelAnimationFrame(cameraFrameId);
  cameraFrameId = null;
  if (stream) stream.getTracks().forEach((track) => track.stop());
  stream = null;
  if (video.srcObject) video.srcObject = null;
  if (handTracker) handTracker.close();
  handTracker = null;
  processingFrame = false;
  previousHandPoint = null;
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
}

function returnHome() {
  clearInterval(timerId);
  timerId = null;
  clearTimeout(advanceId);
  stopCamera();
  renderRecords();
  renderLeaderboard();
  showScreen(screens.home);
}

document.getElementById("startForm").addEventListener("submit", (event) => {
  event.preventDefault();
  playerName = playerNameInput.value.trim();
  if (!playerName) {
    playerNameInput.setCustomValidity("ใส่ชื่อนักสำรวจก่อนเริ่มเกม");
    playerNameInput.reportValidity();
    return;
  }
  playerNameInput.setCustomValidity("");
  playerNameInput.value = playerName;
  startPreTest();
});
playerNameInput.addEventListener("input", () => playerNameInput.setCustomValidity(""));
document.getElementById("beginRoundButton").addEventListener("click", beginRound);
document.getElementById("retryGameButton").addEventListener("click", prepareGame);
document.getElementById("gameOverHomeButton").addEventListener("click", returnHome);
document.getElementById("startPostTestButton").addEventListener("click", beginPostTest);
document.getElementById("testHomeButton").addEventListener("click", returnHome);
document.getElementById("readyHomeButton").addEventListener("click", returnHome);
document.getElementById("backButton").addEventListener("click", returnHome);
document.getElementById("replayButton").addEventListener("click", startPreTest);
document.getElementById("openStatusBoardButton").addEventListener("click", () => {
  renderLeaderboard();
  showScreen(screens.statusBoard);
});
document.getElementById("boardHomeButton").addEventListener("click", returnHome);
gradeSelect.addEventListener("change", () => {
  document.getElementById("gradeBadge").textContent = gradeSelect.value;
});
testButtons.forEach((button) => button.addEventListener("click", () => answerTest(Number(button.dataset.testAnswer))));
iceButtons.forEach((button) => button.addEventListener("click", () => chooseIce(button)));
document.addEventListener("keydown", (event) => {
  if (!["1", "2", "3", "4"].includes(event.key)) return;
  if (!screens.test.classList.contains("hidden")) {
    const button = testButtons[Number(event.key) - 1];
    if (button) answerTest(Number(button.dataset.testAnswer));
  } else if (!screens.game.classList.contains("hidden") && document.getElementById("gameStartOverlay").classList.contains("hidden")) {
    const button = iceButtons[Number(event.key) - 1];
    if (button) chooseIce(button);
  }
});

renderRecords();
renderLeaderboard();
