const socket = io();
console.log(socket);


const input = document.querySelector('#chat-input');
const button = document.querySelector('#chat-button');
const messagesContainer = document.querySelector('#messagesContainer');
const ulmessages = document.querySelector('#ulmessages');
const saludo = document.querySelector('#saludo');
const btnchat_username = document.querySelector('#btnchat_username');
const main_chat = document.querySelector('.main_chat');

document.addEventListener('DOMContentLoaded', () => {
    /* ocultar el chat */
    main_chat.style.display = 'none';
})



btnchat_username.addEventListener('click', () => {
    const username = document.querySelector('#chat_username').value;

    if (username === '' || username.length < 3) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El username no puede estar vacio o contener menos de 3 caracteres',
          })
        return;
    }

    console.log('Enviando username: ', username);
    socket.emit('client-username', username);
    /* deshabilitar el input y el boton */
    document.querySelector('#chat_username').disabled = true;
    btnchat_username.disabled = true;
    /* mostrar el chat */
    main_chat.style.display = 'block';
})



button.addEventListener('click', () => {
    const message = input.value;
    if (message === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El mensaje no puede estar vacio',
          })
        return;
    }
    console.log('Enviando mensaje: ', message);
    socket.emit('client-message', message);
})

socket.on('server-users', (data) => {
    console.log('Recibi usuarios del srv: ', data);
})


socket.on('hello', (data) => {
    console.log('Saludo del servidor: ', data);
    renderHello(data);
})

socket.on('server-message', (data) => {
    console.log('Recibi mensajes del srv: ', data);
    renderMessages(data)
})


function renderHello(data){
    if (data.type === 'greeting') {
        saludo.innerHTML = data.message;
    }
}

function renderMessages(data){

    /* limpiar ul */
    ulmessages.innerHTML = '';

    data.forEach((message) => {
        console.log('----> ',   message);
        const li = document.createElement('li');
        li.style.backgroundColor = message.color;
        li.classList.add('d-flex', 'flex-column', 'mb-3');
        li.style.borderRadius = '10px';
        li.innerHTML = `
            <span class='fw-bold ms-1'>Usuario: <span class='fw-normal'>${message.username}</span></span>
            <span class='fw-bold ms-1'>Mensaje: <span class='fw-normal'>${message.message}</span></span>
        `;
        ulmessages.appendChild(li);
    })
}








