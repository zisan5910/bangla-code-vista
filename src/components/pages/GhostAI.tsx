
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react';

const GhostAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
      // Here you would typically handle the AI chat functionality
    }
  };

  const quickQuestions = [
    "Tell me about Ridoan's skills",
    "What are his educational achievements?",
    "Show me his projects",
    "What makes him unique?"
  ];

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 hover:from-blue-600 hover:via-purple-600 hover:to-blue-700 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
          size="icon"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full"></div>
          
          {isOpen ? (
            <X className="h-7 w-7 text-white relative z-10 transition-transform group-hover:scale-110" />
          ) : (
            <div className="relative z-10 flex items-center justify-center">
              <MessageCircle className="h-7 w-7 text-white transition-transform group-hover:scale-110" />
              <Sparkles className="h-4 w-4 text-white absolute -top-1 -right-1 animate-pulse" />
            </div>
          )}
        </Button>
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 sm:w-96 h-[500px] animate-scale-in">
          <Card className="h-full shadow-2xl border-2 border-primary/20 overflow-hidden bg-background/95 backdrop-blur-lg">
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-white/20">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">Ghost AI Assistant</h3>
                </div>
                <p className="text-blue-100 text-sm">Ask me anything about Ridoan! I'm here to help.</p>
              </div>
            </div>
            
            <CardContent className="p-4 h-full flex flex-col">
              <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-lg p-4 mb-4 overflow-y-auto">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-700 mb-3">
                          👋 Hi! I'm Ghost AI, your intelligent assistant. I can help you learn more about Ridoan's background, 
                          skills, projects, and achievements. Feel free to ask me anything!
                        </p>
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-gray-500 mb-2">Quick questions:</p>
                          {quickQuestions.map((question, index) => (
                            <button
                              key={index}
                              onClick={() => setMessage(question)}
                              className="block w-full text-left text-xs bg-blue-50 hover:bg-blue-100 p-2 rounded border border-blue-200 transition-colors"
                            >
                              {question}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about Ridoan..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <Button 
                  type="submit" 
                  size="sm" 
                  className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default GhostAI;
