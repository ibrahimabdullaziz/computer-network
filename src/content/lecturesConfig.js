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
    title: "Lecture 6 & 7: Routing Algorithms & Protocols",
    titleAr: "المحاضرة 6 و 7: خوارزميات وبروتوكولات التوجيه",
    sections: [
      {
        id: "routing-algorithms",
        number: "28",
        titleAr: "خوارزميات التوجيه",
        titleEn: "Routing Algorithms Overview",
      },
      {
        id: "convergence-states",
        number: "29",
        titleAr: "حالات التقارب",
        titleEn: "Convergence States",
      },
      {
        id: "distance-vector",
        number: "30",
        titleAr: "بروتوكول المتجه المسافة",
        titleEn: "Distance-Vector Routing Protocol",
      },
      {
        id: "link-state",
        number: "31",
        titleAr: "بروتوكول حالة الوصلة",
        titleEn: "Link-State Routing Protocol",
      },
      {
        id: "routing-protocols-comparison",
        number: "32",
        titleAr: "مقارنة بروتوكولات التوجيه",
        titleEn: "Routing Protocols Comparison",
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
