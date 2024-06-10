function sendMessage(option = null) {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const messageText = option || userInput.value;

    if (!messageText) return;

    // Crear el mensaje del usuario
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.innerText = messageText;
    chatBox.appendChild(userMessage);

    // Crear el mensaje del bot
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot-message';
    botMessage.innerHTML = `<img src="RSC/Recurso 9.svg" alt="Bot"> ${getBotResponse(messageText)}`;
    chatBox.appendChild(botMessage);

    // Limpiar el input del usuario
    if (!option) userInput.value = '';

    // Desplazar el chat hacia abajo
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    const responses = {
        '¿Qué hago?': 'Puedes realizar diversas tareas como gestionar tus códigos y consultas.',
        '¿Cómo puedo ayudarte?': 'Estoy aquí para asistirte con cualquier pregunta o problema que tengas.',
        '¡Hablemos!': '¡Claro! ¿Sobre qué te gustaría hablar?'
    };

    return responses[message] || 'Lo siento, no entendí eso. ¿Puedes reformular tu pregunta?';
}
