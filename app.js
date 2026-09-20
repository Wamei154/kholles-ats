let currentSubject = null;
let currentFolderWeek = null;
let currentDeckId = null;
let currentCardIndex = 0;
let isFlipped = false;
let studyQueue = [];

// --- SYSTÈME DE SAUVEGARDE ET DE STATISTIQUES ---
let cardStats = JSON.parse(localStorage.getItem('khollapp_stats')) || {};

function saveProgress() {
    const progress = {};
    for (const [id, deck] of Object.entries(decks)) {
        if (deck.known.size > 0) {
            progress[id] = Array.from(deck.known);
        }
    }
    localStorage.setItem('khollapp_progress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = JSON.parse(localStorage.getItem('khollapp_progress'));
    if (saved) {
        for (const [id, knownArray] of Object.entries(saved)) {
            if (decks[id]) {
                decks[id].known = new Set(knownArray);
            }
        }
    }
}

function getCardScore(deckId, cardId) {
    if (!cardStats[deckId]) return 0;
    return cardStats[deckId][cardId] || 0;
}

function updateCardScore(deckId, cardId, delta) {
    if (!cardStats[deckId]) cardStats[deckId] = {};
    let current = cardStats[deckId][cardId] || 0;
    cardStats[deckId][cardId] = Math.max(0, current + delta);
    localStorage.setItem('khollapp_stats', JSON.stringify(cardStats));
}

// DOM Elements
const mainMenuEl = document.getElementById('main-menu');
const deckSelectionEl = document.getElementById('deck-selection');
const colloscopeAreaEl = document.getElementById('colloscope-area');
const scheduleResultsEl = document.getElementById('schedule-results');
const flashcardAreaEl = document.getElementById('flashcard-area');
const endScreenEl = document.getElementById('end-screen');
const backBtn = document.getElementById('back-btn');
const progressContainer = document.getElementById('progress-container');

function initApp() {
    loadProgress();
    
    // Auto-detect group from previous visit
    const savedGroup = localStorage.getItem('khollapp_group');
    if (savedGroup) {
        document.getElementById('group-select').value = savedGroup;
    }

    // Auto-detect current week
    const currentWeekIndex = getCurrentWeekIndex();
    document.getElementById('week-select').value = currentWeekIndex;
    
    renderRootFolders();
    renderSchedule(); 
}

function getCurrentWeekIndex() {
    const now = new Date();
    const startStr = "2026-09-01"; 
    
    if (now < new Date(startStr)) return "0";
    
    const weekDates = [
        "2026-09-01", "2026-09-07", "2026-09-14", "2026-09-21", "2026-09-28",
        "2026-10-05", "2026-10-12", "2026-11-02", "2026-11-09", "2026-11-16",
        "2026-11-23", "2026-11-30", "2026-12-07", "2026-12-14", "2027-01-04",
        "2027-01-11", "2027-01-18", "2027-01-25", "2027-02-01", "2027-02-08",
        "2027-02-15", "2027-03-08", "2027-03-15", "2027-03-22", "2027-03-29",
        "2027-04-05", "2027-04-12"
    ];
    
    let currentIndex = 0;
    // La boucle cherche la semaine passée la plus récente.
    for (let i = 0; i < weekDates.length; i++) {
        if (now >= new Date(weekDates[i])) {
            currentIndex = i;
        } else {
            break; // Dès qu'on trouve une date dans le futur, on arrête la boucle.
        }
    }
    return currentIndex.toString();
}

function showMainMenu() {
    currentDeckId = null;
    mainMenuEl.classList.remove('hidden');
    colloscopeAreaEl.classList.add('hidden');
    document.getElementById('edt-area').classList.add('hidden');
    document.getElementById('deck-summary-area').classList.add('hidden');
    flashcardAreaEl.classList.add('hidden');
    endScreenEl.classList.add('hidden');
    backBtn.classList.add('hidden');
    progressContainer.classList.add('hidden');
    
    if (currentFolderWeek) {
        renderWeek(currentSubject, currentFolderWeek);
    } else if (currentSubject) {
        renderFolder(currentSubject);
    } else {
        renderRootFolders();
    }
}

function renderRootFolders() {
    currentSubject = null;
    currentFolderWeek = null;
    document.getElementById('nav-breadcrumbs').classList.add('hidden');
    document.getElementById('colloscope-btn-container').classList.remove('hidden');
    document.getElementById('library-title').innerHTML = '<i class="fa-solid fa-folder-tree text-emerald-400 mr-3"></i> Bibliothèque de Flashcards';
    
    deckSelectionEl.innerHTML = '';
    for (const [id, subject] of Object.entries(library)) {
        let totalDecks = subject.rootDecks.length;
        Object.values(subject.weeks).forEach(w => totalDecks += w.decks.length);
        
        deckSelectionEl.innerHTML += `
            <div onclick="renderFolder('${id}')" class="bg-slate-800 border border-slate-700 hover:border-slate-500 rounded-2xl p-6 cursor-pointer transition-all hover:scale-[1.03] hover:shadow-xl group relative overflow-hidden flex flex-col h-full items-center text-center">
                <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${subject.bgGradient} opacity-20 rounded-bl-full transition-transform group-hover:scale-110"></div>
                <div class="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-700 shadow-inner mb-4 z-10">
                    <i class="fa-solid ${subject.icon} ${subject.color} text-3xl"></i>
                </div>
                <h2 class="text-white font-semibold text-xl leading-tight group-hover:text-white transition-colors z-10">${subject.title}</h2>
                <p class="text-slate-400 text-sm mt-2 z-10">${totalDecks} paquet(s) de révision</p>
            </div>
        `;
    }
}

function renderFolder(subjectId) {
    currentSubject = subjectId;
    currentFolderWeek = null;
    const subject = library[subjectId];
    
    document.getElementById('nav-breadcrumbs').classList.remove('hidden');
    document.getElementById('breadcrumb-subject').classList.add('hidden');
    document.getElementById('colloscope-btn-container').classList.add('hidden');
    document.getElementById('library-title').innerHTML = `<i class="fa-solid ${subject.icon} ${subject.color} mr-3"></i> Dossier : ${subject.title}`;
    
    deckSelectionEl.innerHTML = '';

    if (subject.rootDecks.length > 0) {
        subject.rootDecks.forEach(deckId => {
            deckSelectionEl.innerHTML += createDeckHTML(deckId, true);
        });
    }

    const weekKeys = Object.keys(subject.weeks);
    if (weekKeys.length > 0) {
        weekKeys.forEach(weekId => {
            const weekData = subject.weeks[weekId];
            deckSelectionEl.innerHTML += `
                <div onclick="renderWeek('${subjectId}', '${weekId}')" class="bg-slate-800/80 border border-slate-700 hover:border-slate-500 rounded-2xl p-6 cursor-pointer transition-all hover:scale-[1.03] hover:shadow-xl group relative overflow-hidden flex flex-col h-full justify-center items-center">
                    <div class="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center mb-3">
                        <i class="fa-regular fa-calendar-check text-slate-300 text-xl group-hover:text-blue-400 transition-colors"></i>
                    </div>
                    <h3 class="text-white font-semibold text-lg text-center">${weekData.title}</h3>
                    <p class="text-slate-400 text-sm text-center mt-1 flex items-center"><i class="fa-solid fa-layer-group mr-1.5 text-xs"></i> ${weekData.decks.length} paquet(s)</p>
                </div>
            `;
        });
    } else if (subject.rootDecks.length === 0) {
        deckSelectionEl.innerHTML = `<div class="col-span-full text-center text-slate-500 py-8 italic">Aucun paquet disponible pour le moment dans ce dossier.</div>`;
    }
}

function renderWeek(subjectId, weekId) {
    currentSubject = subjectId;
    currentFolderWeek = weekId;
    const subject = library[subjectId];
    const week = subject.weeks[weekId];
    
    document.getElementById('breadcrumb-subject').classList.remove('hidden');
    document.getElementById('breadcrumb-subject-text').innerText = subject.title;
    document.getElementById('library-title').innerHTML = `<i class="fa-regular fa-calendar-check text-slate-400 mr-3"></i> ${week.title}`;
    
    deckSelectionEl.innerHTML = '';
    week.decks.forEach(deckId => {
        deckSelectionEl.innerHTML += createDeckHTML(deckId, false);
    });
}

function createDeckHTML(deckId, isRoot) {
    const deck = decks[deckId];
    const total = deck.cards.length;
    const known = deck.known.size;
    const progress = total > 0 ? Math.round((known / total) * 100) : 0;
    const rootBadge = isRoot ? `<div class="absolute top-3 left-3 bg-indigo-900/60 border border-indigo-500/30 text-indigo-300 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded shadow-sm z-10"><i class="fa-solid fa-thumbtack mr-1"></i> Transversal</div>` : '';
    const summaryBadge = deck.summary ? `<div class="absolute top-3 right-3 bg-blue-900/60 border border-blue-500/30 text-blue-300 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded shadow-sm z-10"><i class="fa-solid fa-book-open mr-1"></i> Résumé</div>` : '';

    return `
        <div onclick="openDeck('${deckId}')" class="bg-slate-800 border border-slate-700 hover:border-slate-500 rounded-2xl p-6 cursor-pointer transition-all hover:scale-[1.03] hover:shadow-xl group relative overflow-hidden flex flex-col h-full">
            ${rootBadge}
            ${summaryBadge}
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${deck.bgGradient} opacity-10 rounded-bl-full transition-transform group-hover:scale-110"></div>
            <div class="flex items-center gap-4 mb-4 mt-1">
                <div class="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-700 shadow-inner">
                    <i class="fa-solid ${deck.icon} ${deck.color} text-xl"></i>
                </div>
                <div>
                    <h3 class="text-slate-400 text-xs font-bold uppercase tracking-wider">${deck.subject}</h3>
                </div>
            </div>
            <h2 class="text-white font-semibold text-lg leading-tight mb-6 flex-grow group-hover:text-blue-300 transition-colors">${deck.title}</h2>
            
            <div class="mt-auto z-10">
                <div class="flex justify-between text-xs text-slate-400 mb-2">
                    <span>Progression</span>
                    <span>${progress}% (${known}/${total})</span>
                </div>
                <div class="w-full bg-slate-900 rounded-full h-2">
                    <div class="bg-gradient-to-r ${deck.bgGradient} h-2 rounded-full transition-all duration-300" style="width: ${progress}%"></div>
                </div>
            </div>
        </div>
    `;
}

function showColloscope() {
    mainMenuEl.classList.add('hidden');
    colloscopeAreaEl.classList.remove('hidden');
    backBtn.classList.remove('hidden');
    renderSchedule();
}

function showEDT() {
    mainMenuEl.classList.add('hidden');
    document.getElementById('edt-area').classList.remove('hidden');
    backBtn.classList.remove('hidden');
}

function toggleEdtZoom() {
    const lightbox = document.getElementById('edt-lightbox');
    const isHidden = lightbox.classList.contains('hidden');
    lightbox.classList.toggle('hidden', !isHidden);
    lightbox.classList.toggle('flex', isHidden);
}

function renderSchedule() {
    const groupSelect = document.getElementById('group-select');
    const weekSelect = document.getElementById('week-select');
    
    if (!groupSelect || !weekSelect) return;
    
    localStorage.setItem('khollapp_group', groupSelect.value);

    scheduleResultsEl.innerHTML = '';
    
    const agendaBanner = document.getElementById('agenda-banner');
    const agendaInfo = agendaData[weekSelect.value];
    
    if (agendaInfo && (agendaInfo.ds || agendaInfo.obs)) {
        let content = "";
        if (agendaInfo.ds) {
            // "Jusqu'au" a été supprimé ici :
            content += `<div class="text-blue-400"><i class="fa-solid fa-file-pen mr-2"></i> Devoir (${agendaInfo.date}) : <span class="text-white">${agendaInfo.ds}</span></div>`;
        }
        if (agendaInfo.obs) {
            content += `<div class="text-yellow-400 text-sm mt-1"><i class="fa-solid fa-circle-exclamation mr-1"></i> ${agendaInfo.obs}</div>`;
        }
        
        agendaBanner.innerHTML = content;
        agendaBanner.className = "mb-6 p-4 rounded-xl border font-semibold text-center flex flex-col items-center justify-center gap-1 bg-blue-900/20 border-blue-500/30";
        if(agendaInfo.obs && !agendaInfo.ds) {
             agendaBanner.className = "mb-6 p-4 rounded-xl border font-semibold text-center flex flex-col items-center justify-center gap-1 bg-yellow-900/20 border-yellow-500/30";
        }
        agendaBanner.classList.remove('hidden');
    } else {
        agendaBanner.classList.add('hidden');
    }
    
    let foundColles = false;

    colloscopeData.forEach(colle => {
        const currentGroupData = colle.groups[weekSelect.value];
        
        if (currentGroupData && currentGroupData !== "-") {
            const groupsArray = currentGroupData.toString().split(',').map(s => s.trim());
            
            let isMatch = false;
            let specialNote = "";

            groupsArray.forEach(g => {
                if (g === groupSelect.value) {
                    isMatch = true;
                } else if (g.includes('.')) {
                    const parts = g.split('.');
                    if (parts[0] === groupSelect.value) {
                        isMatch = true;
                        specialNote = `<div class="mt-3 text-xs font-bold text-rose-300 bg-rose-900/40 inline-flex items-center px-2 py-1 rounded-md border border-rose-500/30"><i class="fa-solid fa-user-pen mr-2"></i> Uniquement pour l'élève n°${parts[1]}</div>`;
                    }
                }
            });

            if (isMatch) {
                foundColles = true;
                const card = `
                    <div class="bg-slate-800 ${colle.border} border rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow flex items-start gap-4 flex-col sm:flex-row">
                        <div class="w-12 h-12 rounded-lg ${colle.bg} flex items-center justify-center shrink-0">
                            <i class="fa-solid ${colle.icon} ${colle.color} text-xl"></i>
                        </div>
                        <div class="flex-grow">
                            <h4 class="text-white font-bold text-lg leading-tight mb-1">${colle.subject}</h4>
                            <div class="text-slate-400 text-sm flex flex-col gap-1">
                                <span><i class="fa-regular fa-clock w-4"></i> ${colle.time}</span>
                                <span><i class="fa-solid fa-location-dot w-4"></i> Salle ${colle.room}</span>
                                <span><i class="fa-solid fa-user-tie w-4"></i> ${colle.prof}</span>
                            </div>
                            ${specialNote}
                        </div>
                    </div>
                `;
                scheduleResultsEl.innerHTML += card;
            }
        }
    });

    if (!foundColles) {
        scheduleResultsEl.innerHTML = `
            <div class="col-span-1 md:col-span-2 text-center p-8 bg-slate-800/50 rounded-xl border border-dashed border-slate-700">
                <i class="fa-regular fa-face-smile text-slate-500 text-4xl mb-3"></i>
                <p class="text-slate-400">Aucune khôlle programmée pour le Groupe ${groupSelect.value} cette semaine.</p>
            </div>
        `;
    }
}

// --- ALGORITHME DE RÉPÉTITION ESPACÉE (Spaced Repetition) ---
function openDeck(id) {
    const deck = decks[id];
    if (deck.summary) {
        currentDeckId = id;
        mainMenuEl.classList.add('hidden');
        document.getElementById('deck-summary-area').classList.remove('hidden');
        backBtn.classList.remove('hidden');

        document.getElementById('summary-icon-wrap').className = `w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-700 shadow-inner shrink-0`;
        document.getElementById('summary-icon').className = `fa-solid ${deck.icon} ${deck.color} text-xl`;
        document.getElementById('summary-title').innerText = `${deck.subject} : ${deck.title}`;
        document.getElementById('summary-content').innerHTML = deck.summary;
        renderMath('summary-content');
    } else {
        selectDeck(id);
    }
}

function startDeckCards() {
    document.getElementById('deck-summary-area').classList.add('hidden');
    selectDeck(currentDeckId);
}

function selectDeck(id) {
    currentDeckId = id;
    const deck = decks[currentDeckId];
    
    mainMenuEl.classList.add('hidden');
    document.getElementById('deck-summary-area').classList.add('hidden');
    flashcardAreaEl.classList.remove('hidden');
    backBtn.classList.remove('hidden');
    progressContainer.classList.remove('hidden');
    
    let availableCards = [];
    for (let i = 0; i < deck.cards.length; i++) {
        if (!deck.known.has(i)) {
            availableCards.push(i);
        }
    }
    
    for (let i = availableCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [availableCards[i], availableCards[j]] = [availableCards[j], availableCards[i]];
    }
    
    availableCards.sort((a, b) => {
        return getCardScore(currentDeckId, b) - getCardScore(currentDeckId, a);
    });
    
    studyQueue = availableCards;
    
    document.getElementById('current-deck-name').innerText = `${deck.subject} : ${deck.title}`;
    document.getElementById('card-icon').className = `fa-regular ${deck.icon} ${deck.color} text-4xl mb-4 opacity-70`;
    document.getElementById('card-back-bg').className = `card-face card-face-back bg-gradient-to-br ${deck.bgGradient}`;
    
    updateProgress();
    loadNextCardInQueue();
}

function loadNextCardInQueue() {
    if (studyQueue.length === 0) {
        flashcardAreaEl.classList.add('hidden');
        endScreenEl.classList.remove('hidden');
        endScreenEl.classList.add('flex');
        return;
    }
    
    currentCardIndex = studyQueue.shift();
    document.getElementById('cards-remaining-display').innerText = studyQueue.length + 1;
    
    loadCardIntoDOM(currentCardIndex);
}

function loadCardIntoDOM(index) {
    const deck = decks[currentDeckId];
    
    if (isFlipped) {
        document.getElementById('flashcard').classList.remove('is-flipped');
        isFlipped = false;
    }
    document.getElementById('hint-box').classList.remove('show');

    const score = getCardScore(currentDeckId, index);
    const badge = document.getElementById('difficulty-badge');
    if (score >= 2) {
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }

    setTimeout(() => {
        const card = deck.cards[index];
        document.getElementById('card-front-text').innerHTML = card.front;
        document.getElementById('card-back-text').innerHTML = card.back;
        document.getElementById('card-hint-text').innerHTML = card.hint || "Pas de précision supplémentaire.";
        renderMath();
    }, 150);
}

function renderMath(elementId) {
    if (window.renderMathInElement) {
        renderMathInElement(document.getElementById(elementId || 'flashcard'), {
            delimiters: [ {left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false} ],
            throwOnError : false
        });
    }
}

function flipCard() {
    isFlipped = !isFlipped;
    document.getElementById('flashcard').classList.toggle('is-flipped');
}

function toggleHint(e) {
    e.stopPropagation();
    document.getElementById('hint-box').classList.toggle('show');
}

function markReview() {
    updateCardScore(currentDeckId, currentCardIndex, 1);
    decks[currentDeckId].known.delete(currentCardIndex);
    
    const offset = Math.floor(Math.random() * 3) + 2; 
    const insertIndex = Math.min(studyQueue.length, offset);
    studyQueue.splice(insertIndex, 0, currentCardIndex);
    
    saveProgress();
    updateProgress();
    loadNextCardInQueue();
}

function markKnown() {
    updateCardScore(currentDeckId, currentCardIndex, -1);
    decks[currentDeckId].known.add(currentCardIndex);
    saveProgress();
    updateProgress();
    loadNextCardInQueue();
}

function hardResetDeck() {
    if (confirm("Êtes-vous sûr de vouloir remettre la progression de ce paquet à 0 ?")) {
        decks[currentDeckId].known.clear();
        saveProgress();
        endScreenEl.classList.add('hidden');
        endScreenEl.classList.remove('flex');
        selectDeck(currentDeckId);
    }
}

function updateProgress() {
    const deck = decks[currentDeckId];
    const percent = deck.cards.length > 0 ? (deck.known.size / deck.cards.length) * 100 : 0;
    const bar = document.getElementById('progress-bar');
    bar.style.width = `${percent}%`;
    document.getElementById('progress-text').innerText = `${deck.known.size} / ${deck.cards.length} acquis`;
    
    if (percent === 100) {
        bar.classList.replace('from-blue-500', 'from-emerald-400');
        bar.classList.replace('to-indigo-500', 'to-emerald-500');
    } else {
        bar.classList.replace('from-emerald-400', 'from-blue-500');
        bar.classList.replace('to-emerald-500', 'to-indigo-500');
    }
}

document.addEventListener('keydown', (e) => {
    if (currentDeckId && endScreenEl.classList.contains('hidden') && !mainMenuEl.classList.contains('hidden') === false && colloscopeAreaEl.classList.contains('hidden')) {
        if (e.code === 'Space') { 
            e.preventDefault(); 
            flipCard(); 
        } 
        else if (e.code === 'ArrowRight') markKnown();
        else if (e.code === 'ArrowLeft') markReview();
    }
});

// Lancement au chargement de la page
window.addEventListener('DOMContentLoaded', initApp);
