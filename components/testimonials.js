// Define a new class extending HTMLElement
class Testimonials extends HTMLElement {
    constructor() {
        super(); // Always call super() first in constructor
        // Create a shadow root (optional)
        this.attachShadow({ mode: 'open' });
    }
    async connectedCallback() {

        this.shadowRoot.innerHTML = `
            <style>

                @import url('components/main.css');

                #testimonial {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin: 1rem;
                }

                .testimonial_img {
                    width: 5rem; 
                    height: auto;
                }

                .testimonial_text {
                    margin-left: 1rem;
                }
            </style>
            
            <div class="section">
                <h1 class="title_back">Testimonials</h1>
                <div id="testimonial">
                    <img class="testimonial_img" src="assets/default_image.jpg">
                    <p class="testimonial_text">it was great! Something about how the windows were installed very nicely</p>
                </div>
                <div id="testimonial">
                    <img class="testimonial_img" src="assets/default_image.jpg">
                    <p class="testimonial_text">it was great! Something about how the windows were installed very nicely</p>
                </div>
                <div id="testimonial">
                    <img class="testimonial_img" src="assets/default_image.jpg">
                    <p class="testimonial_text">it was great! Something about how the windows were installed very nicely</p>
                </div>
            </div>
        `;
    }
}

// Register the custom element
customElements.define('testimonials-div', Testimonials);