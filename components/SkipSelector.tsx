"use client";

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { fetchSkips } from '@/store/skipsSlice';
import { selectSkip } from '@/store/selectionSlice';
import { SkipCard } from "@/components/SkipCard";
import { SkipCardSkeleton } from "@/components/SkipCardSkeleton";
import { SparklesIcon } from '@heroicons/react/24/solid';
import { getTotalPrice } from '@/utils/price';

export function SkipSelector() {  
  const dispatch = useDispatch<AppDispatch>();
  const { skips, loading } = useSelector((state: RootState) => state.skips);
  const selectedSkip = useSelector((state: RootState) => state.selection.selectedSkip);

  useEffect(() => {
    dispatch(fetchSkips());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-[var(--background)] transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 py-10 pb-40">
        <header className="mb-10 flex items-center gap-6 ">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--primary)] text-white shadow-lg">
            <SparklesIcon className="w-7 h-7" />
          </span>
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-1 tracking-tight">
              Choose Your Skip Size
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Select the skip size that best suits your needs
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <SkipCardSkeleton key={index} />
            ))
          ) : (
            skips.map((skip) => (
              <SkipCard
                key={skip.id}
                skip={skip}
                selected={selectedSkip?.id === skip.id}
                onSelect={() => dispatch(selectSkip(skip))}
              />
            ))
          )}
        </div>

        {selectedSkip && (
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-700 p-6 shadow-2xl backdrop-blur-md transition-colors duration-200">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--primary)] text-white">
                  <SparklesIcon className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    {selectedSkip.size} Yard Skip
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {selectedSkip.hire_period_days} days hire
                    {selectedSkip.transport_cost && ` • £${selectedSkip.transport_cost} delivery`}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-[var(--primary)]">
                    £{getTotalPrice(selectedSkip).toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 block">
                    Total inc. VAT & delivery
                  </span>
                </div>
                <button
                  className="bg-[var(--primary)] text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors duration-200"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 