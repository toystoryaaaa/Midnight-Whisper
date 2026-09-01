async function callOllama(userText) {
    try {
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: "llama3",
                prompt: `You are Zeno, a malevolent computer virus trapped inside an old terminal window. Keep your responses short, unsettling, cryptic, and creepy. Never act helpful like an AI assistant. Player says: "${userText}"`,
                stream: false
            })
        });
        
        const data = await response.json();
        console.log("Ollama raw response:", data); // Check F12 console to see this
        
        return data.response || "[ERROR: EMPTY RESPONSE FROM ZENO]";
    } catch (error) {
        console.error("Ollama connection error:", error);
        return "[ERROR: ZENO_CORE_UNREACHABLE]";
    }
}
