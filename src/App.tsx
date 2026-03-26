import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layout, 
  Cloud, 
  Play, 
  Menu, 
  X, 
  ChevronRight, 
  MessageSquare, 
  Search, 
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  Zap,
  Users,
  BarChart3
} from 'lucide-react';
import { cn } from './lib/utils';
import { SERVICES, BLOG_POSTS, QUIZ_QUESTIONS } from './constants';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import Blog from './pages/Blog';
import Quiz from './pages/Quiz';
import Chatbot from './components/Chatbot';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Workspace', path: '/workspace', icon: Layout },
    { name: 'Cloud', path: '/cloud', icon: Cloud },
    { name: 'Play', path: '/play', icon: Play },
    { name: 'Blog', path: '/blog', icon: BookOpen },
    { name: 'Quiz', path: '/quiz', icon: Zap },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center google-shadow group-hover:google-shadow-hover transition-all overflow-hidden">
              <img 
                src="https://www.gstatic.com/images/branding/product/2x/googleg_clr_24dp.png" 
                alt="Google" 
                className="w-6 h-6 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-900">Growth Hub</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-bold transition-all",
                  location.pathname === link.path 
                    ? "bg-blue-50 text-google-blue" 
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="w-px h-6 bg-gray-200 mx-4" />
            <Link
              to="/quiz"
              className="bg-google-blue text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all google-shadow hover:google-shadow-hover"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 text-gray-700"
                >
                  <link.icon className={cn(
                    "w-5 h-5",
                    index === 0 ? "text-google-blue" :
                    index === 1 ? "text-google-red" :
                    index === 2 ? "text-google-green" :
                    index === 3 ? "text-google-yellow" :
                    "text-google-blue"
                  )} />
                  <span className="font-medium">{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img 
                src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" 
                alt="Google" 
                className="h-6"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-bold tracking-tight text-gray-900">Growth Hub</span>
            </Link>
            <p className="text-gray-600 max-w-sm font-medium">
              Your comprehensive guide to scaling your business with Google's powerful ecosystem. 
              From productivity to cloud infrastructure and global distribution.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/workspace" className="hover:text-blue-600">Google Workspace</Link></li>
              <li><Link to="/cloud" className="hover:text-blue-600">Google Cloud</Link></li>
              <li><Link to="/play" className="hover:text-blue-600">Google Play</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><Link to="/quiz" className="hover:text-blue-600">Product Quiz</Link></li>
              <li><a href="#" className="hover:text-blue-600">Tutorials</a></li>
            </ul>
          </div>
        </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium">
            <div className="flex items-center space-x-4">
              <img 
                src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" 
                alt="Google" 
                className="h-4 opacity-50"
                referrerPolicy="no-referrer"
              />
              <p>© 2026 Google Growth Hub. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900">Terms of Service</a>
            </div>
          </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-gray-900">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workspace" element={<ServicePage serviceId="workspace" />} />
            <Route path="/cloud" element={<ServicePage serviceId="cloud" />} />
            <Route path="/play" element={<ServicePage serviceId="play" />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}
