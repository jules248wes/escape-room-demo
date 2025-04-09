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

    
    // 表單提交事件處理
    initContactForm();
});


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