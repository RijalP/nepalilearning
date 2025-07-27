// Complete Nepali alphabet data
const nepaliAlphabets = {
    vowels: [
        { letter: "अ", pronunciation: "a", audio: "अ.m4a" },
        { letter: "आ", pronunciation: "aa", audio: "आ.m4a" },
        { letter: "इ", pronunciation: "i", audio: "इ.m4a" },
        { letter: "ई", pronunciation: "ee", audio: "ई.m4a" },
        { letter: "उ", pronunciation: "u", audio: "उ.m4a" },
        { letter: "ऊ", pronunciation: "oo", audio: "ऊ.m4a" },
        { letter: "ऋ", pronunciation: "ri", audio: "ऋ.m4a" },
        { letter: "ए", pronunciation: "e", audio: "ए.m4a" },
        { letter: "ऐ", pronunciation: "ai", audio: "ऐ.m4a" },
        { letter: "ओ", pronunciation: "o", audio: "ओ.m4a" },
        { letter: "औ", pronunciation: "au", audio: "औ.m4a" },
        { letter: "अं", pronunciation: "am", audio: "अं.m4a" },
        { letter: "अः", pronunciation: "aha", audio: "अः.m4a" }
    ],
    consonants: [
        { letter: "क", pronunciation: "ka", audio: "क.m4a" },
        { letter: "ख", pronunciation: "kha", audio: "ख.m4a" },
        { letter: "ग", pronunciation: "ga", audio: "ग.m4a" },
        { letter: "घ", pronunciation: "gha", audio: "घ.m4a" },
        { letter: "ङ", pronunciation: "nga", audio: "ङ.m4a" },
        { letter: "च", pronunciation: "cha", audio: "च.m4a" },
        { letter: "छ", pronunciation: "chha", audio: "छ.m4a" },
        { letter: "ज", pronunciation: "ja", audio: "ज.m4a" },
        { letter: "झ", pronunciation: "jha", audio: "झ.m4a" },
        { letter: "ञ", pronunciation: "nya", audio: "ञ.m4a" },
        { letter: "ट", pronunciation: "ta", audio: "ट.m4a" },
        { letter: "ठ", pronunciation: "tha", audio: "ठ.m4a" },
        { letter: "ड", pronunciation: "da", audio: "ड.m4a" },
        { letter: "ढ", pronunciation: "dha", audio: "ढ.m4a" },
        { letter: "ण", pronunciation: "na", audio: "ण.m4a" },
        { letter: "त", pronunciation: "ta", audio: "त.m4a" },
        { letter: "थ", pronunciation: "tha", audio: "थ.m4a" },
        { letter: "द", pronunciation: "da", audio: "द.m4a" },
        { letter: "ध", pronunciation: "dha", audio: "ध.m4a" },
        { letter: "न", pronunciation: "na", audio: "न.m4a" },
        { letter: "प", pronunciation: "pa", audio: "प.m4a" },
        { letter: "फ", pronunciation: "pha", audio: "फ.m4a" },
        { letter: "ब", pronunciation: "ba", audio: "ब.m4a" },
        { letter: "भ", pronunciation: "bha", audio: "भ.m4a" },
        { letter: "म", pronunciation: "ma", audio: "म.m4a" },
        { letter: "य", pronunciation: "ya", audio: "य.m4a" },
        { letter: "र", pronunciation: "ra", audio: "र.m4a" },
        { letter: "ल", pronunciation: "la", audio: "ल.m4a" },
        { letter: "व", pronunciation: "va", audio: "व.m4a" },
        { letter: "श", pronunciation: "sha", audio: "श.m4a" },
        { letter: "ष", pronunciation: "sha", audio: "ष.m4a" },
        { letter: "स", pronunciation: "sa", audio: "स.m4a" },
        { letter: "ह", pronunciation: "ha", audio: "ह.m4a" },
        { letter: "क्ष", pronunciation: "ksha", audio: "क्ष.m4a" },
        { letter: "त्र", pronunciation: "tra", audio: "त्र.m4a" },
        { letter: "ज्ञ", pronunciation: "gya", audio: "ज्ञ.m4a" }
    ],
    numbers: [
        { letter: "१", pronunciation: "ek", english: "1", audio: "1.m4a" },
        { letter: "२", pronunciation: "dui", english: "2", audio: "2.m4a" },
        { letter: "३", pronunciation: "tin", english: "3", audio: "3.m4a" },
        { letter: "४", pronunciation: "char", english: "4", audio: "4.m4a" },
        { letter: "५", pronunciation: "panch", english: "5", audio: "5.m4a" },
        { letter: "६", pronunciation: "chha", english: "6", audio: "6.m4a" },
        { letter: "७", pronunciation: "saat", english: "7", audio: "7.m4a" },
        { letter: "८", pronunciation: "aath", english: "8", audio: "8.m4a" },
        { letter: "९", pronunciation: "nau", english: "9", audio: "9.m4a" },
        { letter: "१०", pronunciation: "das", english: "10", audio: "10.m4a" }
    ]
};

// Game state
const gameState = {
    vowels: {
        selectedPronunciation: null,
        selectedLetter: null,
        correctMatches: 0,
        incorrectMatches: 0,
        matchedPairs: [],
        selectedPronunciationElement: null,
        selectedLetterElement: null
    },
    consonants: {
        selectedPronunciation: null,
        selectedLetter: null,
        correctMatches: 0,
        incorrectMatches: 0,
        matchedPairs: [],
        selectedPronunciationElement: null,
        selectedLetterElement: null
    },
    numbers: {
        selectedPronunciation: null,
        selectedLetter: null,
        correctMatches: 0,
        incorrectMatches: 0,
        matchedPairs: [],
        selectedPronunciationElement: null,
        selectedLetterElement: null
    },
    soundEnabled: true,
    firstPlay: true
};

// DOM elements
const vowelsGame = document.getElementById('vowels-matching-game');
const consonantsGame = document.getElementById('consonants-matching-game');
const numbersGame = document.getElementById('numbers-matching-game');
const soundToggle = document.getElementById('sound-toggle');
const helpBtn = document.getElementById('help-btn');
const tutorialModal = document.getElementById('tutorial-modal');
const startGameBtn = document.getElementById('start-game');

// Initialize games
document.addEventListener('DOMContentLoaded', function() {
    initGame('vowels');
    initGame('consonants');
    initGame('numbers');
    
    // Reset buttons
    document.getElementById('reset-vowels').addEventListener('click', () => resetGame('vowels'));
    document.getElementById('reset-consonants').addEventListener('click', () => resetGame('consonants'));
    document.getElementById('reset-numbers').addEventListener('click', () => resetGame('numbers'));
    
    // Sound toggle
    soundToggle.addEventListener('click', toggleSound);
    
    // Help button
    helpBtn.addEventListener('click', showTutorial);
    startGameBtn.addEventListener('click', hideTutorial);
    
    // Show tutorial on first play
    if (gameState.firstPlay) {
        showTutorial();
    }
});

// Initialize a game
function initGame(type) {
    const gameContainer = type === 'vowels' ? vowelsGame : 
                         type === 'consonants' ? consonantsGame : numbersGame;
    
    // Clear previous game
    gameContainer.innerHTML = '';
    
    // Get the data for this game type
    let data = nepaliAlphabets[type];

    // For consonants, select only 10 random items
    if (type === 'consonants') {
        data = [...data].sort(() => Math.random() - 0.5).slice(0, 10);
    }
    
    // Create pronunciation buttons (first column)
    const pronunciationsContainer = document.createElement('div');
    pronunciationsContainer.className = 'pronunciations-container';
    
    // Shuffle the pronunciations
    const shuffledPronunciations = [...data].sort(() => Math.random() - 0.5);
    
    shuffledPronunciations.forEach(item => {
        const button = document.createElement('button');
        button.className = 'game-pronunciation-btn';
        button.innerHTML = `<span>${type === 'numbers' ? `${item.pronunciation} (${item.english})` : item.pronunciation}</span>
                           <i class="fas fa-volume-up"></i>`;
        button.dataset.pronunciation = item.pronunciation;
        button.dataset.audio = item.audio;
        button.dataset.type = type;
        
        button.addEventListener('click', () => {
            selectPronunciation(item.pronunciation, type, button);
            if (gameState.soundEnabled) {
                playSound(item.audio);
            }
        });
        
        pronunciationsContainer.appendChild(button);
    });
    
    // Create letter buttons (second column)
    const lettersContainer = document.createElement('div');
    lettersContainer.className = 'letters-container';
    
    // Shuffle letters separately
    const shuffledLetters = [...data].sort(() => Math.random() - 0.5);
    
    shuffledLetters.forEach(item => {
        const button = document.createElement('button');
        button.className = 'game-letter-btn';
        button.textContent = item.letter;
        button.dataset.letter = item.letter;
        button.dataset.pronunciation = item.pronunciation;
        button.dataset.type = type;
        
        button.addEventListener('click', () => selectLetter(item.letter, type, button));
        
        lettersContainer.appendChild(button);
    });
    
    gameContainer.appendChild(pronunciationsContainer);
    gameContainer.appendChild(lettersContainer);
}

// Handle pronunciation selection
function selectPronunciation(pronunciation, type, button) {
    const state = gameState[type];
    
    // Don't allow selection if already matched
    if (state.matchedPairs.some(pair => pair.pronunciation === pronunciation)) return;
    
    // Remove previous selection highlight
    const prevSelected = document.querySelector(`.game-pronunciation-btn.selected[data-type="${type}"]`);
    if (prevSelected) prevSelected.classList.remove('selected', 'active-pronunciation');
    
    // Highlight current selection
    button.classList.add('selected', 'active-pronunciation');
    state.selectedPronunciation = pronunciation;
    state.selectedPronunciationElement = button;
    
    // Check for match if letter is already selected
    if (state.selectedLetter) {
        checkMatch(type);
    }
}

// Handle letter selection
function selectLetter(letter, type, button) {
    const state = gameState[type];
    
    // Don't allow selection if already matched
    if (state.matchedPairs.some(pair => pair.letter === letter)) return;
    
    // Remove previous selection highlight
    const prevSelected = document.querySelector(`.game-letter-btn.selected[data-type="${type}"]`);
    if (prevSelected) prevSelected.classList.remove('selected');
    
    // Highlight current selection
    button.classList.add('selected');
    state.selectedLetter = letter;
    state.selectedLetterElement = button;
    
    // Check for match if pronunciation is already selected
    if (state.selectedPronunciation) {
        checkMatch(type);
    }
}

// Check if selected letter and pronunciation match
function checkMatch(type) {
    const state = gameState[type];
    const data = nepaliAlphabets[type];
    
    // Find the item that matches the selected letter
    const letterItem = data.find(item => item.letter === state.selectedLetter);
    
    if (letterItem.pronunciation === state.selectedPronunciation) {
        // Correct match
        state.correctMatches++;
        
        // Add to matched pairs
        state.matchedPairs.push({
            letter: state.selectedLetter,
            pronunciation: state.selectedPronunciation,
            letterElement: state.selectedLetterElement,
            pronunciationElement: state.selectedPronunciationElement
        });
        
        // Highlight matched items
        state.selectedLetterElement.classList.add('matched');
        state.selectedLetterElement.classList.remove('selected');
        
        state.selectedPronunciationElement.classList.add('matched');
        state.selectedPronunciationElement.classList.remove('selected', 'active-pronunciation');
        
        // Draw connecting line with arrow
        drawConnectingLine(state.selectedPronunciationElement, state.selectedLetterElement, true);
    } else {
        // Incorrect match
        state.incorrectMatches++;
        
        // Highlight incorrect items briefly
        state.selectedLetterElement.classList.add('incorrect');
        state.selectedPronunciationElement.classList.add('incorrect');
        
        // Remove highlights after delay
        setTimeout(() => {
            state.selectedLetterElement.classList.remove('selected', 'incorrect');
            state.selectedPronunciationElement.classList.remove('selected', 'active-pronunciation', 'incorrect');
        }, 1000);
        
        // Draw connecting line with arrow (red for incorrect)
        drawConnectingLine(state.selectedPronunciationElement, state.selectedLetterElement, false);
    }
    
    // Update score display
    document.getElementById(`${type}-correct`).textContent = state.correctMatches;
    document.getElementById(`${type}-incorrect`).textContent = state.incorrectMatches;
    
    // Reset selections
    state.selectedLetter = null;
    state.selectedPronunciation = null;
    state.selectedLetterElement = null;
    state.selectedPronunciationElement = null;
    
    // Check if game is complete
    if (state.matchedPairs.length === data.length) {
        setTimeout(() => {
            alert(`Congratulations! You've matched all ${type}!\nCorrect: ${state.correctMatches}\nIncorrect: ${state.incorrectMatches}`);
        }, 500);
    }
}

// Draw connecting line between matched items with arrow
function drawConnectingLine(startElement, endElement, isCorrect) {
    const gameContainer = startElement.closest('.matching-game-container');
    const line = document.createElement('div');
    line.className = `connecting-line ${isCorrect ? 'correct' : 'incorrect'}`;
    
    const startRect = startElement.getBoundingClientRect();
    const endRect = endElement.getBoundingClientRect();
    const containerRect = gameContainer.getBoundingClientRect();
    
    const startX = startRect.right - containerRect.left;
    const startY = startRect.top + startRect.height/2 - containerRect.top;
    const endX = endRect.left - containerRect.left;
    const endY = endRect.top + endRect.height/2 - containerRect.top;
    
    const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
    const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
    
    line.style.width = `${length}px`;
    line.style.left = `${startX}px`;
    line.style.top = `${startY}px`;
    line.style.transform = `rotate(${angle}deg)`;
    line.style.transformOrigin = '0 0';
    
    // Add arrowhead
    line.innerHTML = '<div class="arrowhead"></div>';
    
    gameContainer.appendChild(line);
    
    // Remove line after animation if incorrect
    if (!isCorrect) {
        setTimeout(() => {
            line.remove();
        }, 1000);
    }
}

// Play sound
function playSound(audioFile) {
    const audio = new Audio(`audio/${audioFile}`);
    audio.play().catch(e => console.error("Audio playback failed:", e));
}

// Toggle sound
function toggleSound() {
    gameState.soundEnabled = !gameState.soundEnabled;
    soundToggle.innerHTML = `<i class="fas fa-volume-${gameState.soundEnabled ? 'up' : 'mute'}"></i> Sound ${gameState.soundEnabled ? 'On' : 'Off'}`;
}

// Show tutorial
function showTutorial() {
    tutorialModal.style.display = 'flex';
}

// Hide tutorial
function hideTutorial() {
    tutorialModal.style.display = 'none';
    gameState.firstPlay = false;
}

// Reset game
function resetGame(type) {
    gameState[type] = {
        selectedPronunciation: null,
        selectedLetter: null,
        correctMatches: 0,
        incorrectMatches: 0,
        matchedPairs: [],
        selectedPronunciationElement: null,
        selectedLetterElement: null
    };
    
    // Update score display
    document.getElementById(`${type}-correct`).textContent = '0';
    document.getElementById(`${type}-incorrect`).textContent = '0';
    
    // Remove all connecting lines
    const gameContainer = document.querySelector(`#${type}-matching-game`).parentElement;
    gameContainer.querySelectorAll('.connecting-line').forEach(line => line.remove());
    
    // Reinitialize game
    initGame(type);
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});