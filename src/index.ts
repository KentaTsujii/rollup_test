import {showMessage} from './lib';
import {Greeter} from 'npm_package_test'

export function test() {
    showMessage();
    let g = new Greeter();
    g.greet('kenta');
}
