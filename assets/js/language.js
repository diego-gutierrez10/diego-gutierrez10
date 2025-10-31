// Language Switcher for Portfolio

// Define translations
const translations = {
  // English translations (default)
  en: {
    nav: {
      projects: "Projects",
      trajectory: "Trajectory",
      skills: "Skills"
    },
    hero: {
      title: "Your Name",
      subtitle: "Web Developer & UX Designer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque.",
      button: "View Projects"
    },
    projects: {
      title: "Projects",
      project1: {
        category: "Web Development",
        title: "Project 1",
        description: "Brief description of the project. Technologies used, objectives and results obtained.",
        button: "View Details"
      },
      project2: {
        category: "UX/UI Design",
        title: "Project 2",
        description: "Brief description of the project. Technologies used, objectives and results obtained.",
        button: "View Details"
      },
      project3: {
        category: "Mobile Application",
        title: "Project 3",
        description: "Brief description of the project. Technologies used, objectives and results obtained.",
        button: "View Details"
      }
    },
    resume: {
      title: "Experience",
      experience1: {
        date: "2020 - Present",
        role: "Frontend Developer",
        company: "XYZ Company",
        description: "Responsibilities and achievements in the position. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."
      },
      experience2: {
        date: "2018 - 2020",
        role: "UX/UI Designer",
        company: "ABC Agency",
        description: "Responsibilities and achievements in the position. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."
      },
      education: {
        date: "2014 - 2018",
        degree: "Bachelor's Degree in Computer Science",
        institution: "XYZ University",
        description: "Relevant information about your academic background. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    },
    skills: {
      title: "Skills"
    },
    footer: {
      copyright: "© 2023 Your Name. All rights reserved."
    }
  },
  // Spanish translations
  es: {
    nav: {
      projects: "Proyectos",
      trajectory: "Trayectoria",
      skills: "Habilidades"
    },
    hero: {
      title: "Tu Nombre",
      subtitle: "Desarrollador Web & Diseñador UX",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque.",
      button: "Ver Proyectos"
    },
    projects: {
      title: "Proyectos",
      project1: {
        category: "Desarrollo Web",
        title: "Proyecto 1",
        description: "Descripción breve del proyecto. Tecnologías utilizadas, objetivos y resultados obtenidos.",
        button: "Ver Detalles"
      },
      project2: {
        category: "UX/UI Design",
        title: "Proyecto 2",
        description: "Descripción breve del proyecto. Tecnologías utilizadas, objetivos y resultados obtenidos.",
        button: "Ver Detalles"
      },
      project3: {
        category: "Aplicación Móvil",
        title: "Proyecto 3",
        description: "Descripción breve del proyecto. Tecnologías utilizadas, objetivos y resultados obtenidos.",
        button: "Ver Detalles"
      }
    },
    resume: {
      title: "Experiencia",
      experience1: {
        date: "2020 - Presente",
        role: "Desarrollador Frontend",
        company: "Empresa XYZ",
        description: "Responsabilidades y logros en el puesto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."
      },
      experience2: {
        date: "2018 - 2020",
        role: "Diseñador UX/UI",
        company: "Agencia ABC",
        description: "Responsabilidades y logros en el puesto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."
      },
      education: {
        date: "2014 - 2018",
        degree: "Licenciatura en Sistemas Computacionales",
        institution: "Universidad XYZ",
        description: "Información relevante sobre tu formación académica. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    },
    skills: {
      title: "Habilidades"
    },
    footer: {
      copyright: "© 2023 Tu Nombre. Todos los derechos reservados."
    }
  }
};

// DOM elements with translations
const translatableElements = [
  { selector: 'nav ul li:nth-child(1) a', key: 'nav.projects' },
  { selector: 'nav ul li:nth-child(2) a', key: 'nav.trajectory' },
  { selector: 'nav ul li:nth-child(3) a', key: 'nav.skills' },
  { selector: '.hero h1', key: 'hero.title' },
  { selector: '.hero p:first-of-type', key: 'hero.subtitle' },
  { selector: '.hero-description p', key: 'hero.description' },
  { selector: '.hero-buttons .btn-primary', key: 'hero.button' },
  { selector: '#projects .section-title', key: 'projects.title' },
  { selector: '#projects .project-card:nth-child(1) .project-category', key: 'projects.project1.category' },
  { selector: '#projects .project-card:nth-child(1) .project-title', key: 'projects.project1.title' },
  { selector: '#projects .project-card:nth-child(1) .project-description', key: 'projects.project1.description' },
  { selector: '#projects .project-card:nth-child(1) .btn-secondary', key: 'projects.project1.button' },
  { selector: '#projects .project-card:nth-child(2) .project-category', key: 'projects.project2.category' },
  { selector: '#projects .project-card:nth-child(2) .project-title', key: 'projects.project2.title' },
  { selector: '#projects .project-card:nth-child(2) .project-description', key: 'projects.project2.description' },
  { selector: '#projects .project-card:nth-child(2) .btn-secondary', key: 'projects.project2.button' },
  { selector: '#projects .project-card:nth-child(3) .project-category', key: 'projects.project3.category' },
  { selector: '#projects .project-card:nth-child(3) .project-title', key: 'projects.project3.title' },
  { selector: '#projects .project-card:nth-child(3) .project-description', key: 'projects.project3.description' },
  { selector: '#projects .project-card:nth-child(3) .btn-secondary', key: 'projects.project3.button' },
  { selector: '#resume .section-title', key: 'resume.title' },
  { selector: '#resume .timeline-item:nth-child(1) .timeline-date', key: 'resume.experience1.date' },
  { selector: '#resume .timeline-item:nth-child(1) h3', key: 'resume.experience1.role' },
  { selector: '#resume .timeline-item:nth-child(1) h4', key: 'resume.experience1.company' },
  { selector: '#resume .timeline-item:nth-child(1) p', key: 'resume.experience1.description' },
  { selector: '#resume .timeline-item:nth-child(2) .timeline-date', key: 'resume.experience2.date' },
  { selector: '#resume .timeline-item:nth-child(2) h3', key: 'resume.experience2.role' },
  { selector: '#resume .timeline-item:nth-child(2) h4', key: 'resume.experience2.company' },
  { selector: '#resume .timeline-item:nth-child(2) p', key: 'resume.experience2.description' },
  { selector: '#resume .timeline-item:nth-child(3) .timeline-date', key: 'resume.education.date' },
  { selector: '#resume .timeline-item:nth-child(3) h3', key: 'resume.education.degree' },
  { selector: '#resume .timeline-item:nth-child(3) h4', key: 'resume.education.institution' },
  { selector: '#resume .timeline-item:nth-child(3) p', key: 'resume.education.description' },
  { selector: '#skills .section-title', key: 'skills.title' },
  { selector: 'footer p', key: 'footer.copyright' }
];

// Function to get a nested value from an object using a dotted path
function getNestedValue(obj, path) {
  return path.split('.').reduce((prev, curr) => prev && prev[curr], obj);
}

// Function to update text content based on language
function updateLanguage(lang) {
  // Set current language in localStorage
  localStorage.setItem('lang', lang);
  
  // Update language toggle button
  document.querySelector('.lang-toggle .active').classList.remove('active');
  document.querySelector(`.lang-toggle [data-lang="${lang}"]`).classList.add('active');
  
  // Update text for all translatable elements
  translatableElements.forEach(element => {
    const elements = document.querySelectorAll(element.selector);
    if (elements.length) {
      elements.forEach(el => {
        const translation = getNestedValue(translations[lang], element.key);
        if (translation) {
          el.textContent = translation;
        }
      });
    }
  });
  
  // Update document language attribute
  document.documentElement.lang = lang;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  // Get language from localStorage or default to English
  const currentLang = localStorage.getItem('lang') || 'en';
  
  // Add click event listeners to language toggle buttons
  const langButtons = document.querySelectorAll('.lang-toggle button');
  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('data-lang');
      updateLanguage(lang);
    });
  });
  
  // Set initial language
  updateLanguage(currentLang);
}); 