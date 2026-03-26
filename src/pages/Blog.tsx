import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-20">
        <div className="flex justify-center mb-6">
          <img 
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
            alt="Google" 
            className="h-10"
            referrerPolicy="no-referrer"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Growth Insights</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
          Deep dives into Google Workspace, Cloud, and Play to help you build better and scale faster.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Featured Post */}
        <div className="lg:col-span-2">
          <Link to="/blog" className="group block mb-16">
            <div className="aspect-[21/9] bg-gray-100 rounded-[3rem] overflow-hidden mb-10 google-shadow group-hover:google-shadow-hover transition-all">
              <img 
                src="https://picsum.photos/seed/featured/1200/600" 
                alt="Featured Post" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6 font-bold uppercase tracking-[0.2em]">
              <span className="text-google-blue">Featured Article</span>
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> March 24, 2026</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 group-hover:text-google-blue transition-colors tracking-tight">
              The Future of Enterprise Productivity: AI in Google Workspace
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed mb-8 font-medium">
              Artificial intelligence is transforming how we work. From automated meeting summaries to AI-generated code, 
              discover how Google is leading the charge in the next era of productivity.
            </p>
            <span className="inline-flex items-center font-bold text-google-blue group-hover:translate-x-2 transition-transform text-lg">
              Read Article <ArrowRight className="ml-2 w-6 h-6" />
            </span>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {BLOG_POSTS.map((post) => (
              <Link key={post.id} to="/blog" className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 google-shadow hover:google-shadow-hover transition-all">
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${post.id}/600/400`} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold text-google-blue uppercase tracking-[0.2em] mb-4">{post.category}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-google-blue transition-colors line-clamp-2 tracking-tight">{post.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 font-medium mb-6">{post.excerpt}</p>
                  <div className="flex items-center text-xs text-gray-400 font-bold uppercase tracking-widest">
                    <span className="mr-6">{post.date}</span>
                    <span>{post.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-12">
          <div className="bg-white p-10 rounded-[2.5rem] google-shadow border border-gray-100">
            <h3 className="text-xl font-bold mb-8 tracking-tight">Search Articles</h3>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Keywords..." 
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-google-blue focus:bg-white transition-all font-medium"
              />
            </div>
          </div>

          <div className="bg-google-blue p-10 rounded-[2.5rem] text-white google-shadow">
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Weekly Growth</h3>
            <p className="text-blue-100 mb-8 text-sm font-medium leading-relaxed">Get the latest Google growth strategies delivered to your inbox weekly.</p>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 transition-all font-medium"
              />
              <button className="w-full bg-white text-google-blue font-bold py-4 rounded-2xl hover:bg-blue-50 transition-colors google-shadow">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8 tracking-tight">Categories</h3>
            <div className="flex flex-wrap gap-3">
              {['Workspace', 'Cloud', 'Play', 'Productivity', 'Scaling', 'DevOps'].map((cat) => (
                <button key={cat} className="px-6 py-3 bg-white border border-gray-100 google-shadow hover:google-shadow-hover rounded-full text-sm font-bold text-gray-600 hover:text-google-blue transition-all">
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
