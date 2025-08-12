// Define a new class extending HTMLElement
class Services extends HTMLElement {
    constructor() {
        super(); // Always call super() first in constructor
        // Create a shadow root (optional)
        this.attachShadow({ mode: 'open' });
    }
    async connectedCallback() {

        this.shadowRoot.innerHTML = `
            <style>

                @import url('components/main.css');

                #services_section {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    width: 100%;
                }

                .service{
                    margin: 1rem;

                }

                .services_img {
                    width: 100%; /* Take full width of the grid cell */
                    height: auto; /* Maintain aspect ratio */
                }

            </style>
            <div class="section">

                <h1 class="title_back">Services</h1>
                <div id="services_section">
                    <div class="service">
                        <img class="services_img" src="assets/4c7f3a53-aafd-4103-821e-b53d2102c813.JPG">
                    </div>
                    <div class="service">
                        <img class="services_img" src="assets/b2f6b523-c97b-48fc-8a5a-9ff4a82257ca.JPG">
                    </div>
                    <div class="service">
                        <img class="services_img" src="assets/240dd46e-0420-4252-99ea-8ecb2f10f3a3.JPG">
                    </div>
                </div>
                <br>
                <p>We provide the following services with the utmost quality and professionalism:</p>
                <ul>
                    <li>Broken Windows</li>
                    <li>Showers</li>
                    <li>Glass Storefronts</li>
                    <li>Mirrors</li>
                </ul>

                <p>Call us to get a free quote! We'd love to meet you and see how we can help</p>

                <p>Or fill out a request for a quote <a id="forms_link" href="https://docs.google.com/forms/d/e/1FAIpQLScK4D_RnFWVg4ln7hCepnZbL1RQlXHXmJGJlWwnbsZGDsD4Xw/viewform?usp=dialog">here.</a></p>
            </div>
        `;
    }
}

// Register the custom element
customElements.define('services-div', Services);