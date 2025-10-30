export default function loadMenu() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu-page');

    // Header del menú
    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');

    const title = document.createElement('h2');
    title.textContent = 'Menú Degustación Vic';
    title.classList.add('menu-title');

    const subtitle = document.createElement('p');
    subtitle.textContent = 'Un viaje sensorial a través de sabores innovadores';
    subtitle.classList.add('menu-subtitle');

    menuHeader.appendChild(title);
    menuHeader.appendChild(subtitle);

    // Datos del menú con imágenes de Pexels (estas funcionan correctamente)
    const menuData = [
        {
            name: 'Ceviche de Mar y Humo',
            desc: 'Pescado de temporada marinado en leche de tigre de carbón, con hilos de batata frita y aire de limón.',
            image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            name: 'Ravioles Negros de Tinta',
            desc: 'Pasta casera rellena de ricotta y algas, servida con mantequilla de salvia y caviar de aceite de oliva.',
            image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            name: 'Cordero en Dos Texturas',
            desc: 'Paletilla cocida a baja temperatura por 18 horas y crujiente de piel, acompañado de puré de tubérculos ahumados.',
            image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            name: 'Pulpo a la Brasa',
            desc: 'Tentáculos tiernos sellados al carbón con papas confitadas, pimentón ahumado y aceite de hierbas mediterráneas.',
            image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            name: 'Esfera de Chocolate Intenso',
            desc: 'Mousse de chocolate 80% encapsulado, que se derrite al contacto con salsa de café caliente y oro comestible.',
            image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            name: 'Tarta Deconstruida de Limón',
            desc: 'Miga de galleta crujiente, cremoso de limón sutil y merengue tostado al momento, con un toque de bergamota.',
            image: 'https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
    ];

    // Grid del menú
    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');

    menuData.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('menu-card');

        const cardBg = document.createElement('div');
        cardBg.classList.add('menu-card-bg');
        cardBg.style.backgroundImage = `url('${item.image}')`;

        const overlay = document.createElement('div');
        overlay.classList.add('menu-card-overlay');

        const cardTitle = document.createElement('h3');
        cardTitle.textContent = item.name;
        cardTitle.classList.add('menu-card-title');

        const cardDesc = document.createElement('p');
        cardDesc.textContent = item.desc;
        cardDesc.classList.add('menu-card-desc');

        overlay.appendChild(cardTitle);
        overlay.appendChild(cardDesc);
        
        card.appendChild(cardBg);
        card.appendChild(overlay);
        
        menuGrid.appendChild(card);
    });

    menuPage.appendChild(menuHeader);
    menuPage.appendChild(menuGrid);
    
    contentDiv.appendChild(menuPage);
}