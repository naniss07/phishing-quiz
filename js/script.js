// script.js
let currentQuestion = 0;
let score = 0;
let questions = [];

// DOM elementleri
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const phishingBtn = document.getElementById('phishing-btn');
const realBtn = document.getElementById('real-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const showExplanationBtn = document.getElementById('show-explanation-btn');
const questionImage = document.getElementById('question-image');
const feedback = document.getElementById('feedback');
const feedbackText = document.getElementById('feedback-text');
const explanation = document.getElementById('explanation');
const progress = document.getElementById('progress');
const scoreProgress = document.getElementById('score-progress');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const scoreEl = document.getElementById('score');
const totalEl = document.getElementById('total');

// Quiz'i başlat
function startQuiz() {
    // Tüm ekranları gizle
    startScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    
    // Değişkenleri sıfırla
    questions = [...questionsData].sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    score = 0;
    
    // Quiz ekranını göster
    quizScreen.classList.remove('hidden');
    
    // Toplam soru sayısını güncelle
    totalQuestionsEl.textContent = questions.length;
    
    // İlk soruyu göster
    showQuestion();
}

// Soruyu göster
function showQuestion() {
    const question = questions[currentQuestion];
    questionImage.src = question.image;
    currentQuestionEl.textContent = currentQuestion + 1;
    progress.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    feedback.classList.add('hidden');
    
    // Butonları sıfırla
    phishingBtn.disabled = false;
    realBtn.disabled = false;
    phishingBtn.classList.remove('selected', 'correct', 'incorrect');
    realBtn.classList.remove('selected', 'correct', 'incorrect');
}

// Cevabı kontrol et fonksiyonunda değişiklik
function checkAnswer(answer) {
    const question = questions[currentQuestion];
    const isCorrect = answer === question.correct;
    
    if (isCorrect) score++;
    
    // Butonları devre dışı bırak
    phishingBtn.disabled = true;
    realBtn.disabled = true;
    
    // Seçilen butonu işaretle
    const selectedBtn = answer === 'phishing' ? phishingBtn : realBtn;
    
    // Doğru cevap için yeşil, yanlış cevap için kırmızı
    if (isCorrect) {
        selectedBtn.style.backgroundColor = '#4caf50'; // yeşil
    } else {
        selectedBtn.style.backgroundColor = '#f44336'; // kırmızı
    }
    
    // Geri bildirimi göster
    feedback.classList.remove('hidden');
    feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    
    if (isCorrect) {
        feedbackText.textContent = '🎯 Doğru Cevap!';
    } else {
        feedbackText.textContent = `❌ Yanlış Cevap! Bu aslında bir ${question.correct === 'phishing' ? 'phishing' : 'gerçek'}.`;
    }
    
    explanation.textContent = question.explanation;
}

// Soruyu göster fonksiyonunda butonları sıfırla
function showQuestion() {
    const question = questions[currentQuestion];
    questionImage.src = question.image;
    currentQuestionEl.textContent = currentQuestion + 1;
    progress.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    feedback.classList.add('hidden');
    
    // Butonları sıfırla
    phishingBtn.disabled = false;
    realBtn.disabled = false;
    // Butonların rengini varsayılana döndür
    phishingBtn.style.backgroundColor = '#0066cc';
    realBtn.style.backgroundColor = '#0066cc';
}

// Sonuçları göster
function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    scoreEl.textContent = score;
    totalEl.textContent = questions.length;
    scoreProgress.style.width = `${(score / questions.length) * 100}%`;
}

// Event listeners
startBtn.addEventListener('click', startQuiz);
phishingBtn.addEventListener('click', () => checkAnswer('phishing'));
realBtn.addEventListener('click', () => checkAnswer('real'));
showExplanationBtn.addEventListener('click', () => {
    explanation.classList.toggle('hidden');
});
nextBtn.addEventListener('click', () => {
    if (currentQuestion + 1 < questions.length) {
        currentQuestion++;
        showQuestion();
    } else {
        showResults();
    }
});
restartBtn.addEventListener('click', startQuiz);