import React, { useState } from 'react';
import { X, Bot, Send } from 'lucide-react';

interface LabBotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LabBotModal: React.FC<LabBotModalProps> = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm LabBot, your virtual research assistant. Ask me about our research, people, or how fMRI works!",
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { type: 'user', content: message }]);
      setMessage('');
      
      // Simulate bot response (replace with actual API call)
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: "Thanks for your question! This is a placeholder response. The actual LabBot functionality would connect to an AI service to provide detailed answers about our research."
        }]);
      }, 1000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 w-96 h-96 bg-gray-900 rounded-lg shadow-2xl z-50 flex flex-col border border-gray-700">
      <div className="flex justify-between items-center p-4 border-b border-gray-700 bg-gray-800 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <Bot className="text-orange-500" size={20} />
          <h3 className="text-lg font-semibold text-white">LabBot</h3>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                msg.type === 'user'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-700 text-gray-100'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-gray-700 bg-gray-800 rounded-b-lg">
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask about our research..."
            className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-orange-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-orange-500 hover:bg-orange-600 transition-colors px-3 py-2 rounded-lg"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LabBotModal;