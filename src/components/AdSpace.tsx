import React from 'react';
import { cn } from '../lib/utils';

interface AdSpaceProps {
  type: 'banner' | 'sidebar' | 'inline' | 'footer';
  className?: string;
  label?: string;
}

export default function AdSpace({ type, className, label = "Advertisement" }: AdSpaceProps) {
  const baseStyles = "relative bg-gray-50 border border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center overflow-hidden transition-all hover:bg-gray-100 group";
  
  const typeStyles = {
    banner: "w-full h-32 md:h-40 my-8",
    sidebar: "w-full h-64 md:h-96",
    inline: "w-full h-48 md:h-64 my-12",
    footer: "w-full h-24 md:h-32 mt-12 mb-8",
  };

  return (
    <div className={cn(baseStyles, typeStyles[type], className)} id={`ad-space-${type}`}>
      <div className="absolute top-2 left-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
        {label}
      </div>
      
      <div className="flex flex-col items-center gap-3 opacity-40 group-hover:opacity-60 transition-opacity">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <span className="text-sm font-medium text-gray-500">Ad Space ({type})</span>
      </div>
      
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-400" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-400" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gray-400" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-400" />
    </div>
  );
}
