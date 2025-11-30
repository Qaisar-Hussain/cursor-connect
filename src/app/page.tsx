"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [showNotification, setShowNotification] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Load click count from localStorage on component mount
  useEffect(() => {
    const savedCount = localStorage.getItem("buttonClickCount");
    if (savedCount) {
      const count = parseInt(savedCount, 10);
      setClickCount(count);
    }
  }, []);

  const handleButtonClick = () => {
    // Increment click count
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    // Save to localStorage
    localStorage.setItem("buttonClickCount", newCount.toString());
    
    // Show notification
    setShowNotification(true);
    // Auto-hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <main className="flex flex-col items-center justify-center gap-8 px-4">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Beautiful Button Demo
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Click the button below to see a popup notification
          </p>
          {/* Click Counter Display */}
          <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Clicks:
              </span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {clickCount}
            </span>
          </div>
        </div>

        {/* Beautiful Button */}
        <button
          onClick={handleButtonClick}
          className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            <svg
              className="w-5 h-5 transition-transform group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Click Me!
          </span>
          {/* Shine effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
        </button>

        {/* Popup Notification */}
        {showNotification && (
          <div className="fixed top-4 right-4 z-50 animate-slide-in">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700 min-w-[300px] max-w-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Button Clicked!
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    You successfully clicked on the button. Great job! 🎉
                    <br />
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      Total clicks: {clickCount}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => setShowNotification(false)}
                  className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
