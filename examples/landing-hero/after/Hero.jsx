import React from 'react';

// GOOD: Intentional, high-character Editorial / Technical landing hero
export function Hero() {
  return (
    <section className="bg-zinc-950 text-zinc-100 py-20 lg:py-28 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Typography & Strict Action Hierarchy */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-1 rounded">
                Telemetry v2.4
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs text-zinc-400 font-mono">Zero-dependency runtime</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-50 leading-[1.15] mb-6">
              Distributed state machines with zero serialization overhead.
            </h1>

            <p className="text-base text-zinc-400 leading-relaxed max-w-xl mb-8">
              Execute transactional workflows directly in memory-mapped pages. Eliminates GC pause jitter and lowers p99 tail latency below 4 milliseconds.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button 
                type="button"
                className="px-5 py-2.5 rounded-md bg-zinc-100 text-zinc-900 font-medium text-sm hover:bg-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                Deploy sample cluster
              </button>
              <a 
                href="/docs/architecture" 
                className="px-5 py-2.5 rounded-md border border-zinc-800 bg-zinc-900/60 text-zinc-300 font-medium text-sm hover:bg-zinc-800 hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                Read architecture whitepaper →
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-zinc-900 flex items-center gap-6 text-xs text-zinc-500 font-mono">
              <span>● Linux x86_64 / ARM64</span>
              <span>● Apache 2.0 License</span>
              <span>● 12ms cold start</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Tangible Artifact (Code / Telemetry Readout) */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-5 font-mono text-xs shadow-2xl">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4 text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
                </span>
                <span>worker_pipeline.rs</span>
              </div>
              <pre className="text-zinc-300 overflow-x-auto leading-relaxed">
                <code>{`// Zero-copy ring buffer ingress
let buffer = RingBuffer::bind(
    "127.0.0.1:8080",
    Capacity::Megabytes(64)
)?;

while let Ok(frame) = buffer.recv() {
    state_machine.dispatch(frame);
    telemetry::record_latency();
}`}</code>
              </pre>
              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex justify-between items-center text-[11px] text-zinc-400">
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Worker verified: 0 allocations
                </span>
                <span className="text-zinc-500">Build #841</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
