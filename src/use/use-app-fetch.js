import { useCallback, useState } from "react";

export function useAppFetch(initialValue, fetchAPI) {
  const [data, setData] = useState(initialValue);

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  const getData = useCallback(() => {
    (async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchAPI();
        setData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [fetchAPI]);

  return [data, error, loading, getData];
}
