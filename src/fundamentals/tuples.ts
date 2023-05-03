export {};

// Tuples (Fixed length array) // Tuples are useful when we have only two values. Like key value pairs
let user: [number, string] = [1, "slayer",];
console.log("This is tuple: ", user[0], user[1]);
user.forEach(value => console.log("Tuple: ", value));