// 頁面滾動效果
window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY;

    if (scrollPos > 50) {
        document.querySelector('header').style.background = 'rgba(3, 3, 4, 0.95)';
    } else {
        document.querySelector('header').style.background = 'rgba(3, 3, 4, 0.8)';
    }
});

// 等待DOM完全載入後執行
document.addEventListener('DOMContentLoaded', function () {
    // 處理FAQ項目的點擊事件
    const questions = document.querySelectorAll('.faq-question');
    
    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // 關閉所有開啟的問題
            questions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });
            
            // 如果之前是關閉的，則打開它
            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
    
    // 處理類別篩選
    const categoryButtons = document.querySelectorAll('.category-btn');
    const faqItems = document.querySelectorAll('.faq-item');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // 更改按鈕狀態
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 篩選FAQ項目
            faqItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});