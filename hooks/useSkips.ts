import { useEffect, useState } from 'react';
import { fetchSkips } from '../utils/api';
import { Skip } from '../types';

interface UseSkipsResult {
  skips: Skip[];
  loading: boolean;
  error: Error | null;
}

export function useSkips(): UseSkipsResult {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadSkips = async () => {
      try {
        const data = await fetchSkips();
        setSkips(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch skips'));
      } finally {
        setLoading(false);
      }
    };

    loadSkips();
  }, []);

  return { skips, loading, error };
} 