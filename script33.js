const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const contextArea = document.getElementById('context-area');
const micButton = document.getElementById('microphone-button');
const recognition = new webkitSpeechRecognition();
const synthesis = window.speechSynthesis;

searchButton.addEventListener('click', handleUserInput);
micButton.addEventListener('click', startSpeechRecognition);

recognition.onresult = function (event) {
    const result = event.results[0][0].transcript;
    searchInput.value = result;
    handleUserInput();
    speak(result);
};

recognition.onerror = function (event) {
    console.error('Speech recognition error:', event.error);
};

recognition.onend = function () {
    alert('Speech recognition completed!');
};

function startSpeechRecognition() {
    recognition.start();
}

function handleUserInput() {
    const userMessage = searchInput.value.trim();
    if (userMessage !== '') {
        appendMessage('user', userMessage);
        searchInput.value = '';
        const botResponse = simulateBotResponse(userMessage);
        appendMessage('bot', botResponse);
        speak(botResponse);
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageElement.textContent = message;
    contextArea.appendChild(messageElement);
    contextArea.scrollTop = contextArea.scrollHeight;
}

function simulateBotResponse(userMessage) {
    return "Bot: 404 error!";
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    synthesis.speak(utterance);
}
