const test = (input: string) => "Name: " + input;

const age = (age: number) => "Age: " + age;
console.log(test("Slayer"));
console.log(age(12));


let ageVal: number = 29;
ageVal = 1;
console.log("This is the end");

function add(x: number, y: number): number {
    console.log(`X: ${x} Y: ${y}`);
    if (x === 0)
        throw new Error("This is wrong")
    return x + y;
}

try{
    console.log(add(0, 20));
}catch (e){
    console.error(e);
}
