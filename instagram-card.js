class InstagramCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.render();
    }
    
    render() {
        const image = this.getAttribute('image') || '';
        const likes = this.getAttribute('likes') || '0';
        const comments = this.getAttribute('comments') || '0';
        
        this.shadowRoot.innerHTML = `
            <style>
                .instagram-card {
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.3s ease;
                }
                
                .instagram-card:hover {
                    transform: scale(1.03);
                }
                
                .instagram-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.4);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .instagram-card:hover .instagram-overlay {
                    opacity: 1;
                }
            </style>
            
            <a href="#" class="instagram-card block rounded-lg overflow-hidden aspect-square animate-on-scroll">
                <img src="${image}" alt="Instagram post" class="w-full h-full object-cover">
                <div class="instagram-overlay text-white">
                    <div class="flex items-center gap-2 mb-1">
                        <i data-feather="heart" class="w-5 h-5"></i>
                        <span>${likes}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <i data-feather="message-square" class="w-5 h-5"></i>
                        <span>${comments}</span>
                    </div>
                </div>
            </a>
        `;
        
        feather.replace();
    }
}

customElements.define('instagram-card', InstagramCard);