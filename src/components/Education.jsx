export default function Education({ education }) {
  if (!education || education.length === 0) return null;

  return (
    <section className="mb-10">
      <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-6">
        Educação
      </h3>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
            <div>
              <h4 className="text-lg font-semibold text-gray-800">{edu.degree}</h4>
              <div className="text-gray-600 font-medium">{edu.institution}</div>
            </div>
            <span className="text-sm font-medium text-gray-500 mt-1 sm:mt-0">
              {edu.startDate} - {edu.endDate}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}