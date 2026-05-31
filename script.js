document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const langLabel = document.getElementById('lang-label');
    const translatableElements = document.querySelectorAll('[data-en][data-id]');

    let currentLang = localStorage.getItem('katalog-lang') || 'id';

    const updateLanguage = (lang) => {
        translatableElements.forEach(el => {
            el.innerHTML = el.getAttribute(`data-${lang}`);
        });
        langLabel.textContent = lang === 'en' ? 'ID' : 'EN';
        localStorage.setItem('katalog-lang', lang);
        document.documentElement.lang = lang;
    };

    // Initial load
    updateLanguage(currentLang);

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'id' : 'en';
        updateLanguage(currentLang);
    });
});
