import { useState, useCookie } from 'nuxt/app';

// Create translations object
const translationsData = {
  en: {
    heroText: '',
    // WindowTwo translations
    introText: 'We craft immersive real estate destinations\nthat maximize asset value and make people feel alive.',
    findOutMore: 'FIND OUT MORE',
    hotels: 'HOTELS',
    // WindowThree translations
    foodAndBeverage: 'FOOD &amp; BEVERAGE',
    // WindowFour translations
    sanctuaries: 'SANCTUARIES',
    comingSoon: 'COMING SOON',
    // Capabilities translations
    ourServices: 'Our services',
    servicesDesc1: 'We deliver a true 360° approach, transforming real estate into immersive destinations',
    servicesDesc2: 'Through rigorous, brand-led placemaking and the creativity of soulful design.',
    design: 'DESIGN',
    strategy: 'STRATEGY',
    consultancy: 'CONSULTANCY',
    designDesc: 'WE CREATE ENVIRONMENTS THAT BALANCE FORM, FUNCTION AND GUEST EXPERIENCE.',
    strategyDesc: 'WE DEFINE POSITIONING, NARRATIVES AND CONCEPTS THAT CONNECT BRAND, PLACE AND AUDIENCE.',
    consultancyDesc: 'WE ADVISE STAKEHOLDERS AND VALIDATE PROJECTS<br>TO MAXIMIZE PERFORMANCE<br>AND ENSURE COMPLIANCE.',
    conceptDevelopment: 'CONCEPT DEVELOPMENT',
    conceptDesc: 'We craft distinctive design narratives that align with brand values and resonate with target audiences.',
    spacePlanning: 'SPACE PLANNING',
    spaceDesc: 'We optimize spatial flow and functionality to create intuitive, engaging guest experiences.',
    backOfHouse: 'BACK OF HOUSE OPTIMIZATION &amp; DESIGN',
    backOfHouseDesc: 'We streamline service-area layouts to enhance workflow, safety and staff productivity.',
    brandIntegration: 'BRAND INTEGRATION &amp; EXPERIENCE DESIGN',
    brandDesc: 'We translate brand values into physical environments that deliver consistent, memorable experiences.',
    marketPositioning: 'MARKET POSITIONING &amp; PLACEMAKING',
    marketDesc: 'We identify competitive advantages and create distinctive experiences that capture target audiences.',
    serviceDesign: 'SERVICE DESIGN',
    serviceDesc: 'We design service frameworks that align guest journeys with operational efficiency and brand promise.',
    technicalReview: 'TECHNICAL REVIEW &amp; COMPLIANCE',
    technicalDesc: 'We evaluate designs against brand standards, building codes and operational requirements to ensure feasibility.',
    implementationSupport: 'IMPLEMENTATION SUPPORT',
    implementationDesc: 'We provide guidance throughout construction and installation to maintain design integrity and quality.',
    strategicDesign: 'STRATEGIC DESIGN ADVISORY',
    strategicDesc: 'We provide strategic counsel and develop design guidelines that ensure consistency and excellence at every project phase.',
    // Footer translations
    footerAboutTitle: 'ABOUT US',
    footerAboutMeetFounder: 'Meet the Founder',
    footerAboutWorkWithUs: 'Work with Us',
    footerServicesTitle: 'SERVICES',
    footerServicesDesign: 'Design',
    footerServicesStrategy: 'Strategy',
    footerServicesConsulting: 'Consulting',
    footerProjectsTitle: 'PROJECTS',
    footerProjectsHotels: 'Hotels',
    food: 'Food',
    footerProjectsFNB: 'FOOD & BEVERAGE',
    footerProjectsSanctuaries: 'Sanctuaries',
    footerContactTitle: 'CONTACT US'
  },
  pt: {
    heroText: '',
    // WindowTwo translations
    introText: 'Criamos destinos imobiliários imersivos\nque maximizam o valor do ativo e fazem as pessoas se sentirem vivas.',
    findOutMore: 'SAIBA MAIS',
    hotels: 'HOTÉIS',
    food: 'COMIDA',
    // WindowThree translations
    foodAndBeverage: 'COMIDA &amp; BEBIDAS',
    // WindowFour translations
    sanctuaries: 'SANTUÁRIOS',
    footerProjectsFNB: 'GASTRONOMIA & BEBIDAS',
    comingSoon: 'EM BREVE',
    // Capabilities translations
    ourServices: 'Nossos serviços',
    servicesDesc1: 'Oferecemos uma abordagem 360° completa, transformando imóveis em destinos imersivos',
    servicesDesc2: 'Por meio de placemaking rigoroso e orientado pela marca, e a criatividade de um design com alma.',
    design: 'DESIGN',
    strategy: 'ESTRATÉGIA',
    consultancy: 'CONSULTORIA',
    designDesc: 'CRIAMOS AMBIENTES QUE EQUILIBRAM FORMA, FUNÇÃO E EXPERIÊNCIA DO HÓSPEDE.',
    strategyDesc: 'DEFINIMOS POSICIONAMENTO, NARRATIVAS E CONCEITOS QUE CONECTAM MARCA, LUGAR E PÚBLICO.',
    consultancyDesc: 'ACONSELHAMOS STAKEHOLDERS E VALIDAMOS PROJETOS<br>PARA MAXIMIZAR DESEMPENHO<br>E GARANTIR CONFORMIDADE.',
    conceptDevelopment: 'DESENVOLVIMENTO DE CONCEITO',
    conceptDesc: 'Criamos narrativas de design distintivas alinhadas com os valores da marca e que ressoam com o público-alvo.',
    spacePlanning: 'PLANEJAMENTO ESPACIAL',
    spaceDesc: 'Otimizamos fluxo espacial e funcionalidade para criar experiências intuitivas e envolventes para os hóspedes.',
    backOfHouse: 'OTIMIZAÇÃO &amp; DESIGN DE ÁREAS DE SERVIÇO',
    backOfHouseDesc: 'Simplificamos layouts de áreas de serviço para melhorar o fluxo de trabalho, segurança e produtividade da equipe.',
    brandIntegration: 'INTEGRAÇÃO DE MARCA &amp; DESIGN DE EXPERIÊNCIA',
    brandDesc: 'Traduzimos valores da marca em ambientes físicos que proporcionam experiências consistentes e memoráveis.',
    marketPositioning: 'POSICIONAMENTO DE MERCADO &amp; PLACEMAKING',
    marketDesc: 'Identificamos vantagens competitivas e criamos experiências distintivas que capturam públicos-alvo.',
    serviceDesign: 'DESIGN DE SERVIÇOS',
    serviceDesc: 'Projetamos estruturas de serviço que alinham jornadas dos hóspedes com eficiência operacional e promessa da marca.',
    technicalReview: 'REVISÃO TÉCNICA &amp; CONFORMIDADE',
    technicalDesc: 'Avaliamos designs em relação a padrões de marca, códigos de construção e requisitos operacionais para garantir viabilidade.',
    implementationSupport: 'SUPORTE DE IMPLEMENTAÇÃO',
    implementationDesc: 'Fornecemos orientação durante construção e instalação para manter a integridade do design e qualidade.',
    strategicDesign: 'CONSULTORIA ESTRATÉGICA DE DESIGN',
    strategicDesc: 'Fornecemos aconselhamento estratégico e desenvolvemos diretrizes de design que garantem consistência e excelência em cada fase do projeto.',
    // Footer translations
    footerAboutTitle: 'SOBRE NÓS',
    footerAboutMeetFounder: 'Conheça a Fundadora',
    footerAboutWorkWithUs: 'Trabalhe Conosco',
    footerServicesTitle: 'SERVIÇOS',
    footerServicesDesign: 'Design',
    footerServicesStrategy: 'Estratégia',
    footerServicesConsulting: 'Consultoria',
    footerProjectsTitle: 'PROJETOS',
    footerProjectsHotels: 'Hotéis',
    footerProjectsFNB: 'GASTRONOMIA & BEBIDAS',
    footerProjectsSanctuaries: 'Santuários',
    footerContactTitle: 'CONTATO'
  }
};

export const useTranslation = () => {
  // Use Nuxt's useState for SSR-friendly state management
  const translations = useState('translations', () => translationsData);
  const currentLanguage = useState('language', () => {
    if (process.client) {
      const savedLanguage = localStorage.getItem('language');
      return savedLanguage || 'en';
    }
    return 'en';
  });
  
  // Testimonials data with translations
  const testimonialTranslations = useState('testimonialTranslations', () => {
    return {
      en: [
        {
          id: 1,
          author: "LAIS HAUSCHILD COBRA",
          text: "OARA brings a strong creative approach, but what truly sets its vision apart is how that creativity is always grounded in strategic intent. With a deep understanding of their clients' business ambitions, OARA acts not just as a design partner, but as a strategic consultancy, the kind that turns real estate into meaning, and ambition into legacy. They deliver with elegance, intuition, and a rare ability to weave artistic sensibility with operational intelligence.",
          focus_areas: ["creativity", "strategic thinking", "client understanding", "brand concepts", "meaningful experiences"]
        },
        {
          id: 2,
          author: "CRISTINA OPSVIK",
          text: "Jessica has a natural talent for leadership and for translating ideas and projects to diverse audiences with clarity and purpose. With a keen eye on the guest and end user, she proposes creative, tailored solutions — always grounded in feasibility and timelines. Today, through OARA, that same vision is amplified into a multidisciplinary consultancy that brings strategy, design, and precision to the heart of every project.",
          focus_areas: ["leadership", "communication", "customer focus", "creative solutions", "implementation", "project management"]
        },
        {
          id: 3,
          author: "FERNANDA BELIZARIO SANTOS FELIZOLA",
          text: "OARA is led by one of the most passionate and sharp professionals I've worked with. Today, that same vision translates into a consultancy that unites strategic rigor with sensorial placemaking, delivering spaces that are as operationally intelligent as they are emotionally resonant. Their creative force is not only powerful, it's contagious. OARA knows how to turn vision into spatial narrative, and experience into long-term value.",
          focus_areas: ["management", "passion", "organization", "project delivery", "space creation", "creativity"]
        },
        {
          id: 4,
          author: "INÊS DUQUE DIAS",
          text: "I had the pleasure of working with Jessica on a remarkable hospitality project we're developing in São Paulo, Brazil. Her professionalism, sharp leadership, and ability to guide multidisciplinary teams were evident from day one. She brings the rare combination of structure and creativity, with a natural entrepreneurial spirit and a deep sense of commitment. Jessica is a true problem-solver — strategic, experienced, and relentlessly focused on delivery. Now, OARA embodies that same excellence: a consultancy that thinks with precision, designs with emotion, and executes with clarity. And beyond all professional brilliance, working with her is simply a joy: kind, optimistic, and always constructive. I would recommend her and OARA, without hesitation.",
          focus_areas: ["hospitality", "professionalism", "leadership", "team management", "problem solving", "project management", "entrepreneurship", "interpersonal skills"]
        },
        {
          id: 5,
          author: "MARCOS BATOS",
          text: "I'd like to recommend OARA as a diligent and thorough consultancy with deep expertise in high-end hospitality and interior architecture. We've collaborated on large-scale developments for premium hotel groups in Brazil, and OARA consistently brings in-depth knowledge, strategic insight, and innovative solutions to elevate the quality and character of every space. Their ability to merge technical precision with conceptual creativity makes them a valuable partner in projects where excellence is non-negotiable.",
          focus_areas: ["hospitality interior design", "large-scale projects", "high-end hotel chains", "innovative solutions", "space quality"]
        },
        {
          id: 6,
          author: "RACHEL RATTERMAN",
          text: "Jessica was always willing to jump in and help in any way she could. She was able to consistently contribute to design with thoughtful and creative solutions. Through our time working together, I saw that she has many strengths in all aspects of the design process, from concept to completion. She is also very strong while dealing with clients, both in person and via email. She knows the importance of managing expectations, while also presenting herself very professionally for client facing meetings. I cannot recommend her enough as a colleague and design lead for projects.",
          focus_areas: ["collaboration", "design solutions", "full design process", "client relations", "expectation management", "professionalism", "design leadership"]
        }
      ],
      pt: [
        {
          id: 1,
          author: "LAIS HAUSCHILD COBRA",
          text: "A OARA traz uma abordagem criativa forte, mas o que realmente diferencia sua visão é como essa criatividade está sempre fundamentada em intenção estratégica. Com um profundo entendimento das ambições comerciais de seus clientes, a OARA atua não apenas como parceira de design, mas como consultoria estratégica, o tipo que transforma imóveis em significado e ambição em legado. Eles entregam com elegância, intuição e uma rara habilidade de entrelaçar sensibilidade artística com inteligência operacional.",
          focus_areas: ["criatividade", "pensamento estratégico", "entendimento do cliente", "conceitos de marca", "experiências significativas"]
        },
        {
          id: 2,
          author: "CRISTINA OPSVIK",
          text: "Jessica tem um talento natural para liderança e para traduzir ideias e projetos para públicos diversos com clareza e propósito. Com um olhar atento ao hóspede e ao usuário final, ela propõe soluções criativas e personalizadas — sempre fundamentadas em viabilidade e cronogramas. Hoje, através da OARA, essa mesma visão é ampliada em uma consultoria multidisciplinar que traz estratégia, design e precisão para o coração de cada projeto.",
          focus_areas: ["liderança", "comunicação", "foco no cliente", "soluções criativas", "implementação", "gestão de projetos"]
        },
        {
          id: 3,
          author: "FERNANDA BELIZARIO SANTOS FELIZOLA",
          text: "A OARA é liderada por uma das profissionais mais apaixonadas e perspicazes com quem já trabalhei. Hoje, essa mesma visão se traduz em uma consultoria que une rigor estratégico com placemaking sensorial, entregando espaços tão operacionalmente inteligentes quanto emocionalmente ressonantes. Sua força criativa não é apenas poderosa, é contagiante. A OARA sabe como transformar visão em narrativa espacial e experiência em valor de longo prazo.",
          focus_areas: ["gestão", "paixão", "organização", "entrega de projetos", "criação de espaços", "criatividade"]
        },
        {
          id: 4,
          author: "INÊS DUQUE DIAS",
          text: "Tive o prazer de trabalhar com Jessica em um notável projeto de hospitalidade que estamos desenvolvendo em São Paulo, Brasil. Seu profissionalismo, liderança perspicaz e capacidade de orientar equipes multidisciplinares foram evidentes desde o primeiro dia. Ela traz a rara combinação de estrutura e criatividade, com um espírito empreendedor natural e um profundo senso de compromisso. Jessica é uma verdadeira solucionadora de problemas — estratégica, experiente e incansavelmente focada na entrega. Agora, a OARA incorpora essa mesma excelência: uma consultoria que pensa com precisão, projeta com emoção e executa com clareza. E além de todo o brilhantismo profissional, trabalhar com ela é simplesmente uma alegria: gentil, otimista e sempre construtiva. Eu recomendaria ela e a OARA, sem hesitação.",
          focus_areas: ["hospitalidade", "profissionalismo", "liderança", "gestão de equipes", "resolução de problemas", "gestão de projetos", "empreendedorismo", "habilidades interpessoais"]
        },
        {
          id: 5,
          author: "MARCOS BATOS",
          text: "Gostaria de recomendar a OARA como uma consultoria diligente e completa com profunda experiência em hospitalidade de alto padrão e arquitetura de interiores. Colaboramos em desenvolvimentos de grande escala para grupos hoteleiros premium no Brasil, e a OARA traz consistentemente conhecimento aprofundado, visão estratégica e soluções inovadoras para elevar a qualidade e o caráter de cada espaço. Sua capacidade de mesclar precisão técnica com criatividade conceitual os torna um parceiro valioso em projetos onde a excelência é inegociável.",
          focus_areas: ["design de interiores em hospitalidade", "projetos de grande escala", "redes hoteleiras de alto padrão", "soluções inovadoras", "qualidade do espaço"]
        },
        {
          id: 6,
          author: "RACHEL RATTERMAN",
          text: "Jessica estava sempre disposta a ajudar de todas as formas possíveis. Ela conseguia contribuir consistentemente para o design com soluções criativas e bem pensadas. Durante nosso tempo trabalhando juntas, vi que ela tem muitos pontos fortes em todos os aspectos do processo de design, desde o conceito até a conclusão. Ela também é muito competente ao lidar com clientes, tanto pessoalmente quanto por e-mail. Ela conhece a importância de gerenciar expectativas, enquanto se apresenta de forma muito profissional em reuniões com clientes. Não posso recomendá-la o suficiente como colega e líder de design para projetos.",
          focus_areas: ["colaboração", "soluções de design", "processo completo de design", "relações com clientes", "gerenciamento de expectativas", "profissionalismo", "liderança em design"]
        }
      ]
    };
  });

  // Toggle language function
  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'en' ? 'pt' : 'en';
    // Store language preference in localStorage for persistence
    if (process.client) {
      localStorage.setItem('language', currentLanguage.value);
      localStorage.setItem('preferredLanguage', currentLanguage.value);
    }
  };
  
  // Translation helper function
  const t = (key) => {
    if (!translations.value[currentLanguage.value]) {
      return key;
    }
    return translations.value[currentLanguage.value][key] || key;
  };

  return {
    currentLanguage,
    translations: translations.value,
    testimonialTranslations: testimonialTranslations.value,
    toggleLanguage,
    t
  };
};
