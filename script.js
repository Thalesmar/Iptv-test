document.addEventListener('DOMContentLoaded', () => {
    // Mobile Nav Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navbar = document.querySelector('.navbar');
    
    mobileNavToggle?.addEventListener('click', () => {
        mobileNavToggle.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Connection Toggle
    const connectionButtons = document.querySelectorAll('.connection-toggle button');
    const prices = {
        single: {
            '1month': { amount: '14.99', original: '16.99' },
            '3month': { amount: '25.99', original: '34.99' },
            '6month': { amount: '34.99', original: '47.99' },
            '12month': { amount: '49.99', original: '69.99' }
        },
        multiple: {
            '1month': { amount: '19.99', original: '24.99' },
            '3month': { amount: '39.99', original: '49.99' },
            '6month': { amount: '59.99', original: '79.99' },
            '12month': { amount: '89.99', original: '119.99' }
        }
    };

    connectionButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            connectionButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update prices based on connection type
            const type = button.dataset.plan;
            updatePrices(type);
        });
    });

    function updatePrices(type) {
        const cards = document.querySelectorAll('.pricing-card');
        const durations = ['1month', '3month', '6month', '12month'];
        
        cards.forEach((card, index) => {
            const duration = durations[index];
            const priceData = prices[type][duration];
            
            const amountEl = card.querySelector('.amount');
            const originalEl = card.querySelector('.original');
            
            if (amountEl && originalEl && priceData) {
                amountEl.textContent = priceData.amount;
                originalEl.textContent = `£${priceData.original}`;
            }
        });
    }

    // Order Buttons
    const orderButtons = document.querySelectorAll('.order-button, .order-button-1');
    orderButtons.forEach(button => {
        button.addEventListener('click', () => {
            const plan = button.closest('.pricing-card').querySelector('h3').textContent;
            const price = button.closest('.pricing-card').querySelector('.amount').textContent;
            
            // Replace with your order processing logic
            alert(`Processing order for ${plan} at £${price}`);
            // You can redirect to a payment page or open a modal here
        });
    });

    // Header Scroll Behavior
    let lastScroll = 0;
    const header = document.querySelector('.site-header');
    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('header-hidden', 'header-visible');
            return;
        }
        
        if (Math.abs(currentScroll - lastScroll) < 10) return;
        
        if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
            header.classList.add('header-hidden');
            header.classList.remove('header-visible');
        } else {
            header.classList.remove('header-hidden');
            header.classList.add('header-visible');
        }
        
        lastScroll = currentScroll;
    });
});
