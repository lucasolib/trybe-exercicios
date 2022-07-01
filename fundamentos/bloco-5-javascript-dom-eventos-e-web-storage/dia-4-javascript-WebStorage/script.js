let preferencias = [];

function bgColor(color) {
    let body = document.querySelector('body');
    body.style.backgroundColor = color;
    preferencias.push(color);
}
bgColor('antiquewhite');

function color(color) {
    let body = document.querySelector('body');
    body.style.color = color;
    preferencias.push(color);
}
color('black');

function fontSize(size) {
    let body = document.querySelector('body');
    body.style.fontSize = size;
    preferencias.push(size);
}
fontSize ('18px');

function fontFamily(font) {
    let body = document.querySelector('body');
    body.style.fontFamily = font;
    preferencias.push(font);
}
fontFamily('serif');

function lineHeigth(size) {
    let body = document.querySelector('body');
    body.style.lineHeight = size;
    preferencias.push(size);
}
lineHeigth('20px');

localStorage.setItem('pref' ,JSON.stringify(preferencias));