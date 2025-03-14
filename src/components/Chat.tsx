import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

const MOCK_MESSAGES = [
  {
    id: 1,
    author: 'EcoExpert',
    content: 'Remember to unplug devices when not in use!',
    timestamp: '2:30 PM',
  },
  {
    id: 2,
    author: 'PowerSaver',
    content: 'Has anyone tried the new smart power strips?',
    timestamp: '2:32 PM',
  },
];

export function Chat() {
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      id: messages.length + 1,
      author: 'You',
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="bg-gray-800 rounded-lg h-[calc(100vh-12rem)] flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <MessageSquare className="w-5 h-5 text-yellow-400" />
          <h2 className="text-lg font-semibold text-yellow-400">Live Chat</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col ${
              message.author === 'You' ? 'items-end' : 'items-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.author === 'You'
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-gray-700 text-yellow-100'
              }`}
            >
              <p className="font-semibold text-sm">{message.author}</p>
              <p>{message.content}</p>
            </div>
            <span className="text-xs text-gray-400 mt-1">{message.timestamp}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-gray-700 text-yellow-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 rounded-lg p-2 hover:bg-yellow-300 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}