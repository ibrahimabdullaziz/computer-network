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

// Section 27: Routing Algorithms Overview
export function RoutingAlgorithmsOverviewSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="routing-algorithms-overview"
      number="27"
      title="Routing Algorithms – نفهم المشهد الأول"
      titleEn="Routing Algorithms Overview"
      onVisible={onVisible}
    >
      <h2>{lang === "ar" ? "الشبكة وكيفية عملها" : "How the Network Works"}</h2>
      <p>
        {lang === "ar"
          ? "المحاضرة تعرض شبكة إنترنت من أربع بوابات مع تكرار في المسارات، تتكون من أربع موجهات (A, B, C, D) متصلة بثلاث شبكات مع خادم وجهاز مستخدم متصلين عبر Ethernet."
          : "The lecture presents an internet network with four gateways with path redundancy, consisting of four routers (A, B, C, D) connected to three networks with a server and user device connected via Ethernet."}
      </p>

      <p>
        {lang === "ar"
          ? "قبل ما نقول Routing Algorithm لازم نفهم الشبكة عاملة إزاي."
          : "Before discussing routing algorithms, we must understand how the network works."}
      </p>

      <h3>
        {lang === "ar"
          ? "المثال اللي عندك مش عشوائي:"
          : "The Example is Not Random:"}
      </h3>
      <ul>
        <li>
          {lang === "ar"
            ? "4 Routers: A – B – C – D"
            : "4 Routers: A – B – C – D"}
        </li>
        <li>{lang === "ar" ? "أكتر من شبكة IP" : "Multiple IP networks"}</li>
        <li>{lang === "ar" ? "Server في حتة" : "Server at one location"}</li>
        <li>
          {lang === "ar" ? "User في حتة تانية" : "User at another location"}
        </li>
        <li>
          {lang === "ar"
            ? "وفيه أكتر من طريق يوصل بينهم"
            : "There are multiple paths connecting them"}
        </li>
      </ul>

      <h3>{lang === "ar" ? "ليه عملوا كده؟" : "Why Design It This Way?"}</h3>
      <p>
        {lang === "ar"
          ? "عشان الشبكة ما تبقاش طريق واحد. لو طريق وقع → الشبكة تقع. لكن مع التكرار (Redundancy) → الشبكة تعيش"
          : "So the network is not a single path. If one path fails → the network fails. But with redundancy → the network survives"}
      </p>

      <h3>
        {lang === "ar"
          ? "ما هي Routing Algorithm؟"
          : "What is a Routing Algorithm?"}
      </h3>
      <Callout type="important">
        {lang === "ar"
          ? "العقل اللي بيقرر: 'أنهي طريق أعدّي منه الباكت؟' مش بس يوصل… يوصل صح، وبأقل خسارة، وبأسرع وقت"
          : "The logic that decides: 'Which path should the packet take?' Not just reaching the destination… reaching it correctly, with minimal loss, and at fastest speed"}
      </Callout>
    </Section>
  );
}

// Section 28: Pre-Convergence Routing Table
export function PreConvergenceSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="pre-convergence"
      number="28"
      title="Pre-Convergence Routing Table – قبل ما تحصل المصيبة"
      titleEn="Pre-Convergence Routing Table"
      onVisible={onVisible}
    >
      <h2>{lang === "ar" ? "الحالة المثالية" : "The Ideal State"}</h2>
      <p>
        {lang === "ar"
          ? "دي الحالة المثالية. كل Router:"
          : "This is the ideal state. Each router:"}
      </p>
      <ul>
        <li>
          {lang === "ar"
            ? "شايف الشبكة من وجهة نظره"
            : "Sees the network from its perspective"}
        </li>
        <li>{lang === "ar" ? "عنده Routing Table" : "Has a Routing Table"}</li>
        <li>
          {lang === "ar"
            ? "الجدول بيقول: عايز شبكة X؟ روح للـ Next Hop Y | عدد الـ hops قد إيه؟"
            : "The table says: Want network X? Go to next hop Y | How many hops?"}
        </li>
      </ul>

      <Callout type="note">
        {lang === "ar"
          ? "Routing Table مش بالضرورة يكون نسخة من جدول Router تاني. بس كلهم متفقين على الواقع"
          : "Routing table doesn't have to be a copy of another router's table. But all agree on reality"}
      </Callout>

      <h3>{lang === "ar" ? "الحالة الطبيعية:" : "Normal State:"}</h3>
      <ul>
        <li>
          {lang === "ar" ? "الوصلة C ↔ D شغالة" : "Link C ↔ D is working"}
        </li>
        <li>{lang === "ar" ? "الطريق معروف" : "The path is known"}</li>
        <li>
          {lang === "ar"
            ? "الباكت بتمشي من غير تفكير زيادة"
            : "Packets move without extra thought"}
        </li>
      </ul>
    </Section>
  );
}

// Section 29: Network Failure Scenarios
export function NetworkFailureScenariosSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="network-failure-scenarios"
      number="29"
      title="Network Failure Scenarios – الشبكة مش بتفترض سبب واحد"
      titleEn="Network Failure Scenarios"
      onVisible={onVisible}
    >
      <h2>
        {lang === "ar"
          ? "لماذا من الصعب تحديد المشكلة؟"
          : "Why is It Hard to Identify the Problem?"}
      </h2>
      <p>
        {lang === "ar"
          ? "لما Router C يبعت باكت للسيرفر ومتوصلش، الشبكة ما تقولش فورًا: اللينك وقع. ليه؟ عشان الشبكة بتفكر بعقل مهندس مش متسرع"
          : "When router C sends a packet to the server and it doesn't arrive, the network doesn't immediately say: the link is down. Why? Because the network thinks like a careful engineer, not rushing to conclusions"}
      </p>

      <h3>{lang === "ar" ? "الاحتمالات المحتملة:" : "Possible Scenarios:"}</h3>
      <ul>
        <li>
          {lang === "ar"
            ? "السيرفر نفسه نايم"
            : "The server itself is sleeping"}
        </li>
        <li>
          {lang === "ar" ? "كارت الشبكة بتاعه مات" : "Its network card died"}
        </li>
        <li>
          {lang === "ar"
            ? "Router D كله فصل"
            : "Router D is completely disconnected"}
        </li>
        <li>{lang === "ar" ? "Interface اتحرق" : "An interface burned out"}</li>
        <li>{lang === "ar" ? "كابل اتقطع" : "Cable is cut"}</li>
        <li>
          {lang === "ar" ? "C نفسه عنده مشكلة" : "C itself has a problem"}
        </li>
      </ul>

      <Callout type="warning">
        {lang === "ar"
          ? "عدم وصول الباكت ≠ تعرف السبب مباشرة. وده مهم جدًا في فهم convergence"
          : "Packet not arriving ≠ knowing the cause immediately. This is very important in understanding convergence"}
      </Callout>
    </Section>
  );
}

// Section 30: Link Failure Impact
export function LinkFailureImpactSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="link-failure-impact"
      number="30"
      title="Link Failure Impact – أول ناس يحسوا مين؟"
      titleEn="Link Failure Impact - Who Detects First?"
      onVisible={onVisible}
    >
      <h2>
        {lang === "ar" ? "من يشعر بفشل الوصلة؟" : "Who Detects Link Failure?"}
      </h2>
      <p>
        {lang === "ar"
          ? "لما Interface بين C و D يفشل:"
          : "When the interface between C and D fails:"}
      </p>

      <h3>{lang === "ar" ? "من يعلم فوراً:" : "Who Knows Immediately:"}</h3>
      <ul>
        <li>{lang === "ar" ? "C يحس" : "C detects it"}</li>
        <li>{lang === "ar" ? "D يحس" : "D detects it"}</li>
      </ul>

      <h3>{lang === "ar" ? "من لا يعلم:" : "Who Doesn't Know:"}</h3>
      <ul>
        <li>
          {lang === "ar"
            ? "A و B؟ ولا كأن في حاجة حصلت"
            : "A and B? As if nothing happened"}
        </li>
      </ul>

      <Callout type="important">
        {lang === "ar"
          ? "Routing protocols = رسائل مش سحر. فاللينك يتشال عند C و D لكن باقي الشبكة لسه في الوهم"
          : "Routing protocols = messages, not magic. The link is removed at C and D but the rest of the network is still in the old state"}
      </Callout>
    </Section>
  );
}

// Section 31: Mid-Convergence
export function MidConvergenceSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="mid-convergence"
      number="31"
      title="Mid-Convergence – أخطر مرحلة في الشبكة"
      titleEn="Mid-Convergence - Most Dangerous Phase"
      onVisible={onVisible}
    >
      <h2>{lang === "ar" ? "أخطر مرحلة" : "The Dangerous Phase"}</h2>
      <p>
        {lang === "ar"
          ? "دي بقى المرحلة اللي المهندسين بيكرهوها 😅"
          : "This is the phase that engineers hate 😅"}
      </p>

      <h3>{lang === "ar" ? "الوضع:" : "The Situation:"}</h3>
      <ul>
        <li>
          {lang === "ar" ? "C و D عارفين الحقيقة" : "C and D know the truth"}
        </li>
        <li>
          {lang === "ar"
            ? "A و B عايشين في الماضي"
            : "A and B living in the past"}
        </li>
      </ul>

      <h3>{lang === "ar" ? "النتيجة:" : "The Result:"}</h3>
      <ul>
        <li>
          {lang === "ar" ? "Routing Tables مختلفة" : "Different routing tables"}
        </li>
        <li>
          {lang === "ar"
            ? "كل Router شايف شبكة غير التاني"
            : "Each router sees a different network"}
        </li>
      </ul>

      <h3>{lang === "ar" ? "المشاكل المحتملة:" : "Potential Problems:"}</h3>
      <ul>
        <li>{lang === "ar" ? "Routing Loop" : "Routing Loop"}</li>
        <li>{lang === "ar" ? "Packet loss" : "Packet loss"}</li>
        <li>{lang === "ar" ? "Black hole" : "Black hole"}</li>
      </ul>

      <Callout type="warning">
        {lang === "ar"
          ? "الشبكة بتشتغل نص شغلانة. ودي لحظة عدم استقرار"
          : "The network is only half working. This is a moment of instability"}
      </Callout>
    </Section>
  );
}

// Section 32: Post-Convergence
export function PostConvergenceSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="post-convergence"
      number="32"
      title="Post-Convergence – لما الكل يفوق"
      titleEn="Post-Convergence - Stable State"
      onVisible={onVisible}
    >
      <h2>{lang === "ar" ? "الحالة المثالية الجديدة" : "New Ideal State"}</h2>
      <p>
        {lang === "ar"
          ? "بعد ما Routing updates تلف الشبكة كلها:"
          : "After routing updates spread throughout the network:"}
      </p>
      <ul>
        <li>
          {lang === "ar"
            ? "كل Router قبل Updates"
            : "Each router receives updates"}
        </li>
        <li>
          {lang === "ar"
            ? "كل جهاز عرف الحقيقة"
            : "Every device understands the new state"}
        </li>
        <li>
          {lang === "ar"
            ? "Routing Tables متطابقة"
            : "Routing Tables are identical"}
        </li>
      </ul>

      <h3>{lang === "ar" ? "الخطوات اللي حصلت" : "Steps That Occurred"}</h3>

      <h4>{lang === "ar" ? "1. التحديث الأول" : "1. First Update"}</h4>
      <ul>
        <li>
          {lang === "ar"
            ? "A و B يستقبلوا رسايل من C و D"
            : "A and B receive messages from C and D"}
        </li>
        <li>
          {lang === "ar"
            ? "يفهموا إن اللينك C ↔ D انقطع"
            : "They understand that link C ↔ D is broken"}
        </li>
      </ul>

      <h4>{lang === "ar" ? "2. Update التوجيه" : "2. Routing Update"}</h4>
      <ul>
        <li>
          {lang === "ar"
            ? "كل Router يحدّث جدول التوجيه بتاعه"
            : "Each router updates its routing table"}
        </li>
        <li>
          {lang === "ar"
            ? "يرسل Updates جديدة لجيرانه"
            : "Sends new updates to neighbors"}
        </li>
        <li>
          {lang === "ar"
            ? "يروح الطريق القديم (C ↔ D)"
            : "The old path (C ↔ D) is removed"}
        </li>
      </ul>

      <h4>
        {lang === "ar"
          ? "3. الطريق البديل يتفعل"
          : "3. Alternate Path Activation"}
      </h4>
      <ul>
        <li>
          {lang === "ar"
            ? "السيرفر اللي كان توصل ليه عن طريق C ↔ D"
            : "The server that was reachable via C ↔ D"}
        </li>
        <li>
          {lang === "ar"
            ? "بقى التوصل ليه عن طريق بديل"
            : "Is now reachable via alternate route"}
        </li>
        <li>
          {lang === "ar"
            ? "مثلاً: A → C → Server (مسار جديد)"
            : "Example: A → C → Server (new path)"}
        </li>
      </ul>

      <h3>{lang === "ar" ? "النتيجة النهائية" : "Final Outcome"}</h3>
      <ul>
        <li>
          <strong>{lang === "ar" ? "الاستقرار" : "Stability"}</strong>:{" "}
          {lang === "ar"
            ? "جميع Routers متفقة"
            : "All routers are in agreement"}
        </li>
        <li>
          <strong>{lang === "ar" ? "الاستمرارية" : "Continuity"}</strong>:{" "}
          {lang === "ar" ? "الخدمات بتمشي عادي" : "Services continue normally"}
        </li>
        <li>
          <strong>{lang === "ar" ? "الأمان" : "Safety"}</strong>:{" "}
          {lang === "ar" ? "مفيش Routing Loops" : "No routing loops"}
        </li>
        <li>
          <strong>{lang === "ar" ? "الموثوقية" : "Reliability"}</strong>:{" "}
          {lang === "ar" ? "الشبكة اكتسبت مناعة" : "Network gained resilience"}
        </li>
      </ul>

      <h3>
        {lang === "ar"
          ? "هدف أي Routing Protocol محترم"
          : "Goal of Any Proper Routing Protocol"}
      </h3>
      <Callout type="important">
        {lang === "ar"
          ? "الشبكة تقع؟ لا | الشبكة تلتف حول المشكلة وتكمل شغلها"
          : "Network fails? No | Network adapts around the problem and continues working"}
      </Callout>
    </Section>
  );
}

// Section 33: Convergence Time
export function ConvergenceTimeSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="convergence-time"
      number="33"
      title="Convergence Time – الزمن اللي الشبكة فيه غير مستقرة"
      titleEn="Convergence Time - Network Instability Duration"
      onVisible={onVisible}
    >
      <h2>{lang === "ar" ? "التعريف الدقيق" : "Precise Definition"}</h2>
      <p>{lang === "ar" ? "Convergence Time هو:" : "Convergence Time is:"}</p>
      <Callout type="note">
        {lang === "ar"
          ? "الفترة الزمنية من حدوث العطل لحتى آخر Router يفهم ويحدّث جدول التوجيه"
          : "The time period from when a failure occurs until the last router understands and updates its routing table"}
      </Callout>

      <h2>
        {lang === "ar"
          ? "ليه Convergence Time مهم جداً؟"
          : "Why is Convergence Time So Important?"}
      </h2>
      <p>{lang === "ar" ? "كل ما الوقت ده:" : "The impact of this time:"}</p>
      <ul>
        <li>
          <strong>{lang === "ar" ? "طويل" : "Long"}</strong> →{" "}
          {lang === "ar"
            ? "الشبكة بتعاني من عدم استقرار طويل"
            : "Network suffers prolonged instability"}
        </li>
        <li>
          <strong>{lang === "ar" ? "قصير" : "Short"}</strong> →{" "}
          {lang === "ar"
            ? "الشبكة قوية وتتعافى بسرعة"
            : "Network is robust and recovers quickly"}
        </li>
      </ul>

      <h3>
        {lang === "ar"
          ? "المخاطر خلال فترة Convergence:"
          : "Risks During Convergence Period:"}
      </h3>
      <ul>
        <li>
          {lang === "ar"
            ? "ممكن تحصل Routing Loops 🔄"
            : "Routing loops may occur 🔄"}
        </li>
        <li>
          {lang === "ar"
            ? "ممكن تحصل Packet Loss 📉"
            : "Packet loss may occur 📉"}
        </li>
        <li>
          {lang === "ar"
            ? "ممكن تحصل Black Holes ⚫"
            : "Black holes may occur ⚫"}
        </li>
      </ul>

      <h2>
        {lang === "ar"
          ? "العوامل اللي بتأثر على Convergence Time"
          : "Factors Affecting Convergence Time"}
      </h2>
      <Table
        headers={lang === "ar" ? ["العامل", "التأثير"] : ["Factor", "Impact"]}
        rows={[
          [
            lang === "ar" ? "عدد Routers" : "Number of Routers",
            lang === "ar"
              ? "كل ما يزيد، الوقت يزيد"
              : "Increases with more routers",
          ],
          [
            lang === "ar" ? "بعد مكان العطل" : "Distance to Failure",
            lang === "ar"
              ? "كل ما يبعد، الخبر يأخذ وقت أكتر"
              : "Further away = longer propagation time",
          ],
          [
            lang === "ar" ? "ضغط الترافيك" : "Traffic Load",
            lang === "ar"
              ? "الترافيك الكتير بتأخر الرسايل"
              : "Heavy traffic delays messages",
          ],
          [
            lang === "ar" ? "قوة الأجهزة" : "Device Power",
            lang === "ar"
              ? "جهاز ضعيف = حساب أبطأ"
              : "Weak device = slower computation",
          ],
          [
            lang === "ar" ? "نوع البروتوكول" : "Protocol Type",
            lang === "ar"
              ? "كل بروتوكول في سرعة مختلفة"
              : "Different protocols have different speeds",
          ],
          [
            lang === "ar" ? "حجم LSDB" : "LSDB Size",
            lang === "ar"
              ? "Base Data بتاع Link-State أكبر"
              : "Link-State databases are larger",
          ],
        ]}
      />

      <h2>
        {lang === "ar"
          ? "مقارنة سرعة البروتوكولات"
          : "Protocol Speed Comparison"}
      </h2>
      <Table
        headers={
          lang === "ar"
            ? ["البروتوكول", "Convergence Time", "الملاحظة"]
            : ["Protocol", "Convergence Time", "Note"]
        }
        rows={[
          [
            "RIP",
            lang === "ar" ? "بطيء جداً" : "Very Slow",
            lang === "ar"
              ? "من 30 إلى عدة دقائق"
              : "30 seconds to several minutes",
          ],
          [
            "IGRP",
            lang === "ar" ? "متوسط" : "Moderate",
            lang === "ar" ? "أسرع من RIP" : "Faster than RIP",
          ],
          [
            "EIGRP",
            lang === "ar" ? "سريع" : "Fast",
            lang === "ar" ? "يبعت تحديثات فورية" : "Sends instant updates",
          ],
          [
            "OSPF",
            lang === "ar" ? "أسرع" : "Very Fast",
            lang === "ar" ? "يحسب المسارات بسرعة" : "Calculates paths quickly",
          ],
          [
            "BGP",
            lang === "ar" ? "متوسط" : "Moderate",
            lang === "ar" ? "بس أكتر موثوقية" : "But more reliable",
          ],
        ]}
      />

      <h2>{lang === "ar" ? "مثال عملي" : "Practical Example"}</h2>
      <p>
        {lang === "ar" ? "شبكة فيها 5 Routers:" : "Network with 5 Routers:"}
      </p>
      <ol>
        <li>
          <strong>{lang === "ar" ? "اللحظة 0" : "Time 0"}</strong>:{" "}
          {lang === "ar" ? "اللينك انقطع" : "Link failure occurs"}
        </li>
        <li>
          <strong>{lang === "ar" ? "اللحظة 1-2 ثانية" : "Time 1-2 sec"}</strong>
          :{" "}
          {lang === "ar"
            ? "Router A و B يحسّوا بالمشكلة"
            : "Routers A and B detect the problem"}
        </li>
        <li>
          <strong>{lang === "ar" ? "اللحظة 2-4 ثانية" : "Time 2-4 sec"}</strong>
          : {lang === "ar" ? "A و B يرسلوا Updates" : "A and B send updates"}
        </li>
        <li>
          <strong>{lang === "ar" ? "اللحظة 4-6 ثانية" : "Time 4-6 sec"}</strong>
          :{" "}
          {lang === "ar"
            ? "C و D يستقبلوا ويفهموا"
            : "C and D receive and understand"}
        </li>
        <li>
          <strong>{lang === "ar" ? "اللحظة 6-8 ثانية" : "Time 6-8 sec"}</strong>
          :{" "}
          {lang === "ar" ? "كل الشبكة متفقة ✅" : "Entire network converged ✅"}
        </li>
      </ol>

      <Callout type="important">
        <strong>
          {lang === "ar"
            ? "Convergence Time = 8 ثواني"
            : "Convergence Time = 8 seconds"}
        </strong>
      </Callout>

      <h2>{lang === "ar" ? "الخلاصة" : "Summary"}</h2>
      <p>
        {lang === "ar"
          ? "Convergence Time ده يعكس:"
          : "Convergence Time reflects:"}
      </p>
      <ul>
        <li>
          <strong>
            {lang === "ar" ? "كفاءة البروتوكول" : "Protocol Efficiency"}
          </strong>{" "}
          🏆
        </li>
        <li>
          <strong>
            {lang === "ar" ? "موثوقية الشبكة" : "Network Reliability"}
          </strong>{" "}
          🛡️
        </li>
        <li>
          <strong>{lang === "ar" ? "جودة التصميم" : "Design Quality"}</strong>{" "}
          🏗️
        </li>
      </ul>

      <Callout type="note">
        {lang === "ar"
          ? "عشان كده الـ Network Engineer لازم يعرف يختار البروتوكول اللي يناسب احتياجاته"
          : "This is why network engineers must know how to choose the protocol that suits their needs"}
      </Callout>
    </Section>
  );
}

// Section 34: Routing Metrics
export function RoutingMetricsSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="routing-metrics"
      number="34"
      title="Routing Metrics – الـ Router بيختار على أساس إيه؟"
      titleEn="Routing Metrics - Selection Criteria"
      onVisible={onVisible}
    >
      <h2>
        {lang === "ar"
          ? "ما هي معايير الاختيار؟"
          : "What Are Selection Criteria?"}
      </h2>
      <p>
        {lang === "ar"
          ? "لما قدام Router أكتر من طريق لازم مقياس."
          : "When a router has multiple paths available, it needs a metric."}
      </p>

      <h3>
        {lang === "ar"
          ? "Distance Vector (مثل RIP):"
          : "Distance Vector (like RIP):"}
      </h3>
      <ul>
        <li>{lang === "ar" ? "يحسب hops" : "Counts hops"}</li>
        <li>{lang === "ar" ? "أقل عدد = أحسن" : "Fewer hops = better"}</li>
      </ul>

      <Callout type="note">
        {lang === "ar"
          ? "أنا مش فارق معايا السرعة… المهم أقصر"
          : "I don't care about speed... the shortest path matters most"}
      </Callout>

      <h3>{lang === "ar" ? "المشكلة:" : "The Problem:"}</h3>
      <ul>
        <li>
          {lang === "ar"
            ? "طريق بطيء 1 hop أحسن عند RIP من طريق سريع 3 hops"
            : "A slow path with 1 hop is better than a fast path with 3 hops"}
        </li>
      </ul>

      <Callout type="warning">
        {lang === "ar"
          ? "وده سبب إننا بنقول: RIP تعبان في الشبكات الكبيرة"
          : "This is why we say: RIP struggles in large networks"}
      </Callout>
    </Section>
  );
}

// Section 35: Distance-Vector Routing
export function DistanceVectorRoutingSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="distance-vector-routing"
      number="35"
      title="Distance-Vector Routing (نفكر زي Router بدائي)"
      titleEn="Distance-Vector Routing"
      onVisible={onVisible}
    >
      <h2>{lang === "ar" ? "الفكرة من الآخر" : "The Core Idea"}</h2>
      <Callout type="note">
        {lang === "ar"
          ? "أنا Router، معرفش غير جيراني وبعرف أوصل لإيه وعدد القفزات قد إيه"
          : "I am a router, I only know my neighbors and how many hops to each destination"}
      </Callout>

      <p>
        {lang === "ar"
          ? "يعني Router مش شايف الشبكة كلها. شايف: أنا | اللي جنبي | واللي جنبي قالّي عليه"
          : "Router doesn't see the entire network. It sees: me | my neighbors | what neighbors told me"}
      </p>

      <h3>{lang === "ar" ? "تشبيه:" : "Analogy:"}</h3>
      <Callout type="important">
        {lang === "ar"
          ? "أنا أعرف أوصل القاهرة في ساعتين وصاحبي قالي الإسكندرية 3 ساعات من عنده خلاص أبقى أنا أوصلها في 5"
          : "I know how to reach Cairo in 2 hours, my friend says Alexandria is 3 hours from him, so I can reach it in 5 hours"}
      </Callout>

      <h3>
        {lang === "ar"
          ? "ليه اتعمل كده أصلاً؟"
          : "Why Was It Designed This Way?"}
      </h3>
      <p>{lang === "ar" ? "أول شبكات كانت:" : "Early networks were:"}</p>
      <ul>
        <li>{lang === "ar" ? "صغيرة" : "Small"}</li>
        <li>{lang === "ar" ? "أجهزة ضعيفة" : "Weak devices"}</li>
        <li>
          {lang === "ar" ? "مفيش CPU ولا RAM محترمة" : "Limited CPU and RAM"}
        </li>
      </ul>

      <p>
        {lang === "ar"
          ? "فكان لازم: Algorithm بسيط | حساب سهل | ترافيك تحكم قليل"
          : "So needed: Simple algorithm | Easy computation | Low overhead"}
      </p>

      <h3>
        {lang === "ar" ? "إزاي بيشتغل فعليًا؟" : "How Does It Actually Work?"}
      </h3>
      <p>{lang === "ar" ? "كل Router:" : "Each router:"}</p>
      <ul>
        <li>{lang === "ar" ? "عنده Routing Table" : "Has a routing table"}</li>
        <li>
          {lang === "ar"
            ? "الجدول فيه: Destination | Next hop | Hop count"
            : "Contains: Destination | Next hop | Hop count"}
        </li>
      </ul>

      <p>{lang === "ar" ? "كل فترة:" : "Periodically:"}</p>
      <ul>
        <li>
          {lang === "ar"
            ? "يبعت الجدول كله لجيرانه"
            : "Sends entire table to neighbors"}
        </li>
        <li>
          {lang === "ar"
            ? "الجيران: يزوّدوا hop | يقارنوا | يختاروا الأقل"
            : "Neighbors: increment hop | compare | choose best"}
        </li>
      </ul>

      <Callout type="note">
        {lang === "ar"
          ? "أنا بتعلم من اللي جنبي مش من الشبكة كلها"
          : "I learn from neighbors, not from the whole network"}
      </Callout>
    </Section>
  );
}

// Section 36: Link-State Routing
export function LinkStateRoutingSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="link-state-routing"
      number="36"
      title="Link-State Routing (Router ذكي شوية)"
      titleEn="Link-State Routing"
      onVisible={onVisible}
    >
      <h2>{lang === "ar" ? "التغيير الكبير" : "The Big Change"}</h2>
      <Callout type="important">
        {lang === "ar"
          ? "لا استنى… أنا عايز أشوف الشبكة كلها بعيني"
          : "Wait... I want to see the entire network with my own eyes"}
      </Callout>

      <h3>
        {lang === "ar" ? "ليه ظهر Link-State؟" : "Why Did Link-State Appear?"}
      </h3>
      <ul>
        <li>{lang === "ar" ? "الشبكات كبرت" : "Networks grew larger"}</li>
        <li>
          {lang === "ar"
            ? "Distance-Vector بقى بطيء"
            : "Distance-Vector became slow"}
        </li>
        <li>{lang === "ar" ? "Convergence وحش" : "Convergence was bad"}</li>
        <li>{lang === "ar" ? "Loops كتير" : "Too many loops"}</li>
      </ul>

      <h3>{lang === "ar" ? "الحل:" : "The Solution:"}</h3>
      <Callout type="note">
        {lang === "ar"
          ? "كل Router يبقى عنده خريطة كاملة"
          : "Each router has a complete network map"}
      </Callout>

      <h3>{lang === "ar" ? "الفكرة الأساسية" : "Core Concept"}</h3>
      <p>{lang === "ar" ? "Link-State Router:" : "Link-State router:"}</p>
      <ul>
        <li>{lang === "ar" ? "يعرف كل Routers" : "Knows all routers"}</li>
        <li>{lang === "ar" ? "يعرف كل Links" : "Knows all links"}</li>
        <li>
          {lang === "ar" ? "يعرف Cost كل Link" : "Knows cost of each link"}
        </li>
      </ul>

      <Callout type="important">
        {lang === "ar"
          ? "Router = Google Maps | مش حد بيسأل في الطريق"
          : "Router = Google Maps | Not asking for directions"}
      </Callout>
    </Section>
  );
}

// Section 37: Link-State Routing Functions
export function LinkStateRoutingFunctionsSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="link-state-routing-functions"
      number="37"
      title="Link-State Routing Functions (المطبخ من جوه)"
      titleEn="Link-State Routing Functions"
      onVisible={onVisible}
    >
      <h2>{lang === "ar" ? "المكونات الأساسية" : "Core Components"}</h2>
      <p>
        {lang === "ar"
          ? "خلّينا نمسكها واحدة واحدة، عشان دي قلب OSPF."
          : "Let's examine each, as these form the heart of OSPF."}
      </p>

      <h3>🔹 LSA – Link State Advertisement</h3>
      <p>
        {lang === "ar"
          ? "دي رسالة بيقول فيها Router: أنا موجود | عندي interfaces كذا | ومتصل بـ Routers كذا | والتكلفة كذا"
          : "A message where a router announces: I exist | I have these interfaces | Connected to these routers | With these costs"}
      </p>
      <ul>
        <li>{lang === "ar" ? "تعريف عن نفسه" : "Self identification"}</li>
        <li>{lang === "ar" ? "حالته" : "Its state"}</li>
        <li>{lang === "ar" ? "علاقاته" : "Its relationships"}</li>
      </ul>

      <h3>🔹 LSDB – Link State Database</h3>
      <p>
        {lang === "ar"
          ? "بعد ما LSAs تنتشر: كل Router يبني Database | كلهم نسخة واحدة"
          : "After LSAs spread: Each router builds a database | All have identical copies"}
      </p>
      <Callout type="important">
        {lang === "ar"
          ? "كل Routers شايفين نفس الشبكة"
          : "All routers see the same network view"}
      </Callout>

      <h3>🔹 SPF – Shortest Path First</h3>
      <p>
        {lang === "ar"
          ? "هنا بقى العقل يشتغل. Router: يشغل Dijkstra | يحسب أقصر مسار | يبني Routing Table"
          : "Now the intelligence works. Router: runs Dijkstra | calculates shortest path | builds routing table"}
      </p>
      <Callout type="note">
        {lang === "ar"
          ? "Routing Table = نتيجة حساب مش كلام جيران"
          : "Routing Table = Result of calculation, not neighbor gossip"}
      </Callout>
    </Section>
  );
}

// Section 38: LSA Packet
export function LSAPacketSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="lsa-packet"
      number="38"
      title="LSA Packet (الرسالة اللي بتغيّر الشبكة)"
      titleEn="LSA Packet - The Message That Changes Everything"
      onVisible={onVisible}
    >
      <h2>{lang === "ar" ? "أهمية LSA" : "Importance of LSA"}</h2>
      <p>
        {lang === "ar"
          ? "LSA مش رسالة عادية. دي اللي: تحرّك الشبكة | تعمل convergence"
          : "LSA is not an ordinary message. It: moves the network | triggers convergence"}
      </p>

      <h3>{lang === "ar" ? "ماذا تقول LSA؟" : "What Does LSA Say?"}</h3>
      <ul>
        <li>{lang === "ar" ? "اسم Router" : "Router name"}</li>
        <li>
          {lang === "ar" ? "Interface up ولا down" : "Interface up or down"}
        </li>
        <li>{lang === "ar" ? "Cost اتغير" : "Cost changed"}</li>
        <li>{lang === "ar" ? "Link وقع" : "Link failed"}</li>
        <li>{lang === "ar" ? "Neighbor جديد" : "New neighbor"}</li>
      </ul>

      <Callout type="important">
        {lang === "ar"
          ? "أول ما LSA تطلع: الشبكة كلها تبدأ تفكر"
          : "As soon as LSA is sent: The entire network starts thinking"}
      </Callout>
    </Section>
  );
}

// Section 39: Routing Protocol Types
export function RoutingProtocolTypesSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="routing-protocol-types"
      number="39"
      title="Routing Protocol Types (نرتب الدنيا)"
      titleEn="Routing Protocol Types"
      onVisible={onVisible}
    >
      <h2>{lang === "ar" ? "النوعان الكبار" : "The Two Main Types"}</h2>

      <h3>{lang === "ar" ? "Distance-Vector:" : "Distance-Vector:"}</h3>
      <ul>
        <li>RIP</li>
        <li>IGRP</li>
        <li>EIGRP (Hybrid بس أقرب هنا)</li>
      </ul>

      <h3>{lang === "ar" ? "Link-State:" : "Link-State:"}</h3>
      <ul>
        <li>OSPF</li>
      </ul>

      <Callout type="important">
        {lang === "ar"
          ? "الفرق مش أسماء. الفرق طريقة تفكير"
          : "The difference is not names. The difference is in thinking approach"}
      </Callout>
    </Section>
  );
}

// Section 40: EIGRP & BGP
export function EIGRPBGPSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="eigrp-bgp"
      number="40"
      title="EIGRP & BGP (شبكات العالم الحقيقي)"
      titleEn="EIGRP & BGP - Real World Networks"
      onVisible={onVisible}
    >
      <h2>{lang === "ar" ? "خارج حدود الـ AS" : "Outside AS Boundaries"}</h2>
      <p>
        {lang === "ar"
          ? "لما نطلع بره الـ AS: مفيش hop | مفيش cost | في سياسة"
          : "When we go outside AS: No hop count | No simple cost | Policy matters"}
      </p>

      <h3>{lang === "ar" ? "BGP" : "BGP"}</h3>
      <Callout type="important">
        {lang === "ar"
          ? "أنا همشي منين بناءً على سياسة مش أسرع طريق"
          : "I choose the path based on policy, not the fastest route"}
      </Callout>

      <h3>{lang === "ar" ? "النتيجة:" : "The Result:"}</h3>
      <ul>
        <li>{lang === "ar" ? "الإنترنت شغال" : "The internet works"}</li>
        <li>
          {lang === "ar"
            ? "بس مش بالضرورة أسرع طريق"
            : "But not necessarily the fastest path"}
        </li>
      </ul>
    </Section>
  );
}

// Section 41: RIP Detailed
export function RIPDetailedSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="rip-detailed"
      number="41"
      title="RIP – Basic Distance-Vector"
      titleEn="RIP - The Simplest Protocol"
      onVisible={onVisible}
    >
      <h2>{lang === "ar" ? "الصورة البسيطة" : "The Simple Picture"}</h2>
      <Callout type="note">
        {lang === "ar"
          ? "تخيل شبكة كلها طرق، وراوتر غلبان معندوش خريطة، كل اللي يعرفه: من هنا لحد هناك كام محطة؟ ده RIP بالظبط."
          : "Imagine a network of roads, a helpless router with no map, all it knows: How many stops to get there? That's exactly RIP."}
      </Callout>

      <h3>{lang === "ar" ? "ليه ظهر RIP؟" : "Why RIP Appeared?"}</h3>
      <p>
        {lang === "ar" ? "في البداية الشبكات كانت:" : "Early networks were:"}
      </p>
      <ul>
        <li>{lang === "ar" ? "صغيرة" : "Small"}</li>
        <li>{lang === "ar" ? "عدد الراوترات قليل" : "Few routers"}</li>
        <li>{lang === "ar" ? "مفيش تعقيد" : "No complexity"}</li>
      </ul>

      <p>
        {lang === "ar"
          ? "فكان المطلوب بروتوكول: سهل | مفهوم | ما يوجّعش الدماغ"
          : "Protocol needed: Simple | Understandable | Not painful"}
      </p>

      <Callout type="important">
        {lang === "ar"
          ? "RIP قالك: أعد القفزات وخلاص"
          : "RIP says: Just count hops"}
      </Callout>

      <h3>{lang === "ar" ? "إزاي بيشتغل؟" : "How Does It Work?"}</h3>
      <ul>
        <li>
          {lang === "ar"
            ? "كل 30 ثانية الراوتر يبعت Routing Table كامل"
            : "Every 30 seconds router sends entire table"}
        </li>
        <li>
          {lang === "ar"
            ? "الجار يستقبل، يزوّد +1 hop"
            : "Neighbor receives, increments by 1"}
        </li>
        <li>
          {lang === "ar" ? "يقارن ويختار الأقل" : "Compares and chooses best"}
        </li>
      </ul>

      <h3>{lang === "ar" ? "ليه بيقع؟" : "Why Does It Fail?"}</h3>
      <ul>
        <li>
          {lang === "ar"
            ? "لو الشبكة كبرت → RIP يضيع"
            : "Large network → RIP lost"}
        </li>
        <li>
          {lang === "ar"
            ? "مفيش Bandwidth consideration"
            : "No Bandwidth awareness"}
        </li>
        <li>{lang === "ar" ? "مفيش Load awareness" : "No load awareness"}</li>
        <li>{lang === "ar" ? "مفيش Reliability" : "No reliability"}</li>
        <li>
          {lang === "ar" ? "Convergence بطييييء" : "Convergence is very slow"}
        </li>
        <li>
          {lang === "ar"
            ? "loops ممكن تحصل (count to infinity)"
            : "Loops possible (count to infinity)"}
        </li>
      </ul>

      <Callout type="warning">
        {lang === "ar"
          ? "RIP مناسب شبكة صغيرة أوي… أكتر من كده؟ 🚫"
          : "RIP suitable only for very small networks... anything bigger? 🚫"}
      </Callout>
    </Section>
  );
}

// Section 42: RIP Sharing & Decision
export function RIPSharingDecisionSection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="rip-sharing-decision"
      number="42"
      title="RIP – Sharing & Decision Making"
      titleEn="RIP - How RIP Makes Decisions"
      onVisible={onVisible}
    >
      <h2>{lang === "ar" ? "العملية:" : "The Process:"}</h2>

      <h3>{lang === "ar" ? "Router:" : "Router:"}</h3>
      <ul>
        <li>{lang === "ar" ? "يبعت الجدول" : "Sends the table"}</li>
        <li>{lang === "ar" ? "الجار يزوّد hop" : "Neighbor increments hop"}</li>
        <li>{lang === "ar" ? "يقارن" : "Compares"}</li>
        <li>{lang === "ar" ? "يختار الأقل" : "Chooses best"}</li>
      </ul>

      <h3>{lang === "ar" ? "قرار التوجيه:" : "Routing Decision:"}</h3>
      <Callout type="important">
        {lang === "ar" ? "أقل hops وخلاص" : "Fewest hops, period"}
      </Callout>

      <h3>{lang === "ar" ? "ما بيأخذه بعين الاعتبار:" : "What It Ignores:"}</h3>
      <ul>
        <li>{lang === "ar" ? "سرعة" : "Speed"}</li>
        <li>{lang === "ar" ? "bandwidth" : "Bandwidth"}</li>
        <li>{lang === "ar" ? "congestion" : "Congestion"}</li>
      </ul>
    </Section>
  );
}

// Section 43: IGRP & EIGRP & OSPF & BGP Summary
export function ProtocolsSummarySection({ onVisible }) {
  const { language: lang } = useLanguage();

  return (
    <Section
      id="protocols-summary"
      number="43"
      title="Protocol Comparison & Mental Models"
      titleEn="Understanding All Routing Protocols"
      onVisible={onVisible}
    >
      <h2>
        {lang === "ar" ? "الصورة الذهنية الكبيرة" : "The Big Mental Model"}
      </h2>
      <ul>
        <li>
          <strong>
            {lang === "ar" ? "Distance-Vector" : "Distance-Vector"}
          </strong>{" "}
          → {lang === "ar" ? "اسأل جارك" : "Ask your neighbor"}
        </li>
        <li>
          <strong>{lang === "ar" ? "Link-State" : "Link-State"}</strong> →{" "}
          {lang === "ar" ? "اعمل خريطة" : "Make a map"}
        </li>
        <li>
          <strong>RIP</strong> →{" "}
          {lang === "ar" ? "بسيط بس غبي" : "Simple but dumb"}
        </li>
        <li>
          <strong>OSPF</strong> →{" "}
          {lang === "ar" ? "ذكي بس تقيل" : "Smart but heavy"}
        </li>
        <li>
          <strong>BGP</strong> →{" "}
          {lang === "ar" ? "سياسي مش رياضي" : "Politician not mathematician"}
        </li>
      </ul>

      <h2>{lang === "ar" ? "الخطوة التالية:" : "More Details:"}</h2>
      <h3>
        {lang === "ar" ? "🟡 IGRP – تحسين RIP" : "🟡 IGRP - RIP Improvement"}
      </h3>
      <p>
        {lang === "ar"
          ? "Cisco قالت: مش معقول نختار طريق وحش بس عشان hops أقل"
          : "Cisco said: We can't choose bad path just because it has fewer hops"}
      </p>
      <Callout type="note">
        {lang === "ar"
          ? "طريق سريع بـ 3 hops وطريق بطئ بـ 2 hops → RIP يختار البطئ 🤦‍♂️"
          : "Fast path with 3 hops vs slow path with 2 hops → RIP chooses slow one 🤦‍♂️"}
      </Callout>

      <h4>{lang === "ar" ? "الحل:" : "Solution:"}</h4>
      <p>
        {lang === "ar"
          ? "IGRP قال: خلينا نحسبها بعقل"
          : "Let's calculate properly"}
      </p>
      <p>{lang === "ar" ? "مش hop بس، لا:" : "Not just hops:"}</p>
      <ul>
        <li>Bandwidth</li>
        <li>Delay</li>
        <li>Load</li>
        <li>Reliability</li>
        <li>MTU</li>
      </ul>
      <p>
        {lang === "ar"
          ? "كلهم يتحطوا في Composite Metric"
          : "Combined in Composite Metric"}
      </p>

      <h3>
        {lang === "ar"
          ? "🔵 EIGRP – الذكاء الحقيقي"
          : "🔵 EIGRP - Real Intelligence"}
      </h3>
      <p>
        {lang === "ar"
          ? "الشبكات كبرت + بقت dynamic. Cisco قالت: لازم نتحرك أسرع ونعرف أكتر"
          : "Networks grew + became dynamic. Cisco said: Must move faster and know more"}
      </p>
      <Callout type="important">
        {lang === "ar"
          ? "EIGRP: مش أعمى زي RIP | ومش تقيل زي OSPF | نص نص → Hybrid"
          : "EIGRP: Not blind like RIP | Not heavy like OSPF | Balance → Hybrid"}
      </Callout>

      <h4>{lang === "ar" ? "إزاي بيفكر؟" : "How Does It Think?"}</h4>
      <ul>
        <li>{lang === "ar" ? "يحتفظ بكل المسارات" : "Keeps all paths"}</li>
        <li>{lang === "ar" ? "مش بس الأفضل" : "Not just the best"}</li>
        <li>
          {lang === "ar"
            ? "جاهز يبدّل فورًا لو مسار وقع"
            : "Ready to switch instantly if path fails"}
        </li>
      </ul>

      <h4>{lang === "ar" ? "عمليًا:" : "Practically:"}</h4>
      <ul>
        <li>
          {lang === "ar" ? "مفيش updates كل شوية" : "No periodic updates"}
        </li>
        <li>
          {lang === "ar" ? "تحديث بس وقت التغيير" : "Updates only on change"}
        </li>
        <li>
          {lang === "ar" ? "convergence سريع جدًا" : "Convergence very fast"}
        </li>
        <li>{lang === "ar" ? "أقل ترافيك" : "Less traffic"}</li>
      </ul>

      <Callout type="success">
        {lang === "ar"
          ? "EIGRP = RIP + IGRP + ذكاء إضافي 🧠"
          : "EIGRP = RIP + IGRP + extra intelligence 🧠"}
      </Callout>

      <h3>
        {lang === "ar"
          ? "🔴 OSPF – خريطة الشبكة الكاملة"
          : "🔴 OSPF - Complete Network Map"}
      </h3>
      <Callout type="note">
        {lang === "ar"
          ? "تخيل مدينة كبيرة: ينفع تمشي من غير خريطة؟ لا"
          : "Imagine a big city: Can you navigate without a map? No"}
      </Callout>

      <p>
        {lang === "ar"
          ? "OSPF قال: كل راوتر يبقى معاه الخريطة كلها"
          : "Each router has the complete map"}
      </p>

      <h4>{lang === "ar" ? "إزاي؟" : "How?"}</h4>
      <ul>
        <li>
          {lang === "ar" ? "كل Router ليه Router ID" : "Each router has ID"}
        </li>
        <li>{lang === "ar" ? "يبعت LSAs" : "Sends LSAs"}</li>
        <li>
          {lang === "ar"
            ? "كل الشبكة تبني LSDB واحدة"
            : "All build identical LSDB"}
        </li>
        <li>
          {lang === "ar" ? "يشغّل SPF (Dijkstra)" : "Runs SPF (Dijkstra)"}
        </li>
      </ul>

      <h4>{lang === "ar" ? "ليه Areas؟" : "Why Areas?"}</h4>
      <ul>
        <li>{lang === "ar" ? "تقلل load" : "Reduce load"}</li>
        <li>{lang === "ar" ? "تنظّم الشبكة" : "Organize network"}</li>
        <li>
          {lang === "ar" ? "backbone area = العمود الفقري" : "Backbone = spine"}
        </li>
      </ul>

      <h4>{lang === "ar" ? "النتيجة؟" : "Result?"}</h4>
      <ul>
        <li>{lang === "ar" ? "قرارات دقيقة" : "Precise decisions"}</li>
        <li>{lang === "ar" ? "convergence سريع" : "Fast convergence"}</li>
        <li>{lang === "ar" ? "scalable" : "Scalable"}</li>
        <li>{lang === "ar" ? "secure" : "Secure"}</li>
      </ul>

      <Callout type="success">
        {lang === "ar"
          ? "OSPF مناسب Enterprise وشبكات كبيرة جدًا"
          : "OSPF perfect for Enterprise and very large networks"}
      </Callout>

      <h3>
        {lang === "ar"
          ? "⚫ BGP – ملك الإنترنت"
          : "⚫ BGP - King of the Internet"}
      </h3>
      <p>
        {lang === "ar"
          ? "بين شركات، دول، مزودين خدمة:"
          : "Between companies, countries, providers:"}
      </p>
      <Callout type="important">
        {lang === "ar"
          ? "الأداء مش أهم حاجة. السياسة أهم"
          : "Performance is not most important. Policy is"}
      </Callout>

      <h4>{lang === "ar" ? "إزاي بيفكر؟" : "How Does It Think?"}</h4>
      <p>{lang === "ar" ? "مش:" : "Not:"}</p>
      <ul>
        <li>hops</li>
        <li>bandwidth</li>
      </ul>

      <p>{lang === "ar" ? "لكن:" : "But:"}</p>
      <ul>
        <li>{lang === "ar" ? "مين ورا مين؟" : "Who's behind whom?"}</li>
        <li>
          {lang === "ar"
            ? "المسار عدّى على أنهي AS؟"
            : "Which AS does path go through?"}
        </li>
        <li>{lang === "ar" ? "هل فيه loops؟" : "Are there loops?"}</li>
      </ul>

      <h4>{lang === "ar" ? "عمليًا:" : "Practically:"}</h4>
      <ul>
        <li>Path-Vector</li>
        <li>policy-based</li>
        <li>
          {lang === "ar"
            ? "مش أسرع طريق… لكن أأمن طريق"
            : "Not fastest... but safest path"}
        </li>
      </ul>

      <Callout type="success">
        {lang === "ar"
          ? "BGP هو اللي ماسك الإنترنت كله"
          : "BGP holds the entire internet together"}
      </Callout>

      <h2>
        {lang === "ar" ? "الصورة الذهنية الثانية" : "Second Mental Model"}
      </h2>
      <ul>
        <li>
          <strong>RIP</strong> → {lang === "ar" ? "عدّ وخلاص" : "Just count"}
        </li>
        <li>
          <strong>IGRP</strong> →{" "}
          {lang === "ar" ? "عدّ واحسب شوية" : "Count and calculate a bit"}
        </li>
        <li>
          <strong>EIGRP</strong> →{" "}
          {lang === "ar" ? "فكّر وكن جاهز" : "Think and be ready"}
        </li>
        <li>
          <strong>OSPF</strong> →{" "}
          {lang === "ar" ? "معاك خريطة كاملة" : "You have the complete map"}
        </li>
        <li>
          <strong>BGP</strong> →{" "}
          {lang === "ar" ? "سياسة قبل السرعة" : "Policy before speed"}
        </li>
      </ul>

      <h2>
        {lang === "ar"
          ? "جدول المقارنة الشامل"
          : "Comprehensive Comparison Table"}
      </h2>
      <Table
        headers={
          lang === "ar"
            ? ["Feature", "RIP", "IGRP", "EIGRP", "OSPF", "BGP"]
            : ["Feature", "RIP", "IGRP", "EIGRP", "OSPF", "BGP"]
        }
        rows={[
          [
            lang === "ar" ? "Type" : "Type",
            "DV",
            "DV",
            "Hybrid",
            "LS",
            "Path-Vector",
          ],
          [
            lang === "ar" ? "Metrics" : "Metrics",
            lang === "ar" ? "Hop Count" : "Hop Count",
            lang === "ar" ? "Multiple" : "Multiple",
            lang === "ar" ? "Multiple + composite" : "Multiple + composite",
            lang === "ar" ? "Cost" : "Cost",
            lang === "ar" ? "Policy-based" : "Policy-based",
          ],
          [
            lang === "ar" ? "Updates" : "Updates",
            lang === "ar" ? "Periodic" : "Periodic",
            lang === "ar" ? "Periodic" : "Periodic",
            lang === "ar" ? "On change" : "On change",
            lang === "ar" ? "On change" : "On change",
            lang === "ar" ? "On change" : "On change",
          ],
          [
            lang === "ar" ? "Convergence" : "Convergence",
            lang === "ar" ? "بطيء" : "Slow",
            lang === "ar" ? "متوسط" : "Moderate",
            lang === "ar" ? "سريع" : "Fast",
            lang === "ar" ? "سريع جدًا" : "Very Fast",
            lang === "ar" ? "متوسط" : "Moderate",
          ],
          [
            lang === "ar" ? "Scale" : "Scale",
            lang === "ar" ? "Small LAN" : "Small LAN",
            lang === "ar" ? "Medium-LAN" : "Medium-LAN",
            lang === "ar" ? "Large-LAN" : "Large-LAN",
            lang === "ar" ? "Large/Enterprise" : "Large/Enterprise",
            lang === "ar" ? "Internet" : "Internet",
          ],
          [
            lang === "ar" ? "Loop Prevention" : "Loop Prevention",
            lang === "ar" ? "Count to infinity" : "Count to infinity",
            lang === "ar" ? "Count to infinity" : "Count to infinity",
            lang === "ar" ? "Feasible Distance" : "Feasible Distance",
            lang === "ar" ? "SPF + LSAs" : "SPF + LSAs",
            lang === "ar" ? "Path info + loop check" : "Path info + loop check",
          ],
        ]}
      />
    </Section>
  );
}
