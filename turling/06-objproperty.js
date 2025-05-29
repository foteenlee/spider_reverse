
user = {
    age: '123'
}

aa = user.age


Object.defineProperty(user, 'age', {
    get: function () {
        console.log('get the age of user');
        return aa;
    },
    set: function (newval) {
        console.log('set the age of user', newval);
        aa = newval;
    }
})

console.log(user.age);
user.age = 234;