const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector,
    this.height = height,
    this.width = width,
    this.bg = bg,
    this.fontSize = fontSize 
    
    //можно так создавать, но лучше через прототип
    // this.method = function name(params) {}
}

//новый метод лучше вешать на прототип, так как выигрываем
//в производительности. но есть минус:
//нельзя юзать скрытые переменные (внутри конструктора объявленные)
DomElement.prototype.createElem = function () {
    const body = document.querySelector('body');
    let newElem;
    if (this.selector[0] === '.') {
        newElem = document.createElement('div');
        newElem.className = this.selector.slice(1);
        body.append(newElem);
    } else if (this.selector[0] === '#') {
        newElem = document.createElement('p');
        newElem.id = this.selector.slice(1);
        body.append(newElem);
    }

    newElem.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};
    `;

    newElem.textContent = `Всем котикам фронтендерам мяу!`;
}

const elem1 = new DomElement('.block', '100px', '255px', 'red', '14px');
const elem2 = new DomElement('#best', '200px', '300px', 'green', '24px');

elem1.createElem();
elem2.createElem();