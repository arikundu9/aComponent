export class InputText extends HTMLElement /* implements HTMLInputElement */ {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<input type="text"/>';
    }
}
