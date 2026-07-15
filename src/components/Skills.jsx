export default function Skills({ skills }) {
  if (!skills || skills.length === 0) return null;

  return (
    <section className="glass-card">
      <h3 className="text-xl font-bold text-slate-800 dark:text-zinc-100 font-display border-b border-slate-100 dark:border-zinc-800 pb-2 mb-6">
        Technical Skills
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((group, index) => (
          <div key={index} className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
              {group.category}
            </h4>
            <div className="flex flex-wrap gap-2 skills-list">
              {group.items.map((item, idx) => (
                <span 
                  key={idx} 
                  className="skill-badge bg-slate-50 dark:bg-zinc-800/40 text-slate-700 dark:text-zinc-300 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg border border-slate-200/60 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-950/80 hover:bg-indigo-50/20 dark:hover:bg-indigo-950/10 transition-colors duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}