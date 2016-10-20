let sum = (a, b = 6) => (a + b);

let square = (b) => {
    return b * b;
};

let variable = 8;

class MyClass {
    constructor(credentials) {
        this.name = credentials.name;
        this.enrollmentNo = credentials.enrollmentNo
    }
    getName() {
        return this.name;
    }
}

export { sum, square, variable, MyClass };