
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, X, Send } from 'lucide-react';

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

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          size="icon"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <MessageCircle className="h-6 w-6 text-white" />
          )}
        </Button>
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 h-96 animate-fade-in">
          <Card className="h-full shadow-2xl border-2 border-primary/20">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-t-lg">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Ghost AI Assistant
              </h3>
              <p className="text-blue-100 text-sm">Ask me anything about Ridoan!</p>
            </div>
            
            <CardContent className="p-4 h-full flex flex-col">
              <div className="flex-1 bg-gray-50 rounded-lg p-3 mb-4 overflow-y-auto">
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-700">
                      👋 Hi! I'm Ghost AI. I can help you learn more about Ridoan's background, 
                      skills, and projects. Feel free to ask me anything!
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about Ridoan..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button 
                  type="submit" 
                  size="sm" 
                  className="bg-blue-500 hover:bg-blue-600"
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
