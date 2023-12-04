export class InputText extends HTMLElement /* implements HTMLInputElement */ {
    innerElement: string | Node | undefined;
    constructor() {
        super();
        this.innerElement = new HTMLInputElement();
    }
    connectedCallback() {
        this.append(this.innerElement!);
    }
}
