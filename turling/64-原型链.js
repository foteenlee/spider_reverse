

class AAA{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    dance() {
        console.log('dancing queen')
    }
}

class BBB extends AAA {
    constructor(name, age, score) {
        super(name, age);
        this.score = score;
    }

    intot() {
        console.log(`i am${this.name}`, `get score${this.score}`)
    }
}

var stu = new BBB('shit', 18, 9)
console.log(stu)