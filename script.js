// DOM готов
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== БУРГЕР-МЕНЮ =====
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');
    
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('open');
            navLinks.classList.toggle('active');
        });
        
        // Закрытие меню при клике на ссылку
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('open');
                navLinks.classList.remove('active');
            });
        });
    }
    
    // ===== АККОРДЕОН В УСЛУГАХ =====
    const accordionButtons = document.querySelectorAll('.accordion-btn');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const accordionItem = button.parentElement;
            const accordionContent = button.nextElementSibling;
            
            // Закрываем все открытые аккордеоны
            document.querySelectorAll('.accordion-item.active').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.maxHeight = null;
                }
            });
            
            // Открываем/закрываем текущий аккордеон
            if (accordionItem.classList.contains('active')) {
                accordionItem.classList.remove('active');
                accordionContent.style.maxHeight = null;
            } else {
                accordionItem.classList.add('active');
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            }
        });
    });
    
    // ===== ПЛАВНАЯ ПРОКРУТКА К ЯКОРЯМ =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== АНИМАЦИЯ ЭЛЕМЕНТОВ ПРИ СКРОЛЛЕ =====
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;
        
        revealElements.forEach(element => {
            const revealTop = element.getBoundingClientRect().top;
            
            if (revealTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };
    
    // Запускаем при загрузке и при скролле
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
    
    // ===== ИНИЦИАЛИЗАЦИЯ КАРТЫ (ЗАГЛУШКА) =====
    // В реальном проекте здесь будет код для инициализации карты
    console.log('Сайт салона красоты "ЭВА" загружен');
    
    // ===== ИНИЦИАЛИЗАЦИЯ АККОРДЕОНОВ =====
    // Устанавливаем максимальную высоту для открытых аккордеонов
    document.querySelectorAll('.accordion-item.active').forEach(item => {
        const content = item.querySelector('.accordion-content');
        if (content) {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

// ===== ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ =====
// Отслеживание кликов по кнопкам записи
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-pulse') || 
        e.target.classList.contains('online-btn') || 
        e.target.classList.contains('btn-hero')) {
        console.log('Клиент переходит к записи');
        // Здесь можно добавить аналитику
    }
});

// Фиксация хедера при скролле
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});