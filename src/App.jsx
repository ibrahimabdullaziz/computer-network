import { useState, useEffect, useCallback } from "react";
import { Sidebar } from "./components/Sidebar";
import { sections } from "./content/sections";
import { lectures } from "./content/lecturesConfig";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
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
  NetworkPerformanceMetricsSection,
  RoutingProblemsSection,
  NeedToRouteSection,
  RoutersSection,
  RoutingBasicsSection,
  RoutingTablesSection,
  RoutingProtocolsSection,
  RouterEvaluationSection,
  RouterComponentsSection,
  RouterRolesWANSection,
  AutonomousSystemsSection,
  RoutingTableDeepSection,
  RoutingAlgorithmsOverviewSection,
  PreConvergenceSection,
  NetworkFailureScenariosSection,
  LinkFailureImpactSection,
  MidConvergenceSection,
  PostConvergenceSection,
  ConvergenceTimeSection,
  RoutingMetricsSection,
  DistanceVectorRoutingSection,
  LinkStateRoutingSection,
  LinkStateRoutingFunctionsSection,
  LSAPacketSection,
  RoutingProtocolTypesSection,
  EIGRPBGPSection,
  RIPDetailedSection,
  RIPSharingDecisionSection,
  ProtocolsSummarySection,
  VPNSection,
  PortsSection,
  WANProtocolsSection,
  NetworkMetricsDetailedSection,
} from "./content/ContentSections";

function AppContent() {
  const { language, toggleLanguage } = useLanguage();
  const [activeLecture, setActiveLecture] = useState("lecture-1-2");
  const [activeSection, setActiveSection] = useState(sections[0]?.id);
  const [completedSections, setCompletedSections] = useState(() => {
    const saved = localStorage.getItem("cn-completed-sections");
    return saved ? JSON.parse(saved) : [];
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("cn-dark-mode");
    return saved ? JSON.parse(saved) : false;
  });

  // Apply dark mode class to document
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("cn-dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Save completed sections to localStorage
  useEffect(() => {
    localStorage.setItem(
      "cn-completed-sections",
      JSON.stringify(completedSections)
    );
  }, [completedSections]);

  // Handle section visibility
  const handleSectionVisible = useCallback((sectionId) => {
    setActiveSection(sectionId);

    // Mark previous sections as completed
    const currentIndex = sections.findIndex((s) => s.id === sectionId);
    if (currentIndex > 0) {
      const previousSections = sections.slice(0, currentIndex).map((s) => s.id);
      setCompletedSections((prev) => {
        const newCompleted = [...new Set([...prev, ...previousSections])];
        return newCompleted;
      });
    }
  }, []);

  // Navigate to section
  const handleNavigate = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // Calculate progress
  const progress = (completedSections.length / sections.length) * 100;
  const currentLecture = lectures.find((l) => l.id === activeLecture);

  return (
    <div className="app">
      {/* Mobile Header Bar */}
      <header className="mobile-header">
        <button
          className="menu-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle menu"
        >
          {sidebarOpen ? "✕" : "☰"}
        </button>

        <div className="header-toggles">
          <button
            className="dark-mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            {language === "ar" ? "EN" : "ع"}
          </button>
        </div>
      </header>

      <Sidebar
        sections={currentLecture?.sections || []}
        activeSection={activeSection}
        completedSections={completedSections}
        progress={progress}
        onNavigate={handleNavigate}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="main">
        <div className="content">
          {/* Lecture Selection Header */}
          <div className="lecture-selector">
            <h1 className="lecture-title">
              {language === "ar"
                ? currentLecture?.titleAr
                : currentLecture?.title}
            </h1>
            <div className="lecture-nav">
              {lectures.map((lecture) => (
                <button
                  key={lecture.id}
                  className={`lecture-btn ${
                    activeLecture === lecture.id ? "active" : ""
                  }`}
                  onClick={() => setActiveLecture(lecture.id)}
                >
                  {language === "ar" ? lecture.titleAr : lecture.title}
                </button>
              ))}
            </div>
          </div>

          {/* Lecture 1 & 2 Content */}
          {activeLecture === "lecture-1-2" && (
            <>
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
            </>
          )}

          {/* Lecture 3, 4 & 5 Content */}
          {activeLecture === "lecture-3-4-5" && (
            <>
              <NetworkPerformanceMetricsSection
                onVisible={handleSectionVisible}
              />
              <RoutingProblemsSection onVisible={handleSectionVisible} />
              <NeedToRouteSection onVisible={handleSectionVisible} />
              <RoutersSection onVisible={handleSectionVisible} />
              <RoutingBasicsSection onVisible={handleSectionVisible} />
              <RoutingTablesSection onVisible={handleSectionVisible} />
              <RoutingProtocolsSection onVisible={handleSectionVisible} />
              <RouterEvaluationSection onVisible={handleSectionVisible} />
              <RouterComponentsSection onVisible={handleSectionVisible} />
              <RouterRolesWANSection onVisible={handleSectionVisible} />
              <AutonomousSystemsSection onVisible={handleSectionVisible} />
              <RoutingTableDeepSection onVisible={handleSectionVisible} />
            </>
          )}

          {/* Lecture 6 & 7 Content */}
          {activeLecture === "lecture-6-7" && (
            <>
              <RoutingAlgorithmsOverviewSection
                onVisible={handleSectionVisible}
              />
              <PreConvergenceSection onVisible={handleSectionVisible} />
              <NetworkFailureScenariosSection
                onVisible={handleSectionVisible}
              />
              <LinkFailureImpactSection onVisible={handleSectionVisible} />
              <MidConvergenceSection onVisible={handleSectionVisible} />
              <PostConvergenceSection onVisible={handleSectionVisible} />
              <ConvergenceTimeSection onVisible={handleSectionVisible} />
              <RoutingMetricsSection onVisible={handleSectionVisible} />
              <DistanceVectorRoutingSection onVisible={handleSectionVisible} />
              <LinkStateRoutingSection onVisible={handleSectionVisible} />
              <LinkStateRoutingFunctionsSection
                onVisible={handleSectionVisible}
              />
              <LSAPacketSection onVisible={handleSectionVisible} />
              <RoutingProtocolTypesSection onVisible={handleSectionVisible} />
              <EIGRPBGPSection onVisible={handleSectionVisible} />
              <RIPDetailedSection onVisible={handleSectionVisible} />
              <RIPSharingDecisionSection onVisible={handleSectionVisible} />
              <ProtocolsSummarySection onVisible={handleSectionVisible} />
            </>
          )}

          {/* Lecture 8 Content */}
          {activeLecture === "lecture-8" && (
            <>
              <VPNSection onVisible={handleSectionVisible} />
              <PortsSection onVisible={handleSectionVisible} />
              <WANProtocolsSection onVisible={handleSectionVisible} />
              <NetworkMetricsDetailedSection onVisible={handleSectionVisible} />
            </>
          )}
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>
            {language === "ar" ? "من إنشاء" : "Created by"}{" "}
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
