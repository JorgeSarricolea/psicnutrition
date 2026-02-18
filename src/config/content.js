/**
 * Contenido del negocio – Clínica PsicNutrition.
 * Centralizar aquí toda la información para no hardcodear en componentes.
 * Las secciones se muestran u ocultan según la presencia de datos (opcionales).
 */

export const site = {
  name: 'Clínica PsicNutrition',
  shortName: 'PsicNutrition',
  tagline: 'Nutrición y Psicología en Mérida, Yucatán',
  description:
    'Clínica especializada en nutrición y psicología. Atención personalizada, espacio inclusivo y profesionales comprometidos con tu bienestar integral.',
  rating: 5.0,
  reviewCount: 68,
};

export const contact = {
  phone: '999 160 5528',
  phoneTel: 'tel:+529991605528',
  whatsapp: 'https://wa.me/529991605528',
  address: 'C. 41 X 22 y 24 #364, Fracc. Juan Pablo II, 97246 Mérida, Yuc.',
  plusCode: 'X89C+4G Mérida, Yucatán',
  facebook: 'https://www.facebook.com/PsicNutritionMID/',
  instagram: 'psicnutritionmid',
  email: 'psicnutritionmid@gmail.com',
};

export const hours = [
  { days: 'Lunes a viernes', hours: '9:00 a.m. – 8:00 p.m.' },
  { days: 'Sábado', hours: '9:00 a.m. – 2:00 p.m.' },
  { days: 'Domingo', hours: 'Cerrado' },
];

export const mapEmbed = {
  enabled: true,
  iframeSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14902.481199261618!2d-89.69769491284185!3d20.967758100000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56736856022a7d%3A0x60e8a33c960c208!2sCl%C3%ADnica%20PsicNutrition!5e0!3m2!1ses-419!2smx!4v1771430177417!5m2!1ses-419!2smx',
  title: 'Ubicación de Clínica PsicNutrition en Google Maps',
};

export const services = [
  { icon: 'Restaurant', title: 'Consulta nutricional', text: 'Planes de alimentación personalizados con nuestra nutrióloga especialista.' },
  { icon: 'Psychology', title: 'Psicología clínica', text: 'Terapia individual con enfoque profesional y empático para tu bienestar emocional.' },
  { icon: 'Healing', title: 'Tratamiento de TCA', text: 'Acompañamiento integral para trastornos de conducta alimentaria.' },
  { icon: 'MonitorWeight', title: 'Control de peso', text: 'Seguimiento profesional para alcanzar y mantener tu peso saludable.' },
  { icon: 'Bloodtype', title: 'Salud metabólica', text: 'Manejo de resistencia a la insulina, glucosa y perfiles metabólicos.' },
  { icon: 'Diversity1', title: 'Terapia integral', text: 'Abordaje conjunto de nutrición y psicología para resultados duraderos.' },
];

export const features = [
  {
    icon: 'Diversity3',
    title: 'Amigable con LGBTQ+',
    text: 'Espacio respetuoso e inclusivo para todas las personas.',
  },
  {
    icon: 'Transgender',
    title: 'Espacio seguro trans',
    text: 'Espacio seguro para personas transgénero.',
  },
  {
    icon: 'Wc',
    title: 'Sanitarios unisex',
    text: 'Sanitarios unisex disponibles para comodidad de todos.',
  },
  {
    icon: 'Verified',
    title: 'Calificación 5.0',
    text: '68 opiniones con calificación perfecta avalan nuestra atención.',
  },
];

export const planning = {
  enabled: true,
  title: 'Agenda tu cita',
  description:
    'Se requiere cita previa para garantizar una atención personalizada. Contáctanos por teléfono o WhatsApp para reservar tu consulta.',
  ctaText: 'Agendar por WhatsApp',
  ctaHref: 'https://wa.me/529991605528',
};

export const payments = {
  enabled: true,
  title: 'Formas de pago',
  description: 'Aceptamos diversos métodos de pago para tu comodidad.',
  methods: [
    'Tarjetas de débito',
    'Efectivo',
    'Transferencia bancaria',
  ],
};

export const parking = {
  enabled: false,
};

export const testimonials = [
  {
    quote: 'Llegué con más de 15 kilos por bajar, glucosa alta, resistencia a la insulina y un diagnóstico de TCA. No solo logré revertir lo físico, sino que también mejoré muchísimo mi relación con la comida.',
    author: 'Valeria R.',
  },
  {
    quote: 'Un excelente psicólogo que sabe como hacer sentir cómodos a sus pacientes, ha sido de gran ayuda para mi hija que ha tenido un gran cambio para bien.',
    author: 'Martha Z.',
  },
  {
    quote: 'La nutri y el psic no solo son excelentes profesionales, sino también excelentes personas. Te hacen sentir bienvenida y cómoda en todo momento.',
    author: 'Angela A.',
  },
  {
    quote: 'Mi vida ha cambiado muchísimo gracias a la terapia que llevo con él.',
    author: null,
  },
  {
    quote: 'Me siento profundamente agradecida por todo lo que aprendí con ella.',
    author: null,
  },
  {
    quote: 'Excelente psicólogo, me encanta la remodelación que hicieron.',
    author: null,
  },
];

export const galleryImages = [
  { src: '/sala-espera.png', alt: 'Sala de espera de Clínica PsicNutrition' },
  { src: '/consultorio.png', alt: 'Consultorio de Clínica PsicNutrition' },
  { src: '/fachada.png', alt: 'Fachada exterior de Clínica PsicNutrition' },
];

export const hero = {
  backgroundImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920&q=85',
  subtitle: site.tagline,
  ctaPrimary: { text: 'Agendar cita', href: 'https://wa.me/529991605528' },
  ctaSecondary: { text: 'Conocer servicios', href: '#servicios' },
};
