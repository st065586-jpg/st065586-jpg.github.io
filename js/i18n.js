// Simple i18n (internationalization) system

const LANGS = ['zh-tw', 'zh-cn', 'en', 'ja'];
const LANG_LABELS = { 'zh-tw': '繁', 'zh-cn': '简', 'en': 'EN', 'ja': '日' };

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

    // Update language button label
    var langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.textContent = LANG_LABELS[lang] || '繁';

    // Update active class on menu items
    document.querySelectorAll('.lang-menu-item').forEach(function(item, idx) {
        item.classList.toggle('active', LANGS[idx] === lang);
    });

    // Update all data-i18n elements
    var data = i18nData[lang] || i18nData['zh-tw'];
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        if (data[key] !== undefined) el.textContent = data[key];
    });

    // Close the menu
    var menu = document.getElementById('lang-menu');
    if (menu) menu.classList.remove('open');

    // Trigger custom event for page-specific language updates
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
}

function toggleLangMenu() {
    var menu = document.getElementById('lang-menu');
    if (menu) menu.classList.toggle('open');
}

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.lang-wrapper')) {
        var menu = document.getElementById('lang-menu');
        if (menu) menu.classList.remove('open');
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    var savedLang = localStorage.getItem('lang') || 'zh-tw';
    setLang(savedLang);
});
