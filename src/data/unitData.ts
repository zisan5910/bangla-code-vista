
export const unitData = {
  length: {
    units: {
      "মিটার Meter (m)": 1,
      "কিলোমিটার Kilometer (km)": 1000,
      "সেন্টিমিটার Centimeter (cm)": 0.01,
      "মিলিমিটার Millimeter (mm)": 0.001,
      "মাইল Mile (mi)": 1609.34,
      "ইঞ্চি Inch (in)": 0.0254,
      "ফুট Foot (ft)": 0.3048,
      "ইয়ার্ড Yard (yd)": 0.9144,
      "হাত Haat": 0.457,
      "গজ Gaz": 0.914
    },
    convert: (value: number, from: number, to: number) => (value * from) / to
  },

  weight: {
    units: {
      "কিলোগ্রাম Kilogram (Kg)": 1000,
      "গ্রাম Gram (gm)": 1,
      "মিলিগ্রাম Milligram (mg)": 0.001,
      "পাউন্ড Pound (lb)": 453.592,
      "আউন্স Ounce (oz)": 28.3495,
      "সের Ser": 933.10,
      "তোলা Tola": 11.664,
      "ভরি Vori": 11.6666
    },
    convert: (value: number, from: number, to: number) => (value * from) / to
  },

  time: {
    units: {
      "সেকেন্ড Second": 1,
      "মিনিট Minute": 60,
      "ঘণ্টা Hour": 3600,
      "দিন Day": 86400,
      "সপ্তাহ Week": 604800,
      "মাস Month": 2592000,
      "বছর Year": 31536000
    },
    convert: (value: number, from: number, to: number) => (value * from) / to
  },

  temperature: {
    units: {
      "সেলসিয়াস Celsius (°C)": "C",
      "ফারেনহাইট Fahrenheit (°F)": "F",
      "কেলভিন Kelvin (K)": "K"
    },
    convert: (value: number, from: string, to: string) => {
      if (from === "C" && to === "F") return (value * 9/5) + 32;
      if (from === "F" && to === "C") return (value - 32) * 5/9;
      if (from === "C" && to === "K") return value + 273.15;
      if (from === "K" && to === "C") return value - 273.15;
      if (from === "F" && to === "K") return (value - 32) * 5/9 + 273.15;
      if (from === "K" && to === "F") return (value - 273.15) * 9/5 + 32;
      return value;
    }
  },

  speed: {
    units: {
      "মিটার প্রতি সেকেন্ড m/s": 1,
      "কিলোমিটার প্রতি ঘণ্টা km/h": 0.27778,
      "মাইল প্রতি ঘণ্টা mile/h": 1.60934,
      "ফুট প্রতি সেকেন্ড ft/s": 0.3048,
      "নট knots": 0.514444
    },
    convert: (value: number, from: number, to: number) => (value * from) / to
  },

  volume: {
    units: {
      "ঘনমিটার m³": 1,
      "লিটার liter": 0.001,
      "মিলিলিটার ml": 1e-6,
      "গ্যালন gallon": 0.00378541,
      "কাপ cup": 0.00454609
    },
    convert: (value: number, from: number, to: number) => (value * from) / to
  },

  area: {
    units: {
      "বর্গমিটার m²": 1,
      "বর্গকিলোমিটার km²": 1e6,
      "বর্গসেন্টিমিটার cm²": 1e-4,
      "হেক্টর hectare": 1e4,
      "একর acre": 4046.86,
      "বিঘা bigha": 1337.8,
      "কাঠা katha": 66.89
    },
    convert: (value: number, from: number, to: number) => (value * from) / to
  },

  pressure: {
    units: {
      "প্যাসকেল Pascal (Pa)": 1,
      "কিলোপ্যাসকেল Kilopascal (kPa)": 1000,
      "বার bar": 100000,
      "অ্যাটমস্ফিয়ার atm": 101325,
      "পাউন্ড প্রতি বর্গইঞ্চি psi": 6894.76
    },
    convert: (value: number, from: number, to: number) => (value * from) / to
  },

  energy: {
    units: {
      "জুল (Joule)": 1,
      "কিলোজুল (Kilojoule)": 1000,
      "ক্যালরি (Calorie)": 4.184,
      "কিলোক্যালরি (Kilocalorie)": 4184,
      "ওয়াট-ঘণ্টা (Watt-hour)": 3600,
      "কিলোওয়াট-ঘণ্টা (Kilowatt-hour)": 3600000
    },
    convert: (value: number, from: number, to: number) => (value * from) / to
  },

  power: {
    units: {
      "ওয়াট (Watt)": 1,
      "কিলোওয়াট (Kilowatt)": 1000,
      "হর্সপাওয়ার (horsepower)": 745.7,
      "মেগাওয়াট (Megawatt)": 1000000
    },
    convert: (value: number, from: number, to: number) => (value * from) / to
  },

  frequency: {
    units: {
      "হার্জ (Hertz)": 1,
      "কিলোহার্জ (KiloHertz)": 1000,
      "মেগাহার্জ (MegaHertz)": 1e6,
      "গিগাহার্জ (GigaHertz)": 1e9
    },
    convert: (value: number, from: number, to: number) => (value * from) / to
  },

  angle: {
    units: {
      "ডিগ্রি (Degree)": 1,
      "রেডিয়ান (Radian)": 57.2958,
      "গ্রেডিয়ান (Gradian)": 0.9,
      "মিনিট (Minute)": 1 / 60,
      "সেকেন্ড (Second)": 1 / 3600
    },
    convert: (value: number, from: number, to: number) => (value * from) / to
  },

  bit: {
    units: {
      "বিট (Bit)": 1,
      "বাইট (Byte)": 8,
      "কিলোবাইট (KB)": 1024,
      "মেগাবাইট (MB)": 1024 * 1024,
      "গিগাবাইট (GB)": 1024 * 1024 * 1024,
      "টেরাবাইট (TB)": 1024 * 1024 * 1024 * 1024
    },
    convert: (value: number, from: number, to: number) => (value * from) / to
  }
};
