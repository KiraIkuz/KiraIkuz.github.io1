console.log("Hello there.");
console.log("General Kenobi!");

let x = 2;
let y = 3;

console.log(y);

let add = y + x;
console.log(add);

let sub = y - x;
console.log(sub);

let result = Math.pow(x , y);
console.log(result);

function isLessThan(result) {
    return result > 10;
}

console.log(isLessThan(result));

let bean = {
    breed : "ragdoll cat", 
    baby: "big chungus", 
    fluffy: "very fluffy", 
    output: function() {

        return `Beanie boy is a ${this.breed} that is a ${this.fluffy} ${this.baby}`

    }
}

console.log(bean.output());

let someArray = ["Ishrat", "Is", "An", "Amazing", "Teacher"];

console.log(someArray[3]);

for (let i = 0; i < someArray.length; ++i) {
    console.log(someArray[i]);
}

console.log("ifStatement is false")