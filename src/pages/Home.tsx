import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Users, 
  BarChart3, 
  Cloud, 
  Layout, 
  Play,
  ChevronRight,
  Globe,
  ShieldCheck,
  Cpu,
  Smartphone,
  Search
} from 'lucide-react';
import { cn } from '../lib/utils';
import { SERVICES, BLOG_POSTS } from '../constants';
import GrowthCalculator from '../components/GrowthCalculator';
import AdSpace from '../components/AdSpace';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <SEO 
        title="Google Growth Hub | Scale Your Business with Google Ecosystem"
        description="Harness the power of Google's infrastructure to transform your business from a startup to a global enterprise. Explore Google Workspace, Cloud, and Play Store solutions."
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Google Growth Hub",
          "url": "https://ais-pre-2fapiawaicpfo532ptsxsh-465217709442.europe-west2.run.app",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ais-pre-2fapiawaicpfo532ptsxsh-465217709442.europe-west2.run.app/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-visible">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-3 bg-white text-google-blue px-6 py-2 rounded-full text-sm font-bold mb-10 google-shadow border border-gray-100">
              <img 
                src="https://www.gstatic.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" 
                alt="G" 
                className="w-5 h-5"
                referrerPolicy="no-referrer"
              />
              <span>The Google Growth Framework</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tight text-gray-900 leading-[0.9] mb-10">
              Build for <span className="text-google-blue">Everyone</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
              Harness the power of Google's infrastructure to transform your business from a startup to a global enterprise.
            </p>

            {/* Google-style Search Bar */}
            <div className="max-w-2xl mx-auto mb-16 relative group">
              <div className="absolute inset-0 bg-google-blue/5 blur-3xl rounded-full group-hover:bg-google-blue/10 transition-all duration-500"></div>
              <div className="relative flex items-center bg-white rounded-full p-2 google-shadow hover:google-shadow-hover transition-all duration-300 border border-gray-100">
                <div className="pl-6 pr-4 flex items-center">
                  <img 
                    src="https://www.gstatic.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" 
                    alt="G" 
                    className="w-6 h-6 mr-3"
                    referrerPolicy="no-referrer"
                  />
                  <Search className="w-6 h-6 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="How can Google help your business grow?" 
                  className="flex-1 bg-transparent py-4 text-lg focus:outline-none font-medium placeholder:text-gray-400"
                />
                <button className="bg-google-blue text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors google-shadow">
                  Search
                </button>
              </div>
              <div className="mt-6 flex justify-center gap-6 text-sm text-gray-400 font-bold uppercase tracking-widest">
                <span>Trending:</span>
                <button className="hover:text-google-blue transition-colors">Workspace AI</button>
                <button className="hover:text-google-blue transition-colors">Cloud Migration</button>
                <button className="hover:text-google-blue transition-colors">Play Store SEO</button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/quiz"
                className="w-full sm:w-auto bg-google-blue text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center group google-shadow hover:google-shadow-hover"
              >
                Get Started
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/workspace"
                className="w-full sm:w-auto bg-white border border-gray-100 text-gray-900 px-12 py-6 rounded-full text-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center google-shadow hover:google-shadow-hover"
              >
                View Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Google?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              The same infrastructure that powers Search, YouTube, and Gmail is available for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
            <div className="md:col-span-2 bg-white p-10 rounded-[2.5rem] border border-gray-100 google-shadow flex flex-col justify-between group hover:google-shadow-hover transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Globe className="text-google-blue w-10 h-10" />
                  <img 
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                    alt="Google" 
                    className="h-5 opacity-30 group-hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Global Network</h3>
                <p className="text-gray-500 max-w-md">Low-latency access to users worldwide through Google's private fiber network.</p>
              </div>
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/40/40`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-google-blue flex items-center justify-center text-white text-xs font-bold">+3B</div>
              </div>
            </div>
            
            <div className="bg-google-blue p-10 rounded-[2.5rem] text-white flex flex-col justify-between google-shadow">
              <ShieldCheck className="w-10 h-10" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Security</h3>
                <p className="text-blue-100 text-sm">Advanced threat protection and data encryption by default.</p>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 google-shadow flex flex-col justify-center items-center text-center group hover:google-shadow-hover transition-all">
              <Cpu className="text-google-red w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold">Vertex AI</h3>
              <p className="text-gray-500 text-sm mt-2">Next-gen machine learning tools.</p>
            </div>
            
            <div className="md:col-span-2 bg-white p-10 rounded-[2.5rem] border border-gray-100 google-shadow flex items-center gap-8 group hover:google-shadow-hover transition-all">
              <div className="shrink-0 w-24 h-24 bg-green-50 rounded-3xl flex items-center justify-center">
                <img 
                  src="https://www.gstatic.com/images/branding/product/2x/play_96dp.png" 
                  alt="Google Play" 
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Mobile First</h3>
                <p className="text-gray-500">Optimized distribution for Android and iOS through Google Play and Firebase.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSpace type="inline" />
      </div>

      {/* Interactive Growth Calculator */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <GrowthCalculator />
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Solutions</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Tailored services designed to work together seamlessly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 google-shadow hover:google-shadow-hover transition-all group"
              >
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110",
                  service.id === 'workspace' ? "bg-blue-50" :
                  service.id === 'cloud' ? "bg-red-50" : "bg-green-50"
                )}>
                  <img 
                    src={service.logoUrl} 
                    alt={service.title} 
                    className="w-10 h-10 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 mb-8 line-clamp-3 font-medium leading-relaxed">{service.description}</p>
                <Link
                  to={`/${service.id}`}
                  className={cn(
                    "inline-flex items-center font-bold transition-all group/link",
                    service.id === 'workspace' ? "text-google-blue" :
                    service.id === 'cloud' ? "text-google-red" : "text-google-green"
                  )}
                >
                  Explore {service.title}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSpace type="inline" label="Recommended for You" />
      </div>

      {/* Blog Teaser */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
              <p className="text-gray-500 font-medium">Expert advice on productivity and growth.</p>
            </div>
            <Link to="/blog" className="text-google-blue font-bold hover:underline hidden sm:block">
              View all posts
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link key={post.id} to={`/blog`} className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 google-shadow hover:google-shadow-hover transition-all">
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${post.id}/600/400`} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold text-google-blue uppercase tracking-widest mb-3">{post.category}</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-google-blue transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 font-medium">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-google-blue rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden google-shadow">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 relative z-10 tracking-tight">
            Ready to Accelerate?
          </h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto relative z-10 font-medium">
            Take our 2-minute quiz to find the perfect Google solutions for your unique business needs.
          </p>
          <Link
            to="/quiz"
            className="inline-flex bg-white text-google-blue px-12 py-6 rounded-full text-xl font-bold hover:bg-blue-50 transition-all relative z-10 google-shadow"
          >
            Take the Quiz
          </Link>
        </div>
      </section>
    </div>
  );
}
