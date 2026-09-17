const DomElement = function (selector, height, width, bg, fontSize, position) {
    this.selector = selector,
    this.height = height,
    this.width = width,
    this.bg = bg,
    this.fontSize = fontSize,
    this.position = position
}

DomElement.prototype.createElem = function () {
    const body = document.querySelector('body');
    let newElem;
    if (this.selector[0] === '.') {
        newElem = document.createElement('div');
        newElem.className = this.selector.slice(1);
    } else if (this.selector[0] === '#') {
        newElem = document.createElement('p');
        newElem.id = this.selector.slice(1);
    }

    newElem.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};
        position: ${this.position};
    `;

    newElem.textContent = `Всем котикам фронтендерам мяу!`;

    body.append(newElem);

    return newElem;
}

document.addEventListener('DOMContentLoaded', () => {
    const square = new DomElement('.block', '100px', '100px', 'red', '14px', 'absolute');
    const squareElem = square.createElem();

    squareElem.style.top = '0px';
    squareElem.style.left = '0px';

    document.addEventListener('keydown', (e) => {
        let top = parseInt(squareElem.style.top);
        let left = parseInt(squareElem.style.left);

        if (e.key === 'ArrowUp') {
            squareElem.style.top = `${top - 10}px`
        } else if (e.key === 'ArrowDown') {
            squareElem.style.top = `${top + 10}px`
        } else if (e.key === 'ArrowLeft') {
            squareElem.style.left = `${left - 10}px`
        } else if (e.key === 'ArrowRight') {
            squareElem.style.left = `${left + 10}px`
        }
    })
})