'use client';
import { useState } from 'react';

export default function ChatBox({ messages, onSend }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  return (
    <div className="flex flex-col border rounded-lg shadow-md p-4 bg-white">
      <div className="flex flex-col gap-3 max-h-80 overflow-y-auto mb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-xs ${
              msg.sender === 'user'
                ? 'self-end bg-indigo-500 text-white'
                : 'self-start bg-gray-200 text-gray-800'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded-lg px-3 py-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
