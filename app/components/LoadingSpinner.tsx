'use client';

interface LoadingSpinnerProps {
  variant?: 'default';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export function LoadingSpinner({ 
  variant = 'default', 
  size = 'md',
  text = 'Loading...'
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <div className={`${sizeClasses[size]} animate-spin`}>
        <div className="w-full h-full border-4 border-surface border-t-accent rounded-full"></div>
      </div>
      {text && (
        <p className="text-textSecondary text-sm animate-pulse">{text}</p>
      )}
    </div>
  );
}

export function TokenCardSkeleton() {
  return (
    <div className="metric-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-700 rounded-full loading-shimmer"></div>
          <div className="space-y-2">
            <div className="h-4 w-16 bg-gray-700 rounded loading-shimmer"></div>
            <div className="h-3 w-24 bg-gray-700 rounded loading-shimmer"></div>
          </div>
        </div>
        <div className="text-right space-y-2">
          <div className="h-5 w-20 bg-gray-700 rounded loading-shimmer"></div>
          <div className="h-4 w-16 bg-gray-700 rounded loading-shimmer"></div>
        </div>
      </div>
    </div>
  );
}
