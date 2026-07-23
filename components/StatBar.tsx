import React from 'react';

const stats = [
  { value: '4hrs', label: 'Flight from most AU east coast cities' },
  { value: '2', label: 'Countries’ tax rules you need to get right' },
  { value: '30yrs', label: 'Max leasehold term typically offered to foreigners' },
  { value: '183', label: 'Days that decide your tax residency, both sides' },
];

const StatBar: React.FC = () => {
  return (
    <section className="px-6 py-4">
      <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/[0.03] border border-white/5 rounded-[28px] p-8 md:p-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#E3A857] mb-1">{stat.value}</div>
            <div className="text-xs md:text-sm text-[#8FA69E] leading-snug">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatBar;
