//Compare the code that is generated with and without the const before enum
enum Gender { Male, Female };
var gender = Gender.Female;
//-------------------------
const enum Gender2 { Male, Female };
var gender2 = Gender2.Female;