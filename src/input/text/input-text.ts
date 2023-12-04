export class InputText extends HTMLElement /* implements HTMLInputElement */ {
    innerElement: HTMLInputElement = document.createElement('input');
    constructor() {
        super();
        this.innerElement.type = 'text';
    }
    static get observedAttributes() {
        return ['data', 'name', 'type'];
    }
    connectedCallback() {
        this.appendChild(this.innerElement!);
    }
    attributeChangedCallback(name: string, oldValue: any, newValue: any) {
        switch (name) {
            case 'name':
                this.innerElement.setAttribute('name', name);
                break;
        }
    }
}
