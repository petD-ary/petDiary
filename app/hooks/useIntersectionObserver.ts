import { RefObject, useRef } from 'react';

const useIntersectionObserver = (callback: () => void) => {
  const observer = useRef(
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      { threshold: 1 },
    ),
  );

  const observe = (element: RefObject<Element>) => {
    if (element.current === null) return;
    observer.current.observe(element.current);
  };

  const unobserve = (element: RefObject<HTMLDivElement>) => {
    if (element.current === null) return;
    observer.current.unobserve(element.current);
  };

  return [observe, unobserve];
};

export default useIntersectionObserver;
