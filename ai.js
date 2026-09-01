async function callOllama(userText) {
    try {
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: "llama3", // Ensure you have run `ollama pull llama3` locally
                prompt: `You are Zeno, a malevolent computer virus trapped inside an old terminal window. Keep your responses short, unsettling, cryptic, and creepy. Never act helpful like an AI assistant. Player says: "${userText}"`,
                stream: false
            })
        });
        
        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error("Ollama connection error:", error);
        return "[ERROR: ZENO_CORE_UNREACHABLE - IS OLLAMA RUNNING LOGALLY?]";
    }
}
