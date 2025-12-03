class TestimonialCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.render();
    }
    
    render() {
        const name = this.getAttribute('name') || '';
        const role = this.getAttribute('role') || '';
        const text = this.getAttribute('text') || '';
        const rating = parseInt(this.getAttribute('rating')) || 0;
        
        this.shadowRoot.innerHTML = `
            <style>
                .testimonial-card {
                    transition: transform 0.3s ease;
                }
                
                .testimonial-card:hover {
                    transform: translateY(-5px);
                }
            </style>
            
            <div class="testimonial-card bg-white p-6 rounded-xl shadow-md animate-on-scroll">
                <div class="flex mb-4">
                    ${Array(5).fill().map((_, i) => `
                        <i data-feather="${i < rating ? 'star' : 'star'}" 
                           class="w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}"></i>
                    `).join('')}
                </div>
                <p class="text-gray-700 mb-6">"${text}"</p>
                <div class="flex items-center gap-4">
                    <img src="http://static.photos/people/80x80/${Math.floor(Math.random() * 100)}" 
                         alt="${name}" class="w-12 h-12 rounded-full object-cover">
                    <div>
                        <h4 class="font-bold">${name}</h4>
                        <p class="text-sm text-gray-500">${role}</p>
                    </div>
                </div>
            </div>
        `;
        
        feather.replace();
    }
}

customElements.define('testimonial-card', TestimonialCard);