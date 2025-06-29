
import { useState } from 'react';
import { Element } from 'react-scroll';
import { PenTool, Plus, Trash2, Calendar, User, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'My Journey in Web Development',
      content: 'Starting my journey as a web developer has been an incredible experience. From learning HTML and CSS to mastering React and TypeScript...',
      date: '2024-01-20',
      author: 'Md Ridoan Mahmud Zisan',
      tags: ['Web Development', 'Personal', 'Journey']
    }
  ]);
  const [isAdding, setIsAdding] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    tags: ''
  });

  const handleAddPost = () => {
    if (newPost.title && newPost.content) {
      const post: BlogPost = {
        id: Date.now().toString(),
        title: newPost.title,
        content: newPost.content,
        date: new Date().toISOString().split('T')[0],
        author: 'Md Ridoan Mahmud Zisan',
        tags: newPost.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      };
      setPosts([post, ...posts]);
      setNewPost({ title: '', content: '', tags: '' });
      setIsAdding(false);
    }
  };

  const handleDeletePost = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <Element name="blog">
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
                className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4"
              >
                <PenTool className="w-8 h-8 text-purple-600" />
              </motion.div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Read my thoughts, experiences, and insights on technology, development, and life
              </p>
            </div>

            {/* Add New Post Button */}
            <div className="mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsAdding(true)}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-purple-700 transition-colors"
              >
                <Plus size={20} />
                Write New Post
              </motion.button>
            </div>

            {/* Add Post Form */}
            {isAdding && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-lg p-6 mb-8"
              >
                <h3 className="text-xl font-semibold mb-4">Write New Blog Post</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Blog Title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                  <input
                    type="text"
                    placeholder="Tags (comma separated)"
                    value={newPost.tags}
                    onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                  <textarea
                    placeholder="Write your blog content here..."
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    rows={8}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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

            {/* Blog Posts */}
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
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <User size={16} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <Tag size={16} className="text-gray-500" />
                          <div className="flex gap-2 flex-wrap">
                            {post.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))}
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
                <PenTool className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No blog posts yet. Start by writing your first post!</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default Blog;
