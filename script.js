// Анимации и переходы между страницами
document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления элементов при загрузке
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in, .chapter-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Инициализация анимаций
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Плавные переходы между страницами
    const pageLinks = document.querySelectorAll('a[href$=".html"]');
    
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === window.location.pathname) return;
            
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Анимация перехода
            const transition = document.querySelector('.page-transition');
            transition.style.animation = 'pageTransition 0.6s ease-out forwards';
            
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });

    // Анимация появления текста главы
    const chapterContent = document.querySelector('.chapter-content');
    if (chapterContent) {
        const paragraphs = chapterContent.querySelectorAll('p');
        
        paragraphs.forEach((paragraph, index) => {
            paragraph.style.opacity = '0';
            paragraph.style.transform = 'translateY(20px)';
            paragraph.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
            
            setTimeout(() => {
                paragraph.style.opacity = '1';
                paragraph.style.transform = 'translateY(0)';
            }, 100);
        });
    }

    // Интерактивность для карточек глав
    const chapterCards = document.querySelectorAll('.chapter-card');
    
    chapterCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Плавная прокрутка для внутренних ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Анимация загрузки страницы
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});