document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const message = document.getElementById("userMessage").value;
    if (message) {
        let messages = JSON.parse(localStorage.getItem("messages")) || [];
        messages.push(message);
        localStorage.setItem("messages", JSON.stringify(messages));
        document.getElementById("userMessage").value = "";
        displayMessages();
    }
});

function displayMessages() {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    const messageList = document.getElementById("messages");
    messageList.innerHTML = "";
    messages.forEach(msg => {
        let li = document.createElement("li");
        li.textContent = msg;
        messageList.appendChild(li);
    });
}

displayMessages();
