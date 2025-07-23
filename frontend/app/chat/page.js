'use client';
import { useState } from 'react';
import ChatBox from '@/components/ChatBox';

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I’m your wellness companion. How are you feeling today?' }
  ]);

  const sendMessage = (text) => {
    const newMessages = [...messages, { sender: 'user', text }];
    setMessages(newMessages);

    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: `I hear you. Let's work through this together ❤️` },
      ]);
    }, 1000);
  };

  return (
    <div className="max-w-xl mx-auto mt-6">
      <ChatBox messages={messages} onSend={sendMessage} />
    </div>
  );
}
