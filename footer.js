class CustomFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.render();
    }
    
    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .footer-link:hover {
                    color: #e8b4b8;
                }
                
                .social-icon {
                    transition: all 0.3s ease;
                }
                
                .social-icon:hover {
                    transform: translateY(-3px);
                    color: #e8b4b8;
                }
            </style>
            
            <footer class="bg-[#5a4a42] text-white py-12 px-6 md:px-16">
                <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 class="font-['Playfair_Display'] text-xl font-bold mb-4">Blossom Boutique</h3>
                        <p class="mb-4 text-gray-300">Pretty in pastel fashion for every occasion. Designed with love and attention to detail.</p>
                        <div class="flex gap-4">
                            <a href="#" class="social-icon"><i data-feather="instagram"></i></a>
                            <a href="#" class="social-icon"><i data-feather="facebook"></i></a>
                            <a href="#" class="social-icon"><i data-feather="twitter"></i></a>
                            <a href="#" class="social-icon"><i data-feather="pinterest"></i></a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="font-bold mb-4">Shop</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="footer-link">New Arrivals</a></li>
                            <li><a href="#" class="footer-link">Best Sellers</a></li>
                            <li><a href="#" class="footer-link">Sale Items</a></li>
                            <li><a href="#" class="footer-link">Gift Cards</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="font-bold mb-4">Information</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="footer-link">About Us</a></li>
                            <li><a href="#" class="footer-link">Contact</a></li>
                            <li><a href="#" class="footer-link">Shipping Policy</a></li>
                            <li><a href="#" class="footer-link">Returns & Exchanges</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="font-bold mb-4">Contact</h4>
                        <address class="not-italic">
                            <p class="mb-2">123 Fashion Street</p>
                            <p class="mb-2">New York, NY 10001</p>
                            <p class="mb-2">hello@blossomboutique.com</p>
                            <p class="mb-2">+1 (555) 123-4567</p>
                        </address>
                    </div>
                </div>
                
                <div class="max-w-7xl mx-auto border-t border-gray-600 mt-12 pt-8 text-center text-gray-300">
                    <p>&copy; ${new Date().getFullYear()} Blossom Boutique. All rights reserved.</p>
                </div>
            </footer>
        `;
        
        feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);