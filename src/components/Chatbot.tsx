import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getChatResponse } from '../services/gemini';

interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', parts: [{ text: "Hi! I'm your Google Growth assistant. How can I help you today?" }] }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', parts: [{ text: input }] };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getChatResponse(input, messages);
      setMessages(prev => [...prev, { role: 'model', parts: [{ text: response || "I'm sorry, I couldn't process that." }] }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', parts: [{ text: "Error: Could not connect to the assistant." }] }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white w-[350px] sm:w-[400px] h-[500px] rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm">Growth Assistant</div>
                  <div className="text-[10px] text-blue-100 flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse" />
                    Online
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, i) => (
                <div key={i} className={cn("flex", msg.role === 'user' ? "justify-end" : "justify-start")}>
                  <div className={cn(
                    "max-w-[80%] p-3 rounded-2xl text-sm",
                    msg.role === 'user' 
                      ? "bg-blue-600 text-white rounded-tr-none" 
                      : "bg-white text-gray-800 border border-gray-100 rounded-tl-none shadow-sm"
                  )}>
                    <div className="markdown-body">
                      <ReactMarkdown>
                        {msg.parts[0].text}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl border border-gray-100 rounded-tl-none shadow-sm">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex items-center space-x-2 bg-gray-50 rounded-xl px-3 py-2 border border-gray-100 focus-within:border-blue-600 transition-colors">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-1 bg-transparent border-none focus:outline-none text-sm"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="text-blue-600 hover:bg-blue-50 p-1.5 rounded-lg transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-700 transition-all hover:scale-110 active:scale-95"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
