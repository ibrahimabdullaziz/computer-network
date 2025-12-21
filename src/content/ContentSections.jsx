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

export function IPv6Section({ onVisible }) {
  const { language: lang } = useLanguage();
  const tr = t.ipv6;

  return (
    <Section
      id="ipv6"
      number="16"
      title="بروتوكول IPv6"
      titleEn="IPv6 - Internet Protocol Version 6"
      onVisible={onVisible}
    >
      <h3>{tr.whyAppeared[lang]}</h3>
      <p>{tr.whyAppearedDesc[lang]}</p>

      <blockquote>{tr.quote[lang]}</blockquote>

      <h3>{tr.addressSize[lang]}</h3>
      <Table headers={tr.sizeTable.headers[lang]} rows={tr.sizeTable.rows} />

      <h3>{tr.addressFormat[lang]}</h3>
      <ul>
        {tr.formatFeatures[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <CodeBlock language="text">
        2001:0db8:85a3:0000:0000:8a2e:0370:7334
      </CodeBlock>

      <h3>{tr.advantages[lang]}</h3>
      <ul>
        {tr.advantagesList[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <Callout type="important">{tr.noBroadcast[lang]}</Callout>

      <h3>{tr.addressTypes[lang]}</h3>
      <ul>
        {tr.addressTypesList[lang].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <Callout type="tip">{tr.noNatWhy[lang]}</Callout>

      <hr />

      <h2>{tr.conclusion[lang]}</h2>
      <div className="card">
        <ul>
          {tr.conclusionList[lang].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
