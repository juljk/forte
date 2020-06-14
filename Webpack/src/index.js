import join from 'lodash/join';
import './style.css';
import Icon from '../assets/images/one.png';
import printMe from './print.js';

function createElem(elem) {
    return document.createElement(elem);
}

function component() {
    const element = createElem('div');
    const h1 = createElem('h1');
    const btn = createElem('button');

    // Text
    h1.classList.add('shake', 'broken-font', 'absolute');
    h1.innerHTML = join(['One', 'punch!'], ' ');
    element.append(h1);
    element.classList.add('conteiner');

    // Image
    const myIcon = new Image();
    myIcon.src = Icon;
    element.append(myIcon);

    // Button
    btn.innerHTML = 'Punch!';
    btn.onclick = printMe;
    element.append(btn);

    return element;
}

document.body.append(component());