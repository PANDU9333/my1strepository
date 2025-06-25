let age = 18;
if (age < 18) {
    console.log("you are a minor.");
}
else if (age >= 18 && age < 65) {
    console.log("you are an adult.");
}
else {
    console.log("You are a senior citizen.");
}
console.log("/n");


let day = 7;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("friady");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("Wrong day");

}

for (let i = 0; i < 10; i++) {
    console.log("iteration",i);
}

console.log("/n");


let j = 0;
while (j<5) {
    console.log("While loop Iteration:", j);
    j++;
}
 
console.log("/n");
let k = 0;
do {
    console.log("Do while loop iteration:", k);
    k++;
}while (k<5); 
