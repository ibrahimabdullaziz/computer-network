import { Section } from "../components/Section";
import { Callout } from "../components/Callout";
import { CodeBlock } from "../components/CodeBlock";
import { Table } from "../components/Table";
import { useLanguage } from "../context/LanguageContext";
import { translations as t } from "./translations";

export function OSIModelSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.osiModel;

  return (
    <Section
      id="osi-model"
      number="1"
      title="نموذج OSI"
      titleEn="OSI Reference Model"
      onVisible={onVisible}
    >
      <p>
        {lang === "ar" ? (
          <>
            نموذج <span className="term">OSI Reference Model</span> ده موديل
            نظري معمول علشان يوصف ازاي الاتصال في الشبكات بيحصل ويساعدنا نفهم
            ونصمّم <span className="term">Network Communications</span> صح.
          </>
        ) : (
          <>
            The <span className="term">OSI Reference Model</span> is a
            theoretical model designed to describe how network communication
            works and helps us understand and design{" "}
            <span className="term">Network Communications</span> correctly.
          </>
        )}
      </p>

      <Callout type="important">
        {lang === "ar" ? (
          <>
            الموديل ده بيقسم شغل الشبكة كلها على <strong>7 Layers</strong>، وكل
            Layer ليها وظيفة محددة جدًا. كل طبقة بتستخدم خدمات الطبقة اللي تحتها
            وبتقدم خدمات للطبقة اللي فوقها.
          </>
        ) : (
          <>
            This model divides all network operations into{" "}
            <strong>7 Layers</strong>, and each Layer has a very specific
            function. Each layer uses the services of the layer below it and
            provides services to the layer above it.
          </>
        )}
      </Callout>

      <h2>{tr.layerDivision[lang]}</h2>

      <h3>
        {lang === "ar" ? "Lower Layers (الطبقات السفلى)" : "Lower Layers"}
      </h3>
      <p>
        <span className="term">Physical – Data Link – Network – Transport</span>
      </p>
      <p>{tr.lowerLayersDesc[lang]}</p>
      <ul>
        <li>{tr.networkCards[lang]}</li>
        <li>{tr.switches[lang]}</li>
        <li>{tr.routers[lang]}</li>
      </ul>
      <Callout type="note">{tr.lowerLayersNote[lang]}</Callout>

      <h3>
        {lang === "ar" ? "Upper Layers (الطبقات العليا)" : "Upper Layers"}
      </h3>
      <p>
        <span className="term">Session – Presentation – Application</span>
      </p>
      <p>{tr.upperLayersDesc[lang]}</p>
      <ul>
        <li>{tr.programs[lang]}</li>
        <li>{tr.operatingSystems[lang]}</li>
        <li>{tr.networkApps[lang]}</li>
      </ul>
      <Callout type="tip">{tr.upperLayersTip[lang]}</Callout>

      <div className="card-grid">
        {tr.layers.map((layer) => (
          <div key={layer.num} className="layer-card">
            <div className="layer-number">{layer.num}</div>
            <div className="layer-name">
              {lang === "ar" ? layer.ar : layer.en}
            </div>
            <div className="layer-name-en">{lang === "ar" ? layer.en : ""}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function ApplicationLayerSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.applicationLayer;

  return (
    <Section
      id="application-layer"
      number="2"
      title="طبقة التطبيقات"
      titleEn="Application Layer - Layer 7"
      onVisible={onVisible}
    >
      <p>
        {lang === "ar" ? (
          <>
            دي أعلى <span className="term">Layer</span> في{" "}
            <span className="term">OSI</span>، ومفيش فوقها حاجة. وهي أقرب طبقة
            للـ <span className="term">End User</span>.
          </>
        ) : (
          <>
            This is the highest <span className="term">Layer</span> in{" "}
            <span className="term">OSI</span>, with nothing above it. It is the
            closest layer to the <span className="term">End User</span>.
          </>
        )}
      </p>

      <Callout type="important">
        {lang === "ar" ? (
          <>
            <span className="term">Application Layer</span> مش هي البرنامج نفسه،
            لكنها بتوفّر الخدمات الشبكية اللي البرنامج محتاجها.
          </>
        ) : (
          <>
            The <span className="term">Application Layer</span> is not the
            program itself, but it provides the network services that the
            program needs.
          </>
        )}
      </Callout>

      <p>{tr.desc[lang]}</p>

      <h3>{tr.protocolExamples[lang]}</h3>
      <Table
        headers={[tr.protocol[lang], tr.function[lang]]}
        rows={tr.protocols.map((p) => [p.protocol, p[lang]])}
      />

      <Callout type="note">{tr.calloutNote[lang]}</Callout>
    </Section>
  );
}

export function PresentationLayerSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.presentationLayer;

  return (
    <Section
      id="presentation-layer"
      number="3"
      title="طبقة العرض"
      titleEn="Presentation Layer - Layer 6"
      onVisible={onVisible}
    >
      <p>{tr.intro[lang]}</p>

      <blockquote>{tr.quote[lang]}</blockquote>

      <h3>{tr.whyImportant[lang]}</h3>
      <p>
        {lang === "ar" ? (
          <>
            لأن ممكن جهاز <span className="term">Windows</span> وجهاز{" "}
            <span className="term">Mac</span> يبقوا بيتكلموا مع بعض، بس طريقة
            تمثيل الداتا مختلفة.
          </>
        ) : (
          <>
            Because a <span className="term">Windows</span> device and a{" "}
            <span className="term">Mac</span> device might be communicating with
            each other, but their data representation methods are different.
          </>
        )}
      </p>

      <h3>{tr.functions[lang]}</h3>
      <ul>
        {tr.functionsList.map((item, i) => (
          <li key={i}>
            <span className="term">{item.term}</span> - {item[lang]}
          </li>
        ))}
      </ul>

      <Callout type="tip">
        {lang === "ar" ? (
          <>
            تُعتبر حلقة وصل بين <span className="term">Session Layer</span> و{" "}
            <span className="term">Application Layer</span>.
          </>
        ) : (
          <>
            It acts as a link between the{" "}
            <span className="term">Session Layer</span> and the{" "}
            <span className="term">Application Layer</span>.
          </>
        )}
      </Callout>
    </Section>
  );
}

export function SessionLayerSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.sessionLayer;

  return (
    <Section
      id="session-layer"
      number="4"
      title="طبقة الجلسة"
      titleEn="Session Layer - Layer 5"
      onVisible={onVisible}
    >
      <p>
        {lang === "ar" ? (
          <>
            دي أول طبقة في <span className="term">Upper Layers</span> ومهتمة
            بقضايا التطبيقات مش بنقل الداتا نفسه.
          </>
        ) : (
          <>
            This is the first layer in the{" "}
            <span className="term">Upper Layers</span> and is concerned with
            application issues, not data transfer itself.
          </>
        )}
      </p>

      <h3>{tr.work[lang]}</h3>
      <ul>
        {tr.workList[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <blockquote>{tr.quote[lang]}</blockquote>

      <h3>{tr.example[lang]}</h3>
      <ul>
        {tr.exampleList[lang].map((item, i) => (
          <li key={i}>
            {item === "Logout" ? <span className="term">Logout</span> : item}
          </li>
        ))}
      </ul>
      <p>{tr.exampleDesc[lang]}</p>

      <Callout type="note">
        {lang === "ar" ? (
          <>
            هي بتسمح لأجهزة الشبكة إنها تنشئ{" "}
            <span className="term">Sessions</span> ممتدة وتحافظ عليها وتشارك
            الداتا من خلالها. من البروتوكولات:{" "}
            <span className="term">NetBIOS</span>.
          </>
        ) : (
          <>
            It allows network devices to create extended{" "}
            <span className="term">Sessions</span>, maintain them, and share
            data through them. Protocols include:{" "}
            <span className="term">NetBIOS</span>.
          </>
        )}
      </Callout>
    </Section>
  );
}

export function TransportLayerSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.transportLayer;

  return (
    <Section
      id="transport-layer"
      number="5"
      title="طبقة النقل"
      titleEn="Transport Layer - Layer 4"
      onVisible={onVisible}
    >
      <p>{tr.intro[lang]}</p>

      <h3>{tr.questions[lang]}</h3>
      <ul>
        {tr.questionsList[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>{tr.functions[lang]}</h3>
      <ul>
        {tr.functionsList[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>{tr.protocols[lang]}</h2>

      <h3>UDP</h3>
      <ul>
        {tr.udp.features[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <blockquote>{tr.udp.quote}</blockquote>
      <p>{tr.udp.example[lang]}</p>

      <h3>TCP</h3>
      <ul>
        {tr.tcp.features[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <Table
        headers={tr.comparison.headers[lang]}
        rows={tr.comparison.rows[lang]}
      />
    </Section>
  );
}

export function NetworkLayerSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.networkLayer;

  return (
    <Section
      id="network-layer"
      number="6"
      title="طبقة الشبكة"
      titleEn="Network Layer - Layer 3"
      onVisible={onVisible}
    >
      <blockquote>{tr.quote[lang]}</blockquote>

      <h3>{tr.mainTask[lang]}</h3>
      <ul>
        {tr.mainTaskList[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <Callout type="important">{tr.calloutImportant[lang]}</Callout>

      <h3>{tr.functions[lang]}</h3>
      <ul>
        {tr.functionsList[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p>{tr.desc[lang]}</p>
    </Section>
  );
}

export function DataLinkLayerSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.dataLinkLayer;

  return (
    <Section
      id="datalink-layer"
      number="7"
      title="طبقة ربط البيانات"
      titleEn="Data Link Layer - Layer 2"
      onVisible={onVisible}
    >
      <blockquote>{tr.quote[lang]}</blockquote>

      <h3>{tr.division[lang]}</h3>

      <h4>
        {lang === "ar"
          ? "LLC (Logical Link Control)"
          : "LLC (Logical Link Control)"}
      </h4>
      <ul>
        {tr.llc.features[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h4>
        {lang === "ar"
          ? "MAC (Media Access Control)"
          : "MAC (Media Access Control)"}
      </h4>
      <ul>
        {tr.mac.features[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>{tr.additionalFunctions[lang]}</h3>
      <ul>
        {tr.additionalFunctionsList[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>{tr.errorDetection}</h3>
      <Callout type="note">{tr.calloutNote[lang]}</Callout>
    </Section>
  );
}

export function PhysicalLayerSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.physicalLayer;

  return (
    <Section
      id="physical-layer"
      number="8"
      title="الطبقة الفيزيائية"
      titleEn="Physical Layer - Layer 1"
      onVisible={onVisible}
    >
      <p>
        {lang === "ar" ? (
          <>
            دي أقل طبقة في <span className="term">OSI</span> وملهاش أي فهم
            للداتا.
          </>
        ) : (
          <>
            This is the lowest layer in <span className="term">OSI</span> and
            has no understanding of data.
          </>
        )}
      </p>

      <h3>{tr.handles[lang]}</h3>
      <ul>
        {tr.handlesList[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <blockquote>{tr.quote[lang]}</blockquote>

      <h3>{tr.devices[lang]}</h3>
      <p>
        <span className="term">Hub</span>
      </p>

      <h3>{tr.responsible[lang]}</h3>
      <ul>
        {tr.responsibleList[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </Section>
  );
}

export function LinkTypesSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.linkTypes;

  return (
    <Section
      id="link-types"
      number="9"
      title="أنواع الروابط"
      titleEn="Types of Links"
      onVisible={onVisible}
    >
      <h2>
        {lang === "ar"
          ? "DSL - Digital Subscriber Line"
          : "DSL - Digital Subscriber Line"}
      </h2>

      <blockquote>{tr.dsl.quote[lang]}</blockquote>

      <p>{tr.dsl.desc[lang]}</p>

      <Callout type="note">{tr.dsl.calloutNote[lang]}</Callout>

      <h3>{tr.dsl.howWorks[lang]}</h3>
      <ul>
        {tr.dsl.howWorksList[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>{tr.dsl.types[lang]}</h3>

      <h4>
        {lang === "ar" ? "ADSL (Asymmetric DSL)" : "ADSL (Asymmetric DSL)"}
      </h4>
      <p>{tr.dsl.adsl.desc[lang]}</p>
      <ul>
        {tr.dsl.adsl.features[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <Callout type="tip">{tr.dsl.adsl.tip[lang]}</Callout>

      <h4>{lang === "ar" ? "SDSL (Symmetric DSL)" : "SDSL (Symmetric DSL)"}</h4>
      <p>{tr.dsl.sdsl.desc[lang]}</p>
      <Callout type="note">{tr.dsl.sdsl.note[lang]}</Callout>

      <Table
        headers={tr.dsl.comparison.headers[lang]}
        rows={tr.dsl.comparison.rows[lang]}
      />

      <hr />

      <h2>
        {lang === "ar"
          ? "ISDN - Integrated Services Digital Network"
          : "ISDN - Integrated Services Digital Network"}
      </h2>

      <blockquote>{tr.isdn.quote[lang]}</blockquote>

      <h3>{tr.isdn.provided[lang]}</h3>
      <ul>
        {tr.isdn.providedList[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>{tr.isdn.whyImportant[lang]}</h3>
      {tr.isdn.whyImportantDesc[lang].map((item, i) => (
        <p key={i}>{item}</p>
      ))}

      <Callout type="note">{tr.isdn.calloutNote[lang]}</Callout>
    </Section>
  );
}

export function PDUSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.pdu;

  return (
    <Section
      id="pdu"
      number="10"
      title="وحدات بيانات البروتوكول"
      titleEn="PDU - Protocol Data Unit"
      onVisible={onVisible}
    >
      <blockquote>{tr.quote[lang]}</blockquote>

      <h3>{tr.mentalIdea[lang]}</h3>
      <p>{tr.mentalIdeaDesc[lang]}</p>

      <h3>{tr.pduNames[lang]}</h3>
      <Table headers={tr.pduTable.headers[lang]} rows={tr.pduTable.rows} />

      <hr />

      <h2>
        {lang === "ar"
          ? "Frame (Layer 2 – Data Link)"
          : "Frame (Layer 2 – Data Link)"}
      </h2>
      <blockquote>{tr.frame.quote[lang]}</blockquote>

      <h3>{tr.frame.responsibility[lang]}</h3>
      <ul>
        {tr.frame.responsibilityList[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <Callout type="tip">{tr.frame.tip[lang]}</Callout>

      <h3>{tr.frame.components[lang]}</h3>
      <ul>
        {tr.frame.componentsList[lang].map((item, i) => (
          <li key={i}>
            <strong>{item.split(":")[0]}:</strong>
            {item.split(":").slice(1).join(":")}
          </li>
        ))}
      </ul>

      <hr />

      <h2>
        {lang === "ar"
          ? "Segment & Datagram (Layer 4 – Transport)"
          : "Segment & Datagram (Layer 4 – Transport)"}
      </h2>

      <h3>{lang === "ar" ? "Segment (with TCP)" : "Segment (with TCP)"}</h3>
      <ul>
        {tr.segment.segmentTcp.features[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p>
        <span className="term">
          {lang === "ar"
            ? "Reliable, Ordered, Slower"
            : "Reliable, Ordered, Slower"}
        </span>
      </p>

      <h3>{lang === "ar" ? "Datagram (with UDP)" : "Datagram (with UDP)"}</h3>
      <ul>
        {tr.segment.datagramUdp.features[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p>
        <span className="term">
          {lang === "ar" ? "Fast, Not Reliable" : "Fast, Not Reliable"}
        </span>
      </p>

      <Callout type="note">{tr.segment.datagramUdp.note[lang]}</Callout>
    </Section>
  );
}

export function PacketStructureSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.packetStructure;

  return (
    <Section
      id="packet-structure"
      number="11"
      title="هيكل الحزمة"
      titleEn="Packet Structure"
      onVisible={onVisible}
    >
      <blockquote>{tr.quote[lang]}</blockquote>

      <h2>{tr.whyPackets.title[lang]}</h2>
      <p>{tr.whyPackets.desc[lang]}</p>
      <blockquote>{tr.whyPackets.quote[lang]}</blockquote>

      <p>{tr.intro[lang]}</p>

      <Callout type="tip">{tr.tip[lang]}</Callout>

      <h2>{tr.components[lang]}</h2>

      <h3>{tr.header.title[lang]}</h3>
      <p>{tr.header.desc[lang]}</p>

      <Callout type="important">{tr.header.important[lang]}</Callout>

      <h4>{tr.header.elements[lang]}</h4>
      <Table
        headers={tr.header.table.headers[lang]}
        rows={tr.header.table.rows[lang]}
      />

      <Callout type="important" title={tr.header.table.deepDive.title[lang]}>
        {tr.header.table.deepDive.desc[lang]}
      </Callout>

      <h3>{lang === "ar" ? "TTL (Time To Live)" : "TTL (Time To Live)"}</h3>
      <blockquote>{tr.ttl.quote[lang]}</blockquote>
      <ul>
        {tr.ttl.features[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <Callout type="note">{tr.ttl.note[lang]}</Callout>

      <h3>{tr.payload.title[lang]}</h3>
      <p>{tr.payload.desc[lang]}</p>

      <h3>{tr.trailer.title[lang]}</h3>
      <p>{tr.trailer.desc[lang]}</p>

      <Callout type="important">{tr.conclusion[lang]}</Callout>
    </Section>
  );
}

export function IPAddressingSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.ipAddressing;

  return (
    <Section
      id="ip-addressing"
      number="12"
      title="عنونة IP"
      titleEn="IP Addressing"
      onVisible={onVisible}
    >
      <blockquote>{tr.quote[lang]}</blockquote>

      <h3>{tr.mainFunction[lang]}</h3>
      <ul>
        {tr.mainFunctionList[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <Callout type="tip" title={tr.whereWorks.title[lang]}>
        <ul>
          {tr.whereWorks.list[lang].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Callout>

      <Callout type="important">{tr.important[lang]}</Callout>

      <h2>{tr.types[lang]}</h2>

      <h3>{lang === "ar" ? "Static IP" : "Static IP"}</h3>
      <ul>
        {tr.staticIp.features[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>{lang === "ar" ? "Dynamic IP" : "Dynamic IP"}</h3>
      <ul>
        {tr.dynamicIp.features[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>
        {lang === "ar"
          ? "DHCP (Dynamic Host Configuration Protocol)"
          : "DHCP (Dynamic Host Configuration Protocol)"}
      </h2>
      <p>
        <span className="term">{tr.dhcp.fullName}</span>
      </p>
      <p>{tr.dhcp.desc[lang]}</p>
      <ul>
        {tr.dhcp.provides.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <Callout type="tip">{tr.dhcp.tip[lang]}</Callout>

      <h2>{lang === "ar" ? "APIPA (169.254.x.x)" : "APIPA (169.254.x.x)"}</h2>
      <p>{tr.apipa.desc[lang]}</p>
      <CodeBlock language="text">169.254.x.x</CodeBlock>
      <Callout type="warning">{tr.apipa.warning[lang]}</Callout>

      <h2>
        {lang === "ar" ? "IPv4 Address Structure" : "IPv4 Address Structure"}
      </h2>
      <ul>
        {tr.structure.features[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <CodeBlock language="text">192.168.1.10</CodeBlock>
    </Section>
  );
}

export function NATSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.nat;

  return (
    <Section
      id="nat"
      number="13"
      title="ترجمة عناوين الشبكة"
      titleEn="NAT - Network Address Translation"
      onVisible={onVisible}
    >
      <blockquote>{tr.quote[lang]}</blockquote>

      <h3>{tr.whyUse[lang]}</h3>
      <ul>
        {tr.whyUseList[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>{tr.benefits[lang]}</h3>
      <ul>
        {tr.benefitsList[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>{tr.types[lang]}</h2>

      <h3>{lang === "ar" ? "Static NAT" : "Static NAT"}</h3>
      <p>{tr.staticNat.desc[lang]}</p>

      <h3>{lang === "ar" ? "Dynamic NAT" : "Dynamic NAT"}</h3>
      <p>{tr.dynamicNat.desc[lang]}</p>

      <h3>
        {lang === "ar"
          ? "PAT (Port Address Translation)"
          : "PAT (Port Address Translation)"}
      </h3>
      <Callout type="important">{tr.pat.important[lang]}</Callout>

      <h3>{tr.example[lang]}</h3>
      <ul>
        {tr.exampleList[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </Section>
  );
}

export function IPv4ClassesSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.ipv4Classes;

  return (
    <Section
      id="ipv4-classes"
      number="14"
      title="فئات IPv4"
      titleEn="IPv4 Classes & Private IPs"
      onVisible={onVisible}
    >
      <p>{tr.intro[lang]}</p>

      <Table
        headers={tr.classTable.headers[lang]}
        rows={tr.classTable.rows[lang]}
      />

      <Callout type="warning">{tr.loopback[lang]}</Callout>

      <h2>{lang === "ar" ? "Private IP Addresses" : "Private IP Addresses"}</h2>
      <p>{tr.privateIp.desc[lang]}</p>

      <Table
        headers={tr.privateIp.table.headers[lang]}
        rows={tr.privateIp.table.rows}
      />
    </Section>
  );
}

export function SubnettingSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.subnetting;

  return (
    <Section
      id="subnetting"
      number="15"
      title="تقسيم الشبكات"
      titleEn="Subnet & Subnet Mask"
      onVisible={onVisible}
    >
      <h2>{lang === "ar" ? "Subnet" : "Subnet"}</h2>
      <p>{tr.subnet.desc[lang]}</p>

      <h2>{lang === "ar" ? "Subnet Mask" : "Subnet Mask"}</h2>
      <ul>
        {tr.subnetMask.features[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>{lang === "ar" ? "Borrowing Bits" : "Borrowing Bits"}</h3>
      <p>{tr.borrowingBits.desc[lang]}</p>
      <Callout type="tip">{tr.borrowingBits.tip[lang]}</Callout>

      <h3>{lang === "ar" ? "Binary Notation" : "Binary Notation"}</h3>
      <p>{tr.binaryNotation.desc[lang]}</p>
      <ul>
        {tr.binaryNotation.rules[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <Callout type="note">{tr.binaryNotation.note[lang]}</Callout>
    </Section>
  );
}

// Section 16: Network Performance Metrics
export function NetworkPerformanceMetricsSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.networkPerformanceMetrics;

  return (
    <Section
      id="network-performance"
      number="16"
      title="مقاييس أداء الشبكة"
      titleEn="Network Performance Metrics"
      onVisible={onVisible}
    >
      <p>{lang === "ar" ? tr.intro.ar : tr.intro.en}</p>

      <Callout type="important">
        {lang === "ar" ? tr.qosIntro.ar : tr.qosIntro.en}
      </Callout>

      <hr />
      <h2>
        {lang === "ar" ? "مقاييس الأداء الرئيسية" : "Main Performance Metrics"}
      </h2>
      <Table
        headers={tr.metricsTable.headers[lang]}
        rows={tr.metricsTable.rows.map((row) =>
          lang === "ar" ? row : [row[0], row[2], row[3]]
        )}
      />
    </Section>
  );
}

// Section 17: Routing Problems
export function RoutingProblemsSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.routingProblems;

  return (
    <Section
      id="routing-problems"
      number="17"
      title="مشاكل التوجيه"
      titleEn="Routing Problems"
      onVisible={onVisible}
    >
      <p>{lang === "ar" ? tr.intro.ar : tr.intro.en}</p>

      <hr />
      <h2>
        {lang === "ar"
          ? tr.droppedPackets.title.ar
          : tr.droppedPackets.title.en}
      </h2>
      <Callout type="important">
        {lang === "ar"
          ? tr.droppedPackets.meaning.ar
          : tr.droppedPackets.meaning.en}
      </Callout>
      <h4>
        {lang === "ar"
          ? tr.droppedPackets.causes.title.ar
          : tr.droppedPackets.causes.title.en}
      </h4>
      <ul>
        {tr.droppedPackets.causes.items[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h4>
        {lang === "ar"
          ? tr.droppedPackets.impact.title.ar
          : tr.droppedPackets.impact.title.en}
      </h4>
      <ul>
        {tr.droppedPackets.impact.items[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <Callout type="warning">
        {lang === "ar" ? tr.droppedPackets.note.ar : tr.droppedPackets.note.en}
      </Callout>

      <hr />
      <h2>{lang === "ar" ? tr.delay.title.ar : tr.delay.title.en}</h2>
      <Callout type="important">
        {lang === "ar" ? tr.delay.meaning.ar : tr.delay.meaning.en}
      </Callout>
      <h4>
        {lang === "ar" ? tr.delay.causes.title.ar : tr.delay.causes.title.en}
      </h4>
      <ul>
        {tr.delay.causes.items[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p>
        <strong>{lang === "ar" ? "التأثير:" : "Impact:"}</strong>{" "}
        {lang === "ar" ? tr.delay.impact.ar : tr.delay.impact.en}
      </p>

      <hr />
      <h2>{lang === "ar" ? tr.jitter.title.ar : tr.jitter.title.en}</h2>
      <Callout type="important">
        {lang === "ar" ? tr.jitter.meaning.ar : tr.jitter.meaning.en}
      </Callout>
      <p>
        <strong>{lang === "ar" ? "التأثير:" : "Impact:"}</strong>{" "}
        {lang === "ar" ? tr.jitter.impact.ar : tr.jitter.impact.en}
      </p>
      <Callout type="warning">
        {lang === "ar" ? tr.jitter.note.ar : tr.jitter.note.en}
      </Callout>

      <hr />
      <h2>{lang === "ar" ? tr.outOfOrder.title.ar : tr.outOfOrder.title.en}</h2>
      <Callout type="important">
        {lang === "ar" ? tr.outOfOrder.meaning.ar : tr.outOfOrder.meaning.en}
      </Callout>
      <h4>
        {lang === "ar"
          ? tr.outOfOrder.causes.title.ar
          : tr.outOfOrder.causes.title.en}
      </h4>
      <ul>
        {tr.outOfOrder.causes.items[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p>
        <strong>{lang === "ar" ? "التأثير:" : "Impact:"}</strong>{" "}
        {lang === "ar" ? tr.outOfOrder.impact.ar : tr.outOfOrder.impact.en}
      </p>
      <Callout type="note">
        {lang === "ar" ? tr.outOfOrder.note.ar : tr.outOfOrder.note.en}
      </Callout>

      <hr />
      <h2>{lang === "ar" ? tr.errors.title.ar : tr.errors.title.en}</h2>
      <Callout type="important">
        {lang === "ar" ? tr.errors.meaning.ar : tr.errors.meaning.en}
      </Callout>
      <h4>
        {lang === "ar" ? tr.errors.causes.title.ar : tr.errors.causes.title.en}
      </h4>
      <ul>
        {tr.errors.causes.items[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p>
        <strong>{lang === "ar" ? "التأثير:" : "Impact:"}</strong>{" "}
        {lang === "ar" ? tr.errors.impact.ar : tr.errors.impact.en}
      </p>

      <hr />
      <h2>
        {lang === "ar"
          ? tr.faultTolerance.title.ar
          : tr.faultTolerance.title.en}
      </h2>
      <h4>
        {lang === "ar"
          ? tr.faultTolerance.tolerance.title.ar
          : tr.faultTolerance.tolerance.title.en}
      </h4>
      <p>
        {lang === "ar"
          ? tr.faultTolerance.tolerance.meaning.ar
          : tr.faultTolerance.tolerance.meaning.en}
      </p>

      <h4>
        {lang === "ar"
          ? tr.faultTolerance.redundancy.title.ar
          : tr.faultTolerance.redundancy.title.en}
      </h4>
      <p>
        {lang === "ar"
          ? tr.faultTolerance.redundancy.meaning.ar
          : tr.faultTolerance.redundancy.meaning.en}
      </p>

      <div className="grid-2">
        <div className="card">
          <h4>
            {lang === "ar"
              ? tr.faultTolerance.withoutVs.without.title.ar
              : tr.faultTolerance.withoutVs.without.title.en}
          </h4>
          <ul>
            {tr.faultTolerance.withoutVs.without.items[lang].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h4>
            {lang === "ar"
              ? tr.faultTolerance.withoutVs.with.title.ar
              : tr.faultTolerance.withoutVs.with.title.en}
          </h4>
          <ul>
            {tr.faultTolerance.withoutVs.with.items[lang].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

// Section 18: The Need to Route
export function NeedToRouteSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.needToRoute;

  return (
    <Section
      id="need-to-route"
      number="18"
      title="ضرورة التوجيه"
      titleEn="The Need to Route"
      onVisible={onVisible}
    >
      <h2>{lang === "ar" ? tr.why.ar : tr.why.en}</h2>
      <Callout type="important">
        {lang === "ar" ? tr.mental.ar : tr.mental.en}
      </Callout>

      <hr />
      <h2>{lang === "ar" ? tr.routerRole.title.ar : tr.routerRole.title.en}</h2>
      <p>{lang === "ar" ? tr.routerRole.desc.ar : tr.routerRole.desc.en}</p>
    </Section>
  );
}

// Section 19: Routers
export function RoutersSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.routers;

  return (
    <Section
      id="routers"
      number="19"
      title="الموجهات"
      titleEn="Routers"
      onVisible={onVisible}
    >
      <h2>
        {lang === "ar"
          ? tr.basicRequirements.title.ar
          : tr.basicRequirements.title.en}
      </h2>
      <ul>
        {tr.basicRequirements.requirements[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <Callout type="warning">
        {lang === "ar"
          ? tr.basicRequirements.note.ar
          : tr.basicRequirements.note.en}
      </Callout>

      <hr />
      <h2>{lang === "ar" ? tr.learning.title.ar : tr.learning.title.en}</h2>
      <p>{lang === "ar" ? tr.learning.desc.ar : tr.learning.desc.en}</p>

      <hr />
      <h2>
        {lang === "ar" ? tr.routingTable.title.ar : tr.routingTable.title.en}
      </h2>
      <p>{lang === "ar" ? tr.routingTable.desc.ar : tr.routingTable.desc.en}</p>
      <Callout type="important">
        {lang === "ar"
          ? tr.routingTable.important.ar
          : tr.routingTable.important.en}
      </Callout>

      <hr />
      <h2>
        {lang === "ar" ? tr.protocolTypes.title.ar : tr.protocolTypes.title.en}
      </h2>
      <Table
        headers={tr.protocolTypes.table.headers[lang]}
        rows={tr.protocolTypes.table.rows.map((row) =>
          lang === "ar" ? row : [row[0], row[1]]
        )}
      />

      <h4>
        {lang === "ar"
          ? tr.protocolTypes.routable.title.ar
          : tr.protocolTypes.routable.title.en}
      </h4>
      <p>
        {lang === "ar"
          ? tr.protocolTypes.routable.desc.ar
          : tr.protocolTypes.routable.desc.en}
      </p>

      <h4>
        {lang === "ar"
          ? tr.protocolTypes.routing.title.ar
          : tr.protocolTypes.routing.title.en}
      </h4>
      <p>
        {lang === "ar"
          ? tr.protocolTypes.routing.desc.ar
          : tr.protocolTypes.routing.desc.en}
      </p>
    </Section>
  );
}

// Section 20: Routing Basics
export function RoutingBasicsSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.routingBasics;

  return (
    <Section
      id="routing-basics"
      number="20"
      title="أساسيات التوجيه"
      titleEn="Routing Basics"
      onVisible={onVisible}
    >
      <h2>{lang === "ar" ? tr.definition.title.ar : tr.definition.title.en}</h2>
      <Callout type="important">
        {lang === "ar" ? tr.definition.desc.ar : tr.definition.desc.en}
      </Callout>

      <hr />
      <h2>{lang === "ar" ? tr.sameSubnet.title.ar : tr.sameSubnet.title.en}</h2>
      <p>
        <strong>{lang === "ar" ? "السيناريو:" : "Scenario:"}</strong>{" "}
        {lang === "ar" ? tr.sameSubnet.scenario.ar : tr.sameSubnet.scenario.en}
      </p>
      <h4>
        {lang === "ar"
          ? tr.sameSubnet.what.title.ar
          : tr.sameSubnet.what.title.en}
      </h4>
      <ul>
        {tr.sameSubnet.what.items[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <hr />
      <h2>
        {lang === "ar"
          ? tr.differentSubnet.title.ar
          : tr.differentSubnet.title.en}
      </h2>
      <p>
        <strong>{lang === "ar" ? "السيناريو:" : "Scenario:"}</strong>{" "}
        {lang === "ar"
          ? tr.differentSubnet.scenario.ar
          : tr.differentSubnet.scenario.en}
      </p>
      <h4>
        {lang === "ar"
          ? tr.differentSubnet.what.title.ar
          : tr.differentSubnet.what.title.en}
      </h4>
      <ul>
        {tr.differentSubnet.what.steps[lang].map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ul>
    </Section>
  );
}

// Section 21: Routing Tables
export function RoutingTablesSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.routingTables;

  return (
    <Section
      id="routing-tables"
      number="21"
      title="جداول التوجيه"
      titleEn="Routing Tables"
      onVisible={onVisible}
    >
      <p>{lang === "ar" ? tr.intro.ar : tr.intro.en}</p>

      <hr />
      <h2>{lang === "ar" ? tr.components.title.ar : tr.components.title.en}</h2>
      <Table
        headers={tr.components.table.headers[lang]}
        rows={tr.components.table.rows.map((row) =>
          lang === "ar" ? row : [row[0], row[1]]
        )}
      />

      <hr />
      <h2>
        {lang === "ar"
          ? tr.defaultGateway.title.ar
          : tr.defaultGateway.title.en}
      </h2>
      <Callout type="note">
        {lang === "ar" ? tr.defaultGateway.desc.ar : tr.defaultGateway.desc.en}
      </Callout>

      <hr />
      <h2>{lang === "ar" ? tr.dynamic.title.ar : tr.dynamic.title.en}</h2>
      <Callout type="important">
        {lang === "ar" ? tr.dynamic.old.ar : tr.dynamic.old.en}
      </Callout>
      <p>{lang === "ar" ? tr.dynamic.now.ar : tr.dynamic.now.en}</p>
    </Section>
  );
}

// Section 22: Routing Protocols
export function RoutingProtocolsSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.routingProtocols;

  return (
    <Section
      id="routing-protocols"
      number="22"
      title="بروتوكولات التوجيه"
      titleEn="Routing Protocols"
      onVisible={onVisible}
    >
      <p>{lang === "ar" ? tr.intro.ar : tr.intro.en}</p>

      <hr />
      <h2>{lang === "ar" ? tr.purpose.title.ar : tr.purpose.title.en}</h2>
      <ul>
        {tr.purpose.reasons[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <hr />
      <h2>{lang === "ar" ? tr.functions.title.ar : tr.functions.title.en}</h2>
      <ul>
        {tr.functions.items[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <hr />
      <h2>{lang === "ar" ? tr.examples.title.ar : tr.examples.title.en}</h2>
      <ul>
        {tr.examples.list[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </Section>
  );
}

// Section 23: Router Evaluation Criteria
export function RouterEvaluationSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.routerEvaluation;

  return (
    <Section
      id="router-evaluation"
      number="23"
      title="معايير تقييم بروتوكولات التوجيه"
      titleEn="Router Evaluation Criteria"
      onVisible={onVisible}
    >
      <p>{lang === "ar" ? tr.intro.ar : tr.intro.en}</p>

      <hr />
      <h2>
        {lang === "ar" ? "معايير التقييم الرئيسية" : "Main Evaluation Criteria"}
      </h2>
      {tr.criteria.map((criterion, i) => (
        <div key={i} className="card">
          <h4>{lang === "ar" ? criterion.name.ar : criterion.name.en}</h4>
          <p>{lang === "ar" ? criterion.desc.ar : criterion.desc.en}</p>
        </div>
      ))}
    </Section>
  );
}

// Section 24: Router Components
export function RouterComponentsSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.routerComponents;

  return (
    <Section
      id="router-components"
      number="24"
      title="مكونات الموجهة"
      titleEn="Router Components"
      onVisible={onVisible}
    >
      <p>{lang === "ar" ? tr.intro.ar : tr.intro.en}</p>

      <hr />
      <h2>
        {lang === "ar" ? "مكونات الراوتر الأساسية" : "Basic Router Components"}
      </h2>
      <Table
        headers={tr.components.table.headers[lang]}
        rows={tr.components.table.rows.map((row) =>
          lang === "ar" ? row : [row[0], row[1]]
        )}
      />
    </Section>
  );
}

// Section 25: Router Roles in WANs
export function RouterRolesWANSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.routerRolesInWAN;

  return (
    <Section
      id="router-roles-wan"
      number="25"
      title="أدوار الموجهات في شبكات WAN"
      titleEn="Router Roles in WANs"
      onVisible={onVisible}
    >
      <p>{lang === "ar" ? tr.intro.ar : tr.intro.en}</p>

      <hr />
      <h2>{lang === "ar" ? tr.hierarchy.title.ar : tr.hierarchy.title.en}</h2>
      <Callout type="important">
        {lang === "ar" ? tr.hierarchy.analogy.ar : tr.hierarchy.analogy.en}
      </Callout>

      <hr />
      <h2>
        {lang === "ar" ? "أنواع الموجهات في WANs" : "Types of Routers in WANs"}
      </h2>
      <p>{lang === "ar" ? tr.types.intro.ar : tr.types.intro.en}</p>

      <div className="card">
        <h4>
          {lang === "ar"
            ? tr.types.interior.title.ar
            : tr.types.interior.title.en}
        </h4>
        <p>
          {lang === "ar"
            ? tr.types.interior.desc.ar
            : tr.types.interior.desc.en}
        </p>
      </div>

      <div className="card">
        <h4>
          {lang === "ar"
            ? tr.types.exterior.title.ar
            : tr.types.exterior.title.en}
        </h4>
        <p>
          {lang === "ar"
            ? tr.types.exterior.desc.ar
            : tr.types.exterior.desc.en}
        </p>
      </div>

      <div className="card">
        <h4>
          {lang === "ar" ? tr.types.border.title.ar : tr.types.border.title.en}
        </h4>
        <p>
          {lang === "ar" ? tr.types.border.desc.ar : tr.types.border.desc.en}
        </p>
      </div>
    </Section>
  );
}

// Section 26: Autonomous Systems
export function AutonomousSystemsSection({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.autonomousSystems;

  return (
    <Section
      id="autonomous-systems"
      number="26"
      title="الأنظمة المستقلة"
      titleEn="Autonomous Systems"
      onVisible={onVisible}
    >
      <h2>{lang === "ar" ? tr.definition.title.ar : tr.definition.title.en}</h2>
      <Callout type="important">
        {lang === "ar" ? tr.definition.desc.ar : tr.definition.desc.en}
      </Callout>

      <hr />
      <h2>
        {lang === "ar"
          ? tr.characteristics.title.ar
          : tr.characteristics.title.en}
      </h2>
      <ul>
        {tr.characteristics.list[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <Callout type="note">
        {lang === "ar" ? tr.important.ar : tr.important.en}
      </Callout>

      <hr />
      <h2>{lang === "ar" ? tr.examples.title.ar : tr.examples.title.en}</h2>
      <ul>
        {tr.examples.list[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </Section>
  );
}

// Section 27: Routing Table Details
export function RoutingTableDeepSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="routing-table-deep"
      number="27"
      title="تفاصيل جدول التوجيه"
      titleEn="Routing Table Details"
      onVisible={onVisible}
    >
      <h2>
        {lang === "ar" ? "مكونات جدول التوجيه" : "Routing Table Components"}
      </h2>
      <p>
        {lang === "ar"
          ? "جدول التوجيه يحتوي على معلومات مهمة لتوجيه الحزم إلى الوجهة الصحيحة"
          : "The routing table contains important information for routing packets to the correct destination"}
      </p>

      <h3>{lang === "ar" ? "الأعمدة الرئيسية" : "Main Columns"}</h3>
      <Table
        headers={
          lang === "ar"
            ? ["العمود", "الوصف", "المثال"]
            : ["Column", "Description", "Example"]
        }
        rows={[
          [
            lang === "ar" ? "الشبكة الوجهة" : "Destination Network",
            lang === "ar"
              ? "الشبكة المراد الوصول إليها"
              : "The network to reach",
            "192.168.1.0/24",
          ],
          [
            lang === "ar" ? "قناع الشبكة" : "Subnet Mask",
            lang === "ar" ? "يحدد حجم الشبكة" : "Defines network size",
            "255.255.255.0",
          ],
          [
            lang === "ar" ? "البوابة التالية" : "Next Hop Gateway",
            lang === "ar" ? "عنوان الموجهة التالية" : "Address of next router",
            "10.0.0.1",
          ],
          [
            lang === "ar" ? "الواجهة" : "Interface",
            lang === "ar"
              ? "واجهة الخروج من الموجهة"
              : "Exit interface from router",
            "eth0",
          ],
          [
            lang === "ar" ? "المسافة الإدارية" : "Administrative Distance",
            lang === "ar"
              ? "موثوقية المسار (0-255)"
              : "Route reliability (0-255)",
            "110",
          ],
          [
            lang === "ar" ? "المقياس" : "Metric",
            lang === "ar"
              ? "تكلفة الطريق (قفزات أو تأخير)"
              : "Cost of route (hops/delay)",
            "20",
          ],
        ]}
      />

      <Callout type="important">
        {lang === "ar"
          ? "الموجهة تبحث عن أقرب مطابقة للشبكة الوجهة وتختار الطريق برقم AD أقل أو Metric أقل"
          : "The router looks for the closest match to the destination network and chooses the route with the lower AD number or metric"}
      </Callout>

      <h3>{lang === "ar" ? "كيفية البحث" : "How Lookup Works"}</h3>
      <ul>
        <li>
          {lang === "ar"
            ? "الموجهة تتلقى حزمة بعنوان IP وجهة معين"
            : "Router receives a packet with a specific destination IP address"}
        </li>
        <li>
          {lang === "ar"
            ? "تبحث في جدول التوجيه عن تطابق أطول (Longest Prefix Match)"
            : "Searches routing table for the longest match (Longest Prefix Match)"}
        </li>
        <li>
          {lang === "ar"
            ? "تختار الطريق الذي يطابق معظم بتات عنوان IP"
            : "Selects the route that matches the most bits of the IP address"}
        </li>
        <li>
          {lang === "ar"
            ? "ترسل الحزمة إلى البوابة التالية عبر الواجهة المحددة"
            : "Sends the packet to the next hop via the specified interface"}
        </li>
      </ul>

      <Callout type="tip">
        {lang === "ar"
          ? "إذا لم توجد مطابقة، يتم إرسال الحزمة إلى Default Gateway (0.0.0.0/0)"
          : "If no match is found, the packet is sent to the Default Gateway (0.0.0.0/0)"}
      </Callout>

      <h3>{lang === "ar" ? "مثال عملي" : "Practical Example"}</h3>
      <CodeBlock language="text">
        {lang === "ar"
          ? `جدول التوجيه:
Destination    Subnet Mask      Gateway      Interface   AD   Metric
192.168.1.0    255.255.255.0    Connected    eth0        0    0
10.0.0.0       255.255.255.0    10.0.0.1     eth1        110  20
0.0.0.0        0.0.0.0          192.168.1.1  eth0        120  5

إذا أردنا إرسال حزمة إلى 192.168.1.50:
1. تطابق مع 192.168.1.0/24 (مرتبط مباشرة)`
          : `Routing Table:
Destination    Subnet Mask      Gateway      Interface   AD   Metric
192.168.1.0    255.255.255.0    Connected    eth0        0    0
10.0.0.0       255.255.255.0    10.0.0.1     eth1        110  20
0.0.0.0        0.0.0.0          192.168.1.1  eth0        120  5

To send a packet to 192.168.1.50:
1. Matches 192.168.1.0/24 (directly connected)`}
      </CodeBlock>
    </Section>
  );
}

// Section 28: Routing Algorithms - Overview
export function RoutingAlgorithmsSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="routing-algorithms"
      number="28"
      title="خوارزميات التوجيه"
      titleEn="Routing Algorithms Overview"
      onVisible={onVisible}
    >
      <h2>
        {lang === "ar"
          ? "ما هي خوارزمية التوجيه؟"
          : "What is a Routing Algorithm?"}
      </h2>
      <p>
        {lang === "ar"
          ? "خوارزمية التوجيه هي العقل الذي يقرر أي طريق يجب أن تأخذها الحزمة للوصول إلى وجهتها"
          : "A routing algorithm is the logic that determines which path a packet should take to reach its destination"}
      </p>

      <h3>{lang === "ar" ? "المتطلبات الأساسية" : "Basic Requirements"}</h3>
      <ul>
        <li>
          {lang === "ar"
            ? "الوصول الصحيح (Correctness)"
            : "Reach destination correctly"}
        </li>
        <li>
          {lang === "ar"
            ? "تقليل الخسارة (Minimize Loss)"
            : "Minimize packet loss"}
        </li>
        <li>{lang === "ar" ? "السرعة (Speed)" : "Achieve fast delivery"}</li>
        <li>
          {lang === "ar" ? "الموثوقية (Reliability)" : "Provide reliability"}
        </li>
      </ul>

      <h3>
        {lang === "ar"
          ? "مثال عملي - الشبكة مع التكرار"
          : "Practical Example - Redundant Network"}
      </h3>
      <p>
        {lang === "ar"
          ? "الشبكة تحتوي على 4 موجهات (A, B, C, D) متصلة بثلاث شبكات مع خادم وجهاز مستخدم"
          : "Network contains 4 routers (A, B, C, D) connected to 3 networks with a server and client devices"}
      </p>

      <Callout type="important">
        {lang === "ar"
          ? "الفائدة من وجود عدة مسارات: إذا فشل مسار واحد، الشبكة تبقى تعمل بفضل المسارات البديلة"
          : "Multiple paths allow the network to remain operational even if one link fails"}
      </Callout>

      <h3>{lang === "ar" ? "أنواع الخوارزميات" : "Algorithm Types"}</h3>
      <Table
        headers={
          lang === "ar"
            ? ["النوع", "الوصف", "الخصائص"]
            : ["Type", "Description", "Characteristics"]
        }
        rows={[
          [
            lang === "ar" ? "Distance-Vector" : "Distance-Vector",
            lang === "ar"
              ? "Router يتعلم من الجيران فقط"
              : "Router learns from neighbors only",
            lang === "ar" ? "بسيط، بطيء" : "Simple, Slow",
          ],
          [
            lang === "ar" ? "Link-State" : "Link-State",
            lang === "ar"
              ? "Router يبني صورة كاملة للشبكة"
              : "Router builds complete network map",
            lang === "ar" ? "معقد، سريع" : "Complex, Fast",
          ],
        ]}
      />
    </Section>
  );
}

// Section 29: Convergence States
export function ConvergenceStatesSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="convergence-states"
      number="29"
      title="حالات التقارب"
      titleEn="Convergence States"
      onVisible={onVisible}
    >
      <h2>
        {lang === "ar"
          ? "Pre-Convergence - قبل المشكلة"
          : "Pre-Convergence - Before Failure"}
      </h2>
      <p>
        {lang === "ar"
          ? "الحالة المثالية حيث كل Router لديه صورة صحيحة عن الشبكة"
          : "All routers have correct and identical information about the network"}
      </p>

      <h2>
        {lang === "ar"
          ? "Mid-Convergence - أخطر مرحلة"
          : "Mid-Convergence - Unstable State"}
      </h2>
      <p>
        {lang === "ar"
          ? "المرحلة التي تقع بين حدوث العطل واكتشافه من قبل جميع الموجهات"
          : "The dangerous phase where some routers know about a failure and others don't"}
      </p>

      <Callout type="warning">
        {lang === "ar"
          ? "في هذه المرحلة قد تحدث Routing Loops و Packet Loss"
          : "Routing loops and packet loss can occur during this state"}
      </Callout>

      <h2>
        {lang === "ar"
          ? "Post-Convergence - الاستقرار"
          : "Post-Convergence - Stable State"}
      </h2>
      <p>
        {lang === "ar"
          ? "كل الموجهات تحديثت جداول التوجيه وتعود للعمل الصحيح"
          : "All routers have converged to a consistent routing state"}
      </p>

      <h3>{lang === "ar" ? "Convergence Time" : "Convergence Time"}</h3>
      <p>
        {lang === "ar"
          ? "الوقت من حدوث العطل لحتى تستقر الشبكة"
          : "Time from failure occurrence until network stability"}
      </p>

      <ul>
        <li>
          {lang === "ar"
            ? "وقت قصير = شبكة قوية"
            : "Short time = Strong network"}
        </li>
        <li>
          {lang === "ar"
            ? "يتأثر بعدد الموجهات والمسافة من مكان العطل"
            : "Affected by number of routers and distance"}
        </li>
        <li>
          {lang === "ar"
            ? "RIP بطيء، OSPF أسرع، BGP متوسط"
            : "RIP slow, OSPF fastest, BGP moderate"}
        </li>
      </ul>
    </Section>
  );
}

// Section 30: Distance-Vector Routing Protocol
export function DistanceVectorSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="distance-vector"
      number="30"
      title="بروتوكول المتجه المسافة"
      titleEn="Distance-Vector Routing Protocol"
      onVisible={onVisible}
    >
      <h2>{lang === "ar" ? "المفهوم الأساسي" : "Core Concept"}</h2>
      <p>
        {lang === "ar"
          ? "Router يعرف فقط الجيران والمسافة لكل وجهة. لا يرى الشبكة كاملة"
          : "A router only knows about its neighbors and the distance to each destination. It doesn't see the complete network"}
      </p>

      <h3>{lang === "ar" ? "آلية العمل" : "How It Works"}</h3>
      <ol>
        <li>
          {lang === "ar"
            ? "كل Router يبعت جدول التوجيه كل 30 ثانية"
            : "Each router sends its routing table every 30 seconds"}
        </li>
        <li>
          {lang === "ar"
            ? "الجيران يستقبلون الجدول ويضيفون 1 للقفزات"
            : "Neighbors receive and increment the hop count by 1"}
        </li>
        <li>
          {lang === "ar"
            ? "يقارنون مع جداولهم ويحتفظون بالأقل"
            : "They compare and keep the route with fewer hops"}
        </li>
      </ol>

      <h3>{lang === "ar" ? "المميزات" : "Advantages"}</h3>
      <ul>
        <li>
          {lang === "ar" ? "بسيط وسهل الفهم" : "Simple and easy to understand"}
        </li>
        <li>
          {lang === "ar" ? "يتطلب موارد قليلة" : "Requires minimal resources"}
        </li>
        <li>
          {lang === "ar"
            ? "يعمل في الشبكات الصغيرة"
            : "Works well in small networks"}
        </li>
      </ul>

      <h3>{lang === "ar" ? "العيوب" : "Disadvantages"}</h3>
      <ul>
        <li>{lang === "ar" ? "بطيء في التقارب" : "Slow convergence"}</li>
        <li>
          {lang === "ar" ? "قد يحدث Routing Loops" : "Can create routing loops"}
        </li>
        <li>
          {lang === "ar"
            ? "لا يأخذ بعين الاعتبار Bandwidth أو التأخير"
            : "Ignores bandwidth and delay"}
        </li>
        <li>{lang === "ar" ? "الحد الأقصى 15 قفزة" : "Maximum 15 hops"}</li>
      </ul>

      <Callout type="note">
        {lang === "ar"
          ? "مثال: RIP هو بروتوكول Distance-Vector"
          : "Example: RIP is a Distance-Vector protocol"}
      </Callout>
    </Section>
  );
}

// Section 31: Link-State Routing Protocol
export function LinkStateSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="link-state"
      number="31"
      title="بروتوكول حالة الوصلة"
      titleEn="Link-State Routing Protocol"
      onVisible={onVisible}
    >
      <h2>{lang === "ar" ? "المفهوم الأساسي" : "Core Concept"}</h2>
      <p>
        {lang === "ar"
          ? "كل Router يبني خريطة كاملة للشبكة ويحتفظ بنسخة محدثة من جميع المعلومات"
          : "Each router builds a complete map of the network and maintains an up-to-date copy of all link information"}
      </p>

      <h3>{lang === "ar" ? "آلية العمل" : "How It Works"}</h3>
      <ol>
        <li>
          {lang === "ar"
            ? "كل Router يبعث LSA (Link State Advertisement)"
            : "Each router floods LSAs (Link State Advertisements)"}
        </li>
        <li>
          {lang === "ar"
            ? "جميع الموجهات تبني LSDB (Link State Database) موحد"
            : "All routers build identical LSDB"}
        </li>
        <li>
          {lang === "ar"
            ? "كل Router يشغل SPF (Dijkstra) لحساب أقصر طريق"
            : "Each router runs SPF algorithm"}
        </li>
        <li>
          {lang === "ar"
            ? "يبني جدول التوجيه بناءً على النتائج"
            : "Builds routing table from results"}
        </li>
      </ol>

      <h3>
        {lang === "ar"
          ? "LSA - رسالة حالة الوصلة"
          : "LSA - Link State Advertisement"}
      </h3>
      <p>
        {lang === "ar"
          ? "تتضمن: معرف Router، الواجهات المتصلة، تكلفة الوصلة، الموجهات المجاورة"
          : "Contains: Router ID, connected interfaces, link cost, neighbor routers"}
      </p>

      <h3>{lang === "ar" ? "المميزات" : "Advantages"}</h3>
      <ul>
        <li>{lang === "ar" ? "تقارب سريع جداً" : "Very fast convergence"}</li>
        <li>
          {lang === "ar"
            ? "تحديثات عند التغيير فقط"
            : "Updates only on topology changes"}
        </li>
        <li>
          {lang === "ar"
            ? "يأخذ بعين الاعتبار تكاليف متعددة"
            : "Considers multiple metrics"}
        </li>
        <li>{lang === "ar" ? "لا توجد Routing Loops" : "No routing loops"}</li>
      </ul>

      <h3>{lang === "ar" ? "العيوب" : "Disadvantages"}</h3>
      <ul>
        <li>{lang === "ar" ? "معقد وصعب الفهم" : "Complex to understand"}</li>
        <li>
          {lang === "ar" ? "يتطلب موارد أكثر" : "Requires more resources"}
        </li>
        <li>
          {lang === "ar"
            ? "استهلاك أعلى للذاكرة والمعالج"
            : "Higher memory and CPU usage"}
        </li>
      </ul>

      <Callout type="note">
        {lang === "ar"
          ? "مثال: OSPF هو بروتوكول Link-State"
          : "Example: OSPF is a Link-State protocol"}
      </Callout>
    </Section>
  );
}

// Section 32: Routing Protocols Comparison
export function RoutingProtocolsComparisonSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="routing-protocols-comparison"
      number="32"
      title="مقارنة بروتوكولات التوجيه"
      titleEn="Routing Protocols Comparison"
      onVisible={onVisible}
    >
      <h2>
        {lang === "ar" ? "RIP - أبسط بروتوكول" : "RIP - Simplest Protocol"}
      </h2>
      <ul>
        <li>{lang === "ar" ? "Distance-Vector" : "Distance-Vector"}</li>
        <li>
          {lang === "ar" ? "تحديثات كل 30 ثانية" : "Updates every 30 seconds"}
        </li>
        <li>{lang === "ar" ? "أقصى قفزات: 15" : "Max hops: 15"}</li>
        <li>{lang === "ar" ? "بطيء وغير فعال" : "Slow and inefficient"}</li>
      </ul>

      <h2>{lang === "ar" ? "IGRP - تطور RIP" : "IGRP - RIP Evolution"}</h2>
      <ul>
        <li>
          {lang === "ar" ? "Distance-Vector محسّن" : "Enhanced Distance-Vector"}
        </li>
        <li>
          {lang === "ar"
            ? "يدعم مقاييس متعددة (Bandwidth, Delay, Load)"
            : "Multiple metrics support"}
        </li>
        <li>{lang === "ar" ? "أقصى قفزات: 255" : "Max hops: 255"}</li>
        <li>
          {lang === "ar"
            ? "أفضل من RIP لكن أبطأ من EIGRP"
            : "Better than RIP but slower than EIGRP"}
        </li>
      </ul>

      <h2>{lang === "ar" ? "EIGRP - الهجين الذكي" : "EIGRP - Smart Hybrid"}</h2>
      <ul>
        <li>
          {lang === "ar"
            ? "Hybrid (Distance-Vector + Link-State)"
            : "Hybrid (Distance-Vector + Link-State)"}
        </li>
        <li>
          {lang === "ar"
            ? "تحديثات عند التغيير فقط"
            : "Updates only on changes"}
        </li>
        <li>{lang === "ar" ? "تقارب سريع" : "Fast convergence"}</li>
        <li>
          {lang === "ar" ? "يدعم مسارات متعددة" : "Supports multiple paths"}
        </li>
      </ul>

      <h2>
        {lang === "ar"
          ? "OSPF - الأفضل للشبكات الكبيرة"
          : "OSPF - Best for Large Networks"}
      </h2>
      <ul>
        <li>{lang === "ar" ? "Link-State" : "Link-State"}</li>
        <li>
          {lang === "ar" ? "يدعم Areas (تقسيم الشبكة)" : "Supports Areas"}
        </li>
        <li>{lang === "ar" ? "تقارب جداً سريع" : "Very fast convergence"}</li>
        <li>
          {lang === "ar" ? "يدعم Authentication" : "Supports authentication"}
        </li>
        <li>
          {lang === "ar"
            ? "الأمثل للشبكات Enterprise"
            : "Optimal for Enterprise networks"}
        </li>
      </ul>

      <h2>
        {lang === "ar"
          ? "BGP - حدود الأنظمة المستقلة"
          : "BGP - Between Autonomous Systems"}
      </h2>
      <ul>
        <li>{lang === "ar" ? "Path-Vector" : "Path-Vector"}</li>
        <li>
          {lang === "ar"
            ? "يستخدم السياسة وليس الأداء فقط"
            : "Policy-based, not performance-based"}
        </li>
        <li>
          {lang === "ar"
            ? "يعمل بين الشبكات الكبيرة (الإنترنت)"
            : "Works between large networks (Internet)"}
        </li>
        <li>{lang === "ar" ? "معقد جداً" : "Very complex"}</li>
      </ul>

      <Table
        headers={
          lang === "ar"
            ? ["الميزة", "RIP", "EIGRP", "OSPF", "BGP"]
            : ["Feature", "RIP", "EIGRP", "OSPF", "BGP"]
        }
        rows={[
          [
            lang === "ar" ? "النوع" : "Type",
            "DV",
            "Hybrid",
            "LS",
            "Path-Vector",
          ],
          [
            lang === "ar" ? "التقارب" : "Convergence",
            lang === "ar" ? "بطيء" : "Slow",
            lang === "ar" ? "سريع" : "Fast",
            lang === "ar" ? "جداً سريع" : "Very Fast",
            lang === "ar" ? "متوسط" : "Moderate",
          ],
          [
            lang === "ar" ? "الاستخدام" : "Use",
            lang === "ar" ? "صغير" : "Small",
            lang === "ar" ? "متوسط" : "Medium",
            lang === "ar" ? "كبير" : "Large",
            lang === "ar" ? "إنترنت" : "Internet",
          ],
          [
            lang === "ar" ? "التعقيد" : "Complexity",
            lang === "ar" ? "بسيط" : "Simple",
            lang === "ar" ? "متوسط" : "Moderate",
            lang === "ar" ? "معقد" : "Complex",
            lang === "ar" ? "جداً معقد" : "Very Complex",
          ],
        ]}
      />
    </Section>
  );
}
