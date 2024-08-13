// Referencias a los elementos del DOM
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');

// Función de encriptación
function encrypt(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Función de desencriptación
function decrypt(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Función para actualizar el contenido y manejar la imagen de fondo
function updateOutputText(text) {
    outputText.value = text;
    if (text.trim() === "" || text === "No se encontraron mensajes procesados.") {
        outputText.classList.remove('sin-imagen');
    } else {
        outputText.classList.add('sin-imagen');
    }
}

// Evento de encriptación
encryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    updateOutputText(encrypt(text));
});

// Evento de desencriptación
decryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    updateOutputText(decrypt(text));
});

// Evento para copiar el texto encriptado/desencriptado
copyBtn.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});
