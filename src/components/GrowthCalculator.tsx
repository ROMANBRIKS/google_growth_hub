import { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, Zap, DollarSign } from 'lucide-react';

export default function GrowthCalculator() {
  const [teamSize, setTeamSize] = useState(10);
  const [currentEfficiency, setCurrentEfficiency] = useState(60);

  const estimatedSavings = Math.round(teamSize * 1500 * (1 - currentEfficiency / 100));
  const efficiencyBoost = Math.round((100 - currentEfficiency) * 0.4);

  return (
    <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 google-shadow">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold mb-2">Growth Potential Calculator</h3>
        <p className="text-gray-500">See how much you can save by optimizing with Google Workspace & Cloud.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-4">
              <label className="font-medium text-gray-700">Team Size</label>
              <span className="text-google-blue font-bold">{teamSize} members</span>
            </div>
            <input
              type="range"
              min="1"
              max="500"
              value={teamSize}
              onChange={(e) => setTeamSize(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-google-blue"
            />
          </div>

          <div>
            <div className="flex justify-between mb-4">
              <label className="font-medium text-gray-700">Current Digital Efficiency</label>
              <span className="text-google-green font-bold">{currentEfficiency}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="95"
              value={currentEfficiency}
              onChange={(e) => setCurrentEfficiency(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-google-green"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            key={estimatedSavings}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-blue-50 p-6 rounded-2xl border border-blue-100"
          >
            <DollarSign className="text-google-blue w-6 h-6 mb-3" />
            <div className="text-2xl font-bold text-google-blue">${estimatedSavings.toLocaleString()}</div>
            <div className="text-xs text-blue-600 font-medium uppercase tracking-wider">Est. Annual Savings</div>
          </motion.div>

          <motion.div
            key={efficiencyBoost}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-green-50 p-6 rounded-2xl border border-green-100"
          >
            <TrendingUp className="text-google-green w-6 h-6 mb-3" />
            <div className="text-2xl font-bold text-google-green">+{efficiencyBoost}%</div>
            <div className="text-xs text-green-600 font-medium uppercase tracking-wider">Efficiency Boost</div>
          </motion.div>

          <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <Zap className="text-google-red w-6 h-6 mb-3" />
            <div className="text-2xl font-bold text-google-red">2.4x</div>
            <div className="text-xs text-red-600 font-medium uppercase tracking-wider">Faster Deployment</div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
            <Users className="text-google-yellow w-6 h-6 mb-3" />
            <div className="text-2xl font-bold text-google-yellow">100%</div>
            <div className="text-xs text-yellow-600 font-medium uppercase tracking-wider">Cloud Native</div>
          </div>
        </div>
      </div>
    </div>
  );
}
