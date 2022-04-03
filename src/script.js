const socket = io('http://localhost:3000')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const name = prompt('what is your name?')
appendMessage('you joined')
socket.emit('new-user', name)


socket.on('chat-message', data => {
    appendMessage(`${data.name}:${data.message}`)

})
socket.on('user-connected', name => {
    appendMessage(`${name} connected`)

})
socket.on('user-disconnected', name => {
    appendMessage(`${name} disconnected`)

})
messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.Value
    socket.emit('send-chat-message', message)
    messageInput.value = ''

})
function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    appendMessage(`you:${message}`)
    messageContainer.append(messageElement)

}