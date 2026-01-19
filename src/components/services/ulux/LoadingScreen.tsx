import React from "react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex flex-col justify-center items-center z-50">
      <div className="flex flex-col items-center gap-8">
        {/* Animated spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
          <div
            className="absolute inset-2 border-4 border-transparent border-b-gray-500 rounded-full animate-spin"
            style={{ animationDirection: "reverse" }}
          ></div>
        </div>

        {/* Loading text */}
        <div className="text-center">
          <h2 className="text-white text-xl lg:text-2xl arapey mb-2">
            Crafting Your Journey
          </h2>
        </div>

        {/* Progress indicator dots */}
        <div className="flex gap-2 mt-4">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div
            className="w-2 h-2 bg-white rounded-full animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-white rounded-full animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
