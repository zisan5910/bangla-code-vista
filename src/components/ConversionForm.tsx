
import React, { useState, useEffect } from 'react';
import { ArrowUpDown, RotateCcw } from 'lucide-react';

interface ConversionFormProps {
  category: string;
  units: Record<string, number | string>;
  convertFunction: any;
}

const ConversionForm: React.FC<ConversionFormProps> = ({
  category,
  units,
  convertFunction
}) => {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [result, setResult] = useState('');

  const unitKeys = Object.keys(units);

  useEffect(() => {
    if (unitKeys.length > 0) {
      setFromUnit(unitKeys[0]);
      setToUnit(unitKeys[1] || unitKeys[0]);
    }
  }, [category]);

  const handleConvert = () => {
    if (!inputValue || !fromUnit || !toUnit || !convertFunction) {
      setResult('Please fill all fields');
      return;
    }

    try {
      const numValue = parseFloat(inputValue);
      if (isNaN(numValue)) {
        setResult('Please enter a valid number');
        return;
      }

      let convertedValue;
      if (category === 'temperature') {
        convertedValue = convertFunction(numValue, units[fromUnit], units[toUnit]);
      } else {
        convertedValue = convertFunction(numValue, units[fromUnit], units[toUnit]);
      }

      setResult(`${convertedValue.toFixed(6)} ${toUnit.split(' ')[0]}`);
    } catch (error) {
      setResult('Conversion error');
    }
  };

  const swapUnits = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
    if (result) {
      handleConvert();
    }
  };

  const resetForm = () => {
    setInputValue('');
    setResult('');
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="space-y-6">
        {/* Input Value */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter Value
          </label>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter value to convert"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent text-lg"
          />
        </div>

        {/* From Unit */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            From
          </label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
          >
            {unitKeys.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <button
            onClick={swapUnits}
            className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <ArrowUpDown size={20} />
          </button>
        </div>

        {/* To Unit */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            To
          </label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
          >
            {unitKeys.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleConvert}
            className="flex-1 bg-black text-white py-3 px-6 rounded-xl font-medium hover:bg-gray-800 transition-colors"
          >
            Convert
          </button>
          <button
            onClick={resetForm}
            className="p-3 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <RotateCcw size={20} />
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-sm text-gray-600 mb-1">Result:</div>
            <div className="text-lg font-semibold text-gray-900">{result}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConversionForm;
