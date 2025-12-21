import { useState, useEffect, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { sections } from './content/sections';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import {
  OSIModelSection,
  ApplicationLayerSection,
  PresentationLayerSection,
  SessionLayerSection,
  TransportLayerSection,
  NetworkLayerSection,
  DataLinkLayerSection,
  PhysicalLayerSection,
  LinkTypesSection,
  PDUSection,
  PacketStructureSection,
  IPAddressingSection,
  NATSection,
  IPv4ClassesSection,
  SubnettingSection,
  IPv6Section,
} from './content/ContentSections';

function AppContent() {
  const { language, toggleLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState(sections[0]?.id);
  const [completedSections, setCompletedSections] = useState(() => {
    const saved = localStorage.getItem('cn-completed-sections');
    return saved ? JSON.parse(saved) : [];
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('cn-dark-mode');
    return saved ? JSON.parse(saved) : false;
  });

  // Apply dark mode class to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('cn-dark-mode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Save completed sections to localStorage
  useEffect(() => {
    localStorage.setItem('cn-completed-sections', JSON.stringify(completedSections));
  }, [completedSections]);

  // Handle section visibility
  const handleSectionVisible = useCallback((sectionId) => {
    setActiveSection(sectionId);
    
    // Mark previous sections as completed
    const currentIndex = sections.findIndex(s => s.id === sectionId);
    if (currentIndex > 0) {
      const previousSections = sections.slice(0, currentIndex).map(s => s.id);
      setCompletedSections(prev => {
        const newCompleted = [...new Set([...prev, ...previousSections])];
        return newCompleted;
      });
    }
  }, []);

  // Navigate to section
  const handleNavigate = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Calculate progress
  const progress = (completedSections.length / sections.length) * 100;

  return (
    <div className="app">
      <button 
        className="menu-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        {sidebarOpen ? '✕' : '☰'}
      </button>

      <Sidebar
        sections={sections}
        activeSection={activeSection}
        completedSections={completedSections}
        progress={progress}
        onNavigate={handleNavigate}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Dark Mode Toggle */}
      <button 
        className="dark-mode-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* Language Toggle */}
      <button 
        className="language-toggle"
        onClick={toggleLanguage}
        aria-label="Toggle language"
      >
        {language === 'ar' ? 'EN' : 'ع'}
      </button>

      <main className="main">
        <div className="content">
          <OSIModelSection onVisible={handleSectionVisible} />
          <ApplicationLayerSection onVisible={handleSectionVisible} />
          <PresentationLayerSection onVisible={handleSectionVisible} />
          <SessionLayerSection onVisible={handleSectionVisible} />
          <TransportLayerSection onVisible={handleSectionVisible} />
          <NetworkLayerSection onVisible={handleSectionVisible} />
          <DataLinkLayerSection onVisible={handleSectionVisible} />
          <PhysicalLayerSection onVisible={handleSectionVisible} />
          <LinkTypesSection onVisible={handleSectionVisible} />
          <PDUSection onVisible={handleSectionVisible} />
          <PacketStructureSection onVisible={handleSectionVisible} />
          <IPAddressingSection onVisible={handleSectionVisible} />
          <NATSection onVisible={handleSectionVisible} />
          <IPv4ClassesSection onVisible={handleSectionVisible} />
          <SubnettingSection onVisible={handleSectionVisible} />
          <IPv6Section onVisible={handleSectionVisible} />
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>
            {language === 'ar' ? 'من إنشاء' : 'Created by'}{' '}
            <a 
              href="http://www.linkedin.com/in/ibrahim-abdullaziz-894035339" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Ibrahim Abdullaziz
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;

