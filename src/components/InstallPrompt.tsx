
import React from 'react';
import { X, Download } from 'lucide-react';

interface InstallPromptProps {
  onInstall: () => void;
  onDismiss: () => void;
}

const InstallPrompt: React.FC<InstallPromptProps> = ({ onInstall, onDismiss }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
        <div className="text-center">
          <div className="mb-4">
            <img 
              src="https://i.postimg.cc/wMPW5PVM/20250717-004001-0000.png" 
              alt="UniConverter" 
              className="w-16 h-16 mx-auto rounded-2xl"
            />
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            UniConverter
          </h3>
          
          <p className="text-gray-600 mb-6 text-sm">
            Install UniConverter app for quick access to unit conversions offline
          </p>
          
          <div className="flex gap-3">
            <button
              onClick={onDismiss}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium"
            >
              <X size={18} />
              Cancel
            </button>
            
            <button
              onClick={onInstall}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-black text-white rounded-xl font-medium"
            >
              <Download size={18} />
              Install
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;
