// Define a new class extending HTMLElement
class TopNav extends HTMLElement {
    constructor() {
        super(); // Always call super() first in constructor
        // Create a shadow root (optional)
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {

        this.shadowRoot.innerHTML = `
        <style>
            
            @import url('components/main.css');

            header {
                box-sizing: border-box;
                display: grid;
                grid-template-columns: .2fr 1fr .1fr;

                position: fixed;
                background-color: var(--tercerary);
                color: var(--text_dark);
                width: 100%;

                box-shadow: 4px 4px 10px rgba(150, 150, 150, 0.3);
            }

            nav {
                box-sizing: border-box;
                display: grid;
                align-items: center;
                justify-items: center;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                z-index: 100;

            }


            .nav_item {
                text-decoration: none;
                color: var(--text_dark);
                font-size: 1.4rem;
                width: 100%;
                text-align: center;
            }

            #top_logo {
                width: 10rem;
                height: 10rem;
            }

            #phone_section {
                display: flex;
                justify-content: center;
                align-items: center;

                color: var(--tercerary);
                background-color: var(--secondary);
                padding: .5rem;
                border-radius: 10px;

                margin-top: 1rem;
            }

            #phone_link {
                margin-left: .4rem;
                text-decoration: none;
                color: var(--tercerary);
                font-size: .8rem;
            }

            #contact_nav_link {
                color: var(--tercerary);
                background-color: var(--secondary);
                padding: .8rem;
                border-radius: 10px;
            }

            #top_spacer {
                height: 8rem;
            }

            #hamburger {
                display: none;
            }



            /* CSS rules for all devices that are not desktops (phones + tablets) */
            @media (max-width: 1024px) {

                #hamburger {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }


                header {
                    grid-template-columns: 1fr 1fr;
                    
                }

                nav {
                    margin-left: 1rem;
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                }

                .nav_item {
                    text-align: start;
                    margin: 1rem;
                }

                #contact_nav_link {
                    background-color: var(--primary);
                    color: var(--text_dark);
                    padding: 0;
                    border-radius: 0px;
                    margin: 0;
                }

                #contact_nav {
                    margin: 1rem;
                }
                
                #phone_section {
                    display: none;
                }

                .main_nav_closed {
                    overflow: hidden; /* To hide overflowing content during transition */
                    opacity: 0;
                    max-height: 0;
                    transition: opacity 0.5s ease, max-height 0.5s ease;
                    display: flex;
                }

                .main_nav_open {
                    opacity: 1;
                    max-height: 500px;
                }
            }
        </style>
        <header>
            <a href="/">
                <img id="top_logo" src="assets/glass_35_logo.png">
            </a>
            <div id='hamburger'>
                <svg id='hamburger_svg' xmlns="https://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </div>
            <nav id='main_nav' class='main_nav_closed'>
                <a class="nav_item spaced_title" href="/">Home</a>
                <a class="nav_item spaced_title" href="Services.html">Services</a>
                <a class="nav_item spaced_title" href="About.html">About</a>
                <div id="contact_nav">
                    <a id="contact_nav_link" class="nav_item spaced_title" href="/#contact">Contact</a>
                    <div id="phone_section">
                        <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>
                        <a id="phone_link" type="Phone" href="tel:830-822-5972">830-822-5972</a>
                    </div>
                </div>
            </nav>
            <div></div>

        </header>

        <div id="top_spacer"></div>


        `;
        if (window.innerWidth <= 1024) {
            const main_nav = this.shadowRoot.querySelector('#main_nav');
            const nav_items = this.shadowRoot.querySelectorAll('.nav_item');
            nav_items.forEach(link => {
                link.addEventListener('click', () => {
                    main_nav.classList.remove('main_nav_open');
                });
            });


            const hamburger = this.shadowRoot.querySelector('#hamburger');
            hamburger.addEventListener('click', () => {
                main_nav.classList.toggle('main_nav_open');
            });
        }
    }


    // disconnectedCallback() {
    //     const main_nav = this.shadowRoot.querySelector('#main_nav');
    //     const nav_items = this.shadowRoot.querySelectorAll('.nav_item');
    //     nav_items.forEach(link => {
    //         link.removeEventListener('click', () => {
    //             main_nav.style.display = 'none';
    //             console.log("hi");
    //         });
    //     });
    // }
}

// Register the custom element
customElements.define('top-nav', TopNav);