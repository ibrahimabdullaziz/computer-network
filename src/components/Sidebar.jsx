import { useLanguage } from '../context/LanguageContext';

export function Sidebar({ sections, activeSection, completedSections, progress, onNavigate, isOpen, onClose }) {
  const { language } = useLanguage();
  
  return (
    <>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <svg viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.2"/>
              <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="3" fill="none"/>
              <circle cx="50" cy="30" r="6" fill="currentColor"/>
              <circle cx="30" cy="60" r="6" fill="currentColor"/>
              <circle cx="70" cy="60" r="6" fill="currentColor"/>
              <line x1="50" y1="30" x2="30" y2="60" stroke="currentColor" strokeWidth="2"/>
              <line x1="50" y1="30" x2="70" y2="60" stroke="currentColor" strokeWidth="2"/>
              <line x1="30" y1="60" x2="70" y2="60" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>CN</span>
          </div>
          <h1 className="sidebar-title">
            {language === 'ar' ? 'شبكات الحاسب' : 'Computer Networks'}
          </h1>
          <p className="sidebar-subtitle">
            {language === 'ar' ? 'مرجع دراسي' : 'Study Reference'}
          </p>
        </div>

        <div className="progress-container">
          <div className="progress-label">
            <span>{language === 'ar' ? 'التقدم' : 'Progress'}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <nav className="nav">
          {sections.map((section, index) => {
            const isCompleted = completedSections.includes(section.id);
            const isActive = activeSection === section.id;
            
            return (
              <div key={section.id} className="nav-section">
                <button
                  className={`nav-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                  onClick={() => {
                    onNavigate(section.id);
                    onClose?.();
                  }}
                >
                  <span className="nav-item-icon">
                    {isCompleted ? '✓' : index + 1}
                  </span>
                  <span>{section.title}</span>
                </button>
              </div>
            );
          })}
        </nav>
      </aside>
      
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
    </>
  );
}

