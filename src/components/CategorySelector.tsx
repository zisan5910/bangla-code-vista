
import React from 'react';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: string;
  onSelect: (categoryId: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategory,
  onSelect
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Category</h2>
      
      <div className="grid grid-cols-1 gap-2">
        {categories.slice(0, 6).map((category) => (
          <button
            key={category.id}
            onClick={() => onSelect(category.id)}
            className={`p-3 rounded-xl text-left transition-all ${
              selectedCategory === category.id
                ? 'bg-black text-white shadow-lg'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className="mr-3 text-lg">{category.icon}</span>
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
        
        <button
          onClick={() => {}}
          className="p-3 rounded-xl bg-gray-50 text-gray-500 text-center font-medium hover:bg-gray-100"
        >
          View All Categories ({categories.length})
        </button>
      </div>
    </div>
  );
};

export default CategorySelector;
