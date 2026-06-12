// Simple i18n (internationalization) system

const i18nData = {
    'zh-tw': {
        nav_brand: '貓咪大魔丸 の Profile',
        nav_home: '主頁',
        nav_works: '作品',
        nav_contact: '聯繫我',
        footer_text: '感謝瀏覽 ♡'
    },
    'zh-cn': {
        nav_brand: '猫咪大魔丸 の Profile',
        nav_home: '主页',
        nav_works: '作品',
        nav_contact: '联系我',
        footer_text: '感谢浏览 ♡'
    },
    'en': {
        nav_brand: 'Kitty Magician\'s Profile',
        nav_home: 'Home',
        nav_works: 'Works',
        nav_contact: 'Contact',
        footer_text: 'Thank you for visiting ♡'
    },
    'ja': {
        nav_brand: '猫魔丸 の プロフィール',
        nav_home: 'ホーム',
        nav_works: 'ワークス',
        nav_contact: 'お問い合わせ',
        footer_text: 'ご来訪ありがとうございます ♡'
    }
};

function setLang(lang) {
    localStorage.setItem('lang', lang);
    
    // Update language button display
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        const langLabels = {
            'zh-tw': '繁',
            'zh-cn': '简',
            'en': 'EN',
            'ja': '日'
        };
        langBtn.textContent = langLabels[lang] || '繁';
    }
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nData[lang] && i18nData[lang][key]) {
            el.textContent = i18nData[lang][key];
        }
    });
    
    // Trigger custom event for page-specific language updates
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function toggleLangMenu() {
    const menu = document.getElementById('lang-menu');
    if (menu) {
        menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('lang') || 'zh-tw';
    setLang(savedLang);
});
