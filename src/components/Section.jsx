import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export function Section({ id, number, title, titleEn, children, onVisible }) {
  const sectionRef = useRef(null);
  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible?.(id);
        }
      },
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [id, onVisible]);

  return (
    <section id={id} ref={sectionRef} className="section">
      <div className="section-header">
        <span className="section-number">Section {number}</span>
        <h1 className="section-title">{titleEn || title}</h1>
      </div>
      {children}
    </section>
  );
}
