async function callOllama(userText) {
    try {
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: "llama3", // or whatever model you have installed
                prompt: `You are a creepy horror game terminal. Player says: "${userText}"`,
                stream: false
            })
        });
        
        const data = await response.json();
        return data.response;
    } catch (error) {
        return "[ERROR: LOCAL ENTITY UNREACHABLE]";
    }
}
