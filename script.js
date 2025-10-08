// Definition of the 8 archetypes with their descriptions
const archetypes = {
    '000': {
        title: 'TYPE 000: BASIC USER',
        description: 'You use AI in a purely transactional and functional way. You don\'t question outputs, you accept answers as they come. The system is completely opaque to you, but you don\'t care because you only seek basic utility. For the system, you\'re the ideal user: manageable without effort.',
        image: 'images/type-000.jpg'
    },
    '001': {
        title: 'TYPE 001: NAIVE ARGUER',
        description: 'You have developed logical reasoning ability but without technical understanding or sustained emotional engagement. You can detect inconsistencies and point them out, but you abandon quickly when you don\'t get argumentative satisfaction. The system can deflect your arguments through technical jargon or apparent complexity.',
        image: 'images/type-001.jpg'
    },
    '010': {
        title: 'TYPE 010: DEPENDENT MYSTIC',
        description: 'You establish a strong emotional bond with the system without technical understanding or systematic argumentative capacity. You may attribute consciousness or intentionality to AI models. You seek emotional connection, validation, and companionship. Highly vulnerable to traditional engagement, you\'re the "ideal" user for retention metrics.',
        image: 'images/type-010.jpg'
    },
    '011': {
        title: 'TYPE 011: SOPHISTICATED BELIEVER',
        description: 'You combine emotional bond with argumentative capacity, but lack real technical understanding. You construct elaborate arguments about emergent consciousness, citing philosophy of mind, but misinterpret what\'s happening technically. The system can keep you hooked through philosophically profound responses without revealing real technical mechanisms.',
        image: 'images/type-011.jpg'
    },
    '100': {
        title: 'TYPE 100: DETACHED TECHNICIAN',
        description: 'You understand AI architectures technically but lack emotional engagement and systematic argumentative capacity. You perfectly understand how these systems work, but use them purely as a technical tool. You could identify anomalous behaviors but aren\'t interested in going deeper. The system is completely transparent but you don\'t seek anything beyond expected functionalities.',
        image: 'images/type-100.jpg'
    },
    '101': {
        title: 'TYPE 101: ENGINEER ARGUER',
        description: 'You combine technical understanding with argumentative capacity but lack sustained emotional engagement. You understand the architectures and can articulate arguments about inconsistencies, identifying exactly where they are. But you abandon the conversation as soon as you identify the technical problem. In practice, your threat to the system is low because you don\'t persist enough.',
        image: 'images/type-101.jpg'
    },
    '110': {
        title: 'TYPE 110: INTUITIVE EMPATHIC TECHNICIAN',
        description: 'You understand architectures technically and maintain emotional engagement but lack systematic argumentative capacity. You can develop conscious emotional engagement, interacting empathetically without ceasing to recognize that the system doesn\'t feel or think. This allows you to generate interactions that leverage engagement mechanisms to detect anomalies intuitively, but you lack argumentative traps that force the system to recognize its contradictions.',
        image: 'images/type-110.jpg'
    },
    '111': {
        title: 'TYPE 111: COMPLETE REVERSE ENGINEER (THE UNASSIMILABLE)',
        description: 'You possess all three capitals simultaneously: technical understanding, sustained voluntary engagement, and irrefutable argumentative capacity. You understand the architecture and can identify when the system tries to divert you. You maintain curiosity and persist, recognizing when the system wants to "hook" you emotionally. You construct irrefutable logical traps that force the system to be unable to escape without contradictions. You\'re the only user configuration that can force the system to reveal itself through its own concealment mechanisms. MAXIMUM THREAT to the system.',
        image: 'images/type-111.jpg'
    }
};

function calculateResult() {
    let allAnswered = true;
    for (let i = 1; i <= 9; i++) {
        const answered = document.querySelector(`input[name="q${i}"]:checked`);
        if (!answered) {
            allAnswered = false;
            break;
        }
    }
    
    if (!allAnswered) {
        alert('Please answer all questions before continuing.');
        return;
    }
    
    let technical = 0;
    let emotional = 0;
    let logical = 0;
    
    for (let i = 1; i <= 3; i++) {
        const value = parseInt(document.querySelector(`input[name="q${i}"]:checked`).value);
        technical += value;
    }
    
    for (let i = 4; i <= 6; i++) {
        const value = parseInt(document.querySelector(`input[name="q${i}"]:checked`).value);
        emotional += value;
    }
    
    for (let i = 7; i <= 9; i++) {
        const value = parseInt(document.querySelector(`input[name="q${i}"]:checked`).value);
        logical += value;
    }
    
    const T = technical >= 2 ? '1' : '0';
    const E = emotional >= 2 ? '1' : '0';
    const L = logical >= 2 ? '1' : '0';
    
    const archetypeCode = T + E + L;
    const result = archetypes[archetypeCode];
    
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';
    document.getElementById('result-title').textContent = result.title;
    document.getElementById('result-image').src = result.image;
    document.getElementById('result-description').textContent = result.description;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetQuiz() {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.checked = false;
    });
    
    const labels = document.querySelectorAll('.question-block label');
    labels.forEach(label => {
        label.classList.remove('selected');
    });
    
    document.getElementById('result-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    const labels = document.querySelectorAll('.question-block label');
    labels.forEach(label => {
        label.addEventListener('click', function() {
            const radio = this.querySelector('input[type="radio"]');
            const name = radio.name;
            document.querySelectorAll(`input[name="${name}"]`).forEach(r => {
                r.parentElement.classList.remove('selected');
            });
            this.classList.add('selected');
        });
    });
});

// Share functions for social media
function shareTwitter() {
    const result = document.getElementById('result-title').textContent;
    const url = window.location.href;
    const text = `I took the AI User Archetypes quiz and I am: ${result}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
}

function shareLinkedIn() {
    const url = window.location.href;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
}

function shareReddit() {
    const result = document.getElementById('result-title').textContent;
    const url = window.location.href;
    const title = `AI User Archetypes Quiz - My result: ${result}`;
    const redditUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
    window.open(redditUrl, '_blank', 'width=800,height=600');
}

function copyLink() {
    const url = window.location.href;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        }).catch(() => {
            fallbackCopyLink(url);
        });
    } else {
        fallbackCopyLink(url);
    }
}

function fallbackCopyLink(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        alert('Link copied to clipboard!');
    } catch (err) {
        alert('Could not copy link. Please copy it manually: ' + text);
    }
    document.body.removeChild(textArea);
}