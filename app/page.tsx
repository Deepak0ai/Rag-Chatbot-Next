'use client';
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  async function send() {
    if (!input) return;
    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setMessages([...messages, "You: " + input, "Bot: " + data.reply]);
    setInput('');
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>RAG Chatbot</h1>
      {messages.map((m, i) => <p key={i}>{m}</p>)}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}