import { useState, useEffect } from 'react';

/**
 * @param {string} value 디바운싱을 적용시킬 검색 state
 * @param {number} delay 지연 시간, 기본값은 1초
 * @return {string} 디바운싱이 적용된 검색어를 반환
 */
function useDebounceSearch(value: string, delay: number = 1000) {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounce(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounce;
}

export default useDebounceSearch;
