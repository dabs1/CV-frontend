import { useEffect, useState } from 'react';
import { fetchCv } from './services/api';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

export default function App() {
  const [cvData, setCvData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCv()
      .then(data => {
        setCvData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-xl text-gray-600">
        <span className="animate-pulse">A carregar o currículo...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-red-500">
        Erro de ligação: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8 sm:p-12 mb-10">
        
        {/* Renderiza os componentes passando os dados corretos da BD */}
        <Header personalInfo={cvData.personalInfo} />
        <Experience experience={cvData.experience} />
        <Education education={cvData.education} />
        <Skills skills={cvData.skills} />

      </div>
    </div>
  );
}