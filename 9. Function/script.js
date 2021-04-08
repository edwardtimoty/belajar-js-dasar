// var a = 8;
// var b = 3;
// var vA;
// var vB;
// var total;

// vA = a * a * a;
// vB = b * b * b;

// total = vA+vB;

// console.log(total);

//membuat function
//deklarasi function
function jumlahVolumeDuaKubus(a,b) {
    var total, volumeA, volumeB;

    volumeA  = a * a * a;
    volumeB  = b * b * b;

    total = volumeA + volumeB; 
    // mengembalikan nilai
    return total; 
}

// 8 = sebagai parameter a , 3 = sebagai parameter b
// menjalankan function
alert(jumlahVolumeDuaKubus(8,3)); 

