const socket = io('http://localhost:8000');
const form = document.getElementById('send-container');
const messageinput = document.getElementById('messageip');
const messageContainer = document.querySelector(".container");

const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messsageElement.innerText = message;
    messsageElement.classlist.add('message');
    messsageElement.classlist.add(position);
    messsageElement.append(messageElement);

}


const name=prompt("Enter your name to join");
socket.emit('new-user-joined', name);

socket.on('user-joined', name =>{
    append('${name} joined the chat', 'right');
})

socket.on('receive', data =>{
    append('${data.message}: ${data.message}', 'left');
})