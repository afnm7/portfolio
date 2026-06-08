import { useEffect } from "react";

export function useSectionTheme(sectionId, bodyClassName) {
  useEffect(() => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        document.body.classList.toggle(bodyClassName, entry.isIntersecting);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      document.body.classList.remove(bodyClassName);
    };
  }, [sectionId, bodyClassName]);
}