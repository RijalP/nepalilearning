// Nepali alphabet data
const nepaliAlphabets = {
    vowels: [
        { letter: "अ", example: "अनार", meaning: "Pomegranate", audio: "अ.m4a" },
        { letter: "आ", example: "आमा", meaning: "Mother", audio: "आ.m4a" },
        { letter: "इ", example: "इमान्दार", meaning: "Honest", audio: "इ.m4a" },
        { letter: "ई", example: "ईश्वर", meaning: "God", audio: "ई.m4a" },
        { letter: "उ", example: "उकाली", meaning: "Uphill", audio: "उ.m4a" },
        { letter: "ऊ", example: "ऊन", meaning: "Wool", audio: "ऊ.m4a" },
        { letter: "ए", example: "एक", meaning: "One", audio: "ए.m4a" },
        { letter: "ऐ", example: "ऐनाखानी", meaning: "Mirror", audio: "ऐ.m4a" },
        { letter: "ओ", example: "ओखर", meaning: "Stone", audio: "ओ.m4a" },
        { letter: "औ", example: "औंसी", meaning: "New moon", audio: "औ.m4a" },
        { letter: "अं", example: "अंगूर", meaning: "Grapes", audio: "अं.m4a" },
        { letter: "अः", example: "अः", meaning: "Expression of pain", audio: "अः.m4a" }
    ],
    consonants: [
        { letter: "क", example: "कमल", meaning: "Lotus", audio: "क.m4a" },
        { letter: "ख", example: "खरायो", meaning: "Rabbit", audio: "ख.m4a" },
        { letter: "ग", example: "गाउँ", meaning: "Village", audio: "ग.m4a" },
        { letter: "घ", example: "घर", meaning: "House", audio: "घ.m4a" },
        { letter: "ङ", example: "ङ", meaning: "Nasal sound", audio: "ङ.m4a" },
        { letter: "च", example: "चरा", meaning: "Bird", audio: "च.m4a" },
        { letter: "छ", example: "छाता", meaning: "Umbrella", audio: "छ.m4a" },
        { letter: "ज", example: "जनावर", meaning: "Animal", audio: "ज.m4a" },
        { letter: "झ", example: "झरना", meaning: "Waterfall", audio: "झ.m4a" },
        { letter: "ञ", example: "ञ", meaning: "Nasal sound", audio: "ञ.m4a" },
        { letter: "ट", example: "टोपी", meaning: "Cap", audio: "ट.m4a" },
        { letter: "ठ", example: "ठूलो", meaning: "Big", audio: "ठ.m4a" },
        { letter: "ड", example: "डल्ले", meaning: "Stupid", audio: "ड.m4a" },
        { letter: "ढ", example: "ढुङ्गा", meaning: "Stone", audio: "ढ.m4a" },
        { letter: "ण", example: "ण", meaning: "Nasal sound", audio: "ण.m4a" },
        { letter: "त", example: "तारा", meaning: "Star", audio: "त.m4a" },
        { letter: "थ", example: "थैली", meaning: "Bag", audio: "थ.m4a" },
        { letter: "द", example: "दही", meaning: "Yogurt", audio: "द.m4a" },
        { letter: "ध", example: "धन", meaning: "Wealth", audio: "ध.m4a" },
        { letter: "न", example: "नदी", meaning: "River", audio: "न.m4a" },
        { letter: "प", example: "पानी", meaning: "Water", audio: "प.m4a" },
        { letter: "फ", example: "फूल", meaning: "Flower", audio: "फ.m4a" },
        { letter: "ब", example: "बाटो", meaning: "Path", audio: "ब.m4a" },
        { letter: "भ", example: "भात", meaning: "Rice", audio: "भ.m4a" },
        { letter: "म", example: "माया", meaning: "Love", audio: "म.m4a" },
        { letter: "य", example: "यात्रा", meaning: "Journey", audio: "य.m4a" },
        { letter: "र", example: "राम्रो", meaning: "Good", audio: "र.m4a" },
        { letter: "ल", example: "लत्ता", meaning: "Cloth", audio: "ल.m4a" },
        { letter: "व", example: "वन", meaning: "Forest", audio: "व.m4a" },
        { letter: "श", example: "शान्ति", meaning: "Peace", audio: "श.m4a" },
        { letter: "ष", example: "षट्कोण", meaning: "Hexagon", audio: "ष.m4a" },
        { letter: "स", example: "सूर्य", meaning: "Sun", audio: "स.m4a" },
        { letter: "ह", example: "हात", meaning: "Hand", audio: "ह.m4a" },
        { letter: "क्ष", example: "क्षेत्र", meaning: "Field", audio: "क्ष.m4a" },
        { letter: "त्र", example: "त्रिशूल", meaning: "Trident", audio: "त्र.m4a" },
        { letter: "ज्ञ", example: "ज्ञान", meaning: "Knowledge", audio: "ज्ञ.m4a" }
    ]
};

// Global variables
let currentAudio = null;
let isPlayingAll = false;

// DOM elements
const vowelsGrid = document.getElementById('vowels-grid');
const consonantsGrid = document.getElementById('consonants-grid');
const exampleWord = document.getElementById('example-word');
const exampleMeaning = document.getElementById('example-meaning');
const playAllVowelsBtn = document.getElementById('playAllVowels');
const playAllConsonantsBtn = document.getElementById('playAllConsonants');
const downloadVowelsBtn = document.getElementById('downloadVowels');
const downloadConsonantsBtn = document.getElementById('downloadConsonants');

// Initialize the alphabet buttons
function initAlphabetButtons() {
    // Create vowel buttons
    nepaliAlphabets.vowels.forEach(vowel => {
        const button = document.createElement('button');
        button.className = 'letter-btn';
        button.textContent = vowel.letter;
        button.dataset.letter = vowel.letter;
        button.dataset.example = vowel.example;
        button.dataset.meaning = vowel.meaning;
        button.dataset.audio = vowel.audio;
        
        button.addEventListener('click', () => {
            if (isPlayingAll) return;
            stopCurrentAudio();
            playLetterSound(vowel.audio);
            showExample(vowel.example, vowel.meaning);
            highlightLetter(button);
        });
        
        vowelsGrid.appendChild(button);
    });
    
    // Create consonant buttons
    nepaliAlphabets.consonants.forEach(consonant => {
        const button = document.createElement('button');
        button.className = 'letter-btn';
        button.textContent = consonant.letter;
        button.dataset.letter = consonant.letter;
        button.dataset.example = consonant.example;
        button.dataset.meaning = consonant.meaning;
        button.dataset.audio = consonant.audio;
        
        button.addEventListener('click', () => {
            if (isPlayingAll) return;
            stopCurrentAudio();
            playLetterSound(consonant.audio);
            showExample(consonant.example, consonant.meaning);
            highlightLetter(button);
        });
        
        consonantsGrid.appendChild(button);
    });
}

// Stop current audio if playing
function stopCurrentAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}

// Play letter sound
function playLetterSound(audioFile) {
    stopCurrentAudio();
    currentAudio = new Audio(`audio/${audioFile}`);
    currentAudio.play().catch(e => console.error("Audio playback failed:", e));
}

// Show example word and meaning
function showExample(word, meaning) {
    exampleWord.textContent = word;
    exampleMeaning.textContent = meaning;
}

// Highlight letter button temporarily
function highlightLetter(button) {
    // Remove highlight from all buttons first
    document.querySelectorAll('.letter-btn').forEach(btn => {
        btn.classList.remove('highlight');
    });
    
    // Add highlight to the clicked button
    button.classList.add('highlight');
    setTimeout(() => {
        button.classList.remove('highlight');
    }, 1000);
}

// Play all letters in sequence
async function playAllLetters(letters) {
    if (isPlayingAll) return;
    
    isPlayingAll = true;
    const buttons = Array.from(document.querySelectorAll('.letter-btn'));
    
    // Disable play all buttons during playback
    playAllVowelsBtn.disabled = true;
    playAllConsonantsBtn.disabled = true;
    
    for (const letter of letters) {
        const button = buttons.find(btn => btn.dataset.letter === letter.letter);
        if (button) {
            // Highlight the button
            button.classList.add('highlight');
            
            // Show example
            showExample(letter.example, letter.meaning);
            
            // Play sound
            stopCurrentAudio();
            currentAudio = new Audio(`audio/${letter.audio}`);
            await new Promise((resolve) => {
                currentAudio.play().catch(e => console.error("Audio playback failed:", e));
                currentAudio.onended = resolve;
            });
            
            // Remove highlight after short delay
            await new Promise(resolve => setTimeout(resolve, 500));
            button.classList.remove('highlight');
        }
    }
    
    // Re-enable play all buttons
    playAllVowelsBtn.disabled = false;
    playAllConsonantsBtn.disabled = false;
    isPlayingAll = false;
}

// Generate PDF for practice sheets
// [Previous code remains the same until the generatePracticePDF function]

function generatePracticePDF(type) {
    try {
        const { jsPDF } = window.jspdf;
        if (!jsPDF) throw new Error("jsPDF library not loaded");
        
        const doc = new jsPDF();
        const letters = type === 'vowels' ? nepaliAlphabets.vowels : nepaliAlphabets.consonants;
        const title = type === 'vowels' ? 'Devanagari Vowels Practice Sheet' : 'Devanagari Consonants Practice Sheet';

        // Page layout settings
        const pageWidth = doc.internal.pageSize.getWidth();
        const margin = 15;
        const boxSize = 15;
        const boxesPerLetter = 10;
        const spacing = 2;
        let xPos = margin;
        let yPos = margin + 15;

        // Add title
        doc.setFontSize(18);
        doc.text(title, pageWidth/2, 10, { align: 'center' });

        // Add instructions
        doc.setFontSize(10);
        doc.text('Write each letter in the boxes, using the first box as example', 
                pageWidth/2, 17, { align: 'center', maxWidth: 180 });

        // Create practice sheets
        letters.forEach((letter, index) => {
            // Check if we need a new page (allow 40mm at bottom)
            if (yPos > doc.internal.pageSize.getHeight() - 10) {
                doc.addPage();
                yPos = margin;
            }

            // Calculate total width needed
            const totalWidth = boxSize * boxesPerLetter + spacing * (boxesPerLetter - 1);
            
            // Letter label (centered above boxes)
            const canvas = document.createElement('canvas');
            canvas.width = 100;
            canvas.height = 100;
            const ctx = canvas.getContext('2d');
            ctx.font = '60px Noto Sans Devanagari, Arial Unicode MS, sans-serif';
            ctx.fillStyle = '#000000';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(letter.letter, 50, 50);
            
            //doc.addImage(canvas.toDataURL(), 'PNG', 
            //           xPos + totalWidth/2 - 5, 
            //           yPos - 10, 
            //           10, 10);

            // Create practice boxes
            for (let i = 0; i < boxesPerLetter; i++) {
                const boxX = xPos + i * (boxSize + spacing);
                
                // Draw box
                doc.setDrawColor(0, 0, 0);
                doc.setLineWidth(0.3);
                doc.rect(boxX, yPos, boxSize, boxSize);
                
                // Add example letter to first box
                if (i === 0) {
                    const letterCanvas = document.createElement('canvas');
                    letterCanvas.width = 80;
                    letterCanvas.height = 80;
                    const letterCtx = letterCanvas.getContext('2d');
                    letterCtx.font = '50px Noto Sans Devanagari, Arial Unicode MS, sans-serif';
                    letterCtx.fillStyle = '#000000';
                    letterCtx.textAlign = 'center';
                    letterCtx.textBaseline = 'middle';
                    letterCtx.fillText(letter.letter, 40, 40);
                    
                    doc.addImage(letterCanvas.toDataURL(), 'PNG', 
                               boxX + boxSize/2 - 6, 
                               yPos + boxSize/2 - 6, 
                               12, 12);
                }
            }

            // Move to next line (row)
            yPos += boxSize + 10 ;
            
            // Reset x position for next row
            xPos = margin;
        });

        doc.save(`${title.replace(/\s+/g, '_')}.pdf`);
        
    } catch (error) {
        console.error('PDF generation error:', error);
        alert('Failed to generate PDF. Please try again.');
    }
}

// [Rest of the code remains the same]
// Check if PDF library is loaded
function checkPDFLibrary() {
    if (typeof window.jspdf === 'undefined') {
        console.error('jsPDF library not loaded');
        alert('PDF generation requires jsPDF library. Please ensure it is loaded.');
        return false;
    }
    return true;
}

// Event listeners
playAllVowelsBtn.addEventListener('click', () => playAllLetters(nepaliAlphabets.vowels));
playAllConsonantsBtn.addEventListener('click', () => playAllLetters(nepaliAlphabets.consonants));
downloadVowelsBtn.addEventListener('click', () => {
    if (checkPDFLibrary()) generatePracticePDF('vowels');
});
downloadConsonantsBtn.addEventListener('click', () => {
    if (checkPDFLibrary()) generatePracticePDF('consonants');
});

// Initialize the app
document.addEventListener('DOMContentLoaded', initAlphabetButtons);