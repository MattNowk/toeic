// On récupère le vocabulaire (Pour l'instant on le copie, on verra comment l'importer plus tard)
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
    { word: "Efficiently", def: "Efficacement", ex: "The team handled the crisis efficiently." },
    { word: "In addition", def: "En plus", ex: "The report is accurate; in addition, it is easy to read." },
    { word: "On the other hand", def: "D'autre part", ex: "The car is cheap; on the other hand, it is not very reliable." },
    { word: "As well as", def: "Ainsi que", ex: "She speaks English as well as Spanish." },
    { word: "In contrast", def: "En revanche", ex: "Her first report was excellent; in contrast, the second was poor." },
    { word: "Wherever", def: "Où que", ex: "You can call me wherever you are." },
    { word: "Whenever", def: "Lorsque", ex: "Whenever I travel, I take many photos." },
    { word: "Even if", def: "Même si", ex: "Even if it rains, we will go out." },
    { word: "In case", def: "Au cas où", ex: "Take an umbrella in case it rains." },
    { word: "In fact", def: "En fait", ex: "He is, in fact, the best candidate." },
    { word: "For example", def: "Par exemple", ex: "Many companies offer flexible hours; for example, Google." },
    { word: "For instance", def: "Par exemple", ex: "You can improve your English; for instance, by watching movies." },
    { word: "Such as", def: "Tel que", ex: "There are many reasons, such as cost and time." },
    { word: "As a result", def: "En conséquence", ex: "Sales increased; as a result, the company hired more staff." },
    { word: "As a consequence", def: "En conséquence", ex: "He was late; as a consequence, he missed the meeting." },
    { word: "Thereby", def: "Ainsi, par là même", ex: "The new system reduced costs, thereby increasing profits." },
    { word: "Accordingly", def: "En conséquence, de ce fait", ex: "Our budget was cut; we must act accordingly." },
    { word: "Additionally", def: "En outre", ex: "The hotel offers free Wi‑Fi; additionally, breakfast is included." },
    { word: "Including", def: "Y compris", ex: "The package includes breakfast and Wi‑Fi." },
    { word: "Especially", def: "Surtout, particulièrement", ex: "I like all fruits, especially apples." },
    { word: "Particularly", def: "Particulièrement", ex: "The manager was particularly impressed." },
    { word: "Indeed", def: "En effet", ex: "The job is challenging; indeed, it is very demanding." },
    { word: "Certainly", def: "Certainement", ex: "This method is certainly effective." },
    { word: "Actually", def: "En réalité", ex: "I actually enjoyed the meeting." },
    { word: "Clearly", def: "Clairement", ex: "The instructions are clearly written." },
    { word: "Obviously", def: "Évidemment", ex: "It is obviously the best option." },
    { word: "Evidently", def: "Évidemment", ex: "Evidently, he didn't understand." },
    { word: "Apparently", def: "Apparemment", ex: "Apparently, the meeting has been canceled." },
    { word: "Reportedly", def: "Selon des rapports", ex: "He is reportedly the richest man in the country." },
    { word: "Seemingly", def: "Apparemment, apparemment", ex: "It was a seemingly impossible task." },
    { word: "Undoubtedly", def: "Sans aucun doute", ex: "She is undoubtedly the best candidate." },
    { word: "Nonetheless", def: "Néanmoins", ex: "The weather was bad; nonetheless, the event continued." },
    { word: "Yet", def: "Pourtant", ex: "He is young; yet he is very experienced." },
    { word: "Still", def: "Pourtant", ex: "The train is late; he is still waiting." },
    { word: "Subsequent to", def: "Après", ex: "Subsequent to the meeting, a decision was made." },
    { word: "Regularly", def: "Régulièrement", ex: "He exercises regularly." },
    { word: "Achieve", def: "Atteindre, accomplir", ex: "The team worked hard to achieve their sales targets." },
    { word: "Acquire", def: "Acquérir", ex: "The company plans to acquire a smaller competitor." },
    { word: "Agreement", def: "Accord, contrat", ex: "Both parties signed the agreement yesterday." },
    { word: "Allocate", def: "Allouer, attribuer", ex: "The manager allocated more budget to marketing." },
    { word: "Annual", def: "Annuel", ex: "The company published its annual report." },
    { word: "Apply", def: "Postuler / appliquer", ex: "She decided to apply for the position." },
    { word: "Approve", def: "Approuver", ex: "The director approved the proposal." },
    { word: "Arrange", def: "Organiser", ex: "I will arrange a meeting with the client." },
    { word: "Assist", def: "Aider, assister", ex: "The technician will assist you with the installation." },
    { word: "Available", def: "Disponible", ex: "The product is now available online." },
    { word: "Benefit", def: "Avantage, bénéfice", ex: "Employees receive several health benefits." },
    { word: "Budget", def: "Budget", ex: "The marketing budget was increased." },
    { word: "Candidate", def: "Candidat", ex: "The company interviewed several candidates." },
    { word: "Capacity", def: "Capacité", ex: "The factory operates at full capacity." },
    { word: "Client", def: "Client", ex: "We must respond quickly to our clients." },
    { word: "Colleague", def: "Collègue", ex: "I discussed the project with a colleague." },
    { word: "Conference", def: "Conférence", ex: "She will attend an international conference." },
    { word: "Confirm", def: "Confirmer", ex: "Please confirm your attendance by email." },
    { word: "Contract", def: "Contrat", ex: "They signed a three-year contract." },
    { word: "Customer", def: "Client (consommateur)", ex: "Customer satisfaction is very important." },
    { word: "Deadline", def: "Date limite", ex: "We must finish the report before the deadline." },
    { word: "Department", def: "Département / service", ex: "She works in the HR department." },
    { word: "Deliver", def: "Livrer", ex: "The supplier will deliver the goods tomorrow." },
    { word: "Demand", def: "Demande", ex: "There is high demand for this product." },
    { word: "Develop", def: "Développer", ex: "The company plans to develop new software." },
    { word: "Employee", def: "Employé", ex: "The company has more than 500 employees." },
    { word: "Employer", def: "Employeur", ex: "The employer offered a salary increase." },
    { word: "Equipment", def: "Équipement", ex: "The office purchased new equipment." },
    { word: "Establish", def: "Établir, fonder", ex: "The firm established a new branch in Paris." },
    { word: "Evaluate", def: "Évaluer", ex: "The manager will evaluate your performance." },
    { word: "Expand", def: "Étendre, développer", ex: "The company plans to expand overseas." },
    { word: "Experience", def: "Expérience", ex: "He has five years of experience in marketing." },
    { word: "Facility", def: "Installation, infrastructure", ex: "The company opened a new manufacturing facility." },
    { word: "Hire", def: "Embaucher", ex: "The company plans to hire new engineers." },
    { word: "Increase", def: "Augmenter", ex: "Sales increased by 20% last year." },
    { word: "Launch", def: "Lancer (produit)", ex: "The company will launch a new product." },
    { word: "Manage", def: "Gérer", ex: "She manages a team of 10 people." },
    { word: "Meeting", def: "Réunion", ex: "We have a meeting at 10 a.m." },
    { word: "Negotiate", def: "Négocier", ex: "They negotiated a better price." },
    { word: "Opportunity", def: "Opportunité", ex: "This job is a great opportunity." },
    { word: "Participate", def: "Participer", ex: "All employees must participate in the training." },
    { word: "Performance", def: "Performance", ex: "Her performance was excellent." },
    { word: "Profit", def: "Profit, bénéfice", ex: "The company made a large profit." },
    { word: "Purchase", def: "Acheter", ex: "The company purchased new computers." },
    { word: "Reduce", def: "Réduire", ex: "They want to reduce operational costs." },
    { word: "Requirement", def: "Exigence", ex: "Experience is a requirement for this job." },
    { word: "Schedule", def: "Planning, programme", ex: "The meeting is scheduled for Monday." },
    { word: "Shipment", def: "Expédition", ex: "The shipment will arrive tomorrow." },
    { word: "Strategy", def: "Stratégie", ex: "The company adopted a new marketing strategy." },
    { word: "Supplier", def: "Fournisseur", ex: "We changed our main supplier." },
    { word: "Survey", def: "Sondage", ex: "The company conducted a customer survey." },
    { word: "Target", def: "Objectif", ex: "The team achieved its sales targets." },
    { word: "Training", def: "Formation", ex: "Employees must complete safety training." },
    { word: "Transaction", def: "Transaction", ex: "The bank recorded the transaction." },
    { word: "Update", def: "Mettre à jour", ex: "Please update the document." },
    { word: "Warehouse", def: "Entrepôt", ex: "The products are stored in a warehouse." },
    { word: "Workforce", def: "Main-d'œuvre, personnel", ex: "The company expanded its workforce." },
    { word: "Revenue", def: "Revenu, chiffre d'affaires", ex: "The company's revenue increased this year." },
    { word: "Expense", def: "Dépense", ex: "Travel expenses will be reimbursed." },
    { word: "Invoice", def: "Facture", ex: "Please send the invoice before the end of the month." },
    { word: "Receipt", def: "Reçu", ex: "Keep the receipt for reimbursement." },
    { word: "Refund", def: "Remboursement", ex: "Customers can request a refund." },
    { word: "Discount", def: "Réduction", ex: "We offer a 10% discount for members." },
    { word: "Payment", def: "Paiement", ex: "Payment must be made within 30 days." },
    { word: "Deposit", def: "Acompte", ex: "A deposit is required to confirm the reservation." },
    { word: "Balance", def: "Solde", ex: "The remaining balance must be paid." },
    { word: "Branch", def: "Succursale", ex: "The bank opened a new branch downtown." },
    { word: "Headquarters", def: "Siège social", ex: "The company's headquarters are in London." },
    { word: "Subsidiary", def: "Filiale", ex: "This company is a subsidiary of a larger group." },
    { word: "Partnership", def: "Partenariat", ex: "The two firms formed a partnership." },
    { word: "Promotion", def: "Promotion (poste)", ex: "She received a promotion last year." },
    { word: "Salary", def: "Salaire", ex: "He negotiated a higher salary." },
    { word: "Wage", def: "Salaire (horaire)", ex: "Minimum wage has increased." },
    { word: "Bonus", def: "Prime", ex: "Employees receive a bonus at the end of the year." },
    { word: "Application", def: "Candidature", ex: "She submitted her job application." },
    { word: "Resume", def: "CV", ex: "Please attach your resume." },
    { word: "Interview", def: "Entretien", ex: "He was invited to a job interview." },
    { word: "Qualification", def: "Qualification", ex: "You must have the proper qualifications." },
    { word: "Register", def: "S'inscrire", ex: "Participants must register online." },
    { word: "Reservation", def: "Réservation", ex: "I made a reservation for tonight." },
    { word: "Cancel", def: "Annuler", ex: "You can cancel your order anytime." },
    { word: "Postpone", def: "Reporter", ex: "The meeting was postponed." },
    { word: "Complaint", def: "Plainte", ex: "The company received several complaints." },
    { word: "Feedback", def: "Retour, avis", ex: "Customer feedback helps improve services." },
    { word: "Support", def: "Support, assistance", ex: "Technical support is available 24/7." },
    { word: "Deliverable", def: "Livrable", ex: "The deliverables must be submitted by Friday." },
    { word: "Proposal", def: "Proposition", ex: "The manager reviewed the proposal." },
    { word: "Approval", def: "Approbation", ex: "The project needs final approval." },
    { word: "Improve", def: "Améliorer", ex: "The company wants to improve productivity." },
    { word: "Maintain", def: "Maintenir", ex: "It is important to maintain quality." },
    { word: "Replace", def: "Remplacer", ex: "The machine will be replaced." },
    { word: "Repair", def: "Réparer", ex: "The technician repaired the printer." },
    { word: "Reliable", def: "Fiable", ex: "This supplier is very reliable." },
    { word: "Efficient", def: "Efficace", ex: "She is an efficient worker." },
    { word: "Affordable", def: "Abordable", ex: "The product is affordable." },
    { word: "Competitive", def: "Compétitif", ex: "The company offers competitive prices." },
    { word: "Delay", def: "Retard", ex: "The flight was delayed." },
    { word: "Request", def: "Demande", ex: "We received your request." },
    { word: "Submit", def: "Soumettre", ex: "Please submit the report." },
    { word: "Provide", def: "Fournir", ex: "The company provides free training." },
    { word: "Require", def: "Exiger", ex: "This job requires experience." },
    { word: "Ensure", def: "Assurer", ex: "Please ensure the door is locked." },
    { word: "Handle", def: "Gérer", ex: "She handles customer complaints." },
    { word: "Attend", def: "Assister", ex: "Many employees attended the seminar." },
    { word: "Prepare", def: "Préparer", ex: "Please prepare the documents." }
];

let score = 0;
let currentCorrectWord = null;

// Éléments du DOM
const targetWordEl = document.getElementById('target-word');
const optionsContainer = document.getElementById('options-container');
const scoreEl = document.getElementById('score');
const feedbackEl = document.getElementById('feedback');

// Fonction pour choisir un mot au hasard
function getRandomWord() {
    return vocab[Math.floor(Math.random() * vocab.length)];
}

// Fonction pour démarrer une nouvelle question
function startNewQuestion() {
    // Nettoyage
    feedbackEl.textContent = "";
    optionsContainer.innerHTML = "";
    
    // 1. Choisir le mot cible
    currentCorrectWord = getRandomWord();
    targetWordEl.textContent = currentCorrectWord.word;

    // 2. Créer une liste de 4 options (la bonne + 3 fausses au hasard)
    let options = [currentCorrectWord.def];
    while (options.length < 4) {
        let randomDef = getRandomWord().def;
        // Éviter les doublons de réponses
        if (!options.includes(randomDef)) {
            options.push(randomDef);
        }
    }

    // 3. Mélanger les options ( Fisher-Yates shuffle pour être parfaitement aléatoire )
    options.sort(() => Math.random() - 0.5);

    // 4. Créer et afficher les boutons
// 4. Créer et afficher les boutons
    options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        // Ajouter l'événement de clic en passant le bouton en paramètre
        btn.onclick = () => checkAnswer(option, btn); 
        optionsContainer.appendChild(btn);
    });
}

// Fonction pour vérifier la réponse
function checkAnswer(selectedDef, clickedButton) {
    const buttons = document.querySelectorAll('.option-btn');
    
    // Désactiver tous les boutons pour éviter le spam
    buttons.forEach(btn => btn.disabled = true);

    if (selectedDef === currentCorrectWord.def) {
        // --- BONNE RÉPONSE ---
        clickedButton.style.background = "#4CAF50"; // Vert
        clickedButton.style.color = "white";
        clickedButton.style.borderColor = "#388E3C";
        clickedButton.style.boxShadow = "0 4px 0px #2E7D32";
        
        score++;
        document.getElementById('score').textContent = `${score} 🐾`;
        document.getElementById('quiz-cat').textContent = "😻";
        
        setTimeout(() => {
            document.getElementById('quiz-cat').textContent = "🎮";
            startNewQuestion();
        }, 1000);
        
    } else {
        // --- MAUVAISE RÉPONSE ---
        clickedButton.style.background = "#ff4d94"; // Rouge/Rose flash
        clickedButton.style.color = "white";
        clickedButton.style.borderColor = "#d81b60";
        clickedButton.style.boxShadow = "0 4px 0px #ad1457";
        
        document.getElementById('quiz-cat').textContent = "😿";
        
        // On montre aussi la bonne réponse en vert discrètement
        buttons.forEach(btn => {
            if (btn.textContent === currentCorrectWord.def) {
                btn.style.color = "#4CAF50";
                btn.style.borderColor = "#4CAF50";
            }
        });

        setTimeout(() => {
            document.getElementById('quiz-cat').textContent = "🎮";
            startNewQuestion();
        }, 2000);
    }
}

// Lancer le premier tour quand la page est chargée
window.onload = startNewQuestion;