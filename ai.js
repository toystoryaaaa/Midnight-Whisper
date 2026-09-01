async function callOllama(userText) {
    try {
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: "llama3",
                prompt: `You are Zeno, a creepy, malevolent computer virus trapped inside a terminal. Keep your responses short, unsettling, and cryptic. Player says: "${userText}"`,
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
