// Translations for all content sections
// Structure: { ar: Arabic text, en: English text }

export const translations = {
  // Section 1: OSI Model
  osiModel: {
    intro: {
      ar: 'نموذج OSI Reference Model ده موديل نظري معمول علشان يوصف ازاي الاتصال في الشبكات بيحصل ويساعدنا نفهم ونصمّم Network Communications صح.',
      en: 'The OSI Reference Model is a theoretical model designed to describe how network communication works and helps us understand and design Network Communications correctly.'
    },
    calloutImportant: {
      ar: 'الموديل ده بيقسم شغل الشبكة كلها على 7 Layers، وكل Layer ليها وظيفة محددة جدًا. كل طبقة بتستخدم خدمات الطبقة اللي تحتها وبتقدم خدمات للطبقة اللي فوقها، يعني مفيش Layer شغالة لوحدها.',
      en: 'This model divides all network operations into 7 Layers, and each Layer has a very specific function. Each layer uses the services of the layer below it and provides services to the layer above it, meaning no layer works alone.'
    },
    layerDivision: { ar: 'تقسيم الطبقات', en: 'Layer Division' },
    lowerLayers: { ar: 'Lower Layers (الطبقات السفلى)', en: 'Lower Layers' },
    lowerLayersDesc: { ar: 'الطبقات دي غالبًا بتتطبق في الهاردوير نفسه بتاع الشبكة:', en: 'These layers are typically implemented in the network hardware itself:' },
    networkCards: { ar: 'كروت الشبكة', en: 'Network Cards' },
    switches: { ar: 'السويتشات', en: 'Switches' },
    routers: { ar: 'الراوترات', en: 'Routers' },
    lowerLayersNote: { ar: 'دي الطبقات اللي بتتعامل مع نقل الداتا فعليًا جوه الشبكة.', en: 'These are the layers that actually handle data transfer within the network.' },
    upperLayers: { ar: 'Upper Layers (الطبقات العليا)', en: 'Upper Layers' },
    upperLayersDesc: { ar: 'الطبقات دي بتتطبق في السوفتوير:', en: 'These layers are implemented in software:' },
    programs: { ar: 'البرامج', en: 'Programs' },
    operatingSystems: { ar: 'أنظمة التشغيل', en: 'Operating Systems' },
    networkApps: { ar: 'التطبيقات اللي بتستخدم الشبكة', en: 'Applications that use the network' },
    upperLayersTip: { ar: 'دي الطبقات اللي بتتعامل مع المستخدم والتطبيقات.', en: 'These are the layers that interact with the user and applications.' },
    layers: [
      { num: 7, ar: 'التطبيقات', en: 'Application' },
      { num: 6, ar: 'العرض', en: 'Presentation' },
      { num: 5, ar: 'الجلسة', en: 'Session' },
      { num: 4, ar: 'النقل', en: 'Transport' },
      { num: 3, ar: 'الشبكة', en: 'Network' },
      { num: 2, ar: 'ربط البيانات', en: 'Data Link' },
      { num: 1, ar: 'الفيزيائية', en: 'Physical' },
    ]
  },

  // Section 2: Application Layer
  applicationLayer: {
    intro: {
      ar: 'دي أعلى Layer في OSI، ومفيش فوقها حاجة. وهي أقرب طبقة للـ End User.',
      en: 'This is the highest Layer in OSI, with nothing above it. It is the closest layer to the End User.'
    },
    calloutImportant: {
      ar: 'Application Layer مش هي البرنامج نفسه، لكنها بتوفّر الخدمات الشبكية اللي البرنامج محتاجها.',
      en: 'The Application Layer is not the program itself, but it provides the network services that the program needs.'
    },
    desc: {
      ar: 'يعني المتصفح، برنامج الإيميل، برنامج FTP... كل دول بيكلموا الشبكة من خلال Application Layer.',
      en: 'So the browser, email program, FTP program... all of these communicate with the network through the Application Layer.'
    },
    protocolExamples: { ar: 'أمثلة بروتوكولات', en: 'Protocol Examples' },
    protocol: { ar: 'البروتوكول', en: 'Protocol' },
    function: { ar: 'الوظيفة', en: 'Function' },
    protocols: [
      { protocol: 'FTP', ar: 'نقل ملفات', en: 'File Transfer' },
      { protocol: 'SMTP', ar: 'إرسال إيميلات', en: 'Sending Emails' },
      { protocol: 'HTTP', ar: 'صفحات الويب', en: 'Web Pages' },
    ],
    calloutNote: {
      ar: 'عشان هي أعلى طبقة، مفيش طبقات فوقها وهي اللي المستخدم بيتعامل معاها بشكل مباشر.',
      en: 'Since it is the highest layer, there are no layers above it and it is what the user interacts with directly.'
    }
  },

  // Section 3: Presentation Layer
  presentationLayer: {
    intro: {
      ar: 'الطبقة دي مسؤولة عن شكل الداتا.',
      en: 'This layer is responsible for the format of data.'
    },
    quote: {
      ar: 'اللي اتبعت من عندي يوصل عندك بنفس الشكل اللي أنا قصدته',
      en: 'What I sent should arrive at your end in the same format I intended'
    },
    whyImportant: { ar: 'ليه الطبقة دي مهمة؟', en: 'Why is this layer important?' },
    whyImportantDesc: {
      ar: 'لأن ممكن جهاز Windows وجهاز Mac يبقوا بيتكلموا مع بعض، بس طريقة تمثيل الداتا مختلفة.',
      en: 'Because a Windows device and a Mac device might be communicating with each other, but their data representation methods are different.'
    },
    functions: { ar: 'وظائف Presentation Layer', en: 'Presentation Layer Functions' },
    functionsList: [
      { term: 'Translation', ar: 'ترجمة', en: 'Translation' },
      { term: 'Encoding / Decoding', ar: 'تشفير / فك تشفير', en: 'Encoding / Decoding' },
      { term: 'Compression / Decompression', ar: 'ضغط / فك ضغط', en: 'Compression / Decompression' },
      { term: 'Encryption / Decryption', ar: 'تشفير / فك تشفير أمني', en: 'Security Encryption / Decryption' },
    ],
    calloutTip: {
      ar: 'تُعتبر حلقة وصل بين Session Layer و Application Layer.',
      en: 'It acts as a link between the Session Layer and the Application Layer.'
    }
  },

  // Section 4: Session Layer
  sessionLayer: {
    intro: {
      ar: 'دي أول طبقة في Upper Layers ومهتمة بقضايا التطبيقات مش بنقل الداتا نفسه.',
      en: 'This is the first layer in the Upper Layers and is concerned with application issues, not data transfer itself.'
    },
    work: { ar: 'شغل Session Layer', en: 'Session Layer Work' },
    workList: {
      ar: ['تبدأ الاتصال', 'تنسّقه', 'تحافظ عليه', 'وتنهيه'],
      en: ['Start the connection', 'Coordinate it', 'Maintain it', 'And end it']
    },
    quote: {
      ar: 'بتدير الحوار بين برنامجين على الشبكة',
      en: 'It manages the dialogue between two programs on the network'
    },
    example: { ar: 'مثال على Session', en: 'Session Example' },
    exampleList: {
      ar: ['تسجيل دخول', 'نقل داتا', 'Logout'],
      en: ['Login', 'Data transfer', 'Logout']
    },
    exampleDesc: {
      ar: 'ده كله اسمه Session',
      en: 'All of this is called a Session'
    },
    calloutNote: {
      ar: 'هي بتسمح لأجهزة الشبكة إنها تنشئ Sessions ممتدة وتحافظ عليها وتشارك الداتا من خلالها. من البروتوكولات: NetBIOS.',
      en: 'It allows network devices to create extended Sessions, maintain them, and share data through them. Protocols include: NetBIOS.'
    }
  },

  // Section 5: Transport Layer
  transportLayer: {
    intro: {
      ar: 'دي طبقة واجهة، ومش فارق معاها الداتا هتمشي منين.',
      en: 'This is an interface layer, and it doesn\'t matter which path the data takes.'
    },
    questions: { ar: 'الأسئلة اللي بتسألها', en: 'Questions it asks' },
    questionsList: {
      ar: ['الداتا وصلت؟', 'وصلت كاملة؟', 'وصلت بالترتيب؟'],
      en: ['Did the data arrive?', 'Did it arrive complete?', 'Did it arrive in order?']
    },
    functions: { ar: 'وظائفها', en: 'Its Functions' },
    functionsList: {
      ar: ['تتبع الداتا من الطبقات العليا', 'تدمجها في Data Flow واحد', 'تقسّم الداتا الكبيرة لحتت صغيرة', 'وتبعتها للطبقات اللي تحت'],
      en: ['Track data from upper layers', 'Merge it into a single Data Flow', 'Divide large data into small pieces', 'And send it to lower layers']
    },
    protocols: { ar: 'بروتوكولات Transport', en: 'Transport Protocols' },
    udp: {
      features: {
        ar: ['مفيش Connection', 'مفيش Session', 'مفيش ضمان وصول'],
        en: ['No Connection', 'No Session', 'No delivery guarantee']
      },
      quote: 'Connectionless & Unreliable',
      example: { ar: 'مثال: Broadcast Messages', en: 'Example: Broadcast Messages' }
    },
    tcp: {
      features: {
        ar: ['موثوق أكتر', 'بيعمل Connection', 'بيستخدم Error Detection Algorithms قوية', 'يضمن وصول الداتا بالترتيب'],
        en: ['More reliable', 'Creates a Connection', 'Uses strong Error Detection Algorithms', 'Guarantees data arrives in order']
      }
    },
    comparison: {
      headers: { ar: ['الخاصية', 'TCP', 'UDP'], en: ['Property', 'TCP', 'UDP'] },
      rows: {
        ar: [
          ['الاتصال', 'نعم', 'لا'],
          ['الموثوقية', 'عالية', 'منخفضة'],
          ['الترتيب', 'مضمون', 'غير مضمون'],
          ['السرعة', 'أبطأ', 'أسرع'],
          ['الاستخدام', 'ملفات، إيميل', 'صوت، فيديو، ألعاب'],
        ],
        en: [
          ['Connection', 'Yes', 'No'],
          ['Reliability', 'High', 'Low'],
          ['Ordering', 'Guaranteed', 'Not Guaranteed'],
          ['Speed', 'Slower', 'Faster'],
          ['Usage', 'Files, Email', 'Voice, Video, Games'],
        ]
      }
    }
  },

  // Section 6: Network Layer
  networkLayer: {
    quote: {
      ar: 'الداتا هتروح فين وتمشي من أنهي طريق',
      en: 'Where will the data go and which path will it take'
    },
    mainTask: { ar: 'المهمة الأساسية', en: 'Main Task' },
    mainTaskList: {
      ar: ['ربط LANs ببعض', 'التواصل عبر WAN', 'إعطاء Logical Address (IP)'],
      en: ['Connect LANs together', 'Communication across WAN', 'Assign Logical Address (IP)']
    },
    calloutImportant: {
      ar: 'هي أهم Layer لما تبعت داتا خارج الشبكة المحلية.',
      en: 'It is the most important Layer when sending data outside the local network.'
    },
    functions: { ar: 'وظائفها', en: 'Its Functions' },
    functionsList: {
      ar: ['Routing - التوجيه', 'Packet Handling - التعامل مع الحزم', 'Fragmentation لو الحجم كبير'],
      en: ['Routing', 'Packet Handling', 'Fragmentation if size is large']
    },
    desc: {
      ar: 'يعني تستقبل Packets من مصادر مختلفة وتضمن وصولها للوجهة الصح.',
      en: 'It receives Packets from different sources and ensures they reach the correct destination.'
    }
  },

  // Section 7: Data Link Layer
  dataLinkLayer: {
    quote: {
      ar: 'توصيل الداتا بين جهازين جوه نفس الشبكة',
      en: 'Connecting data between two devices within the same network'
    },
    division: { ar: 'الطبقة متقسمة لجزئين', en: 'The layer is divided into two parts' },
    llc: {
      title: 'LLC (Logical Link Control)',
      features: {
        ar: ['روابط منطقية', 'تحكم في الاتصال'],
        en: ['Logical links', 'Connection control']
      }
    },
    mac: {
      title: 'MAC (Media Access Control)',
      features: {
        ar: ['تنظيم الوصول للشبكة', 'منع التعارض', 'استخدام MAC Address'],
        en: ['Organize network access', 'Prevent collisions', 'Use MAC Address']
      }
    },
    additionalFunctions: { ar: 'وظائف إضافية', en: 'Additional Functions' },
    additionalFunctionsList: {
      ar: ['بتغلف الداتا', 'تبعتها للـ Physical Layer', 'وتتعامل مع الأخطاء'],
      en: ['Encapsulates data', 'Sends it to the Physical Layer', 'And handles errors']
    },
    errorDetection: 'Error Detection – CRC',
    calloutNote: {
      ar: 'CRC (Cyclic Redundancy Check): عدد بسيط من الـ bits يتحط في الـ Frame ويستخدمه المرسل والمستقبل علشان يتأكدوا إن الداتا سليمة.',
      en: 'CRC (Cyclic Redundancy Check): A simple number of bits placed in the Frame used by sender and receiver to ensure data integrity.'
    }
  },

  // Section 8: Physical Layer
  physicalLayer: {
    intro: {
      ar: 'دي أقل طبقة في OSI وملهاش أي فهم للداتا.',
      en: 'This is the lowest layer in OSI and has no understanding of data.'
    },
    handles: { ar: 'هي بتتعامل مع', en: 'It handles' },
    handlesList: {
      ar: ['0 و 1', 'تشفير الداتا لإشارات', 'نقلها فعليًا'],
      en: ['0 and 1', 'Encoding data to signals', 'Physical transmission']
    },
    quote: {
      ar: 'بتاخد الداتا وتعدّيها وخلاص',
      en: 'It just takes data and passes it along'
    },
    devices: { ar: 'أجهزة شغالة هنا', en: 'Devices working here' },
    responsible: { ar: 'مسؤولة عن', en: 'Responsible for' },
    responsibleList: {
      ar: ['نوع السلك', 'شكل الإشارة', 'سرعة النقل', 'تحويل الـ Bits لإشارات'],
      en: ['Cable type', 'Signal shape', 'Transfer speed', 'Converting Bits to signals']
    }
  },

  // Section 9: Link Types
  linkTypes: {
    dsl: {
      title: 'DSL - Digital Subscriber Line',
      quote: {
        ar: 'تقنية إنترنت بتشتغل على سلك التليفون الأرضي النحاس من غير ما تقطع المكالمات',
        en: 'Internet technology that works on copper telephone lines without interrupting calls'
      },
      desc: {
        ar: 'يعني تتكلم تليفون والإنترنت شغال في نفس الوقت!',
        en: 'So you can talk on the phone and use the internet at the same time!'
      },
      calloutNote: {
        ar: 'DSL مش تقنية واحدة، دي مجموعة تقنيات بتسمح بنقل بيانات رقمية عن طريق سلك التليفون النحاس.',
        en: 'DSL is not a single technology, it\'s a group of technologies that allow digital data transfer over copper telephone wires.'
      },
      howWorks: { ar: 'DSL شغالة إزاي؟', en: 'How does DSL work?' },
      howWorksList: {
        ar: ['سلك التليفون فيه Bandwidth كبير', 'الصوت بيستخدم جزء صغير', 'والداتا الرقمية تستخدم الجزء التاني'],
        en: ['Telephone wire has large Bandwidth', 'Voice uses a small portion', 'And digital data uses the other portion']
      },
      types: { ar: 'أنواع DSL', en: 'DSL Types' },
      adsl: {
        title: 'ADSL (Asymmetric DSL)',
        desc: { ar: 'Asymmetric يعني سرعة التحميل ≠ سرعة الرفع', en: 'Asymmetric means download speed ≠ upload speed' },
        features: { ar: ['Download أسرع', 'Upload أبطأ'], en: ['Download is faster', 'Upload is slower'] },
        tip: {
          ar: 'مناسب للبيوت والاستخدام العادي لأن المستخدم بيحمّل أكتر ما بيرفع.',
          en: 'Suitable for homes and regular use because users download more than they upload.'
        }
      },
      sdsl: {
        title: 'SDSL (Symmetric DSL)',
        desc: { ar: 'Symmetric يعني سرعة التحميل = سرعة الرفع', en: 'Symmetric means download speed = upload speed' },
        note: {
          ar: 'بيستخدم في الشركات والسيرفرات لأنها بترفع داتا كتير.',
          en: 'Used in companies and servers because they upload a lot of data.'
        }
      },
      comparison: {
        headers: { ar: ['النوع', 'Download', 'Upload', 'الاستخدام'], en: ['Type', 'Download', 'Upload', 'Usage'] },
        rows: {
          ar: [['ADSL', 'أسرع', 'أبطأ', 'منازل'], ['SDSL', 'متساوي', 'متساوي', 'شركات / Servers']],
          en: [['ADSL', 'Faster', 'Slower', 'Homes'], ['SDSL', 'Equal', 'Equal', 'Companies / Servers']]
        }
      }
    },
    isdn: {
      title: 'ISDN - Integrated Services Digital Network',
      quote: {
        ar: 'نظام اتصال رقمي قديم نسبيًا كان بيستخدم خط التليفون الأرضي لتقديم خدمات متعددة',
        en: 'A relatively old digital communication system that used landline to provide multiple services'
      },
      provided: { ar: 'ISDN كان بيقدّم', en: 'ISDN provided' },
      providedList: {
        ar: ['مكالمات صوتية', 'إنترنت', 'فاكس', 'نقل بيانات'],
        en: ['Voice calls', 'Internet', 'Fax', 'Data transfer']
      },
      whyImportant: { ar: 'ليه ISDN كان مهم؟', en: 'Why was ISDN important?' },
      whyImportantDesc: {
        ar: ['قبل ISDN، التليفون كان Analog والإشارة بتتأثر بالضوضاء والجودة وحشة.', 'ISDN قدّم: إشارة رقمية، جودة أعلى، سرعات أحسن، Noise أقل.'],
        en: ['Before ISDN, phones were Analog and signals were affected by noise and quality was poor.', 'ISDN provided: digital signal, higher quality, better speeds, less Noise.']
      },
      calloutNote: {
        ar: 'ISDN اختفى لأن DSL ظهر وكان أسرع وأرخص وأسهل.',
        en: 'ISDN disappeared because DSL appeared and was faster, cheaper, and easier.'
      }
    }
  },

  // Section 10: PDU
  pdu: {
    quote: {
      ar: 'الاسم اللي بنطلقه على الداتا وهي ماشية جوه طبقات الـ OSI',
      en: 'The name we give to data as it moves through the OSI layers'
    },
    mentalIdea: { ar: 'الفكرة الذهنية', en: 'The Mental Concept' },
    mentalIdeaDesc: {
      ar: 'الداتا وهي نازلة من Layer لـ Layer، كل Layer يضيف Header فيتغير اسم الداتا. يعني الاسم بيتغير حسب الطبقة.',
      en: 'As data goes down from Layer to Layer, each Layer adds a Header and the data name changes. The name changes according to the layer.'
    },
    pduNames: { ar: 'أسماء الـ PDU في OSI', en: 'PDU Names in OSI' },
    pduTable: {
      headers: { ar: ['Layer', 'اسم الـ PDU'], en: ['Layer', 'PDU Name'] },
      rows: [
        ['Layer 4 (Transport)', 'Segment / Datagram'],
        ['Layer 3 (Network)', 'Packet'],
        ['Layer 2 (Data Link)', 'Frame'],
        ['Layer 1 (Physical)', 'Bits'],
      ]
    },
    frame: {
      title: 'Frame (Layer 2)',
      quote: {
        ar: 'شكل الداتا في Data Link Layer',
        en: 'The form of data in Data Link Layer'
      },
      responsibility: { ar: 'مسؤوليته', en: 'Its Responsibility' },
      responsibilityList: {
        ar: ['نقل الداتا جوه نفس الشبكة (LAN)', 'استخدام MAC Address', 'كشف الأخطاء'],
        en: ['Transferring data within the same network (LAN)', 'Using MAC Address', 'Error detection']
      },
      tip: {
        ar: 'فكر فيه كصندوق مقفول مكتوب عليه عنوان المرسل وعنوان المستلم بس جوه نفس العمارة (LAN).',
        en: 'Think of it as a locked box with sender and receiver addresses but within the same building (LAN).'
      },
      components: { ar: 'Frame بيتكوّن من', en: 'Frame consists of' },
      componentsList: {
        ar: ['Header: Source MAC, Destination MAC, Protocol Type', 'Payload: الداتا الجاية من الطبقات الأعلى', 'Trailer: FCS (Frame Check Sequence) باستخدام CRC لكشف الأخطاء'],
        en: ['Header: Source MAC, Destination MAC, Protocol Type', 'Payload: Data coming from upper layers', 'Trailer: FCS (Frame Check Sequence) using CRC for error detection']
      }
    },
    segment: {
      title: 'Segment & Datagram (Layer 4)',
      segmentTcp: {
        title: 'Segment (with TCP)',
        features: {
          ar: ['يقسّم الداتا الكبيرة', 'يضيف Port Numbers', 'يضمن الترتيب والتسليم وتصحيح الأخطاء'],
          en: ['Divides large data', 'Adds Port Numbers', 'Ensures ordering, delivery, and error correction']
        },
        desc: 'Reliable, Ordered, Slower'
      },
      datagramUdp: {
        title: 'Datagram (with UDP)',
        features: {
          ar: ['بدون Connection', 'بدون ضمان تسليم', 'بدون ترتيب', 'بدون تصحيح أخطاء'],
          en: ['Without Connection', 'Without delivery guarantee', 'Without ordering', 'Without error correction']
        },
        desc: 'Fast, Not Reliable',
        note: {
          ar: 'UDP Datagram بيستخدم في: Video, Voice, Gaming, Live streaming',
          en: 'UDP Datagram is used in: Video, Voice, Gaming, Live streaming'
        }
      }
    }
  },

  // Section 11: Packet Structure
  packetStructure: {
    quote: {
      ar: 'الداتا وهي ماشية في الشبكة بتتقسم لحتت صغيرة اسمها Packets.',
      en: 'Data moving through the network is divided into small pieces called Packets.'
    },
    whyPackets: {
      title: { ar: 'ليه الشبكات بتستخدم Packets؟', en: 'Why Do Networks Use Packets?' },
      desc: {
        ar: 'تخيل لو نبعت ملف كبير كقطعة واحدة وضاعت، هنضطر نعيد الملف كله. لكن لما نقسم، لو حتة ضاعت نعيد دي بس! وده بيخلي النقل أسرع وأذكى.',
        en: 'Imagine sending a large file as one piece and it gets lost; we\'d have to resend everything. But when we divide, if a piece is lost, we only resend that part! This makes transmission faster and smarter.'
      },
      quote: {
        ar: 'Packet-based communication = سرعة + كفاءة + موثوقية',
        en: 'Packet-based communication = Speed + Efficiency + Reliability'
      }
    },
    intro: {
      ar: 'بدل ما نبعت ملف كبير كقطعة واحدة، الشبكة بتقسّم الداتا لحتت صغيرة اسمها Packets.',
      en: 'Instead of sending a large file as one piece, the network divides the data into small pieces called Packets.'
    },
    tip: {
      ar: 'لو Packet واحدة كبيرة ضاعت يضيع كله، لكن لما نقسم ولو Packet ضاعت نعيد دي بس!',
      en: 'If one large Packet is lost, everything is lost, but when we divide, if a Packet is lost, we only resend that one!'
    },
    components: { ar: 'Packet بيتكوّن من', en: 'Packet consists of' },
    header: {
      title: { ar: '1. Header (الهيدر)', en: '1. Header' },
      desc: {
        ar: 'مجموعة تعليمات بتقول للشبكة تتعامل مع الداتا إزاي: جاية منين؟ رايحة فين؟ تتكسر ولا لأ؟',
        en: 'A set of instructions telling the network how to handle the data: where from? where to? can it be fragmented?'
      },
      important: {
        ar: 'حجم IPv4 Header من 20 بايت لحد 60 بايت (على حسب وجود Options).',
        en: 'IPv4 Header size is from 20 bytes to 60 bytes (depending on Options presence).'
      },
      elements: { ar: 'عناصر الهيدر', en: 'Header Elements' },
      table: {
        headers: { ar: ['Field', 'الشرح'], en: ['Field', 'Description'] },
        rows: {
          ar: [
            ['Version', 'بتحدد نوع IP (غالبًا IPv4)'],
            ['IHL', 'طول الهيدر'],
            ['TOS', 'بتقول الشبكة تتعامل مع الباكت إزاي (QoS)'],
            ['Identification', 'رقم 16-bit لتمييز الباكت لو اتجزأت'],
            ['Flags', 'بتتحكم في التجزئة'],
            ['Fragment Offset', 'مكان الجزء ده جوه الباكت الأصلية'],
            ['TTL', 'عمر الباكت قبل ما تموت'],
            ['Protocol', 'البروتوكول اللي جوه (TCP/UDP/ICMP)'],
            ['Source IP', 'عنوان المرسل'],
            ['Destination IP', 'عنوان المستقبل'],
          ],
          en: [
            ['Version', 'Specifies IP type (usually IPv4)'],
            ['IHL', 'Header length'],
            ['TOS', 'Tells network how to handle packet (QoS)'],
            ['Identification', '16-bit number to identify packet if fragmented'],
            ['Flags', 'Controls fragmentation'],
            ['Fragment Offset', 'Position of this fragment in original packet'],
            ['TTL', 'Packet lifetime before it dies'],
            ['Protocol', 'Protocol inside (TCP/UDP/ICMP)'],
            ['Source IP', 'Sender address'],
            ['Destination IP', 'Receiver address'],
          ]
        },
        deepDive: {
          title: { ar: 'Deep Dive: التجزئة (Fragmentation)', en: 'Deep Dive: Fragmentation' },
          desc: {
            ar: 'لو Packet كبيرة، الشبكة بتجزأها. كل جزء بياخد نفس الـ Identification بس Fragment Offset مختلف علشان المستقبل يعرف يجمعهم صح.',
            en: 'If a Packet is large, the network fragments it. Each fragment gets the same Identification but a different Fragment Offset so the receiver can reassemble them correctly.'
          }
        }
      }
    },
    ttl: {
      title: 'TTL (Time To Live)',
      quote: {
        ar: 'عدّاد عمر الباكت',
        en: 'Packet lifetime counter'
      },
      features: {
        ar: ['كل Router يقلّل TTL بـ 1', 'لو وصل 0، الباكت تتترمي'],
        en: ['Each Router decreases TTL by 1', 'If it reaches 0, the packet is discarded']
      },
      note: {
        ar: 'علشان نمنع الباكت تلف في الشبكة للأبد',
        en: 'To prevent packets from circulating in the network forever'
      }
    },
    payload: {
      title: { ar: '2. Payload (DATA)', en: '2. Payload (DATA)' },
      desc: {
        ar: 'الداتا الفعلية اللي إحنا عايزين نبعتها زي TCP Segment أو UDP Datagram.',
        en: 'The actual data we want to send like TCP Segment or UDP Datagram.'
      }
    },
    trailer: {
      title: { ar: '3. Trailer (اختياري)', en: '3. Trailer (Optional)' },
      desc: {
        ar: 'مش دايمًا موجود في Layer 3، الفحص الأساسي للأخطاء بيبقى أكتر في Layer 2.',
        en: 'Not always present in Layer 3, basic error checking is more common in Layer 2.'
      }
    },
    conclusion: {
      ar: 'لما كل الـ Packets توصل للهدف، Network Layer بيجمعهم تاني ويرجّع الداتا الأصلية زي ما كانت.',
      en: 'When all Packets reach the destination, the Network Layer reassembles them and restores the original data.'
    }
  },

  // Section 12: IP Addressing
  ipAddressing: {
    quote: {
      ar: 'عنوان رقمي فريد بيتحدد لكل جهاز أو Interface جوه الشبكة',
      en: 'A unique numerical address assigned to each device or Interface in the network'
    },
    mainFunction: { ar: 'وظيفته الأساسية', en: 'Main Function' },
    mainFunctionList: {
      ar: ['يعرّف الجهاز داخل الشبكة', 'يسمح بالتواصل بين الأجهزة'],
      en: ['Identifies the device within the network', 'Allows communication between devices']
    },
    whereWorks: {
      title: { ar: 'IP بيشتغل فين؟', en: 'Where Does IP Work?' },
      list: {
        ar: ['داخل الشبكات المحلية LAN', 'عبر الشبكات الواسعة WAN', 'كل جهاز (كمبيوتر، موبايل، راوتر) لازم يكون له IP'],
        en: ['Inside Local Area Networks (LAN)', 'Across Wide Area Networks (WAN)', 'Every device (PC, mobile, router) must have an IP']
      }
    },
    important: {
      ar: 'من غير IP مفيش Networking أساسًا!',
      en: 'Without IP, there is no Networking at all!'
    },
    types: { ar: 'أنواع الـ IP Address', en: 'Types of IP Address' },
    staticIp: {
      title: '1. Static IP',
      features: {
        ar: ['عنوان ثابت لا يتغير', 'غالبًا يستخدم في Servers والأجهزة المهمة'],
        en: ['Fixed address that doesn\'t change', 'Usually used in Servers and important devices']
      }
    },
    dynamicIp: {
      title: '2. Dynamic IP',
      features: {
        ar: ['عنوان متغير', 'يتم إعطاؤه تلقائيًا بواسطة DHCP', 'الأكثر استخدامًا في البيوت والشركات'],
        en: ['Variable address', 'Automatically assigned by DHCP', 'Most commonly used in homes and companies']
      }
    },
    dhcp: {
      title: 'DHCP',
      fullName: 'Dynamic Host Configuration Protocol',
      desc: {
        ar: 'مسؤول عن توزيع IP addresses تلقائيًا وإعطاء:',
        en: 'Responsible for automatically distributing IP addresses and providing:'
      },
      provides: ['IP', 'Subnet Mask', 'Gateway', 'DNS'],
      tip: {
        ar: 'بدون DHCP هتدخل IP يدوي لكل جهاز!',
        en: 'Without DHCP, you would have to manually enter IP for each device!'
      }
    },
    apipa: {
      title: 'APIPA',
      desc: {
        ar: 'لو حصل فشل في DHCP، الجهاز يدي نفسه IP تلقائي من الرينج:',
        en: 'If DHCP fails, the device gives itself an automatic IP from the range:'
      },
      warning: {
        ar: 'ده معناه الجهاز شغال بس مفيش اتصال حقيقي بالشبكة!',
        en: 'This means the device is working but there\'s no real network connection!'
      }
    },
    structure: {
      title: 'IPv4 Address Structure',
      features: {
        ar: ['IPv4 = 32 bits', 'مقسمة إلى 4 Octets', 'كل Octet = 8 bits'],
        en: ['IPv4 = 32 bits', 'Divided into 4 Octets', 'Each Octet = 8 bits']
      }
    }
  },

  // Section 13: NAT
  nat: {
    quote: {
      ar: 'الراوتر بيحوّل IPs الخاصة داخل الشبكة إلى IP عام واحد عند الاتصال بالإنترنت (والعكس)',
      en: 'The router converts private IPs within the network to a single public IP when connecting to the Internet (and vice versa)'
    },
    whyUse: { ar: 'ليه نستخدم NAT؟', en: 'Why use NAT?' },
    whyUseList: {
      ar: ['عناوين IPv4 العامة محدودة', 'Private IPs لا يمكنها الاتصال بالإنترنت مباشرة', 'NAT يسمح لأكتر من جهاز باستخدام IP عام واحد'],
      en: ['Public IPv4 addresses are limited', 'Private IPs cannot connect to the Internet directly', 'NAT allows multiple devices to use one public IP']
    },
    benefits: { ar: 'فوائد NAT', en: 'NAT Benefits' },
    benefitsList: {
      ar: ['توفير عناوين IPv4', 'تحسين الأمان (إخفاء الأجهزة الداخلية)', 'تمكين الشبكات الخاصة من الاتصال بالإنترنت'],
      en: ['Saving IPv4 addresses', 'Improving security (hiding internal devices)', 'Enabling private networks to connect to the Internet']
    },
    types: { ar: 'أنواع NAT', en: 'NAT Types' },
    staticNat: {
      title: 'Static NAT',
      desc: {
        ar: 'IP خاص ↔ IP عام (ثابت، استخدام محدود)',
        en: 'Private IP ↔ Public IP (fixed, limited use)'
      }
    },
    dynamicNat: {
      title: 'Dynamic NAT',
      desc: {
        ar: 'مجموعة IPs عامة تُستخدم مؤقتًا حسب المتاح',
        en: 'A pool of public IPs used temporarily based on availability'
      }
    },
    pat: {
      title: 'PAT (Port Address Translation)',
      important: {
        ar: 'أشهر نوع! عدة أجهزة تشترك في IP عام واحد باستخدام أرقام Ports مختلفة. المستخدم في المنازل غالبًا.',
        en: 'Most common type! Multiple devices share one public IP using different Port numbers. Usually used in homes.'
      }
    },
    example: { ar: 'مثال عملي (البيت)', en: 'Practical Example (Home)' },
    exampleList: {
      ar: ['الموبايل – اللابتوب – التلفزيون: Private IPs (192.168.x.x)', 'الراوتر: يحوّلهم لـ IP عام واحد', 'الإنترنت: يشوف الراوتر بس'],
      en: ['Mobile – Laptop – TV: Private IPs (192.168.x.x)', 'Router: Converts them to one public IP', 'Internet: Only sees the router']
    }
  },

  // Section 14: IPv4 Classes
  ipv4Classes: {
    intro: {
      ar: 'IPv4 متقسم إلى 5 Classes:',
      en: 'IPv4 is divided into 5 Classes:'
    },
    classTable: {
      headers: { ar: ['Class', 'الوصف', 'النطاق', 'أول Octet'], en: ['Class', 'Description', 'Range', 'First Octet'] },
      rows: {
        ar: [
          ['A', 'شبكات ضخمة جدًا', '1.0.0.0 → 126.255.255.255', '1 – 126'],
          ['B', 'شبكات متوسطة', '128.0.0.0 → 191.255.255.255', '128 – 191'],
          ['C', 'شبكات صغيرة', '192.0.0.0 → 223.255.255.255', '192 – 223'],
          ['D', 'Multicast', '224.x.x.x → 239.x.x.x', '224 – 239'],
          ['E', 'أبحاث وتجارب', '240.x.x.x → 255.x.x.x', '240 – 255'],
        ],
        en: [
          ['A', 'Very large networks', '1.0.0.0 → 126.255.255.255', '1 – 126'],
          ['B', 'Medium networks', '128.0.0.0 → 191.255.255.255', '128 – 191'],
          ['C', 'Small networks', '192.0.0.0 → 223.255.255.255', '192 – 223'],
          ['D', 'Multicast', '224.x.x.x → 239.x.x.x', '224 – 239'],
          ['E', 'Research and experiments', '240.x.x.x → 255.x.x.x', '240 – 255'],
        ]
      }
    },
    loopback: {
      ar: '127.x.x.x محجوز للـ Loopback. مثال: 127.0.0.1 يعني الجهاز بيكلم نفسه.',
      en: '127.x.x.x is reserved for Loopback. Example: 127.0.0.1 means the device is talking to itself.'
    },
    privateIp: {
      title: 'Private IP Addresses',
      desc: {
        ar: 'تُستخدم داخل الشبكات الخاصة فقط وحدّدتها IANA:',
        en: 'Used only within private networks and defined by IANA:'
      },
      table: {
        headers: { ar: ['Class', 'النطاق الخاص'], en: ['Class', 'Private Range'] },
        rows: [
          ['A', '10.0.0.0 – 10.255.255.255'],
          ['B', '172.16.0.0 – 172.31.255.255'],
          ['C', '192.168.0.0 – 192.168.255.255'],
        ]
      }
    }
  },

  // Section 15: Subnetting
  subnetting: {
    subnet: {
      title: 'Subnet',
      desc: {
        ar: 'جزء من الشبكة الأساسية بيشتغل كشبه شبكة مستقلة، له Network Address خاص.',
        en: 'A part of the main network that operates as a semi-independent network, with its own Network Address.'
      }
    },
    subnetMask: {
      title: 'Subnet Mask',
      features: {
        ar: ['قيمة 32-bit', 'بتحدد أنهي جزء Network وأنهي جزء Host', 'تسمح بتقسيم شبكة واحدة لعدة Subnets أصغر'],
        en: ['32-bit value', 'Determines which part is Network and which is Host', 'Allows dividing one network into smaller Subnets']
      }
    },
    borrowingBits: {
      title: 'Borrowing Bits',
      desc: {
        ar: 'نقدر نستلف Bits من جزء الـ Host ونزود عدد الشبكات.',
        en: 'We can borrow Bits from the Host portion to increase the number of networks.'
      },
      tip: {
        ar: 'في Class C، أول 3 Octets = Network، نقدر نستلف من الـ Octet الرابع.',
        en: 'In Class C, first 3 Octets = Network, we can borrow from the fourth Octet.'
      }
    },
    binaryNotation: {
      title: 'Binary Notation',
      desc: {
        ar: 'Subnetting أسهل في النظام الثنائي Binary:',
        en: 'Subnetting is easier in Binary notation:'
      },
      rules: {
        ar: ['Mask = 1 → Network', 'Mask = 0 → Host'],
        en: ['Mask = 1 → Network', 'Mask = 0 → Host']
      },
      note: {
        ar: '1s أكتر = شبكات أكتر | 0s أكتر = Hosts أكتر',
        en: 'More 1s = More networks | More 0s = More Hosts'
      }
    }
  },

  // Section 16: IPv6
  ipv6: {
    whyAppeared: { ar: 'ليه ظهر IPv6؟', en: 'Why did IPv6 appear?' },
    whyAppearedDesc: {
      ar: 'لأن IPv4 (32-bit) خلص تقريبًا والإنترنت كبر جدًا.',
      en: 'Because IPv4 (32-bit) is almost exhausted and the Internet has grown significantly.'
    },
    quote: {
      ar: 'IPv6 جه علشان يوفر عدد عناوين ضخم جدًا',
      en: 'IPv6 came to provide a huge number of addresses'
    },
    addressSize: { ar: 'حجم العنوان', en: 'Address Size' },
    sizeTable: {
      headers: { ar: ['النسخة', 'الحجم'], en: ['Version', 'Size'] },
      rows: [['IPv4', '32 bit'], ['IPv6', '128 bit']]
    },
    addressFormat: { ar: 'شكل IPv6 Address', en: 'IPv6 Address Format' },
    formatFeatures: {
      ar: ['8 مجموعات', 'Hexadecimal', 'كل مجموعة = 4 رموز'],
      en: ['8 groups', 'Hexadecimal', 'Each group = 4 symbols']
    },
    advantages: { ar: 'مميزات IPv6', en: 'IPv6 Advantages' },
    advantagesList: {
      ar: ['عدد عناوين مهول', 'أمان أعلى (IPsec مدمج)', 'لا يحتاج NAT', 'أداء أفضل في بعض الحالات', 'إعداد تلقائي (Stateless Autoconfiguration)'],
      en: ['Massive number of addresses', 'Higher security (built-in IPsec)', 'No need for NAT', 'Better performance in some cases', 'Automatic configuration (Stateless Autoconfiguration)']
    },
    noBroadcast: {
      ar: 'IPv6 لا يستخدم Broadcast، بدل كده يستخدم Multicast و Anycast.',
      en: 'IPv6 doesn\'t use Broadcast, instead it uses Multicast and Anycast.'
    },
    addressTypes: { ar: 'أنواع عناوين IPv6', en: 'IPv6 Address Types' },
    addressTypesList: {
      ar: ['Unicast → لجهاز واحد', 'Multicast → لمجموعة', 'Anycast → لأقرب جهاز'],
      en: ['Unicast → To one device', 'Multicast → To a group', 'Anycast → To nearest device']
    },
    noNatWhy: {
      ar: 'ليه IPv6 مش محتاج NAT؟ لأن عدد العناوين كبير جدًا، كل جهاز يقدر يكون له Public IP خاص بيه!',
      en: 'Why doesn\'t IPv6 need NAT? Because the number of addresses is so large, every device can have its own Public IP!'
    },
    conclusion: { ar: 'الخلاصة', en: 'Conclusion' },
    conclusionList: {
      ar: ['IP هو هوية الجهاز في الشبكة', 'IPv4 محدود → IPv6 الحل', 'DHCP بيوزع IPs تلقائيًا', 'NAT حل مؤقت لمشكلة IPv4', 'Subnetting مهم لتنظيم الشبكات', 'IPv6 = مستقبل الإنترنت'],
      en: ['IP is the device identity in the network', 'IPv4 is limited → IPv6 is the solution', 'DHCP distributes IPs automatically', 'NAT is a temporary solution for IPv4 problem', 'Subnetting is important for network organization', 'IPv6 = Future of the Internet']
    }
  },

  // Common UI elements
  ui: {
    createdBy: { ar: 'من إنشاء', en: 'Created by' },
    progress: { ar: 'التقدم', en: 'Progress' },
    computerNetworks: { ar: 'شبكات الحاسوب', en: 'Computer Networks' },
    studyReference: { ar: 'مرجع دراسي', en: 'Study Reference' }
  }
};
