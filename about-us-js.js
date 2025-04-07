document.addEventListener('DOMContentLoaded', function() {
    // 頁面滾動效果 - 導航欄背景變化
    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY;
        
        if (scrollPos > 50) {
            document.querySelector('header').style.background = 'rgba(3, 3, 4, 0.95)';
        } else {
            document.querySelector('header').style.background = 'rgba(3, 3, 4, 0.8)';
        }
    });

    // 評價輪播功能
    initTestimonialSlider();
    
    // 表單提交事件處理
    initContactForm();
    
    // 動畫效果 - 滾動時顯示元素
    initScrollAnimations();
});

// 評價輪播功能
function initTestimonialSlider() {
    const slide = document.getElementById('testimonialSlide');
    const dots = document.querySelectorAll('.testimonial-dot');
    let currentIndex = 0;
    
    if (!slide || dots.length === 0) return;
    
    // 點擊導航點切換輪播
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            goToSlide(index);
        });
    });
    
    // 自動輪播
    let autoSlide = setInterval(() => {
        nextSlide();
    }, 5000);
    
    // 暫停自動輪播當滑鼠懸停在輪播上
    slide.parentElement.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });
    
    // 離開輪播區域時重啟自動輪播
    slide.parentElement.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => {
            nextSlide();
        }, 5000);
    });
    
    // 切換到指定幻燈片
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    // 下一張幻燈片
    function nextSlide() {
        currentIndex = (currentIndex + 1) % dots.length;
        updateSlider();
    }
    
    // 更新輪播位置和導航點狀態
    function updateSlider() {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        dots.forEach((dot, i) => {
            if (i === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
}

// 聯絡表單處理
function initContactForm() {
    const form = document.querySelector('.contact-form');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 獲取表單數據
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // 在實際應用中，這裡會將數據發送到後端
        // 以下僅為示範效果
        
        // 表單驗證
        if (!name || !email || !message) {
            alert('請填寫必填欄位');
            return;
        }
        
        // 顯示成功訊息
        alert('感謝您的訊息！我們會盡快回覆您。');
        
        // 重置表單
        form.reset();
    });
}

// 滾動動畫效果
function initScrollAnimations() {
    // 獲取所有需要動畫的元素
    const animatedElements = document.querySelectorAll('.feature-card, .team-member, .timeline-item, .contact-form');
    
    // 初始隱藏這些元素
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // 檢查元素是否在視口中
    function checkInView() {
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isInView = (rect.top <= window.innerHeight * 0.8);
            
            if (isInView) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }
    
    // 滾動時檢查
    window.addEventListener('scroll', checkInView);
    
    // 頁面加載時也檢查一次
    checkInView();
}