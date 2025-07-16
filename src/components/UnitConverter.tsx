
import React, { useState, useEffect } from 'react';
import { Calculator, Menu, X } from 'lucide-react';
import CategorySelector from './CategorySelector';
import ConversionForm from './ConversionForm';
import { unitData } from '../data/unitData';

const UnitConverter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('length');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { id: 'length', name: 'Length (দৈর্ঘ্য)', icon: '📏' },
    { id: 'weight', name: 'Weight (ওজন)', icon: '⚖️' },
    { id: 'time', name: 'Time (সময়)', icon: '⏰' },
    { id: 'temperature', name: 'Temperature (তাপমাত্রা)', icon: '🌡️' },
    { id: 'speed', name: 'Speed (গতি)', icon: '🚗' },
    { id: 'volume', name: 'Volume (আয়তন)', icon: '🥤' },
    { id: 'area', name: 'Area (এলাকা)', icon: '📐' },
    { id: 'pressure', name: 'Pressure (চাপ)', icon: '💨' },
    { id: 'energy', name: 'Energy (শক্তি)', icon: '⚡' },
    { id: 'power', name: 'Power (ক্ষমতা)', icon: '💪' },
    { id: 'frequency', name: 'Frequency (কম্পাঙ্ক)', icon: '📡' },
    { id: 'angle', name: 'Angle (কোণ)', icon: '📐' },
    { id: 'bit', name: 'Data Units (ডেটা)', icon: '💾' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">UniConverter</h1>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 text-gray-700"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1 rounded-lg text-gray-500"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="p-4 space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-black text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-3">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="p-4">
        <div className="max-w-md mx-auto">
          <CategorySelector
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
          
          <div className="mt-6">
            <ConversionForm
              category={selectedCategory}
              units={unitData[selectedCategory]?.units || {}}
              convertFunction={unitData[selectedCategory]?.convert}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default UnitConverter;
