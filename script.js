class First {
    hello() {
        console.log(`Привет! Я метод родителя!`)
    }
}

class Second extends First {
    hello() {
        super.hello()
        console.log(`А я наследуемый метод!`)
    }
}

const test = new Second()
test.hello()



//конспект

// class Bobr {
//     constructor(x, y) {
//         this.x = x
//         this.y = y
//         Bobr.incremCount()
//     }

//     //статические переменные доступны только для общего класса
//     static count = 0

//     //такие статические методы не принадлежат самому объекту и следовательно не увеличивают его вес
//     //объект не будет занимать много места
//     static getCount() {
//         return Bobr.count
//     }

//     static incremCount() {
//         Bobr.count++
//     }

//     //теперь метод привязывается сразу к прототипу и имеет достум к скрытым (которые объявлены внутри класса) переменным
//     sayHi() {
//         console.log(`hi hi ${this.x} ${this.y}`);
//     }
// }

// //наледование. к примеру классс детёныша бобра
// class Baby extends Bobr {
//     //если написать только так, то будет ошибка. надо связывать конструкторы методом super()
//     // constructor(q = []) {
//     //     this.q = q
//     // }

//     constructor(x, y, q = []) {
//         super(x, y) //связывающее звено между классом наследником и классоми прототипом
//         this._q = q
//     }

//     test() {
//         super.sayHi() //еще можно через супер обращаться к методу родительского класса
//     }

//     //ГЕТТЕРЫ И СЕТТЕРЫ

//     //геттеры созданы только для чтения!

//     //так нельзя. геттеры работают, если в имени есть знак _  (вместо this.q = q сделаем this._q = q)
//     // get q() {
//     //     return this.q
//     // }

//     get q() {
//         return this._q
//     }

//     //через сеттер мы полностью контролируем процесс записи в наше свойство
//     set q(str) {
//         this.q.push(str)
//     }
// }

// const mi = new Bobr(78, 98)
// const mi1 = new Bobr(6, 20)

// const bobrik = new Baby('qwe', 2)
// bobrik.q = 'свойство' // добавили при помощи сеттера

// console.log(bobrik)