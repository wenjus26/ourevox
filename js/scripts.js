const translations = {
    en: {
        nav_solutions: "Solutions",
        nav_services: "Services",
        nav_cases: "Case Study",
        nav_about: "About",
        btn_demo: "Book a Demo",
        hero_title: "Transforming Business Efficiency Through Automation & Intelligence",
        hero_desc: "We help companies work faster, smarter, and more efficiently through cutting-edge operational transformation.",
        btn_get_started: "Get Started",
        btn_consultation: "Book a Consultation",
        prob_title: "Breaking the Barriers to Growth",
        services_title: "Enterprise-Grade Services"
    },
    fr: {
        nav_solutions: "Solutions",
        nav_services: "Services",
        nav_cases: "Études de cas",
        nav_about: "À Propos",
        btn_demo: "Réserver une Démo",
        hero_title: "Transformer l'Efficacité des Affaires par l'Automatisation et l'Intelligence",
        hero_desc: "Nous aidons les entreprises à travailler plus vite, plus intelligemment et plus efficacement grâce à une transformation opérationnelle de pointe.",
        btn_get_started: "Commencer",
        btn_consultation: "Prendre RDV",
        prob_title: "Lever les Freins à la Croissance",
        services_title: "Services de Classe Entreprise"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    updateContent();
    document.getElementById('lang-btn-text').textContent = currentLang.toUpperCase();
}

function updateContent() {
    const langData = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langData[key]) {
            el.textContent = langData[key];
        }
    });
    document.title = currentLang === 'en' ? "Ourevox | Transforming Business Efficiency" : "Ourevox | Transformer l'Efficacité des Affaires";
    document.documentElement.lang = currentLang;
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-overlay');
    const isActive = menu.classList.toggle('active');
    
    if (isActive) {
        overlay.style.display = 'block';
        setTimeout(() => overlay.style.opacity = '1', 10);
        document.body.style.overflow = 'hidden';
    } else {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.style.display = 'none', 500);
        document.body.style.overflow = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    
    // Initialize reveal animations
    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });
});

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        // Optional: remove from DOM after fade
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 800);
    }
});
