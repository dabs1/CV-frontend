export default function Volunteer({ volunteer }) {
  if (!volunteer || volunteer.length === 0) return null;

  return (
    <section className="glass-card">
      <h3 className="text-xl font-bold text-slate-800 dark:text-zinc-100 font-display border-b border-slate-100 dark:border-zinc-800 pb-2 mb-8 print:mb-4">
        Extracurricular Activities & Volunteering
      </h3>
      <div className="relative border-l border-slate-200 dark:border-zinc-800 ml-4 space-y-10 print:space-y-4">
        {volunteer.map((vol, index) => (
          <div key={index} className="relative pl-6 sm:pl-8 group print:break-inside-avoid">
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-slate-200 dark:bg-zinc-800 group-hover:bg-indigo-500 group-hover:ring-4 group-hover:ring-indigo-100 dark:group-hover:ring-indigo-950/40 transition-all duration-300" />
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-2">
              <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-zinc-100 font-display">
                  {vol.position}
                </h4>
                <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  {vol.company}
                </div>
              </div>
              {(vol.startDate || vol.endDate) && (
                <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 rounded-full border border-slate-200 dark:border-zinc-700/60 w-max shrink-0">
                  {vol.startDate}{vol.startDate && vol.endDate ? ' – ' : ''}{vol.endDate}
                </span>
              )}
            </div>

            {vol.description && (
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 italic mb-3">
                {vol.description}
              </p>
            )}

            {vol.highlights && vol.highlights.length > 0 && (
              <ul className="list-disc list-outside text-slate-600 dark:text-zinc-300 text-sm space-y-2 ml-4">
                {vol.highlights.map((item, idx) => (
                  <li key={idx} className="leading-relaxed hover:text-slate-800 dark:hover:text-zinc-100 transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
