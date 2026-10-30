import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About Us",
        systems: "Systems",
        security: "Security",
        contact: "Contact"
      },
      hero: {
        pill: "Next Gen Systems",
        title_1: "Technology that",
        title_struct: "structures",
        title_2: ", integrates and",
        title_trans: "transforms",
        title_3: "digital ecosystems",
        subtitle: "BIO SÍNTESE - TECNOLOGIA develops strategic platforms for government, finance, data intelligence, health, and the digital economy.",
        cta_explore: "Explore Our Systems",
        cta_talk: "Talk to a Specialist"
      },
      about_summary: {
        label: "About Bio Síntese",
        title: "Building the infrastructure of the future.",
        text: "We are a technology company focused on high-complexity solutions. We don't just write code; we architect ecosystems that handle sensitive data, critical financial transactions, and massive public sector workflows.",
        link: "Read our mission",
        stat: "Transactions Processed Daily"
      },
      ecosystems: {
        title: "Our Ecosystems",
        subtitle: "Strategic verticals where we apply our intelligence.",
        gov: "Government & Public Mgmt",
        fin: "Financial & Vehicle Market",
        data: "Data Intelligence",
        games: "Digital Economy & Games",
        health: "Digital Health"
      },
      systems: {
        access_site: "Visit website", available: "Available", coming_soon: "Coming soon", new_tab: "opens in a new tab",
        sigcr: { title: "SIGCR", subtitle: "Accreditation System", desc: "Technology for accreditation management. Visit the official SIGCR website." },
        tropa: { title: "TROPA DO RUSH", subtitle: "Give value to your squad", desc: "Visit the official TROPA DO RUSH website." },
        setorSeis: { title: "SETOR SEIS", subtitle: "A BIO SÍNTESE product", desc: "A product of BIO SÍNTESE Consultoria Integrada. More information coming soon." },
        label: "Our Solutions",
        title: "Proprietary Platforms",
        view_all: "View all systems",
        learn_more: "Learn more",
        request_demo: "Request Demo",
        core: {
          title: "BIO SÍNTESE CORE",
          subtitle: "Authentication & Governance",
          desc: "The central nervous system for authentication, security, governance, LGPD compliance, and unified API management across all platforms."
        },
        reg: {
          title: "BIO SÍNTESE REG",
          subtitle: "Vehicle Financing Registration",
          desc: "A robust system for registering vehicle financing contracts, ensuring legal compliance and security for financial institutions."
        },
        sibavec: {
          title: "BIO SÍNTESE SIBAVEC",
          subtitle: "Judicial Order Management",
          desc: "Specialized platform for managing vehicle repossession orders and judicial constraints with real-time tracking."
        },
        drope: {
          title: "BIO SÍNTESE DROPE",
          subtitle: "Data Intelligence",
          desc: "Intelligent platform for deep data search, validation, and cross-analysis to uncover insights and prevent fraud."
        },
        captagov: {
          title: "BIO SÍNTESE CAPTAGOV",
          subtitle: "Public Funds & Fiscal Health",
          desc: "Advanced monitoring platform for public fund capture and fiscal health analysis for government bodies."
        },
        govdoc: {
          title: "BIO SÍNTESE GOVDOC",
          subtitle: "Process Management",
          desc: "Intelligent document management and public process automation system, reducing bureaucracy and increasing transparency."
        },
        game: {
          title: "BIO SÍNTESE GAME HOST",
          subtitle: "Gaming Infrastructure",
          desc: "High-performance platforms for hosting gaming events, managing communities, and facilitating the digital economy."
        },
        custom: {
          title: "BIO SÍNTESE CUSTOM",
          subtitle: "Bespoke Solutions",
          desc: "Tailor-made software development, dedicated APIs, custom dashboards, and automation workflows for specific enterprise needs."
        }
      },
      differentials: {
        title: "Why Bio Síntese?",
        modular: { title: "Modular Architecture", desc: "Scalable systems built on microservices." },
        api: { title: "API-First Design", desc: "Seamless integration with third-party ecosystems." },
        lgpd: { title: "LGPD by Design", desc: "Privacy and data protection at the core." },
        ai: { title: "AI-Driven", desc: "Advanced algorithms for predictive intelligence." },
        gov: { title: "Gov-Ready", desc: "Compliant with strict public sector standards." },
        uptime: { title: "High Availability", desc: "Mission-critical uptime guarantees." }
      },
      footer: {
        tagline: "Transforming digital ecosystems with security, intelligence, and high-performance technology for the public and private sectors.",
        company: "Company",
        legal: "Legal & Support",
        contact: "Contact",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        transparency: "Transparency",
        rights: "All rights reserved.",
        dev: "Developed by Bio Síntese Core Team"
      },
      contact: {
        title: "Let's build the future together.",
        subtitle: "Whether you are a government agency looking to modernize or a financial institution needing robust security, BIO SÍNTESE - TECNOLOGIA has the expertise.",
        hq: "Headquarters",
        email: "Email Us",
        call: "Call Us",
        form_title: "Request a Technical Presentation",
        name: "Full Name",
        company: "Organization / Company",
        corporate_email: "Corporate Email",
        phone: "Phone Number",
        area: "Area of Interest",
        message: "Message",
        submit: "Send Request",
        disclaimer: "By submitting this form, you agree to our Privacy Policy. Your data is secure."
      },
      security: {
        hero_title: "Security & Compliance",
        hero_desc: "In our line of work, security isn't a feature—it's the foundation. We operate under strict governance protocols to ensure data integrity and sovereignty.",
        sec_info: "Information Security",
        sec_info_desc: "Our infrastructure utilizes military-grade encryption for data at rest and in transit. We employ continuous penetration testing and vulnerability scanning to stay ahead of threats.",
        lgpd: "LGPD & Governance",
        lgpd_desc: "BIO SÍNTESE - TECNOLOGIA systems are built with 'Privacy by Design' principles. We provide full audit trails for every transaction, ensuring complete accountability and compliance with Brazilian LGPD and international standards.",
        cloud: "Cloud Scalability",
        cloud_desc: "Leveraging modern cloud-native architectures (Kubernetes, Serverless), our systems auto-scale to handle massive spikes in government traffic without performance degradation.",
        audit: "Audit Trails",
        audit_desc: "Every action within the BIO SÍNTESE - TECNOLOGIA ecosystem is logged immutably. This enables forensic analysis and ensures that judicial and financial operations are traceable and legally defensible."
      },
      about_page: {
        title: "Structuring Trust.",
        subtitle: "BIO SÍNTESE - TECNOLOGIA is more than a software house. We are partners in governance, innovation, and digital transformation for national-scale entities.",
        who_title: "Who We Are",
        p1: "Born from the need to modernize critical public and private infrastructure, BIO SÍNTESE - TECNOLOGIA specializes in developing high-availability ecosystems. We understand that in the government and financial sectors, downtime is not an option, and security is paramount.",
        p2: "Our team is composed of senior engineers, data scientists, and compliance experts who understand the nuances of the Brazilian and international digital landscape.",
        p3: "We operate at the intersection of bureaucracy and technology, turning complex legal frameworks into seamless digital experiences.",
        integrations: "Government Integrations",
        uptime: "Uptime Guarantee",
        standards: "Compliance Standards",
        mission: "Mission",
        mission_desc: "To provide the digital backbone that enables governments and enterprises to serve citizens and customers efficiently, securely, and transparently.",
        values: "Values",
        values_desc: "Integrity above all. Security by design. Innovation with purpose. We believe technology must serve humanity, not complicate it.",
        vision: "Vision",
        vision_desc: "To be the reference in Latin America for GovTech and FinTech infrastructure, setting the standard for digital governance."
      }
    }
  },
  pt: {
    translation: {
      nav: {
        home: "Início",
        about: "Sobre Nós",
        systems: "Sistemas",
        security: "Segurança",
        contact: "Contato"
      },
      hero: {
        pill: "Sistemas de Próxima Geração",
        title_1: "Tecnologia que",
        title_struct: "estrutura",
        title_2: ", integra e",
        title_trans: "transforma",
        title_3: "ecossistemas digitais",
        subtitle: "A BIO SÍNTESE - TECNOLOGIA desenvolve plataformas estratégicas para governo, finanças, inteligência de dados, saúde e economia digital.",
        cta_explore: "Explorar Sistemas",
        cta_talk: "Falar com Especialista"
      },
      about_summary: {
        label: "Sobre a Bio Síntese",
        title: "Construindo a infraestrutura do futuro.",
        text: "Somos uma empresa de tecnologia focada em soluções de alta complexidade. Não apenas escrevemos código; arquitetamos ecossistemas que lidam com dados sensíveis, transações financeiras críticas e fluxos massivos do setor público.",
        link: "Leia nossa missão",
        stat: "Transações Processadas Diariamente"
      },
      ecosystems: {
        title: "Nossos Ecossistemas",
        subtitle: "Verticais estratégicas onde aplicamos nossa inteligência.",
        gov: "Governo & Gestão Pública",
        fin: "Mercado Financeiro & Veicular",
        data: "Inteligência de Dados",
        games: "Economia Digital & Games",
        health: "Saúde Digital"
      },
      systems: {
        access_site: "Acessar site", available: "Disponível", coming_soon: "Em breve", new_tab: "abre em nova aba",
        sigcr: { title: "SIGCR", subtitle: "Sistema de Credenciamento", desc: "Tecnologia para gestão de credenciamentos. Acesse o site oficial do SIGCR." },
        tropa: { title: "TROPA DO RUSH", subtitle: "Dê valor à sua tropa", desc: "Acesse o site oficial da TROPA DO RUSH." },
        setorSeis: { title: "SETOR SEIS", subtitle: "Um produto BIO SÍNTESE", desc: "Produto da BIO SÍNTESE Consultoria Integrada. Em breve, mais informações." },
        label: "Nossas Soluções",
        title: "Plataformas Proprietárias",
        view_all: "Ver todos os sistemas",
        learn_more: "Saiba mais",
        request_demo: "Solicitar Demo",
        core: {
          title: "BIO SÍNTESE CORE",
          subtitle: "Autenticação & Governança",
          desc: "O sistema nervoso central para autenticação, segurança, governança, conformidade LGPD e gestão unificada de APIs em todas as plataformas."
        },
        reg: {
          title: "BIO SÍNTESE REG",
          subtitle: "Registro de Contratos",
          desc: "Um sistema robusto para registro de contratos de financiamento de veículos, garantindo conformidade legal e segurança para instituições financeiras."
        },
        sibavec: {
          title: "BIO SÍNTESE SIBAVEC",
          subtitle: "Gestão de Ordens Judiciais",
          desc: "Plataforma especializada para gestão de ordens de apreensão de veículos e restrições judiciais com rastreamento em tempo real."
        },
        drope: {
          title: "BIO SÍNTESE DROPE",
          subtitle: "Inteligência de Dados",
          desc: "Plataforma inteligente para busca profunda, validação e cruzamento de dados para descobrir insights e prevenir fraudes."
        },
        captagov: {
          title: "BIO SÍNTESE CAPTAGOV",
          subtitle: "Fundos Públicos & Saúde Fiscal",
          desc: "Plataforma avançada de monitoramento para captação de fundos públicos e análise de saúde fiscal para órgãos governamentais."
        },
        govdoc: {
          title: "BIO SÍNTESE GOVDOC",
          subtitle: "Gestão de Processos",
          desc: "Sistema inteligente de gestão documental e automação de processos públicos, reduzindo a burocracia e aumentando a transparência."
        },
        game: {
          title: "BIO SÍNTESE GAME HOST",
          subtitle: "Infraestrutura de Games",
          desc: "Plataformas de alto desempenho para hospedagem de eventos de jogos, gestão de comunidades e facilitação da economia digital."
        },
        custom: {
          title: "BIO SÍNTESE CUSTOM",
          subtitle: "Soluções Sob Medida",
          desc: "Desenvolvimento de software sob medida, APIs dedicadas, dashboards personalizados e fluxos de automação para necessidades empresariais específicas."
        }
      },
      differentials: {
        title: "Por que Bio Síntese?",
        modular: { title: "Arquitetura Modular", desc: "Sistemas escaláveis construídos em microsserviços." },
        api: { title: "Design API-First", desc: "Integração perfeita com ecossistemas de terceiros." },
        lgpd: { title: "LGPD by Design", desc: "Privacidade e proteção de dados no núcleo." },
        ai: { title: "Orientado a IA", desc: "Algoritmos avançados para inteligência preditiva." },
        gov: { title: "Pronto para Governo", desc: "Em conformidade com rígidos padrões do setor público." },
        uptime: { title: "Alta Disponibilidade", desc: "Garantias de uptime para missões críticas." }
      },
      footer: {
        tagline: "Transformando ecossistemas digitais com segurança, inteligência e tecnologia de alto desempenho para os setores público e privado.",
        company: "Empresa",
        legal: "Legal & Suporte",
        contact: "Contato",
        privacy: "Política de Privacidade",
        terms: "Termos de Uso",
        transparency: "Transparência",
        rights: "Todos os direitos reservados.",
        dev: "Desenvolvido por Bio Síntese Core Team"
      },
      contact: {
        title: "Vamos construir o futuro juntos.",
        subtitle: "Seja você um órgão governamental buscando modernização ou uma instituição financeira precisando de segurança robusta, a BIO SÍNTESE - TECNOLOGIA tem a expertise.",
        hq: "Sede",
        email: "Email",
        call: "Telefone",
        form_title: "Solicitar Apresentação Técnica",
        name: "Nome Completo",
        company: "Organização / Empresa",
        corporate_email: "Email Corporativo",
        phone: "Telefone",
        area: "Área de Interesse",
        message: "Mensagem",
        submit: "Enviar Solicitação",
        disclaimer: "Ao enviar este formulário, você concorda com nossa Política de Privacidade. Seus dados estão seguros."
      },
      security: {
        hero_title: "Segurança & Compliance",
        hero_desc: "Em nosso trabalho, segurança não é uma funcionalidade—é a fundação. Operamos sob rigorosos protocolos de governança para garantir integridade e soberania dos dados.",
        sec_info: "Segurança da Informação",
        sec_info_desc: "Nossa infraestrutura utiliza criptografia de nível militar para dados em repouso e em trânsito. Empregamos testes contínuos de invasão e varredura de vulnerabilidades.",
        lgpd: "LGPD & Governança",
        lgpd_desc: "Os sistemas BIO SÍNTESE - TECNOLOGIA são construídos com princípios 'Privacy by Design'. Fornecemos trilhas de auditoria completas para cada transação, garantindo total responsabilidade e conformidade.",
        cloud: "Escalabilidade em Nuvem",
        cloud_desc: "Aproveitando arquiteturas modernas nativas da nuvem (Kubernetes, Serverless), nossos sistemas escalam automaticamente para lidar com picos massivos de tráfego governamental.",
        audit: "Trilhas de Auditoria",
        audit_desc: "Cada ação dentro do ecossistema BIO SÍNTESE - TECNOLOGIA é registrada de forma imutável. Isso permite análise forense e garante que operações judiciais e financeiras sejam rastreáveis."
      },
      about_page: {
        title: "Estruturando Confiança.",
        subtitle: "A BIO SÍNTESE - TECNOLOGIA é mais que uma software house. Somos parceiros em governança, inovação e transformação digital para entidades de escala nacional.",
        who_title: "Quem Somos",
        p1: "Nascida da necessidade de modernizar infraestruturas críticas públicas e privadas, a BIO SÍNTESE - TECNOLOGIA é especializada no desenvolvimento de ecossistemas de alta disponibilidade. Entendemos que nos setores governamental e financeiro, inatividade não é uma opção e segurança é primordial.",
        p2: "Nossa equipe é composta por engenheiros seniores, cientistas de dados e especialistas em compliance que entendem as nuances do cenário digital brasileiro e internacional.",
        p3: "Atuamos na interseção entre burocracia e tecnologia, transformando marcos legais complexos em experiências digitais fluidas.",
        integrations: "Integrações Governamentais",
        uptime: "Garantia de Uptime",
        standards: "Padrões de Compliance",
        mission: "Missão",
        mission_desc: "Prover a espinha dorsal digital que permite a governos e empresas servir cidadãos e clientes de forma eficiente, segura e transparente.",
        values: "Valores",
        values_desc: "Integridade acima de tudo. Segurança por design. Inovação com propósito. Acreditamos que a tecnologia deve servir à humanidade, não complicá-la.",
        vision: "Visão",
        vision_desc: "Ser a referência na América Latina em infraestrutura GovTech e FinTech, estabelecendo o padrão para governança digital."
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        about: "Nosotros",
        systems: "Sistemas",
        security: "Seguridad",
        contact: "Contacto"
      },
      hero: {
        pill: "Sistemas de Próxima Generación",
        title_1: "Tecnología que",
        title_struct: "estructura",
        title_2: ", integra y",
        title_trans: "transforma",
        title_3: "ecosistemas digitales",
        subtitle: "BIO SÍNTESE - TECNOLOGIA desarrolla plataformas estratégicas para gobierno, finanzas, inteligencia de datos, salud y economía digital.",
        cta_explore: "Explorar Sistemas",
        cta_talk: "Hable con un Especialista"
      },
      about_summary: {
        label: "Sobre Bio Síntese",
        title: "Construyendo la infraestructura del futuro.",
        text: "Somos una empresa de tecnología enfocada en soluciones de alta complejidad. No solo escribimos código; arquitectamos ecosistemas que manejan datos sensibles, transacciones financieras críticas y flujos masivos del sector público.",
        link: "Lea nuestra misión",
        stat: "Transacciones Procesadas Diariamente"
      },
      ecosystems: {
        title: "Nuestros Ecosistemas",
        subtitle: "Verticales estratégicas donde aplicamos nuestra inteligencia.",
        gov: "Gobierno y Gestión Pública",
        fin: "Mercado Financiero y Vehicular",
        data: "Inteligencia de Datos",
        games: "Economía Digital y Juegos",
        health: "Salud Digital"
      },
      systems: {
        access_site: "Acceder al sitio", available: "Disponible", coming_soon: "Próximamente", new_tab: "se abre en una pestaña nueva",
        sigcr: { title: "SIGCR", subtitle: "Sistema de Acreditación", desc: "Tecnología para la gestión de acreditaciones. Visite el sitio oficial de SIGCR." },
        tropa: { title: "TROPA DO RUSH", subtitle: "Dê valor à sua tropa", desc: "Visite el sitio oficial de TROPA DO RUSH." },
        setorSeis: { title: "SETOR SEIS", subtitle: "Un producto BIO SÍNTESE", desc: "Producto de BIO SÍNTESE Consultoria Integrada. Próximamente, más información." },
        label: "Nuestras Soluciones",
        title: "Plataformas Propietarias",
        view_all: "Ver todos los sistemas",
        learn_more: "Sepa más",
        request_demo: "Solicitar Demo",
        core: {
          title: "BIO SÍNTESE CORE",
          subtitle: "Autenticación y Gobernanza",
          desc: "El sistema nervioso central para autenticación, seguridad, gobernanza, cumplimiento de LGPD y gestión unificada de API en todas las plataformas."
        },
        reg: {
          title: "BIO SÍNTESE REG",
          subtitle: "Registro de Contratos",
          desc: "Un sistema robusto para el registro de contratos de financiación de vehículos, garantizando cumplimiento legal y seguridad para instituciones financieras."
        },
        sibavec: {
          title: "BIO SÍNTESE SIBAVEC",
          subtitle: "Gestión de Órdenes Judiciales",
          desc: "Plataforma especializada para la gestión de órdenes de incautación de vehículos y restricciones judiciales con seguimiento en tiempo real."
        },
        drope: {
          title: "BIO SÍNTESE DROPE",
          subtitle: "Inteligencia de Datos",
          desc: "Plataforma inteligente para búsqueda profunda, validación y cruce de datos para descubrir insights y prevenir fraudes."
        },
        captagov: {
          title: "BIO SÍNTESE CAPTAGOV",
          subtitle: "Fondos Públicos y Salud Fiscal",
          desc: "Plataforma avanzada de monitoreo para la captación de fondos públicos y análisis de salud fiscal para organismos gubernamentales."
        },
        govdoc: {
          title: "BIO SÍNTESE GOVDOC",
          subtitle: "Gestión de Procesos",
          desc: "Sistema inteligente de gestión documental y automatización de procesos públicos, reduciendo la burocracia y aumentando la transparencia."
        },
        game: {
          title: "BIO SÍNTESE GAME HOST",
          subtitle: "Infraestructura de Juegos",
          desc: "Plataformas de alto rendimiento para alojamiento de eventos de juegos, gestión de comunidades y facilitación de la economía digital."
        },
        custom: {
          title: "BIO SÍNTESE CUSTOM",
          subtitle: "Soluciones a Medida",
          desc: "Desarrollo de software a medida, API dedicadas, paneles personalizados y flujos de automatización para necesidades empresariales específicas."
        }
      },
      differentials: {
        title: "¿Por qué Bio Síntese?",
        modular: { title: "Arquitectura Modular", desc: "Sistemas escalables construidos en microservicios." },
        api: { title: "Diseño API-First", desc: "Integración perfecta con ecosistemas de terceros." },
        lgpd: { title: "LGPD by Design", desc: "Privacidad y protección de datos en el núcleo." },
        ai: { title: "Impulsado por IA", desc: "Algoritmos avanzados para inteligencia predictiva." },
        gov: { title: "Listo para Gobierno", desc: "En cumplimiento con estrictos estándares del sector público." },
        uptime: { title: "Alta Disponibilidad", desc: "Garantías de tiempo de actividad para misiones críticas." }
      },
      footer: {
        tagline: "Transformando ecosistemas digitales con seguridad, inteligencia y tecnología de alto rendimiento para los sectores público y privado.",
        company: "Empresa",
        legal: "Legal y Soporte",
        contact: "Contacto",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
        transparency: "Transparencia",
        rights: "Todos los derechos reservados.",
        dev: "Desarrollado por Bio Síntese Core Team"
      },
      contact: {
        title: "Construyamos el futuro juntos.",
        subtitle: "Ya sea una agencia gubernamental buscando modernización o una institución financiera que necesita seguridad robusta, BIO SÍNTESE - TECNOLOGIA tiene la experiencia.",
        hq: "Sede",
        email: "Correo",
        call: "Teléfono",
        form_title: "Solicitar Presentación Técnica",
        name: "Nombre Completo",
        company: "Organización / Empresa",
        corporate_email: "Correo Corporativo",
        phone: "Teléfono",
        area: "Área de Interés",
        message: "Mensaje",
        submit: "Enviar Solicitação",
        disclaimer: "Al enviar este formulario, acepta nuestra Política de Privacidade. Sus datos están seguros."
      },
      security: {
        hero_title: "Seguridad y Cumplimiento",
        hero_desc: "En nuestro trabajo, la seguridad no es una característica, es la base. Operamos bajo estrictos protocolos de gobernanza para garantizar la integridad y soberanía de los datos.",
        sec_info: "Seguridad de la Información",
        sec_info_desc: "Nuestra infraestructura utiliza cifrado de grado militar para datos en reposo y en tránsito. Empleamos pruebas de penetración continuas y escaneo de vulnerabilidades.",
        lgpd: "LGPD y Gobernanza",
        lgpd_desc: "Los sistemas BIO SÍNTESE - TECNOLOGIA se construyen con principios de 'Privacidad por Diseño'. Proporcionamos pistas de auditoría completas para cada transacción, garantizando total responsabilidad.",
        cloud: "Escalabilidad en la Nube",
        cloud_desc: "Aprovechando arquitecturas modernas nativas de la nube (Kubernetes, Serverless), nuestros sistemas escalan automáticamente para manejar picos masivos de tráfico gubernamental.",
        audit: "Pistas de Auditoría",
        audit_desc: "Cada acción dentro del ecosistema BIO SÍNTESE - TECNOLOGIA se registra de forma inmutable. Esto permite el análisis forense y garantiza que las operaciones judiciales y financieras sean rastreables."
      },
      about_page: {
        title: "Estructurando Confianza.",
        subtitle: "BIO SÍNTESE - TECNOLOGIA es más que una casa de software. Somos socios en gobernanza, innovación y transformación digital para entidades de escala nacional.",
        who_title: "Quiénes Somos",
        p1: "Nacida de la necesidad de modernizar infraestructuras críticas públicas y privadas, BIO SÍNTESE - TECNOLOGIA se especializa en el desarrollo de ecosistemas de alta disponibilidad. Entendemos que en los sectores gubernamental y financiero, la inactividad no es una opción.",
        p2: "Nuestro equipo está compuesto por ingenieros senior, científicos de datos y expertos en cumplimiento que entienden los matices del panorama digital brasileño e internacional.",
        p3: "Operamos en la intersección entre burocracia y tecnología, transformando marcos legales complejos en experiencias digitales fluidas.",
        integrations: "Integraciones Gubernamentales",
        uptime: "Garantía de Tiempo de Actividad",
        standards: "Estándares de Cumplimiento",
        mission: "Misión",
        mission_desc: "Proporcionar la columna vertebral digital que permita a gobiernos y empresas servir a ciudadanos y clientes de manera eficiente, segura y transparente.",
        values: "Valores",
        values_desc: "Integridad ante todo. Seguridad por diseño. Innovación con propósito. Creemos que la tecnología debe servir a la humanidad, no complicarla.",
        vision: "Vision",
        vision_desc: "Ser la referencia en América Latina en infraestructura GovTech y FinTech, estableciendo el estándar para la gobernanza digital."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en', 'es'],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;