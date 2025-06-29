// 頁面滾動效果
window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY;

    if (scrollPos > 50) {
        document.querySelector('header').style.background = 'rgba(3, 3, 4, 0.95)';
    } else {
        document.querySelector('header').style.background = 'rgba(3, 3, 4, 0.8)';
    }
});

// 篩選功能的JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const peopleFilter = document.getElementById('people-filter');
    const difficultyFilter = document.getElementById('difficulty-filter');
    const cards = document.querySelectorAll('.card');

    // 篩選功能
    function filterCards() {
        const selectedPeople = peopleFilter.value;
        const selectedDifficulty = difficultyFilter.value;

        cards.forEach(card => {
            const cardPeople = card.getAttribute('data-people');
            const cardDifficulty = card.getAttribute('data-difficulty');

            const peopleMatch = selectedPeople === 'all' || cardPeople === selectedPeople;
            const difficultyMatch = selectedDifficulty === 'all' || cardDifficulty === selectedDifficulty;

            if (peopleMatch && difficultyMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // 監聽篩選器變化
    peopleFilter.addEventListener('change', filterCards);
    difficultyFilter.addEventListener('change', filterCards);
});