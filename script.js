// Initialize feather icons
document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Hide mobile menu when clicking a link
    const mobileMenu = document.getElementById('mobileMenu');
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Add animation classes when elements come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate-fade-in');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

// Product card functionality
class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.render();
    }
    
    render() {
        const image = this.getAttribute('image') || '';
        const title = this.getAttribute('title') || '';
        const price = this.getAttribute('price') || '0.00';
        const oldPrice = this.getAttribute('old-price') || '';
        const category = this.getAttribute('category') || '';
        const isNew = this.getAttribute('is-new') === 'true';
        const isSale = this.getAttribute('is-sale') === 'true';
        
        this.shadowRoot.innerHTML = `
            <style>
                .product-card {
                    transition: all 0.3s ease;
                }
                
                .product-image {
                    transition: transform 0.5s ease;
                }
                
                .product-actions {
                    transition: all 0.3s ease;
                    opacity: 0;
                    transform: translateY(10px);
                }
                
                .product-card:hover .product-actions {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .badge {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    padding: 4px 8px;
                    border-radius: 9999px;
                    font-size: 12px;
                    font-weight: 600;
                    color: white;
                }
                
                .new {
                    background-color: #a2d2ff;
                }
                
                .sale {
                    background-color: #e8b4b8;
                }
            </style>
            
            <div class="product-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-on-scroll">
                <div class="relative overflow-hidden">
                    <img src="${image}" alt="${title}" class="product-image w-full h-64 object-cover">
                    ${isNew ? '<span class="badge new">NEW</span>' : ''}
                    ${isSale ? '<span class="badge sale">SALE</span>' : ''}
                    <div class="product-actions absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        <button class="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-100">
                            <i data-feather="heart" class="w-4 h-4"></i>
                        </button>
                        <button onclick="addToCart({title: '${title}', price: ${price}, image: '${image}'})" class="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-100">
                            <i data-feather="shopping-cart" class="w-4 h-4"></i>
                        </button>
                        <button class="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-100">
                            <i data-feather="eye" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>
                <div class="p-4">
                    <span class="text-sm text-gray-500">${category}</span>
                    <h3 class="font-medium text-lg mb-1">${title}</h3>
                    <div class="flex items-center gap-2">
                        <span class="font-bold text-[#e8b4b8]">$${price}</span>
                        ${oldPrice ? `<span class="text-sm text-gray-400 line-through">$${oldPrice}</span>` : ''}
                    </div>
                </div>
            </div>
        `;
        
        feather.replace();
    }
}

customElements.define('product-card', ProductCard);