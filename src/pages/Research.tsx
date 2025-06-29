
import { useState } from 'react';
import { Element } from 'react-scroll';
import { BookOpen, Plus, Trash2, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResearchPost {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
}

const Research = () => {
  const [posts, setPosts] = useState<ResearchPost[]>([
    {
      id: '1',
      title: 'Machine Learning in Web Development',
      content: 'This research explores the integration of machine learning algorithms in modern web applications...',
      date: '2024-01-15',
      author: 'Md Ridoan Mahmud Zisan',
      category: 'Technology'
    }
  ]);
  const [isAdding, setIsAdding] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: ''
  });

  const handleAddPost = () => {
    if (newPost.title && newPost.content) {
      const post: ResearchPost = {
        id: Date.now().toString(),
        title: newPost.title,
        content: newPost.content,
        date: new Date().toISOString().split('T')[0],
        author: 'Md Ridoan Mahmud Zisan',
        category: newPost.category || 'General'
      };
      setPosts([post, ...posts]);
      setNewPost({ title: '', content: '', category: '' });
      setIsAdding(false);
    }
  };

  const handleDeletePost = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <Element name="research">
      <div className="min-h-screen bg-slate-50 pt-20">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4"
              >
                <BookOpen className="w-8 h-8 text-blue-600" />
              </motion.div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Research</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore my research work and academic contributions in technology and development
              </p>
            </div>

            {/* Add New Post Button */}
            <div className="mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsAdding(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <Plus size={20} />
                Add New Research
              </motion.button>
            </div>

            {/* Add Post Form */}
            {isAdding && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-lg p-6 mb-8"
              >
                <h3 className="text-xl font-semibold mb-4">Add New Research</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Research Title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Category"
                    value={newPost.category}
                    onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <textarea
                    placeholder="Research Content"
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="flex gap-4">
                    <button
                      onClick={handleAddPost}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Publish
                    </button>
                    <button
                      onClick={() => setIsAdding(false)}
                      className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Research Posts */}
            <div className="space-y-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                          {post.category}
                        </span>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <User size={16} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{post.content}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            {posts.length === 0 && !isAdding && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No research posts yet. Start by adding your first research!</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default Research;
