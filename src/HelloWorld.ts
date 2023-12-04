export class HelloWorld extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<h1 style="margin:0;">Hello World.</h1>`;
    }
}
