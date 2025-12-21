import { useLanguage } from '../context/LanguageContext';

export function Callout({ type = 'note', title, children }) {
  const { language } = useLanguage();
  
  const icons = {
    tip: '💡',
    note: 'ℹ️',
    warning: '⚠️',
    important: '⭐'
  };

  const titles = {
    tip: { ar: 'نصيحة', en: 'Tip' },
    note: { ar: 'ملاحظة', en: 'Note' },
    warning: { ar: 'تحذير', en: 'Warning' },
    important: { ar: 'مهم', en: 'Important' }
  };

  const displayTitle = title || (titles[type] ? titles[type][language] : '');

  return (
    <div className={`callout ${type}`}>
      <div className="callout-icon">{icons[type]}</div>
      <div className="callout-content">
        <div className="callout-title">{displayTitle}</div>
        <div className="callout-text">{children}</div>
      </div>
    </div>
  );
}
