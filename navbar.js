class CustomNavbar extends HTMLElement {
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
                .nav-link {
                    position: relative;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #e8b4b8;
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                @media (max-width: 768px) {
                    #mobileMenu {
                        transition: all 0.3s ease;
                    }
                }
            </style>
            
            <header class="bg-white shadow-sm sticky top-0 z-40">
                <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="/" class="flex items-center gap-2">
                        <span class="font-['Playfair_Display'] text-2xl font-bold text-[#5a4a42]">Blossom</span>
                    </a>
                    
                    <div class="hidden md:flex items-center gap-8">
                        <nav class="flex items-center gap-8">
                            <a href="#" class="nav-link">Home</a>
                            <a href="#shop" class="nav-link">Shop</a>
                            <a href="#" class="nav-link">Collections</a>
                            <a href="#" class="nav-link">About</a>
                            <a href="#" class="nav-link">Contact</a>
                        </nav>
                        
                        <div class="flex items-center gap-4">
                            <button class="p-2 hover:text-[#e8b4b8] transition-colors">
                                <i data-feather="search"></i>
                            </button>
                            <button class="p-2 hover:text-[#e8b4b8] transition-colors">
                                <i data-feather="user"></i>
                            </button>
                            <button onclick="openCart()" class="p-2 hover:text-[#e8b4b8] transition-colors relative">
                                <i data-feather="shopping-bag"></i>
                                <span id="cartCount" class="absolute -top-1 -right-1 bg-[#e8b4b8] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                            </button>
                        </div>
                    </div>
                    
                    <button id="mobileMenuButton" class="md:hidden p-2">
                        <i data-feather="menu"></i>
                    </button>
                </div>
                
                <!-- Mobile Menu -->
                <div id="mobileMenu" class="hidden md:hidden bg-white absolute top-full left-0 right-0 shadow-lg py-4 px-6">
                    <nav class="flex flex-col gap-4">
                        <a href="#" class="py-2 border-b">Home</a>
                        <a href="#shop" class="py-2 border-b">Shop</a>
                        <a href="#" class="py-2 border-b">Collections</a>
                        <a href="#" class="py-2 border-b">About</a>
                        <a href="#" class="py-2 border-b">Contact</a>
                    </nav>
                    
                    <div class="flex justify-between mt-4 pt-4 border-t">
                        <button class="p-2 hover:text-[#e8b4b8] transition-colors">
                            <i data-feather="search"></i>
                        </button>
                        <button class="p-2 hover:text-[#e8b4b8] transition-colors">
                            <i data-feather="user"></i>
                        </button>
                        <button onclick="openCart()" class="p-2 hover:text-[#e8b4b8] transition-colors relative">
                            <i data-feather="shopping-bag"></i>
                            <span id="cartCountMobile" class="absolute -top-1 -right-1 bg-[#e8b4b8] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                        </button>
                    </div>
                </div>
            </header>
        `;
        
        // Mobile menu toggle
        const mobileMenuButton = this.shadowRoot.getElementById('mobileMenuButton');
        const mobileMenu = this.shadowRoot.getElementById('mobileMenu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            feather.replace();
        });
        
        feather.replace();
    }
}

customElements.define('custom-navbar', CustomNavbar);