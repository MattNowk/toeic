const vocab = [
    { word: "However", def: "Cependant, toutefois", ex: "He studied hard; however, he failed the test." },
    { word: "Unless", def: "À moins que", ex: "You won't pass unless you study more." },
    { word: "Therefore", def: "Donc, par conséquent", ex: "I think, therefore I am." },
    { word: "Furthermore", def: "De plus, en outre", ex: "The house is beautiful; furthermore, it's in a great location." },
    { word: "Nevertheless", def: "Néanmoins, toutefois", ex: "It was raining; nevertheless, we went for a walk." },
    { word: "Despite", def: "Malgré (suivi d'un nom)", ex: "Despite the rain, the match continued." },
    { word: "In spite of", def: "En dépit de (suivi d'un nom)", ex: "He succeeded in spite of the difficulties." },
    { word: "Whereas", def: "Tandis que, alors que", ex: "He loves cats, whereas I prefer dogs." },
    { word: "Although", def: "Bien que (suivi d'une proposition)", ex: "Although it was cold, she didn't wear a coat." },
    { word: "Even though", def: "Même si, bien que", ex: "Even though I was tired, I finished the project." },
    { word: "Meanwhile", def: "Pendant ce temps", ex: "I was cooking; meanwhile, he was setting the table." },
    { word: "Otherwise", def: "Sinon, autrement", ex: "Hurry up, otherwise you'll miss the train." },
    { word: "Consequently", def: "Par conséquent", ex: "The company went bankrupt; consequently, many lost their jobs." },
    { word: "Hence", def: "D'où, par conséquent", ex: "He is a vegetarian; hence, he doesn't eat meat." },
    { word: "Thus", def: "Ainsi, par conséquent", ex: "He didn't study; thus, he failed." },
    { word: "Moreover", def: "De plus", ex: "The car is too expensive; moreover, it's too small." },
    { word: "Besides", def: "D'ailleurs, en outre", ex: "I don't want to go. Besides, I'm too tired." },
    { word: "Provided that", def: "À condition que", ex: "You can borrow the car provided that you bring it back tomorrow." },
    { word: "As long as", def: "Tant que", ex: "You can stay here as long as you keep quiet." },
    { word: "So that", def: "De sorte que, pour que", ex: "Speak louder so that everyone can hear you." },
    { word: "In order to", def: "Afin de", ex: "She exercises daily in order to stay healthy." },
    { word: "Due to", def: "En raison de", ex: "The flight was canceled due to bad weather." },
    { word: "Owing to", def: "À cause de", ex: "Owing to his illness, he couldn't attend the meeting." },
    { word: "Because of", def: "À cause de", ex: "We stayed indoors because of the storm." },
    { word: "Since", def: "Puisque / Depuis", ex: "Since you are here, help me with this." },
    { word: "Whether", def: "Si (alternative)", ex: "I don't know whether to buy the red one or the blue one." },
    { word: "Rather than", def: "Plutôt que", ex: "I'd prefer to walk rather than drive." },
    { word: "Instead of", def: "Au lieu de", ex: "He played video games instead of studying." },
    { word: "Regarding", def: "Concernant", ex: "I have a question regarding your proposal." },
    { word: "Concerning", def: "Concernant", ex: "There are new rules concerning employee safety." },
    { word: "According to", def: "Selon, d'après", ex: "According to the weather forecast, it will rain." },
    { word: "Prior to", def: "Avant (formel)", ex: "Please arrive 15 minutes prior to the meeting." },
    { word: "Regardless of", def: "Indépendamment de", ex: "We will proceed regardless of the cost." },
    { word: "In addition to", def: "En plus de", ex: "In addition to English, she speaks French." },
    { word: "Apart from", def: "À part", ex: "Apart from a few typos, the report is excellent." },
    { word: "Namely", def: "À savoir", ex: "Only two students failed, namely John and Sarah." },
    { word: "Notably", def: "Notamment", ex: "The garden has many flowers, notably roses." },
    { word: "Mainly", def: "Principalement", ex: "The audience consisted mainly of teenagers." },
    { word: "Chiefly", def: "Surtout, principalement", ex: "His success was chiefly due to hard work." },
    { word: "Primarily", def: "Essentiellement", ex: "The course is primarily designed for beginners." },
    { word: "Currently", def: "Actuellement", ex: "The item is currently out of stock." },
    { word: "Eventually", def: "Finalement, tôt ou tard", ex: "Keep trying, and you'll eventually succeed." },
    { word: "Previously", def: "Précédemment", ex: "I previously worked for a bank." },
    { word: "Shortly", def: "Bientôt, sous peu", ex: "The manager will be with you shortly." },
    { word: "Subsequently", def: "Par la suite", ex: "He was arrested and subsequently convicted." },
    { word: "Initially", def: "Initialement", ex: "Initially, I didn't like the idea." },
    { word: "Seldom", def: "Rarement", ex: "He seldom goes out on weekdays." },
    { word: "Hardly", def: "À peine", ex: "I could hardly hear her over the noise." },
    { word: "Barely", def: "De justesse, à peine", ex: "We barely caught the train." },
    { word: "Scarcely", def: "À peine, presque pas", ex: "I had scarcely sat down when the phone rang." },
    { word: "Frequently", def: "Fréquemment", ex: "Buses run frequently in this city." },
    { word: "Occasionally", def: "De temps en temps", ex: "We occasionally meet for coffee." },
    { word: "Consistently", def: "Régulièrement, de manière constante", ex: "She consistently performs well." },
    { word: "Significantly", def: "De manière significative", ex: "Sales increased significantly this quarter." },
    { word: "Substantially", def: "Substantiellement", ex: "The price has dropped substantially." },
    { word: "Considerably", def: "Considérablement", ex: "It's considerably colder today." },
    { word: "Drastically", def: "Drastiquement", ex: "The budget was drastically cut." },
    { word: "Sharply", def: "Brusquement, fortement", ex: "Profits fell sharply last month." },
    { word: "Slightly", def: "Légèrement", ex: "I am slightly confused." },
    { word: "Gradually", def: "Progressivement", ex: "The weather is gradually improving." },
    { word: "Adequately", def: "Adéquatement", ex: "Make sure you are adequately prepared." },
    { word: "Thoroughly", def: "Minutieusement, complètement", ex: "I thoroughly enjoyed the book." },
    { word: "Properly", def: "Correctement", ex: "The machine isn't working properly." },
    { word: "Efficiently", def: "Efficacement", ex: "The team handled the crisis efficiently." }
];

const container = document.getElementById('vocab-container');
const searchInput = document.getElementById('searchInput');

const cats = ['😺', '😸', '😻', '😽', '😼', '🐾', '🐈', '🐈‍⬛', '💖', '💕'];

function renderCards(words) {
    container.innerHTML = '';
    words.forEach(item => {
        const randomCat = cats[Math.floor(Math.random() * cats.length)];
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="cat-icon">${randomCat}</div>
            <div class="word">${item.word}</div>
            <div class="def">${item.def}</div>
            <div class="example">" ${item.ex} "</div>
        `;
        container.appendChild(card);
    });
}

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = vocab.filter(item => 
        item.word.toLowerCase().includes(term) || 
        item.def.toLowerCase().includes(term)
    );
    renderCards(filtered);
});