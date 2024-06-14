document.addEventListener('DOMContentLoaded', () => {
    const mensajeUsuario = document.getElementById('mensajeUsuario');

    mensajeUsuario.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    });

    mensajeUsuario.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
});

function sendMessage(option = null) {
    const chatBox = document.getElementById('area-chat');
    const mensajeUsuario = document.getElementById('mensajeUsuario');
    const mensaje = option || mensajeUsuario.value.trim();

    if (!mensaje) return;

    // Crear el mensaje del usuario
    const contenedorMensajeUser = document.createElement('div');
    contenedorMensajeUser.className = 'message-container';

    const configUser = document.createElement('div');
    configUser.className = 'message user-message';
    configUser.innerText = mensaje;
    contenedorMensajeUser.appendChild(configUser);
    chatBox.appendChild(contenedorMensajeUser);

    // Crear el mensaje del bot
    const contenedorMensajeBot = document.createElement('div');
    contenedorMensajeBot.className = 'message-container';

    const contenedorLogo = document.createElement('div');
    contenedorLogo.className = 'contenedor-logo';
    contenedorLogo.innerHTML = `<img src="RSC/Recurso 21.svg" alt="Bot">`;

    const configBot = document.createElement('div');
    configBot.className = 'message bot-message';
    configBot.innerHTML = `<div>${getBotResponse(mensaje)}</div>`;

    contenedorMensajeBot.appendChild(contenedorLogo);
    contenedorMensajeBot.appendChild(configBot);
    chatBox.appendChild(contenedorMensajeBot);

    // Limpiar el input del usuario y ajustar la altura
    mensajeUsuario.value = '';
    mensajeUsuario.style.height = 'auto';

    // Desplazar el chat hacia abajo
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(mensaje) {
    const responses = {
        '¿Qué hago?': 'SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS.',
        '¿Cómo puedo ayudarte?': 'Estoy aquí para asistirte con cualquier pregunta o problema que tengas.',
        '¡Hablemos!': '¡Claro! ¿Sobre qué te gustaría hablar?'
    };

    return responses[mensaje] || 'Lo siento, no entendí eso. ¿Puedes reformular tu pregunta?';
}