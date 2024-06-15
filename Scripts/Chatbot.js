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
        if (this.scrollHeight > 100) {
            this.style.overflowY = 'scroll';
        } else {
            this.style.overflowY = 'hidden';
        }
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
    configBot.innerHTML = `<p>${getBotResponse(mensaje)}</p>`;

    contenedorMensajeBot.appendChild(contenedorLogo);
    contenedorMensajeBot.appendChild(configBot);
    chatBox.appendChild(contenedorMensajeBot);

    // Limpiar el input del usuario y ajustar la altura
    mensajeUsuario.value = '';
    mensajeUsuario.style.height = 'auto';
    mensajeUsuario.style.overflowY = 'hidden';

    // Desplazar el chat hacia abajo
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(mensaje) {
    const responses = {
        '¿Qué hago?': 'Mi misión es ayudarte a identificar y definir el código CIIU correcto para tu empresa o actividad económica. Ya sea que estés iniciando un nuevo negocio, necesites actualizar tu información, o simplemente tengas curiosidad sobre qué código corresponde a tus actividades,  ¡yo estoy aquí para guiarte!',
        '¿Cómo puedo ayudarte?': '1. Búsqueda de Códigos: Te ayudo a encontrar el código CIIU que mejor se ajuste a lo que hace tu empresa. 2. Registro y Actualización: Te doy orientación sobre cómo y dónde registrar o actualizar tu código CIIU. 3. Información Clara: Respondo todas tus preguntas sobre los códigos CIIU de manera sencilla y fácil de entender. 4. Asesoramiento Personalizado: Si tienes actividades económicas variadas, te ayudo a clasificar correctamente tus actividades principales y secundarias.',
        '¡Hablemos!': '¿Tienes una pregunta sobre tu código CIIU? ¿No estás seguro de qué código elegir? ¡No te preocupes! Haz clic en el botón de chat y comencemos a trabajar juntos para resolver todas tus dudas.'
    };

    return responses[mensaje] || 'Lo siento, no entendí eso. ¿Puedes reformular tu pregunta?';
}