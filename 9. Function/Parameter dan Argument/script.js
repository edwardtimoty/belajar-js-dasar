// parameter = variabel yang ditulis didalam kurung pada saat function dibuat,
// digunakan untuk menampung nilai yang dikirimkan saat function dipanggil
// ==========================================================================
// argument = nilai yang dikirimkan ke parameter saat fungsi dipanggil
// ==========================================================================
// arguments (sebuah variabel / variabel yang tidak terlihat) = array yang berisi nilai yang dikirimkan saat fungsi dipanggil

// =============================================================
// jika parameter lebih sedikit dari argument,
// maka argument kelebihannya akan diabaikan
// =============================================================
// jika parameter lebih banyak dari argument,
// maka parameter kelebihannya akan diisi dengan nilai undefined
// =============================================================

// a dan b = parameter
function tambah(a,b) {
    return a + b;
}

// 2 dan 3 = argument
// var hasil = tambah(2,3);
// console.log(hasil);

// parseInt = merubah tipe data menjadi integer
// var a = parseInt(prompt('Masukkan Nilai 1 : '));
// var b = parseInt(prompt('Masukkan Nilai 2 : '));
// var hasil = tambah(a,b);

// function kali(a,b) {
//     return a * b;
// }

// var hasil = kali(tambah(1,2), tambah(3,4));
// console.log(hasil);

// sudo variabel
function tambah() {
    var hasil = 0;
    for(var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1,2,3);
console.log(coba);