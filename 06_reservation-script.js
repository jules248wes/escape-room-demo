// 設定日期最小值為今天
document.addEventListener('DOMContentLoaded', function () {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const formattedToday = `${yyyy}-${mm}-${dd}`;

    document.getElementById('date').min = formattedToday;

    // 增加日期選擇器的可見性
    const dateInput = document.getElementById('date');
    dateInput.addEventListener('click', function () {
        this.showPicker();
    });


    // 表單提交事件
    const form = document.getElementById('reservationForm');
    form.addEventListener('submit', validateAndSubmit);



    // 模擬視窗關閉按鈕
    document.querySelector('.close-btn').addEventListener('click', closeModal);
    document.querySelector('.btn-close-modal').addEventListener('click', closeModal);

    // 當點擊模態窗外部時也關閉模態窗
    window.addEventListener('click', function (event) {
        const modal = document.getElementById('confirmation-modal');
        if (event.target === modal) {
            closeModal();
        }
    });
});


// 表單驗證和提交
function validateAndSubmit(event) {
    event.preventDefault();

    // 清除所有錯誤訊息
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.textContent = '');

    let isValid = true;

    // 驗證主題
    const theme = document.getElementById('theme');
    if (!theme.value) {
        document.getElementById('theme-error').textContent = '請選擇密室主題';
        isValid = false;
    }

    // 驗證日期
    const date = document.getElementById('date');
    if (!date.value) {
        document.getElementById('date-error').textContent = '請選擇預約日期';
        isValid = false;
    }

    // 驗證時段
    const time = document.getElementById('time');
    if (!time.value) {
        document.getElementById('time-error').textContent = '請選擇預約時段';
        isValid = false;
    }

    // 驗證人數
    const people = document.getElementById('people');
    if (!people.value) {
        document.getElementById('people-error').textContent = '請輸入參加人數';
        isValid = false;
    } else if (people.value < 1 || people.value > 16) {
        document.getElementById('people-error').textContent = '人數必須在1-16人之間';
        isValid = false;
    }

    // 驗證姓名
    const name = document.getElementById('name');
    if (!name.value.trim()) {
        document.getElementById('name-error').textContent = '請輸入姓名';
        isValid = false;
    }

    // 驗證手機
    const phone = document.getElementById('phone');
    if (!phone.value.trim()) {
        document.getElementById('phone-error').textContent = '請輸入手機號碼';
        isValid = false;
    } else if (!phone.checkValidity()) {
        document.getElementById('phone-error').textContent = '請輸入有效的台灣手機號碼';
        isValid = false;
    }

    // 驗證郵件
    const email = document.getElementById('email');
    if (!email.value.trim()) {
        document.getElementById('email-error').textContent = '請輸入電子郵件';
        isValid = false;
    } else if (!email.checkValidity()) {
        document.getElementById('email-error').textContent = '請輸入有效的電子郵件格式';
        isValid = false;
    }

    // 驗證同意條款
    const agreement = document.getElementById('agreement');
    if (!agreement.checked) {
        document.getElementById('agreement-error').textContent = '請閱讀並同意預約條款';
        isValid = false;
    }

    // 如果驗證通過，顯示確認訊息
    if (isValid) {
        document.querySelector('.email-highlight').textContent = email.value;
        document.getElementById('confirmation-modal').style.display = 'flex';
    }
}

// 關閉模擬訊息彈窗
function closeModal() {
    document.getElementById('confirmation-modal').style.display = 'none';
}

// 頁面滾動效果
window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY;

    if (scrollPos > 50) {
        document.querySelector('header').style.background = 'rgba(3, 3, 4, 0.95)';
    } else {
        document.querySelector('header').style.background = 'rgba(3, 3, 4, 0.8)';
    }
});