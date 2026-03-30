const API_URL = 'https://cv-backend-production-b64f.up.railway.app';

export const fetchCv = async () => {
    try {
        const response = await fetch(`${API_URL}/api/cv`);
        if (!response.ok) {
            throw new Error('Erro ao buscar o CV ou servidor desligado');
        }
        return await response.json();
    } catch (error) {
        console.error("Erro na API:", error);
        throw error;
    }
};