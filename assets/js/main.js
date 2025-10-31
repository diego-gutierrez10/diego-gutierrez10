// Main JavaScript for Portfolio

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Apply fade-in animations to elements
  const animatedElements = document.querySelectorAll('.fade-in');
  
  // Add intersection observer for animation triggers
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach(element => {
    element.style.opacity = 0;
    observer.observe(element);
  });
  
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only process links to sections on the same page
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          // Close mobile menu if open when clicking a link
          const headerContainer = document.querySelector('header .container');
          if (headerContainer && headerContainer.classList.contains('menu-active')) {
              headerContainer.classList.remove('menu-active');
          }
          
          window.scrollTo({
            top: targetSection.offsetTop - 100, // Ajustar offset si es necesario por el header flotante
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Project card hover effects
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
    });
  });
  
  // Mobile navigation toggle - Updated for Island Style
  const mobileNavToggle = document.querySelector('.menu-toggle');
  const headerContainer = document.querySelector('header .container'); // Target the container now
  
  if (mobileNavToggle && headerContainer) {
    mobileNavToggle.addEventListener('click', () => {
      headerContainer.classList.toggle('menu-active'); // Toggle class on the container
      // Optionally toggle an icon class if using FontAwesome (e.g., fa-bars to fa-times)
      const icon = mobileNavToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });
  }
    
  // Language translation functionality
  const translations = {
    en: {
        // Navigation
        'nav.projects': 'Projects',
        'nav.trajectory': 'Trajectory',
        'nav.skills': 'Skills',
        
        // Hero section
        'hero.role': 'Aspiring Data Scientist',
        'hero.description': 'Data Science undergraduate student, interested in statistics, machine learning, and artificial intelligence. Currently building personal projects.',
        'hero.cta': 'View Projects',
        
        // Projects section
        'projects.title': 'Projects',
        'projects.project1.category': 'Web Development',
        'projects.project1.title': 'Project 1',
        'projects.project1.description': 'Brief description of the project. Technologies used, objectives and results obtained.',
        'projects.project2.category': 'UX/UI Design',
        'projects.project2.title': 'Project 2',
        'projects.project2.description': 'Brief description of the project. Technologies used, objectives and results obtained.',
        'projects.project3.category': 'Mobile Application',
        'projects.project3.title': 'Project 3',
        'projects.project3.description': 'Brief description of the project. Technologies used, objectives and results obtained.',
        'projects.viewDetails': 'View Details',
        
        // Trajectory section (Replaces Resume)
        'trajectory.title': 'Trajectory',
        'trajectory.educationTitle': 'Education',
        'trajectory.experienceTitle': 'Experience',
        
        // Experience items (renamed keys)
        'trajectory.experience1.title': 'Sales Automation Manager',
        'trajectory.experience1.company': 'Smartlands - Real Estate',
        'trajectory.experience1.date': 'Dec 2024 - Present',
        'trajectory.experience1.description': 'Implemented an automated sales funnel integrating CRM and ad platforms; acquired a custom domain and built high-converting landing pages.',
        'trajectory.experience2.title': 'Advertising Developer and Community Manager',
        'trajectory.experience2.company': 'PRB Financial Services - Insurance',
        'trajectory.experience2.date': 'Aug 2023 - Jul 2024',
        'trajectory.experience2.description': 'Produced multimedia content for web and social media; automated lead generation through targeted campaigns.',
        
        // Education items (renamed keys)
        'trajectory.education1.title': 'Bachelor of Data Science',
        'trajectory.education1.institution': 'Universidad Autónoma de Baja California, Ensenada',
        'trajectory.education1.date': 'Aug 2022 - Present',
        'trajectory.education1.description': 'Undergraduate program focused on data analysis, statistics, and machine learning.',
        
        // Education 2 - Nueva tarjeta
        'trajectory.education2.title': 'General High School: GPA 4.0/4.0',
        'trajectory.education2.institution': 'Centro de Enseñanza Técnica y Superior, Ensenada',
        'trajectory.education2.date': 'Aug 2018 - May 2021',
        'trajectory.education2.description': 'General studies with outstanding academic performance.',
        
        // Skills section
        'skills.title': 'Skills & Technologies',
        
        // Footer
        'footer.copyright': '© 2025 Diego A. Gutiérrez. All rights reserved.'
    },
    es: {
        // Navegación
        'nav.projects': 'Proyectos',
        'nav.trajectory': 'Trayectoria',
        'nav.skills': 'Habilidades',
        
        // Sección Hero
        'hero.role': 'Aspirante a Científico de Datos',
        'hero.description': 'Estudiante de Licenciatura en Ciencia de Datos, interesado en estadística, aprendizaje automático e inteligencia artificial. Actualmente emprendiendo proyectos personales.',
        'hero.cta': 'Ver Proyectos',
        
        // Sección Proyectos
        'projects.title': 'Proyectos',
        'projects.project1.category': 'Desarrollo Web',
        'projects.project1.title': 'Proyecto 1',
        'projects.project1.description': 'Breve descripción del proyecto. Tecnologías utilizadas, objetivos y resultados obtenidos.',
        'projects.project2.category': 'Diseño UX/UI',
        'projects.project2.title': 'Proyecto 2',
        'projects.project2.description': 'Breve descripción del proyecto. Tecnologías utilizadas, objetivos y resultados obtenidos.',
        'projects.project3.category': 'Aplicación Móvil',
        'projects.project3.title': 'Proyecto 3',
        'projects.project3.description': 'Breve descripción del proyecto. Tecnologías utilizadas, objetivos y resultados obtenidos.',
        'projects.viewDetails': 'Ver Detalles',
        
        // Sección Trayectoria (Replaces Resume/CV)
        'trajectory.title': 'Trayectoria',
        'trajectory.educationTitle': 'Educación',
        'trajectory.experienceTitle': 'Experiencia',
        
        // Elementos de Experiencia (claves renombradas)
        'trajectory.experience1.title': 'Gerente de Automatización de Ventas',
        'trajectory.experience1.company': 'Smartlands - Real Estate',
        'trajectory.experience1.date': 'Dic 2024 - Presente',
        'trajectory.experience1.description': 'Implementé un embudo de ventas automatizado integrando CRM y plataformas de anuncios; adquirí un dominio propio y construí landing pages de alta conversión.',
        'trajectory.experience2.title': 'Desarrollador de Publicidad y Community Manager',
        'trajectory.experience2.company': 'PRB Financial Services - Insurance',
        'trajectory.experience2.date': 'Ago 2023 - Jul 2024',
        'trajectory.experience2.description': 'Producción de contenido multimedia para web y redes sociales; automatización de generación de leads con campañas segmentadas.',

        // Elementos de Educación (claves renombradas)
        'trajectory.education1.title': 'Licenciatura en Ciencia de Datos',
        'trajectory.education1.institution': 'Universidad Autónoma de Baja California, Ensenada',
        'trajectory.education1.date': 'Ago 2022 - Presente',
        'trajectory.education1.description': 'Programa de pregrado enfocado en análisis de datos, estadística y aprendizaje automático.',
        
        // Educación 2 - Nueva tarjeta
        'trajectory.education2.title': 'Bachillerato General: GPA 4.0/4.0',
        'trajectory.education2.institution': 'Centro de Enseñanza Técnica y Superior, Ensenada',
        'trajectory.education2.date': 'Ago 2018 - May 2021',
        'trajectory.education2.description': 'Estudios generales con desempeño académico sobresaliente.',
        
        // Sección Habilidades
        'skills.title': 'Habilidades y Tecnologías',
        
        // Pie de página
        'footer.copyright': '© 2025 Diego A. Gutiérrez. Todos los derechos reservados.'
    }
  };

  // Set default language
  let currentLang = 'en';

  // Function to update content based on selected language
  function updateContent(lang) {
      // Update the switch state
      const langSwitch = document.getElementById('langSwitch');
      langSwitch.setAttribute('data-active', lang);
      
      // Update all translatable elements
      document.querySelectorAll('[data-i18n]').forEach(element => {
          const key = element.getAttribute('data-i18n');
          if (translations[lang][key]) {
              // Handle different element types
              if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                  element.placeholder = translations[lang][key];
              } else {
                  element.textContent = translations[lang][key];
              }
          }
      });
      
      // Update html lang attribute
      document.documentElement.lang = lang;
      
      // Save language preference
      localStorage.setItem('preferred-language', lang);
      currentLang = lang;
  }
  
  // Set up language toggle switch
  const langSwitch = document.getElementById('langSwitch');
  if (langSwitch) {
      langSwitch.addEventListener('click', () => {
          const newLang = currentLang === 'en' ? 'es' : 'en';
          updateContent(newLang);
          
          // Close mobile menu if open when switching language
          const headerContainer = document.querySelector('header .container');
          if (headerContainer && headerContainer.classList.contains('menu-active')) {
              headerContainer.classList.remove('menu-active');
              const icon = document.querySelector('.menu-toggle i');
              if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
              }
          }
      });
  }
  
  // Check for saved language preference, otherwise use browser language
  const savedLang = localStorage.getItem('preferred-language');
  const browserLang = navigator.language.substring(0, 2);
  const initialLang = savedLang || (browserLang === 'es' ? 'es' : 'en');
  
  // Set initial language
  updateContent(initialLang);
  
  // // Mobile menu functionality (Old - Replaced above)
  // const menuToggle = document.querySelector('.menu-toggle');
  // const nav = document.querySelector('nav');
  // if (menuToggle) {
  //     menuToggle.addEventListener('click', () => {
  //         nav.classList.toggle('active');
  //     });
  // }
}); 