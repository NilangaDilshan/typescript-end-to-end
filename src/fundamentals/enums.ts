export {};

// Enums

//This will automatically get the index preceding from 0, 1, 2
enum DefaultSize {Small, Medium, Large};
console.log("Default Enums: ", DefaultSize);

//This will automatically get the index preceding from 1, 2, 3
enum DefinedSize {Small = 1, Medium, Large};
let mySize: DefinedSize = DefinedSize.Medium;
console.log("Defined Enums: ", DefinedSize);
console.log("MySize: ", mySize);

enum SizeChar {Small = 's', Medium = 'm', Large = 'l'};
console.log("String Value Enums: ", SizeChar);

/*Const enums can only use constant enum expressions and unlike regular enums they are completely removed
during compilation. Const enum members are inlined at use sites. This is possible since const enums cannot
have computed members.*/
const enum ConstantSize {Small, Medium, Large};
console.log("Constant Enum: ", ConstantSize.Small, ConstantSize.Medium, ConstantSize.Large);