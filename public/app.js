// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed:', err));
    });
}

// Funken-Generator
class SparkleGenerator {
    constructor() {
        this.container = document.getElementById('sparkles');
        this.textElement = document.querySelector('.floating-text');
        this.colors = ['#ff0000', '#ff7700', '#ffdd00', '#00ff00', '#0077ff', '#7700ff', '#ff00ff', '#ffffff', '#ffd700'];
        this.init();
    }

    init() {
        // Kontinuierliche Funken um den Text
        setInterval(() => this.createTextSparkles(), 100);

        // Zufällige Funken im Hintergrund
        setInterval(() => this.createRandomSparkle(), 200);

        // Glitzer-Regen
        setInterval(() => this.createGlitter(), 150);
    }

    getTextPosition() {
        if (!this.textElement) return null;
        const rect = this.textElement.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
            width: rect.width,
            height: rect.height
        };
    }

    createTextSparkles() {
        const pos = this.getTextPosition();
        if (!pos) return;

        // Erstelle mehrere Funken um den Text herum
        for (let i = 0; i < 3; i++) {
            const offsetX = (Math.random() - 0.5) * pos.width * 1.2;
            const offsetY = (Math.random() - 0.5) * pos.height * 1.5;

            this.createSparkle(pos.x + offsetX, pos.y + offsetY);
        }
    }

    createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';

        // Zufällige Bewegungsrichtung
        const tx = (Math.random() - 0.5) * 100;
        const ty = (Math.random() - 0.5) * 100 - 50; // Tendenz nach oben

        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkle.style.setProperty('--tx', `${tx}px`);
        sparkle.style.setProperty('--ty', `${ty}px`);

        // Zufällige Farbe
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        sparkle.style.setProperty('--color', color);
        sparkle.querySelector

        this.container.appendChild(sparkle);

        // Entferne nach Animation
        setTimeout(() => sparkle.remove(), 2000);
    }

    createRandomSparkle() {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        if (Math.random() > 0.5) {
            this.createStarSparkle(x, y);
        } else {
            this.createSparkle(x, y);
        }
    }

    createStarSparkle(x, y) {
        const star = document.createElement('div');
        star.className = 'star-sparkle';
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        star.style.filter = `drop-shadow(0 0 5px ${color})`;

        this.container.appendChild(star);
        setTimeout(() => star.remove(), 1500);
    }

    createGlitter() {
        const pos = this.getTextPosition();
        if (!pos) return;

        const glitter = document.createElement('div');
        glitter.className = 'glitter';

        // Glitzer vom Text aus
        const x = pos.x + (Math.random() - 0.5) * pos.width;
        const y = pos.y + (Math.random() - 0.5) * pos.height;

        glitter.style.left = `${x}px`;
        glitter.style.top = `${y}px`;

        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        glitter.style.background = color;
        glitter.style.boxShadow = `0 0 5px ${color}, 0 0 10px ${color}`;

        this.container.appendChild(glitter);
        setTimeout(() => glitter.remove(), 3000);
    }
}

// Initialisierung
document.addEventListener('DOMContentLoaded', () => {
    new SparkleGenerator();

    // Extra Effekt: Funken bei Mausbewegung
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.7) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = `${e.clientX}px`;
            sparkle.style.top = `${e.clientY}px`;
            sparkle.style.setProperty('--tx', `${(Math.random() - 0.5) * 50}px`);
            sparkle.style.setProperty('--ty', `${-Math.random() * 50}px`);
            document.getElementById('sparkles').appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 2000);
        }
    });

    // Touch support für mobile Geräte
    document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        if (Math.random() > 0.5) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = `${touch.clientX}px`;
            sparkle.style.top = `${touch.clientY}px`;
            sparkle.style.setProperty('--tx', `${(Math.random() - 0.5) * 50}px`);
            sparkle.style.setProperty('--ty', `${-Math.random() * 50}px`);
            document.getElementById('sparkles').appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 2000);
        }
    });
});

console.log('🇺🇦 Це справді так? 🇺🇦');
