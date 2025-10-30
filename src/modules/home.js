export default function loadHome() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    
    const homePage = document.createElement('div');
    homePage.classList.add('home-page');

    const homeBg = document.createElement('div');
    homeBg.classList.add('home-bg');

    const heroContent = document.createElement('div');
    heroContent.classList.add('hero-content');

    const title = document.createElement('h1');
    title.textContent = 'Vic Restaurant';
    title.classList.add('hero-title');

    const subtitle = document.createElement('p');
    subtitle.textContent = 'Donde la Tradición se Encuentra con la Vanguardia';
    subtitle.classList.add('hero-subtitle');

    const description = document.createElement('p');
    description.textContent = 'Desde nuestra apertura, Vic Restaurant se ha posicionado como un faro de la innovación culinaria. Honramos las técnicas ancestrales y la riqueza del producto local, mientras experimentamos con tecnología y audacia para crear platos inesperados que cuentan una historia.';
    description.classList.add('hero-description');

    const ctaButton = document.createElement('button');
    ctaButton.textContent = 'Explorar Menú';
    ctaButton.classList.add('cta-button');
    ctaButton.addEventListener('click', () => {
        if (window.loadMenu) {
            window.loadMenu();
            document.getElementById('btn-menu').click();
        }
    });

    heroContent.appendChild(title);
    heroContent.appendChild(subtitle);
    heroContent.appendChild(description);
    heroContent.appendChild(ctaButton);

    homePage.appendChild(homeBg);
    homePage.appendChild(heroContent);
    
    contentDiv.appendChild(homePage);
}