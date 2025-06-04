// 链式调用案例

class Calculator {
    constructor(num) {
        this.value = num;
    }

    add(num) {
        this.value += num;
        return this;
    }

    sub(num) {
        this.value -= num;
        return this;
    }

    multi(num) {
        this.value *= num;
        return this;
    }

    divi(num) {
        this.value /= num;
        return this;
    }

    getValue() {
        console.log(this.value);
        return this;
    }
}

const calc = new Calculator(0);

calc.add(5).multi(3).divi(5).sub(1).multi(8).getValue();
