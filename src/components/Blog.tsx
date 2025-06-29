import { useState } from 'react';
import { Search, Calendar, Tag, Eye, Plus, Edit, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogProps {
  language: 'en' | 'bn';
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  tags: string[];
  views: number;
  status: 'published' | 'draft';
  featured: boolean;
}

const Blog = ({ language }: BlogProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [blogPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: language === 'en' ? 'Getting Started with React 18' : 'React 18 দিয়ে শুরু করা',
      excerpt: language === 'en' 
        ? 'Learn about the new features and improvements in React 18, including concurrent rendering and automatic batching.'
        : 'React 18 এর নতুন ফিচার এবং উন্নতি সম্পর্কে জানুন, যার মধ্যে রয়েছে concurrent rendering এবং automatic batching।',
      date: '2024-03-10',
      tags: ['React', 'JavaScript', 'Frontend'],
      views: 1250,
      status: 'published',
      featured: true
    },
    {
      id: '2',
      title: language === 'en' ? 'Building Scalable APIs with Node.js' : 'Node.js দিয়ে স্কেলেবল API তৈরি',
      excerpt: language === 'en'
        ? 'Best practices for creating robust and scalable REST APIs using Node.js and Express.'
        : 'Node.js এবং Express ব্যবহার করে দৃঢ় এবং স্কেলেবল REST API তৈরির সেরা অনুশীলন।',
      date: '2024-02-25',
      tags: ['Node.js', 'API', 'Backend'],
      views: 890,
      status: 'published',
      featured: false
    },
    {
      id: '3',
      title: language === 'en' ? 'CSS Grid vs Flexbox: When to Use What' : 'CSS Grid বনাম Flexbox: কখন কী ব্যবহার করবেন',
      excerpt: language === 'en'
        ? 'A comprehensive guide to understanding the differences between CSS Grid and Flexbox.'
        : 'CSS Grid এবং Flexbox এর মধ্যে পার্থক্য বোঝার জন্য একটি বিস্তৃত গাইড।',
      date: '2024-01-30',
      tags: ['CSS', 'Layout', 'Design'],
      views: 650,
      status: 'draft',
      featured: false
    }
  ]);

  const content = {
    en: {
      title: 'Blog',
      subtitle: 'Thoughts, tutorials, and insights on web development',
      searchPlaceholder: 'Search blog posts...',
      addNew: 'Write New Post',
      filterByTag: 'Filter by tag',
      allTags: 'All Tags',
      featured: 'Featured',
      views: 'views',
      readMore: 'Read More',
      status: {
        published: 'Published',
        draft: 'Draft'
      },
      noResults: 'No blog posts found matching your search.'
    },
    bn: {
      title: 'ব্লগ',
      subtitle: 'ওয়েব ডেভেলপমেন্ট নিয়ে চিন্তাভাবনা, টিউটোরিয়াল এবং অন্তর্দৃষ্টি',
      searchPlaceholder: 'ব্লগ পোস্ট খুঁজুন...',
      addNew: 'নতুন পোস্ট লিখুন',
      filterByTag: 'ট্যাগ অনুযায়ী ফিল্টার করুন',
      allTags: 'সকল ট্যাগ',
      featured: 'বৈশিষ্ট্যযুক্ত',
      views: 'ভিউ',
      readMore: 'আরো পড়ুন',
      status: {
        published: 'প্রকাশিত',
        draft: 'খসড়া'
      },
      noResults: 'আপনার অনুসন্ধানের সাথে মিলে এমন কোনো ব্লগ পোস্ট পাওয়া যায়নি।'
    }
  };

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const getStatusColor = (status: string) => {
    return status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
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
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">{content[language].allTags}</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>

              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <Plus size={20} />
                {content[language].addNew}
              </button>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${
                    post.featured ? 'ring-2 ring-indigo-200' : ''
                  }`}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                          {content[language].status[post.status]}
                        </span>
                        {post.featured && (
                          <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                            {content[language].featured}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <button className="text-gray-400 hover:text-blue-600 transition-colors">
                          <Edit size={16} />
                        </button>
                        <button className="text-gray-400 hover:text-red-600 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map(tag => (
                        <span 
                          key={tag}
                          className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                        >
                          <Tag size={12} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye size={14} />
                        <span>{post.views} {content[language].views}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors">
                        {content[language].readMore} →
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
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

export default Blog;
