export const SkipCardSkeleton = () => {
  return (
    <div className="w-full border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-md bg-white/80 dark:bg-gray-900/70 animate-pulse">
      <div className="aspect-video bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl mb-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_1.5s_infinite]" style={{backgroundSize:'200% 100%'}} />
      </div>
      <div className="space-y-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
        <div className="flex gap-2">
          <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-24"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-24"></div>
        </div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
        <div className="flex justify-between items-center mt-4">
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-24"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-16"></div>
        </div>
      </div>
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}; 