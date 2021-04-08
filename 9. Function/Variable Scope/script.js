// scope = bagaimana sebuah variabel dapat diakses dalam program
// block scope = 
// function scope =

// global scope / window scope (variabel global)
var a = 1; // deklarasi variabel global

function tes(a) { 
    console.log(a); //variabel lokal
}

// 2 2nya akan mengacu ke variabel global
tes(a); 
console.log(a);