export default function Header({ personalInfo }) {
  if (!personalInfo) return null;

  return (
    <header className="text-center pb-8 border-b-2 border-gray-100 mb-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
        {personalInfo.name}
      </h1>
      
      <h2 className="text-xl sm:text-2xl font-medium text-blue-600 mt-3">
        {personalInfo.title}
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-5 text-gray-600 text-sm sm:text-base">
        {personalInfo.email && (
          <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 transition-colors">
            ✉️ {personalInfo.email}
          </a>
        )}
        {personalInfo.phone && (
          <span>📱 {personalInfo.phone}</span>
        )}
        {personalInfo.location && (
          <span>📍 {personalInfo.location}</span>
        )}
      </div>

      {personalInfo.summary && (
        <p className="mt-6 text-gray-700 max-w-2xl mx-auto leading-relaxed text-justify">
          {personalInfo.summary}
        </p>
      )}
    </header>
  );
}