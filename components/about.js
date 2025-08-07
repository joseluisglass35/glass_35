// Define a new class extending HTMLElement
class About extends HTMLElement {
    constructor() {
        super(); // Always call super() first in constructor
        // Create a shadow root (optional)
        this.attachShadow({ mode: 'open' });
    }
    async connectedCallback() {

        this.shadowRoot.innerHTML = `
            <style>

                @import url('components/main.css');

                #intro_info {
                    margin: 3rem;
                }

                p {
                    margin: 0;
                }

            </style>
                    
            <div id="intro_info">

                <h1 class="title_back">From Big Jobs to Your Job — The Story Behind Glass 35</h1>
                <p>
                    Before Glass 35, there were decades of hard work behind the scenes.
                </p>
                <br>
                <p>
                    Our founder spent years working for some of the biggest names in the glass industry, handling everything from residential repairs to large-scale commercial installations. He mastered the craft by doing the hard jobs, learning the details, and building a reputation for clean, reliable work.
                </p>
                <br>
                <p>
                    In 2024, he decided to take everything he’d learned and build something of his own — a company that offers the same high-level expertise, without the high overhead. That’s how Glass 35 was born.
                </p>
                <br>
                <p>
                    Today, when you hire Glass 35, you’re not getting a trainee or a subcontractor. You’re getting the guy who’s been doing this for over 30 years — someone who knows the work, values your time, and gets it done right the first time.
                </p>
                <br>
                <p>
                    We’re not here to upsell. We’re here to fix the problem, deliver the quality, and earn your trust.
                </p>
            </div>
        `;
    }
}

// Register the custom element
customElements.define('about-div', About);