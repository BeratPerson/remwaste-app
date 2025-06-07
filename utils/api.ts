import { Skip } from '../types';

const API_BASE_URL = 'https://app.wewantwaste.co.uk/api';

export const fetchSkips = async (): Promise<Skip[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/skips/by-location?postcode=NR32&area=Lowestoft`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching skips:', error);
    throw new Error('Failed to fetch skip list');
  }
}; 