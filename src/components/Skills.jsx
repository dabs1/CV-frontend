export default function Skills({ skills }) {
  if (!skills || skills.length === 0) return null;

  return (
    <section className="mb-10">
      <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-6">
        Competências Técnicas
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((group, index) => (
          <div key={index}>
            <h4 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">
              {group.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1.5 rounded-md border border-gray-200 hover:bg-gray-200 hover:border-gray-300 transition-colors cursor-default">
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