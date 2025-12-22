// Lectures Configuration
export const lectures = [
  {
    id: "lecture-1-2",
    title: "Lecture 1 & 2: OSI Model & Network Layers",
    titleAr: "المحاضرة 1 و 2: نموذج OSI وطبقات الشبكة",
    sections: [
      {
        id: "osi-model",
        number: "1",
        titleAr: "نموذج OSI",
        titleEn: "OSI Reference Model",
      },
      {
        id: "application-layer",
        number: "2",
        titleAr: "طبقة التطبيقات",
        titleEn: "Application Layer - Layer 7",
      },
      {
        id: "presentation-layer",
        number: "3",
        titleAr: "طبقة العرض",
        titleEn: "Presentation Layer - Layer 6",
      },
      {
        id: "session-layer",
        number: "4",
        titleAr: "طبقة الجلسة",
        titleEn: "Session Layer - Layer 5",
      },
      {
        id: "transport-layer",
        number: "5",
        titleAr: "طبقة النقل",
        titleEn: "Transport Layer - Layer 4",
      },
      {
        id: "network-layer",
        number: "6",
        titleAr: "طبقة الشبكة",
        titleEn: "Network Layer - Layer 3",
      },
      {
        id: "datalink-layer",
        number: "7",
        titleAr: "طبقة ربط البيانات",
        titleEn: "Data Link Layer - Layer 2",
      },
      {
        id: "physical-layer",
        number: "8",
        titleAr: "الطبقة الفيزيائية",
        titleEn: "Physical Layer - Layer 1",
      },
      {
        id: "link-types",
        number: "9",
        titleAr: "أنواع الروابط",
        titleEn: "Types of Links (DSL & ISDN)",
      },
      {
        id: "pdu",
        number: "10",
        titleAr: "وحدات بيانات البروتوكول",
        titleEn: "PDU - Protocol Data Unit",
      },
      {
        id: "packet-structure",
        number: "11",
        titleAr: "هيكل الحزمة",
        titleEn: "Packet Structure",
      },
      {
        id: "ip-addressing",
        number: "12",
        titleAr: "عنونة IP",
        titleEn: "IP Addressing",
      },
      {
        id: "nat",
        number: "13",
        titleAr: "ترجمة عناوين الشبكة",
        titleEn: "NAT - Network Address Translation",
      },
      {
        id: "ipv4-classes",
        number: "14",
        titleAr: "فئات IPv4",
        titleEn: "IPv4 Classes & Private IPs",
      },
      {
        id: "subnetting",
        number: "15",
        titleAr: "تقسيم الشبكات",
        titleEn: "Subnet & Subnet Mask",
      },
    ],
  },
  {
    id: "lecture-3-4-5",
    title: "Lecture 3, 4 & 5: Routing & Network Performance",
    titleAr: "المحاضرة 3, 4 و 5: التوجيه وأداء الشبكة",
    sections: [
      {
        id: "network-performance",
        number: "16",
        titleAr: "مقاييس أداء الشبكة",
        titleEn: "Network Performance Metrics",
      },
      {
        id: "routing-problems",
        number: "17",
        titleAr: "مشاكل التوجيه",
        titleEn: "Routing Problems",
      },
      {
        id: "need-to-route",
        number: "18",
        titleAr: "ضرورة التوجيه",
        titleEn: "The Need to Route",
      },
      {
        id: "routers",
        number: "19",
        titleAr: "الموجهات",
        titleEn: "Routers",
      },
      {
        id: "routing-basics",
        number: "20",
        titleAr: "أساسيات التوجيه",
        titleEn: "Routing Basics",
      },
      {
        id: "routing-tables",
        number: "21",
        titleAr: "جداول التوجيه",
        titleEn: "Routing Tables",
      },
      {
        id: "routing-protocols",
        number: "22",
        titleAr: "بروتوكولات التوجيه",
        titleEn: "Routing Protocols",
      },
      {
        id: "router-evaluation",
        number: "23",
        titleAr: "معايير تقييم بروتوكولات التوجيه",
        titleEn: "Router Evaluation Criteria",
      },
      {
        id: "router-components",
        number: "24",
        titleAr: "مكونات الموجهة",
        titleEn: "Router Components",
      },
      {
        id: "router-roles-wan",
        number: "25",
        titleAr: "أدوار الموجهات في شبكات WAN",
        titleEn: "Router Roles in WANs",
      },
      {
        id: "autonomous-systems",
        number: "26",
        titleAr: "الأنظمة المستقلة",
        titleEn: "Autonomous Systems",
      },
      {
        id: "routing-table-deep",
        number: "27",
        titleAr: "تفاصيل جدول التوجيه",
        titleEn: "Routing Table Details",
      },
    ],
  },
  {
    id: "lecture-6-7",
    title: "Lecture 6 & 7: Routing Algorithms & Convergence",
    titleAr: "المحاضرة 6 و 7: خوارزميات التوجيه والتقارب",
    sections: [
      {
        id: "routing-algorithms-overview",
        number: "27",
        titleAr: "Routing Algorithms – نفهم المشهد الأول",
        titleEn: "Routing Algorithms Overview",
      },
      {
        id: "pre-convergence",
        number: "28",
        titleAr: "Pre-Convergence Routing Table – قبل ما تحصل المصيبة",
        titleEn: "Pre-Convergence Routing Table",
      },
      {
        id: "network-failure-scenarios",
        number: "29",
        titleAr: "Network Failure Scenarios – الشبكة مش بتفترض سبب واحد",
        titleEn: "Network Failure Scenarios",
      },
      {
        id: "link-failure-impact",
        number: "30",
        titleAr: "Link Failure Impact – أول ناس يحسوا مين؟",
        titleEn: "Link Failure Impact",
      },
      {
        id: "mid-convergence",
        number: "31",
        titleAr: "Mid-Convergence – أخطر مرحلة في الشبكة",
        titleEn: "Mid-Convergence - Most Dangerous Phase",
      },
      {
        id: "post-convergence",
        number: "32",
        titleAr: "Post-Convergence – لما الكل يفوق",
        titleEn: "Post-Convergence - Stable State",
      },
      {
        id: "convergence-time",
        number: "33",
        titleAr: "Convergence Time – الزمن اللي الشبكة فيه غير مستقرة",
        titleEn: "Convergence Time - Network Instability Duration",
      },
      {
        id: "routing-metrics",
        number: "34",
        titleAr: "Routing Metrics – الـ Router بيختار على أساس إيه؟",
        titleEn: "Routing Metrics - Selection Criteria",
      },
      {
        id: "distance-vector-routing",
        number: "35",
        titleAr: "Distance-Vector Routing (نفكر زي Router بدائي)",
        titleEn: "Distance-Vector Routing",
      },
      {
        id: "link-state-routing",
        number: "36",
        titleAr: "Link-State Routing (Router ذكي شوية)",
        titleEn: "Link-State Routing",
      },
      {
        id: "link-state-routing-functions",
        number: "37",
        titleAr: "Link-State Routing Functions (المطبخ من جوه)",
        titleEn: "Link-State Routing Functions",
      },
      {
        id: "lsa-packet",
        number: "38",
        titleAr: "LSA Packet (الرسالة اللي بتغيّر الشبكة)",
        titleEn: "LSA Packet - The Message That Changes Everything",
      },
      {
        id: "routing-protocol-types",
        number: "39",
        titleAr: "Routing Protocol Types (نرتب الدنيا)",
        titleEn: "Routing Protocol Types",
      },
      {
        id: "eigrp-bgp",
        number: "40",
        titleAr: "EIGRP & BGP (شبكات العالم الحقيقي)",
        titleEn: "EIGRP & BGP - Real World Networks",
      },
      {
        id: "rip-detailed",
        number: "41",
        titleAr: "RIP – Basic Distance-Vector",
        titleEn: "RIP - The Simplest Protocol",
      },
      {
        id: "rip-sharing-decision",
        number: "42",
        titleAr: "RIP – Sharing & Decision Making",
        titleEn: "RIP - How RIP Makes Decisions",
      },
      {
        id: "protocols-summary",
        number: "43",
        titleAr: "Protocol Comparison & Mental Models",
        titleEn: "Understanding All Routing Protocols",
      },
    ],
  },
  {
    id: "lecture-8",
    title: "Extra topics",
    titleAr: "مواضيع إضافية",
    sections: [
      {
        id: "vpn",
        number: "44",
        titleAr: "VPN | Virtual Private Network",
        titleEn: "VPN | Virtual Private Network",
      },
      {
        id: "ports",
        number: "45",
        titleAr: "🔌 Ports | Network Ports",
        titleEn: "🔌 Ports | Network Ports",
      },
      {
        id: "wan-protocols",
        number: "46",
        titleAr: "WAN Protocols (X.25, Frame Relay, ATM)",
        titleEn: "WAN Protocols (X.25, Frame Relay, ATM)",
      },
      {
        id: "network-metrics-detailed",
        number: "47",
        titleAr: "Network Metrics Deep Dive",
        titleEn: "Network Metrics Deep Dive",
      },
    ],
  },
];

export const getLectureById = (lectureId) =>
  lectures.find((l) => l.id === lectureId);
export const getSectionInLecture = (lectureId, sectionId) => {
  const lecture = getLectureById(lectureId);
  return lecture ? lecture.sections.find((s) => s.id === sectionId) : null;
};
