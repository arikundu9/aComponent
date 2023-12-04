import { HelloWorld } from './HelloWorld';
import { InputText } from './input/text/input-text';
try {
    customElements.define('hello-world', HelloWorld);
    customElements.define('i-text', InputText);
} catch (error) {
    console.log(error);
}
