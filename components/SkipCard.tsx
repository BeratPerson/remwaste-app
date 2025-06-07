import { Skip } from '../types';
import { motion } from 'framer-motion';
import { TruckIcon, ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { getTotalPrice } from '@/utils/price';

interface SkipCardProps {
  skip: Skip;
  selected: boolean;
  onSelect: () => void;
}

const getSkipName = (size: number) => {
  return `${size} Yard Skip`;
};

export const SkipCard = ({ skip, selected, onSelect }: SkipCardProps) => {
  const imageUrl = 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg';
  
  return (
    <motion.button
      onClick={onSelect}
      disabled={skip.forbidden}
      className={`
        w-full text-left transition-all duration-200
        border-2 rounded-2xl p-6 shadow-md bg-white/90 dark:bg-gray-900/80
        hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500
        dark:focus:ring-offset-gray-800
        ${selected 
          ? 'border-[var(--primary)] ring-2 ring-[var(--primary)] scale-105 shadow-xl' 
          : 'border-gray-200 dark:border-gray-700 hover:border-[var(--primary)]'
        }
        ${skip.forbidden ? 'opacity-50 cursor-not-allowed' : ''}
      `}
      aria-pressed={selected}
      aria-label={`Select ${getSkipName(skip.size)}`}
      whileHover={{ scale: skip.forbidden ? 1 : 1.03 }}
      whileTap={{ scale: skip.forbidden ? 1 : 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative aspect-video mb-4 bg-gradient-to-br from-blue-100 via-cyan-100 to-gray-100 dark:from-blue-900/30 dark:via-cyan-900/20 dark:to-gray-800 rounded-xl overflow-hidden flex items-center justify-center">
        <img src={imageUrl} alt={`${skip.size} yard skip`} className="w-full h-full" />
        <span className="absolute top-2 right-2 bg-blue-900/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow">{skip.size} Yards</span>
        {selected && (
          <CheckCircleIcon className="absolute bottom-2 right-2 w-7 h-7 text-[var(--primary)] bg-white rounded-full shadow" />
        )}
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          {getSkipName(skip.size)}
        </h3>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-[var(--secondary)] dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
            <TruckIcon className="w-4 h-4 text-[var(--primary)]" />
            {skip.hire_period_days} days hire
          </span>
          {skip.allowed_on_road && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full">
              <CheckCircleIcon className="w-4 h-4" /> Road Legal
            </span>
          )}
          {skip.allows_heavy_waste && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400 rounded-full">
              <ExclamationTriangleIcon className="w-4 h-4" /> Heavy Waste
            </span>
          )}
        </div>
        <div className="flex items-center justify-between mt-3">
          <div>
            <span className="text-2xl font-extrabold text-[var(--primary)]">
              £{getTotalPrice(skip).toLocaleString()}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">inc. VAT</span>
          </div>
          {skip.transport_cost && (
            <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded-full">
              <TruckIcon className="w-4 h-4 text-cyan-500" /> +£{skip.transport_cost} delivery
            </span>
          )}
        </div>
        {skip.forbidden && (
          <p className="text-xs text-red-600 dark:text-red-400 mt-2 flex items-center gap-1">
            <ExclamationTriangleIcon className="w-4 h-4" /> Not available in your area
          </p>
        )}
      </div>
    </motion.button>
  );
}; 