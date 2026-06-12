// Floating hearts animation effect

function initHearts() {
    const container = document.getElementById('hearts-bg');
    if (!container) return;
    
    const hearts = ['♥', '♡', '✨', '♦'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '-20px';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.color = ['#ff69b4', '#ff1493', '#ff69b4', '#ffb6c1'][Math.floor(Math.random() * 4)];
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1';
        heart.style.animation = `float ${Math.random() * 3 + 3}s linear forwards`;
        
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 4000);
    }
    
    // Add CSS animation if not already present
    if (!document.querySelector('style[data-hearts]')) {
        const style = document.createElement('style');
        style.setAttribute('data-hearts', 'true');
        style.textContent = `
            @keyframes float {
                to {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Create hearts periodically
    setInterval(createHeart, 300);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initHearts);
