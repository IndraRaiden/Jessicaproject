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
    strategicDesc: 'We provide strategic counsel and develop design guidelines that ensure consistency and excellence at every project phase.'
  },
  pt: {
    heroText: '',
    // WindowTwo translations
    introText: 'Criamos destinos imobiliários imersivos\nque maximizam o valor do ativo e fazem as pessoas se sentirem vivas.',
    findOutMore: 'SAIBA MAIS',
    hotels: 'HOTÉIS',
    // WindowThree translations
    foodAndBeverage: 'GASTRONOMIA &amp; BEBIDAS',
    // WindowFour translations
    sanctuaries: 'SANTUÁRIOS',
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
    strategicDesc: 'Fornecemos aconselhamento estratégico e desenvolvemos diretrizes de design que garantem consistência e excelência em cada fase do projeto.'
  }
};

export const useTranslation = () => {
  // Use Nuxt's useState for SSR-friendly state management
  const translations = useState('translations', () => translationsData);
  const currentLanguage = useState('currentLanguage', () => {
    // Default to 'en', but check localStorage if we're on the client
    if (process.client) {
      const saved = localStorage.getItem('preferredLanguage');
      return saved || 'en';
    }
    return 'en';
  });

  // Toggle language function
  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'en' ? 'pt' : 'en';
    // Store language preference in localStorage for persistence
    if (process.client) {
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
    toggleLanguage,
    t
  };
};
