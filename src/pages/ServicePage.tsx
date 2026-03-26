import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ExternalLink, Play, ArrowLeft, Info } from 'lucide-react';
import { SERVICES } from '../constants';
import { cn } from '../lib/utils';

interface ServicePageProps {
  serviceId?: string;
}

export default function ServicePage({ serviceId: propId }: ServicePageProps) {
  const { serviceId: paramId } = useParams();
  const id = propId || paramId;
  const service = SERVICES.find(s => s.id === id);

  if (!service) return <div>Service not found</div>;

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-google-blue mb-12 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Solutions
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className={cn(
                "inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-sm font-bold mb-8 border",
                service.id === 'workspace' ? "bg-blue-50 text-google-blue border-blue-100" :
                service.id === 'cloud' ? "bg-red-50 text-google-red border-red-100" : "bg-green-50 text-google-green border-green-100"
              )}>
                <Info className="w-4 h-4" />
                <span>Google {service.title} Solution</span>
              </div>
              <div className="flex items-center space-x-4 mb-8">
                <img 
                  src="https://www.gstatic.com/images/branding/product/2x/googleg_clr_24dp.png" 
                  alt="G" 
                  className="w-10 h-10"
                  referrerPolicy="no-referrer"
                />
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">{service.title}</h1>
              </div>
              <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium max-w-xl">
                {service.description}
              </p>
              <a
                href={service.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "px-10 py-5 rounded-full text-lg font-bold transition-all inline-flex items-center google-shadow hover:google-shadow-hover",
                  service.id === 'workspace' ? "bg-google-blue text-white hover:bg-blue-600" :
                  service.id === 'cloud' ? "bg-google-red text-white hover:bg-red-600" : "bg-google-green text-white hover:bg-green-600"
                )}
              >
                Get Started
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </div>
            <div className="aspect-video bg-gray-900 rounded-[2.5rem] overflow-hidden google-shadow-hover relative group">
              <iframe
                src={service.videoUrl}
                title={service.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-12 tracking-tight">Capabilities</h2>
            <div className="grid grid-cols-1 gap-6">
              {service.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start p-8 bg-white border border-gray-100 rounded-[2rem] google-shadow hover:google-shadow-hover transition-all"
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mr-6 shrink-0",
                    service.id === 'workspace' ? "bg-blue-50 text-google-blue" :
                    service.id === 'cloud' ? "bg-red-50 text-google-red" : "bg-green-50 text-google-green"
                  )}>
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{feature}</h3>
                    <p className="text-sm text-gray-500 font-medium">Enterprise-grade infrastructure designed for modern business growth.</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className={cn(
            "rounded-[3rem] p-12 text-white google-shadow flex flex-col justify-between",
            service.id === 'workspace' ? "bg-google-blue" :
            service.id === 'cloud' ? "bg-google-red" : "bg-google-green"
          )}>
            <div>
              <div className="text-8xl font-serif italic opacity-30 mb-4">"</div>
              <p className="text-2xl leading-relaxed italic font-medium mb-12">
                "Switching to {service.title} was the single best decision for our scaling strategy. 
                We saw a 40% increase in team efficiency within the first three months."
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl overflow-hidden border border-white/20">
                <img src="https://picsum.photos/seed/person/100/100" alt="CEO" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="font-bold text-xl">Jane Doe</div>
                <div className="text-white/70 font-medium">CEO, TechFlow Systems</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-gray-50 rounded-[3rem] border border-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">The Ecosystem Advantage</h2>
          <p className="text-gray-500 font-medium">How {service.title} works with other Google services.</p>
        </div>
        <div className="overflow-x-auto px-8">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-6 px-6 font-bold text-gray-900 uppercase tracking-widest text-xs">Feature</th>
                <th className="py-6 px-6 font-bold text-gray-900 uppercase tracking-widest text-xs">Workspace</th>
                <th className="py-6 px-6 font-bold text-gray-900 uppercase tracking-widest text-xs">Cloud</th>
                <th className="py-6 px-6 font-bold text-gray-900 uppercase tracking-widest text-xs">Play</th>
              </tr>
            </thead>
            <tbody>
              {service.comparison.map((row, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-white transition-colors">
                  <td className="py-8 px-6 font-bold text-gray-900">{row.feature}</td>
                  <td className={cn("py-8 px-6 text-sm font-medium", service.id === 'workspace' ? "text-google-blue bg-blue-50/50" : "text-gray-500")}>{row.workspace}</td>
                  <td className={cn("py-8 px-6 text-sm font-medium", service.id === 'cloud' ? "text-google-red bg-red-50/50" : "text-gray-500")}>{row.cloud}</td>
                  <td className={cn("py-8 px-6 text-sm font-medium", service.id === 'play' ? "text-google-green bg-green-50/50" : "text-gray-500")}>{row.play}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
