const userName = "Ben 10";

document.getElementById('chat').addEventListener('submit', function (e) {
    e.preventDefault();

    let messageDiv = document.getElementById('message');

    let messageBox = document.getElementById('messages');
    messageBox.insertAdjacentHTML('beforeend', sendMessage(userName, messageDiv.value));

    if (messageDiv.value == '!pills') {
        let response = 'eae mano nao ta a fim de uma balinha n?';
        messageBox.insertAdjacentHTML('beforeend', sendMessage('Jujuba Louco', response));
    }

    messageDiv.value = '';
});

function sendMessage(username, message) {
    return `<div>${username}: ${message}</div>`
}