export default function Languages({ languages }) {
  if (!languages || languages.length === 0) return null;

  return (
    <section className="glass-card">
      <h3 className="text-xl font-bold text-slate-800 dark:text-zinc-100 font-display border-b border-slate-100 dark:border-zinc-800 pb-2 mb-4">
        Languages
      </h3>
      <div className="space-y-4">
        {languages.map((lang, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="font-semibold text-slate-700 dark:text-zinc-300">
              {lang.name}
            </span>
            {lang.level && (
              <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-100 dark:border-indigo-900/30">
                {lang.level}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
