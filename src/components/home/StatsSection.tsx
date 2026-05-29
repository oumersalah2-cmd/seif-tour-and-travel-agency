"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { label: "Happy Travelers", value: 15000, suffix: "+" },
  { label: "Destinations", value: 120, suffix: "+" },
  { label: "Successful Trips", value: 8500, suffix: "+" },
  { label: "Years Experience", value: 12, suffix: "+" },
];

export default function StatsSection() {
  return (
    <section className="relative py-24 bg-primary-700 dark:bg-dark-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-white/20">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-2">
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent-300 to-accent-500 drop-shadow-sm">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base font-medium text-white/90 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
