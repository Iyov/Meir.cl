// Función para cargar datos geek desde JSON
async function loadGeekFacts() {
    try {
        const response = await fetch('js/dato_geek.json');
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al cargar los datos geek:', error);
        // Datos de respaldo en caso de error
        return {
            "es": {
                "01-01": {
                    "fact": "El primer bug informático fue una polilla real encontrada en la computadora Harvard Mark II en 1947.",
                    "source": "Historia de la informática"
                },
                "01-02": {
                    "fact": "El término 'Wi-Fi' no significa nada. Es solo un nombre comercial creado por una empresa de marketing.",
                    "source": "Curiosidades tecnológicas"
                },
                "12-31": {
                    "fact": "El primer mensaje enviado a través de ARPANET, predecesor de Internet, fue 'LO' en 1969. Se intentaba enviar 'LOGIN' pero el sistema se cayó.",
                    "source": "Historia de Internet"
                }
            },
            "en": {
                "01-01": {
                    "fact": "The first computer bug was a real moth found in the Harvard Mark II computer in 1947.",
                    "source": "Computer history"
                },
                "01-02": {
                    "fact": "The term 'Wi-Fi' doesn't mean anything. It's just a brand name created by a marketing company.",
                    "source": "Tech curiosities"
                },
                "12-31": {
                    "fact": "The first message sent over ARPANET, the predecessor of the Internet, was 'LO' in 1969. They were trying to send 'LOGIN' but the system crashed.",
                    "source": "Internet history"
                }
            }
        };
    }
}

// Obtener elementos DOM
const progressBar = document.getElementById('progressBar');
const backToTop = document.getElementById('backToTop');
const themeToggle = document.getElementById('themeToggle');
const languageToggle = document.getElementById('languageToggle');
const languageMenu = document.getElementById('languageMenu');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const factDate = document.getElementById('factDate');
const factText = document.getElementById('factText');
const factSource = document.getElementById('factSource');
const faqItems = document.querySelectorAll('.faq-item');

// Variable global para almacenar los datos geek
let geekFacts = {};

// Cargar preferencias del usuario
function loadUserPreferences() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedLanguage = localStorage.getItem('language') || 'es';
    
    // Aplicar tema
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Aplicar idioma
    changeLanguage(savedLanguage);
}

// Cambiar idioma
function changeLanguage(lang) {
    // Actualizar atributo lang del html
    document.documentElement.lang = lang;
    
    // Cambiar textos según el idioma
    const elements = document.querySelectorAll('[data-es], [data-en]');
    elements.forEach(element => {
        if (element.hasAttribute(`data-${lang}`)) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.value = element.getAttribute(`data-${lang}`);
            } else {
                element.textContent = element.getAttribute(`data-${lang}`);
            }
        }
    });
    
    // Actualizar el dato geek según el idioma
    updateGeekFact(lang);
    
    // Guardar preferencia
    localStorage.setItem('language', lang);
}

// Actualizar dato geek
function updateGeekFact(lang) {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const dateKey = `${month}-${day}`;
    
    // Formatear fecha según idioma
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(lang === 'es' ? 'es-CL' : 'en-US', options);
    
    factDate.textContent = formattedDate;
    
    // Obtener dato geek del día
    if (geekFacts[lang] && geekFacts[lang][dateKey]) {
        factText.textContent = geekFacts[lang][dateKey].fact;
        factSource.textContent = lang === 'es' 
            ? `Fuente: ${geekFacts[lang][dateKey].source}` 
            : `Source: ${geekFacts[lang][dateKey].source}`;
    } else {
        // Dato por defecto si no hay para ese día
        factText.textContent = lang === 'es' 
            ? "La tecnología más avanzada es indistinguible de la magia." 
            : "Any sufficiently advanced technology is indistinguishable from magic.";
        factSource.textContent = lang === 'es' 
            ? "Fuente: Arthur C. Clarke" 
            : "Source: Arthur C. Clarke";
    }
}

// Barra de progreso del scroll
window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / documentHeight) * 100;
    
    progressBar.style.width = scrollPercent + '%';
    
    // Mostrar/ocultar botón volver arriba
    if (scrollTop > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Volver arriba
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Cambiar tema
themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Mostrar/ocultar menú de idiomas
languageToggle.addEventListener('click', () => {
    languageMenu.classList.toggle('show');
});

// Cerrar menú de idiomas al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!languageToggle.contains(e.target) && !languageMenu.contains(e.target)) {
        languageMenu.classList.remove('show');
    }
});

// Cambiar idioma
document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        changeLanguage(lang);
        languageMenu.classList.remove('show');
    });
});

// Menú hamburguesa para móviles
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Cerrar menú al hacer clic en un enlace (móviles)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Acordeón de preguntas frecuentes
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Cerrar otros items abiertos
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // Abrir/cerrar el item actual
        item.classList.toggle('active');
    });
});

// Inicializar
document.addEventListener('DOMContentLoaded', async () => {
    // Cargar datos geek desde el archivo JSON
    geekFacts = await loadGeekFacts();
    
    // Cargar preferencias del usuario
    loadUserPreferences();
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});