import { useCallback, useEffect, useRef } from 'react';

const useIntersectionObserver = (
  onIntersect: (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver,
  ) => void,
  options?: IntersectionObserverInit,
) => {
  const ref = useRef<HTMLDivElement>(null);

  /**
   * target 요소가 교차되었을 때 실행할 함수
   *
   * @param entries IntersectionObserverEntry 객체의 리스트
   * @param observer 콜백함수가 호출되는 IntersectionObserver
   */
  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect],
  );

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options, callback]);

  return ref;
};

export default useIntersectionObserver;
