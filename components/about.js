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

                <h1 class="title_back">4 Season Windows — Our Story</h1>
                <p>
                    It all started with a single pane of glass in the early 1990s. Back then, our founder was just a young tradesman with a truck, a toolbox, and a drive to do things right. He learned the business the old-school way — job by job, hand by hand, in neighborhoods across South Texas. Over time, his reputation grew: fast work, clean edges, and no-nonsense service. As the years rolled on and the city of San Antonio expanded along the I-35 corridor, so did his experience — from simple residential windows to full commercial installations and high-end custom projects. In 2024, that decades-long journey evolved into something new: Glass 35. 
                </p>
                <br>
                <p>Named after the very highway that helped shape our service routes and our work ethic, Glass 35 stands for three things:</p>
                <ul>
                    <li>Strength – in our materials and our word</li>
                    <li>Speed – because your time matters</li>
                    <li>Texas Pride – we’re from here, and we work like it 🇨🇱</li>
                </ul>
                <p>
                    Today, Glass 35 blends over 30 years of experience with modern tools and a team of reliable professionals. Whether it’s a broken window, a dream shower, or a full glass storefront, we’re here to get the job done — fast, fair, and done right the first time. Because glass should be the last thing you worry about. 
                </p>
            </div>
        `;
    }
}

// Register the custom element
customElements.define('about-div', About);