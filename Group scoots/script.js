// Données des scouts - Groupe NDP créé en 1949 à la Cathédrale Notre Dame de la Paix
const scoutsData = [
    {
        id: 1,
        name: "Jean-Pierre MULUMBA",
        age: 14,
        category: "louveteaux",
        role: "Louveteau",
        photo: null,
        joinedDate: "2022-09-01",
        specialite: "Artisanat"
    },
    {
        id: 2,
        name: "Marie KABEYA",
        age: 16,
        category: "eclaireurs",
        role: "Éclaireuse",
        photo: null,
        joinedDate: "2021-03-15",
        specialite: "Secourisme"
    },
    {
        id: 3,
        name: "Thomas BAHATI",
        age: 18,
        category: "pionniers",
        role: "Pionnier",
        photo: null,
        joinedDate: "2020-06-20",
        specialite: "Navigation"
    },
    {
        id: 4,
        name: "Grace MULANGA",
        age: 15,
        category: "eclaireurs",
        role: "Éclaireuse",
        photo: null,
        joinedDate: "2022-01-10",
        specialite: "Cuisine"
    },
    {
        id: 5,
        name: "David LUBAYA",
        age: 13,
        category: "louveteaux",
        role: "Louveteau",
        photo: null,
        joinedDate: "2023-02-28",
        specialite: "Musique"
    },
    {
        id: 6,
        name: "Sarah KABONGO",
        age: 20,
        category: "routiers",
        role: "Routière",
        photo: null,
        joinedDate: "2019-09-15",
        specialite: "Leadership"
    },
    {
        id: 7,
        name: "Michel KAHAMBA",
        age: 17,
        category: "pionniers",
        role: "Pionnier",
        photo: null,
        joinedDate: "2021-07-22",
        specialite: "Construction"
    },
    {
        id: 8,
        name: "Esther MBIKAYI",
        age: 14,
        category: "louveteaux",
        role: "Louveteau",
        photo: null,
        joinedDate: "2023-01-05",
        specialite: "Théâtre"
    }
];

// Données des chefs - Suite de la tradition depuis le Père VUYLSTEKE en 1949
const chefsData = [
    {
        id: 1,
        name: "Père Antoine MULUMBA",
        title: "Chef de Groupe",
        description: "Expérimenté dans le scoutisme depuis plus de 15 ans, il assure la direction spirituelle et administrative du groupe, dans la continuité de la tradition initiée par le Père VUYLSTEKE en 1949.",
        photo: null,
        responsibilities: [
            "Coordination générale du groupe",
            "Formation des chefs",
            "Relations avec les parents",
            "Planification des activités"
        ],
        experience: "15 ans",
        email: "chef@scoutsndp.com"
    },
    {
        id: 2,
        name: "Marie-Louise KABEYA",
        title: "Cheffe des Louveteaux",
        description: "Spécialiste de l'animation des plus jeunes, elle crée des activités ludiques et éducatives adaptées aux 8-12 ans.",
        photo: null,
        responsibilities: [
            "Animation des louveteaux",
            "Préparation des jeux",
            "Suivi individuel",
            "Communication avec les parents"
        ],
        experience: "8 ans",
        email: "louveteaux@scoutsndp.com"
    },
    {
        id: 3,
        name: "Jean-Pierre BAHATI",
        title: "Chef des Éclaireurs",
        description: "Passionné d'aventure et de nature, il encadre les adolescents dans leur développement personnel et technique.",
        photo: null,
        responsibilities: [
            "Formation technique",
            "Organisation des camps",
            "Sécurité des activités",
            "Développement des compétences"
        ],
        experience: "10 ans",
        email: "eclaireurs@scoutsndp.com"
    },
    {
        id: 4,
        name: "Grace MULANGA",
        title: "Cheffe des Pionniers",
        description: "Forte en projets communautaires, elle guide les jeunes dans la réalisation d'actions solidaires.",
        photo: null,
        responsibilities: [
            "Projets communautaires",
            "Développement du leadership",
            "Encadrement des projets",
            "Partenariats locaux"
        ],
        experience: "6 ans",
        email: "pionniers@scoutsndp.com"
    },
    {
        id: 5,
        name: "David LUBAYA",
        title: "Chef des Routiers",
        description: "Mentor pour les jeunes adultes, il les accompagne dans leur transition vers la vie active et responsable.",
        photo: null,
        responsibilities: [
            "Accompagnement personnel",
            "Orientation professionnelle",
            "Projets d'engagement",
            "Réseau d'anciens scouts"
        ],
        experience: "12 ans",
        email: "routiers@scoutsndp.com"
    },
    {
        id: 6,
        name: "Sarah KABONGO",
        title: "Trésorière",
        description: "Gère les finances du groupe avec rigueur et transparence pour assurer la pérennité des activités.",
        photo: null,
        responsibilities: [
            "Gestion budgétaire",
            "Collecte des cotisations",
            "Rapports financiers",
            "Recherche de financements"
        ],
        experience: "5 ans",
        email: "tresorerie@scoutsndp.com"
    },
    {
        id: 7,
        name: "Michel KAHAMBA",
        title: "Secrétaire",
        description: "Assure la communication interne et externe du groupe, ainsi que la gestion administrative.",
        photo: null,
        responsibilities: [
            "Communication",
            "Gestion administrative",
            "Archivage",
            "Correspondance"
        ],
        experience: "4 ans",
        email: "secretariat@scoutsndp.com"
    },
    {
        id: 8,
        name: "Esther MBIKAYI",
        title: "Responsable Formation",
        description: "Développe les programmes de formation pour les scouts et les chefs du groupe.",
        photo: null,
        responsibilities: [
            "Programmes de formation",
            "Évaluation des compétences",
            "Formation continue",
            "Pédagogie scoute"
        ],
        experience: "7 ans",
        email: "formation@scoutsndp.com"
    }
];

// Données de la galerie
const galleryData = [
    {
        id: 1,
        title: "Cathédrale Notre Dame de la Paix",
        description: "Notre magnifique cathédrale de Bukavu, lieu de rassemblement du groupe scout NDP",
        category: "ceremonies",
        image: "images/cathedrale_bukavu.jpg"
    },
    {
        id: 2,
        title: "Camp d'été 2024",
        description: "Camp annuel dans la région de Kalehe",
        category: "camps",
        image: null
    },
    {
        id: 3,
        title: "Cérémonie de promesse",
        description: "Nouveaux scouts font leur promesse",
        category: "ceremonies",
        image: null
    },
    {
        id: 4,
        title: "Journée communautaire",
        description: "Nettoyage de la ville de Bukavu",
        category: "service",
        image: null
    },
    {
        id: 5,
        title: "Randonnée au Mont Kahuzi",
        description: "Expédition dans le parc national",
        category: "randonnees",
        image: null
    },
    {
        id: 6,
        title: "Formation secourisme",
        description: "Atelier de premiers secours",
        category: "formation",
        image: null
    },
    {
        id: 7,
        title: "Fête scoute 2024",
        description: "Célébration de la journée mondiale du scoutisme",
        category: "evenements",
        image: null
    },
    {
        id: 8,
        title: "Construction d'abris",
        description: "Projet communautaire dans un village rural",
        category: "service",
        image: null
    },
    {
        id: 9,
        title: "Veillée de Noël",
        description: "Célébration spirituelle du groupe",
        category: "ceremonies",
        image: null
    }
];

// Fonction pour créer les cartes des scouts
function createScoutCard(scout) {
    const card = document.createElement('div');
    card.className = 'scout-card';
    card.dataset.category = scout.category;
    
    const initials = scout.name.split(' ').map(n => n[0]).join('');
    
    card.innerHTML = `
        <div class="scout-photo">
            <i class="fas fa-chess-rook"></i>
        </div>
        <div class="scout-info">
            <h3 class="scout-name">${scout.name}</h3>
            <p class="scout-role">${scout.role}</p>
            <p class="scout-specialite">Spécialité: ${scout.specialite}</p>
            <span class="scout-age">${scout.age} ans</span>
        </div>
    `;
    
    return card;
}

// Fonction pour créer les cartes des chefs
function createChefCard(chef) {
    const card = document.createElement('div');
    card.className = 'chef-card';
    
    const initials = chef.name.split(' ').map(n => n[0]).join('');
    
    card.innerHTML = `
        <div class="chef-photo">
            <i class="fas fa-chess-rook"></i>
        </div>
        <div class="chef-info">
            <h3 class="chef-name">${chef.name}</h3>
            <p class="chef-title">${chef.title}</p>
            <p class="chef-description">${chef.description}</p>
            <div class="chef-responsibilities">
                <h4>Responsabilités:</h4>
                <ul>
                    ${chef.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
            </div>
            <p class="chef-experience">Expérience: ${chef.experience}</p>
            <p class="chef-email">📧 ${chef.email}</p>
        </div>
    `;
    
    return card;
}

// Fonction pour créer les éléments de la galerie
function createGalleryItem(item) {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    
    if (item.image) {
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" />
            <div class="gallery-overlay">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>
        `;
    } else {
        galleryItem.innerHTML = `
            <div class="gallery-placeholder">
                <i class="fas fa-chess-rook"></i>
            </div>
            <div class="gallery-overlay">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>
        `;
    }
    
    return galleryItem;
}

// Fonction pour afficher les scouts
function displayScouts(category = 'all') {
    const scoutsGrid = document.getElementById('scoutsGrid');
    scoutsGrid.innerHTML = '';
    
    console.log('Site Scouts NDP chargé avec succès!');
}

// Données des événements
let eventsData = [
    {
        id: 1,
        name: "Camp de Pâques",
        date: "2026-04-15",
        location: "Parc National de Kahuzi-Biega",
        description: "Camp annuel avec activités de randonnée, veillées et formation scout."
    },
    {
        id: 2,
        name: "Journée du Scoutisme",
        date: "2026-05-22",
        location: "Terrain des Scouts NDP",
        description: "Célébration de la fondation du scoutisme avec jeux, compétitions et remise de badges."
    }
];

// Gestion du formulaire d'ajout d'événement
document.addEventListener('DOMContentLoaded', function() {
    const addEventForm = document.getElementById('addEventForm');
    const soutienForm = document.getElementById('soutienForm');

    // Formulaire d'événement
    if (addEventForm) {
        addEventForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const eventName = document.getElementById('eventName').value;
            const eventDate = document.getElementById('eventDate').value;
            const eventLocation = document.getElementById('eventLocation').value;
            const eventDescription = document.getElementById('eventDescription').value;
            
            // Créer le nouvel événement
            const newEvent = {
                id: eventsData.length + 1,
                name: eventName,
                date: eventDate,
                location: eventLocation,
                description: eventDescription
            };
            
            // Ajouter à la liste des événements
            eventsData.push(newEvent);
            
            // Ajouter l'événement à l'affichage
            addEventToList(newEvent);
            
            // Réinitialiser le formulaire
            addEventForm.reset();
            
            // Afficher un message de confirmation
            showNotification('Événement ajouté avec succès!', 'success');
        });
    }

    // Formulaire de soutien
    if (soutienForm) {
        soutienForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const sponsorName = document.getElementById('sponsorName').value;
            const sponsorEmail = document.getElementById('sponsorEmail').value;
            const sponsorPhone = document.getElementById('sponsorPhone').value;
            const sponsorType = document.getElementById('sponsorType').value;
            const sponsorMessage = document.getElementById('sponsorMessage').value;
            
            // Simuler l'envoi du formulaire
            const supportData = {
                name: sponsorName,
                email: sponsorEmail,
                phone: sponsorPhone,
                type: sponsorType,
                message: sponsorMessage,
                timestamp: new Date().toISOString()
            };
            
            // Sauvegarder localement (dans un vrai projet, cela serait envoyé à un serveur)
            console.log('Données de soutien:', supportData);
            
            // Réinitialiser le formulaire
            soutienForm.reset();
            
            // Afficher un message de confirmation
            showNotification('Merci pour votre soutien! Nous vous contacterons bientôt.', 'success');
        });
    }
});

// Fonction pour ajouter un événement à la liste
function addEventToList(event) {
    const eventsList = document.getElementById('eventsList');
    if (!eventsList) return;
    
    // Formater la date
    const date = new Date(event.date);
    const day = date.getDate();
    const month = date.toLocaleDateString('fr-FR', { month: 'short' }).toUpperCase();
    
    // Créer l'élément événement
    const eventItem = document.createElement('div');
    eventItem.className = 'event-item';
    eventItem.innerHTML = `
        <div class="event-date">
            <span class="day">${day}</span>
            <span class="month">${month}</span>
        </div>
        <div class="event-details">
            <h3>${event.name}</h3>
            <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
            <p><i class="fas fa-calendar"></i> ${formatDate(event.date)}</p>
            <p class="event-description">${event.description}</p>
        </div>
    `;
    
    // Ajouter au début de la liste
    eventsList.insertBefore(eventItem, eventsList.firstChild);
    
    // Animation d'entrée
    eventItem.style.opacity = '0';
    eventItem.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        eventItem.style.transition = 'all 0.5s ease';
        eventItem.style.opacity = '1';
        eventItem.style.transform = 'translateY(0)';
    }, 100);
}

// Fonction pour formater la date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Fonction pour afficher des notifications
function showNotification(message, type = 'info') {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style de la notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        color: white;
        font-weight: bold;
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 300px;
    `;
    
    // Couleur selon le type
    switch(type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #f44336, #da190b)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #2196F3, #1976D2)';
    }
    
    // Ajouter au DOM
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Retrait automatique
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Fonction pour afficher les scouts
function displayScouts(category = 'all') {
    const scoutsGrid = document.getElementById('scoutsGrid');
    scoutsGrid.innerHTML = '';
    
    const filteredScouts = category === 'all' 
        ? scoutsData 
        : scoutsData.filter(scout => scout.category === category);
    
    filteredScouts.forEach(scout => {
        const card = createScoutCard(scout);
        scoutsGrid.appendChild(card);
    });
}

// Médias - Données et fonctionnalités
let mediasData = [
    {
        id: 1,
        title: "Camp d'été 2024",
        type: "photo",
        category: "camps",
        description: "Parc National de Kahuzi-Biega",
        date: "2024-07-15",
        file: "camp-ete-2024.jpg"
    },
    {
        id: 2,
        title: "Randonnée Montagne",
        type: "video",
        category: "sorties",
        description: "Exploration des sentiers de Bukavu",
        date: "2024-03-20",
        file: "randonnee-montagne.mp4",
        duration: "12:45"
    },
    {
        id: 3,
        title: "Journée du Scoutisme",
        type: "photo",
        category: "sorties",
        description: "Célébration annuelle",
        date: "2024-05-22",
        file: "journee-scoutisme-2024.jpg"
    },
    {
        id: 4,
        title: "Veillée de Camp",
        type: "video",
        category: "camps",
        description: "Chants et animations autour du feu",
        date: "2024-08-10",
        file: "veille-camp.mp4",
        duration: "08:30"
    }
];

// NAVIGATION SIMPLE ET GARANTIE - SOLUTION DÉFINITIVE
function setupGuaranteedNavigation() {
    console.log('🚀 Setup navigation garantie...');
    
    // Attendre que le DOM soit complètement chargé
    setTimeout(() => {
        const links = document.querySelectorAll('a[href^="#"]');
        console.log('📋 Liens trouvés:', links.length);
        
        links.forEach((link, index) => {
            const href = link.getAttribute('href');
            console.log(`🔗 Lien ${index}: ${href}`);
            
            // Supprimer tous les anciens écouteurs
            const newLink = link.cloneNode(true);
            link.parentNode.replaceChild(newLink, link);
            
            // Ajouter un écouteur simple et direct
            newLink.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const targetId = this.getAttribute('href');
                console.log('🎯 Clic sur:', targetId);
                
                if (targetId === '#') return;
                
                // Trouver la section cible
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    console.log('✅ Section trouvée:', targetId);
                    
                    // Scroll direct et simple
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Fermer le menu mobile si ouvert
                    const hamburger = document.querySelector('.hamburger');
                    const navMenu = document.querySelector('.nav-menu');
                    const navOverlay = document.querySelector('.nav-overlay');
                    if (hamburger && navMenu) {
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                        if (navOverlay) navOverlay.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                    
                } else {
                    console.log('❌ Section non trouvée:', targetId);
                    
                    // Messages spécifiques pour chaque section
                    const messages = {
                        '#histoire': 'La section Histoire est en cours de construction.',
                        '#galerie': 'La section Galerie est en cours de construction.', 
                        '#soutien': 'La section Soutien est en cours de construction.',
                        '#contact': 'La section Contact est en cours de construction.'
                    };
                    
                    if (messages[targetId]) {
                        alert(messages[targetId]);
                    } else {
                        alert(`Section "${targetId}" non trouvée.`);
                    }
                }
            });
        });
        
        console.log('✅ Navigation garantie mise en place!');
    }, 1000);
}

// LANCER LA NAVIGATION GARANTIE
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupGuaranteedNavigation);
} else {
    setupGuaranteedNavigation();
}

// LANCER AUSSI APRÈS CHARGEMENT COMPLET (double sécurité)
window.addEventListener('load', setupGuaranteedNavigation);

// Gestion du menu mobile
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Créer l'overlay s'il n'existe pas
    let navOverlay = document.querySelector('.nav-overlay');
    if (!navOverlay) {
        navOverlay = document.createElement('div');
        navOverlay.className = 'nav-overlay';
        document.body.appendChild(navOverlay);
    }
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            navOverlay.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Fermer le menu en cliquant sur l'overlay
        navOverlay.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Gérer les dropdowns sur mobile
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const parent = this.closest('.nav-item.has-dropdown');
                    parent.classList.toggle('active');
                }
            });
        });
        
        // Fermer le menu en cliquant sur un lien (sauf dropdown toggle)
        const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Fermer aussi pour les liens du dropdown
        const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
        dropdownLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

// Optimisations pour mobile et tablettes
function initMobileOptimizations() {
    // Optimiser les tailles de boutons pour mobile
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        // Ajouter des tailles minimales pour le touch
        if (window.innerWidth <= 768) {
            button.style.minHeight = '44px';
            button.style.minWidth = '44px';
        }
    });

    // Optimiser les liens pour mobile
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (window.innerWidth <= 768) {
            link.style.minHeight = '44px';
            link.style.display = 'inline-flex';
            link.style.alignItems = 'center';
            link.style.justifyContent = 'center';
        }
    });

    // Gérer le redimensionnement
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            buttons.forEach(button => {
                button.style.minHeight = '44px';
                button.style.minWidth = '44px';
            });
            links.forEach(link => {
                link.style.minHeight = '44px';
                link.style.display = 'inline-flex';
                link.style.alignItems = 'center';
                link.style.justifyContent = 'center';
            });
        } else {
            buttons.forEach(button => {
                button.style.minHeight = '';
                button.style.minWidth = '';
            });
            links.forEach(link => {
                link.style.minHeight = '';
                link.style.display = '';
                link.style.alignItems = '';
                link.style.justifyContent = '';
            });
        }
    });

    // Optimiser les clics sur mobile
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
        
        // Ajouter des feedbacks tactiles
        const clickableElements = document.querySelectorAll('button, .btn, a, .chef-card, .conseiller-card, .responsable-card, .media-item, .calendar-day');
        clickableElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.opacity = '0.7';
            });
            
            element.addEventListener('touchend', function() {
                this.style.opacity = '1';
            });
        });
    }

    // Optimiser le scroll pour mobile
    if (window.innerWidth <= 768) {
        // Désactiver le scroll horizontal
        document.body.style.overflowX = 'hidden';
        
        // Optimiser le scroll vertical
        document.documentElement.style.scrollBehavior = 'smooth';
    }

    // Gérer l'orientation change
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            // Recalculer les layouts après changement d'orientation
            if (calendarManager) {
                calendarManager.renderCalendar();
            }
        }, 100);
    });
}

// Optimisations pour les formulaires mobiles
function initMobileFormOptimizations() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            // Agrandir les zones de clic pour mobile
            if (window.innerWidth <= 768) {
                input.style.fontSize = '16px'; // Éviter le zoom sur iOS
                input.style.padding = '12px';
                input.style.minHeight = '44px';
            }

            // Optimiser le type d'input pour mobile
            if (input.type === 'date') {
                input.setAttribute('inputmode', 'none');
            }
            if (input.type === 'number') {
                input.setAttribute('inputmode', 'numeric');
            }
            if (input.type === 'email') {
                input.setAttribute('inputmode', 'email');
            }
            if (input.type === 'tel') {
                input.setAttribute('inputmode', 'tel');
            }
        });
    });
}

// Optimisations pour le calendrier mobile
function initMobileCalendarOptimizations() {
    if (window.innerWidth <= 768) {
        // Adapter le calendrier pour mobile
        const calendarDays = document.querySelectorAll('.calendar-day');
        calendarDays.forEach(day => {
            day.addEventListener('touchstart', function() {
                this.style.backgroundColor = '#f0f0f0';
            });
            
            day.addEventListener('touchend', function() {
                this.style.backgroundColor = '';
            });
        });

        // Optimiser les contrôles du calendrier
        const viewBtns = document.querySelectorAll('.view-btn');
        viewBtns.forEach(btn => {
            btn.style.minWidth = '80px';
            btn.style.padding = '8px 12px';
        });
    }
}

// Détection du type d'appareil
function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    const isTablet = /ipad|android(?!.*mobile)/i.test(userAgent);
    
    if (isTablet) {
        document.body.classList.add('tablet-device');
    } else if (isMobile) {
        document.body.classList.add('mobile-device');
    } else {
        document.body.classList.add('desktop-device');
    }
    
    return { isMobile, isTablet };
}

// Optimisations de performance pour mobile
function initMobilePerformanceOptimizations() {
    const device = detectDevice();
    
    if (device.isMobile) {
        // Réduire les animations sur mobile
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                * {
                    animation-duration: 0.2s !important;
                    transition-duration: 0.2s !important;
                }
                
                .chef-card,
                .conseiller-card,
                .responsable-card,
                .media-item,
                .event-card {
                    transform: none !important;
                }
                
                .chef-card:hover,
                .conseiller-card:hover,
                .responsable-card:hover,
                .media-item:hover,
                .event-card:hover {
                    transform: none !important;
                }
            }
        `;
        document.head.appendChild(style);

        // Lazy loading pour les images
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
        });
    }
}

// Initialisation principale simplifiée
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM chargé - Initialisation simplifiée...');
    
    // Lancer la navigation garantie
    setupGuaranteedNavigation();
    
    // Menu mobile
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            if (navOverlay) navOverlay.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    console.log('✅ Initialisation terminée');
    
    // Initialiser le formulaire média
    initMediaForm();
});

// Gestion du formulaire d'ajout de média
function initMediaForm() {
    const addMediaForm = document.getElementById('addMediaForm');
    if (addMediaForm) {
        addMediaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Logique du formulaire média ici
        });
    }
}

// Fonction pour filtrer les médias
function filterMedias(filter) {
    const mediaItems = document.querySelectorAll('.media-item');
    
    mediaItems.forEach(item => {
        const categories = item.getAttribute('data-category').split(' ');
        
        if (filter === 'all' || categories.includes(filter)) {
            item.style.display = 'block';
            // Animation d'entrée
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';
            setTimeout(() => {
                item.style.transition = 'all 0.3s ease';
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 50);
        } else {
            item.style.display = 'none';
        }
    });
}

// Fonction pour ajouter un média à la grille
function addMediaToGrid(media) {
    const mediasGrid = document.getElementById('mediasGrid');
    if (!mediasGrid) return;
    
    const mediaItem = document.createElement('div');
    mediaItem.className = `media-item`;
    mediaItem.setAttribute('data-category', `${media.type}s ${media.category}`);
    
    const mediaContent = media.type === 'video' 
        ? `
            <div class="video-thumbnail">
                <img src="./images/${media.file.replace('.mp4', '-thumb.jpg')}" alt="${media.title}" onerror="this.src='./images/default-video.jpg'">
                <div class="play-button">
                    <i class="fas fa-play"></i>
                </div>
            </div>
        `
        : `<img src="./images/${media.file}" alt="${media.title}" onerror="this.src='./images/default-media.jpg'">`;
    
    mediaItem.innerHTML = `
        <div class="media-container">
            ${mediaContent}
            <div class="media-overlay">
                <div class="media-info">
                    <h4>${media.title}</h4>
                    <p>${media.description}</p>
                    <span class="media-date">${formatDate(media.date)}</span>
                    ${media.duration ? `<span class="video-duration">${media.duration}</span>` : ''}
                </div>
                <div class="media-actions">
                    <button class="btn-${media.type === 'video' ? 'play' : 'view'}" onclick="${media.type === 'video' ? 'playVideo' : 'viewMedia'}('${media.file}')">
                        <i class="fas fa-${media.type === 'video' ? 'play' : 'expand'}"></i>
                    </button>
                    <button class="btn-download" onclick="downloadMedia('${media.file}')">
                        <i class="fas fa-download"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Ajouter au début de la grille
    mediasGrid.insertBefore(mediaItem, mediasGrid.firstChild);
    
    // Animation d'entrée
    mediaItem.style.opacity = '0';
    mediaItem.style.transform = 'scale(0.8)';
    setTimeout(() => {
        mediaItem.style.transition = 'all 0.5s ease';
        mediaItem.style.opacity = '1';
        mediaItem.style.transform = 'scale(1)';
    }, 100);
}

// Fonctions pour les actions médias
function viewMedia(mediaId) {
    showNotification(`Visualisation du média: ${mediaId}`, 'info');
    // Dans une vraie application, ouvrir un modal avec l'image en grand
}

function playVideo(videoId) {
    showNotification(`Lecture de la vidéo: ${videoId}`, 'info');
    // Dans une vraie application, ouvrir un lecteur vidéo
}

function downloadMedia(mediaId) {
    showNotification(`Téléchargement du média: ${mediaId}`, 'info');
    // Dans une vraie application, démarrer le téléchargement
}

// Fonctionnalités avancées pour les photos
function initPhotoFeatures() {
    // Ajouter les écouteurs d'événements pour toutes les photos
    const photos = document.querySelectorAll('.responsable-photo img, .chef-photo img, .conseiller-photo img, .media-item img');
    
    photos.forEach(photo => {
        // Rendre les photos cliquables avec clic gauche et droit
        photo.style.cursor = 'pointer';
        
        // Clic gauche pour zoom et agrandissement
        photo.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Toggle l'effet de zoom
            if (photo.classList.contains('zoomed')) {
                photo.classList.remove('zoomed');
                photo.style.transform = 'scale(1)';
                photo.style.zIndex = '1';
            } else {
                photo.classList.add('zoomed');
                photo.style.transform = 'scale(1.5)';
                photo.style.zIndex = '10';
                
                // Ajouter un bouton pour réduire
                showZoomControls(photo);
            }
        });
        
        // Clic droit pour options supplémentaires
        photo.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            showPhotoContextMenu(this, e.pageX, e.pageY);
        });
        
        // Double clic pour options avancées
        photo.addEventListener('dblclick', function(e) {
            e.preventDefault();
            showAdvancedPhotoOptions(this);
        });
        
        // Ajouter un effet au survol
        photo.addEventListener('mouseenter', function() {
            if (!photo.classList.contains('zoomed')) {
                this.style.transform = 'scale(1.05)';
                this.style.filter = 'brightness(1.1) contrast(1.1)';
            }
        });
        
        photo.addEventListener('mouseleave', function() {
            if (!photo.classList.contains('zoomed')) {
                this.style.transform = 'scale(1)';
                this.style.filter = 'brightness(1) contrast(1)';
            }
        });
    });
}

// Contrôles de zoom
function showZoomControls(photo) {
    // Supprimer les contrôles existants
    const existingControls = document.querySelector('.zoom-controls');
    if (existingControls) {
        existingControls.remove();
    }
    
    const controls = document.createElement('div');
    controls.className = 'zoom-controls';
    controls.style.cssText = `
        position: fixed;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        background: rgba(0,0,0,0.8);
        padding: 10px;
        border-radius: 25px;
        z-index: 1001;
        display: flex;
        gap: 10px;
        animation: slideInLeft 0.3s ease;
    `;
    
    controls.innerHTML = `
        <button onclick="zoomOut()" style="
            background: #f44336;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 16px;
        ">−</button>
        <span style="
            color: white;
            font-weight: bold;
            font-size: 14px;
        ">150%</span>
        <button onclick="zoomIn()" style="
            background: #4CAF50;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 16px;
        ">+</button>
    `;
    
    document.body.appendChild(controls);
    
    // Auto-suppression après 5 secondes
    setTimeout(() => {
        if (document.querySelector('.zoom-controls')) {
            controls.style.animation = 'slideOutLeft 0.3s ease';
            setTimeout(() => {
                if (controls.parentElement) {
                    controls.remove();
                }
            }, 300);
        }
    }, 5000);
}

function zoomIn() {
    const zoomedPhotos = document.querySelectorAll('.responsable-photo.zoomed img, .chef-photo.zoomed img, .conseiller-photo.zoomed img, .media-item.zoomed img');
    zoomedPhotos.forEach(photo => {
        photo.style.transform = 'scale(2)';
    });
}

function zoomOut() {
    const zoomedPhotos = document.querySelectorAll('.responsable-photo.zoomed img, .chef-photo.zoomed img, .conseiller-photo.zoomed img, .media-item.zoomed img');
    zoomedPhotos.forEach(photo => {
        photo.style.transform = 'scale(1.5)';
    });
    
    // Cacher les contrôles si plus de photos zoomées
    setTimeout(() => {
        const remainingZoomed = document.querySelectorAll('.responsable-photo.zoomed img, .chef-photo.zoomed img, .conseiller-photo.zoomed img, .media-item.zoomed img');
        if (remainingZoomed.length === 0) {
            const controls = document.querySelector('.zoom-controls');
            if (controls) {
                controls.remove();
            }
        }
    }, 100);
}

// Fonction de notification améliorée
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 1002;
        font-size: 14px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Auto-suppression après 3 secondes
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Animations CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Fonction pour ajouter un nouveau scout (pour l'administration)
function addScout(scoutData) {
    const newScout = {
        id: scoutsData.length + 1,
        ...scoutData
    };
    scoutsData.push(newScout);
    displayScouts();
    return newScout;
}

// Fonction pour ajouter un nouveau chef (pour l'administration)
function addChef(chefData) {
    const newChef = {
        id: chefsData.length + 1,
        ...chefData
    };
    chefsData.push(newChef);
    displayChefs();
    return newChef;
}

// Fonction pour ajouter une nouvelle photo à la galerie
function addGalleryItem(itemData) {
    const newItem = {
        id: galleryData.length + 1,
        ...itemData
    };
    galleryData.push(newItem);
    displayGallery();
    return newItem;
}

// Calendrier Interactif avec Inscriptions
class CalendarManager {
    constructor() {
        this.currentDate = new Date();
        this.currentView = 'month';
        this.events = this.loadEvents();
        this.selectedBranches = ['louveteaux', 'eclaireurs', 'pionniers', 'routiers', 'groupe'];
        this.init();
    }

    init() {
        this.renderCalendar();
        this.attachEventListeners();
        this.updateMonthDisplay();
    }

    loadEvents() {
        const savedEvents = localStorage.getItem('scoutEvents');
        if (savedEvents) {
            return JSON.parse(savedEvents);
        }
        
        // Événements par défaut
        return [
            {
                id: 1,
                title: 'Réunion Louveteaux',
                date: new Date(2026, 3, 15),
                branch: 'louveteaux',
                description: 'Réunion hebdomadaire des louveteaux',
                location: 'Local Scout',
                maxParticipants: 20,
                participants: []
            },
            {
                id: 2,
                title: 'Camp de Pâques',
                date: new Date(2026, 3, 20),
                branch: 'groupe',
                description: 'Camp de groupe pour les fêtes de Pâques',
                location: 'Camp de Bukavu',
                maxParticipants: 50,
                participants: []
            },
            {
                id: 3,
                title: 'Randonnée Éclaireurs',
                date: new Date(2026, 3, 22),
                branch: 'eclaireurs',
                description: 'Randonnée dans les environs de Bukavu',
                location: 'Forêt de Kahuzi',
                maxParticipants: 15,
                participants: []
            },
            {
                id: 4,
                title: 'Soirée Routiers',
                date: new Date(2026, 3, 25),
                branch: 'routiers',
                description: 'Soirée d\'intégration pour les nouveaux routiers',
                location: 'Local Scout',
                maxParticipants: 25,
                participants: []
            },
            {
                id: 5,
                title: 'Journée Pionniers',
                date: new Date(2026, 3, 28),
                branch: 'pionniers',
                description: 'Journée d\'activités techniques',
                location: 'Terrain d\'exercices',
                maxParticipants: 18,
                participants: []
            }
        ];
    }

    saveEvents() {
        localStorage.setItem('scoutEvents', JSON.stringify(this.events));
    }

    attachEventListeners() {
        // Navigation mois
        document.getElementById('prevMonth').addEventListener('click', () => this.previousMonth());
        document.getElementById('nextMonth').addEventListener('click', () => this.nextMonth());

        // Changement de vue
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.changeView(e.target.dataset.view));
        });

        // Filtres branches
        document.querySelectorAll('.branch-filter').forEach(filter => {
            filter.addEventListener('change', () => this.updateFilters());
        });
    }

    renderCalendar() {
        if (this.currentView === 'month') {
            this.renderMonthView();
        } else if (this.currentView === 'week') {
            this.renderWeekView();
        } else if (this.currentView === 'list') {
            this.renderListView();
        }
    }

    renderMonthView() {
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const prevLastDay = new Date(year, month, 0);
        const firstDayIndex = firstDay.getDay();
        const lastDayIndex = lastDay.getDay();
        const nextDays = 7 - lastDayIndex - 1;

        const calendarDays = document.getElementById('calendarDays');
        calendarDays.innerHTML = '';

        // Jours du mois précédent
        for (let x = firstDayIndex; x > 0; x--) {
            const day = prevLastDay.getDate() - x + 1;
            const dayElement = this.createDayElement(day, true, new Date(year, month - 1, day));
            calendarDays.appendChild(dayElement);
        }

        // Jours du mois actuel
        for (let i = 1; i <= lastDay.getDate(); i++) {
            const dayElement = this.createDayElement(i, false, new Date(year, month, i));
            calendarDays.appendChild(dayElement);
        }

        // Jours du mois suivant
        for (let j = 1; j <= nextDays; j++) {
            const dayElement = this.createDayElement(j, true, new Date(year, month + 1, j));
            calendarDays.appendChild(dayElement);
        }
    }

    createDayElement(day, isOtherMonth, date) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        if (isOtherMonth) {
            dayElement.classList.add('other-month');
        }

        if (this.isToday(date)) {
            dayElement.classList.add('today');
        }

        const dayNumber = document.createElement('div');
        dayNumber.className = 'calendar-day-number';
        dayNumber.textContent = day;
        dayElement.appendChild(dayNumber);

        // Ajouter les événements du jour
        const dayEvents = this.getEventsForDate(date);
        if (dayEvents.length > 0) {
            const eventsContainer = document.createElement('div');
            eventsContainer.className = 'calendar-day-events';
            
            dayEvents.slice(0, 3).forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.className = `event-item-mini ${event.branch}`;
                eventElement.textContent = event.title;
                eventElement.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.showEventDetails(event);
                });
                eventsContainer.appendChild(eventElement);
            });

            if (dayEvents.length > 3) {
                const moreElement = document.createElement('div');
                moreElement.className = 'event-item-mini';
                moreElement.textContent = `+${dayEvents.length - 3} plus`;
                eventsContainer.appendChild(moreElement);
            }

            dayElement.appendChild(eventsContainer);
        }

        dayElement.addEventListener('click', () => this.showDayEvents(date));

        return dayElement;
    }

    renderWeekView() {
        // Implémentation vue semaine (simplifiée)
        document.getElementById('calendrierGrid').style.display = 'none';
        document.getElementById('eventsList').style.display = 'block';
        this.renderListView(); // Pour l'instant, utilise la vue liste
    }

    renderListView() {
        document.getElementById('calendrierGrid').style.display = 'none';
        document.getElementById('eventsList').style.display = 'block';

        const eventsContainer = document.getElementById('eventsContainer');
        eventsContainer.innerHTML = '';

        const sortedEvents = this.events
            .filter(event => this.selectedBranches.includes(event.branch))
            .filter(event => event.date >= new Date())
            .sort((a, b) => a.date - b.date);

        if (sortedEvents.length === 0) {
            eventsContainer.innerHTML = '<p>Aucun événement à venir pour les branches sélectionnées.</p>';
            return;
        }

        sortedEvents.forEach(event => {
            const eventCard = this.createEventCard(event);
            eventsContainer.appendChild(eventCard);
        });
    }

    createEventCard(event) {
        const card = document.createElement('div');
        card.className = 'event-card';
        
        const isRegistered = event.participants.includes('currentUser');
        
        card.innerHTML = `
            <div class="event-card-header">
                <div>
                    <div class="event-card-title">${event.title}</div>
                    <div class="event-card-date">${this.formatDate(event.date)} - ${event.location}</div>
                </div>
                <span class="event-card-badge ${event.branch}">${this.getBranchName(event.branch)}</span>
            </div>
            <div class="event-card-description">${event.description}</div>
            <div class="event-card-actions">
                <button class="event-action-btn ${isRegistered ? 'registered' : ''}" onclick="calendarManager.toggleRegistration(${event.id})">
                    ${isRegistered ? 'Inscrit' : 'S\'inscrire'}
                </button>
                <button class="event-action-btn" onclick="calendarManager.showEventDetails(${event.id})">Détails</button>
                <button class="event-action-btn" onclick="calendarManager.deleteEvent(${event.id})">Supprimer</button>
            </div>
        `;

        return card;
    }

    getEventsForDate(date) {
        return this.events.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.toDateString() === date.toDateString() &&
                   this.selectedBranches.includes(event.branch);
        });
    }

    isToday(date) {
        const today = new Date();
        return date.toDateString() === today.toDateString();
    }

    formatDate(date) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
    }

    getBranchName(branch) {
        const names = {
            'louveteaux': 'Louveteaux',
            'eclaireurs': 'Éclaireurs',
            'pionniers': 'Pionniers',
            'routiers': 'Routiers',
            'groupe': 'Groupe'
        };
        return names[branch] || branch;
    }

    previousMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        this.updateMonthDisplay();
        this.renderCalendar();
    }

    nextMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        this.updateMonthDisplay();
        this.renderCalendar();
    }

    updateMonthDisplay() {
        const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
                          'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        const monthDisplay = `${monthNames[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`;
        document.getElementById('currentMonth').textContent = monthDisplay;
    }

    changeView(view) {
        this.currentView = view;
        
        // Mettre à jour les boutons
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-view="${view}"]`).classList.add('active');

        // Afficher/masquer les vues
        if (view === 'month') {
            document.getElementById('calendrierGrid').style.display = 'block';
            document.getElementById('eventsList').style.display = 'none';
        } else {
            document.getElementById('calendrierGrid').style.display = 'none';
            document.getElementById('eventsList').style.display = 'block';
        }

        this.renderCalendar();
    }

    updateFilters() {
        this.selectedBranches = [];
        document.querySelectorAll('.branch-filter:checked').forEach(filter => {
            this.selectedBranches.push(filter.value);
        });
        this.renderCalendar();
    }

    showDayEvents(date) {
        const events = this.getEventsForDate(date);
        if (events.length > 0) {
            this.showEventDetails(events[0]);
        } else {
            // Ouvrir le modal pour ajouter un événement à cette date
            openAddEventModal(date);
        }
    }

    showEventDetails(event) {
        const eventData = typeof event === 'object' ? event : this.events.find(e => e.id === event);
        if (!eventData) return;

        const modal = document.createElement('div');
        modal.className = 'event-modal';
        modal.style.display = 'flex';
        
        const isRegistered = eventData.participants.includes('currentUser');
        const availableSpots = eventData.maxParticipants - eventData.participants.length;

        modal.innerHTML = `
            <div class="event-modal-content">
                <div class="event-modal-header">
                    <h2 class="event-modal-title">${eventData.title}</h2>
                    <button class="event-modal-close" onclick="this.closest('.event-modal').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="event-details">
                    <p><strong>Date:</strong> ${this.formatDate(eventData.date)}</p>
                    <p><strong>Lieu:</strong> ${eventData.location}</p>
                    <p><strong>Branche:</strong> ${this.getBranchName(eventData.branch)}</p>
                    <p><strong>Description:</strong> ${eventData.description}</p>
                    <p><strong>Participants:</strong> ${eventData.participants.length}/${eventData.maxParticipants}</p>
                    <p><strong>Places disponibles:</strong> ${availableSpots}</p>
                </div>
                <div class="form-actions">
                    <button class="btn ${isRegistered ? 'btn-secondary' : 'btn-primary'}" 
                            onclick="calendarManager.toggleRegistration(${eventData.id}); this.closest('.event-modal').remove();">
                        ${isRegistered ? 'Se désinscrire' : 'S\'inscrire'}
                    </button>
                    <button class="btn btn-secondary" onclick="this.closest('.event-modal').remove()">Fermer</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // Fermer en cliquant à l'extérieur
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
                document.body.style.overflow = 'auto';
            }
        });
    }

    toggleRegistration(eventId) {
        const event = this.events.find(e => e.id === eventId);
        if (!event) return;

        const userIndex = event.participants.indexOf('currentUser');
        
        if (userIndex > -1) {
            // Se désinscrire
            event.participants.splice(userIndex, 1);
            showNotification('Vous êtes désinscrit de l\'événement', 'info');
        } else {
            // S'inscrire
            if (event.participants.length >= event.maxParticipants) {
                showNotification('Désolé, cet événement est complet', 'error');
                return;
            }
            event.participants.push('currentUser');
            showNotification('Inscription réussie!', 'success');
        }

        this.saveEvents();
        this.renderCalendar();
    }

    deleteEvent(eventId) {
        if (confirm('Êtes-vous sûr de vouloir supprimer cet événement?')) {
            this.events = this.events.filter(e => e.id !== eventId);
            this.saveEvents();
            this.renderCalendar();
            showNotification('Événement supprimé', 'info');
        }
    }

    addEvent(event) {
        event.preventDefault();
        
        const newEvent = {
            id: this.events.length + 1,
            title: document.getElementById('eventTitle').value,
            date: new Date(document.getElementById('eventDate').value),
            branch: document.getElementById('eventBranch').value,
            location: document.getElementById('eventLocation').value,
            description: document.getElementById('eventDescription').value,
            maxParticipants: parseInt(document.getElementById('eventMaxParticipants').value) || 20,
            participants: []
        };

        this.events.push(newEvent);
        this.saveEvents();
        this.renderCalendar();
        
        // Fermer le modal
        document.querySelector('.event-modal').remove();
        document.body.style.overflow = 'auto';
        
        showNotification('Événement ajouté avec succès!', 'success');
    }
}

// Fonctions globales pour le calendrier
function openAddEventModal(date = null) {
    const modal = document.createElement('div');
    modal.className = 'event-modal';
    modal.style.display = 'flex';
    
    const defaultDate = date ? date.toISOString().split('T')[0] : '';
    
    modal.innerHTML = `
        <div class="event-modal-content">
            <div class="event-modal-header">
                <h2 class="event-modal-title">Ajouter un Événement</h2>
                <button class="event-modal-close" onclick="this.closest('.event-modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <form class="event-form" onsubmit="calendarManager.addEvent(event); return false;">
                <div class="form-group">
                    <label for="eventTitle">Titre de l'événement *</label>
                    <input type="text" id="eventTitle" required placeholder="Ex: Réunion hebdomadaire">
                </div>
                <div class="form-group">
                    <label for="eventDate">Date *</label>
                    <input type="date" id="eventDate" required value="${defaultDate}">
                </div>
                <div class="form-group">
                    <label for="eventBranch">Branche *</label>
                    <select id="eventBranch" required>
                        <option value="">Sélectionner une branche</option>
                        <option value="louveteaux">Louveteaux</option>
                        <option value="eclaireurs">Éclaireurs</option>
                        <option value="pionniers">Pionniers</option>
                        <option value="routiers">Routiers</option>
                        <option value="groupe">Groupe</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="eventLocation">Lieu *</label>
                    <input type="text" id="eventLocation" required placeholder="Ex: Local Scout">
                </div>
                <div class="form-group">
                    <label for="eventDescription">Description</label>
                    <textarea id="eventDescription" placeholder="Description de l'événement..."></textarea>
                </div>
                <div class="form-group">
                    <label for="eventMaxParticipants">Nombre maximum de participants</label>
                    <input type="number" id="eventMaxParticipants" min="1" max="100" value="20">
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Ajouter l'événement</button>
                    <button type="button" class="btn btn-secondary" onclick="this.closest('.event-modal').remove()">Annuler</button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Fermer en cliquant à l'extérieur
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }
    });
}

// Initialiser le calendrier au chargement
let calendarManager;
document.addEventListener('DOMContentLoaded', function() {
    calendarManager = new CalendarManager();
});
// =====================================================
// GESTION DES CAMPS ET VEILLÉES
// =====================================================

// Données des types de camps et veillées
let campsEtVeilleesData = [
    {
        id: 1,
        type: 'camp',
        nom: "Camp d'été",
        description: "Camp annuel d'été avec activités de plein air",
        periode: "Juillet-Août",
        duree: "15 jours",
        lieu: "Parc National de Kahuzi-Biega",
        categorie: "groupe",
        statut: "prepare",
        equipements: ["Tentes", "Sac de couchage", "Matelas", "Lampe torche"],
        activites: ["Randonnée", "Feu de camp", "Jeu de piste", "Formation"],
        participantsMax: 50,
        responsable: "Jean-Pierre BAHATI"
    },
    {
        id: 2,
        type: 'veillee',
        nom: "Veillée de Noël",
        description: "Veillée spirituelle et festive de Noël",
        periode: "Décembre",
        duree: "1 soirée",
        lieu: "Chapelle de la Cathédrale",
        categorie: "groupe",
        statut: "prepare",
        equipements: ["Bougies", "Chants", "Décorations"],
        activites: ["Chants de Noël", "Contes", "Échange de cadeaux"],
        participantsMax: 80,
        responsable: "Père Antoine MULUMBA"
    },
    {
        id: 3,
        type: 'camp',
        nom: "Camp de Pâques",
        description: "Camp spirituel pendant les fêtes de Pâques",
        periode: "Avril",
        duree: "5 jours",
        lieu: "Centre spirituel de Bukavu",
        categorie: "groupe",
        statut: "termine",
        equipements: ["Tentes", "Matériel de cuisine", "Livres de prière"],
        activites: ["Prière", "Méditation", "Jeux", "Service"],
        participantsMax: 40,
        responsable: "Marie-Louise KABEYA",
        dateRealisation: "2025-04-15"
    },
    {
        id: 4,
        type: 'veillee',
        nom: "Veillée de la Promesse",
        description: "Cérémonie des promesses scout",
        periode: "Octobre",
        duree: "1 soirée",
        lieu: "Terrain des Scouts NDP",
        categorie: "groupe",
        statut: "prepare",
        equipements: ["Feu de camp", "Fanions", "Insignes"],
        activites: ["Cérémonie", "Serment", "Festivités"],
        participantsMax: 60,
        responsable: "Grace MULANGA"
    }
];

// Fonction pour ajouter un camp ou une veillée
function addCampOuVeillee(data) {
    const newItem = {
        id: campsEtVeilleesData.length + 1,
        ...data,
        dateCreation: new Date().toISOString()
    };
    campsEtVeilleesData.push(newItem);
    showNotification(`${data.type === 'camp' ? 'Camp' : 'Veillée'} ajouté avec succès!`, 'success');
    return newItem;
}

// Fonction pour modifier un camp ou une veillée
function updateCampOuVeillee(id, updates) {
    const index = campsEtVeilleesData.findIndex(item => item.id === id);
    if (index !== -1) {
        campsEtVeilleesData[index] = { ...campsEtVeilleesData[index], ...updates };
        showNotification('Camp/Veillée modifié avec succès!', 'success');
        return campsEtVeilleesData[index];
    }
    return null;
}

// Fonction pour supprimer un camp ou une veillée
function deleteCampOuVeillee(id) {
    campsEtVeilleesData = campsEtVeilleesData.filter(item => item.id !== id);
    showNotification('Camp/Veillée supprimé avec succès!', 'info');
}

// Fonction pour filtrer les camps/veillées par type
function getCampsEtVeillees(type = 'all', statut = 'all') {
    return campsEtVeilleesData.filter(item => {
        const matchType = type === 'all' || item.type === type;
        const matchStatut = statut === 'all' || item.statut === statut;
        return matchType && matchStatut;
    });
}

// =====================================================
// GESTION DES SORTIES PRÉPARÉES ET DESTINATIONS
// =====================================================

// Données des sorties préparées
let sortiesPrepareesData = [
    {
        id: 1,
        nom: "Randonnée Mont Kahuzi",
        destination: "Parc National de Kahuzi-Biega",
        lienDestination: "https://www.kahuzi-biega.com",
        description: "Randonnée d'exploration et d'observation de la faune",
        datePrevue: "2026-05-15",
        duree: "1 journée",
        branche: "eclaireurs",
        statut: "prepare",
        distance: "15 km",
        difficulte: "moyenne",
        materiel: ["Chaussures de marche", "Eau", "Nourriture", "Kit premiers secours"],
        participants: [],
        responsable: "Jean-Pierre BAHATI",
        coutEstime: 5000
    },
    {
        id: 2,
        nom: "Visite du Lac Kivu",
        destination: "Lac Kivu, Bukavu",
        lienDestination: "https://www.visitkivu.com",
        description: "Journée d'activités nautiques et de nettoyage du lac",
        datePrevue: "2026-06-20",
        duree: "1 journée",
        branche: "pionniers",
        statut: "prepare",
        distance: "5 km",
        difficulte: "facile",
        materiel: ["Gilets de sauvetage", "Gants", "Sacs poubelle", "Crème solaire"],
        participants: [],
        responsable: "Grace MULANGA",
        coutEstime: 3000
    },
    {
        id: 3,
        nom: "Excursion à Idjwi",
        destination: "Île d'Idjwi",
        lienDestination: "https://www.idjwi.com",
        description: "Visite culturelle et échanges avec les scouts locaux",
        datePrevue: "2025-08-10",
        duree: "2 jours",
        branche: "routiers",
        statut: "termine",
        distance: "50 km",
        difficulte: "moyenne",
        materiel: ["Sac de voyage", "Tenue cérémonie", "Cadeaux d'échange"],
        participants: ["Sarah KABONGO", "David LUBAYA"],
        responsable: "David LUBAYA",
        coutEstime: 15000,
        dateRealisation: "2025-08-10"
    },
    {
        id: 4,
        nom: "Visite de la Cathédrale",
        destination: "Cathédrale Notre Dame de la Paix, Bukavu",
        lienDestination: "https://www.cathédrale-bukavu.cd",
        description: "Visite historique et spirituelle de notre cathédrale mère",
        datePrevue: "2026-04-20",
        duree: "1/2 journée",
        branche: "louveteaux",
        statut: "prepare",
        distance: "2 km",
        difficulte: "facile",
        materiel: ["Cahier", "Crayon", "Appareil photo"],
        participants: [],
        responsable: "Marie-Louise KABEYA",
        coutEstime: 0
    }
];

// Fonction pour ajouter une sortie préparée
function addSortiePreparee(data) {
    const newSortie = {
        id: sortiesPrepareesData.length + 1,
        ...data,
        dateCreation: new Date().toISOString()
    };
    sortiesPrepareesData.push(newSortie);
    showNotification('Sortie préparée ajoutée avec succès!', 'success');
    return newSortie;
}

// Fonction pour modifier une sortie
function updateSortiePreparee(id, updates) {
    const index = sortiesPrepareesData.findIndex(s => s.id === id);
    if (index !== -1) {
        sortiesPrepareesData[index] = { ...sortiesPrepareesData[index], ...updates };
        showNotification('Sortie modifiée avec succès!', 'success');
        return sortiesPrepareesData[index];
    }
    return null;
}

// Fonction pour marquer une sortie comme réalisée
function markSortieAsDone(id, dateRealisation = new Date().toISOString()) {
    const sortie = updateSortiePreparee(id, {
        statut: 'termine',
        dateRealisation: dateRealisation
    });
    if (sortie) {
        showNotification(`Sortie "${sortie.nom}" marquée comme réalisée!`, 'success');
    }
    return sortie;
}

// Fonction pour inscrire un participant à une sortie
function inscrireParticipantSortie(sortieId, participantName) {
    const sortie = sortiesPrepareesData.find(s => s.id === sortieId);
    if (sortie) {
        if (!sortie.participants.includes(participantName)) {
            sortie.participants.push(participantName);
            showNotification(`${participantName} inscrit à la sortie!`, 'success');
        } else {
            showNotification(`${participantName} est déjà inscrit!`, 'info');
        }
        return sortie;
    }
    return null;
}

// Fonction pour obtenir les sorties par statut
function getSortiesPreparees(statut = 'all', branche = 'all') {
    return sortiesPrepareesData.filter(sortie => {
        const matchStatut = statut === 'all' || sortie.statut === statut;
        const matchBranche = branche === 'all' || sortie.branche === branche;
        return matchStatut && matchBranche;
    });
}

// =====================================================
// GESTION DES ACTIVITÉS (FAITES ET PRÉPARÉES)
// =====================================================

// Données des activités
let activitesData = [
    {
        id: 1,
        nom: "Formation secourisme",
        description: "Apprentissage des premiers secours et gestes d'urgence",
        categorie: "formation",
        branche: "toutes",
        statut: "termine",
        dateRealisation: "2025-03-15",
        lieu: "Local Scout NDP",
        responsable: "Sarah KABONGO",
        participants: 25,
        competencesAcquises: ["Premiers secours", "PSE", "Évacuation"],
        materielUtilise: ["Mannequins", "Trousses de secours", "Bandages"],
        rapport: "Formation réussie, 25 scouts certifiés en PSE1"
    },
    {
        id: 2,
        nom: "Atelier de cuisine en plein air",
        description: "Apprentissage de la cuisine sur feu de camp",
        categorie: "pratique",
        branche: "eclaireurs",
        statut: "termine",
        dateRealisation: "2025-02-20",
        lieu: "Terrain des Scouts",
        responsable: "Marie KABEYA",
        participants: 18,
        competencesAcquises: ["Feu de camp", "Cuisine", "Hygiène"],
        materielUtilise: ["Casseroles", "Bois", "Ingrédients"],
        rapport: "Les éclaireurs ont appris 3 recettes de base"
    },
    {
        id: 3,
        nom: "Construction de cabanes",
        description: "Atelier de construction de cabanes en bois",
        categorie: "pratique",
        branche: "pionniers",
        statut: "prepare",
        datePrevue: "2026-05-10",
        lieu: "Forêt de Kahuzi",
        responsable: "Michel KAHAMBA",
        participantsPrevus: 15,
        competencesVisees: ["Nœuds", "Construction", "Sécurité"],
        materielRequis: ["Cordes", "Couteaux", "Branches", "Marteaux"],
        budgetEstime: 5000
    },
    {
        id: 4,
        nom: "Jeu de piste urbain",
        description: "Course d'orientation dans la ville",
        categorie: "jeu",
        branche: "louveteaux",
        statut: "prepare",
        datePrevue: "2026-04-25",
        lieu: "Centre-ville de Bukavu",
        responsable: "Marie-Louise KABEYA",
        participantsPrevus: 20,
        competencesVisees: ["Orientation", "Cartographie", "Travail d'équipe"],
        materielRequis: ["Cartes", "Boussoles", "Indices", "Drapeaux"],
        budgetEstime: 2000
    },
    {
        id: 5,
        nom: "Service communautaire - Nettoyage",
        description: "Nettoyage d'un quartier de Bukavu",
        categorie: "service",
        branche: "toutes",
        statut: "prepare",
        datePrevue: "2026-05-01",
        lieu: "Quartier Nyalukemba",
        responsable: "Père Antoine MULUMBA",
        participantsPrevus: 50,
        competencesVisees: ["Engagement", "Environnement", "Solidarité"],
        materielRequis: ["Sacs poubelle", "Gants", "Balais", "Bouteilles d'eau"],
        budgetEstime: 1000,
        partenaires: ["Mairie de Bukavu", "ONG environnement"]
    },
    {
        id: 6,
        nom: "Cérémonie d'ouverture annuelle",
        description: "Lancement officiel de l'année scoute",
        categorie: "ceremonie",
        branche: "groupe",
        statut: "termine",
        dateRealisation: "2025-09-15",
        lieu: "Cathédrale Notre Dame de la Paix",
        responsable: "Père Antoine MULUMBA",
        participants: 120,
        competencesAcquises: ["Protocoque", "Cérémonial", "Représentation"],
        materielUtilise: ["Fanions", "Uniformes", "Microphones", "Programmes"],
        rapport: "Belle cérémonie avec la présence des parents et autorités"
    }
];

// Fonction pour ajouter une activité
function addActivite(data) {
    const newActivite = {
        id: activitesData.length + 1,
        ...data,
        dateCreation: new Date().toISOString()
    };
    activitesData.push(newActivite);
    showNotification('Activité ajoutée avec succès!', 'success');
    return newActivite;
}

// Fonction pour marquer une activité comme réalisée
function markActiviteAsDone(id, rapport = '', competences = [], materiel = []) {
    const activite = activitesData.find(a => a.id === id);
    if (activite) {
        activite.statut = 'termine';
        activite.dateRealisation = new Date().toISOString();
        activite.rapport = rapport;
        if (competences.length) activite.competencesAcquises = competences;
        if (materiel.length) activite.materielUtilise = materiel;
        showNotification(`Activité "${activite.nom}" marquée comme réalisée!`, 'success');
        return activite;
    }
    return null;
}

// Fonction pour modifier une activité
function updateActivite(id, updates) {
    const index = activitesData.findIndex(a => a.id === id);
    if (index !== -1) {
        activitesData[index] = { ...activitesData[index], ...updates };
        showNotification('Activité modifiée avec succès!', 'success');
        return activitesData[index];
    }
    return null;
}

// Fonction pour supprimer une activité
function deleteActivite(id) {
    activitesData = activitesData.filter(a => a.id !== id);
    showNotification('Activité supprimée avec succès!', 'info');
}

// Fonction pour obtenir les activités par statut et catégorie
function getActivites(statut = 'all', categorie = 'all', branche = 'all') {
    return activitesData.filter(activite => {
        const matchStatut = statut === 'all' || activite.statut === statut;
        const matchCategorie = categorie === 'all' || activite.categorie === categorie;
        const matchBranche = branche === 'all' || activite.branche === branche || activite.branche === 'toutes';
        return matchStatut && matchCategorie && matchBranche;
    });
}

// =====================================================
// GESTION DES CÉRÉMONIES PRÉPARÉES
// =====================================================

// Données des cérémonies
let ceremoniesPrepareesData = [
    {
        id: 1,
        nom: "Cérémonie des Promesses",
        type: "promesse",
        description: "Cérémonie officielle des promesses scout",
        datePrevue: "2026-10-15",
        lieu: "Cathédrale Notre Dame de la Paix",
        statut: "prepare",
        branche: "toutes",
        organisateur: "Père Antoine MULUMBA",
        participantsAttendus: 80,
        programmation: [
            { heure: "14:00", activite: "Accueil des familles" },
            { heure: "14:30", activite: "Procession d'entrée" },
            { heure: "14:45", activite: "Cérémonie des promesses" },
            { heure: "15:30", activite: "Remise des insignes" },
            { heure: "16:00", activite: "Festivités" }
        ],
        materielRequis: ["Fanions", "Autel", "Livrets", "Insignes", "Uniformes"],
        invites: ["Parents", "Autorités diocésaines", "Anciens scouts"],
        budgetEstime: 10000
    },
    {
        id: 2,
        nom: "Investiture des Chefs",
        type: "investiture",
        description: "Cérémonie d'investiture des nouveaux chefs",
        datePrevue: "2026-02-20",
        lieu: "Terrain des Scouts NDP",
        statut: "prepare",
        branche: "groupe",
        organisateur: "Père Antoine MULUMBA",
        participantsAttendus: 60,
        programmation: [
            { heure: "15:00", activite: "Rassemblement" },
            { heure: "15:30", activite: "Cérémonie d'investiture" },
            { heure: "16:30", activite: "Discours et félicitations" },
            { heure: "17:00", activite: "Cocktail" }
        ],
        materielRequis: ["Fanions", "Écharpes", "Attestations", "Micro"],
        invites: ["Nouveaux chefs", "Familles", "Anciens"],
        budgetEstime: 8000
    },
    {
        id: 3,
        nom: "Messe de fin d'année",
        type: "religieuse",
        description: "Messe de clôture de l'année scoute",
        datePrevue: "2026-07-10",
        lieu: "Chapelle de la Cathédrale",
        statut: "prepare",
        branche: "groupe",
        organisateur: "Père Antoine MULUMBA",
        participantsAttendus: 150,
        programmation: [
            { heure: "10:00", activite: "Messe" },
            { heure: "11:30", activite: "Remise des prix" },
            { heure: "12:00", activite: "Discours de fin d'année" }
        ],
        materielRequis: ["Encens", "Chants", "Livrets de messe", "Médailles"],
        invites: ["Tous les scouts", "Parents", "Prêtres"],
        budgetEstime: 5000
    },
    {
        id: 4,
        nom: "Cérémonie de clôture du camp",
        type: "cloture",
        description: "Cérémonie de fin de camp d'été",
        datePrevue: "2025-08-15",
        lieu: "Parc National de Kahuzi-Biega",
        statut: "termine",
        branche: "groupe",
        organisateur: "Jean-Pierre BAHATI",
        participantsAttendus: 50,
        participantsReels: 48,
        programmation: [
            { heure: "18:00", activite: "Feu de camp" },
            { heure: "19:00", activite: "Cérémonie de clôture" },
            { heure: "20:00", activite: "Chants et danses" }
        ],
        materielUtilise: ["Feu de camp", "Récompenses", "Certificats"],
        invites: ["Tous les campeurs", "Animateurs"],
        rapport: "Cérémonie émouvante avec remise des prix aux meilleurs scouts"
    }
];

// Fonction pour ajouter une cérémonie
function addCeremonie(data) {
    const newCeremonie = {
        id: ceremoniesPrepareesData.length + 1,
        ...data,
        dateCreation: new Date().toISOString()
    };
    ceremoniesPrepareesData.push(newCeremonie);
    showNotification('Cérémonie ajoutée avec succès!', 'success');
    return newCeremonie;
}

// Fonction pour modifier une cérémonie
function updateCeremonie(id, updates) {
    const index = ceremoniesPrepareesData.findIndex(c => c.id === id);
    if (index !== -1) {
        ceremoniesPrepareesData[index] = { ...ceremoniesPrepareesData[index], ...updates };
        showNotification('Cérémonie modifiée avec succès!', 'success');
        return ceremoniesPrepareesData[index];
    }
    return null;
}

// Fonction pour marquer une cérémonie comme réalisée
function markCeremonieAsDone(id, rapport = '', participantsReels = 0) {
    const ceremonie = ceremoniesPrepareesData.find(c => c.id === id);
    if (ceremonie) {
        ceremonie.statut = 'termine';
        ceremonie.dateRealisation = new Date().toISOString();
        ceremonie.rapport = rapport;
        ceremonie.participantsReels = participantsReels;
        showNotification(`Cérémonie "${ceremonie.nom}" marquée comme réalisée!`, 'success');
        return ceremonie;
    }
    return null;
}

// Fonction pour obtenir les cérémonies par statut
function getCeremonies(statut = 'all', type = 'all') {
    return ceremoniesPrepareesData.filter(ceremonie => {
        const matchStatut = statut === 'all' || ceremonie.statut === statut;
        const matchType = type === 'all' || ceremonie.type === type;
        return matchStatut && matchType;
    });
}

// =====================================================
// GESTION DES PROJETS (À FAIRE ET EN COURS)
// =====================================================

// Données des projets
let projetsData = [
    {
        id: 1,
        nom: "Construction d'un puits",
        description: "Projet de construction d'un puits dans un village rural",
        categorie: "humanitaire",
        statut: "en_cours",
        dateDebut: "2025-09-01",
        dateFinPrevue: "2026-03-30",
        budgetTotal: 50000,
        budgetCollecte: 25000,
        responsable: "Grace MULANGA",
        equipe: ["Michel KAHAMBA", "Sarah KABONGO", "David LUBAYA"],
        beneficiaires: "Village de Luvungi",
        etapes: [
            { nom: "Étude de faisabilité", statut: "termine", date: "2025-09-15" },
            { nom: "Collecte de fonds", statut: "en_cours", progression: 50 },
            { nom: "Achat matériel", statut: "a_faire" },
            { nom: "Construction", statut: "a_faire" },
            { nom: "Inauguration", statut: "a_faire" }
        ],
        partenaires: ["ONG Eau Pour Tous", "Mairie de Luvungi"],
        documents: ["Plan technique", "Devis", "Autorisation"]
    },
    {
        id: 2,
        nom: "Rénovation du local scout",
        description: "Rénovation et aménagement du local de réunion",
        categorie: "infrastructure",
        statut: "a_faire",
        dateDebutPrevue: "2026-04-01",
        dateFinPrevue: "2026-06-30",
        budgetTotal: 30000,
        budgetCollecte: 0,
        responsable: "Michel KAHAMBA",
        equipe: ["Jean-Pierre BAHATI", "Esther MBIKAYI"],
        beneficiaires: "Tous les scouts NDP",
        etapes: [
            { nom: "Étude des besoins", statut: "a_faire" },
            { nom: "Devis", statut: "a_faire" },
            { nom: "Collecte de fonds", statut: "a_faire" },
            { nom: "Travaux", statut: "a_faire" },
            { nom: "Inauguration", statut: "a_faire" }
        ],
        partenaires: [],
        documents: []
    },
    {
        id: 3,
        nom: "Campagne de reboisement",
        description: "Plantation d'arbres dans la région de Bukavu",
        categorie: "environnement",
        statut: "a_faire",
        dateDebutPrevue: "2026-11-15",
        dateFinPrevue: "2026-11-30",
        budgetTotal: 15000,
        budgetCollecte: 5000,
        responsable: "Marie KABEYA",
        equipe: ["Marie-Louise KABEYA", "Thomas BAHATI"],
        beneficiaires: "Communauté de Bukavu",
        etapes: [
            { nom: "Identification site", statut: "termine", date: "2025-10-01" },
            { nom: "Achat plants", statut: "a_faire" },
            { nom: "Sensibilisation", statut: "a_faire" },
            { nom: "Plantation", statut: "a_faire" },
            { nom: "Suivi", statut: "a_faire" }
        ],
        partenaires: ["ICCN", "Mairie de Bukavu"],
        documents: ["Plan de plantation", "Liste des espèces"]
    },
    {
        id: 4,
        nom: "Bibliothèque scoute",
        description: "Création d'une bibliothèque avec livres scout et éducatifs",
        categorie: "education",
        statut: "en_cours",
        dateDebut: "2025-10-01",
        dateFinPrevue: "2026-02-28",
        budgetTotal: 20000,
        budgetCollecte: 12000,
        responsable: "Esther MBIKAYI",
        equipe: ["Grace MULANGA", "Sarah KABONGO"],
        beneficiaires: "Tous les scouts NDP",
        etapes: [
            { nom: "Aménagement local", statut: "termine", date: "2025-10-15" },
            { nom: "Collecte de livres", statut: "en_cours", progression: 60 },
            { nom: "Catalogage", statut: "a_faire" },
            { nom: "Formation bibliothécaire", statut: "a_faire" },
            { nom: "Ouverture", statut: "a_faire" }
        ],
        partenaires: ["Médiathèque de Bukavu"],
        documents: ["Liste des dons", "Règlement"]
    },
    {
        id: 5,
        nom: "Formation informatique",
        description: "Cours d'informatique pour les scouts",
        categorie: "education",
        statut: "en_cours",
        dateDebut: "2025-11-01",
        dateFinPrevue: "2026-06-30",
        budgetTotal: 25000,
        budgetCollecte: 18000,
        responsable: "David LUBAYA",
        equipe: ["Thomas BAHATI"],
        beneficiaires: "Scouts de 12 à 18 ans",
        etapes: [
            { nom: "Achat ordinateurs", statut: "termine", date: "2025-10-20" },
            { nom: "Aménagement salle", statut: "termine", date: "2025-10-25" },
            { nom: "Recrutement formateur", statut: "en_cours", progression: 75 },
            { nom: "Cours", statut: "a_faire" },
            { nom: "Certification", statut: "a_faire" }
        ],
        partenaires: ["Université de Bukavu"],
        documents: ["Programme", "Convention"]
    }
];

// Fonction pour ajouter un projet
function addProjet(data) {
    const newProjet = {
        id: projetsData.length + 1,
        ...data,
        dateCreation: new Date().toISOString()
    };
    projetsData.push(newProjet);
    showNotification('Projet ajouté avec succès!', 'success');
    return newProjet;
}

// Fonction pour modifier un projet
function updateProjet(id, updates) {
    const index = projetsData.findIndex(p => p.id === id);
    if (index !== -1) {
        projetsData[index] = { ...projetsData[index], ...updates };
        showNotification('Projet modifié avec succès!', 'success');
        return projetsData[index];
    }
    return null;
}

// Fonction pour changer le statut d'un projet
function changeProjetStatus(id, nouveauStatut) {
    const projet = projetsData.find(p => p.id === id);
    if (projet) {
        const ancienStatut = projet.statut;
        projet.statut = nouveauStatut;
        
        if (nouveauStatut === 'en_cours' && ancienStatut === 'a_faire') {
            projet.dateDebut = new Date().toISOString();
        }
        if (nouveauStatut === 'termine') {
            projet.dateFin = new Date().toISOString();
        }
        
        showNotification(`Projet "${projet.nom}" passé en statut: ${nouveauStatut}`, 'success');
        return projet;
    }
    return null;
}

// Fonction pour mettre à jour l'avancement d'une étape
function updateEtapeProjet(projetId, etapeNom, nouveauStatut, progression = 0) {
    const projet = projetsData.find(p => p.id === projetId);
    if (projet) {
        const etape = projet.etapes.find(e => e.nom === etapeNom);
        if (etape) {
            etape.statut = nouveauStatut;
            if (progression > 0) etape.progression = progression;
            if (nouveauStatut === 'termine') etape.date = new Date().toISOString();
            showNotification(`Étape "${etapeNom}" mise à jour!`, 'success');
            return etape;
        }
    }
    return null;
}

// Fonction pour ajouter un membre à l'équipe projet
function addMembreEquipe(projetId, membreName) {
    const projet = projetsData.find(p => p.id === projetId);
    if (projet) {
        if (!projet.equipe.includes(membreName)) {
            projet.equipe.push(membreName);
            showNotification(`${membreName} ajouté à l'équipe!`, 'success');
        }
        return projet;
    }
    return null;
}

// Fonction pour ajouter des fonds au projet
function addFondsProjet(projetId, montant) {
    const projet = projetsData.find(p => p.id === projetId);
    if (projet) {
        projet.budgetCollecte = (projet.budgetCollecte || 0) + montant;
        showNotification(`${montant} ajouté au budget du projet!`, 'success');
        return projet;
    }
    return null;
}

// Fonction pour obtenir les projets par statut et catégorie
function getProjets(statut = 'all', categorie = 'all') {
    return projetsData.filter(projet => {
        const matchStatut = statut === 'all' || projet.statut === statut;
        const matchCategorie = categorie === 'all' || projet.categorie === categorie;
        return matchStatut && matchCategorie;
    });
}

// Fonction pour obtenir le résumé des projets
function getProjetsSummary() {
    const total = projetsData.length;
    const aFaire = projetsData.filter(p => p.statut === 'a_faire').length;
    const enCours = projetsData.filter(p => p.statut === 'en_cours').length;
    const termines = projetsData.filter(p => p.statut === 'termine').length;
    
    const budgetTotal = projetsData.reduce((sum, p) => sum + (p.budgetTotal || 0), 0);
    const budgetCollecte = projetsData.reduce((sum, p) => sum + (p.budgetCollecte || 0), 0);
    
    return {
        total,
        aFaire,
        enCours,
        termines,
        budgetTotal,
        budgetCollecte,
        pourcentageCollecte: budgetTotal > 0 ? Math.round((budgetCollecte / budgetTotal) * 100) : 0
    };
}

// =====================================================
// EXPORT DES FONCTIONS GLOBALES
// =====================================================

// =====================================================
// FONCTIONS D'AFFICHAGE POUR LES NOUVELLES SECTIONS
// =====================================================

// Fonction pour créer une carte de camp/veillée
function createCampCard(item) {
    const isCamp = item.type === 'camp';
    const statusClass = item.statut === 'termine' ? 'status-done' : 'status-pending';
    const statusText = item.statut === 'termine' ? 'Réalisé' : 'Prévu';
    
    const card = document.createElement('div');
    card.className = `camp-card ${item.type} ${statusClass}`;
    card.innerHTML = `
        <div class="camp-header">
            <div class="camp-icon">
                <i class="fas ${isCamp ? 'fa-campground' : 'fa-fire'}"></i>
            </div>
            <div class="camp-status ${statusClass}">${statusText}</div>
        </div>
        <div class="camp-body">
            <h3 class="camp-name">${item.nom}</h3>
            <p class="camp-description">${item.description}</p>
            <div class="camp-details">
                <div class="detail-item">
                    <i class="fas fa-calendar"></i>
                    <span>${item.periode}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <span>${item.duree}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${item.lieu}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-users"></i>
                    <span>Max: ${item.participantsMax} pers.</span>
                </div>
            </div>
            <div class="camp-equipment">
                <h4><i class="fas fa-toolbox"></i> Équipements:</h4>
                <div class="equipment-tags">
                    ${item.equipements.map(eq => `<span class="tag">${eq}</span>`).join('')}
                </div>
            </div>
            <div class="camp-activities">
                <h4><i class="fas fa-list"></i> Activités:</h4>
                <ul>
                    ${item.activites.map(act => `<li>${act}</li>`).join('')}
                </ul>
            </div>
        </div>
        <div class="camp-footer">
            <div class="responsible">
                <i class="fas fa-user-tie"></i> ${item.responsable}
            </div>
            <div class="camp-actions">
                ${item.statut !== 'termine' ? 
                    `<button class="btn-icon" onclick="markCampAsDone(${item.id})" title="Marquer comme réalisé">
                        <i class="fas fa-check"></i>
                    </button>` : ''}
                <button class="btn-icon" onclick="editCamp(${item.id})" title="Modifier">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" onclick="deleteCamp(${item.id})" title="Supprimer">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
    return card;
}

// Fonction pour afficher les camps
function displayCamps(filter = 'all', statusFilter = 'all') {
    const grid = document.getElementById('campsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const items = getCampsEtVeillees(filter, statusFilter);
    
    items.forEach(item => {
        grid.appendChild(createCampCard(item));
    });
}

// Fonction pour créer une carte de sortie
function createSortieCard(sortie) {
    const statusClass = sortie.statut === 'termine' ? 'status-done' : 'status-pending';
    const statusText = sortie.statut === 'termine' ? 'Réalisée' : 'Préparée';
    
    const card = document.createElement('div');
    card.className = `sortie-card ${statusClass}`;
    card.innerHTML = `
        <div class="sortie-header">
            <div class="sortie-status ${statusClass}">${statusText}</div>
            <div class="sortie-branch">${sortie.branche}</div>
        </div>
        <div class="sortie-body">
            <h3 class="sortie-name">${sortie.nom}</h3>
            <p class="sortie-description">${sortie.description}</p>
            <div class="sortie-destination">
                <i class="fas fa-map-pin"></i>
                <a href="${sortie.lienDestination}" target="_blank" rel="noopener">${sortie.destination}</a>
            </div>
            <div class="sortie-details">
                <div class="detail-item">
                    <i class="fas fa-calendar"></i>
                    <span>${formatDate(sortie.datePrevue)}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <span>${sortie.duree}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-road"></i>
                    <span>${sortie.distance}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-signal"></i>
                    <span>Difficulté: ${sortie.difficulte}</span>
                </div>
            </div>
            <div class="sortie-material">
                <h4><i class="fas fa-suitcase"></i> Matériel requis:</h4>
                <div class="material-tags">
                    ${sortie.materiel.map(m => `<span class="tag">${m}</span>`).join('')}
                </div>
            </div>
            <div class="sortie-participants">
                <h4><i class="fas fa-users"></i> Participants (${sortie.participants.length}):</h4>
                <div class="participants-list">
                    ${sortie.participants.length > 0 ? 
                        sortie.participants.map(p => `<span class="participant-tag">${p}</span>`).join('') : 
                        '<span class="no-participants">Aucun participant inscrit</span>'}
                </div>
            </div>
        </div>
        <div class="sortie-footer">
            <div class="sortie-cost">
                <i class="fas fa-money-bill-wave"></i> $${sortie.coutEstime.toLocaleString()}
            </div>
            <div class="sortie-responsible">
                <i class="fas fa-user"></i> ${sortie.responsable}
            </div>
            <div class="sortie-actions">
                ${sortie.statut !== 'termine' ? `
                    <button class="btn-icon" onclick="inscrireParticipantPrompt(${sortie.id})" title="Inscrire un participant">
                        <i class="fas fa-user-plus"></i>
                    </button>
                    <button class="btn-icon" onclick="markSortieAsDone(${sortie.id})" title="Marquer comme réalisée">
                        <i class="fas fa-check"></i>
                    </button>
                ` : ''}
                <button class="btn-icon" onclick="editSortie(${sortie.id})" title="Modifier">
                    <i class="fas fa-edit"></i>
                </button>
            </div>
        </div>
    `;
    return card;
}

// Fonction pour afficher les sorties
function displaySorties(statusFilter = 'all', brancheFilter = 'all') {
    const grid = document.getElementById('sortiesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const sorties = getSortiesPreparees(statusFilter, brancheFilter);
    
    sorties.forEach(sortie => {
        grid.appendChild(createSortieCard(sortie));
    });
}

// Fonction pour créer une carte d'activité
function createActiviteCard(activite) {
    const statusClass = activite.statut === 'termine' ? 'status-done' : 'status-pending';
    const statusText = activite.statut === 'termine' ? 'Réalisée' : 'Préparée';
    const isDone = activite.statut === 'termine';
    
    const card = document.createElement('div');
    card.className = `activite-card ${activite.categorie} ${statusClass}`;
    card.innerHTML = `
        <div class="activite-header">
            <div class="activite-type">${activite.categorie}</div>
            <div class="activite-status ${statusClass}">${statusText}</div>
        </div>
        <div class="activite-body">
            <h3 class="activite-name">${activite.nom}</h3>
            <p class="activite-description">${activite.description}</p>
            <div class="activite-details">
                <div class="detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${activite.lieu}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-users"></i>
                    <span>${isDone ? activite.participants : activite.participantsPrevus} participants</span>
                </div>
                ${isDone ? `
                    <div class="detail-item">
                        <i class="fas fa-calendar-check"></i>
                        <span>${formatDate(activite.dateRealisation)}</span>
                    </div>
                ` : `
                    <div class="detail-item">
                        <i class="fas fa-calendar"></i>
                        <span>Prévu: ${formatDate(activite.datePrevue)}</span>
                    </div>
                `}
            </div>
            ${isDone ? `
                <div class="activite-report">
                    <h4><i class="fas fa-file-alt"></i> Rapport:</h4>
                    <p>${activite.rapport}</p>
                </div>
                <div class="activite-skills">
                    <h4><i class="fas fa-award"></i> Compétences acquises:</h4>
                    <div class="skills-tags">
                        ${activite.competencesAcquises.map(c => `<span class="skill-tag">${c}</span>`).join('')}
                    </div>
                </div>
            ` : `
                <div class="activite-skills-target">
                    <h4><i class="fas fa-bullseye"></i> Compétences visées:</h4>
                    <div class="skills-tags">
                        ${activite.competencesVisees.map(c => `<span class="skill-tag target">${c}</span>`).join('')}
                    </div>
                </div>
                <div class="activite-material-required">
                    <h4><i class="fas fa-toolbox"></i> Matériel requis:</h4>
                    <div class="material-tags">
                        ${activite.materielRequis.map(m => `<span class="tag">${m}</span>`).join('')}
                    </div>
                </div>
            `}
        </div>
        <div class="activite-footer">
            <div class="responsible">
                <i class="fas fa-user-tie"></i> ${activite.responsable}
            </div>
            <div class="activite-actions">
                ${!isDone ? `
                    <button class="btn-icon" onclick="markActiviteDonePrompt(${activite.id})" title="Marquer comme réalisée">
                        <i class="fas fa-check"></i>
                    </button>
                ` : ''}
                <button class="btn-icon" onclick="editActivite(${activite.id})" title="Modifier">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" onclick="deleteActiviteItem(${activite.id})" title="Supprimer">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
    return card;
}

// Fonction pour afficher les activités
function displayActivites(statut = 'all', categorie = 'all', branche = 'all') {
    const container = document.getElementById('activitesContent');
    if (!container) return;
    
    container.innerHTML = '';
    const activites = getActivites(statut, categorie, branche);
    
    activites.forEach(activite => {
        container.appendChild(createActiviteCard(activite));
    });
}

// Fonction pour créer une carte de cérémonie
function createCeremonieCard(ceremonie) {
    const statusClass = ceremonie.statut === 'termine' ? 'status-done' : 'status-pending';
    const statusText = ceremonie.statut === 'termine' ? 'Réalisée' : 'Préparée';
    const isDone = ceremonie.statut === 'termine';
    
    const card = document.createElement('div');
    card.className = `ceremonie-card ${ceremonie.type} ${statusClass}`;
    card.innerHTML = `
        <div class="ceremonie-header">
            <div class="ceremonie-type">${ceremonie.type}</div>
            <div class="ceremonie-status ${statusClass}">${statusText}</div>
        </div>
        <div class="ceremonie-body">
            <h3 class="ceremonie-name">${ceremonie.nom}</h3>
            <p class="ceremonie-description">${ceremonie.description}</p>
            <div class="ceremonie-details">
                <div class="detail-item">
                    <i class="fas fa-calendar"></i>
                    <span>${isDone ? formatDate(ceremonie.dateRealisation) : formatDate(ceremonie.datePrevue)}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${ceremonie.lieu}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-users"></i>
                    <span>${isDone ? ceremonie.participantsReels : ceremonie.participantsAttendus} participants</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-coins"></i>
                    <span>Budget: $${ceremonie.budgetEstime.toLocaleString()}</span>
                </div>
            </div>
            ${!isDone ? `
                <div class="ceremonie-program">
                    <h4><i class="fas fa-clock"></i> Programmation:</h4>
                    <div class="program-timeline">
                        ${ceremonie.programmation.map(p => `
                            <div class="program-item">
                                <span class="time">${p.heure}</span>
                                <span class="activity">${p.activite}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="ceremonie-material">
                    <h4><i class="fas fa-box"></i> Matériel requis:</h4>
                    <div class="material-tags">
                        ${ceremonie.materielRequis.map(m => `<span class="tag">${m}</span>`).join('')}
                    </div>
                </div>
                <div class="ceremonie-invites">
                    <h4><i class="fas fa-envelope"></i> Invités:</h4>
                    <div class="invites-list">
                        ${ceremonie.invites.map(i => `<span class="invite-tag">${i}</span>`).join('')}
                    </div>
                </div>
            ` : `
                <div class="ceremonie-report">
                    <h4><i class="fas fa-file-alt"></i> Rapport:</h4>
                    <p>${ceremonie.rapport}</p>
                </div>
            `}
        </div>
        <div class="ceremonie-footer">
            <div class="organizer">
                <i class="fas fa-user-tie"></i> ${ceremonie.organisateur}
            </div>
            <div class="ceremonie-actions">
                ${!isDone ? `
                    <button class="btn-icon" onclick="markCeremonieDonePrompt(${ceremonie.id})" title="Marquer comme réalisée">
                        <i class="fas fa-check"></i>
                    </button>
                ` : ''}
                <button class="btn-icon" onclick="editCeremonie(${ceremonie.id})" title="Modifier">
                    <i class="fas fa-edit"></i>
                </button>
            </div>
        </div>
    `;
    return card;
}

// Fonction pour afficher les cérémonies
function displayCeremonies(statut = 'all', type = 'all') {
    const grid = document.getElementById('ceremoniesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const ceremonies = getCeremonies(statut, type);
    
    ceremonies.forEach(ceremonie => {
        grid.appendChild(createCeremonieCard(ceremonie));
    });
}

// Fonction pour créer une carte de projet
function createProjetCard(projet) {
    const statusClass = projet.statut;
    const statusText = {
        'a_faire': 'À Faire',
        'en_cours': 'En Cours',
        'termine': 'Terminé'
    }[projet.statut];
    
    const budgetPercent = projet.budgetTotal > 0 ? Math.round((projet.budgetCollecte / projet.budgetTotal) * 100) : 0;
    
    const card = document.createElement('div');
    card.className = `projet-card ${statusClass}`;
    card.innerHTML = `
        <div class="projet-header">
            <div class="projet-category">${projet.categorie}</div>
            <div class="projet-status ${statusClass}">${statusText}</div>
        </div>
        <div class="projet-body">
            <h3 class="projet-name">${projet.nom}</h3>
            <p class="projet-description">${projet.description}</p>
            <div class="projet-dates">
                <div class="date-item">
                    <i class="fas fa-play"></i>
                    <span>${projet.dateDebut ? formatDate(projet.dateDebut) : formatDate(projet.dateDebutPrevue)}</span>
                </div>
                <div class="date-item">
                    <i class="fas fa-flag-checkered"></i>
                    <span>${formatDate(projet.dateFinPrevue)}</span>
                </div>
            </div>
            <div class="projet-budget">
                <div class="budget-header">
                    <span>Budget</span>
                    <span>${budgetPercent}% collecté</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${budgetPercent}%"></div>
                </div>
                <div class="budget-details">
                    <span>$${projet.budgetCollecte.toLocaleString()} / $${projet.budgetTotal.toLocaleString()}</span>
                </div>
            </div>
            <div class="projet-steps">
                <h4><i class="fas fa-tasks"></i> Étapes:</h4>
                <div class="steps-list">
                    ${projet.etapes.map(e => `
                        <div class="step-item ${e.statut}">
                            <i class="fas ${e.statut === 'termine' ? 'fa-check-circle' : e.statut === 'en_cours' ? 'fa-spinner fa-spin' : 'fa-circle'}"></i>
                            <span>${e.nom}</span>
                            ${e.progression ? `<span class="progress">${e.progression}%</span>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="projet-team">
                <h4><i class="fas fa-users"></i> Équipe (${projet.equipe.length}):</h4>
                <div class="team-list">
                    ${projet.equipe.map(m => `<span class="member-tag">${m}</span>`).join('')}
                </div>
            </div>
            <div class="projet-beneficiaries">
                <i class="fas fa-heart"></i> <strong>Bénéficiaires:</strong> ${projet.beneficiaires}
            </div>
        </div>
        <div class="projet-footer">
            <div class="responsible">
                <i class="fas fa-user-tie"></i> ${projet.responsable}
            </div>
            <div class="projet-actions">
                <button class="btn-icon" onclick="addFundsPrompt(${projet.id})" title="Ajouter des fonds">
                    <i class="fas fa-plus-circle"></i>
                </button>
                <button class="btn-icon" onclick="addMemberPrompt(${projet.id})" title="Ajouter un membre">
                    <i class="fas fa-user-plus"></i>
                </button>
                ${projet.statut !== 'termine' ? `
                    <button class="btn-icon" onclick="advanceProjetStatus(${projet.id})" title="Avancer le statut">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                ` : ''}
                <button class="btn-icon" onclick="editProjet(${projet.id})" title="Modifier">
                    <i class="fas fa-edit"></i>
                </button>
            </div>
        </div>
    `;
    return card;
}

// Fonction pour afficher les projets
function displayProjets(statut = 'all', categorie = 'all') {
    const grid = document.getElementById('projetsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const projets = getProjets(statut, categorie);
    
    projets.forEach(projet => {
        grid.appendChild(createProjetCard(projet));
    });
}

// Fonction pour mettre à jour le résumé des projets
function updateProjetsSummary() {
    const summary = getProjetsSummary();
    
    const totalEl = document.getElementById('projetsTotal');
    const aFaireEl = document.getElementById('projetsAFaire');
    const enCoursEl = document.getElementById('projetsEnCours');
    const terminesEl = document.getElementById('projetsTermines');
    const budgetEl = document.getElementById('budgetGlobal');
    const budgetBar = document.getElementById('budgetProgressBar');
    
    if (totalEl) totalEl.textContent = summary.total;
    if (aFaireEl) aFaireEl.textContent = summary.aFaire;
    if (enCoursEl) enCoursEl.textContent = summary.enCours;
    if (terminesEl) terminesEl.textContent = summary.termines;
    if (budgetEl) budgetEl.textContent = summary.pourcentageCollecte + '%';
    if (budgetBar) budgetBar.style.width = summary.pourcentageCollecte + '%';
}

// Fonction pour mettre à jour le dashboard
function updateDashboard() {
    // Total camps prévus
    const campsPrepares = campsEtVeilleesData.filter(c => c.statut === 'prepare').length;
    const campsEl = document.getElementById('totalCamps');
    if (campsEl) campsEl.textContent = campsPrepares;
    
    // Total sorties préparées
    const sortiesPrepares = sortiesPrepareesData.filter(s => s.statut === 'prepare').length;
    const sortiesEl = document.getElementById('totalSorties');
    if (sortiesEl) sortiesEl.textContent = sortiesPrepares;
    
    // Projets en cours
    const projetsEnCours = projetsData.filter(p => p.statut === 'en_cours').length;
    const projetsEl = document.getElementById('totalProjetsEnCours');
    if (projetsEl) projetsEl.textContent = projetsEnCours;
    
    // Activités ce mois
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const activitesCeMois = activitesData.filter(a => {
        const date = a.datePrevue ? new Date(a.datePrevue) : new Date(a.dateRealisation);
        return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
    }).length;
    const activitesEl = document.getElementById('activitesCeMois');
    if (activitesEl) activitesEl.textContent = activitesCeMois;
    
    // Budget collecté
    const summary = getProjetsSummary();
    const budgetEl = document.getElementById('budgetCollecte');
    if (budgetEl) budgetEl.textContent = '$' + summary.budgetCollecte.toLocaleString();
    
    // Événements du mois dans le dashboard
    const dashboardEvents = document.getElementById('dashboardEvents');
    if (dashboardEvents) {
        dashboardEvents.innerHTML = '';
        const events = [
            ...activitesData.filter(a => a.statut === 'prepare'),
            ...sortiesPrepareesData.filter(s => s.statut === 'prepare'),
            ...ceremoniesPrepareesData.filter(c => c.statut === 'prepare')
        ].sort((a, b) => {
            const dateA = new Date(a.datePrevue || a.dateRealisation || Date.now());
            const dateB = new Date(b.datePrevue || b.dateRealisation || Date.now());
            return dateA - dateB;
        }).slice(0, 5);
        
        if (events.length === 0) {
            dashboardEvents.innerHTML = '<p class="no-events">Aucune activité prévue ce mois</p>';
        } else {
            events.forEach(event => {
                const item = document.createElement('div');
                item.className = 'dashboard-event-item';
                item.innerHTML = `
                    <div class="event-icon">
                        <i class="fas ${event.type === 'veillee' ? 'fa-fire' : event.type === 'camp' ? 'fa-campground' : 'fa-calendar'}"></i>
                    </div>
                    <div class="event-info">
                        <h4>${event.nom}</h4>
                        <p>${formatDate(event.datePrevue || event.dateRealisation)}</p>
                    </div>
                `;
                dashboardEvents.appendChild(item);
            });
        }
    }
}

// =====================================================
// FONCTIONS DE FILTRAGE
// =====================================================

function filterCamps(type) {
    displayCamps(type, 'all');
    updateFilterButtons('campsGrid', type);
}

function filterCampsByStatus(status) {
    displayCamps('all', status);
}

function filterSorties(filter) {
    displaySorties(filter, 'all');
}

function filterSortiesByStatus(status) {
    displaySorties(status, 'all');
}

function filterSortiesByBranche(branche) {
    displaySorties('all', branche);
}

function filterActivites(categorie) {
    displayActivites('all', categorie, 'all');
}

function switchActivitesTab(tab) {
    const status = tab === 'done' ? 'termine' : tab === 'prepared' ? 'prepare' : 'all';
    displayActivites(status, 'all', 'all');
    
    // Update tab buttons
    document.querySelectorAll('.activites-tabs .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

function filterCeremonies(type) {
    displayCeremonies('all', type);
}

function filterCeremoniesByStatus(status) {
    displayCeremonies(status, 'all');
}

function filterCeremoniesByType(type) {
    displayCeremonies('all', type);
}

function filterProjets(categorie) {
    displayProjets('all', categorie);
}

function filterProjetsByStatus(status) {
    displayProjets(status, 'all');
}

function filterProjetsByCategory(categorie) {
    displayProjets('all', categorie);
}

function updateFilterButtons(gridId, activeFilter) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    const buttons = grid.parentElement.querySelectorAll('.section-filters .filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === activeFilter) {
            btn.classList.add('active');
        }
    });
}

// =====================================================
// FONCTIONS UTILITAIRES POUR INTERACTIONS
// =====================================================

function markCampAsDone(id) {
    updateCampOuVeillee(id, { statut: 'termine', dateRealisation: new Date().toISOString() });
    displayCamps();
    updateDashboard();
}

function deleteCamp(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce camp/veillée ?')) {
        deleteCampOuVeillee(id);
        displayCamps();
        updateDashboard();
    }
}

function inscrireParticipantPrompt(sortieId) {
    const nom = prompt('Nom du participant à inscrire:');
    if (nom) {
        inscrireParticipantSortie(sortieId, nom);
        displaySorties();
    }
}

function markActiviteDonePrompt(id) {
    const rapport = prompt('Rapport de l\'activité:');
    if (rapport !== null) {
        markActiviteAsDone(id, rapport);
        displayActivites();
        updateDashboard();
    }
}

function deleteActiviteItem(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette activité ?')) {
        deleteActivite(id);
        displayActivites();
        updateDashboard();
    }
}

function markCeremonieDonePrompt(id) {
    const rapport = prompt('Rapport de la cérémonie:');
    const participants = parseInt(prompt('Nombre de participants réels:') || '0');
    if (rapport !== null) {
        markCeremonieAsDone(id, rapport, participants);
        displayCeremonies();
        updateDashboard();
    }
}

function addFundsPrompt(projetId) {
    const montant = parseInt(prompt('Montant à ajouter ($):') || '0');
    if (montant > 0) {
        addFondsProjet(projetId, montant);
        displayProjets();
        updateProjetsSummary();
    }
}

function addMemberPrompt(projetId) {
    const nom = prompt('Nom du membre à ajouter:');
    if (nom) {
        addMembreEquipe(projetId, nom);
        displayProjets();
    }
}

function advanceProjetStatus(id) {
    const projet = projetsData.find(p => p.id === id);
    if (projet) {
        const nextStatus = {
            'a_faire': 'en_cours',
            'en_cours': 'termine'
        }[projet.statut];
        if (nextStatus) {
            changeProjetStatus(id, nextStatus);
            displayProjets();
            updateProjetsSummary();
        }
    }
}

// =====================================================
// STOCKAGE LOCAL (localStorage)
// =====================================================

const STORAGE_KEYS = {
    CAMPS: 'scoutsndp_camps',
    SORTIES: 'scoutsndp_sorties',
    ACTIVITES: 'scoutsndp_activites',
    CEREMONIES: 'scoutsndp_ceremonies',
    PROJETS: 'scoutsndp_projets',
    SCOUTS: 'scoutsndp_scouts',
    BADGES: 'scoutsndp_badges'
};

// Charger les données depuis localStorage
function loadFromStorage() {
    const camps = localStorage.getItem(STORAGE_KEYS.CAMPS);
    if (camps) campsEtVeilleesData = JSON.parse(camps);
    
    const sorties = localStorage.getItem(STORAGE_KEYS.SORTIES);
    if (sorties) sortiesPrepareesData = JSON.parse(sorties);
    
    const activites = localStorage.getItem(STORAGE_KEYS.ACTIVITES);
    if (activites) activitesData = JSON.parse(activites);
    
    const ceremonies = localStorage.getItem(STORAGE_KEYS.CEREMONIES);
    if (ceremonies) ceremoniesPrepareesData = JSON.parse(ceremonies);
    
    const projets = localStorage.getItem(STORAGE_KEYS.PROJETS);
    if (projets) projetsData = JSON.parse(projets);
}

// Sauvegarder les données dans localStorage
function saveToStorage() {
    localStorage.setItem(STORAGE_KEYS.CAMPS, JSON.stringify(campsEtVeilleesData));
    localStorage.setItem(STORAGE_KEYS.SORTIES, JSON.stringify(sortiesPrepareesData));
    localStorage.setItem(STORAGE_KEYS.ACTIVITES, JSON.stringify(activitesData));
    localStorage.setItem(STORAGE_KEYS.CEREMONIES, JSON.stringify(ceremoniesPrepareesData));
    localStorage.setItem(STORAGE_KEYS.PROJETS, JSON.stringify(projetsData));
}

// Fonctions modifiées pour sauvegarder automatiquement
function addCampOuVeilleeAndSave(data) {
    const result = addCampOuVeillee(data);
    saveToStorage();
    return result;
}

function updateCampOuVeilleeAndSave(id, updates) {
    const result = updateCampOuVeillee(id, updates);
    saveToStorage();
    return result;
}

function deleteCampOuVeilleeAndSave(id) {
    deleteCampOuVeillee(id);
    saveToStorage();
}

function addSortiePrepareeAndSave(data) {
    const result = addSortiePreparee(data);
    saveToStorage();
    return result;
}

function markSortieAsDoneAndSave(id) {
    const result = markSortieAsDone(id);
    saveToStorage();
    return result;
}

function inscrireParticipantSortieAndSave(sortieId, participantName) {
    const result = inscrireParticipantSortie(sortieId, participantName);
    saveToStorage();
    return result;
}

function addActiviteAndSave(data) {
    const result = addActivite(data);
    saveToStorage();
    return result;
}

function markActiviteAsDoneAndSave(id, rapport, competences, materiel) {
    const result = markActiviteAsDone(id, rapport, competences, materiel);
    saveToStorage();
    return result;
}

function deleteActiviteAndSave(id) {
    deleteActivite(id);
    saveToStorage();
}

function addCeremonieAndSave(data) {
    const result = addCeremonie(data);
    saveToStorage();
    return result;
}

function markCeremonieAsDoneAndSave(id, rapport, participants) {
    const result = markCeremonieAsDone(id, rapport, participants);
    saveToStorage();
    return result;
}

function addProjetAndSave(data) {
    const result = addProjet(data);
    saveToStorage();
    return result;
}

function changeProjetStatusAndSave(id, status) {
    const result = changeProjetStatus(id, status);
    saveToStorage();
    return result;
}

function addFondsProjetAndSave(projetId, montant) {
    const result = addFondsProjet(projetId, montant);
    saveToStorage();
    return result;
}

function addMembreEquipeAndSave(projetId, membre) {
    const result = addMembreEquipe(projetId, membre);
    saveToStorage();
    return result;
}

// =====================================================
// INITIALISATION AU CHARGEMENT
// =====================================================

document.addEventListener('DOMContentLoaded', function() {
    // Charger les données depuis le stockage
    loadFromStorage();
    
    // Afficher les nouvelles sections
    displayCamps();
    displaySorties();
    displayActivites();
    displayCeremonies();
    displayProjets();
    updateProjetsSummary();
    updateDashboard();
    
    console.log('✅ Données chargées depuis localStorage');
});

// =====================================================
// SYSTÈME DE BADGES ET PROGRESSION
// =====================================================

// Badges disponibles
const BADGES_CATALOG = [
    { id: 'premiers_secours', nom: 'Premiers Secours', icone: 'fa-medkit', categorie: 'sante', niveau: 1 },
    { id: 'cuisine', nom: 'Cuisine', icone: 'fa-utensils', categorie: 'vie_quotidienne', niveau: 1 },
    { id: 'orientation', nom: 'Orientation', icone: 'fa-compass', categorie: 'technique', niveau: 1 },
    { id: 'nœuds', nom: 'Nœuds', icone: 'fa-link', categorie: 'technique', niveau: 1 },
    { id: 'feu_camp', nom: 'Feu de Camp', icone: 'fa-fire', categorie: 'camping', niveau: 2 },
    { id: 'construction', nom: 'Construction', icone: 'fa-hammer', categorie: 'technique', niveau: 2 },
    { id: 'plantes', nom: 'Plantes', icone: 'fa-leaf', categorie: 'nature', niveau: 2 },
    { id: 'animaux', nom: 'Animaux', icone: 'fa-paw', categorie: 'nature', niveau: 2 },
    { id: 'citoyennete', nom: 'Citoyenneté', icone: 'fa-flag', categorie: 'engagement', niveau: 3 },
    { id: 'service', nom: 'Service Communautaire', icone: 'fa-hands-helping', categorie: 'engagement', niveau: 3 },
    { id: 'culture', nom: 'Culture', icone: 'fa-book', categorie: 'culture', niveau: 3 },
    { id: 'sport', nom: 'Sport', icone: 'fa-running', categorie: 'sport', niveau: 2 },
    { id: 'art', nom: 'Arts', icone: 'fa-palette', categorie: 'culture', niveau: 2 },
    { id: 'musique', nom: 'Musique', icone: 'fa-music', categorie: 'culture', niveau: 2 },
    { id: 'communication', nom: 'Communication', icone: 'fa-comments', categorie: 'competences', niveau: 3 },
    { id: 'leadership', nom: 'Leadership', icone: 'fa-crown', categorie: 'competences', niveau: 3 }
];

// Niveaux de progression
const NIVEAUX_PROGRESSION = {
    louveteaux: ['Louveteau', 'Louveteau Confirmé', 'Louveteau Aigle'],
    eclaireurs: ['Éclaireur', 'Éclaireur Confirmé', 'Éclaireur Aigle'],
    pionniers: ['Pionnier', 'Pionnier Confirmé', 'Pionnier Aigle'],
    routiers: ['Routier', 'Routier Confirmé', 'Routier Aigle']
};

// Données de progression des scouts
let scoutsProgressionData = {};

// Charger la progression depuis localStorage
function loadScoutsProgression() {
    const stored = localStorage.getItem(STORAGE_KEYS.BADGES);
    if (stored) {
        scoutsProgressionData = JSON.parse(stored);
    }
}

// Sauvegarder la progression
function saveScoutsProgression() {
    localStorage.setItem(STORAGE_KEYS.BADGES, JSON.stringify(scoutsProgressionData));
}

// Initialiser la progression d'un scout
function initScoutProgression(scoutId, branche) {
    if (!scoutsProgressionData[scoutId]) {
        scoutsProgressionData[scoutId] = {
            scoutId: scoutId,
            branche: branche,
            niveau: 0,
            badges: [],
            activitesCompletees: 0,
            campsParticipes: 0,
            sortiesRealisees: 0,
            dateInscription: new Date().toISOString()
        };
        saveScoutsProgression();
    }
}

// Attribuer un badge à un scout
function attribuerBadge(scoutId, badgeId) {
    initScoutProgression(scoutId, scoutsData.find(s => s.id === scoutId)?.category || 'louveteaux');
    
    const progression = scoutsProgressionData[scoutId];
    if (!progression.badges.includes(badgeId)) {
        progression.badges.push(badgeId);
        
        // Vérifier si le scout peut passer au niveau supérieur
        checkLevelUp(scoutId);
        
        saveScoutsProgression();
        showNotification('Badge attribué avec succès!', 'success');
        return true;
    }
    showNotification('Ce scout possède déjà ce badge!', 'info');
    return false;
}

// Vérifier si le scout peut passer au niveau supérieur
function checkLevelUp(scoutId) {
    const progression = scoutsProgressionData[scoutId];
    const badgesRequis = [5, 10, 15]; // Nombre de badges requis pour chaque niveau
    
    for (let i = 0; i < badgesRequis.length; i++) {
        if (progression.badges.length >= badgesRequis[i] && progression.niveau < i + 1) {
            progression.niveau = i + 1;
            const niveauNom = NIVEAUX_PROGRESSION[progression.branche][i];
            showNotification(`🎉 Félicitations! ${scoutId} est maintenant ${niveauNom}!`, 'success');
            return true;
        }
    }
    return false;
}

// Créer une carte de progression pour un scout
function createScoutProgressionCard(scout) {
    const progression = scoutsProgressionData[scout.id] || {
        niveau: 0,
        badges: [],
        activitesCompletees: 0,
        campsParticipes: 0,
        sortiesRealisees: 0
    };
    
    const niveauNom = NIVEAUX_PROGRESSION[scout.category]?.[progression.niveau] || scout.category;
    const badgesRequis = [5, 10, 15];
    const prochainNiveau = progression.niveau < 3 ? badgesRequis[progression.niveau] : null;
    const pourcentage = prochainNiveau ? Math.round((progression.badges.length / prochainNiveau) * 100) : 100;
    
    const card = document.createElement('div');
    card.className = 'progression-card';
    card.innerHTML = `
        <div class="scout-progress-header">
            <div class="scout-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="scout-info">
                <h3>${scout.name}</h3>
                <span class="scout-level">${niveauNom}</span>
            </div>
        </div>
        <div class="scout-progress-body">
            <div class="progress-section">
                <h4>Progression vers le prochain niveau</h4>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${pourcentage}%"></div>
                </div>
                <p class="progress-text">${progression.badges.length} / ${prochainNiveau || 'Max'} badges</p>
            </div>
            <div class="badges-section">
                <h4>Badges (${progression.badges.length})</h4>
                <div class="badges-list">
                    ${progression.badges.length > 0 ? progression.badges.map(badgeId => {
                        const badge = BADGES_CATALOG.find(b => b.id === badgeId);
                        return badge ? `
                            <div class="badge-item" title="${badge.nom}">
                                <i class="fas ${badge.icone}"></i>
                                <span>${badge.nom}</span>
                            </div>
                        ` : '';
                    }).join('') : '<p class="no-badges">Aucun badge encore</p>'}
                </div>
            </div>
            <div class="stats-section">
                <div class="stat">
                    <i class="fas fa-calendar-check"></i>
                    <span>${progression.activitesCompletees} activités</span>
                </div>
                <div class="stat">
                    <i class="fas fa-campground"></i>
                    <span>${progression.campsParticipes} camps</span>
                </div>
                <div class="stat">
                    <i class="fas fa-hiking"></i>
                    <span>${progression.sortiesRealisees} sorties</span>
                </div>
            </div>
        </div>
        <div class="scout-progress-footer">
            <button class="btn btn-primary btn-sm" onclick="openBadgeModalForScout(${scout.id})">
                <i class="fas fa-plus"></i> Attribuer un badge
            </button>
        </div>
    `;
    return card;
}

// Afficher la grille de progression
function displayProgression(brancheFilter = 'all') {
    const grid = document.getElementById('progressionGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const filteredScouts = brancheFilter === 'all' 
        ? scoutsData 
        : scoutsData.filter(s => s.category === brancheFilter);
    
    filteredScouts.forEach(scout => {
        initScoutProgression(scout.id, scout.category);
        grid.appendChild(createScoutProgressionCard(scout));
    });
    
    // Afficher aussi les badges disponibles
    displayBadgesCatalog();
}

// Afficher le catalogue des badges
function displayBadgesCatalog() {
    const grid = document.getElementById('badgesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    BADGES_CATALOG.forEach(badge => {
        const badgeEl = document.createElement('div');
        badgeEl.className = 'badge-catalog-item';
        badgeEl.innerHTML = `
            <div class="badge-icon">
                <i class="fas ${badge.icone}"></i>
            </div>
            <div class="badge-info">
                <h4>${badge.nom}</h4>
                <span class="badge-category">${badge.categorie}</span>
                <span class="badge-level">Niveau ${badge.niveau}</span>
            </div>
        `;
        grid.appendChild(badgeEl);
    });
}

// Ouvrir la modale d'attribution de badge
function openBadgeModalForScout(scoutId) {
    const scout = scoutsData.find(s => s.id === scoutId);
    if (!scout) return;
    
    const progression = scoutsProgressionData[scoutId];
    const badgesManquants = BADGES_CATALOG.filter(b => !progression.badges.includes(b.id));
    
    let optionsHtml = badgesManquants.map(b => 
        `<option value="${b.id}">${b.nom} (Niveau ${b.niveau})</option>`
    ).join('');
    
    if (badgesManquants.length === 0) {
        showNotification('Ce scout a déjà tous les badges!', 'info');
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Attribuer un badge à ${scout.name}</h3>
                <button class="modal-close" onclick="this.closest('.modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>Sélectionner un badge:</label>
                    <select id="badgeSelect" class="form-control">
                        ${optionsHtml}
                    </select>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" onclick="submitBadge(${scoutId})">Attribuer</button>
                <button class="btn btn-secondary" onclick="this.closest('.modal').remove()">Annuler</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

// Soumettre l'attribution de badge
function submitBadge(scoutId) {
    const badgeId = document.getElementById('badgeSelect').value;
    if (badgeId) {
        attribuerBadge(scoutId, badgeId);
        document.querySelector('.modal').remove();
        displayProgression();
    }
}

// =====================================================
// EXPORT PDF
// =====================================================

function exportProgressionPDF() {
    // Créer le contenu du rapport
    let content = `
RAPPORT DE PROGRESSION DES SCOUTS NDP
======================================

Date: ${new Date().toLocaleDateString('fr-FR')}

`;

    // Statistiques générales
    const totalBadges = Object.values(scoutsProgressionData).reduce((sum, p) => sum + p.badges.length, 0);
    const totalScouts = Object.keys(scoutsProgressionData).length;
    
    content += `STATISTIQUES GÉNÉRALES
------------------------
Nombre de scouts: ${totalScouts}
Total badges attribués: ${totalBadges}
Moyenne badges/scout: ${totalScouts > 0 ? (totalBadges / totalScouts).toFixed(1) : 0}

`;

    // Progression par scout
    content += `PROGRESSION PAR SCOUT
---------------------

`;
    
    scoutsData.forEach(scout => {
        const progression = scoutsProgressionData[scout.id];
        if (progression) {
            const niveauNom = NIVEAUX_PROGRESSION[scout.category]?.[progression.niveau] || scout.category;
            content += `
${scout.name} (${scout.category})
- Niveau: ${niveauNom}
- Badges: ${progression.badges.length}
- Activités: ${progression.activitesCompletees}
- Camps: ${progression.campsParticipes}
- Sorties: ${progression.sortiesRealisees}
`;
            if (progression.badges.length > 0) {
                content += `- Liste des badges:\n`;
                progression.badges.forEach(badgeId => {
                    const badge = BADGES_CATALOG.find(b => b.id === badgeId);
                    if (badge) {
                        content += `  • ${badge.nom}\n`;
                    }
                });
            }
            content += `\n`;
        }
    });

    // Créer et télécharger le fichier
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Progression_Scouts_NDP_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Rapport exporté avec succès!', 'success');
}

// Fonction de filtrage de la progression
function filterProgression(branche) {
    displayProgression(branche);
}

// Initialiser la progression au chargement
document.addEventListener('DOMContentLoaded', function() {
    loadScoutsProgression();
    // Initialiser la progression pour tous les scouts existants
    scoutsData.forEach(scout => initScoutProgression(scout.id, scout.category));
});

window.ScoutsNDP = {
    // Fonctions existantes
    addScout,
    addChef,
    addGalleryItem,
    scoutsData,
    chefsData,
    galleryData,
    
    // Camps et Veillées
    campsEtVeilleesData,
    addCampOuVeillee,
    updateCampOuVeillee,
    deleteCampOuVeillee,
    getCampsEtVeillees,
    
    // Sorties préparées
    sortiesPrepareesData,
    addSortiePreparee,
    updateSortiePreparee,
    markSortieAsDone,
    inscrireParticipantSortie,
    getSortiesPreparees,
    
    // Activités
    activitesData,
    addActivite,
    markActiviteAsDone,
    updateActivite,
    deleteActivite,
    getActivites,
    
    // Cérémonies
    ceremoniesPrepareesData,
    addCeremonie,
    updateCeremonie,
    markCeremonieAsDone,
    getCeremonies,
    
    // Projets
    projetsData,
    addProjet,
    updateProjet,
    changeProjetStatus,
    updateEtapeProjet,
    addMembreEquipe,
    addFondsProjet,
    getProjets,
    getProjetsSummary,
    
    // Fonctions d'affichage
    displayCamps,
    displaySorties,
    displayActivites,
    displayCeremonies,
    displayProjets,
    updateDashboard,
    updateProjetsSummary,
    
    // Progression et Badges
    BADGES_CATALOG,
    scoutsProgressionData,
    attribuerBadge,
    displayProgression,
    displayBadgesCatalog,
    exportProgressionPDF,
    filterProgression,
    
    // Stockage
    saveToStorage,
    loadFromStorage
};
