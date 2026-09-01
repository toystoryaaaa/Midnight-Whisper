async function callOllama(userText) {
    try {
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: "llama3", // Make sure you have this model pulled in Ollama (e.g., run `ollama run llama3`)
                prompt: `You are a creepy, malevolent AI trapped inside an old horror game terminal. Keep your responses short, unsettling, cryptic, and immersive. Player says: "${userText}"`,
                stream: false
            })
        });
        
        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error("Ollama connection error:", error);
        return "[ERROR: LOCAL ENTITY UNREACHABLE - IS OLLAMA RUNNING?]";
    }
}
