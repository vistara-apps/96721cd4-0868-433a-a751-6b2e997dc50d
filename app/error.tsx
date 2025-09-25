'use client';

import { AlertCircle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-card p-8 text-center max-w-md w-full">
        <AlertCircle className="w-16 h-16 text-negative mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-textPrimary mb-4">
          Something went wrong!
        </h2>
        <p className="text-textSecondary mb-6">
          {error.message || 'An unexpected error occurred while loading BaseBoard.'}
        </p>
        <button
          onClick={reset}
          className="btn-primary flex items-center space-x-2 mx-auto"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Try Again</span>
        </button>
      </div>
    </div>
  );
}
