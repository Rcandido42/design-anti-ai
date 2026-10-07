import React from 'react';

// BAD: AI-Generated Landing Hero with classic slop patterns
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-center">
      {/* 1. Purple radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* 2. Sparkle badge overload */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-xs font-semibold mb-8 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
          ✨ Announcing Intelligent Cloud v2.0 🚀
        </div>

        {/* 3. Gradient text title */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent leading-tight mb-6">
          Supercharge Your Workflow With Next-Gen AI Power
        </h1>

        {/* 4. Vague buzzword copy */}
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Seamlessly unleash infinite synergies with our state-of-the-art smart cloud infrastructure engineered to elevate developer velocity.
        </p>

        {/* 5. Competing pill buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
            Start Free Trial ✨
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
            Book Live Demo 🚀
          </button>
        </div>
      </div>
    </section>
  );
}
