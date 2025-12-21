export function Callout({ type = 'note', title, children }) {
  const icons = {
    tip: '💡',
    note: 'ℹ️',
    warning: '⚠️',
    important: '⭐'
  };

  const titles = {
    tip: 'نصيحة',
    note: 'ملاحظة',
    warning: 'تحذير',
    important: 'مهم'
  };

  return (
    <div className={`callout ${type}`}>
      <div className="callout-icon">{icons[type]}</div>
      <div className="callout-content">
        <div className="callout-title">{title || titles[type]}</div>
        <div className="callout-text">{children}</div>
      </div>
    </div>
  );
}
