document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.connection-toggle button');
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    // Define pricing data
    const prices = {
        single: {
            '1month': { regular: '14.99', original: '16.99' },
            '3month': { regular: '25.99', original: '34.99' },
            '6month': { regular: '34.99', original: '47.99' },
            '12month': { regular: '49.99', original: '69.99' }
        },
        multiple: {
            '1month': { regular: '19.99', original: '24.99' },
            '3month': { regular: '39.99', original: '49.99' },
            '6month': { regular: '59.99', original: '79.99' },
            '12month': { regular: '89.99', original: '119.99' }
        }
    };

    // Update prices function
    function updatePrices(connectionType) {
        pricingCards.forEach((card, index) => {
            const duration = ['1month', '3month', '6month', '12month'][index];
            const priceElement = card.querySelector('.amount');
            const originalElement = card.querySelector('.original');
            
            if (priceElement && originalElement) {
                priceElement.textContent = prices[connectionType][duration].regular;
                originalElement.textContent = `£${prices[connectionType][duration].original}`;
            }
        });
    }

    // Toggle button click handler
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const connectionType = button.dataset.plan;
            updatePrices(connectionType);
        });
    });

    // Initialize with single connection prices
    updatePrices('single');
});
