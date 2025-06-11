
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react';

const GhostAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: "👋 Hi! I'm Ghost AI, your personal assistant for learning about Ridoan. I can help you with information about his background, skills, projects, and more. What would you like to know?"
    }
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages(prev => [...prev, { type: 'user', content: message }]);
      
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'ai',
          content: "Thanks for your question! I'm currently in demo mode. In a full implementation, I would provide detailed information about Ridoan's experience, projects, and skills based on your query."
        }]);
      }, 1000);
      
      setMessage('');
    }
  };

  const quickQuestions = [
    "Tell me about Ridoan's projects",
    "What are his technical skills?",
    "How can I contact him?"
  ];

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-blue-600 hover:from-blue-600 hover:via-purple-700 hover:to-blue-700 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse relative overflow-hidden group"
          size="icon"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          {isOpen ? (
            <X className="h-7 w-7 text-white relative z-10" />
          ) : (
            <div className="relative z-10 flex items-center justify-center">
              <MessageCircle className="h-7 w-7 text-white" />
              <Sparkles className="h-4 w-4 text-white absolute -top-1 -right-1 animate-bounce" />
            </div>
          )}
        </Button>
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 h-[500px] animate-scale-in">
          <Card className="h-full shadow-2xl border-2 border-primary/20 bg-white/95 backdrop-blur-md">
            <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-blue-600 p-4 rounded-t-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Ghost AI Assistant</h3>
                  <p className="text-blue-100 text-sm">Powered by AI • Always learning</p>
                </div>
              </div>
            </div>
            
            <CardContent className="p-0 h-full flex flex-col">
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-gray-50 to-white">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.type === 'user' 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                        : 'bg-white shadow-md border'
                    }`}>
                      <p className="text-sm">{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Questions */}
              <div className="p-4 border-t bg-gray-50/50">
                <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setMessage(question)}
                      className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSendMessage} className="p-4 border-t bg-white">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask about Ridoan..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button 
                    type="submit" 
                    size="sm" 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default GhostAI;
