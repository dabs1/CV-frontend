const API_URL = import.meta.env.DEV 
    ? '' 
    : (import.meta.env.VITE_API_URL || 'https://cv-backend-production-b64f.up.railway.app');

export const fetchCv = async () => {
    try {
        const response = await fetch(`${API_URL}/api/cv`);
        if (!response.ok) {
            throw new Error('Error fetching CV or server is offline');
        }
        return await response.json();
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};