// Translations for all content sections
// Structure: { ar: Arabic text, en: English text }

export const translations = {
  // Section 1: OSI Model
  osiModel: {
    intro: {
      ar: "نموذج OSI Reference Model ده موديل نظري معمول علشان يوصف ازاي الاتصال في الشبكات بيحصل ويساعدنا نفهم ونصمّم Network Communications صح.",
      en: "The OSI Reference Model is a theoretical model designed to describe how network communication works and helps us understand and design Network Communications correctly.",
    },
    calloutImportant: {
      ar: "الموديل ده بيقسم شغل الشبكة كلها على 7 Layers، وكل Layer ليها وظيفة محددة جدًا. كل طبقة بتستخدم خدمات الطبقة اللي تحتها وبتقدم خدمات للطبقة اللي فوقها، يعني مفيش Layer شغالة لوحدها.",
      en: "This model divides all network operations into 7 Layers, and each Layer has a very specific function. Each layer uses the services of the layer below it and provides services to the layer above it, meaning no layer works alone.",
    },
    layerDivision: { ar: "تقسيم الطبقات", en: "Layer Division" },
    lowerLayers: { ar: "Lower Layers (الطبقات السفلى)", en: "Lower Layers" },
    lowerLayersDesc: {
      ar: "الطبقات دي غالبًا بتتطبق في الهاردوير نفسه بتاع الشبكة:",
      en: "These layers are typically implemented in the network hardware itself:",
    },
    networkCards: { ar: "كروت الشبكة", en: "Network Cards" },
    switches: { ar: "السويتشات", en: "Switches" },
    routers: { ar: "الراوترات", en: "Routers" },
    lowerLayersNote: {
      ar: "دي الطبقات اللي بتتعامل مع نقل الداتا فعليًا جوه الشبكة.",
      en: "These are the layers that actually handle data transfer within the network.",
    },
    upperLayers: { ar: "Upper Layers (الطبقات العليا)", en: "Upper Layers" },
    upperLayersDesc: {
      ar: "الطبقات دي بتتطبق في السوفتوير:",
      en: "These layers are implemented in software:",
    },
    programs: { ar: "البرامج", en: "Programs" },
    operatingSystems: { ar: "أنظمة التشغيل", en: "Operating Systems" },
    networkApps: {
      ar: "التطبيقات اللي بتستخدم الشبكة",
      en: "Applications that use the network",
    },
    upperLayersTip: {
      ar: "دي الطبقات اللي بتتعامل مع المستخدم والتطبيقات.",
      en: "These are the layers that interact with the user and applications.",
    },
    layers: [
      { num: 7, ar: "التطبيقات", en: "Application" },
      { num: 6, ar: "العرض", en: "Presentation" },
      { num: 5, ar: "الجلسة", en: "Session" },
      { num: 4, ar: "النقل", en: "Transport" },
      { num: 3, ar: "الشبكة", en: "Network" },
      { num: 2, ar: "ربط البيانات", en: "Data Link" },
      { num: 1, ar: "الفيزيائية", en: "Physical" },
    ],
  },

  // Section 2: Application Layer
  applicationLayer: {
    intro: {
      ar: "دي أعلى Layer في OSI، ومفيش فوقها حاجة. وهي أقرب طبقة للـ End User.",
      en: "This is the highest Layer in OSI, with nothing above it. It is the closest layer to the End User.",
    },
    calloutImportant: {
      ar: "Application Layer مش هي البرنامج نفسه، لكنها بتوفّر الخدمات الشبكية اللي البرنامج محتاجها.",
      en: "The Application Layer is not the program itself, but it provides the network services that the program needs.",
    },
    desc: {
      ar: "يعني المتصفح، برنامج الإيميل، برنامج FTP... كل دول بيكلموا الشبكة من خلال Application Layer.",
      en: "So the browser, email program, FTP program... all of these communicate with the network through the Application Layer.",
    },
    protocolExamples: { ar: "أمثلة بروتوكولات", en: "Protocol Examples" },
    protocol: { ar: "البروتوكول", en: "Protocol" },
    function: { ar: "الوظيفة", en: "Function" },
    protocols: [
      { protocol: "FTP", ar: "نقل ملفات", en: "File Transfer" },
      { protocol: "SMTP", ar: "إرسال إيميلات", en: "Sending Emails" },
      { protocol: "HTTP", ar: "صفحات الويب", en: "Web Pages" },
    ],
    calloutNote: {
      ar: "عشان هي أعلى طبقة، مفيش طبقات فوقها وهي اللي المستخدم بيتعامل معاها بشكل مباشر.",
      en: "Since it is the highest layer, there are no layers above it and it is what the user interacts with directly.",
    },
  },

  // Section 3: Presentation Layer
  presentationLayer: {
    intro: {
      ar: "الطبقة دي مسؤولة عن شكل الداتا.",
      en: "This layer is responsible for the format of data.",
    },
    quote: {
      ar: "اللي اتبعت من عندي يوصل عندك بنفس الشكل اللي أنا قصدته",
      en: "What I sent should arrive at your end in the same format I intended",
    },
    whyImportant: {
      ar: "ليه الطبقة دي مهمة؟",
      en: "Why is this layer important?",
    },
    whyImportantDesc: {
      ar: "لأن ممكن جهاز Windows وجهاز Mac يبقوا بيتكلموا مع بعض، بس طريقة تمثيل الداتا مختلفة.",
      en: "Because a Windows device and a Mac device might be communicating with each other, but their data representation methods are different.",
    },
    functions: {
      ar: "وظائف Presentation Layer",
      en: "Presentation Layer Functions",
    },
    functionsList: [
      { term: "Translation", ar: "ترجمة", en: "Translation" },
      {
        term: "Encoding / Decoding",
        ar: "تشفير / فك تشفير",
        en: "Encoding / Decoding",
      },
      {
        term: "Compression / Decompression",
        ar: "ضغط / فك ضغط",
        en: "Compression / Decompression",
      },
      {
        term: "Encryption / Decryption",
        ar: "تشفير / فك تشفير أمني",
        en: "Security Encryption / Decryption",
      },
    ],
    calloutTip: {
      ar: "تُعتبر حلقة وصل بين Session Layer و Application Layer.",
      en: "It acts as a link between the Session Layer and the Application Layer.",
    },
  },

  // Section 4: Session Layer
  sessionLayer: {
    intro: {
      ar: "دي أول طبقة في Upper Layers ومهتمة بقضايا التطبيقات مش بنقل الداتا نفسه.",
      en: "This is the first layer in the Upper Layers and is concerned with application issues, not data transfer itself.",
    },
    work: { ar: "شغل Session Layer", en: "Session Layer Work" },
    workList: {
      ar: ["تبدأ الاتصال", "تنسّقه", "تحافظ عليه", "وتنهيه"],
      en: [
        "Start the connection",
        "Coordinate it",
        "Maintain it",
        "And end it",
      ],
    },
    quote: {
      ar: "بتدير الحوار بين برنامجين على الشبكة",
      en: "It manages the dialogue between two programs on the network",
    },
    example: { ar: "مثال على Session", en: "Session Example" },
    exampleList: {
      ar: ["تسجيل دخول", "نقل داتا", "Logout"],
      en: ["Login", "Data transfer", "Logout"],
    },
    exampleDesc: {
      ar: "ده كله اسمه Session",
      en: "All of this is called a Session",
    },
    calloutNote: {
      ar: "هي بتسمح لأجهزة الشبكة إنها تنشئ Sessions ممتدة وتحافظ عليها وتشارك الداتا من خلالها. من البروتوكولات: NetBIOS.",
      en: "It allows network devices to create extended Sessions, maintain them, and share data through them. Protocols include: NetBIOS.",
    },
  },

  // Section 5: Transport Layer
  transportLayer: {
    intro: {
      ar: "دي طبقة واجهة، ومش فارق معاها الداتا هتمشي منين.",
      en: "This is an interface layer, and it doesn't matter which path the data takes.",
    },
    questions: { ar: "الأسئلة اللي بتسألها", en: "Questions it asks" },
    questionsList: {
      ar: ["الداتا وصلت؟", "وصلت كاملة؟", "وصلت بالترتيب؟"],
      en: [
        "Did the data arrive?",
        "Did it arrive complete?",
        "Did it arrive in order?",
      ],
    },
    functions: { ar: "وظائفها", en: "Its Functions" },
    functionsList: {
      ar: [
        "تتبع الداتا من الطبقات العليا",
        "تدمجها في Data Flow واحد",
        "تقسّم الداتا الكبيرة لحتت صغيرة",
        "وتبعتها للطبقات اللي تحت",
      ],
      en: [
        "Track data from upper layers",
        "Merge it into a single Data Flow",
        "Divide large data into small pieces",
        "And send it to lower layers",
      ],
    },
    protocols: { ar: "بروتوكولات Transport", en: "Transport Protocols" },
    udp: {
      features: {
        ar: ["مفيش Connection", "مفيش Session", "مفيش ضمان وصول"],
        en: ["No Connection", "No Session", "No delivery guarantee"],
      },
      quote: "Connectionless & Unreliable",
      example: {
        ar: "مثال: Broadcast Messages",
        en: "Example: Broadcast Messages",
      },
    },
    tcp: {
      features: {
        ar: [
          "موثوق أكتر",
          "بيعمل Connection",
          "بيستخدم Error Detection Algorithms قوية",
          "يضمن وصول الداتا بالترتيب",
        ],
        en: [
          "More reliable",
          "Creates a Connection",
          "Uses strong Error Detection Algorithms",
          "Guarantees data arrives in order",
        ],
      },
    },
    comparison: {
      headers: {
        ar: ["الخاصية", "TCP", "UDP"],
        en: ["Property", "TCP", "UDP"],
      },
      rows: {
        ar: [
          ["الاتصال", "نعم", "لا"],
          ["الموثوقية", "عالية", "منخفضة"],
          ["الترتيب", "مضمون", "غير مضمون"],
          ["السرعة", "أبطأ", "أسرع"],
          ["الاستخدام", "ملفات، إيميل", "صوت، فيديو، ألعاب"],
        ],
        en: [
          ["Connection", "Yes", "No"],
          ["Reliability", "High", "Low"],
          ["Ordering", "Guaranteed", "Not Guaranteed"],
          ["Speed", "Slower", "Faster"],
          ["Usage", "Files, Email", "Voice, Video, Games"],
        ],
      },
    },
  },

  // Section 6: Network Layer
  networkLayer: {
    quote: {
      ar: "الداتا هتروح فين وتمشي من أنهي طريق",
      en: "Where will the data go and which path will it take",
    },
    mainTask: { ar: "المهمة الأساسية", en: "Main Task" },
    mainTaskList: {
      ar: ["ربط LANs ببعض", "التواصل عبر WAN", "إعطاء Logical Address (IP)"],
      en: [
        "Connect LANs together",
        "Communication across WAN",
        "Assign Logical Address (IP)",
      ],
    },
    calloutImportant: {
      ar: "هي أهم Layer لما تبعت داتا خارج الشبكة المحلية.",
      en: "It is the most important Layer when sending data outside the local network.",
    },
    functions: { ar: "وظائفها", en: "Its Functions" },
    functionsList: {
      ar: [
        "Routing - التوجيه",
        "Packet Handling - التعامل مع الحزم",
        "Fragmentation لو الحجم كبير",
      ],
      en: ["Routing", "Packet Handling", "Fragmentation if size is large"],
    },
    desc: {
      ar: "يعني تستقبل Packets من مصادر مختلفة وتضمن وصولها للوجهة الصح.",
      en: "It receives Packets from different sources and ensures they reach the correct destination.",
    },
  },

  // Section 7: Data Link Layer
  dataLinkLayer: {
    quote: {
      ar: "توصيل الداتا بين جهازين جوه نفس الشبكة",
      en: "Connecting data between two devices within the same network",
    },
    division: {
      ar: "الطبقة متقسمة لجزئين",
      en: "The layer is divided into two parts",
    },
    llc: {
      title: "LLC (Logical Link Control)",
      features: {
        ar: ["روابط منطقية", "تحكم في الاتصال"],
        en: ["Logical links", "Connection control"],
      },
    },
    mac: {
      title: "MAC (Media Access Control)",
      features: {
        ar: ["تنظيم الوصول للشبكة", "منع التعارض", "استخدام MAC Address"],
        en: [
          "Organize network access",
          "Prevent collisions",
          "Use MAC Address",
        ],
      },
    },
    additionalFunctions: { ar: "وظائف إضافية", en: "Additional Functions" },
    additionalFunctionsList: {
      ar: ["بتغلف الداتا", "تبعتها للـ Physical Layer", "وتتعامل مع الأخطاء"],
      en: [
        "Encapsulates data",
        "Sends it to the Physical Layer",
        "And handles errors",
      ],
    },
    errorDetection: "Error Detection – CRC",
    calloutNote: {
      ar: "CRC (Cyclic Redundancy Check): عدد بسيط من الـ bits يتحط في الـ Frame ويستخدمه المرسل والمستقبل علشان يتأكدوا إن الداتا سليمة.",
      en: "CRC (Cyclic Redundancy Check): A simple number of bits placed in the Frame used by sender and receiver to ensure data integrity.",
    },
  },

  // Section 8: Physical Layer
  physicalLayer: {
    intro: {
      ar: "دي أقل طبقة في OSI وملهاش أي فهم للداتا.",
      en: "This is the lowest layer in OSI and has no understanding of data.",
    },
    handles: { ar: "هي بتتعامل مع", en: "It handles" },
    handlesList: {
      ar: ["0 و 1", "تشفير الداتا لإشارات", "نقلها فعليًا"],
      en: ["0 and 1", "Encoding data to signals", "Physical transmission"],
    },
    quote: {
      ar: "بتاخد الداتا وتعدّيها وخلاص",
      en: "It just takes data and passes it along",
    },
    devices: { ar: "أجهزة شغالة هنا", en: "Devices working here" },
    responsible: { ar: "مسؤولة عن", en: "Responsible for" },
    responsibleList: {
      ar: ["نوع السلك", "شكل الإشارة", "سرعة النقل", "تحويل الـ Bits لإشارات"],
      en: [
        "Cable type",
        "Signal shape",
        "Transfer speed",
        "Converting Bits to signals",
      ],
    },
  },

  // Section 9: Link Types
  linkTypes: {
    dsl: {
      title: "DSL - Digital Subscriber Line",
      quote: {
        ar: "تقنية إنترنت بتشتغل على سلك التليفون الأرضي النحاس من غير ما تقطع المكالمات",
        en: "Internet technology that works on copper telephone lines without interrupting calls",
      },
      desc: {
        ar: "يعني تتكلم تليفون والإنترنت شغال في نفس الوقت!",
        en: "So you can talk on the phone and use the internet at the same time!",
      },
      calloutNote: {
        ar: "DSL مش تقنية واحدة، دي مجموعة تقنيات بتسمح بنقل بيانات رقمية عن طريق سلك التليفون النحاس.",
        en: "DSL is not a single technology, it's a group of technologies that allow digital data transfer over copper telephone wires.",
      },
      howWorks: { ar: "DSL شغالة إزاي؟", en: "How does DSL work?" },
      howWorksList: {
        ar: [
          "سلك التليفون فيه Bandwidth كبير",
          "الصوت بيستخدم جزء صغير",
          "والداتا الرقمية تستخدم الجزء التاني",
        ],
        en: [
          "Telephone wire has large Bandwidth",
          "Voice uses a small portion",
          "And digital data uses the other portion",
        ],
      },
      types: { ar: "أنواع DSL", en: "DSL Types" },
      adsl: {
        title: "ADSL (Asymmetric DSL)",
        desc: {
          ar: "Asymmetric يعني سرعة التحميل ≠ سرعة الرفع",
          en: "Asymmetric means download speed ≠ upload speed",
        },
        features: {
          ar: ["Download أسرع", "Upload أبطأ"],
          en: ["Download is faster", "Upload is slower"],
        },
        tip: {
          ar: "مناسب للبيوت والاستخدام العادي لأن المستخدم بيحمّل أكتر ما بيرفع.",
          en: "Suitable for homes and regular use because users download more than they upload.",
        },
      },
      sdsl: {
        title: "SDSL (Symmetric DSL)",
        desc: {
          ar: "Symmetric يعني سرعة التحميل = سرعة الرفع",
          en: "Symmetric means download speed = upload speed",
        },
        note: {
          ar: "بيستخدم في الشركات والسيرفرات لأنها بترفع داتا كتير.",
          en: "Used in companies and servers because they upload a lot of data.",
        },
      },
      comparison: {
        headers: {
          ar: ["النوع", "Download", "Upload", "الاستخدام"],
          en: ["Type", "Download", "Upload", "Usage"],
        },
        rows: {
          ar: [
            ["ADSL", "أسرع", "أبطأ", "منازل"],
            ["SDSL", "متساوي", "متساوي", "شركات / Servers"],
          ],
          en: [
            ["ADSL", "Faster", "Slower", "Homes"],
            ["SDSL", "Equal", "Equal", "Companies / Servers"],
          ],
        },
      },
    },
    isdn: {
      title: "ISDN - Integrated Services Digital Network",
      quote: {
        ar: "نظام اتصال رقمي قديم نسبيًا كان بيستخدم خط التليفون الأرضي لتقديم خدمات متعددة",
        en: "A relatively old digital communication system that used landline to provide multiple services",
      },
      provided: { ar: "ISDN كان بيقدّم", en: "ISDN provided" },
      providedList: {
        ar: ["مكالمات صوتية", "إنترنت", "فاكس", "نقل بيانات"],
        en: ["Voice calls", "Internet", "Fax", "Data transfer"],
      },
      whyImportant: { ar: "ليه ISDN كان مهم؟", en: "Why was ISDN important?" },
      whyImportantDesc: {
        ar: [
          "قبل ISDN، التليفون كان Analog والإشارة بتتأثر بالضوضاء والجودة وحشة.",
          "ISDN قدّم: إشارة رقمية، جودة أعلى، سرعات أحسن، Noise أقل.",
        ],
        en: [
          "Before ISDN, phones were Analog and signals were affected by noise and quality was poor.",
          "ISDN provided: digital signal, higher quality, better speeds, less Noise.",
        ],
      },
      calloutNote: {
        ar: "ISDN اختفى لأن DSL ظهر وكان أسرع وأرخص وأسهل.",
        en: "ISDN disappeared because DSL appeared and was faster, cheaper, and easier.",
      },
    },
  },

  // Section 10: PDU
  pdu: {
    quote: {
      ar: "الاسم اللي بنطلقه على الداتا وهي ماشية جوه طبقات الـ OSI",
      en: "The name we give to data as it moves through the OSI layers",
    },
    mentalIdea: { ar: "الفكرة الذهنية", en: "The Mental Concept" },
    mentalIdeaDesc: {
      ar: "الداتا وهي نازلة من Layer لـ Layer، كل Layer يضيف Header فيتغير اسم الداتا. يعني الاسم بيتغير حسب الطبقة.",
      en: "As data goes down from Layer to Layer, each Layer adds a Header and the data name changes. The name changes according to the layer.",
    },
    pduNames: { ar: "أسماء الـ PDU في OSI", en: "PDU Names in OSI" },
    pduTable: {
      headers: { ar: ["Layer", "اسم الـ PDU"], en: ["Layer", "PDU Name"] },
      rows: [
        ["Layer 4 (Transport)", "Segment / Datagram"],
        ["Layer 3 (Network)", "Packet"],
        ["Layer 2 (Data Link)", "Frame"],
        ["Layer 1 (Physical)", "Bits"],
      ],
    },
    frame: {
      title: "Frame (Layer 2)",
      quote: {
        ar: "شكل الداتا في Data Link Layer",
        en: "The form of data in Data Link Layer",
      },
      responsibility: { ar: "مسؤوليته", en: "Its Responsibility" },
      responsibilityList: {
        ar: [
          "نقل الداتا جوه نفس الشبكة (LAN)",
          "استخدام MAC Address",
          "كشف الأخطاء",
        ],
        en: [
          "Transferring data within the same network (LAN)",
          "Using MAC Address",
          "Error detection",
        ],
      },
      tip: {
        ar: "فكر فيه كصندوق مقفول مكتوب عليه عنوان المرسل وعنوان المستلم بس جوه نفس العمارة (LAN).",
        en: "Think of it as a locked box with sender and receiver addresses but within the same building (LAN).",
      },
      components: { ar: "Frame بيتكوّن من", en: "Frame consists of" },
      componentsList: {
        ar: [
          "Header: Source MAC, Destination MAC, Protocol Type",
          "Payload: الداتا الجاية من الطبقات الأعلى",
          "Trailer: FCS (Frame Check Sequence) باستخدام CRC لكشف الأخطاء",
        ],
        en: [
          "Header: Source MAC, Destination MAC, Protocol Type",
          "Payload: Data coming from upper layers",
          "Trailer: FCS (Frame Check Sequence) using CRC for error detection",
        ],
      },
    },
    segment: {
      title: "Segment & Datagram (Layer 4)",
      segmentTcp: {
        title: "Segment (with TCP)",
        features: {
          ar: [
            "يقسّم الداتا الكبيرة",
            "يضيف Port Numbers",
            "يضمن الترتيب والتسليم وتصحيح الأخطاء",
          ],
          en: [
            "Divides large data",
            "Adds Port Numbers",
            "Ensures ordering, delivery, and error correction",
          ],
        },
        desc: "Reliable, Ordered, Slower",
      },
      datagramUdp: {
        title: "Datagram (with UDP)",
        features: {
          ar: [
            "بدون Connection",
            "بدون ضمان تسليم",
            "بدون ترتيب",
            "بدون تصحيح أخطاء",
          ],
          en: [
            "Without Connection",
            "Without delivery guarantee",
            "Without ordering",
            "Without error correction",
          ],
        },
        desc: "Fast, Not Reliable",
        note: {
          ar: "UDP Datagram بيستخدم في: Video, Voice, Gaming, Live streaming",
          en: "UDP Datagram is used in: Video, Voice, Gaming, Live streaming",
        },
      },
    },
  },

  // Section 11: Packet Structure
  packetStructure: {
    quote: {
      ar: "الداتا وهي ماشية في الشبكة بتتقسم لحتت صغيرة اسمها Packets.",
      en: "Data moving through the network is divided into small pieces called Packets.",
    },
    whyPackets: {
      title: {
        ar: "ليه الشبكات بتستخدم Packets؟",
        en: "Why Do Networks Use Packets?",
      },
      desc: {
        ar: "تخيل لو نبعت ملف كبير كقطعة واحدة وضاعت، هنضطر نعيد الملف كله. لكن لما نقسم، لو حتة ضاعت نعيد دي بس! وده بيخلي النقل أسرع وأذكى.",
        en: "Imagine sending a large file as one piece and it gets lost; we'd have to resend everything. But when we divide, if a piece is lost, we only resend that part! This makes transmission faster and smarter.",
      },
      quote: {
        ar: "Packet-based communication = سرعة + كفاءة + موثوقية",
        en: "Packet-based communication = Speed + Efficiency + Reliability",
      },
    },
    intro: {
      ar: "بدل ما نبعت ملف كبير كقطعة واحدة، الشبكة بتقسّم الداتا لحتت صغيرة اسمها Packets.",
      en: "Instead of sending a large file as one piece, the network divides the data into small pieces called Packets.",
    },
    tip: {
      ar: "لو Packet واحدة كبيرة ضاعت يضيع كله، لكن لما نقسم ولو Packet ضاعت نعيد دي بس!",
      en: "If one large Packet is lost, everything is lost, but when we divide, if a Packet is lost, we only resend that one!",
    },
    components: { ar: "Packet بيتكوّن من", en: "Packet consists of" },
    header: {
      title: { ar: "1. Header (الهيدر)", en: "1. Header" },
      desc: {
        ar: "مجموعة تعليمات بتقول للشبكة تتعامل مع الداتا إزاي: جاية منين؟ رايحة فين؟ تتكسر ولا لأ؟",
        en: "A set of instructions telling the network how to handle the data: where from? where to? can it be fragmented?",
      },
      important: {
        ar: "حجم IPv4 Header من 20 بايت لحد 60 بايت (على حسب وجود Options).",
        en: "IPv4 Header size is from 20 bytes to 60 bytes (depending on Options presence).",
      },
      elements: { ar: "عناصر الهيدر", en: "Header Elements" },
      table: {
        headers: { ar: ["Field", "الشرح"], en: ["Field", "Description"] },
        rows: {
          ar: [
            ["Version", "بتحدد نوع IP (غالبًا IPv4)"],
            ["IHL", "طول الهيدر"],
            ["TOS", "بتقول الشبكة تتعامل مع الباكت إزاي (QoS)"],
            ["Identification", "رقم 16-bit لتمييز الباكت لو اتجزأت"],
            ["Flags", "بتتحكم في التجزئة"],
            ["Fragment Offset", "مكان الجزء ده جوه الباكت الأصلية"],
            ["TTL", "عمر الباكت قبل ما تموت"],
            ["Protocol", "البروتوكول اللي جوه (TCP/UDP/ICMP)"],
            ["Source IP", "عنوان المرسل"],
            ["Destination IP", "عنوان المستقبل"],
          ],
          en: [
            ["Version", "Specifies IP type (usually IPv4)"],
            ["IHL", "Header length"],
            ["TOS", "Tells network how to handle packet (QoS)"],
            [
              "Identification",
              "16-bit number to identify packet if fragmented",
            ],
            ["Flags", "Controls fragmentation"],
            ["Fragment Offset", "Position of this fragment in original packet"],
            ["TTL", "Packet lifetime before it dies"],
            ["Protocol", "Protocol inside (TCP/UDP/ICMP)"],
            ["Source IP", "Sender address"],
            ["Destination IP", "Receiver address"],
          ],
        },
        deepDive: {
          title: {
            ar: "Deep Dive: التجزئة (Fragmentation)",
            en: "Deep Dive: Fragmentation",
          },
          desc: {
            ar: "لو Packet كبيرة، الشبكة بتجزأها. كل جزء بياخد نفس الـ Identification بس Fragment Offset مختلف علشان المستقبل يعرف يجمعهم صح.",
            en: "If a Packet is large, the network fragments it. Each fragment gets the same Identification but a different Fragment Offset so the receiver can reassemble them correctly.",
          },
        },
      },
    },
    ttl: {
      title: "TTL (Time To Live)",
      quote: {
        ar: "عدّاد عمر الباكت",
        en: "Packet lifetime counter",
      },
      features: {
        ar: ["كل Router يقلّل TTL بـ 1", "لو وصل 0، الباكت تتترمي"],
        en: [
          "Each Router decreases TTL by 1",
          "If it reaches 0, the packet is discarded",
        ],
      },
      note: {
        ar: "علشان نمنع الباكت تلف في الشبكة للأبد",
        en: "To prevent packets from circulating in the network forever",
      },
    },
    payload: {
      title: { ar: "2. Payload (DATA)", en: "2. Payload (DATA)" },
      desc: {
        ar: "الداتا الفعلية اللي إحنا عايزين نبعتها زي TCP Segment أو UDP Datagram.",
        en: "The actual data we want to send like TCP Segment or UDP Datagram.",
      },
    },
    trailer: {
      title: { ar: "3. Trailer (اختياري)", en: "3. Trailer (Optional)" },
      desc: {
        ar: "مش دايمًا موجود في Layer 3، الفحص الأساسي للأخطاء بيبقى أكتر في Layer 2.",
        en: "Not always present in Layer 3, basic error checking is more common in Layer 2.",
      },
    },
    conclusion: {
      ar: "لما كل الـ Packets توصل للهدف، Network Layer بيجمعهم تاني ويرجّع الداتا الأصلية زي ما كانت.",
      en: "When all Packets reach the destination, the Network Layer reassembles them and restores the original data.",
    },
  },

  // Section 12: IP Addressing
  ipAddressing: {
    quote: {
      ar: "عنوان رقمي فريد بيتحدد لكل جهاز أو Interface جوه الشبكة",
      en: "A unique numerical address assigned to each device or Interface in the network",
    },
    mainFunction: { ar: "وظيفته الأساسية", en: "Main Function" },
    mainFunctionList: {
      ar: ["يعرّف الجهاز داخل الشبكة", "يسمح بالتواصل بين الأجهزة"],
      en: [
        "Identifies the device within the network",
        "Allows communication between devices",
      ],
    },
    whereWorks: {
      title: { ar: "IP بيشتغل فين؟", en: "Where Does IP Work?" },
      list: {
        ar: [
          "داخل الشبكات المحلية LAN",
          "عبر الشبكات الواسعة WAN",
          "كل جهاز (كمبيوتر، موبايل، راوتر) لازم يكون له IP",
        ],
        en: [
          "Inside Local Area Networks (LAN)",
          "Across Wide Area Networks (WAN)",
          "Every device (PC, mobile, router) must have an IP",
        ],
      },
    },
    important: {
      ar: "من غير IP مفيش Networking أساسًا!",
      en: "Without IP, there is no Networking at all!",
    },
    types: { ar: "أنواع الـ IP Address", en: "Types of IP Address" },
    staticIp: {
      title: "1. Static IP",
      features: {
        ar: ["عنوان ثابت لا يتغير", "غالبًا يستخدم في Servers والأجهزة المهمة"],
        en: [
          "Fixed address that doesn't change",
          "Usually used in Servers and important devices",
        ],
      },
    },
    dynamicIp: {
      title: "2. Dynamic IP",
      features: {
        ar: [
          "عنوان متغير",
          "يتم إعطاؤه تلقائيًا بواسطة DHCP",
          "الأكثر استخدامًا في البيوت والشركات",
        ],
        en: [
          "Variable address",
          "Automatically assigned by DHCP",
          "Most commonly used in homes and companies",
        ],
      },
    },
    dhcp: {
      title: "DHCP",
      fullName: "Dynamic Host Configuration Protocol",
      desc: {
        ar: "مسؤول عن توزيع IP addresses تلقائيًا وإعطاء:",
        en: "Responsible for automatically distributing IP addresses and providing:",
      },
      provides: ["IP", "Subnet Mask", "Gateway", "DNS"],
      tip: {
        ar: "بدون DHCP هتدخل IP يدوي لكل جهاز!",
        en: "Without DHCP, you would have to manually enter IP for each device!",
      },
    },
    apipa: {
      title: "APIPA",
      desc: {
        ar: "لو حصل فشل في DHCP، الجهاز يدي نفسه IP تلقائي من الرينج:",
        en: "If DHCP fails, the device gives itself an automatic IP from the range:",
      },
      warning: {
        ar: "ده معناه الجهاز شغال بس مفيش اتصال حقيقي بالشبكة!",
        en: "This means the device is working but there's no real network connection!",
      },
    },
    structure: {
      title: "IPv4 Address Structure",
      features: {
        ar: ["IPv4 = 32 bits", "مقسمة إلى 4 Octets", "كل Octet = 8 bits"],
        en: ["IPv4 = 32 bits", "Divided into 4 Octets", "Each Octet = 8 bits"],
      },
    },
  },

  // Section 13: NAT
  nat: {
    quote: {
      ar: "الراوتر بيحوّل IPs الخاصة داخل الشبكة إلى IP عام واحد عند الاتصال بالإنترنت (والعكس)",
      en: "The router converts private IPs within the network to a single public IP when connecting to the Internet (and vice versa)",
    },
    whyUse: { ar: "ليه نستخدم NAT؟", en: "Why use NAT?" },
    whyUseList: {
      ar: [
        "عناوين IPv4 العامة محدودة",
        "Private IPs لا يمكنها الاتصال بالإنترنت مباشرة",
        "NAT يسمح لأكتر من جهاز باستخدام IP عام واحد",
      ],
      en: [
        "Public IPv4 addresses are limited",
        "Private IPs cannot connect to the Internet directly",
        "NAT allows multiple devices to use one public IP",
      ],
    },
    benefits: { ar: "فوائد NAT", en: "NAT Benefits" },
    benefitsList: {
      ar: [
        "توفير عناوين IPv4",
        "تحسين الأمان (إخفاء الأجهزة الداخلية)",
        "تمكين الشبكات الخاصة من الاتصال بالإنترنت",
      ],
      en: [
        "Saving IPv4 addresses",
        "Improving security (hiding internal devices)",
        "Enabling private networks to connect to the Internet",
      ],
    },
    types: { ar: "أنواع NAT", en: "NAT Types" },
    staticNat: {
      title: "Static NAT",
      desc: {
        ar: "IP خاص ↔ IP عام (ثابت، استخدام محدود)",
        en: "Private IP ↔ Public IP (fixed, limited use)",
      },
    },
    dynamicNat: {
      title: "Dynamic NAT",
      desc: {
        ar: "مجموعة IPs عامة تُستخدم مؤقتًا حسب المتاح",
        en: "A pool of public IPs used temporarily based on availability",
      },
    },
    pat: {
      title: "PAT (Port Address Translation)",
      important: {
        ar: "أشهر نوع! عدة أجهزة تشترك في IP عام واحد باستخدام أرقام Ports مختلفة. المستخدم في المنازل غالبًا.",
        en: "Most common type! Multiple devices share one public IP using different Port numbers. Usually used in homes.",
      },
    },
    example: { ar: "مثال عملي (البيت)", en: "Practical Example (Home)" },
    exampleList: {
      ar: [
        "الموبايل – اللابتوب – التلفزيون: Private IPs (192.168.x.x)",
        "الراوتر: يحوّلهم لـ IP عام واحد",
        "الإنترنت: يشوف الراوتر بس",
      ],
      en: [
        "Mobile – Laptop – TV: Private IPs (192.168.x.x)",
        "Router: Converts them to one public IP",
        "Internet: Only sees the router",
      ],
    },
  },

  // Section 14: IPv4 Classes
  ipv4Classes: {
    intro: {
      ar: "IPv4 متقسم إلى 5 Classes:",
      en: "IPv4 is divided into 5 Classes:",
    },
    classTable: {
      headers: {
        ar: ["Class", "الوصف", "النطاق", "أول Octet"],
        en: ["Class", "Description", "Range", "First Octet"],
      },
      rows: {
        ar: [
          ["A", "شبكات ضخمة جدًا", "1.0.0.0 → 126.255.255.255", "1 – 126"],
          ["B", "شبكات متوسطة", "128.0.0.0 → 191.255.255.255", "128 – 191"],
          ["C", "شبكات صغيرة", "192.0.0.0 → 223.255.255.255", "192 – 223"],
          ["D", "Multicast", "224.x.x.x → 239.x.x.x", "224 – 239"],
          ["E", "أبحاث وتجارب", "240.x.x.x → 255.x.x.x", "240 – 255"],
        ],
        en: [
          ["A", "Very large networks", "1.0.0.0 → 126.255.255.255", "1 – 126"],
          ["B", "Medium networks", "128.0.0.0 → 191.255.255.255", "128 – 191"],
          ["C", "Small networks", "192.0.0.0 → 223.255.255.255", "192 – 223"],
          ["D", "Multicast", "224.x.x.x → 239.x.x.x", "224 – 239"],
          [
            "E",
            "Research and experiments",
            "240.x.x.x → 255.x.x.x",
            "240 – 255",
          ],
        ],
      },
    },
    loopback: {
      ar: "127.x.x.x محجوز للـ Loopback. مثال: 127.0.0.1 يعني الجهاز بيكلم نفسه.",
      en: "127.x.x.x is reserved for Loopback. Example: 127.0.0.1 means the device is talking to itself.",
    },
    privateIp: {
      title: "Private IP Addresses",
      desc: {
        ar: "تُستخدم داخل الشبكات الخاصة فقط وحدّدتها IANA:",
        en: "Used only within private networks and defined by IANA:",
      },
      table: {
        headers: {
          ar: ["Class", "النطاق الخاص"],
          en: ["Class", "Private Range"],
        },
        rows: [
          ["A", "10.0.0.0 – 10.255.255.255"],
          ["B", "172.16.0.0 – 172.31.255.255"],
          ["C", "192.168.0.0 – 192.168.255.255"],
        ],
      },
    },
  },

  // Section 15: Subnetting
  subnetting: {
    subnet: {
      title: "Subnet",
      desc: {
        ar: "جزء من الشبكة الأساسية بيشتغل كشبه شبكة مستقلة، له Network Address خاص.",
        en: "A part of the main network that operates as a semi-independent network, with its own Network Address.",
      },
    },
    subnetMask: {
      title: "Subnet Mask",
      features: {
        ar: [
          "قيمة 32-bit",
          "بتحدد أنهي جزء Network وأنهي جزء Host",
          "تسمح بتقسيم شبكة واحدة لعدة Subnets أصغر",
        ],
        en: [
          "32-bit value",
          "Determines which part is Network and which is Host",
          "Allows dividing one network into smaller Subnets",
        ],
      },
    },
    borrowingBits: {
      title: "Borrowing Bits",
      desc: {
        ar: "نقدر نستلف Bits من جزء الـ Host ونزود عدد الشبكات.",
        en: "We can borrow Bits from the Host portion to increase the number of networks.",
      },
      tip: {
        ar: "في Class C، أول 3 Octets = Network، نقدر نستلف من الـ Octet الرابع.",
        en: "In Class C, first 3 Octets = Network, we can borrow from the fourth Octet.",
      },
    },
    binaryNotation: {
      title: "Binary Notation",
      desc: {
        ar: "Subnetting أسهل في النظام الثنائي Binary:",
        en: "Subnetting is easier in Binary notation:",
      },
      rules: {
        ar: ["Mask = 1 → Network", "Mask = 0 → Host"],
        en: ["Mask = 1 → Network", "Mask = 0 → Host"],
      },
      note: {
        ar: "1s أكتر = شبكات أكتر | 0s أكتر = Hosts أكتر",
        en: "More 1s = More networks | More 0s = More Hosts",
      },
    },
  },

  // Section 16: IPv6
  ipv6: {
    whyAppeared: { ar: "ليه ظهر IPv6؟", en: "Why did IPv6 appear?" },
    whyAppearedDesc: {
      ar: "لأن IPv4 (32-bit) خلص تقريبًا والإنترنت كبر جدًا.",
      en: "Because IPv4 (32-bit) is almost exhausted and the Internet has grown significantly.",
    },
    quote: {
      ar: "IPv6 جه علشان يوفر عدد عناوين ضخم جدًا",
      en: "IPv6 came to provide a huge number of addresses",
    },
    addressSize: { ar: "حجم العنوان", en: "Address Size" },
    sizeTable: {
      headers: { ar: ["النسخة", "الحجم"], en: ["Version", "Size"] },
      rows: [
        ["IPv4", "32 bit"],
        ["IPv6", "128 bit"],
      ],
    },
    addressFormat: { ar: "شكل IPv6 Address", en: "IPv6 Address Format" },
    formatFeatures: {
      ar: ["8 مجموعات", "Hexadecimal", "كل مجموعة = 4 رموز"],
      en: ["8 groups", "Hexadecimal", "Each group = 4 symbols"],
    },
    advantages: { ar: "مميزات IPv6", en: "IPv6 Advantages" },
    advantagesList: {
      ar: [
        "عدد عناوين مهول",
        "أمان أعلى (IPsec مدمج)",
        "لا يحتاج NAT",
        "أداء أفضل في بعض الحالات",
        "إعداد تلقائي (Stateless Autoconfiguration)",
      ],
      en: [
        "Massive number of addresses",
        "Higher security (built-in IPsec)",
        "No need for NAT",
        "Better performance in some cases",
        "Automatic configuration (Stateless Autoconfiguration)",
      ],
    },
    noBroadcast: {
      ar: "IPv6 لا يستخدم Broadcast، بدل كده يستخدم Multicast و Anycast.",
      en: "IPv6 doesn't use Broadcast, instead it uses Multicast and Anycast.",
    },
    addressTypes: { ar: "أنواع عناوين IPv6", en: "IPv6 Address Types" },
    addressTypesList: {
      ar: [
        "Unicast → لجهاز واحد",
        "Multicast → لمجموعة",
        "Anycast → لأقرب جهاز",
      ],
      en: [
        "Unicast → To one device",
        "Multicast → To a group",
        "Anycast → To nearest device",
      ],
    },
    noNatWhy: {
      ar: "ليه IPv6 مش محتاج NAT؟ لأن عدد العناوين كبير جدًا، كل جهاز يقدر يكون له Public IP خاص بيه!",
      en: "Why doesn't IPv6 need NAT? Because the number of addresses is so large, every device can have its own Public IP!",
    },
    conclusion: { ar: "الخلاصة", en: "Conclusion" },
    conclusionList: {
      ar: [
        "IP هو هوية الجهاز في الشبكة",
        "IPv4 محدود → IPv6 الحل",
        "DHCP بيوزع IPs تلقائيًا",
        "NAT حل مؤقت لمشكلة IPv4",
        "Subnetting مهم لتنظيم الشبكات",
        "IPv6 = مستقبل الإنترنت",
      ],
      en: [
        "IP is the device identity in the network",
        "IPv4 is limited → IPv6 is the solution",
        "DHCP distributes IPs automatically",
        "NAT is a temporary solution for IPv4 problem",
        "Subnetting is important for network organization",
        "IPv6 = Future of the Internet",
      ],
    },
  },

  // Section 17: Network Performance Metrics
  networkPerformanceMetrics: {
    intro: {
      ar: "الإنترنت في الأصل شبكة Best-Effort، يعني الشبكة 'هتحاول' توصل الباكيت، بس من غير ضمان زمن، ترتيب، أو حتى وصول. زمان كانت الويب والايميل مش محتاجين سرعة لحظية، لكن دلوقتي الوضع اختلف.",
      en: "The Internet is originally a Best-Effort network, meaning the network 'tries' to deliver the packet, but without guaranteeing time, order, or even arrival. In the past, web and email didn't need instant speed, but now the situation is different.",
    },
    bigPicture: {
      ar: "زمان كان عادي لو الصفحة اتأخرت ثانية، لكن دلوقتي مع VoIP والـ Video والـ Gaming، الحاجات دي Real-time وحساسة جدًا للزمن.",
      en: "In the past, it was okay if a page delayed for a second, but now with VoIP, Video, and Gaming, these things are Real-time and very time-sensitive.",
    },
    needs: {
      ar: ["Delay قليل عشان الصوت ميعملش echo", "Jitter قليل عشان مفيش تقطيع", "Reliability عالية عشان مفيش drops"],
      en: ["Low Delay so voice doesn't echo", "Low Jitter for no interruptions", "High Reliability for no drops"],
    },
    qosIntro: {
      ar: "هنا ظهر مفهوم QoS – Quality of Service: إن الشبكة تتعامل بذكاء مع أنواع الترافيك المختلفة (Voice ≠ Email).",
      en: "This led to the concept of QoS – Quality of Service: The network handles different traffic types intelligently (Voice ≠ Email).",
    },
  },

  // Section 18: Routing Problems
  routingProblems: {
    intro: {
      ar: "دي المشاكل الـ 6 الأساسية اللي أي شبكة لازم تتعامل معاها عشان تضمن جودة الخدمة:",
      en: "These are the 6 basic problems any network must handle to ensure quality of service:",
    },
    droppedPackets: {
      title: { ar: "1️⃣ Dropped Packets (فقدان الحزم)", en: "1️⃣ Dropped Packets" },
      causes: {
        ar: "Buffer الراوتر مليان أو فيه Congestion (زحمة).",
        en: "Router Buffer full or Congestion occurs.",
      },
      analogy: { ar: "تشبيه: أوتوبيس مليان، أي حد جديد يُرفض.", en: "Analogy: A full bus; any new passenger is rejected." },
      impact: {
        ar: "TCP بيضطر يعيد الإرسال، وده بيزوّد الـ Delay ويقلل الـ Throughput.",
        en: "TCP must retransmit, which increases Delay and decreases Throughput.",
      },
    },
    delay: {
      title: { ar: "2️⃣ Delay (التأخير)", en: "2️⃣ Delay" },
      causes: {
        ar: "الزحمة (Congestion)، المسارات الطويلة، أو وقت الانتظار في الـ Queue.",
        en: "Congestion, long paths, or waiting time in the Queue.",
      },
      note: { ar: "ملحوظة: مش بس المسافة، ممكن مسار قصير بس زحمة يكون أبطأ.", en: "Note: It's not just distance; a short but congested path can be slower." },
      impact: {
        ar: "بياثر على سرعة استجابة التطبيقات وخصوصًا الـ Real-time.",
        en: "Affects application responsiveness, especially for Real-time apps.",
      },
    },
    jitter: {
      title: { ar: "3️⃣ Jitter (تذبذب التأخير)", en: "3️⃣ Jitter" },
      meaning: {
        ar: "اختلاف زمن وصول الباكيتات (واحد 50ms والتاني 90ms).",
        en: "Variation in packet arrival times (e.g., one 50ms, another 90ms).",
      },
      impact: {
        ar: "بيخلي الصوت يقطع (أ-لو... سسسلام) والفيديو يهنّج.",
        en: "Causes choppy audio and frozen video.",
      },
    },
    outOfOrder: {
      title: { ar: "4️⃣ Out-of-Order Delivery (ترتيب ملخبط)", en: "4️⃣ Out-of-Order Delivery" },
      causes: {
        ar: "الـ Load balancing أو وجود أكتر من مسار لنفس الوجهة.",
        en: "Load balancing or multiple paths to the same destination.",
      },
      impact: {
        ar: "مشكلة كبيرة لبروتوكولات الـ Video streams والـ TCP اللي بيضطر يرتبهم تاني.",
        en: "Major issue for Video streams and TCP, which must reorder them.",
      },
    },
    errors: {
      title: { ar: "5️⃣ Errors (أخطاء البيانات)", en: "5️⃣ Errors" },
      causes: {
        ar: "الـ Noise أو الـ Bad links بتخلي الباكيت Corrupted.",
        en: "Noise or Bad links cause corrupted packets.",
      },
      impact: {
        ar: "الباكت بتترمي (Drop) أو يُعاد إرسالها، وده بيضعف الأداء.",
        en: "Packets are dropped or retransmitted, weakening performance.",
      },
    },
    faultTolerance: {
      title: { ar: "6️⃣ Fault Tolerance & Redundancy", en: "6️⃣ Fault Tolerance & Redundancy" },
      goal: {
        ar: "لو لينك وقع، الخدمة تكمّل عن طريق مسارات بديلة.",
        en: "If a link fails, the service continues via alternative paths.",
      },
      note: { ar: "ده هو روح الإنترنت والـ MPLS والـ Modern routing.", en: "This is the essence of the Internet, MPLS, and modern routing." },
    },
  },

  // Section 19: The Need to Route
  needToRoute: {
    why: { ar: "ليه أصلاً محتاجين Routing؟", en: "Why do we need Routing?" },
    mental: {
      ar: 'أي جهاز على الشبكة بيكلم أجهزة تانية - سواء جنبه في نفس الـ LAN أو في دولة تانية عبر الإنترنت. اللي يخلي ده يحصل اسمه Logical Adjacency - إحساس منطقي إن الأجهزة "قريبة" من بعض حتى لو بينهم آلاف الكيلومترات.',
      en: 'Any device on a network communicates with other devices - whether next to it in the same LAN or in another country over the Internet. What makes this happen is called Logical Adjacency - a logical feeling that devices are "close" to each other even if they are thousands of kilometers apart.',
    },
    routerRole: {
      title: { ar: "دور الـ Router الحقيقي", en: "The Real Role of a Router" },
      desc: {
        ar: "الراوتر بيدعم عملية Forwarding باستخدام Network Layer Addresses (IP) وبيعتمد على Routing وRoute Calculation - يقرر الحزمة تمشي فين وإزاي وعن أنهي طريق",
        en: "The Router supports the Forwarding process using Network Layer Addresses (IP) and relies on Routing and Route Calculation - deciding where packets go, how they go, and which path to use",
      },
    },
  },

  // Section 20: Routers
  routers: {
    basicRequirements: {
      title: { ar: "المتطلبات الأساسية", en: "Basic Requirements" },
      requirements: {
        ar: [
          "عندك 2 Interfaces أو أكتر (LAN / WAN)",
          "علشان يربط أكتر من شبكة",
        ],
        en: [
          "Have 2 or more Interfaces (LAN / WAN)",
          "To connect multiple networks",
        ],
      },
      note: {
        ar: "من غير كده: مش Router أصلاً",
        en: "Without this: not a router at all",
      },
    },
    learning: {
      title: { ar: "الراوتر بيتعلم إيه؟", en: "What Does a Router Learn?" },
      desc: {
        ar: "الراوتر بيتعلم عناوين الشبكات اللي متوصلة بكل Interface ويخزن المعلومات دي في Routing Tables",
        en: "The Router learns the network addresses connected to each Interface and stores this information in Routing Tables",
      },
    },
    routingTable: {
      title: {
        ar: "Routing Table بتعمل إيه؟",
        en: "What Does a Routing Table Do?",
      },
      desc: {
        ar: "جدول بيربط Layer 3 Address (IP / Network) بـ Port / Interface - يعني: لو Packet جاية للعنوان ده → اطلع من البوابة دي",
        en: "A table that links Layer 3 Address (IP / Network) to Port / Interface - meaning: if a Packet comes to this address → exit from this gateway",
      },
      important: {
        ar: "الراوتر مش بيبص على MAC، بيبص على IP (Layer 3) - علشان كده Routing = Layer 3 Logic",
        en: "The Router doesn't look at MAC, it looks at IP (Layer 3) - that's why Routing = Layer 3 Logic",
      },
    },
    protocolTypes: {
      title: { ar: "أنواع البروتوكولات", en: "Protocol Types" },
      table: {
        headers: { ar: ["النوع", "الوظيفة"], en: ["Type", "Function"] },
        rows: [
          ["Routable Protocols", "تنقل الداتا نفسها"],
          ["Routing Protocols", "تختار أحسن طريق"],
        ],
      },
      routable: {
        title: { ar: "Routable Protocols", en: "Routable Protocols" },
        desc: {
          ar: "مسؤولة عن Encapsulation - تشيل داتا المستخدم في Packets. مثال: IP (Internet Protocol)",
          en: "Responsible for Encapsulation - carry user data in Packets. Example: IP (Internet Protocol)",
        },
      },
      routing: {
        title: { ar: "Routing Protocols", en: "Routing Protocols" },
        desc: {
          ar: "لا تنقل داتا المستخدم لكن تعلم الراوتر أنهي طريق أحسن (زي OSPF – RIP – BGP)",
          en: "Don't transfer user data but teach the router which path is better (like OSPF – RIP – BGP)",
        },
      },
    },
  },

  // Section 21: Routing Basics
  routingBasics: {
    definition: {
      title: { ar: "تعريف Routing", en: "Routing Definition" },
      desc: {
        ar: "عملية نقل وتبادل Packets بين شبكات مختلفة باستخدام Router",
        en: "The process of forwarding and exchanging Packets between different networks using a Router",
      },
    },
    sameSubnet: {
      title: {
        ar: "الحالة الأولى: داخل نفس Subnet",
        en: "Case 1: Same Subnet",
      },
      scenario: {
        ar: "جهاز عايز يبعت لجهاز تاني في نفس الشبكة الفرعية",
        en: "A device wants to send to another device in the same subnet",
      },
      what: {
        title: { ar: "إيه اللي يحصل؟", en: "What happens?" },
        items: {
          ar: [
            "Router مش مطلوب",
            "الجهاز يستخدم ARP و ARP Cache",
            "لأن العنوان معروف محليًا",
          ],
          en: [
            "Router not required",
            "Device uses ARP and ARP Cache",
            "Because the address is known locally",
          ],
        },
      },
    },
    differentSubnet: {
      title: {
        ar: "الحالة التانية: بين Subnets مختلفة",
        en: "Case 2: Different Subnets",
      },
      scenario: {
        ar: "الجهاز عايز يبعت لجهاز في Subnet مختلفة",
        en: "The device wants to send to another device in a different subnet",
      },
      what: {
        title: { ar: "إيه اللي يحصل؟", en: "What happens?" },
        steps: {
          ar: [
            "الجهاز يبعت Packet للـ Default Gateway (الراوتر)",
            "الراوتر يشوف Routing Table",
            "يختار المسار",
            "يسلّم البيانات",
          ],
          en: [
            "Device sends Packet to Default Gateway (Router)",
            "Router checks Routing Table",
            "Selects the path",
            "Delivers the data",
          ],
        },
      },
    },
  },

  // Section 22: Routing Tables
  routingTables: {
    intro: {
      ar: "خلّيك متخيل الراوتر واقف في تقاطع طرق كبير، وكل Packet جاية بتسأله: أطلع من أنهي سكة؟ الراوتر مش بيرد من دماغه، هو بيرجع لـ Routing Table. الجدول ده بيحتوي على عنوان الشبكة والـ Subnet Mask والـ Next Hop أو الـ Interface.",
      en: "Imagine a Router standing at a big intersection, and each arriving Packet asks: which path should I take? The Router doesn't answer from memory, it looks at the Routing Table. This table contains the network address, Subnet Mask, Next Hop, or Interface.",
    },
    components: {
      title: { ar: "محتويات Routing Table", en: "Routing Table Contents" },
      table: {
        headers: { ar: ["العنصر", "المعنى"], en: ["Element", "Meaning"] },
        rows: [
          ["Destination IP", "الشبكة اللي رايح لها"],
          ["Subnet Mask", "حجم الشبكة"],
          ["Next Hop", "الراوتر اللي بعده"],
          ["Interface", "هطلع من أنهي Port"],
          ["Metric", "ليه الطريق ده اتختار"],
        ],
      },
    },
    defaultGateway: {
      title: { ar: "Default Gateway", en: "Default Gateway" },
      desc: {
        ar: "0.0.0.0 / 0 يعني: لو مش لاقي طريق محدد ابعت هنا وخلاص",
        en: "0.0.0.0 / 0 means: If no specific route found, send it here",
      },
    },
    dynamic: {
      title: {
        ar: "Dynamic Routing Table Updates",
        en: "Dynamic Routing Table Updates",
      },
      old: {
        ar: "زمان Admin يقعد يكتب Routes بإيده - أي تغيير = صداع",
        en: "Before, Admins would manually write Routes - any change = headache",
      },
      now: {
        ar: "دلوقتي Dynamic Routing - لما Router يقع أو Link يفصل، الراوتر يشيله من الجدول ويعيد الحساب",
        en: "Now Dynamic Routing - when a Router fails or Link disconnects, it's removed from the table and recalculated",
      },
    },
  },

  // Section 23: Routing Protocols
  routingProtocols: {
    intro: {
      ar: "الراوترات مش بتشتغل في صمت. كل راوتر بيكلم اللي جنبه بلغة متفق عليها اسمها Routing Protocol. مفيش Router ذكي لوحده، الذكاء الحقيقي في التواصل.",
      en: "Routers don't work in silence. Each router communicates with neighboring routers in an agreed-upon language called Routing Protocol. No router is smart alone; true intelligence is in communication.",
    },
    purpose: {
      title: {
        ar: "ليه نستخدم Routing Protocols؟",
        en: "Why use Routing Protocols?",
      },
      reasons: {
        ar: [
          "تحديد المسارات المتاحة",
          "تبادل معلومات الشبكات",
          "حساب المسار الأفضل",
          "مراقبة وتحديث المسارات",
        ],
        en: [
          "Determine available paths",
          "Exchange network information",
          "Calculate the best path",
          "Monitor and update routes",
        ],
      },
    },
    functions: {
      title: {
        ar: "وظائف Routing Protocols",
        en: "Routing Protocol Functions",
      },
      items: {
        ar: [
          "اكتشاف طوبولوجيا الشبكة - مين متوصل بمين",
          "اكتشاف عناوين الشبكات - عرفة كل Subnet",
          "التفرقة بين المسارات - اختيار الأحسن",
          "Load Balancing - توزيع الحمل بين الطرق",
        ],
        en: [
          "Discover network topology - who is connected to who",
          "Discover network addresses - know every subnet",
          "Differentiate between paths - choose the best",
          "Load Balancing - distribute traffic across paths",
        ],
      },
    },
    examples: {
      title: { ar: "أمثلة Routing Protocols", en: "Routing Protocol Examples" },
      list: {
        ar: [
          "RIP: بسيط، قديم، يعتمد على Hop Count",
          "OSPF: ذكي، سريع، يعتمد على Cost",
          "BGP: للـ ISPs والإنترنت الكبير",
        ],
        en: [
          "RIP: Simple, old, based on Hop Count",
          "OSPF: Intelligent, fast, based on Cost",
          "BGP: For ISPs and the Internet",
        ],
      },
    },
  },

  // Section 24: Router Evaluation Criteria
  routerEvaluation: {
    intro: {
      ar: "كل بروتوكول توجيه عنده مزايا وعيوب ومعمول لغرض معيّن. في الشبكات الكبيرة طبيعي تلاقي أكتر من Routing Protocol شغالين مع بعض.",
      en: "Each routing protocol has advantages and disadvantages and is designed for a specific purpose. In large networks, it's normal to find multiple routing protocols working together.",
    },
    criteria: [
      {
        name: { ar: "الأمثلية (Optimality)", en: "Optimality" },
        desc: {
          ar: "هل البروتوكول بيعرف يختار أحسن طريق؟ مثال: RIP يعتمد على Hop Count، OSPF على Cost",
          en: "Can the protocol choose the best path? Example: RIP uses Hop Count, OSPF uses Cost",
        },
      },
      {
        name: { ar: "الكفاءة (Efficiency)", en: "Efficiency" },
        desc: {
          ar: "قد إيه بيستهلك CPU وRAM وBandwidth؟ ذكي بس تقيل vs خفيف بس مش دقيق",
          en: "How much CPU, RAM, and Bandwidth does it use? Intelligent but heavy vs light but inaccurate",
        },
      },
      {
        name: { ar: "المتانة (Robustness)", en: "Robustness" },
        desc: {
          ar: "يشتغل كويس في الرخاء ويستحمل في الأزمات - Link failures وRouter crashes",
          en: "Works well normally and handles crises - Link failures and Router crashes",
        },
      },
      {
        name: { ar: "التقارب (Convergence)", en: "Convergence" },
        desc: {
          ar: "الوقت اللي الشبكة تاخده علشان تتفق على شكلها الجديد بعد أي تغيير - أسرع = أحسن",
          en: "Time for the network to agree on its new state after any change - faster = better",
        },
      },
      {
        name: { ar: "قابلية التوسع (Scalability)", en: "Scalability" },
        desc: {
          ar: "ينفع يكبر مع الشبكة؟ بروتوكول على 5 Routers ≠ بروتوكول على 5000 Router",
          en: "Can it grow with the network? 5 Routers ≠ 5000 Routers",
        },
      },
      {
        name: { ar: "الأمان (Security)", en: "Security" },
        desc: {
          ar: "مين مسموح له يعدّي ومن أنهي Port؟ يتم عن طريق ACL",
          en: "Who is allowed to pass and from which port? Handled by ACL",
        },
      },
    ],
  },

  // Section 25: Routers Components
  routerComponents: {
    intro: {
      ar: "الراوتر مش صندوق سحري، ده كمبيوتر متخصص. لو CPU ضعيف → Routing بطيء. لو RAM قليلة → جداول أقل.",
      en: "A Router is not a magic box, it's a specialized computer. Weak CPU → Slow routing. Low RAM → Fewer tables.",
    },
    components: {
      table: {
        headers: { ar: ["المكون", "الدور"], en: ["Component", "Role"] },
        rows: [
          ["CPU", "يشغل Routing Protocols ويحسب المسارات"],
          ["RAM", "يخزن Routing Table وARP Cache"],
          ["BIOS", "يبدأ تشغيل الجهاز"],
          ["OS", "زي IOS - العقل المدبر"],
          ["Motherboard", "يربط كل المكونات"],
          ["I/O Ports", "Interfaces (LAN / WAN)"],
          ["Power & Chassis", "تشغيل وحماية"],
        ],
      },
    },
  },

  // Section 26: Router Roles in WANs
  routerRolesInWAN: {
    intro: {
      ar: "مفيش شبكة WAN كبيرة تشتغل من غير Hierarchy. لو سيبت كل Router يتعامل مع كل الشبكات ويحفظ كل المسارات، الشبكة هتتخنق. الحل: تنظيم هرمي يوزّع المسؤوليات.",
      en: "No large WAN works without Hierarchy. If every Router handles every network and knows every path, the network chokes. Solution: hierarchical organization that distributes responsibility.",
    },
    hierarchy: {
      title: { ar: "ليه محتاجين تنظيم هرمي؟", en: "Why need Hierarchy?" },
      analogy: {
        ar: "تخيل الإنترنت كمدينة: سواق الميكروباص مش محتاج يعرف كل شوارع البلد، يعرف منطقته + الطرق الرئيسية. نفس كده في الشبكات.",
        en: "Imagine the Internet like a city: a minibus driver doesn't need to know every street, just their area + main roads. Same in networks.",
      },
    },
    types: {
      intro: {
        ar: "الهيرار شي يخلق وظائف توجيه متخصصة - Routers مش كلها شبه بعض:",
        en: "Hierarchy creates specialized routing functions - not all Routers are the same:",
      },
      interior: {
        title: {
          ar: "Interior Gateways (البوابات الداخلية)",
          en: "Interior Gateways",
        },
        desc: {
          ar: "بتعلم الأجهزة والشبكات والمسارات داخل نطاقها بس (داخل AS واحد). مثال: Routers داخل شركة بتوصل ما بين HR و Finance Networks.",
          en: "Learn devices, networks, and routes within their scope only (within one AS). Example: Routers within a company connecting HR and Finance Networks.",
        },
      },
      exterior: {
        title: {
          ar: "Exterior Gateways (البوابات الخارجية)",
          en: "Exterior Gateways",
        },
        desc: {
          ar: "بتجمع معلومات عن شبكات خارج نطاقها وبتتكلم مع Routers تانية. مثال: ISP Routers اللي بتوصل آلاف الشبكات.",
          en: "Collect information about networks outside their scope and communicate with other routers. Example: ISP routers connecting thousands of networks.",
        },
      },
      border: {
        title: { ar: "Border Routers (الأهم)", en: "Border Routers" },
        desc: {
          ar: "واقفة على الحد بين AS وAS. بتربط AS داخلي بـ AS خارجي وبتقرر إيه يدخل وإيه يطلع. ممكن تربط AS بـ AS لنفس الشركة.",
          en: "Standing at the boundary between AS and AS. Connects internal AS to external AS and controls what enters/exits. Can connect AS to AS for the same company.",
        },
      },
    },
  },

  // Section 27: Autonomous Systems
  autonomousSystems: {
    definition: {
      title: {
        ar: "يعني إيه Autonomous System (AS)؟",
        en: "What is an Autonomous System (AS)?",
      },
      desc: {
        ar: "شبكة كبيرة مستقلة إداريًا ومكتفية ذاتيًا نسبيًا. تحت إدارة شخص أو Team واحد، عندها Addressing scheme واحد وRouting policy واحدة.",
        en: "A large network that is administratively independent and relatively self-sufficient. Under one person's or team's management, with one Addressing scheme and one Routing policy.",
      },
    },
    characteristics: {
      title: { ar: "خصائص AS", en: "AS Characteristics" },
      list: {
        ar: [
          "تحت إدارة شخص أو Team واحد",
          "Addressing scheme واحد",
          "Routing policy واحدة",
          "غالبًا Routing Protocol واحد داخلي",
        ],
        en: [
          "Under one person's or team's management",
          "One Addressing scheme",
          "One Routing policy",
          "Usually one internal Routing Protocol",
        ],
      },
    },
    important: {
      ar: "نقطة مهمة: AS ممكن يبقى LAN وممكن WAN وممكن الاتنين. المهم: الإدارة + السياسة + الاستقلال.",
      en: "Important: An AS can be a LAN, WAN, or both. What matters: Management + Policy + Independence.",
    },
    examples: {
      title: { ar: "أمثلة AS", en: "AS Examples" },
      list: {
        ar: ["Google AS", "Amazon AS", "ISP AS"],
        en: ["Google AS", "Amazon AS", "ISP AS"],
      },
    },
  },

  // Section 44: VPN
  vpn: {
    intro: {
      ar: "الـ VPN هو نفق آمن بيخلي اتصالك يمشي جوّه الإنترنت العام كأنه شبكة خاصة مقفولة.",
      en: "VPN is a secure tunnel that makes your connection run inside the public internet as if it were a private closed network.",
    },
    bigPicture: {
      title: { ar: "🧠 الفكرة العامة (Big Picture)", en: "🧠 The Big Picture" },
      internet: {
        title: { ar: "الإنترنت:", en: "Internet:" },
        list: {
          ar: ["Public", "مفتوح", "أي باكت ممكن تتشاف"],
          en: ["Public", "Open", "Any packet can be seen"],
        },
      },
      vpn: {
        title: { ar: "VPN:", en: "VPN:" },
        list: {
          ar: [
            "يعمل Tunnel",
            "يشفر الداتا",
            "يخلي الترافيك مخفي وآمن وواصل من نقطة لنقطة",
          ],
          en: [
            "Creates a Tunnel",
            "Encrypts data",
            "Makes traffic hidden, secure, and point-to-point",
          ],
        },
      },
    },
    whyUse: {
      title: { ar: "❓ ليه نستخدم VPN؟", en: "❓ Why use VPN?" },
      list: {
        ar: [
          "حماية الداتا (Security)",
          "الخصوصية (Privacy)",
          "الوصول لشبكة شركة من بره",
          "تجاوز القيود الجغرافية",
          "استخدام Wi-Fi عام بأمان",
        ],
        en: [
          "Data protection (Security)",
          "Privacy",
          "Accessing company network from outside",
          "Bypassing geographical restrictions",
          "Using public Wi-Fi safely",
        ],
      },
      summary: {
        ar: "يعني: أمان + خصوصية + تحكم",
        en: "Meaning: Security + Privacy + Control",
      },
    },
    howWorks: {
      title: { ar: "⚙️ إزاي VPN بيشتغل؟ (بالعقل)", en: "⚙️ How does VPN work?" },
      steps: {
        ar: [
          "الجهاز يعمل اتصال بـ VPN Server",
          "يحصل Authentication",
          "يتعمل Tunnel",
          "الداتا تتشفر وتتحط جوه Packet جديدة",
          "الترافيك يعدي في الإنترنت",
          "يفك التشفير عند الطرف التاني",
        ],
        en: [
          "Device connects to VPN Server",
          "Authentication occurs",
          "Tunnel is created",
          "Data is encrypted and placed inside a new Packet",
          "Traffic passes through the internet",
          "Decryption occurs at the other end",
        ],
      },
      quote: {
        ar: "أي حد في النص يشوف: Encrypted garbage 😄",
        en: "Anyone in the middle sees: Encrypted garbage 😄",
      },
    },
    components: {
      title: { ar: "🧱 VPN Core Components", en: "🧱 VPN Core Components" },
      headers: { ar: ["Component", "وظيفته"], en: ["Component", "Function"] },
      rows: [
        [
          "Client",
          {
            ar: "الجهاز اللي طالب الاتصال",
            en: "The device requesting connection",
          },
        ],
        [
          "VPN Server",
          {
            ar: "الطرف التاني اللي هيستقبل",
            en: "The other end that will receive",
          },
        ],
        ["Tunnel", { ar: "المسار الآمن", en: "The secure path" }],
        ["Encryption", { ar: "تشفير الداتا", en: "Data encryption" }],
        ["Authentication", { ar: "التحقق من الهوية", en: "Identity verification" }],
        [
          "Tunneling Protocol",
          { ar: "إزاي الباكت تتحط جوه بعض", en: "How packets are encapsulated" },
        ],
      ],
    },
    authMethods: {
      title: { ar: "🔑 Authentication Methods", en: "🔑 Authentication Methods" },
      list: {
        ar: [
          "Username / Password",
          "Certificates",
          "Pre-shared Key",
          "Multi-Factor Authentication",
        ],
        en: [
          "Username / Password",
          "Certificates",
          "Pre-shared Key",
          "Multi-Factor Authentication",
        ],
      },
      goal: {
        ar: "الهدف: مين انت؟ قبل ما تدخل",
        en: "Goal: Who are you? Before you enter",
      },
    },
    encryption: {
      title: { ar: "🔐 Encryption", en: "🔐 Encryption" },
      desc: {
        ar: "يحمي Confidentiality ويمنع Sniffing و Man-in-the-middle.",
        en: "Protects Confidentiality and prevents Sniffing and Man-in-the-middle.",
      },
      examples: ["AES", "RSA", "SHA (Integrity)"],
    },
    protocols: {
      title: { ar: "🌐 Tunneling Protocols", en: "🌐 Tunneling Protocols" },
      headers: { ar: ["Protocol", "ملاحظات"], en: ["Protocol", "Notes"] },
      rows: [
        ["PPTP", { ar: "قديم وضعيف", en: "Old and weak" }],
        ["L2TP", { ar: "محتاج IPsec", en: "Needs IPsec" }],
        ["IPsec", { ar: "قوي وشائع", en: "Strong and common" }],
        [
          "SSL / TLS",
          { ar: "مستخدم في VPNs الحديثة", en: "Used in modern VPNs" },
        ],
        ["OpenVPN", { ar: "Flexible + Secure", en: "Flexible + Secure" }],
      ],
    },
    types: {
      title: { ar: "🧭 Types of VPN", en: "🧭 Types of VPN" },
      remoteAccess: {
        title: "Remote Access VPN",
        list: {
          ar: ["User → Company Network", "شائع في Work from home"],
          en: ["User → Company Network", "Common in Work from home"],
        },
      },
      siteToSite: {
        title: "Site-to-Site VPN",
        list: {
          ar: ["Network → Network", "ربط فرعين شركة"],
          en: ["Network → Network", "Connecting two company branches"],
        },
      },
      clientToSite: {
        title: "Client-to-Site VPN",
        desc: { ar: "جهاز واحد → شبكة", en: "One device → Network" },
      },
    },
    comparison: {
      title: {
        ar: "🧠 VPN vs Normal Connection",
        en: "🧠 VPN vs Normal Connection",
      },
      normal: {
        title: { ar: "Normal:", en: "Normal:" },
        list: {
          ar: ["IP حقيقي", "داتا مكشوفة"],
          en: ["Real IP", "Exposed data"],
        },
      },
      vpn: {
        title: { ar: "VPN:", en: "VPN:" },
        list: {
          ar: ["IP متغير", "داتا مشفرة", "Tunnel آمن"],
          en: ["Variable IP", "Encrypted data", "Secure tunnel"],
        },
      },
    },
    importantNotes: {
      title: { ar: "⚠️ ملاحظات مهمة", en: "⚠️ Important Notes" },
      list: {
        ar: [
          "VPN مش بيخليك Anonymous 100%",
          "السرعة ممكن تقل",
          "الأمان يعتمد على البروتوكول والإعدادات",
        ],
        en: [
          "VPN doesn't make you 100% anonymous",
          "Speed might decrease",
          "Security depends on protocol and settings",
        ],
      },
    },
  },

  // Section 45: Ports
  ports: {
    intro: {
      ar: "الـ Port هو رقم بيحدد أنهي Service / Application جوّه الجهاز هيستقبل الباكت.",
      en: "A Port is a number that determines which Service / Application inside the device will receive the packet.",
    },
    mentalImage: {
      title: { ar: "🧠 الصورة الذهنية (قبل أي حاجة)", en: "🧠 Mental Image" },
      ip: {
        ar: "IP Address → يحدد مين الجهاز",
        en: "IP Address → Identifies the device",
      },
      port: {
        ar: "Port Number → يحدد مين البرنامج جوّه الجهاز",
        en: "Port Number → Identifies the program inside the device",
      },
      analogy: {
        ar: "يعني: IP = العمارة، Port = الشقة",
        en: "Meaning: IP = Building, Port = Apartment",
      },
    },
    whyImportant: {
      title: { ar: "❓ ليه Ports مهمة؟", en: "❓ Why are Ports important?" },
      desc: {
        ar: "لأن جهاز واحد ممكن يشغل Web Server و Email و FTP و SSH كلهم على نفس الـ IP. لازم نعرف الباكت رايحة لمين بالظبط؟ والحل هو Port Number.",
        en: "Because one device can run a Web Server, Email, FTP, and SSH all on the same IP. We must know exactly who the packet is going to, and the solution is the Port Number.",
      },
    },
    howWorks: {
      title: { ar: "⚙️ إزاي Ports بتشتغل؟", en: "⚙️ How do Ports work?" },
      steps: {
        ar: [
          "Application تفتح Port",
          "OS يعمل Bind بين Port و Application",
          "Packet توصل (IP + Port)",
          "OS يسلم الباكت للبرنامج الصح",
        ],
        en: [
          "Application opens a Port",
          "OS binds Port to Application",
          "Packet arrives (IP + Port)",
          "OS delivers packet to the correct program",
        ],
      },
    },
    inPacket: {
      title: { ar: "📦 Port داخل الباكت", en: "📦 Port inside the Packet" },
      desc: {
        ar: "Ports موجودة في Transport Layer داخل TCP Header و UDP Header.",
        en: "Ports are in the Transport Layer inside the TCP Header and UDP Header.",
      },
      headerContains: {
        ar: "Transport Header يحتوي: Source Port و Destination Port",
        en: "Transport Header contains: Source Port and Destination Port",
      },
    },
    ranges: {
      title: { ar: "🔢 Port Number Range", en: "🔢 Port Number Range" },
      headers: {
        ar: ["Range", "الاسم", "الاستخدام"],
        en: ["Range", "Name", "Usage"],
      },
      rows: [
        [
          "0 – 1023",
          { ar: "Well-known", en: "Well-known" },
          { ar: "Services معروفة", en: "Known Services" },
        ],
        [
          "1024 – 49151",
          { ar: "Registered", en: "Registered" },
          { ar: "Apps مسجلة", en: "Registered Apps" },
        ],
        [
          "49152 – 65535",
          { ar: "Dynamic / Ephemeral", en: "Dynamic / Ephemeral" },
          { ar: "مؤقتة", en: "Temporary" },
        ],
      ],
    },
    wellKnown: {
      title: {
        ar: "🌍 Well-Known Ports (مهمة جدًا)",
        en: "🌍 Well-Known Ports",
      },
      headers: {
        ar: ["Port", "Protocol", "Service"],
        en: ["Port", "Protocol", "Service"],
      },
      rows: [
        ["20 / 21", "TCP", "FTP"],
        ["22", "TCP", "SSH"],
        ["23", "TCP", "Telnet"],
        ["25", "TCP", "SMTP"],
        ["53", "TCP / UDP", "DNS"],
        ["80", "TCP", "HTTP"],
        ["443", "TCP", "HTTPS"],
        ["110", "TCP", "POP3"],
        ["143", "TCP", "IMAP"],
      ],
    },
    sourceVsDest: {
      title: {
        ar: "🔁 Source Port vs Destination Port",
        en: "🔁 Source Port vs Destination Port",
      },
      dest: {
        title: { ar: "Destination Port", en: "Destination Port" },
        list: {
          ar: ["ثابت", "معروف", "بيحدد الخدمة"],
          en: ["Fixed", "Known", "Identifies the service"],
        },
      },
      source: {
        title: { ar: "Source Port", en: "Source Port" },
        list: {
          ar: ["Dynamic", "مؤقت", "يحدده OS"],
          en: ["Dynamic", "Temporary", "Determined by OS"],
        },
      },
      example: {
        ar: "مثال: Browser (Source: 54321), Server (Dest: 80)",
        en: "Example: Browser (Source: 54321), Server (Dest: 80)",
      },
    },
    tcpVsUdp: {
      title: { ar: "🔄 TCP vs UDP مع Ports", en: "🔄 TCP vs UDP with Ports" },
      headers: { ar: ["Feature", "TCP", "UDP"], en: ["Feature", "TCP", "UDP"] },
      rows: [
        [{ ar: "الاتصال", en: "Connection" }, "Yes", "No"],
        [{ ar: "الموثوقية", en: "Reliability" }, "High", "Low"],
        [
          { ar: "السرعة", en: "Speed" },
          { ar: "أبطأ", en: "Slower" },
          { ar: "أسرع", en: "Faster" },
        ],
        [{ ar: "الاستخدام", en: "Usage" }, "Web, Mail", "Streaming, DNS"],
      ],
    },
    security: {
      title: { ar: "🔥 Ports & Security", en: "🔥 Ports & Security" },
      list: {
        ar: [
          "Firewall يفتح ويقفل Ports",
          "Port Scanning يكتشف Services شغالة",
          "Port مفتوح = Potential Attack Surface",
        ],
        en: [
          "Firewall opens and closes Ports",
          "Port Scanning discovers running services",
          "Open Port = Potential Attack Surface",
        ],
      },
      tip: {
        ar: "عشان كده: اقفل اللي مش محتاجه",
        en: "So: close what you don't need",
      },
    },
    importantNotes: {
      title: { ar: "⚠️ ملاحظات مهمة", en: "⚠️ Important Notes" },
      list: {
        ar: [
          "Port لو مفتوح ≠ Service آمنة",
          "Service ممكن تشتغل على Port مختلف",
          "NAT يستخدم Ports لتمييز الاتصالات",
        ],
        en: [
          "Open Port ≠ Secure Service",
          "Service can run on a different Port",
          "NAT uses Ports to distinguish connections",
        ],
      },
    },
  },

  // Section 46: WAN Protocols
  wanProtocols: {
    intro: {
      ar: "الثلاثة دول (X.25, Frame Relay, ATM) بيجاوبوا على سؤال واحد: أبعَت داتا إزاي عبر مسافة بعيدة وشبكة مش مضمونة؟ كل واحدة فيهم كانت رد فعل لمشاكل اللي قبلها.",
      en: "These three (X.25, Frame Relay, ATM) answer one question: how to send data over a long distance and an unreliable network? Each was a reaction to the problems of its predecessor.",
    },
    comparisonMatrix: {
      headers: {
        ar: ["Metric", "X.25", "Frame Relay", "ATM"],
        en: ["Metric", "X.25", "Frame Relay", "ATM"],
      },
      rows: [
        [
          { ar: "نموذج الموثوقية", en: "Reliability Model" },
          { ar: "الشبكة (Network-based)", en: "Network-based" },
          { ar: "الأجهزة النهائية (End-based)", en: "End-based" },
          { ar: "Network QoS", en: "Network QoS" },
        ],
        ["Switching Unit", "Packet (variable)", "Frame (variable)", "Cell (53B)"],
        [
          { ar: "استعادة الأخطاء", en: "Error Recovery" },
          { ar: "كل Hop (Detection + ACK)", en: "Every hop (Detection + ACK)" },
          { ar: "لا يوجد داخلياً (End devices)", en: "None inside (End devices)" },
          { ar: "محدود (Minimal)", en: "Limited (Minimal)" },
        ],
        [
          { ar: "التحكم في الازدحام", en: "Congestion Strategy" },
          { ar: "تحكم كامل", en: "Full control" },
          { ar: "إشعار فقط (FECN/BECN)", en: "Notification only (FECN/BECN)" },
          { ar: "Guaranteed QoS", en: "Guaranteed QoS" },
        ],
        [
          { ar: "التأخير (Delay)", en: "Delay" },
          { ar: "عالي جدًا (Overhead)", en: "Very high (Overhead)" },
          { ar: "منخفض", en: "Low" },
          { ar: "ثابت (Predictable)", en: "Constant (Predictable)" },
        ],
        [
          { ar: "Jitter", en: "Jitter" },
          { ar: "قليل", en: "Low" },
          { ar: "متوسط", en: "Medium" },
          { ar: "قليل جدًا", en: "Very low" },
        ],
      ],
    },
    x25: {
      title: "1️⃣ X.25 — لما الشبكة نفسها كانت المشكلة",
      timeline: { ar: "السبعينات - خطوط Analog و Noise عالي", en: "1970s - Analog lines and high Noise" },
      why: {
        ar: "كان السؤال: أسيب الغلط للأجهزة؟ ولا الشبكة تصلّحه؟ القرار كان إن الشبكة تصلّح كل حاجة بنفسها.",
        en: "The question was: Leave errors to devices or let the network fix them? The decision: The network fixes everything itself.",
      },
      how: {
        ar: "بيستخدم Virtual Circuits، وكل Hop بيعمل Error detection و ACK و Retransmission. يعني الرواتر بيقف يتأكد عند كل خطوة.",
        en: "Uses Virtual Circuits; every Hop performs Error detection, ACK, and Retransmission. Routers stop and verify at every step.",
      },
      impact: {
        ar: "النتيجة: Reliability عالية جدًا بس Delay قاتل و Throughput ضعيف.",
        en: "Result: Very high reliability but killer Delay and weak Throughput.",
      },
      analogy: { ar: "تشبيه: موكب رسمي، كل 10 متر تفتيش وتوقيع.", en: "Analogy: An official motorcade, inspection and signing every 10 meters." },
    },
    frameRelay: {
      title: "2️⃣ Frame Relay — سيب الشبكة في حالها",
      timeline: { ar: "التمانينات - ظهور الخطوط الرقمية (Digital)", en: "1980s - Emergence of Digital lines" },
      why: {
        ar: "ليه أعمل error checking جوه الشبكة وهي أصلًا مش محتاجة؟ الخطوط بقت أنضف والـ Error rate قل.",
        en: "Why perform error checking inside the network when it's not needed? Lines became cleaner and Error rate decreased.",
      },
      how: {
        ar: "مفيش ACK جوه الشبكة. لو حصل زحمة، بيبعت إشارات تحذير بس (FECN/BECN). المسؤولية بقت على الـ End devices.",
        en: "No ACKs inside the network. If congestion occurs, it only sends warning signals (FECN/BECN). Responsibility moved to End devices.",
      },
      impact: {
        ar: "النتيجة: Delay أقل بكتير و Throughput أعلى، بس Reliability أقل (بس كفاية لشبكات نضيفة).",
        en: "Result: Much lower Delay and higher Throughput, but lower reliability (sufficient for clean networks).",
      },
      analogy: { ar: "تشبيه: طريق سريع مفيش فيه كمائن، لو زحمة الشبكة بتقولك بس.", en: "Analogy: A highway with no checkpoints; if it's crowded, the network just notifies you." },
    },
    atm: {
      title: "3️⃣ ATM — التحكم في الزمن هو الهدف",
      timeline: { ar: "التسعينات - ظهور VoIP والفيديو والملتيميديا", en: "1990s - Emergence of VoIP, Video, and Multimedia" },
      why: {
        ar: "المشكلة مبقتش بس الداتا توصل، المهم توصل في وقت محدد وبثبات (Real-time).",
        en: "The problem was no longer just data arriving, but it arriving at a specific time and with stability (Real-time).",
      },
      how: {
        ar: "بيستخدم Cell switching بخلية ثابتة (53 Byte) علشان نضمن زمن متوقع ونقلل الـ Jitter. فيه QoS مدمج (CBR, VBR, ABR, UBR).",
        en: "Uses Cell switching with a fixed cell size (53 Bytes) to ensure predictable timing and reduce Jitter. Includes built-in QoS (CBR, VBR, ABR, UBR).",
      },
      impact: {
        ar: "النتيجة: أداء ممتاز للصوت والفيديو، بس غالي ومعقّد (Overkill لبعض الحالات).",
        en: "Result: Excellent performance for voice and video, but expensive and complex (Overkill for some cases).",
      },
      analogy: { ar: "تشبيه: مصنع آلي، كل حاجة بتمشي بالثانية.", en: "Analogy: An automated factory, everything moves by the second." },
    },
  },

  // Section 47: Detailed Metrics
  networkMetricsDetailed: {
    intro: {
      ar: "الراوتر مش بيختار مسار عشوائي، بيستخدم Metrics عشان يحدّد أحسن طريق. والقواعد هنا بتعتمد على نوع المقياس نفسه.",
      en: "The router doesn't choose a path randomly; it uses Metrics to determine the best path. The rules depend on the type of metric itself.",
    },
    rules: {
      additive: {
        title: "1️⃣ Additive (الجمع)",
        formula: "m(path) = Σ m(linki)",
        desc: { ar: "📌 نِجمع كل القيم. أمثلة: Delay, Hop Count, Cost.", en: "📌 We sum all values. Examples: Delay, Hop Count, Cost." },
        brain: { ar: "🧠 لأن كل وصلة بتضيف حمل جديد", en: "🧠 Because each link adds a new load" },
      },
      multiplicative: {
        title: "2️⃣ Multiplicative (الضرب)",
        formula: "m(path) = Π m(linki)",
        desc: { ar: "📌 بنضرب الاحتمالات. أمثلة: Reliability, BER.", en: "📌 We multiply probabilities. Examples: Reliability, BER." },
        brain: { ar: "🧠 لأن الأخطاء بتتراكم احتماليًا", en: "🧠 Because errors accumulate probabilistically" },
      },
      concave: {
        title: "3️⃣ Concave (الأدنى)",
        formula: "m(path) = min m(linki)",
        desc: { ar: "📌 أضعف وصلة تحكم. أمثلة: Bandwidth, Throughput, MTU.", en: "📌 The weakest link governs. Examples: Bandwidth, Throughput, MTU." },
        brain: { ar: "🧠 السلسلة بقوة أضعف حلقة", en: "🧠 A chain is only as strong as its weakest link" },
      },
    },
    metricTypes: {
      single: {
        title: "📊 Single Metric",
        desc: { ar: "Hop count فقط أو Delay فقط. ✔ بسيط، ❌ مش دقيق دايمًا.", en: "Hop count only or Delay only. ✔ Simple, ❌ Not always accurate." },
      },
      mixed: {
        title: "📊 Mixed Metric",
        formula: "m(p) = B(p) / (D(p) × L(p))",
        desc: { ar: "دمج أكتر من metric في معادلة واحدة. 🧠 يعني: Bandwidth عالي ✔، Delay و Loss قليل ✔.", en: "Combining more than one metric in one equation. 🧠 Meaning: High Bandwidth ✔, Low Delay and Loss ✔." },
      },
      multiple: {
        title: "📊 Multiple Metrics",
        desc: { ar: "اختيار path بناءً على: Delay, BW, Security مع بعض لكن مش في معادلة واحدة.", en: "Choosing a path based on: Delay, BW, Security together but not in one equation." },
      },
    },
    metricsDetail: [
      {
        id: "delay",
        title: "⏱ Delay Metric (تفصيلي)",
        formula: "D = Ps + Pr + Qs + Qr + (b / BW) + P",
        types: {
          ar: ["Processing delay (Ps, Pr)", "Queueing delay (Qs, Qr)", "Transmission delay = b / BW", "Propagation delay = P"],
          en: ["Processing delay (Ps, Pr)", "Queueing delay (Qs, Qr)", "Transmission delay = b / BW", "Propagation delay = P"],
        },
        note: { ar: "📌 Queueing هو أخطرهم لأنه متغير", en: "📌 Queueing is the most dangerous because it's variable" },
      },
      {
        id: "jitter",
        title: "📉 Delay Variation (Jitter)",
        formula: "Jitter = Max Latency − Min Latency",
        desc: { ar: "✔ Jitter قليل = مسار ممتاز، ❌ Jitter عالي = كارثة للصوت والفيديو.", en: "✔ Low Jitter = Excellent path, ❌ High Jitter = Disaster for voice and video." },
      },
      {
        id: "bandwidth",
        title: "📶 Bandwidth (BW)",
        formula: "BW(path) = min BW(linki)",
        type: "Metric concave",
        brain: { ar: "🧠 مش أسرع لينك... أضعف لينك", en: "🧠 Not the fastest link... the weakest link" },
      },
      {
        id: "throughput",
        title: "🚚 Throughput",
        desc: { ar: "عدد البيانات اللي وصلت بنجاح في وحدة زمن.", en: "The amount of data successfully delivered in a unit of time." },
        formula: "Thput(path) = min Thput(linki)",
        relation: "Goodput ≤ Throughput ≤ Max Throughput ≤ Net bit rate",
      },
      {
        id: "ber",
        title: "❌ Bit Error Rate (BER)",
        formula: "BER = faulty bits / total bits | PER = Pe / N",
        type: "Metric multiplicative",
        note: { ar: "📌 لأن الخطأ بيتراكم", en: "📌 Because the error accumulates" },
      },
      {
        id: "hopCount",
        title: "🦘 Hop Count",
        formula: "hopcount(path) = Σ hopcount(linki)",
        type: "Metric additive",
        note: { ar: "📌 سهل لكن ساذج", en: "📌 Simple but naive" },
      },
      {
        id: "security",
        title: "🔐 Security Metric",
        formula: "Wp = W1 ∧ W2 ∧ ... ∧ Wn",
        binary: { ar: "Wi = 1 (secure), Wi = 0 (not secure)", en: "Wi = 1 (secure), Wi = 0 (not secure)" },
        note: { ar: "📌 وصلة واحدة unsafe = المسار كله unsafe", en: "📌 One unsafe link = the whole path is unsafe" },
      },
      {
        id: "billing",
        title: "💰 Billing Metric",
        formula: "Billing(path) = Σ Billing(linki)",
        type: "Metric additive",
        note: { ar: "📌 مهم جدًا للـ ISPs", en: "📌 Very important for ISPs" },
      },
      {
        id: "mtu",
        title: "📏 MTU",
        formula: "MTU(path) = min MTU(linki)",
        type: "Metric concave",
        note: { ar: "📌 عشان تمنع fragmentation", en: "📌 To prevent fragmentation" },
      },
      {
        id: "possibility",
        title: "🔌 Connection Possibility (Cp)",
        includes: { ar: ["Authentication", "Authorization", "ACL"], en: ["Authentication", "Authorization", "ACL"] },
        formula: "Cp(path) = min Cp(linki)",
        note: { ar: "📌 وصلة واحدة تمنع = مفيش اتصال", en: "📌 One link blocking = no connection" },
      },
    ],
    pathComputation: {
      title: "2.4 🧮 Path Quality Computation",
      hopByHop: {
        title: "1️⃣ Hop-by-Hop (الأشهر)",
        desc: { ar: "كل Router يقرر. زي OSPF / RIP / IS-IS. ✔ مرن، ✔ Scalable.", en: "Each Router decides. Like OSPF / RIP / IS-IS. ✔ Flexible, ✔ Scalable." },
      },
      sourceRouting: {
        title: "2️⃣ Source Routing",
        desc: { ar: "المصدر يحدد المسار كامل. Rare في الإنترنت. ❌ مش scalable، ❌ مشاكل أمان.", en: "The source determines the entire path. Rare on the Internet. ❌ Not scalable, ❌ Security issues." },
      },
    },
    finalSummary: {
      title: "🌸 الخلاصة الذهبية",
      note: { ar: "اختيار الـ metric الصح = اختيار المسار الصح. وده بيعتمد 100% على متطلبات الـ QoS.", en: "Choosing the right metric = choosing the right path. This depends 100% on QoS requirements." },
      headers: {
        ar: ["Metric", "Type", "Rule", "Purpose"],
        en: ["Metric", "Type", "Rule", "Purpose"],
      },
      rows: [
        [{ ar: "Delay", en: "Delay" }, "Additive", "Sum", { ar: "تقليل زمن الوصول", en: "Reduce latency" }],
        [{ ar: "Jitter", en: "Jitter" }, "Additive", "Difference", { ar: "منع التقطيع", en: "Prevent jitter" }],
        [{ ar: "Bandwidth", en: "Bandwidth" }, "Concave", "Min", { ar: "سعة المسار", en: "Path capacity" }],
        [{ ar: "Throughput", en: "Throughput" }, "Concave", "Min", { ar: "الأداء الفعلي", en: "Actual performance" }],
        [{ ar: "BER", en: "BER" }, "Multiplicative", "Product", { ar: "جودة الإشارة", en: "Signal quality" }],
        [{ ar: "Hop Count", en: "Hop Count" }, "Additive", "Sum", { ar: "بساطة الاختيار", en: "Simple choice" }],
        [{ ar: "Security", en: "Security" }, "Concave", "AND", { ar: "أمان المسار", en: "Path security" }],
        [{ ar: "Billing", en: "Billing" }, "Additive", "Sum", { ar: "أقل تكلفة", en: "Least cost" }],
        [{ ar: "MTU", en: "MTU" }, "Concave", "Min", { ar: "منع fragmentation", en: "Prevent fragmentation" }],
        [{ ar: "Connection Possibility", en: "Connection Possibility" }, "Concave", "Min", { ar: "صلاحية المسار", en: "Path validity" }],
      ],
    },
  },

  // Common UI elements
  ui: {
    createdBy: { ar: "من إنشاء", en: "Created by" },
    progress: { ar: "التقدم", en: "Progress" },
    computerNetworks: { ar: "شبكات الحاسوب", en: "Computer Networks" },
    studyReference: { ar: "مرجع دراسي", en: "Study Reference" },
  },
};
