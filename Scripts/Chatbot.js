function sendMessage(option = null) {
    const chatBox = document.getElementById('area-chat');
    const mensajeUsuario = document.getElementById('mensajeUsuario');
    const mensaje = option || mensajeUsuario.value;

    if (!mensaje) return;

    // Crear el mensaje del usuario
    const configUser = document.createElement('div');
    configUser.className = 'message user-message';
    configUser.innerText = mensaje;
    chatBox.appendChild(configUser);

    // Crear el mensaje del bot
    const configBot = document.createElement('div');
    configBot.className = 'message bot-message';
    configBot.innerHTML = `<img src="RSC/Recurso 21.svg" alt="Bot"> ${getBotResponse(mensaje)}`;
    chatBox.appendChild(configBot);

    // Limpiar el input del usuario
    if (!option) mensajeUsuario.value = '';

    // Desplazar el chat hacia abajo
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(mensaje) {
    const responses = {
        '¿Qué hago?': 'Puedes realizar diversas tareas como gestionar tus códigos y consultas.',
        '¿Cómo puedo ayudarte?': 'Estoy aquí para asistirte con cualquier pregunta o problema que tengas.',
        '¡Hablemos!': '¡Claro! ¿Sobre qué te gustaría hablar?'
    };

    return responses[mensaje] || 'Lo siento, no entendí eso. ¿Puedes reformular tu pregunta?';
}
