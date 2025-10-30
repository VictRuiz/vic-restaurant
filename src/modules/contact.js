export default function loadContact() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact-page');

    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-content');

    const title = document.createElement('h2');
    title.textContent = 'Estamos Esperándote';
    title.classList.add('contact-title');

    const description = document.createElement('p');
    description.textContent = 'Reserva tu experiencia gastronómica única o contáctanos para eventos especiales y celebraciones.';
    description.classList.add('hero-description');

    // Grid de contacto
    const contactGrid = document.createElement('div');
    contactGrid.classList.add('contact-grid');

    const contactData = [
        {
            icon: '📞',
            label: 'Teléfono',
            detail: '(555) VIC-RESTAURANT'
        },
        {
            icon: '📧',
            label: 'Email',
            detail: '<a href="mailto:ruizv631@gmail.com">ruizv631@gmail.com</a>'
        },
        {
            icon: '📍',
            label: 'Ubicación',
            detail: 'Avenida de la Vanguardia, 123<br>Distrito Culinario'
        },
        {
            icon: '🕐',
            label: 'Horario',
            detail: 'Martes a Sábado<br>19:00 - 23:00'
        }
    ];

    contactData.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('contact-card');

        const icon = document.createElement('div');
        icon.textContent = item.icon;
        icon.classList.add('contact-icon');

        const label = document.createElement('div');
        label.textContent = item.label;
        label.classList.add('contact-label');

        const detail = document.createElement('div');
        detail.innerHTML = item.detail;
        detail.classList.add('contact-detail');

        card.appendChild(icon);
        card.appendChild(label);
        card.appendChild(detail);
        
        contactGrid.appendChild(card);
    });

    contactContent.appendChild(title);
    contactContent.appendChild(description);
    contactContent.appendChild(contactGrid);
    
    contactPage.appendChild(contactContent);
    contentDiv.appendChild(contactPage);
}