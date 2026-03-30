export default function Experience({ experience }) {
  if (!experience || experience.length === 0) return null;

  return (
    <section className="mb-10">
      <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-6">
        Experiência Profissional
      </h3>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div key={index} className="relative pl-4 sm:pl-0">
            {/* Design responsivo: título à esquerda, datas à direita nos ecrãs maiores */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
              <h4 className="text-xl font-semibold text-gray-800">{exp.position}</h4>
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-max mt-2 sm:mt-0">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <div className="text-lg font-medium text-gray-600 mb-3">{exp.company}</div>
            
            {exp.description && <p className="text-gray-700 mb-3 leading-relaxed">{exp.description}</p>}
            
            {exp.highlights && exp.highlights.length > 0 && (
              <ul className="list-disc list-outside text-gray-700 space-y-1.5 ml-5 marker:text-gray-400">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="pl-1">{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}