
class MyComp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    async connectedCallback() {

        this.shadowRoot.innerHTML = `
            <style>

                @import url('components/main.css');

                #main_section {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }

            </style>
            <div id="main_section">
                <h1>Services</h1>
                <p>some text</p>
            </div>
        `;
    }
}

customElements.define('mycomp-div', MyComp);