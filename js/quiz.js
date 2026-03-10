// On récupère le vocabulaire (On pourrait aussi l'importer de app.js)
const vocab = [
    { word: "However", def: "Cependant, toutefois" },
    { word: "Unless", def: "À moins que" },
    { word: "Therefore", def: "Donc, par conséquent" },
    { word: "Furthermore", def: "De plus, en outre" },
    { word: "Nevertheless", def: "Néanmoins, toutefois" },
    { word: "Despite", def: "Malgré (suivi d'un nom)" },
    { word: "In spite of", def: "En dépit de (suivi d'un nom)" },
    { word: "Whereas", def: "Tandis que, alors que" },
    { word: "Although", def: "Bien que (suivi d'une proposition)" },
    // ... Ajoute autant de mots que tu veux ici
];

let score = 0;
let currentCorrectWord = null;

const targetWordEl = document.getElementById('target-word');
const optionsContainer = document.getElementById('options-container');
const scoreEl = document.getElementById('score');
const feedbackEl = document.getElementById('feedback');

function getRandomWord() {
    return vocab[Math.floor(Math.random() * vocab.length)];
}

function startNewQuestion() {
    feedbackEl.textContent = "";
    optionsContainer.innerHTML = "";
    
    // 1. Choisir un mot au hasard
    currentCorrectWord = getRandomWord();
    targetWordEl.textContent = currentCorrectWord.word;

    // 2. Créer une liste de 4 options (la bonne + 3 fausses)
    let options = [currentCorrectWord.def];
    while (options.length < 4) {
        let randomDef = getRandomWord().def;
        if (!options.includes(randomDef)) {
            options.push(randomDef);
        }
    }

    // 3. Mélanger les options
    options.sort(() => Math.random() - 0.5);

    // 4. Afficher les boutons
    options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedDef) {
    if (selectedDef === currentCorrectWord.def) {
        score++;
        scoreEl.textContent = score;
        feedbackEl.style.color = "#4CAF50";
        feedbackEl.textContent = "Bravo ! ✨ 🐾";
        setTimeout(startNewQuestion, 1000);
    } else {
        feedbackEl.style.color = "#ff4d94";
        feedbackEl.textContent = `Oups ! La réponse était : ${currentCorrectWord.def}`;
        setTimeout(startNewQuestion, 2000);
    }
}

// Lancer le premier tour
startNewQuestion();