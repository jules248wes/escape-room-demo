// 簡單的視差滾動效果
window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY;

    if (scrollPos > 50) {
        document.querySelector('header').style.background = 'rgba(3, 3, 4, 0.95)';
    } else {
        document.querySelector('header').style.background = 'rgba(3, 3, 4, 0.8)';
    }

    // 簡單的粒子效果
    const particles = document.querySelector('.mystery-particles');
    particles.style.transform = `translateY(${scrollPos * 0.4}px)`;
});


// 輪播功能（自動輪播版本）
document.addEventListener('DOMContentLoaded', function () {
    const dots = document.querySelectorAll('.news-dot');
    const slide = document.querySelector('.news-slide');
    const itemCount = document.querySelectorAll('.news-item').length;
    const prevBtn = document.querySelector('.news-arrow.prev');
    const nextBtn = document.querySelector('.news-arrow.next');
    let currentIndex = 0;

    // 更新輪播狀態的函數
    function updateCarousel() {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // 切換到下一張的函數
    function nextSlide() {
        currentIndex = (currentIndex + 1) % itemCount;
        updateCarousel();
    }

    // 切換到上一張的函數
    function prevSlide() {
        currentIndex = (currentIndex - 1 + itemCount) % itemCount;
        updateCarousel();
    }

    // 設定自動輪播，每3秒切換一次
    let autoSlideInterval = setInterval(nextSlide, 4000);

    // 當點擊導航點時，也要更新當前索引
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();

            // 重置自動輪播計時器
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(nextSlide, 4000);
        });
    });

    // 左右箭頭事件
    if(nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            // 重置自動輪播計時器
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(nextSlide, 4000);
        });
    }

    if(prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            // 重置自動輪播計時器
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(nextSlide, 4000);
        });
    }

    // 滑鼠移入暫停自動輪播，移出恢復
    const newsContainer = document.querySelector('.news-container');
    if (newsContainer) {
        newsContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });

        newsContainer.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(nextSlide, 4000);
        });
    }
});