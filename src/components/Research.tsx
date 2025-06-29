import { useState } from 'react';
import { Search, Calendar, ExternalLink, Plus, Edit, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResearchProps {
  language: 'en' | 'bn';
}

interface ResearchItem {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  status: 'published' | 'draft' | 'in-review';
  link?: string;
}

const Research = ({ language }: ResearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [researchItems] = useState<ResearchItem[]>([
    {
      id: '1',
      title: language === 'en' ? 'Machine Learning in Web Development' : 'ওয়েব ডেভেলপমেন্টে মেশিন লার্নিং',
      description: language === 'en' 
        ? 'Exploring the integration of AI and ML algorithms in modern web applications'
        : 'আধুনিক ওয়েব অ্যাপ্লিকেশনে AI এবং ML অ্যালগরিদমের ইন্টিগ্রেশনের গবেষণা',
      date: '2024-01-15',
      category: 'AI/ML',
      status: 'published',
      link: '#'
    },
    {
      id: '2',
      title: language === 'en' ? 'Sustainable Software Architecture' : 'টেকসই সফটওয়্যার আর্কিটেকচার',
      description: language === 'en'
        ? 'Research on building environmentally friendly and efficient software systems'
        : 'পরিবেশবান্ধব এবং দক্ষ সফটওয়্যার সিস্টেম তৈরির গবেষণা',
      date: '2024-02-20',
      category: 'Software Engineering',
      status: 'in-review'
    }
  ]);

  const content = {
    en: {
      title: 'Research',
      subtitle: 'My academic research and technical investigations',
      searchPlaceholder: 'Search research...',
      addNew: 'Add New Research',
      categories: ['All', 'AI/ML', 'Software Engineering', 'Web Development', 'Data Science'],
      status: {
        published: 'Published',
        draft: 'Draft',
        'in-review': 'In Review'
      },
      noResults: 'No research found matching your search.',
      readMore: 'Read More'
    },
    bn: {
      title: 'গবেষণা',
      subtitle: 'আমার একাডেমিক গবেষণা এবং প্রযুক্তিগত অনুসন্ধান',
      searchPlaceholder: 'গবেষণা খুঁজুন...',
      addNew: 'নতুন গবেষণা যোগ করুন',
      categories: ['সকল', 'AI/ML', 'সফটওয়্যার ইঞ্জিনিয়ারিং', 'ওয়েব ডেভেলপমেন্ট', 'ডেটা সায়েন্স'],
      status: {
        published: 'প্রকাশিত',
        draft: 'খসড়া',
        'in-review': 'পর্যালোচনায়'
      },
      noResults: 'আপনার অনুসন্ধানের সাথে মিলে এমন কোনো গবেষণা পাওয়া যায়নি।',
      readMore: 'আরো পড়ুন'
    }
  };

  const filteredResearch = researchItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           selectedCategory.toLowerCase() === 'সকল' ||
                           item.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'in-review': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <section className="premium-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {content[language].title}
              </h1>
              <p className="text-gray-600">
                {content[language].subtitle}
              </p>
            </div>

            {/* Search and Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder={content[language].searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                {content[language].categories.map((category, index) => (
                  <option key={index} value={index === 0 ? 'all' : category}>
                    {category}
                  </option>
                ))}
              </select>

              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <Plus size={20} />
                {content[language].addNew}
              </button>
            </div>

            {/* Research Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResearch.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                        {content[language].status[item.status]}
                      </span>
                      <div className="flex gap-2">
                        <button className="text-gray-400 hover:text-blue-600 transition-colors">
                          <Edit size={16} />
                        </button>
                        <button className="text-gray-400 hover:text-red-600 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                        {item.category}
                      </span>
                    </div>

                    {item.link && (
                      <a
                        href={item.link}
                        className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors"
                      >
                        {content[language].readMore}
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredResearch.length === 0 && (
              <div className="text-center py-12">
                <Search size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600">{content[language].noResults}</p>
              </div>
            )}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Research;
